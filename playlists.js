/* =====================================================================
   PLAYLIST DATA — this is the only file you edit to change the music.

   To add a track:
     1. Upload the MP3 to the Cloudflare R2 bucket (touche-music):
        dashboard → R2 → touche-music → Upload. Name the file
        lowercase-with-hyphens, no spaces, e.g. golden-hour-gloss.mp3
     2. Copy one of the lines below, change the title and the url
        (https://audio.touchesm.com/your-file-name.mp3).
     3. Commit the change — the site updates itself in a minute or two
        and the salon PCs catch up overnight.

   To add a playlist, copy a whole { name: ..., tracks: [...] } block
   and give it a new name. Playlists appear as chips across the top of
   the app in the order they're listed here.

   NOTE: keep each track on a single line, exactly like the lines
   below — the salon PCs' Sonos sync script (salon/sync.ps1) reads
   this file one line at a time.
   ===================================================================== */
const PLAYLISTS = [
  {
    name: "The Radio",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Sunlit Table for Two", artist: "Touché Sessions", url: "https://audio.touchesm.com/sunlit-table-for-two.mp3" },
      { title: "Paper Cup Sun", artist: "Touché Sessions", url: "https://audio.touchesm.com/paper-cup-sun.mp3" },
      { title: "Paper Lanterns", artist: "Touché Sessions", url: "https://audio.touchesm.com/paper-lanterns.mp3" },
      { title: "Salt On Your Skin", artist: "Touché Sessions", url: "https://audio.touchesm.com/salt-on-your-skin.mp3" },
      { title: "Glass On The Floor", artist: "Touché Sessions", url: "https://audio.touchesm.com/glass-on-the-floor.mp3" },
      { title: "Mano Extraña", artist: "Touché Sessions", url: "https://audio.touchesm.com/mano-extrana.mp3" },
      { title: "Glass Lemon", artist: "Touché Sessions", url: "https://audio.touchesm.com/glass-lemon.mp3" },
      { title: "Sidewalk Sun", artist: "Touché Sessions", url: "https://audio.touchesm.com/sidewalk-sun.mp3" },
      { title: "Velvet Backseat", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-backseat.mp3" },
      { title: "Sal y Coco", artist: "Touché Sessions", url: "https://audio.touchesm.com/sal-y-coco.mp3" },
      { title: "Two PM Lift", artist: "Touché Sessions", url: "https://audio.touchesm.com/two-pm-lift.mp3" },
      { title: "Blindside Glow", artist: "Touché Sessions", url: "https://audio.touchesm.com/blindside-glow.mp3" },
      { title: "Mirror Shake", artist: "Touché Sessions", url: "https://audio.touchesm.com/mirror-shake.mp3" },
      { title: "Mirrorball Pulse", artist: "Touché Sessions", url: "https://audio.touchesm.com/mirrorball-pulse.mp3" },
      { title: "Paper Sun", artist: "Touché Sessions", url: "https://audio.touchesm.com/paper-sun.mp3" },
      { title: "Easy Swaying", artist: "Touché Sessions", url: "https://audio.touchesm.com/easy-swaying.mp3" },
      { title: "Coffee In Hand", artist: "Touché Sessions", url: "https://audio.touchesm.com/coffee-in-hand.mp3" },
      { title: "Lemon on My Tongue", artist: "Touché Sessions", url: "https://audio.touchesm.com/lemon-on-my-tongue.mp3" },
      { title: "Sunrise On Air", artist: "Touché Sessions", url: "https://audio.touchesm.com/sunrise-on-air.mp3" },
      { title: "Velvet After Midnight", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-after-midnight.mp3" },
      { title: "Velvet Signal", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-signal.mp3" },
      { title: "Boots On the Hill", artist: "Touché Sessions", url: "https://audio.touchesm.com/boots-on-the-hill.mp3" },
      { title: "Cardigan Embers", artist: "Touché Sessions", url: "https://audio.touchesm.com/cardigan-embers.mp3" },
      { title: "Glass Confetti", artist: "Touché Sessions", url: "https://audio.touchesm.com/glass-confetti.mp3" },
      { title: "Mirrorball Trouble", artist: "Touché Sessions", url: "https://audio.touchesm.com/mirrorball-trouble.mp3" },
      { title: "Tailgate Ghost", artist: "Touché Sessions", url: "https://audio.touchesm.com/tailgate-ghost.mp3" },
      { title: "Tape on My Thumb", artist: "Touché Sessions", url: "https://audio.touchesm.com/tape-on-my-thumb.mp3" },
      { title: "Paper Planes Flying", artist: "Touché Sessions", url: "https://audio.touchesm.com/paper-planes-flying.mp3" },
      { title: "Paper Planes at Midnight", artist: "Touché Sessions", url: "https://audio.touchesm.com/paper-planes-at-midnight.mp3" },
      { title: "Neon Halo", artist: "Touché Sessions", url: "https://audio.touchesm.com/neon-halo.mp3" },
      { title: "River Runs", artist: "Touché Sessions", url: "https://audio.touchesm.com/river-runs.mp3" },
      { title: "Economy of the Night", artist: "Touché Sessions", url: "https://audio.touchesm.com/economy-of-the-night.mp3" },
      { title: "Night Economy", artist: "Touché Sessions", url: "https://audio.touchesm.com/night-economy.mp3" },
      { title: "Midnight Economy", artist: "Touché Sessions", url: "https://audio.touchesm.com/midnight-economy.mp3" },
      { title: "Back Home Somewhere", artist: "Touché Sessions", url: "https://audio.touchesm.com/back-home-somewhere.mp3" },
      { title: "Somewhere Back Home", artist: "Touché Sessions", url: "https://audio.touchesm.com/somewhere-back-home.mp3" },
      { title: "Gold Rush Heart", artist: "Touché Sessions", url: "https://audio.touchesm.com/gold-rush-heart.mp3" },
      { title: "Best Served Cold", artist: "Touché Sessions", url: "https://audio.touchesm.com/best-served-cold.mp3" },
      { title: "Polaroid Summer", artist: "Touché Sessions", url: "https://audio.touchesm.com/polaroid-summer.mp3" },
      { title: "Delete Your Number", artist: "Touché Sessions", url: "https://audio.touchesm.com/delete-your-number.mp3" },
      { title: "Last Train Out", artist: "Touché Sessions", url: "https://audio.touchesm.com/last-train-out.mp3" },
      /* alternate takes and remixes */
      { title: "Sunlit Table for Two (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/sunlit-table-for-two-take-two.mp3" },
      { title: "Paper Cup Sun (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/paper-cup-sun-take-two.mp3" },
      { title: "Paper Lanterns (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/paper-lanterns-take-two.mp3" },
      { title: "Salt On Your Skin (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/salt-on-your-skin-take-two.mp3" },
      { title: "Glass On The Floor (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/glass-on-the-floor-take-two.mp3" },
      { title: "Mano Extraña (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/mano-extrana-take-two.mp3" },
      { title: "Glass Lemon (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/glass-lemon-take-two.mp3" },
      { title: "Sidewalk Sun (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/sidewalk-sun-take-two.mp3" },
      { title: "Velvet Backseat (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-backseat-take-two.mp3" },
      { title: "Sal y Coco (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/sal-y-coco-take-two.mp3" },
      { title: "Two PM Lift (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/two-pm-lift-take-two.mp3" },
      { title: "Blindside Glow (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/blindside-glow-take-two.mp3" },
      { title: "Mirror Shake (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/mirror-shake-take-two.mp3" },
      { title: "Mirrorball Pulse (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/mirrorball-pulse-take-two.mp3" },
      { title: "Paper Sun (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/paper-sun-take-two.mp3" },
      { title: "Easy Swaying (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/easy-swaying-take-two.mp3" },
      { title: "Coffee In Hand (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/coffee-in-hand-take-two.mp3" },
      { title: "Lemon on My Tongue (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/lemon-on-my-tongue-take-two.mp3" },
      { title: "Sunrise On Air (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/sunrise-on-air-take-two.mp3" },
      { title: "Velvet After Midnight (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-after-midnight-take-two.mp3" },
      { title: "Velvet Signal (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-signal-take-two.mp3" },
      { title: "Velvet After Midnight (Take Three)", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-after-midnight-take-three.mp3" },
      { title: "Velvet After Midnight (Take Four)", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-after-midnight-take-four.mp3" },
      { title: "Boots On the Hill (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/boots-on-the-hill-take-two.mp3" },
      { title: "Cardigan Embers (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/cardigan-embers-take-two.mp3" },
      { title: "Glass Confetti (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/glass-confetti-take-two.mp3" },
      { title: "Mirrorball Trouble (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/mirrorball-trouble-take-two.mp3" },
      { title: "Tailgate Ghost (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/tailgate-ghost-take-two.mp3" },
      { title: "Tape on My Thumb (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/tape-on-my-thumb-take-two.mp3" },
      { title: "Neon Halo (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/neon-halo-take-two.mp3" },
      { title: "River Runs (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/river-runs-take-two.mp3" },
      { title: "River Runs (Take Three)", artist: "Touché Sessions", url: "https://audio.touchesm.com/river-runs-take-three.mp3" },
      { title: "Best Served Cold (Remix)", artist: "Touché Sessions", url: "https://audio.touchesm.com/best-served-cold-remix.mp3" },
      { title: "Delete Your Number (Remix)", artist: "Touché Sessions", url: "https://audio.touchesm.com/delete-your-number-remix.mp3" },
      { title: "Last Train Out (Remix)", artist: "Touché Sessions", url: "https://audio.touchesm.com/last-train-out-remix.mp3" }
    ]
  },
  {
    name: "Upbeat Pop",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Hands Up Tonight", artist: "Touché Sessions", url: "https://audio.touchesm.com/hands-up-tonight.mp3" },
      { title: "Comment Section Heart", artist: "Touché Sessions", url: "https://audio.touchesm.com/comment-section-heart.mp3" },
      { title: "Blindside Glow", artist: "Touché Sessions", url: "https://audio.touchesm.com/blindside-glow.mp3" },
      /* alternate takes and remixes */
      { title: "Hands Up Tonight (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/hands-up-tonight-take-two.mp3" },
      { title: "Comment Section Heart (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/comment-section-heart-take-two.mp3" }
    ]
  },
  {
    name: "Ibiza Party",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Hands Up Tonight", artist: "Touché Sessions", url: "https://audio.touchesm.com/hands-up-tonight.mp3" },
      { title: "Terraza Dorada", artist: "Touché Sessions", url: "https://audio.touchesm.com/terraza-dorada.mp3" },
      { title: "Hands Up Higher", artist: "Touché Sessions", url: "https://audio.touchesm.com/hands-up-higher.mp3" },
      { title: "Glow Up Tonight", artist: "Touché Sessions", url: "https://audio.touchesm.com/glow-up-tonight.mp3" },
      { title: "Midnight Workhorse", artist: "Touché Sessions", url: "https://audio.touchesm.com/midnight-workhorse.mp3" },
      { title: "Tide After the Club", artist: "Touché Sessions", url: "https://audio.touchesm.com/tide-after-the-club.mp3" },
      /* alternate takes and remixes */
      { title: "Hands Up Tonight (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/hands-up-tonight-take-two.mp3" },
      { title: "Terraza Dorada (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/terraza-dorada-take-two.mp3" },
      { title: "Hands Up Higher (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/hands-up-higher-take-two.mp3" },
      { title: "Glow Up Tonight (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/glow-up-tonight-take-two.mp3" },
      { title: "Midnight Workhorse (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/midnight-workhorse-take-two.mp3" },
      { title: "Tide After the Club (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/tide-after-the-club-take-two.mp3" },
      { title: "Hands Up Higher (Take Three)", artist: "Touché Sessions", url: "https://audio.touchesm.com/hands-up-higher-take-three.mp3" },
      { title: "Hands Up Higher (Take Four)", artist: "Touché Sessions", url: "https://audio.touchesm.com/hands-up-higher-take-four.mp3" }
    ]
  },
  {
    name: "Indie Sounds",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Glowstick Weekend", artist: "Touché Sessions", url: "https://audio.touchesm.com/glowstick-weekend.mp3" },
      { title: "Library Card Sunset", artist: "Touché Sessions", url: "https://audio.touchesm.com/library-card-sunset.mp3" },
      { title: "Mirror Shake", artist: "Touché Sessions", url: "https://audio.touchesm.com/mirror-shake.mp3" },
      { title: "Mirrorball Pulse", artist: "Touché Sessions", url: "https://audio.touchesm.com/mirrorball-pulse.mp3" },
      { title: "Museum Floor", artist: "Touché Sessions", url: "https://audio.touchesm.com/museum-floor.mp3" },
      { title: "Palm Wine Radar", artist: "Touché Sessions", url: "https://audio.touchesm.com/palm-wine-radar.mp3" },
      { title: "Plastic Lemon Halo", artist: "Touché Sessions", url: "https://audio.touchesm.com/plastic-lemon-halo.mp3" },
      { title: "Plastic Palm Parade", artist: "Touché Sessions", url: "https://audio.touchesm.com/plastic-palm-parade.mp3" },
      { title: "Empty Pavement", artist: "Touché Sessions", url: "https://audio.touchesm.com/empty-pavement.mp3" },
      { title: "Velvet Backseat Crown", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-backseat-crown.mp3" },
      { title: "Turn The Corner", artist: "Touché Sessions", url: "https://audio.touchesm.com/turn-the-corner.mp3" },
      { title: "Neon Lump Throat", artist: "Touché Sessions", url: "https://audio.touchesm.com/neon-lump-throat.mp3" },
      { title: "Saturday On Deansgate", artist: "Touché Sessions", url: "https://audio.touchesm.com/saturday-on-deansgate.mp3" },
      { title: "Pint Glass Skies", artist: "Touché Sessions", url: "https://audio.touchesm.com/pint-glass-skies.mp3" },
      { title: "Paper Crown", artist: "Touché Sessions", url: "https://audio.touchesm.com/paper-crown.mp3" },
      { title: "Backdoor Sunday", artist: "Touché Sessions", url: "https://audio.touchesm.com/backdoor-sunday.mp3" },
      { title: "Kettle's On", artist: "Touché Sessions", url: "https://audio.touchesm.com/kettles-on.mp3" },
      { title: "Velvet Backseat Frown", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-backseat-frown.mp3" },
      { title: "Saturday On Deansgate (Smashed)", artist: "Touché Sessions", url: "https://audio.touchesm.com/saturday-on-deansgate-smashed.mp3" },
      { title: "Pint Glass Skies (Again)", artist: "Touché Sessions", url: "https://audio.touchesm.com/pint-glass-skies-again.mp3" },
      { title: "Back From The Bar", artist: "Touché Sessions", url: "https://audio.touchesm.com/back-from-the-bar.mp3" },
      { title: "Broken Mirror Floor", artist: "Touché Sessions", url: "https://audio.touchesm.com/broken-mirror-floor.mp3" },
      { title: "Last Call Parade", artist: "Touché Sessions", url: "https://audio.touchesm.com/last-call-parade.mp3" },
      { title: "Pint Glass Parade", artist: "Touché Sessions", url: "https://audio.touchesm.com/pint-glass-parade.mp3" },
      { title: "Velvet Spill", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-spill.mp3" },
      { title: "Don’t Wait Up Again", artist: "Touché Sessions", url: "https://audio.touchesm.com/dont-wait-up-again.mp3" },
      { title: "Don’t Wait Up", artist: "Touché Sessions", url: "https://audio.touchesm.com/dont-wait-up.mp3" },
      { title: "Good Vinyl Riot", artist: "Touché Sessions", url: "https://audio.touchesm.com/good-vinyl-riot.mp3" },
      /* alternate takes and remixes */
      { title: "Blindside Glow (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/blindside-glow-take-two.mp3" },
      { title: "Glowstick Weekend (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/glowstick-weekend-take-two.mp3" },
      { title: "Library Card Sunset (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/library-card-sunset-take-two.mp3" },
      { title: "Mirror Shake (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/mirror-shake-take-two.mp3" },
      { title: "Mirrorball Pulse (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/mirrorball-pulse-take-two.mp3" },
      { title: "Museum Floor (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/museum-floor-take-two.mp3" },
      { title: "Palm Wine Radar (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/palm-wine-radar-take-two.mp3" },
      { title: "Plastic Lemon Halo (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/plastic-lemon-halo-take-two.mp3" },
      { title: "Plastic Palm Parade (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/plastic-palm-parade-take-two.mp3" },
      { title: "Paper Crown (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/paper-crown-take-two.mp3" },
      { title: "Backdoor Sunday (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/backdoor-sunday-take-two.mp3" },
      { title: "Empty Pavement (Remix)", artist: "Touché Sessions", url: "https://audio.touchesm.com/empty-pavement-remix.mp3" },
      { title: "Kettle's On (Remix)", artist: "Touché Sessions", url: "https://audio.touchesm.com/kettles-on-remix.mp3" },
      { title: "Back From The Bar (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/back-from-the-bar-take-two.mp3" },
      { title: "Broken Mirror Floor (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/broken-mirror-floor-take-two.mp3" },
      { title: "Last Call Parade (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/last-call-parade-take-two.mp3" },
      { title: "Pint Glass Parade (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/pint-glass-parade-take-two.mp3" },
      { title: "Velvet Spill (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/velvet-spill-take-two.mp3" },
      { title: "Good Vinyl Riot (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/good-vinyl-riot-take-two.mp3" }
    ]
  },
  {
    name: "Stadium Rock Pop",
    tracks: [
      /* first takes — different tunes before anything repeats */
      { title: "Driving Queen", artist: "Touché Sessions", url: "https://audio.touchesm.com/driving-queen.mp3" },
      { title: "Dust on the Bible", artist: "Touché Sessions", url: "https://audio.touchesm.com/dust-on-the-bible.mp3" },
      { title: "Freight Running", artist: "Touché Sessions", url: "https://audio.touchesm.com/freight-running.mp3" },
      { title: "Gasoline Queen", artist: "Touché Sessions", url: "https://audio.touchesm.com/gasoline-queen.mp3" },
      { title: "I Ain't Ringing No More", artist: "Touché Sessions", url: "https://audio.touchesm.com/i-aint-ringing-no-more.mp3" },
      { title: "Just One More (NYC)", artist: "Touché Sessions", url: "https://audio.touchesm.com/just-one-more-nyc.mp3" },
      { title: "No One's Home", artist: "Touché Sessions", url: "https://audio.touchesm.com/no-ones-home.mp3" },
      { title: "One More Round", artist: "Touché Sessions", url: "https://audio.touchesm.com/one-more-round.mp3" },
      { title: "One More Shot (Vegas)", artist: "Touché Sessions", url: "https://audio.touchesm.com/one-more-shot-vegas.mp3" },
      { title: "Telephone's Ringing (I Ain't Home)", artist: "Touché Sessions", url: "https://audio.touchesm.com/telephones-ringing-i-aint-home.mp3" },
      { title: "Dusty Old Bible", artist: "Touché Sessions", url: "https://audio.touchesm.com/dusty-old-bible.mp3" },
      { title: "Freight Running Hard", artist: "Touché Sessions", url: "https://audio.touchesm.com/freight-running-hard.mp3" },
      { title: "Idle Bible", artist: "Touché Sessions", url: "https://audio.touchesm.com/idle-bible.mp3" },
      /* alternate takes and remixes */
      { title: "Gasoline Queen (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/gasoline-queen-take-two.mp3" },
      { title: "Telephone's Ringing (I Ain't Home) (Take Two)", artist: "Touché Sessions", url: "https://audio.touchesm.com/telephones-ringing-i-aint-home-take-two.mp3" },
      { title: "Driving Queen (Remix)", artist: "Touché Sessions", url: "https://audio.touchesm.com/driving-queen-remix.mp3" },
      { title: "Dusty Bible (Remix)", artist: "Touché Sessions", url: "https://audio.touchesm.com/dusty-bible-remix.mp3" },
      { title: "Midnight Freight (Instrumental)", artist: "Touché Sessions", url: "https://audio.touchesm.com/midnight-freight-instrumental.mp3" },
      { title: "Midnight Freight (Instrumental Remix)", artist: "Touché Sessions", url: "https://audio.touchesm.com/midnight-freight-instrumental-remix.mp3" }
    ]
  }
];
