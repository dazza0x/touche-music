# Touché — Salon Soundtrack

A web-based music player for Touché Hairdressing (Caterham & Purley). Plays
AI-generated music in the salon from an iPad, with audio sent to the Sonos
speakers over AirPlay. One tap on a playlist and the music runs all day.

Live at: **https://music.touchesm.com** (once set up — see below)

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The app's page structure |
| `styles.css` | The look (Touché brand colours and fonts) |
| `player.js` | The player logic — you shouldn't need to touch this |
| `playlists.js` | **The music list — this is the only file you edit** |
| `audio/` | The MP3 files |
| `manifest.json`, `sw.js`, `icons/` | "Add to Home Screen" app bits |
| `CNAME` | Tells GitHub Pages to use music.touchesm.com |

---

## Part 1 — Putting it on the internet (one-off setup)

All done through the GitHub website, no terminal needed.

1. Go to [github.com/new](https://github.com/new) and create a repository
   called **touche-music** (public). Don't tick any of the "initialise" boxes.
2. On the new repository's page, choose **uploading an existing file**, then
   drag the **entire contents of this folder** (including the `audio` and
   `icons` folders) into the upload area. Press **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to
   **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. On the same Pages screen, type **music.touchesm.com** into the
   *Custom domain* box and save.
5. At the place where the **touchesm.com** domain's DNS is managed, add a
   record:
   - **Type:** CNAME
   - **Name / host:** `music`
   - **Target / value:** `dazza0x.github.io`
   - If that's Cloudflare, set the orange cloud to **DNS only** (grey) so
     GitHub can issue the certificate.
6. Wait a little while (anything from a few minutes to an hour), then back on
   the GitHub Pages screen tick **Enforce HTTPS**.

That's it — the player is live at https://music.touchesm.com.

## Part 2 — Adding or changing music

Songs currently live in the repository's `audio/` folder, which is the
simplest place to start. (GitHub's upload limit is 25 MB per file — a normal
song is well under that.)

1. Export the song from Suno as MP3.
2. Rename it to lowercase-with-hyphens, no spaces — e.g.
   `golden-hour-gloss.mp3`.
3. On GitHub, open the `audio` folder → **Add file → Upload files** → drag
   the MP3 in → Commit changes.
4. Open `playlists.js` → click the pencil (Edit) → copy an existing track
   line and change the title and url:
   ```js
   { title: "Golden Hour Gloss", artist: "Touché Sessions", url: "audio/golden-hour-gloss.mp3" },
   ```
5. Commit. The site updates itself within a couple of minutes.

To add a whole playlist, copy an entire `{ name: ..., tracks: [...] }` block
in `playlists.js` and give it a new name. Playlists appear as chips across
the top of the app in the order listed.

### Later: moving the audio to Cloudflare R2

Once the library grows (GitHub repositories are happiest under ~1 GB), move
the MP3s to Cloudflare R2 — free egress, so no bandwidth bills:

1. Cloudflare dashboard → **R2** → Create bucket, call it `touche-music`.
2. In the bucket's **Settings → Public access**, connect a custom domain
   (e.g. `audio.touchesm.com`) — or enable the `r2.dev` development URL.
3. Upload MP3s through the dashboard (same naming rules as above).
4. In `playlists.js`, use the full public URL as the track's `url`:
   ```js
   { title: "Golden Hour Gloss", artist: "Touché Sessions", url: "https://audio.touchesm.com/golden-hour-gloss.mp3" },
   ```
Repo-hosted and R2-hosted tracks can be mixed freely while migrating.

## Part 3 — Setting up the salon iPad

1. Open **https://music.touchesm.com** in Safari.
2. Tap **Share → Add to Home Screen** — it installs like an app.
3. **Settings → Display & Brightness → Auto-Lock → Never** (or use Guided
   Access: Settings → Accessibility → Guided Access) so the iPad doesn't
   doze off mid-afternoon.
4. To send the sound to the Sonos speakers: swipe down for Control Centre,
   long-press the audio card, tap the AirPlay symbol and choose the speakers.
5. Tap a playlist — that's the last input it needs all day. Repeat is on by
   default; tracks advance themselves, and if one ever fails to load the
   player quietly skips to the next.

## Notes

- Volume is best controlled on the Sonos itself (or the iPad's hardware
  buttons) — iPads don't let web pages change the volume in software.
- The music is generated in Suno on a paid plan (commercial use permitted),
  which is what lets the salon play it without a PPL PRS licence.
