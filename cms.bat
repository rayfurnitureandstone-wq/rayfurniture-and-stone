@echo off
setlocal
cd /d "D:\AGENAI\web-astro"
echo ============================================
echo  Decap CMS Proxy Server  (port 8081)
echo  - Jalankan dulu "npm run dev" (port 4321)
echo  - Buka di browser: http://localhost:4321/admin
echo  Edit artikel + banner hero, commit otomatis lewat git.
echo ============================================
npx decap-server --port 8081
