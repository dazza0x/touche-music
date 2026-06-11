# Touché Music — salon library sync
# Runs daily on the salon PC (and at every boot) via the "Touche Music
# Sync" scheduled task. bootstrap.ps1 downloads the latest copy of this
# script from the website before each run, so fixes pushed to the repo
# reach the salon without anyone visiting.
#
# What it does: reads playlists.js from music.touchesm.com, downloads
# any new tracks, removes ones no longer listed, rewrites the genre
# .m3u playlists, and asks a Sonos speaker to re-index the library.

$ErrorActionPreference = 'Stop'
$root = 'C:\ToucheMusic'
$site = 'https://music.touchesm.com'
$log  = "$root\sync-log.txt"

function Log($m){ Add-Content -Path $log -Value ("{0}  {1}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $m) }

# optional healthchecks.io alerting — paste a ping url into healthcheck.txt
$healthcheck = ''
if (Test-Path "$root\healthcheck.txt") { $healthcheck = (Get-Content "$root\healthcheck.txt" -TotalCount 1).Trim() }

try {
  [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
  New-Item -ItemType Directory -Force -Path "$root\audio" | Out-Null

  # fetch the current playlist file (cache-busted past the Pages cache)
  $js = (Invoke-WebRequest "$site/playlists.js?t=$((Get-Date).Ticks)" -UseBasicParsing).Content

  # parse — playlists.js is machine-maintained, one track per line
  $playlists = @()
  $current = $null
  foreach ($line in $js -split "`n") {
    if ($line -match 'name:\s*"([^"]+)"') {
      $current = [pscustomobject]@{ Name = $Matches[1]; Tracks = [System.Collections.ArrayList]@() }
      $playlists += $current
    }
    elseif ($line -match 'title:\s*"([^"]+)".*artist:\s*"([^"]+)".*url:\s*"([^"]+)"') {
      if ($current) {
        # urls may be repo-relative (audio/x.mp3) or absolute (the
        # Cloudflare R2 domain) — keep the same local filename either way
        $u = $Matches[3]
        [void]$current.Tracks.Add([pscustomobject]@{
          Title  = $Matches[1]
          Artist = $Matches[2]
          File   = ($u -split '/')[-1]
          Url    = $(if ($u -match '^https?://') { $u } else { "$site/$u" })
        })
      }
    }
  }
  $total = ($playlists | ForEach-Object { $_.Tracks.Count } | Measure-Object -Sum).Sum
  if (-not $playlists -or $total -eq 0) { throw 'playlists.js parsed to nothing - aborting before touching local files' }

  # download any tracks we do not have yet
  $allTracks = $playlists | ForEach-Object { $_.Tracks }
  $wanted = $allTracks | ForEach-Object { $_.File } | Sort-Object -Unique
  $added = 0
  foreach ($f in $wanted) {
    $to = "$root\audio\$f"
    if (-not (Test-Path $to)) {
      $u = ($allTracks | Where-Object { $_.File -eq $f } | Select-Object -First 1).Url
      Invoke-WebRequest $u -OutFile $to -UseBasicParsing
      $added++
    }
  }

  # remove tracks no longer in any playlist
  $removed = 0
  Get-ChildItem "$root\audio" -Filter '*.mp3' | Where-Object { $_.Name -notin $wanted } |
    ForEach-Object { Remove-Item $_.FullName -Force; $removed++ }

  # rewrite one .m3u per genre (Sonos shows these as Imported Playlists)
  $keep = @()
  foreach ($pl in $playlists) {
    $safe = ($pl.Name -replace '[\\/:*?"<>|]', '-')
    $keep += "$safe.m3u"
    $lines = @('#EXTM3U')
    foreach ($t in $pl.Tracks) {
      $lines += "#EXTINF:-1,$($t.Artist) - $($t.Title)"
      $lines += "audio\$($t.File)"
    }
    Set-Content -Path "$root\$safe.m3u" -Value ($lines -join "`r`n") -Encoding UTF8
  }
  Get-ChildItem "$root" -Filter '*.m3u' | Where-Object { $_.Name -notin $keep } | Remove-Item -Force

  # ask a Sonos speaker to re-index the library (best effort — if no
  # speaker answers, the app's own "update library" still works).
  # Discovery binds to each LAN adapter in turn: the default route can
  # belong to a VPN adapter that swallows multicast.
  $reindexed = $false
  try {
    $msearch = "M-SEARCH * HTTP/1.1`r`nHOST: 239.255.255.250:1900`r`nMAN: `"ssdp:discover`"`r`nMX: 1`r`nST: urn:schemas-upnp-org:device:ZonePlayer:1`r`n`r`n"
    $bytes = [Text.Encoding]::ASCII.GetBytes($msearch)
    $mcast = New-Object System.Net.IPEndPoint ([Net.IPAddress]::Parse('239.255.255.250'), 1900)
    $lanIps = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue |
      Where-Object { $_.IPAddress -match '^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)' } |
      Select-Object -ExpandProperty IPAddress
    foreach ($lanIp in $lanIps) {
      $speaker = $null
      try {
        $local = New-Object System.Net.IPEndPoint ([Net.IPAddress]::Parse($lanIp), 0)
        $udp = New-Object System.Net.Sockets.UdpClient($local)
        $udp.Client.ReceiveTimeout = 2000
        1..3 | ForEach-Object { [void]$udp.Send($bytes, $bytes.Length, $mcast); Start-Sleep -Milliseconds 100 }
        $from = New-Object System.Net.IPEndPoint ([Net.IPAddress]::Any, 0)
        try {
          while ($true) {
            $resp = [Text.Encoding]::ASCII.GetString($udp.Receive([ref]$from))
            if ($resp -match 'LOCATION:\s*http://([\d\.]+):1400') { $speaker = $Matches[1]; break }
          }
        } catch {}
        $udp.Close()
      } catch {}
      if ($speaker) {
        $soap = '<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:RefreshShareIndex xmlns:u="urn:schemas-upnp-org:service:ContentDirectory:1"><AlbumArtistDisplayOption></AlbumArtistDisplayOption></u:RefreshShareIndex></s:Body></s:Envelope>'
        Invoke-WebRequest -Uri "http://${speaker}:1400/MediaServer/ContentDirectory/Control" -Method Post -Body $soap `
          -ContentType 'text/xml; charset="utf-8"' `
          -Headers @{ SOAPACTION = '"urn:schemas-upnp-org:service:ContentDirectory:1#RefreshShareIndex"' } `
          -UseBasicParsing | Out-Null
        $reindexed = $true
        break
      }
    }
  } catch {}

  Log "OK - $($wanted.Count) tracks ($added added, $removed removed), $($playlists.Count) playlists, Sonos re-index $(if($reindexed){'requested'}else{'skipped'})"
  if ($healthcheck) { try { Invoke-WebRequest $healthcheck -UseBasicParsing | Out-Null } catch {} }
}
catch {
  Log "FAILED - $($_.Exception.Message)"
  if ($healthcheck) { try { Invoke-WebRequest "$healthcheck/fail" -UseBasicParsing | Out-Null } catch {} }
}

# keep the log to a sensible size
if (Test-Path $log) {
  Get-Content $log -Tail 500 | Set-Content "$log.tmp"
  Move-Item "$log.tmp" $log -Force
}
