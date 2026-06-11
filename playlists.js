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

   NOTE: keep each track on a single line, exactly like the lines
   below — the salon PCs' Sonos sync script (salon/sync.ps1) reads
   this file one line at a time.
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
      { title: "Blindside Glow",                  artist: "Touché Sessions", url: "audio/blindside-glow.mp3" },
      { title: "Mirror Shake",                    artist: "Touché Sessions", url: "audio/mirror-shake.mp3" },
      { title: "Mirrorball Pulse",                artist: "Touché Sessions", url: "audio/mirrorball-pulse.mp3" },
      { title: "Paper Sun",                       artist: "Touché Sessions", url: "audio/paper-sun.mp3" },
      { title: "Easy Swaying",                    artist: "Touché Sessions", url: "audio/easy-swaying.mp3" },
      { title: "Coffee In Hand",                  artist: "Touché Sessions", url: "audio/coffee-in-hand.mp3" },
      { title: "Lemon on My Tongue",              artist: "Touché Sessions", url: "audio/lemon-on-my-tongue.mp3" },
      { title: "Sunrise On Air",                  artist: "Touché Sessions", url: "audio/sunrise-on-air.mp3" },
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
      { title: "Two PM Lift (Take Two)",          artist: "Touché Sessions", url: "audio/two-pm-lift-take-two.mp3" },
      { title: "Blindside Glow (Take Two)",       artist: "Touché Sessions", url: "audio/blindside-glow-take-two.mp3" },
      { title: "Mirror Shake (Take Two)",         artist: "Touché Sessions", url: "audio/mirror-shake-take-two.mp3" },
      { title: "Mirrorball Pulse (Take Two)",     artist: "Touché Sessions", url: "audio/mirrorball-pulse-take-two.mp3" },
      { title: "Paper Sun (Take Two)",            artist: "Touché Sessions", url: "audio/paper-sun-take-two.mp3" },
      { title: "Easy Swaying (Take Two)",         artist: "Touché Sessions", url: "audio/easy-swaying-take-two.mp3" },
      { title: "Coffee In Hand (Take Two)",       artist: "Touché Sessions", url: "audio/coffee-in-hand-take-two.mp3" },
      { title: "Lemon on My Tongue (Take Two)",   artist: "Touché Sessions", url: "audio/lemon-on-my-tongue-take-two.mp3" },
      { title: "Sunrise On Air (Take Two)",       artist: "Touché Sessions", url: "audio/sunrise-on-air-take-two.mp3" }
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
  },
  {
    name: "Art Reject",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Blindside Glow",                  artist: "Touché Sessions", url: "audio/blindside-glow.mp3" },
      { title: "Glowstick Weekend",               artist: "Touché Sessions", url: "audio/glowstick-weekend.mp3" },
      { title: "Library Card Sunset",             artist: "Touché Sessions", url: "audio/library-card-sunset.mp3" },
      { title: "Mirror Shake",                    artist: "Touché Sessions", url: "audio/mirror-shake.mp3" },
      { title: "Mirrorball Pulse",                artist: "Touché Sessions", url: "audio/mirrorball-pulse.mp3" },
      { title: "Museum Floor",                    artist: "Touché Sessions", url: "audio/museum-floor.mp3" },
      { title: "Palm Wine Radar",                 artist: "Touché Sessions", url: "audio/palm-wine-radar.mp3" },
      { title: "Plastic Lemon Halo",              artist: "Touché Sessions", url: "audio/plastic-lemon-halo.mp3" },
      { title: "Plastic Palm Parade",             artist: "Touché Sessions", url: "audio/plastic-palm-parade.mp3" },
      /* alternate takes */
      { title: "Blindside Glow (Take Two)",       artist: "Touché Sessions", url: "audio/blindside-glow-take-two.mp3" },
      { title: "Glowstick Weekend (Take Two)",    artist: "Touché Sessions", url: "audio/glowstick-weekend-take-two.mp3" },
      { title: "Library Card Sunset (Take Two)",  artist: "Touché Sessions", url: "audio/library-card-sunset-take-two.mp3" },
      { title: "Mirror Shake (Take Two)",         artist: "Touché Sessions", url: "audio/mirror-shake-take-two.mp3" },
      { title: "Mirrorball Pulse (Take Two)",     artist: "Touché Sessions", url: "audio/mirrorball-pulse-take-two.mp3" },
      { title: "Museum Floor (Take Two)",         artist: "Touché Sessions", url: "audio/museum-floor-take-two.mp3" },
      { title: "Palm Wine Radar (Take Two)",      artist: "Touché Sessions", url: "audio/palm-wine-radar-take-two.mp3" },
      { title: "Plastic Lemon Halo (Take Two)",   artist: "Touché Sessions", url: "audio/plastic-lemon-halo-take-two.mp3" },
      { title: "Plastic Palm Parade (Take Two)",  artist: "Touché Sessions", url: "audio/plastic-palm-parade-take-two.mp3" }
    ]
  },
  {
    name: "The Radio",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Boots On the Hill",               artist: "Touché Sessions", url: "audio/boots-on-the-hill.mp3" },
      { title: "Cardigan Embers",                 artist: "Touché Sessions", url: "audio/cardigan-embers.mp3" },
      { title: "Glass Confetti",                  artist: "Touché Sessions", url: "audio/glass-confetti.mp3" },
      { title: "Mirrorball Trouble",              artist: "Touché Sessions", url: "audio/mirrorball-trouble.mp3" },
      { title: "Tailgate Ghost",                  artist: "Touché Sessions", url: "audio/tailgate-ghost.mp3" },
      { title: "Tape on My Thumb",                artist: "Touché Sessions", url: "audio/tape-on-my-thumb.mp3" },
      { title: "Paper Planes Flying",             artist: "Touché Sessions", url: "audio/paper-planes-flying.mp3" },
      { title: "Paper Planes at Midnight",        artist: "Touché Sessions", url: "audio/paper-planes-at-midnight.mp3" },
      { title: "Neon Halo",                       artist: "Touché Sessions", url: "audio/neon-halo.mp3" },
      { title: "River Runs",                      artist: "Touché Sessions", url: "audio/river-runs.mp3" },
      { title: "Economy of the Night",            artist: "Touché Sessions", url: "audio/economy-of-the-night.mp3" },
      { title: "Night Economy",                   artist: "Touché Sessions", url: "audio/night-economy.mp3" },
      { title: "Midnight Economy",                artist: "Touché Sessions", url: "audio/midnight-economy.mp3" },
      { title: "Back Home Somewhere",             artist: "Touché Sessions", url: "audio/back-home-somewhere.mp3" },
      { title: "Somewhere Back Home",             artist: "Touché Sessions", url: "audio/somewhere-back-home.mp3" },
      { title: "Gold Rush Heart",                 artist: "Touché Sessions", url: "audio/gold-rush-heart.mp3" },
      { title: "Best Served Cold",                artist: "Touché Sessions", url: "audio/best-served-cold.mp3" },
      { title: "Polaroid Summer",                 artist: "Touché Sessions", url: "audio/polaroid-summer.mp3" },
      { title: "Delete Your Number",              artist: "Touché Sessions", url: "audio/delete-your-number.mp3" },
      { title: "Last Train Out",                  artist: "Touché Sessions", url: "audio/last-train-out.mp3" },
      /* alternate takes */
      { title: "Boots On the Hill (Take Two)",    artist: "Touché Sessions", url: "audio/boots-on-the-hill-take-two.mp3" },
      { title: "Cardigan Embers (Take Two)",      artist: "Touché Sessions", url: "audio/cardigan-embers-take-two.mp3" },
      { title: "Glass Confetti (Take Two)",       artist: "Touché Sessions", url: "audio/glass-confetti-take-two.mp3" },
      { title: "Mirrorball Trouble (Take Two)",   artist: "Touché Sessions", url: "audio/mirrorball-trouble-take-two.mp3" },
      { title: "Tailgate Ghost (Take Two)",       artist: "Touché Sessions", url: "audio/tailgate-ghost-take-two.mp3" },
      { title: "Tape on My Thumb (Take Two)",     artist: "Touché Sessions", url: "audio/tape-on-my-thumb-take-two.mp3" },
      { title: "Neon Halo (Take Two)",            artist: "Touché Sessions", url: "audio/neon-halo-take-two.mp3" },
      { title: "River Runs (Take Two)",           artist: "Touché Sessions", url: "audio/river-runs-take-two.mp3" },
      { title: "River Runs (Take Three)",         artist: "Touché Sessions", url: "audio/river-runs-take-three.mp3" },
      { title: "Best Served Cold (Remix)",        artist: "Touché Sessions", url: "audio/best-served-cold-remix.mp3" },
      { title: "Delete Your Number (Remix)",      artist: "Touché Sessions", url: "audio/delete-your-number-remix.mp3" },
      { title: "Last Train Out (Remix)",          artist: "Touché Sessions", url: "audio/last-train-out-remix.mp3" }
    ]
  },
  {
    name: "Indie Pop",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Back From The Bar",               artist: "Touché Sessions", url: "audio/back-from-the-bar.mp3" },
      { title: "Broken Mirror Floor",             artist: "Touché Sessions", url: "audio/broken-mirror-floor.mp3" },
      { title: "Last Call Parade",                artist: "Touché Sessions", url: "audio/last-call-parade.mp3" },
      { title: "Pint Glass Parade",               artist: "Touché Sessions", url: "audio/pint-glass-parade.mp3" },
      { title: "Velvet Spill",                    artist: "Touché Sessions", url: "audio/velvet-spill.mp3" },
      /* alternate takes */
      { title: "Back From The Bar (Take Two)",    artist: "Touché Sessions", url: "audio/back-from-the-bar-take-two.mp3" },
      { title: "Broken Mirror Floor (Take Two)",  artist: "Touché Sessions", url: "audio/broken-mirror-floor-take-two.mp3" },
      { title: "Last Call Parade (Take Two)",     artist: "Touché Sessions", url: "audio/last-call-parade-take-two.mp3" },
      { title: "Pint Glass Parade (Take Two)",    artist: "Touché Sessions", url: "audio/pint-glass-parade-take-two.mp3" },
      { title: "Velvet Spill (Take Two)",         artist: "Touché Sessions", url: "audio/velvet-spill-take-two.mp3" }
    ]
  },
  {
    name: "Stadium Rock Pop",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Driving Queen",                              artist: "Touché Sessions", url: "audio/driving-queen.mp3" },
      { title: "Dust on the Bible",                          artist: "Touché Sessions", url: "audio/dust-on-the-bible.mp3" },
      { title: "Freight Running",                            artist: "Touché Sessions", url: "audio/freight-running.mp3" },
      { title: "Gasoline Queen",                             artist: "Touché Sessions", url: "audio/gasoline-queen.mp3" },
      { title: "I Ain't Ringing No More",                    artist: "Touché Sessions", url: "audio/i-aint-ringing-no-more.mp3" },
      { title: "Just One More (NYC)",                        artist: "Touché Sessions", url: "audio/just-one-more-nyc.mp3" },
      { title: "No One's Home",                              artist: "Touché Sessions", url: "audio/no-ones-home.mp3" },
      { title: "One More Round",                             artist: "Touché Sessions", url: "audio/one-more-round.mp3" },
      { title: "One More Shot (Vegas)",                      artist: "Touché Sessions", url: "audio/one-more-shot-vegas.mp3" },
      { title: "Telephone's Ringing (I Ain't Home)",         artist: "Touché Sessions", url: "audio/telephones-ringing-i-aint-home.mp3" },
      { title: "Dusty Old Bible",                            artist: "Touché Sessions", url: "audio/dusty-old-bible.mp3" },
      { title: "Freight Running Hard",                       artist: "Touché Sessions", url: "audio/freight-running-hard.mp3" },
      { title: "Idle Bible",                                 artist: "Touché Sessions", url: "audio/idle-bible.mp3" },
      /* alternate takes, remixes and instrumentals */
      { title: "Gasoline Queen (Take Two)",                  artist: "Touché Sessions", url: "audio/gasoline-queen-take-two.mp3" },
      { title: "Telephone's Ringing (I Ain't Home) (Take Two)", artist: "Touché Sessions", url: "audio/telephones-ringing-i-aint-home-take-two.mp3" },
      { title: "Driving Queen (Remix)",                      artist: "Touché Sessions", url: "audio/driving-queen-remix.mp3" },
      { title: "Dusty Bible (Remix)",                        artist: "Touché Sessions", url: "audio/dusty-bible-remix.mp3" },
      { title: "Midnight Freight (Instrumental)",            artist: "Touché Sessions", url: "audio/midnight-freight-instrumental.mp3" },
      { title: "Midnight Freight (Instrumental Remix)",      artist: "Touché Sessions", url: "audio/midnight-freight-instrumental-remix.mp3" }
    ]
  },
  {
    name: "Indie Britpop",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Empty Pavement",                  artist: "Touché Sessions", url: "audio/empty-pavement.mp3" },
      { title: "Velvet Backseat Crown",           artist: "Touché Sessions", url: "audio/velvet-backseat-crown.mp3" },
      { title: "Turn The Corner",                 artist: "Touché Sessions", url: "audio/turn-the-corner.mp3" },
      { title: "Neon Lump Throat",                artist: "Touché Sessions", url: "audio/neon-lump-throat.mp3" },
      { title: "Saturday On Deansgate",           artist: "Touché Sessions", url: "audio/saturday-on-deansgate.mp3" },
      { title: "Pint Glass Skies",                artist: "Touché Sessions", url: "audio/pint-glass-skies.mp3" },
      { title: "Paper Crown",                     artist: "Touché Sessions", url: "audio/paper-crown.mp3" },
      { title: "Backdoor Sunday",                 artist: "Touché Sessions", url: "audio/backdoor-sunday.mp3" },
      { title: "Kettle's On",                     artist: "Touché Sessions", url: "audio/kettles-on.mp3" },
      { title: "Velvet Backseat Frown",           artist: "Touché Sessions", url: "audio/velvet-backseat-frown.mp3" },
      { title: "Saturday On Deansgate (Smashed)", artist: "Touché Sessions", url: "audio/saturday-on-deansgate-smashed.mp3" },
      { title: "Pint Glass Skies (Again)",        artist: "Touché Sessions", url: "audio/pint-glass-skies-again.mp3" },
      /* alternate takes and remixes */
      { title: "Paper Crown (Take Two)",          artist: "Touché Sessions", url: "audio/paper-crown-take-two.mp3" },
      { title: "Backdoor Sunday (Take Two)",      artist: "Touché Sessions", url: "audio/backdoor-sunday-take-two.mp3" },
      { title: "Empty Pavement (Remix)",          artist: "Touché Sessions", url: "audio/empty-pavement-remix.mp3" },
      { title: "Kettle's On (Remix)",             artist: "Touché Sessions", url: "audio/kettles-on-remix.mp3" }
    ]
  }
];
