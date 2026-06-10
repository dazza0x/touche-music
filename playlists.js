/* =====================================================================
   PLAYLIST DATA — this is the only file you edit to change the music.

   To add a track:
     1. Upload the MP3 (to the audio/ folder of this repo, or to
        Cloudflare R2 once that's set up).
     2. Copy one of the lines below, change the title and the url.
     3. Commit the change — the site updates itself in a minute or two.

   To add a playlist, copy a whole { name: ..., tracks: [...] } block
   and give it a new name. Playlists appear as chips across the top of
   the app in the order they're listed here.

   urls can be relative (audio/my-song.mp3 for files in this repo) or
   full https:// links (for files hosted in Cloudflare R2).
   ===================================================================== */
const PLAYLISTS = [
  {
    name: "Easy Listening",
    tracks: [
      { title: "Sunlit Table for Two",            artist: "Touché Sessions", url: "audio/sunlit-table-for-two.mp3" },
      { title: "Sunlit Table for Two (Take Two)", artist: "Touché Sessions", url: "audio/sunlit-table-for-two-take-two.mp3" }
    ]
  }
];
