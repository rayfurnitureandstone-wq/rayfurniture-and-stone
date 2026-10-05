## 🚀 Commands

| Command        | Action                                           |
| --------------- | -------------------------------------------------- |
| `npm run dev`   | Dev server lokal http://localhost:4321          |
| `npm run build` | Build produksi ke ./dist/                        |
| `npm run cms`   | Decap CMS proxy http://localhost:8081            |
| `cms.bat`       | Jalankan CMS + petunjuk                          |

## Update konten (artikel & banner hero)
1. Jendela 1: `npm run dev`, lalu buka http://localhost:4321/admin di browser.
2. Jendela 2: `npm run cms` (atau dobel klik `cms.bat`).
3. Di browser, pilih **Local Backend** → edit artikel atau slide hero.
   Setiap save langsung commit ke repo git lokal.
4. Refresh halaman untuk lihat perubahan.

Backend default `git-gateway` dipakai untuk hosting produksi (Netlify). Untuk lokal,
`local_backend: true` di `public/admin/config.yml` mengarah ke `decap-server` port 8081.

## Deploy
Upload seluruh isi `dist/` ke hosting statis. Skema harga final keluar setelah survei lokasi.
