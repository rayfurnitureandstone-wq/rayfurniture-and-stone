// Susun folder self-contained untuk deploy Pages subdomain.
//
// Astro hanya mengeluarkan `dist/<sub>/index.html`; asetnya ada di `dist/_astro/`
// dan `dist/images/`. Kalau folder `dist/<sub>/` diunggah apa adanya, CSS dan
// gambar tidak ikut, dan Cloudflare Pages membalas HTML untuk setiap permintaan
// aset (status 200, Content-Type text/html) sehingga halaman tampil tanpa gaya.
//
// Pakai: node scripts/stage-sub.mjs top-table-cibubur
// Hasil: _deploy/<sub>/  (siap diunggah ke Pages)
import { readFileSync, mkdirSync, cpSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';

const sub = process.argv[2];
if (!sub) {
  console.error('Sebutkan nama folder halaman, mis: node scripts/stage-sub.mjs top-table-cibubur');
  process.exit(1);
}

const dist = 'dist';
const srcHtml = join(dist, sub, 'index.html');
if (!existsSync(srcHtml)) {
  console.error(`Tidak ada ${srcHtml}. Jalankan "npm run build" dulu.`);
  process.exit(1);
}

const out = join('_deploy', sub);
const html = readFileSync(srcHtml, 'utf8');

// semua rujukan lokal (bukan http/mailto/tel/#/data), lalu ambil yang benar-benar ada di dist
const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((u) => !/^(?:[a-z]+:|\/\/|#)/i.test(u))
  .map((u) => u.replace(/^(?:\.\.\/|\/)+/, ''))
  .filter((u) => u && existsSync(join(dist, u)) && statSync(join(dist, u)).isFile());

mkdirSync(out, { recursive: true });
cpSync(srcHtml, join(out, 'index.html'));
for (const rel of new Set(refs)) {
  mkdirSync(dirname(join(out, rel)), { recursive: true });
  cpSync(join(dist, rel), join(out, rel));
}

console.log(`${new Set(refs).size} aset disiapkan di ${out}/`);
console.log('ulasan:');
console.log('  npx wrangler pages deploy ' + out + ' --project-name=' + sub);