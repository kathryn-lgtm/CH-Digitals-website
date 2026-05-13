DRAFT — not approved. Kathryn quick-approve, then move to `approved/`.

# Image alt text inventory

**Method:** every `<Image>` usage in `src/app/**` grepped from source. Existing alts are mostly factual and acceptable; flags below.

| File | src | Current alt | Status |
|---|---|---|---|
| `src/components/site/site-header.tsx` | `/images/brand/logo-transparent.png` | `CH Digitals logo` | ✅ OK |
| `src/app/page.tsx` (home hero) | `/images/founder/kathryn-about-fresh.jpg` | `Kathryn Weekley — founder of CH Digitals` | ⚠ AI portrait — see flag |
| `src/app/page.tsx` (home AI card) | `/images/bce/bce-inverted.svg` | `BCE mark` | ✅ OK |
| `src/app/page.tsx` (home founder section) | `/images/founder/kathryn-home-founder.jpg` | `Kathryn smiling while working at a desk` | ⚠ AI portrait — see flag |
| `src/app/page.tsx` (client logos loop) | `/images/clients/*.png` | `logo.name` (e.g. "DermaGen", "The Birth Teacher") | ✅ OK — each logo is the client name |
| `src/app/about/page.tsx` | `/images/founder/kathryn-about-fresh.jpg` | `Kathryn seated at a table` | ⚠ AI portrait — see flag |
| `src/app/services/page.tsx` | `/images/founder/kathryn-services.jpg` | `Kathryn meeting with clients` | ✅ OK (real photo, per brand guide check) |
| `src/app/bce/page.tsx` | `/images/bce/bce-inverted.svg` | `Business Clarity Engine` | ✅ OK |

## Recommended alt-text edits

None of the existing alts are broken. Two minor tightenings if Kathryn wants:

1. **Home hero (`kathryn-about-fresh.jpg`):** current `Kathryn Weekley — founder of CH Digitals` is good. Optional richer alt for SEO context:
   - `Kathryn Weekley, founder of CH Digitals, a digital agency in Emerald, Queensland`
2. **About page (`kathryn-about-fresh.jpg`):** current `Kathryn seated at a table` is generic. Suggested:
   - `Kathryn Weekley, founder of CH Digitals`
3. **Home founder section (`kathryn-home-founder.jpg`):** current `Kathryn smiling while working at a desk` is fine. Could match (1).

## ⚠ Flag (highest priority)

Per brand-guide v2026-05-07, `kathryn-about-fresh.jpg` and `kathryn-home-founder.jpg` are AI-generated and must be replaced with real photos by 2026-05-09. Today is 2026-05-13 (4 days past). **Do not re-process these files for compression or alt-text changes** until Kathryn confirms whether they are being swapped. New photos will get their own alts.
