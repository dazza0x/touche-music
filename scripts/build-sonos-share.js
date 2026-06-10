/* Builds the Sonos music library share from playlists.js.
   Copies every MP3 into <target>\audio and writes one .m3u playlist
   per genre, which Sonos shows under Music Library → Imported
   Playlists. Re-run after adding songs:

     node scripts\build-sonos-share.js [target]

   target defaults to C:\ToucheMusic */
const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const target = process.argv[2] || 'C:\\ToucheMusic';

const PLAYLISTS = new Function(
  fs.readFileSync(path.join(repoRoot, 'playlists.js'), 'utf8') + '; return PLAYLISTS;'
)();

fs.mkdirSync(path.join(target, 'audio'), { recursive: true });

let copied = 0, kept = 0;
const seen = new Set();
for (const pl of PLAYLISTS){
  for (const t of pl.tracks){
    const name = path.basename(t.url);
    if (seen.has(name)) continue;
    seen.add(name);
    const from = path.join(repoRoot, t.url);
    const to = path.join(target, 'audio', name);
    // copy only new or changed files so re-runs are quick
    if (!fs.existsSync(to) || fs.statSync(to).size !== fs.statSync(from).size){
      fs.copyFileSync(from, to);
      copied++;
    } else {
      kept++;
    }
  }
}

// Windows forbids a few characters in filenames; the playlist name
// becomes the .m3u filename, so make it safe
const safe = s => s.replace(/[\\/:*?"<>|]/g, '-');

for (const pl of PLAYLISTS){
  const lines = ['#EXTM3U'];
  for (const t of pl.tracks){
    lines.push(`#EXTINF:-1,${t.artist} - ${t.title}`);
    lines.push('audio\\' + path.basename(t.url));
  }
  fs.writeFileSync(path.join(target, safe(pl.name) + '.m3u'), lines.join('\r\n') + '\r\n');
}

console.log(`${seen.size} tracks in share (${copied} copied, ${kept} already present)`);
console.log(`${PLAYLISTS.length} playlists: ${PLAYLISTS.map(p => p.name).join(', ')}`);
console.log(`Share folder ready at ${target}`);
