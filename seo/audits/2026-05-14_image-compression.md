# Image inventory + compression target list

**Phase 1a Push-through P1**
**Date:** 2026-05-14 (updated post-Kathryn-decision)
**Agent:** Claude (Opus 4.7)
**Scope:** Source-of-truth inventory of `public/images/**` with file sizes and usage references.

## Why this is an inventory, not a compression pass

Remote agent sessions don't have binary image-processing tools (`sharp`, `imagemin`, `cwebp`). Compression must run from a desktop Code session, CI, or local tooling. This inventory gives that session a precise target list so it can be a 5-minute job instead of a discovery exercise.

## Kathryn decision (2026-05-14)

**Hold all images.** No deletions on this branch. Even unreferenced files remain in place — they may be source material for future use (real-photo replacements, OG image wiring, etc.). This audit stays as reference for if/when desktop Code runs a compression pass.

## Headline observation (informational, no action)

Two founder-folder PNGs are not referenced anywhere in the code:

| File | Size | Why noted |
|---|---|---|
| `public/images/founder/kathryn-about.png` | 1,970,799 bytes (1.97 MB) | Not the same as `kathryn-about-fresh.jpg` (43.5 KB) which IS used on home + about. |
| `public/images/founder/kathryn-strategy.png` | 3,917,529 bytes (3.92 MB) | Zero source references anywhere. |

These aren't served to visitors (no source code links to them), but they add ~5.89 MB to repo clone size and deploy bundle. **Per Kathryn's decision, they remain in place.**

## Full inventory (every file in `public/images/`)

| File | Size | Used in source? | Over 200 KB? | Status |
|---|---|---|---|---|
| `bce/bce-favicon.svg` | 305 B | No matches | No | Hold |
| `bce/bce-hero-1600x1200.svg` | 1.9 KB | No matches | No | Hold |
| `bce/bce-inverted-512.png` | 24.2 KB | No matches | No | Hold |
| `bce/bce-inverted.svg` | 332 B | ✅ home + bce | No | Keep — in use |
| `bce/bce-primary-512.png` | 24.3 KB | No matches | No | Hold |
| `bce/bce-primary.svg` | 332 B | No matches | No | Hold |
| `bce/bce-social-1200x630.png` | 54.3 KB | No matches | No | Hold — likely intended for OG image |
| `bce/bce-stamp.svg` | 332 B | No matches | No | Hold |
| `brand/logo-black.svg` | 27.1 KB | No matches | No | Hold |
| `brand/logo-transparent.png` | 34.8 KB | ✅ site-header | No | Keep — in use |
| `brand/logo-white.png` | 32.5 KB | No matches | No | Hold |
| `brand/logo.svg` | 27.1 KB | No matches | No | Hold |
| `clients/birth-teacher.png` | 7.7 KB | ✅ home logos | No | Keep |
| `clients/dermagen.png` | 8.0 KB | ✅ home logos | No | Keep |
| `clients/dtmag.png` | 5.2 KB | ✅ home logos | No | Keep |
| `clients/dusk.png` | 8.7 KB | ✅ home logos | No | Keep |
| `clients/hydrotek.png` | 8.3 KB | ✅ home logos | No | Keep |
| `clients/jmag.png` | 6.2 KB | ✅ home logos | No | Keep |
| `clients/mnm.png` | 24.5 KB | ✅ home logos | No | Keep |
| `clients/mssheds.png` | 16.3 KB | ✅ home logos | No | Keep |
| `clients/mtk.png` | 5.6 KB | ✅ home logos | No | Keep |
| `clients/social-hub.png` | 52.6 KB | ✅ home logos | No | Keep. Re-export could halve it. |
| `clients/vulcan.jpg` | 39.0 KB | ✅ home logos | No | Keep |
| `founder/kathryn-about-fresh.jpg` | 43.5 KB | ✅ home + about | No | **HOLD** — AI portrait, real-photo replacement pending |
| `founder/kathryn-about.png` | 1,970,799 B (1.97 MB) | No matches | Yes | **HOLD** per Kathryn 2026-05-14 |
| `founder/kathryn-home-founder.jpg` | 35.0 KB | ✅ home | No | **HOLD** — AI portrait, real-photo replacement pending |
| `founder/kathryn-services.jpg` | 39.4 KB | ✅ services | No | Keep — real photo |
| `founder/kathryn-strategy.png` | 3,917,529 B (3.92 MB) | No matches | Yes | **HOLD** per Kathryn 2026-05-14 |

## What the source check looked like

For each candidate, ran a GitHub code search across the whole repo for the bare filename stem (e.g. `kathryn-strategy`). Files with zero hits and no use in `next.config.ts`, `app/manifest.ts`, or metadata blocks are classified `No matches` in the table.

## Compression candidates (if/when desktop Code runs the pass)

None of the currently-used images are over the 200 KB threshold. Two minor optimisation candidates even though under threshold:

1. `brand/logo-transparent.png` (34.8 KB) — site header logo. Could be re-exported as optimised SVG or smaller PNG. Marginal win.
2. `clients/social-hub.png` (52.6 KB) — largest client logo. Other client logos are 5–9 KB; this one is an outlier. Re-export at same dimensions could halve it.

## Bigger picture (PageSpeed)

Job 1.6 (PageSpeed audit) is still blocked on tool access. Source-side observations:

- Next.js' `<Image>` component already serves WebP/AVIF + responsive sizes at request time on used images.
- Unreferenced files don't get served (no code links to them) but they DO inflate clone time and deploy bundle.
- Surviving in-use images are all under 55 KB and use `next/image` — PageSpeed image-weight signal should already be clean.
