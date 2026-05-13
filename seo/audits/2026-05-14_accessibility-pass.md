# Accessibility + semantic HTML pass

**Phase 1a Push-through P4**
**Date:** 2026-05-14
**Agent:** Claude (Opus 4.7)
**Scope:** Source-code audit + low-decision fixes against the existing repo. No design or copy changes.

## What was already correct (no changes needed)

| Item | State |
|---|---|
| `<html lang="en">` | ✅ set in `src/app/layout.tsx` |
| `<main>` landmark | ✅ in `src/components/site/page-shell.tsx` |
| Single `<h1>` per page | ✅ verified on all 11 routes; `TypewriterHeading` renders a real `<h1>` |
| `<h2>` via `<Section>` component | ✅ `src/components/site/section.tsx` |
| Forms wrap inputs in `<label>` | ✅ implicit label-input association in all 3 forms |
| `<button type="submit">` on form submits | ✅ (not `<a>` styled as button) |
| Mobile menu hamburger `aria-expanded` | ✅ reflects open/closed state |
| Site-header logo link `aria-label="CH Digitals home"` | ✅ |
| Site-header logo Image had `alt="CH Digitals logo"` | ⚠ redundant with link aria-label (fixed below) |
| Breadcrumb `aria-label="Breadcrumb"` + `aria-current="page"` | ✅ in `src/components/site/breadcrumbs.tsx` |
| Tap targets ≥ 44px | ✅ `min-h-12` (48px) used consistently |
| `prefers-reduced-motion` respected | ✅ `globals.css` has the media query block |
| `<noscript>` Meta Pixel image `alt=""` | ✅ |
| CTAs are real links, not `<div>`s | ✅ |

## What was fixed (this commit)

### 1. Skip-to-content link
**File:** `src/components/site/page-shell.tsx`

Added `<a href="#main-content">Skip to content</a>` as the first element in PageShell, visually hidden via `sr-only` until keyboard-focused. Pairs with `id="main-content"` on the `<main>` element so keyboard users can bypass the header on every page.

### 2. Focus indicators on form inputs
**Files:** `contact-form.tsx`, `bce-waitlist-form.tsx`, `demo-form.tsx`

**Bug:** Every input/textarea had `outline-none` to remove the default browser focus ring, replaced only by a `:focus` border-color change. That meant keyboard users navigating with Tab got a very subtle focus indicator (border darkens from line-gray to navy). Borderline WCAG 2.1 Success Criterion 2.4.7 (focus visible).

**Fix:** Added `focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/40` to every input/textarea. Mouse clicks still get the navy border (`:focus`); keyboard tabs additionally get a prominent gold ring (`:focus-visible`).

Submit buttons in all 3 forms also got `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2`.

Form inputs extracted into shared `inputClassName` / `textareaClassName` constants to avoid divergence.

### 3. Form status `aria-live` regions
**Files:** `contact-form.tsx`, `bce-waitlist-form.tsx`, `demo-form.tsx`

**Bug:** Form status messages (sending/sent/error) were conditionally rendered inline. Screen readers had no way to know when state changed.

**Fix:** Status `<p>` now always rendered with `role="status" aria-live="polite"` and a `min-h-[1.5rem]` placeholder so the layout doesn't shift on first message. Content swaps in when state changes; the live region announces the new text. For DemoForm the entire result region is wrapped as an aria-live region since results stream into it.

Used `aria-live="polite"` (not `"assertive"`) so the announcement doesn't interrupt the user. Errors still get announced, just respectfully.

### 4. Hamburger button accessibility
**File:** `src/components/site/site-header.tsx`

**Improvements:**
- Dynamic `aria-label`: now `"Open menu"` when closed, `"Close menu"` when open. Previously static `"Toggle menu"`.
- Added `aria-controls="mobile-menu"` pointing at the mobile menu container.
- Outer `<span>` wrapping the three hamburger lines now has `aria-hidden="true"` so screen readers don't read the empty bar elements.
- Added `id="mobile-menu"` on the mobile menu div for the aria-controls reference.
- Wrapped the mobile menu links in a `<nav aria-label="Mobile">` (previously a bare `<div>`). Desktop nav got a matching `aria-label="Primary"`.

### 5. Logo image alt
**File:** `src/components/site/site-header.tsx`

**Bug:** Logo image had `alt="CH Digitals logo"` while the parent link had `aria-label="CH Digitals home"`. Some screen readers read both, creating duplicate "CH Digitals logo, CH Digitals home, link" announcements.

**Fix:** Image alt set to `""` (decorative). The link's `aria-label` provides the accessible name for the link. Standard WAI-ARIA pattern.

### 6. DemoForm decorative dots
**File:** `src/components/site/demo-form.tsx`

The three traffic-light-style coloured dots in the DemoForm "window chrome" got `aria-hidden="true"` so screen readers don't read them as bare spans.

## What was deliberately not changed (and why)

| Item | Decision |
|---|---|
| `<section>` elements without `aria-labelledby` | Standard, accepted pattern. Adding `aria-labelledby` to every section would require giving every heading an id — high churn, low actual screen-reader benefit since headings already establish section context. |
| ButtonLink renders as `<a>` not `<button>` | Correct — every `ButtonLink` use is navigation (booking link, internal route). Action buttons (form submits) are real `<button>`. |
| Animated reveal-up + scroll-reveal on content | `globals.css` already handles `prefers-reduced-motion: reduce` for all of these. |
| Semi-transparent white text on dark backgrounds (`text-white/72`, `text-white/45`) | Largely meets 4.5:1 contrast against the very dark `#0a0a0a` background, but `white/45` is borderline. Flag for a Lighthouse audit (which is blocked here). Aria/Pixel may want to lift the opacity floor to `/55` or `/60` on body copy. |
| Color tokens for error messaging (`#aa4c4c`, `#f5a7a1`) | Hardcoded outside the `--color-*` palette. Acceptable for error states. If the brand wants a standard "alert" token, that's a brand-guide question for Pixel. |
| Site header sticky behavior with backdrop-blur | No keyboard trap or focus issue. Standard pattern. |
| Logo alt text changed to "" | Standard WAI-ARIA pattern when parent link has aria-label. Documented above. |

## What remains (future passes, not blocking)

- **Live Lighthouse accessibility audit.** This source-code pass catches the structural issues, but only a rendered Lighthouse run will surface contrast violations on the actual backgrounds, tap-target hit areas at real device viewports, and any browser-specific focus regressions. Run from PageSpeed Insights once deploy access is unblocked.
- **Real device test on iOS VoiceOver + Android TalkBack.** Source review can't replace this. Recommended once a preview deploy exists.
- **Accordion FAQ component.** When FAQs ship in Phase 1b, use `<details>`/`<summary>` for the accessible-by-default expand-collapse pattern, OR add `aria-expanded` + button semantics. Current FAQ rendering in the landing-page-shell is expanded by default — no a11y issue at rest, but it's not collapsible yet.
- **Section headings with `id` for in-page anchor links.** Useful when Phase 4 articles ship.

## Files changed in this commit

- `src/components/site/page-shell.tsx`
- `src/components/site/site-header.tsx`
- `src/components/site/contact-form.tsx`
- `src/components/site/bce-waitlist-form.tsx`
- `src/components/site/demo-form.tsx`

No page files modified. No copy changed. No design tokens changed.
