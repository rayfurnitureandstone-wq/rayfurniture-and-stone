#!/usr/bin/env node
/* deploy_web.js — build + deploy web utama rayfurnitureandstone.id ke Cloudflare Worker 'rayfs'.
   Dipanggil cron setelah supaya artikel push langsung tayang.
   Token dibaca dari .cloudflare-deploy.md. Gagal = exit 1 + pesan jelas. */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
process.chdir(ROOT);

function fail(msg) { console.error('GAGAL: ' + msg); process.exit(1); }

// 1) Token
const md = fs.readFileSync(path.join(ROOT, '.cloudflare-deploy.md'), 'utf8');
const m = md.match(/API token:\s*`([^`]+)`/);
const TOKEN = m && m[1].trim();
if (!TOKEN || TOKEN.length < 20) fail('Token Cloudflare tidak ditemukan / pendek di .cloudflare-deploy.md');
process.env.CLOUDFLARE_API_TOKEN = TOKEN;
process.env.CLOUDFLARE_ACCOUNT_ID = '44f74034e300dd4fe832d5dc771d7a41';

// 2) Build
console.log('1/2 build Astro...');
try { execSync('npm run build', { stdio: 'inherit' }); }
catch (e) { fail('npm run build gagal'); }

// 3) Deploy
console.log('2/2 deploy ke Cloudflare Worker rayfs (rayfurnitureandstone.id)...');
try {
  execSync('npx wrangler deploy --domains "rayfurnitureandstone.id" "www.rayfurnitureandstone.id"',
    { stdio: 'inherit' });
} catch (e) { fail('wrangler deploy gagal'); }

console.log('OK: web utama sudah di-deploy. Verifikasi artikel dengan curl.');
