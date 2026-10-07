#!/usr/bin/env python3
"""Cek banner unik untuk artikel Ray Furniture & Stone.

Mencegah satu banner dipakai dua artikel, dan memastikan setiap banner
yang dirujuk frontmatter benar-benar ada filenya.

Pakai:
    python check_banners.py                # cek seluruh posts/
    python check_banners.py --slug foo     # cek satu artikel + usul nama banner

Exit 1 kalau ada banner duplikat atau file hilang.
"""
import argparse
import os
import re
import sys

POSTS = "src/content/posts"
IMAGES = "public/images/ai"
BANNER_RE = re.compile(r'^banner:\s*"?([^"\n]+)"?\s*$', re.M)


def read_banners(posts_dir):
    """{banner_path: [slug, ...]} dari semua frontmatter."""
    used = {}
    for fn in sorted(os.listdir(posts_dir)):
        if not fn.endswith(".md"):
            continue
        slug = fn[:-3]
        text = open(os.path.join(posts_dir, fn), encoding="utf-8").read()
        m = BANNER_RE.search(text)
        if m:
            used.setdefault(m.group(1).strip(), []).append(slug)
    return used


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", help="slug artikel baru untuk usul nama banner")
    ap.add_argument("--posts", default=POSTS)
    ap.add_argument("--images", default=IMAGES)
    args = ap.parse_args()

    used = read_banners(args.posts)
    total = len([f for f in os.listdir(args.posts) if f.endswith(".md")])
    fails = []

    if args.slug:
        want = f"/images/ai/{args.slug}.jpg"
        if want in used:
            print(f"BENTROK: {want} sudah dipakai {used[want]}")
            fails.append(want)
        else:
            print(f"AMAN   : {want} belum dipakai")
            print(f"         tulis di frontmatter -> banner: \"{want}\"")
        return 1 if fails else 0

    for path, slugs in sorted(used.items()):
        if len(slugs) > 1:
            print(f"DUPLIKAT: {path}")
            for s in slugs:
                print(f"          dipakai oleh {s}")
            fails.append(path)
        disk = os.path.join(args.images, os.path.basename(path))
        if not os.path.isfile(disk):
            print(f"HILANG  : {path} (tidak ada di {args.images})")
            fails.append(path)

    print(f"\nartikel: {total} | banner unik: {len(used)} | masalah: {len(fails)}")
    if not fails and len(used) < total:
        print(f"catatan: {total - len(used)} artikel tanpa banner (field opsional, sah)")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
