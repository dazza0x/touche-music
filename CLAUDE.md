# Touché Salon Music Player

## What this is
A web-based music player for Touché Hairdressing (Caterham & Purley). It plays
AI-generated music (made in Suno, paid plan for commercial rights) in the salon
via an iPad, with audio sent to Sonos speakers over AirPlay. Purpose: replace
the radio and avoid the ~£600/yr PPL PRS TheMusicLicence fee.

## Hard requirements
- **Minimal input**: staff tap one playlist and the music runs all day.
  Auto-advance between tracks; repeat-playlist ON by default; shuffle toggle.
- **iPad-first**: large touch targets, works in Safari, "Add to Home Screen"
  friendly. Audio must keep playing all day (advise Guided Access / auto-lock off).
- **British English** throughout, in UI copy and code comments.

## Architecture
- Static single-page app, deployed on **GitHub Pages** (owner prefers the
  GitHub web UI over terminal git — repo: dazza0x/touche-music).
- Custom domain: **music.touchesm.com** (CNAME file in repo; DNS CNAME
  `music` → `dazza0x.github.io`).
- Playlist data lives in **playlists.js** (a plain JS file rather than
  fetched JSON — fetch() of local files has caused issues on Pages before).
  Shape: `PLAYLISTS = [{ name, tracks: [{ title, artist, url }] }]`.
- Audio: MP3, hosted in **Cloudflare R2** (bucket `touche-music`, account
  822821b3bbd95ab6b53f8935ab4a2018) served at **audio.touchesm.com** — free
  egress. playlists.js uses absolute urls; the player and salon sync both
  also still accept repo-relative urls if ever needed.
- **Media Session API** wired for lock screen / Control Centre controls.
- PWA: manifest.json + sw.js (app-shell cache only — the service worker
  deliberately does NOT intercept .mp3 requests, so Safari's range-request
  streaming and seeking stay reliable).

## File map
- `index.html` — markup only
- `styles.css` — all styling
- `player.js` — player logic (shuffle bag, auto-advance, error-skip,
  Media Session, SW registration)
- `playlists.js` — the only file edited day-to-day
- `admin.html` — self-contained owner console (move/rename/remove songs,
  upload MP3s). Serverless: edits playlists.js via the GitHub Contents
  API and uploads to R2 with browser-side SigV4; both tokens live only
  on the owner's devices, AES-GCM-encrypted under a passphrase
  (localStorage key `touche-admin-vault`). Its regenerator preserves
  the playlists.js header comment and one-track-per-line format the
  salon sync depends on. R2 bucket needs a CORS rule allowing PUT/HEAD
  from https://music.touchesm.com.
- `sw.js`, `manifest.json`, `icons/` — PWA
- `CNAME` — custom domain for GitHub Pages
- `README.md` — owner-facing setup & "add a track" instructions (keep these
  simple enough for non-technical staff)

## Design system (matches the Touché brand)
- Headings: Cormorant Garamond. Body/UI: Jost.
- Palette: parchment `#f6f1e8`, card `#efe7d9`, ink `#2b2620`,
  sage `#577f6c` (primary accent), sage-deep `#3f6253`, line `#ddd2c0`,
  gold `#b08d4f` (sparing).
- Aesthetic: warm, editorial, restrained. No heavy shadows or loud gradients.
- Dark mode: warm near-black `#1e1a15`, card `#28231c`, text `#ece4d4`,
  sage lifted to `#6e9c86`/`#9cc0ae`, line `#3b342a`, gold `#c9a36b`.
  Three-way toggle in the header (follow device / light / dark), stored
  in localStorage as `touche-theme`; CSS vars switch via
  prefers-color-scheme plus a `data-theme` override on <html>.

## Sonos (salon speakers)
The salon Sonos units (Play:1s — no AirPlay, no Bluetooth, no line-in)
play the library directly from a shared folder on the salon's
front-desk PC, controlled via the Sonos app. See `salon/README.md`.
- `salon/setup.ps1` — one-time admin install on a salon PC
  (`irm https://music.touchesm.com/salon/setup.ps1 | iex`).
- `salon/sync.ps1` — scheduled daily; parses playlists.js **one track
  per line** (keep that format), downloads new MP3s from the url in
  each track line (R2 or site-relative), rewrites per-genre .m3u
  files, triggers a Sonos re-index. The salon task re-downloads this
  script from the site each run, so pushing fixes to the repo updates
  the salons remotely.
- `salon/help.html` — printable staff cheat sheet.

## Cache busting
index.html links styles.css and player.js with a `?v=N` query string —
bump it whenever either file changes, or GitHub Pages' 10-minute cache
can serve new HTML with stale CSS/JS (seen as an unstyled volume icon).
playlists.js is deliberately unversioned: the owner edits it via the
GitHub web UI, and a 10-minute-stale playlist fails gracefully.

## Testing locally
Serve over HTTP (e.g. `python -m http.server`) rather than opening
index.html directly — the audio and service worker behave properly that way.

## Remaining nice-to-haves (discussed, not yet built)
- "Quiet mode" preset for late afternoon.
- Per-salon playlist sets (Caterham / Purley).
