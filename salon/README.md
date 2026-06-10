# Salon PC setup — Sonos plays the music itself

This folder holds everything needed to make a salon's Sonos speakers
play the Touché library directly from the front-desk PC — no iPad, no
browser, no AirPlay. The speakers read MP3s from a shared folder on
the PC; staff control playback from the Sonos app on any phone.

## One-time setup (about 10 minutes, done at the salon)

1. On the front-desk PC, click Start, type `powershell`, right-click
   **Windows PowerShell** and choose **Run as administrator**.
2. Paste this line and press Enter:

   ```powershell
   irm https://music.touchesm.com/salon/setup.ps1 | iex
   ```

3. Wait — the first run downloads the entire music library (a few
   hundred MB), so give it several minutes. It finishes by printing
   the share name and login details.
4. On a phone connected to the salon Wi-Fi, open the **Sonos app** →
   Music Library settings → **add a share** and enter:
   - Share: `\\<PC-NAME>\ToucheMusic` (the setup prints the exact name)
   - Username: `sonos`  Password: `ToucheMusic2026`
5. After Sonos finishes indexing: **Music Library → Imported
   Playlists** → pick a genre → play → switch on **repeat** (and
   shuffle, if liked) in the queue screen.

## What the setup installs

- `C:\ToucheMusic` — the music library plus one `.m3u` playlist per
  genre, shared read-only on the local network as `ToucheMusic`.
- A `sonos` Windows login (read-only, no admin rights) so nobody types
  a real password into the Sonos app.
- "Never sleep on mains" power settings — the share must stay
  reachable while music plays. (The screen may still turn off.)
- A scheduled task, **Touche Music Sync**, which runs at 07:30 daily
  and at every boot. It fetches the latest playlists.js from
  music.touchesm.com, downloads new tracks, removes deleted ones,
  rewrites the genre playlists and asks the speakers to re-index. It
  also re-downloads the latest version of itself first, so fixes can
  be shipped from the repo without visiting the salon.

So the day-to-day flow for new music: add songs to this repository as
usual (the website updates within minutes) and the salon PC catches up
automatically by the next morning — or run the task by hand from Task
Scheduler for an instant update.

## Optional: email alerts if a salon stops syncing

1. Create a free check at [healthchecks.io](https://healthchecks.io)
   (schedule: daily) and copy its ping URL.
2. On the salon PC, save that URL as the only line of
   `C:\ToucheMusic\healthcheck.txt`.

If the PC misses a daily sync (switched off, no internet), you get an
email — usually before anyone at the salon notices.

## Troubleshooting

- Recent sync results are in `C:\ToucheMusic\sync-log.txt`.
- The staff cheat sheet (print it for the front desk):
  https://music.touchesm.com/salon/help.html
- If the Sonos app cannot find the share: confirm the PC is on, on the
  same Wi-Fi, and that the network shows as **Private** in Windows
  settings; a VPN on the PC can also get in the way.
