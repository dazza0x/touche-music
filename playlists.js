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
      /* first takes — five different tunes before anything repeats */
      { title: "Sunlit Table for Two",            artist: "Touché Sessions", url: "audio/sunlit-table-for-two.mp3" },
      { title: "Paper Cup Sun",                   artist: "Touché Sessions", url: "audio/paper-cup-sun.mp3" },
      { title: "Paper Lanterns",                  artist: "Touché Sessions", url: "audio/paper-lanterns.mp3" },
      { title: "Salt On Your Skin",               artist: "Touché Sessions", url: "audio/salt-on-your-skin.mp3" },
      { title: "Glass On The Floor",              artist: "Touché Sessions", url: "audio/glass-on-the-floor.mp3" },
      { title: "Mano Extraña",                    artist: "Touché Sessions", url: "audio/mano-extrana.mp3" },
      { title: "Glass Lemon",                     artist: "Touché Sessions", url: "audio/glass-lemon.mp3" },
      { title: "Sidewalk Sun",                    artist: "Touché Sessions", url: "audio/sidewalk-sun.mp3" },
      { title: "Velvet Backseat",                 artist: "Touché Sessions", url: "audio/velvet-backseat.mp3" },
      { title: "Sal y Coco",                      artist: "Touché Sessions", url: "audio/sal-y-coco.mp3" },
      { title: "Two PM Lift",                     artist: "Touché Sessions", url: "audio/two-pm-lift.mp3" },
      /* alternate takes */
      { title: "Sunlit Table for Two (Take Two)", artist: "Touché Sessions", url: "audio/sunlit-table-for-two-take-two.mp3" },
      { title: "Paper Cup Sun (Take Two)",        artist: "Touché Sessions", url: "audio/paper-cup-sun-take-two.mp3" },
      { title: "Paper Lanterns (Take Two)",       artist: "Touché Sessions", url: "audio/paper-lanterns-take-two.mp3" },
      { title: "Salt On Your Skin (Take Two)",    artist: "Touché Sessions", url: "audio/salt-on-your-skin-take-two.mp3" },
      { title: "Glass On The Floor (Take Two)",   artist: "Touché Sessions", url: "audio/glass-on-the-floor-take-two.mp3" },
      { title: "Mano Extraña (Take Two)",         artist: "Touché Sessions", url: "audio/mano-extrana-take-two.mp3" },
      { title: "Glass Lemon (Take Two)",          artist: "Touché Sessions", url: "audio/glass-lemon-take-two.mp3" },
      { title: "Sidewalk Sun (Take Two)",         artist: "Touché Sessions", url: "audio/sidewalk-sun-take-two.mp3" },
      { title: "Velvet Backseat (Take Two)",      artist: "Touché Sessions", url: "audio/velvet-backseat-take-two.mp3" },
      { title: "Sal y Coco (Take Two)",           artist: "Touché Sessions", url: "audio/sal-y-coco-take-two.mp3" },
      { title: "Two PM Lift (Take Two)",          artist: "Touché Sessions", url: "audio/two-pm-lift-take-two.mp3" }
    ]
  },
  {
    name: "R&B",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Velvet After Midnight",              artist: "Touché Sessions", url: "audio/velvet-after-midnight.mp3" },
      { title: "Velvet Signal",                      artist: "Touché Sessions", url: "audio/velvet-signal.mp3" },
      /* alternate takes */
      { title: "Velvet After Midnight (Take Two)",   artist: "Touché Sessions", url: "audio/velvet-after-midnight-take-two.mp3" },
      { title: "Velvet Signal (Take Two)",           artist: "Touché Sessions", url: "audio/velvet-signal-take-two.mp3" },
      { title: "Velvet After Midnight (Take Three)", artist: "Touché Sessions", url: "audio/velvet-after-midnight-take-three.mp3" },
      { title: "Velvet After Midnight (Take Four)",  artist: "Touché Sessions", url: "audio/velvet-after-midnight-take-four.mp3" }
    ]
  },
  {
    name: "Upbeat Pop",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Hands Up Tonight",                 artist: "Touché Sessions", url: "audio/hands-up-tonight.mp3" },
      { title: "Comment Section Heart",            artist: "Touché Sessions", url: "audio/comment-section-heart.mp3" },
      /* alternate takes */
      { title: "Hands Up Tonight (Take Two)",      artist: "Touché Sessions", url: "audio/hands-up-tonight-take-two.mp3" },
      { title: "Comment Section Heart (Take Two)", artist: "Touché Sessions", url: "audio/comment-section-heart-take-two.mp3" }
    ]
  },
  {
    name: "Ibiza Party",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Hands Up Tonight",                artist: "Touché Sessions", url: "audio/hands-up-tonight.mp3" },
      { title: "Terraza Dorada",                  artist: "Touché Sessions", url: "audio/terraza-dorada.mp3" },
      { title: "Hands Up Higher",                 artist: "Touché Sessions", url: "audio/hands-up-higher.mp3" },
      { title: "Glow Up Tonight",                 artist: "Touché Sessions", url: "audio/glow-up-tonight.mp3" },
      { title: "Midnight Workhorse",              artist: "Touché Sessions", url: "audio/midnight-workhorse.mp3" },
      { title: "Tide After the Club",             artist: "Touché Sessions", url: "audio/tide-after-the-club.mp3" },
      /* alternate takes */
      { title: "Hands Up Tonight (Take Two)",     artist: "Touché Sessions", url: "audio/hands-up-tonight-take-two.mp3" },
      { title: "Terraza Dorada (Take Two)",       artist: "Touché Sessions", url: "audio/terraza-dorada-take-two.mp3" },
      { title: "Hands Up Higher (Take Two)",      artist: "Touché Sessions", url: "audio/hands-up-higher-take-two.mp3" },
      { title: "Glow Up Tonight (Take Two)",      artist: "Touché Sessions", url: "audio/glow-up-tonight-take-two.mp3" },
      { title: "Midnight Workhorse (Take Two)",   artist: "Touché Sessions", url: "audio/midnight-workhorse-take-two.mp3" },
      { title: "Tide After the Club (Take Two)",  artist: "Touché Sessions", url: "audio/tide-after-the-club-take-two.mp3" },
      { title: "Hands Up Higher (Take Three)",    artist: "Touché Sessions", url: "audio/hands-up-higher-take-three.mp3" },
      { title: "Hands Up Higher (Take Four)",     artist: "Touché Sessions", url: "audio/hands-up-higher-take-four.mp3" }
    ]
  }
];
