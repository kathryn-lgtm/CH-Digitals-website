# Image inventory + compression target list

**Phase 1a Push-through P1**
**Date:** 2026-05-14
**Agent:** Claude (Opus 4.7)
**Scope:** Source-of-truth inventory of `public/images/**` with file sizes, usage references, and compression/deletion candidates.

## Why this is an inventory, not a compression pass

Remote agent sessions don't have binary image-processing tools (`sharp`, `imagemin`, `cwebp`). Compression must run from a desktop Code session, CI, or local tooling. This inventory gives that session a precise target list so it can be a 5-minute job instead of a discovery exercise.

## Headline finding

**~5.89 MB of dead weight in `public/images/founder/`** — two AI-generated source-resolution PNGs that aren't referenced by any code in the repo:

| File | Size | Status |
|---|---|---|
| `public/images/founder/kathryn-about.png` | **1,970,799 bytes (1.97 MB)** | Unused. Zero source references. The `kathryn-about-fresh.jpg` variant (43.5 KB) is what's actually used. |
| `public/images/founder/kathryn-strategy.png` | **3,917,529 bytes (3.92 MB)** | Unused. Zero source references anywhere. |

These two files alone are responsible for almost all the >200 KB threshold breaches. Removing them is the single biggest PageSpeed lever available without compression tooling.

## Full inventory (every file in `public/images/`)

| File | Size | Used in source? | Over 200 KB? | Action |
|---|---|---|---|---|
| `bce/bce-favicon.svg` | 305 B | No matches | No | Likely intended for future PWA manifest. Keep, flag. |
| `bce/bce-hero-1600x1200.svg` | 1.9 KB | No matches | No | Unused. Candidate for deletion. |
| `bce/bce-inverted-512.png` | 24.2 KB | No matches | No | Unused. Candidate for deletion. |
| `bce/bce-inverted.svg` | 332 B | ✅ home + bce | No | Keep. |
| `bce/bce-primary-512.png` | 24.3 KB | No matches | No | Unused. Candidate for deletion. |
| `bce/bce-primary.svg` | 332 B | No matches | No | Unused. Candidate for deletion. |
| `bce/bce-social-1200x630.png` | 54.3 KB | No matches | No | Likely intended for OG image. Keep, flag. |
| `bce/bce-stamp.svg` | 332 B | No matches | No | Unused. Candidate for deletion. |
| `brand/logo-black.svg` | 27.1 KB | No matches | No | Unused. Candidate for deletion. |
| `brand/logo-transparent.png` | 34.8 KB | ✅ site-header | No | Keep. **Conversion candidate — trim to SVG or smaller PNG.** |
| `brand/logo-white.png` | 32.5 KB | No matches | No | Unused. Candidate for deletion. |
| `brand/logo.svg` | 27.1 KB | No matches | No | Unused. Candidate for deletion. |
| `clients/birth-teacher.png` | 7.7 KB | ✅ home logos | No | Keep. |
| `clients/dermagen.png` | 8.0 KB | ✅ home logos | No | Keep. |
| `clients/dtmag.png` | 5.2 KB | ✅ home logos | No | Keep. |
| `clients/dusk.png` | 8.7 KB | ✅ home logos | No | Keep. |
| `clients/hydrotek.png` | 8.3 KB | ✅ home logos | No | Keep. |
| `clients/jmag.png` | 6.2 KB | ✅ home logos | No | Keep. |
| `clients/mnm.png` | 24.5 KB | ✅ home logos | No | Keep. |
| `clients/mssheds.png` | 16.3 KB | ✅ home logos | No | Keep. |
| `clients/mtk.png` | 5.6 KB | ✅ home logos | No | Keep. |
| `clients/social-hub.png` | 52.6 KB | ✅ home logos | No | Keep. **Largest client logo — trim 50%+ achievable.** |
| `clients/vulcan.jpg` | 39.0 KB | ✅ home logos | No | Keep. |
| `founder/kathryn-about-fresh.jpg` | 43.5 KB | ✅ home + about | No | **HOLD — brand-guide AI portrait, real-photo replacement pending.** |
| `founder/kathryn-about.png` | **1,970,799 B (1.97 MB)** | **No matches** | **Yes** | **DELETE on Kathryn approval.** |
| `founder/kathryn-home-founder.jpg` | 35.0 KB | ✅ home | No | **HOLD** — same AI portrait status. |
| `founder/kathryn-services.jpg` | 39.4 KB | ✅ services | No | Keep. Real photo. |
| `founder/kathryn-strategy.png` | **3,917,529 B (3.92 MB)** | **No matches** | **Yes** | **DELETE on Kathryn approval.** |

## What the source check looked like

For each candidate, ran a GitHub code search across the whole repo for the bare filename stem (e.g. `kathryn-strategy`). Files with zero hits and no use in `next.config.ts`, `app/manifest.ts`, or metadata blocks are classified `Unused`. AI portraits in `founder/` are explicitly held under the 2026-05-14 decision (do not swap to fallback, real-photo replacement pending).

## Compression candidates (if/when desktop Code runs the pass)

None of the currently-used images are over the 200 KB threshold. Two opportunities for additional savings even though they're under threshold:

1. `brand/logo-transparent.png` (34.8 KB) — the site header logo. Could be exported as optimised SVG or smaller PNG. Marginal win.
2. `clients/social-hub.png` (52.6 KB) — largest client logo. Most other client logos are 5–9 KB; this one is an outlier. Re-export at the same dimensions could halve it.

## Recommendation for Kathryn

Approve deletion of the two unused 1.97 MB + 3.92 MB founder PNGs (sole owners of the 200 KB+ tier) plus the eight other unused assets (~120 KB combined). Total dead weight removed: **~6.0 MB**.

If approved: Code (next session, or desktop Code) deletes them in a single commit on the branch, marked clearly as "remove unused image assets." Rollback is one revert if needed.

If rejected (e.g. you want to keep `bce-social-1200x630.png` for a future OG image): name which files to keep, Code removes the rest.

## Bigger picture (PageSpeed)

Job 1.6 (PageSpeed audit) is still blocked on tool access. But this inventory addresses the underlying source-side problem:

- Next.js' `<Image>` component already serves WebP/AVIF + responsive sizes at request time on used images.
- The 5.89 MB of unused files don't get served (they're not referenced) but they DO inflate clone time, build context, and any deploy that copies `public/` wholesale.
- Removing them gets the repo back to a clean baseline. When desktop Code runs PageSpeed, the surviving in-use images are all under 55 KB and using `next/image` — PageSpeed image-weight signal should already be clean.
