# Kacerys image optimisation report

## Size before / after (referenced images only)
| | Before (PNG) | After (WebP) |
|---|---|---|
| 40 referenced product/hero images | 72.9 MB | 5.97 MB (-92%) |
| Extra 640px card variants (11 files) | n/a | 0.52 MB total, used only by cards |
| Favicon (favicon-k.png 1024px -> favicon-k-192.png) | 1.31 MB | 6 KB |

Typical image weight per page (cards use the 640px variant; counts every
image on the page, thumbnails included):
home 8.08 -> 0.24 MB | projects 19.07 -> 0.53 MB | birdfeeder 12.42 -> 0.81 MB |
sacapuntas 12.08 -> 0.54 MB | mailbox 7.81 -> 0.82 MB | columpio 8.05 -> 0.75 MB |
contact 2.46 -> 0.29 MB | retaining-ring unchanged (already WebP).

## What changed
- Original PNGs are untouched. New .webp files sit beside them (same name).
- Full-size WebP keeps native resolution (no downscaling), quality 90.
  PSNR vs original: 37-45 dB. I compared a 100% crop of the lowest-scoring image
  by eye and saw no visible difference. I did not review every image by eye.
- Catalogue and homepage cards use srcset (640px + full size) and sizes.
- All product/card/contact images now have width/height. Product thumbnails get
  loading="lazy"; the main product image gets fetchpriority="high".
- Content Collection: image paths now point to .webp; optional imageWidth and
  imageHeight fields added (schema + 11 .md files).
- New helper: src/utils/projectImage.ts.
- Layout.astro: favicon points to favicon-k-192.png.
- Not touched: gnome images, CSS, JS, gallery logic, URLs, Etsy links.

## Verified
- npm ci + npm run build: succeeds, 16 routes.
- 403 internal links/image/srcset paths in built HTML: none broken.
- No .png references remain in built HTML; no <img> lacks width/height
  (except the gnome maker image, deliberately left alone).

## Not verified
- No browser testing: gallery swap, filters, mobile layout and visual
  appearance were not checked by eye. Please test locally.
- No Lighthouse/CLS measurements. Page weights above are file sizes, not timings.

## Notes
- Unreferenced images were left alone: klab-background.png, projectKacerys.png,
  heroproject.v2.png, mailbox/1.png and mailbox2.png,
  papiro-birdfeeder/2.png, 3.png, imagen4.png and real.png.
- The deployed site still contains the original PNGs (they live in public/).
  Moving them out of public/ later would shrink the deploy but was not done.

## Apply in WSL
  cd ~/repos/kacerys && git status
  tar -czf ~/repos/kacerys-before-images.tar.gz src public
  cd ~/repos && unzip -o /mnt/c/Users/Pablo/Downloads/kacerys-image-optimisation.zip
  cd ~/repos/kacerys && npm run build && npm run dev
