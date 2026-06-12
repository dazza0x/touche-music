/* =====================================================================
   Touché — Salon Soundtrack player
   Plays the playlists defined in playlists.js. Designed for minimal
   input: one tap on a playlist and the music runs all day.
   ===================================================================== */

/* ===================== player state ===================== */
const audio = document.getElementById('audio');
let plIndex = 0;          // current playlist
let trIndex = 0;          // current track
let shuffle = false;
let loop = true;          // repeat playlist — on by default for the salon
let started = false;
let shuffleBag = [];      // upcoming track order when shuffling — every
                          // track plays once before any repeats

const $ = id => document.getElementById(id);
const fmt = s => isFinite(s) ? `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}` : '0:00';

/* track durations, fetched from the MP3 headers so the list can show
   lengths without downloading whole files (keyed by url) */
const durations = {};
function fillDurations(){
  PLAYLISTS[plIndex].tracks.forEach((t,i)=>{
    const span = $('len-'+i);
    if (!span) return;
    if (durations[t.url] !== undefined){ span.textContent = fmt(durations[t.url]); return; }
    const probe = new Audio();
    probe.preload = 'metadata';
    probe.src = t.url;
    probe.addEventListener('loadedmetadata', ()=>{
      durations[t.url] = probe.duration;
      const s = $('len-'+i);
      if (s) s.textContent = fmt(probe.duration);
    }, { once:true });
  });
}

/* ===================== rendering ===================== */
function renderPlaylists(){
  const nav = $('playlistNav');
  nav.innerHTML = '';
  PLAYLISTS.forEach((p,i)=>{
    const b = document.createElement('button');
    b.className = 'chip' + (i===plIndex ? ' active' : '');
    b.textContent = p.name;
    b.onclick = ()=> selectPlaylist(i);
    nav.appendChild(b);
  });
  /* the dropdown mirrors the chips for small screens */
  const sel = $('plSelect');
  sel.innerHTML = '';
  PLAYLISTS.forEach((p,i)=>{
    const o = document.createElement('option');
    o.value = i;
    o.textContent = p.name;
    sel.appendChild(o);
  });
  sel.value = plIndex;
}

function renderTracks(){
  const list = $('trackList');
  list.innerHTML = '';
  PLAYLISTS[plIndex].tracks.forEach((t,i)=>{
    const b = document.createElement('button');
    b.className = 'track' + (i===trIndex && started ? ' current' : '');
    b.innerHTML = `<span class="idx">${i===trIndex && started ? '♪' : i+1}</span>
                   <span class="name">${t.title}</span>
                   <span class="len" id="len-${i}"></span>`;
    b.onclick = ()=> playTrack(i);
    list.appendChild(b);
  });
  fillDurations();
}

function renderNow(){
  const t = PLAYLISTS[plIndex].tracks[trIndex];
  $('npPlaylist').textContent = PLAYLISTS[plIndex].name;
  /* a playlist can be empty while songs are still being added */
  if (!t){
    $('npTitle').textContent = 'Nothing here yet';
    $('npArtist').textContent = 'Songs added to this playlist will appear shortly';
    $('barNow').textContent = 'Nothing here yet';
    document.body.classList.remove('playing');
    $('iconPlay').style.display = 'block';
    $('iconPause').style.display = 'none';
    return;
  }
  /* slim now-playing line shown in the bar on small screens */
  if (started){
    $('barNow').innerHTML = '';
    $('barNow').append(t.title, ' — ');
    const a = document.createElement('span');
    a.className = 'bn-artist';
    a.textContent = t.artist;
    $('barNow').appendChild(a);
  } else {
    $('barNow').textContent = PLAYLISTS[plIndex].name + ' — tap play';
  }
  $('npTitle').textContent = started ? t.title : 'Choose a playlist';
  $('npArtist').textContent = started ? t.artist : 'Tap play and the music looks after itself';
  document.body.classList.toggle('playing', started && !audio.paused);
  $('iconPlay').style.display  = (started && !audio.paused) ? 'none' : 'block';
  $('iconPause').style.display = (started && !audio.paused) ? 'block' : 'none';
  if (started && 'mediaSession' in navigator){
    navigator.mediaSession.metadata = new MediaMetadata({
      title: t.title,
      artist: t.artist,
      album: 'Touché — ' + PLAYLISTS[plIndex].name
    });
  }
}

/* ===================== shuffle ===================== */
/* Fisher–Yates shuffle of every track index except the current one, so
   shuffle plays the whole playlist through before starting again */
function refillShuffleBag(){
  shuffleBag = PLAYLISTS[plIndex].tracks.map((_,i)=>i).filter(i=>i!==trIndex);
  for (let i = shuffleBag.length-1; i > 0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [shuffleBag[i], shuffleBag[j]] = [shuffleBag[j], shuffleBag[i]];
  }
}

/* ===================== playback ===================== */
function selectPlaylist(i){
  plIndex = i;
  trIndex = shuffle ? Math.floor(Math.random()*PLAYLISTS[i].tracks.length) : 0;
  shuffleBag = [];
  renderPlaylists();
  playTrack(trIndex);   // one tap = music on. Minimal input.
}

function playTrack(i){
  if (!PLAYLISTS[plIndex].tracks[i]){
    /* empty playlist — show its (empty) state rather than erroring */
    trIndex = 0;
    started = false;
    audio.pause();
    renderTracks();
    renderNow();
    return;
  }
  trIndex = i;
  started = true;
  audio.src = PLAYLISTS[plIndex].tracks[i].url;
  audio.play().catch(()=>{ /* autoplay needs a user gesture — first tap covers it */ });
  renderTracks();
  renderNow();
}

function nextTrack(){
  const n = PLAYLISTS[plIndex].tracks.length;
  let next;
  if (shuffle){
    if (!shuffleBag.length){
      if (!loop && started){ audio.pause(); renderNow(); return; }
      refillShuffleBag();
      if (!shuffleBag.length) shuffleBag = [trIndex]; // single-track playlist
    }
    next = shuffleBag.shift();
  } else {
    next = trIndex + 1;
    if (next >= n){
      if (!loop){ audio.pause(); renderNow(); return; }
      next = 0;
    }
  }
  playTrack(next);
}

function prevTrack(){
  if (audio.currentTime > 4){ audio.currentTime = 0; return; }
  const n = PLAYLISTS[plIndex].tracks.length;
  playTrack((trIndex - 1 + n) % n);
}

/* ===================== controls ===================== */
$('playBtn').onclick = ()=>{
  if (!started){ selectPlaylist(plIndex); return; }
  audio.paused ? audio.play() : audio.pause();
};
$('nextBtn').onclick = nextTrack;
$('prevBtn').onclick = prevTrack;
$('plSelect').onchange = e => selectPlaylist(+e.target.value);
$('shuffleBtn').onclick = e =>{
  shuffle = !shuffle;
  shuffleBag = [];
  e.currentTarget.classList.toggle('on', shuffle);
};
$('loopBtn').onclick = e =>{
  loop = !loop;
  e.currentTarget.classList.toggle('on', loop);
};

audio.addEventListener('ended', nextTrack);
audio.addEventListener('play',  renderNow);
audio.addEventListener('pause', renderNow);

/* if a track fails to load (bad url, network blip), skip to the next
   after a moment rather than leaving the salon in silence */
audio.addEventListener('error', ()=>{
  if (started) setTimeout(nextTrack, 2000);
});

/* progress / seek — while a finger or mouse is on the slider, playback
   must not move the thumb, or dragging fights the 4-times-a-second
   timeupdate and the thumb appears to snap away */
let seeking = false;
const seekEl = $('seek');
audio.addEventListener('timeupdate', ()=>{
  $('tCur').textContent = fmt(audio.currentTime);
  $('tEnd').textContent = fmt(audio.duration);
  if (!seeking && isFinite(audio.duration)) seekEl.value = (audio.currentTime/audio.duration)*100;
});
seekEl.addEventListener('pointerdown',   ()=>{ seeking = true; });
seekEl.addEventListener('pointerup',     ()=>{ seeking = false; });
seekEl.addEventListener('pointercancel', ()=>{ seeking = false; });
seekEl.addEventListener('input', e=>{
  if (isFinite(audio.duration)) audio.currentTime = (e.target.value/100)*audio.duration;
});

/* volume — works in desktop browsers. iPads and iPhones ignore software
   volume entirely (Apple reserves it for the hardware buttons and the
   Sonos/AirPlay target), so the slider is hidden there rather than
   shown broken. The chosen level is remembered between visits. */
const isAppleTouch = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
if (isAppleTouch){
  $('volWrap').style.display = 'none';
} else {
  const saved = parseFloat(localStorage.getItem('touche-volume'));
  if (!isNaN(saved)){ audio.volume = saved; $('vol').value = saved*100; }
  $('vol').addEventListener('input', e=>{
    audio.volume = e.target.value/100;
    localStorage.setItem('touche-volume', audio.volume);
  });
}

/* lock-screen / control-centre buttons (Media Session API) */
if ('mediaSession' in navigator){
  navigator.mediaSession.setActionHandler('play',  ()=>audio.play());
  navigator.mediaSession.setActionHandler('pause', ()=>audio.pause());
  navigator.mediaSession.setActionHandler('nexttrack',     nextTrack);
  navigator.mediaSession.setActionHandler('previoustrack', prevTrack);
  try {
    navigator.mediaSession.setActionHandler('seekto', d =>{
      if (d.seekTime != null && isFinite(audio.duration)) audio.currentTime = d.seekTime;
    });
  } catch(e){ /* seekto not supported everywhere — fine without it */ }
}

/* ===================== theme — light / dark / follow the device ===================== */
const themeOrder = ['system', 'light', 'dark'];
const themeLabels = {
  system: 'Theme: follows the device',
  light:  'Theme: light',
  dark:   'Theme: dark'
};
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(mode){
  if (mode === 'system') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = mode;
  $('iconThemeAuto').style.display  = mode === 'system' ? 'block' : 'none';
  $('iconThemeLight').style.display = mode === 'light'  ? 'block' : 'none';
  $('iconThemeDark').style.display  = mode === 'dark'   ? 'block' : 'none';
  $('themeBtn').setAttribute('aria-label', themeLabels[mode]);
  /* keep the browser chrome colour in step (iOS status bar etc.) */
  const dark = mode === 'dark' || (mode === 'system' && darkQuery.matches);
  document.querySelector('meta[name="theme-color"]').content = dark ? '#1e1a15' : '#f6f1e8';
}

let theme = localStorage.getItem('touche-theme');
if (themeOrder.indexOf(theme) === -1) theme = 'system';
applyTheme(theme);

$('themeBtn').onclick = ()=>{
  theme = themeOrder[(themeOrder.indexOf(theme) + 1) % themeOrder.length];
  localStorage.setItem('touche-theme', theme);
  applyTheme(theme);
};
/* follow live OS switches while in system mode */
if (darkQuery.addEventListener) darkQuery.addEventListener('change', ()=> applyTheme(theme));
else if (darkQuery.addListener) darkQuery.addListener(()=> applyTheme(theme));

/* ===================== service worker (PWA) ===================== */
if ('serviceWorker' in navigator && location.protocol === 'https:'){
  window.addEventListener('load', ()=> navigator.serviceWorker.register('sw.js'));
}

/* ===================== init ===================== */
renderPlaylists();
renderTracks();
renderNow();
