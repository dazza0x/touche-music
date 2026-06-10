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
- Audio: MP3 (320kbps). Currently in the repo's `audio/` folder for
  simplicity; planned move to **Cloudflare R2** (free egress) as the library
  grows. Track urls may be relative (repo) or absolute (R2) — both work.
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

## Testing locally
Serve over HTTP (e.g. `python -m http.server`) rather than opening
index.html directly — the audio and service worker behave properly that way.

## Remaining nice-to-haves (discussed, not yet built)
- "Quiet mode" preset for late afternoon.
- Per-salon playlist sets (Caterham / Purley).
- Cloudflare R2 migration once the library outgrows the repo.
