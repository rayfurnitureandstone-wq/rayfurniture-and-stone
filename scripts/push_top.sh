#!/bin/bash
cd /d/AGENAI/web-astro
npm run build 2>&1 | tail -2
rm -rf top-table-cibubur && mkdir -p top-table-cibubur
cp -r dist/top-table-cibubur/* top-table-cibubur/
git add top-table-cibubur && git commit -q -m "auto: update top-table-cibubur" && git push 2>&1 | tail -2
