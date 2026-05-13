DRAFT — not approved. Strategic call — Kathryn approves before any wiring.

# Internal linking map proposal

**Principle:** every page is at most 2 clicks from the homepage. Pillar page (`/digital-systems-regional-businesses`, once it exists) anchors the cluster.

## Current state (Phase 1a)

- Header: Home, Services, AI Services, Work, About, Contact (6 links)
- Footer: same 6 + Privacy + booking + email
- Homepage body: links to /services, /ai-services, /work/dermagen, /bce, /about, /contact — good spread
- /services body: links out to nothing structured (just the booking CTA on each card)
- /work/dermagen body: links to /work (breadcrumb) and external Dermagen site
- /bce body: links to nothing in-site

**Issue:** sub-page bodies don't cross-link enough. Every CTA defaults to "book a strategy session." That's commercially correct, but SEO-weak because internal-link signal is shallow.

## Proposed cluster

```
Home
├── Services (hub)
│   ├── Website Design Emerald QLD
│   ├── Shopify Designer QLD
│   ├── CRM Setup
│   ├── Business Reporting Dashboard
│   ├── Klaviyo Email Marketing
│   └── SEO Audit
├── AI Services (hub)
│   ├── AI Automation Small Business
│   └── Small Business Automation QLD
├── Work
│   └── DermaGen
├── About
├── Contact
├── Blog
├── BCE
└── Digital Systems for Regional Business (pillar; links back to home)
```

## Phase 1b wiring (no copy decisions — just structural)

1. Add a `Related services` block at the bottom of each main page that links to 2-3 service sub-pages.
2. Add an `Also from CH Digitals` block at the bottom of each case study linking to other case studies (when more land in Phase 3).
3. Footer: add a third column for `Top services` listing the 4 highest-priority sub-pages once they exist.

**These are structural — they don't need voice approval, but Kathryn approves the *which-links-where* decision.**

## Anchor text rule

Avoid `click here`, `read more`, `learn more` as bare anchors. Use the target page's primary keyword as the link text. Aria + Kathryn lane.
