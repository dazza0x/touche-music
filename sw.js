/* Touché — Salon Soundtrack service worker
   Caches the app shell so the player opens instantly from the Home
   Screen. Audio is deliberately NOT intercepted — Safari streams MP3s
   with range requests, and letting those pass straight through keeps
   seeking and long-play reliable. */

const CACHE = 'touche-music-v4';
const SHELL = [
  './',
  'index.html',
  'styles.css',
  'player.js',
  'playlists.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // leave audio and anything cross-origin (fonts CDN, R2) to the network
  if (e.request.method !== 'GET') return;
  if (url.pathname.endsWith('.mp3')) return;
  if (url.origin !== location.origin) return;

  // network first so playlist edits show up promptly; cache as fallback
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
