# Touché Music — salon PC one-time setup
# Run once on the salon's front-desk PC in an ADMINISTRATOR PowerShell:
#
#   irm https://music.touchesm.com/salon/setup.ps1 | iex
#
# It creates C:\ToucheMusic, downloads the full music library, shares
# the folder read-only for the Sonos speakers, creates a low-privilege
# "sonos" login for the Sonos app, stops the PC sleeping on mains, and
# installs a scheduled task that keeps the library in sync every day.

$ErrorActionPreference = 'Stop'
$root = 'C:\ToucheMusic'
$site = 'https://music.touchesm.com'

$admin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $admin) { throw 'Please run this from an Administrator PowerShell (right-click PowerShell, Run as administrator).' }

Write-Host 'Touché Music salon setup starting...'
New-Item -ItemType Directory -Force -Path $root | Out-Null

# bootstrap: fetches the newest sync script from the website before each
# run, falling back to the cached copy if the site is unreachable
@'
$root = 'C:\ToucheMusic'
$site = 'https://music.touchesm.com'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
try {
  $fresh = (Invoke-WebRequest "$site/salon/sync.ps1?t=$((Get-Date).Ticks)" -UseBasicParsing).Content
  if ($fresh -match 'playlists\.js') { Set-Content -Path "$root\sync.ps1" -Value $fresh -Encoding UTF8 }
} catch {}
& powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$root\sync.ps1"
'@ | Set-Content -Path "$root\bootstrap.ps1" -Encoding UTF8

# file sharing only works on Private networks
Get-NetConnectionProfile | Where-Object { $_.Name -notmatch 'WARP|VPN' } |
  Set-NetConnectionProfile -NetworkCategory Private
Write-Host '- network profile set to Private'

# read-only share for the speakers
if (-not (Get-SmbShare -Name 'ToucheMusic' -ErrorAction SilentlyContinue)) {
  New-SmbShare -Name 'ToucheMusic' -Path $root -ReadAccess 'Everyone' | Out-Null
}
Enable-NetFirewallRule -DisplayGroup 'File and Printer Sharing' | Out-Null
Write-Host '- folder shared as ToucheMusic (read-only)'

# dedicated low-privilege login for the Sonos app
if (-not (Get-LocalUser -Name 'sonos' -ErrorAction SilentlyContinue)) {
  $pw = ConvertTo-SecureString 'ToucheMusic2026' -AsPlainText -Force
  New-LocalUser -Name 'sonos' -Password $pw -PasswordNeverExpires `
    -Description 'Read-only account for the Sonos music library' | Out-Null
}
Write-Host '- sonos login ready'

# the PC must not doze off mid-afternoon (screen may still switch off)
powercfg /change standby-timeout-ac 0 | Out-Null
powercfg /change hibernate-timeout-ac 0 | Out-Null
Write-Host '- sleep disabled while on mains power'

# keep the library in sync: every morning at 07:30 and at every boot
$action = New-ScheduledTaskAction -Execute 'powershell.exe' `
  -Argument "-NoProfile -ExecutionPolicy Bypass -File $root\bootstrap.ps1"
$triggers = @(
  (New-ScheduledTaskTrigger -Daily -At '07:30'),
  (New-ScheduledTaskTrigger -AtStartup)
)
Register-ScheduledTask -TaskName 'Touche Music Sync' -Action $action `
  -Trigger $triggers -User 'SYSTEM' -RunLevel Highest -Force | Out-Null
Write-Host '- daily sync task installed (07:30 and at start-up)'

# first sync now — downloads the whole library, so allow several minutes
Write-Host '- downloading the music library (this first run takes a while)...'
& powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$root\bootstrap.ps1"
Get-Content "$root\sync-log.txt" -Tail 1

Write-Host ''
Write-Host '=============================================================='
Write-Host ' Setup complete. Now in the Sonos app (Music Library, add a'
Write-Host ' share) enter:'
Write-Host ''
Write-Host "   Share:     \\$env:COMPUTERNAME\ToucheMusic"
Write-Host '   Username:  sonos'
Write-Host '   Password:  ToucheMusic2026'
Write-Host ''
Write-Host ' Playlists appear under Music Library > Imported Playlists.'
Write-Host '=============================================================='
