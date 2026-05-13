DRAFT — not approved. **Action required: copy this file to OneDrive at `Tier 2/CH Digitals Website SEO/drafts/2026-05-14_seo-drafts-review.md`.** Remote agent session cannot write to OneDrive directly; the file lives here so it can be moved.

# CH Digitals SEO — consolidated drafts review

**Date:** 2026-05-14
**Agent:** Claude (Opus 4.7)
**Brief:** v2 SEO work order + 2026-05-14 decisions-back-to-code
**Branch:** `claude/ch-digitals-seo-phase-1a-bNtqw`

Every human-facing draft from the previous Code session, gathered in one place so Aria and Kathryn can review without scrolling through nine separate files. Technical drafts (redirect map, linking map, schema-content gaps) are included at the bottom for completeness but don't need voice review.

## How to use this doc

1. **Aria:** read sections 1–4, run them through the Copywriter pattern. Voice belongs to you.
2. **Kathryn:** read-aloud final pass on what Aria produces. Copy approved versions to `Tier 2/CH Digitals Website SEO/approved/` with prefix `APPROVED-`.
3. **Code (Phase 1b):** wire only the approved files. No improvising.

## Open decisions this doc unblocks

- Decision 3 from the 2026-05-14 brief: **homepage title** — see Section 1 below, recommended option A.

---

# Section 1 — Title + meta drafts (11 routes)

**Targets:** title 50–60 chars rendered (including " | CH Digitals" suffix); meta description 140–160 chars. Sweet-spot ranges below which Google truncates, above which content gets clipped in SERPs.

---

## `/` Home

**Current state**
- Title (rendered): `Home | CH Digitals` (17 ch). The layout sets a strong default — `CH Digitals | Websites, Systems, and AI Automation` — but `page.tsx` overrides it with `title: "Home"`, so the strong default never renders.
- Meta: 174 ch, slightly over.

**Proposed**

- **Option A (recommended) — use layout default by removing page title override**
  Rendered: `CH Digitals | Websites, Systems, and AI Automation` (51 ch)
- **Option B — keyword-led**
  Rendered: `Digital Agency Central Highlands QLD | CH Digitals` (51 ch)
- **Option C — outcome-led**
  Rendered: `Websites, Systems & AI for Regional Business | CH Digitals` (58 ch)

**Meta draft (155 ch):**
"Digital agency in Emerald, QLD building websites, systems, and AI automation for regional businesses. Less admin, better conversion, infrastructure that scales."

**Rationale:** Option A is a one-line fix that activates the strong layout default already in place. Option B targets the local-search query directly but is voice-flat. Option C splits the difference. The meta trims length and frontloads the location.

---

## `/about` About

**Current**
- Title: `About | CH Digitals` (19 ch).
- Meta (188 ch, slightly over): "Meet Kathryn and learn how CH Digitals helps regional Queensland businesses build stronger websites, clearer systems, and practical long-term digital infrastructure."

**Proposed**

- A: `About Kathryn Weekley & CH Digitals | CH Digitals` (50 ch)
- B: `About — Founder Kathryn Weekley & the Studio | CH Digitals` (57 ch)
- C: `Meet Kathryn — Central Highlands Digital Agency | CH Digitals` (60 ch)

**Meta draft (158 ch):** "Meet Kathryn Weekley, founder of CH Digitals. Seven years building websites, systems, and AI infrastructure for 30+ regional Queensland businesses."

**Rationale:** Current title doesn't use the founder's name, which is the strongest brand asset for SEO. Option A is the safest improvement.

---

## `/services` Services

**Current**
- Title: `Services | CH Digitals` (22 ch).
- Meta (167 ch): "Explore CH Digitals services across website design, marketing systems, social media, e-commerce, business integrations, and ongoing digital support."

**Proposed**

- A: `Web Design, Marketing & Automation Services | CH Digitals` (58 ch)
- B: `Services — Websites, Systems, Marketing | CH Digitals` (52 ch)
- C: `Digital Services for Small Business QLD | CH Digitals` (54 ch)

**Meta draft (159 ch):** "Website design, marketing systems, social, e-commerce, integrations, and ongoing partnership for regional QLD businesses. Built around fit, not packages."

**Rationale:** "Services" alone is generic. Option A surfaces the three primary service categories in the title where they have SEO weight.

---

## `/ai-services` AI Services

**Current**
- Title: `AI Services | CH Digitals` (25 ch).
- Meta (158 ch).

**Proposed**

- A: `AI Agents & Automation for Small Business | CH Digitals` (56 ch)
- B: `AI Automation Services for QLD Business | CH Digitals` (54 ch)
- C: `Custom AI Agents, Lead Follow-up, Integrations | CH Digitals` (60 ch)

**Meta draft (160 ch):** "AI agents, lead follow-up automation, business process automation, and custom AI integrations built for small and medium businesses. Practical, not hype."

**Rationale:** "AI Services" doesn't target a real search query. Option A captures `AI agents` + `automation` + `small business` together — the actual cluster of intent.

---

## `/work` Work

**Current**
- Title: `Work | CH Digitals` (18 ch).
- Meta (174 ch, over): "See CH Digitals case study work, including the DermaGen rebuild, and how better digital systems translated into stronger revenue, conversion, and growth."

**Proposed**

- A: `Case Studies — Real Results for Real Businesses | CH Digitals` (60 ch)
- B: `Work — DermaGen, Skincare, Trades, Education | CH Digitals` (58 ch)
- C: `Client Case Studies | CH Digitals` (33 ch)

**Meta draft (160 ch):** "Case studies showing how better digital systems became stronger revenue, conversion, and growth. Featured: DermaGen — $592K+ in sales over three years."

**Rationale:** "Work" is a category page; "Case Studies" is what searchers type. Meta now leads with the specific outcome.

---

## `/work/dermagen` DermaGen Case Study

**Current**
- Title: `DermaGen Case Study — $592K+ in Sales | CH Digitals` (54 ch) — already good.
- Meta (233 ch, well over): "How CH Digitals rebuilt DermaGen's digital presence from a non-converting website into a national skincare brand generating $592K+ in sales, 313K+ sessions, and a 54.2% checkout conversion rate."

**Proposed**

- A (keep current title): `DermaGen Case Study — $592K+ in Sales | CH Digitals` (54 ch)
- B: `DermaGen Skincare Shopify Rebuild | CH Digitals` (49 ch)
- C: `From $500 to $30K/month — DermaGen Case Study | CH Digitals` (58 ch)

**Meta draft — trim to 158 ch:** "How CH Digitals rebuilt DermaGen on Shopify, growing online revenue from ~$500/month to $30K/month and $592K+ in sales across three years."

**Rationale:** Title is already strong — just trim the meta to stop SERP truncation. Option C is the punchiest title alternative but loses the brand recognition.

---

## `/contact` Contact

**Current**
- Title: `Contact | CH Digitals` (21 ch).
- Meta (175 ch, over).

**Proposed**

- A: `Contact — Book a Free Strategy Session | CH Digitals` (51 ch)
- B: `Contact CH Digitals — Emerald QLD Digital Agency | CH Digitals` (61 ch — over by 1)
- C: keep `Contact | CH Digitals`

**Meta draft (157 ch):** "Book a free strategy session with Kathryn at CH Digitals, or send the business problem you need solved across web, systems, marketing, or AI."

**Rationale:** Option A puts the primary CTA in the SERP title where it acts as an extra CTA. Stronger CTR.

---

## `/blog` Blog

**Status:** Now `noindex` (decision 4, locked) until 5+ articles ship in any cluster. Title and meta are not in SERPs while noindex is on, so this is for the re-index moment.

**Current**
- Title: `Blog | CH Digitals` (18 ch).

**Proposed**

- A: `Insights — Digital Systems, AI, Regional Growth | CH Digitals` (60 ch)
- B: `Blog & Insights | CH Digitals` (29 ch)

**Meta draft (152 ch):** "Insights from CH Digitals on websites, digital systems, regional business growth, and practical AI automation. New articles landing through 2026."

**Rationale:** Aria can revisit when content is real.

---

## `/bce` Business Clarity Engine

**Current**
- Title: `Business Clarity Engine — Early Access | CH Digitals` (54 ch) — already good.
- Meta (189 ch, over).

**Proposed**

- A: keep title.
- B: `Business Clarity Engine — BCE Waitlist | CH Digitals` (53 ch)
- C: `Business Clarity Engine | Early Access by CH Digitals` (54 ch)

**Meta draft — trim to 158 ch:** "The Business Clarity Engine is a guided business system for founders — direction, clarity, action. Join the waitlist before 2026 early access."

**Rationale:** Title fine. Meta needs trim. Lead with the product name, end with the action.

---

## `/privacy` Privacy Policy

Leave as-is. No SEO value to optimise.

---

## `/review` Leave a Review

Correctly noindex. Leave as-is.

---

# Section 2 — H1 alternates (6 main pages)

**Voice lane.** Current H1s are voice-led and brand-strong — don't break what's working. Below are alternates only if keyword presence is wanted at the H1 level (versus the H2/eyebrow level where keywords can also live).

## `/` Home
- **Current (strong):** "Your Business Deserves More Than a Website."
- A: "Your Business Deserves More Than a Website. Build the System Underneath."
- B: "More Than a Website — Digital Systems for Regional Business."
- **Recommendation:** keep current; push keywords into H2 and eyebrow.

## `/about` About
- **Current (strong):** "Built in regional Queensland. Built for businesses that mean something."
- A: "About Kathryn Weekley — Founder, CH Digitals." (literal SEO, voice-flat)
- **Recommendation:** keep current.

## `/services` Services
- **Current (strong):** "Everything your business needs online. Nothing it doesn't."
- A: "Website Design, Marketing & Automation Services." (literal SEO, voice-flat)
- **Recommendation:** keep current; pillar cards underneath carry the keywords.

## `/ai-services` AI Services
- **Current (TypewriterHeading H1):** "Your competitors / are figuring out AI. / You should already / be using it."
- A: "AI Agents & Automation for Small Business." (literal SEO, voice-flat)
- **Recommendation:** keep current four-line typewriter — confirmed in source as a real `<h1>` with `aria-label` flattening the lines.

## `/work` Work
- **Current (strong):** "Case studies that show what happens when the right system is built properly."
- No alternates recommended.

## `/contact` Contact
- **Current (strong):** "Book a strategy session, or send through the problem you need solved."
- No alternates recommended.

---

# Section 3 — FAQ skeletons (21 questions across 5 pages)

**Voice lane.** Questions below are starter material. Answers are skeleton intent only — Aria writes the real answers in Kathryn's voice, Kathryn read-aloud. FAQ section visible on the page must match the answer text in `faqSchema` exactly (Google penalises mismatch).

## `/` Home (4 questions)
1. **What does CH Digitals do?** — one sentence on web+systems+AI for regional businesses, then a clarifying sentence on "infrastructure not just a website."
2. **Do you only work with businesses in regional Queensland?** — based in Emerald, primary client base regional QLD, work spans Australia.
3. **What does a typical engagement look like?** — strategy session, scoped proposal, build, partnership.
4. **What is the Business Clarity Engine?** — one-paragraph BCE pitch with link to `/bce`.

## `/services` Services (6 questions)
1. Do I need a new website to start working with CH Digitals?
2. Can you work with my existing website / CRM / e-commerce platform?
3. What is the difference between a website build and a digital system build?
4. Do you offer ongoing support after launch?
5. How long does a typical website project take?
6. What is the investment range?

## `/ai-services` AI Services (5 questions)
1. What does "AI agent" actually mean for my business?
2. Will an AI agent replace my staff?
3. What can AI automation realistically do today?
4. What does it cost to build a custom AI agent?
5. How long does an AI build take from scoping to live?

## `/work` Work (3 questions)
1. Can I see results in industries other than skincare?
2. What does "54.2% checkout conversion rate" actually mean?
3. Do you share more case studies on request?

## `/contact` Contact (3 questions)
1. How long does the free strategy session take?
2. Is there a minimum project size?
3. Do you offer remote-only work, or do you visit clients?

**Wiring (Phase 1b):** `<JsonLd data={faqSchema(faqs)} />` plus a visible FAQ block on each page. Schema scaffolding already exists in `src/lib/schema.ts`.

---

# Section 4 — Landing page outlines (10 Phase 2 routes)

**Structural only.** Section headers, intent, and link graph. All copy is Aria's lane. Each page gets its own outline file in `seo/drafts/landing-page-outlines/` — reproduced inline here for review.

## 1. `/digital-agency-emerald-qld`
**Target:** "digital agency emerald qld", "digital agency central highlands" (local navigational)
**Sections:** Hero with target keyword → Why local matters → Services snapshot (4 cards linking to /services, /ai-services, sub-services) → Local proof (QLD client logos, DermaGen tile) → Founder mini-bio (100 words, link to /about, real photo only) → FAQ (4 local-intent questions) → CTA.
**Schema:** BreadcrumbList, FAQPage, LocalBusiness reinforcement (same `@id` as layout).
**Links in:** home footer, /about body, /services hero.
**Links out:** /services, /ai-services, /work/dermagen, /contact.

## 2. `/website-design-emerald-qld`
**Target:** "website design emerald qld", "website designer emerald" (local commercial)
**Sections:** Hero → What's wrong with a typical regional website → The CH Digitals approach (link to /services) → Process (4 phases from `frameworkSteps`) → Proof (DermaGen tile + logos) → FAQ (5 questions on templates, mobile, SEO, build time, support) → CTA.
**Schema:** BreadcrumbList, Service (`WebDesign`), FAQPage.
**Links in:** home footer, /services, /about. **Out:** /services, /work/dermagen, /contact.

## 3. `/shopify-website-designer-queensland`
**Target:** "shopify designer queensland", "shopify partner queensland" (e-commerce)
**Sections:** Hero leading with "Shopify Partner" credential → What's different about Shopify with CH Digitals → DermaGen tile (strongest proof) → Services within Shopify (store build, theme, Klaviyo, payment+fulfilment) → FAQ (5 Shopify-specific) → CTA.
**Schema:** BreadcrumbList, Service (`E-commerce`, areaServed Queensland), FAQPage.
**Links in:** /services e-commerce card, home AI card, /work/dermagen sidebar. **Out:** /work/dermagen, /services, /contact.

## 4. `/ai-automation-small-business`
**Target:** "AI automation for small business", "AI agents for small business australia"
**Sections:** Hero (keyword-led; sits alongside /ai-services which keeps voice) → What AI automation does in a small business (3 examples) → CH Digitals approach (link to /ai-services) → Live demo embed (reuse `<DemoForm />`) → FAQ (5 on cost, time, replace-staff, where-to-start, ROI) → CTA.
**Schema:** BreadcrumbList, Service (`AI Automation`), FAQPage.
**Decision needed:** does this replace or sit alongside `/ai-services`? **Recommendation:** alongside — this is the SEO entry, /ai-services is the brand voice page. Both link to each other.
**Links in:** home AI card, /services. **Out:** /ai-services, /services, /contact.

## 5. `/crm-setup-small-business`
**Target:** "CRM setup small business", "hubspot consultant australia"
**Sections:** Hero → 3 most common CRM mistakes → CRMs we set up (HubSpot lead with credential, Pipedrive, Zoho, custom Supabase) → What's included → FAQ → CTA.
**Schema:** BreadcrumbList, Service (`CRM Consulting`), FAQPage.
**Links in:** /services systems-integration card. **Out:** /services, /contact, optionally /ai-services.

## 6. `/business-reporting-dashboard`
**Target:** "business reporting dashboard", "custom business dashboard australia"
**Sections:** Hero → Why most dashboards fail → What CH Digitals builds (connected from CRM/e-comm/finance/marketing) → Tech stack (Supabase, Looker, Power BI, custom) → Sample screenshots → FAQ → CTA.
**Schema:** BreadcrumbList, Service (`Data Analytics`), FAQPage.
**Links in:** /services. **Out:** /services, /contact.

## 7. `/digital-systems-regional-businesses`
**Target:** "digital systems for regional business", "digital infrastructure regional australia" — broad pillar page
**Sections:** Hero (manifesto angle; strongest fit for CH voice) → What "digital systems" actually means (each item links to a sub-service) → Why regional is the wedge (Aria's lane) → The CH Digitals stack → Featured proof (DermaGen + 3 testimonials) → FAQ → CTA.
**Schema:** BreadcrumbList, FAQPage.
**Role:** pillar page that 4 of the other 9 link back to as "learn more" parent.
**Links in:** home footer (new "Pillar" section?), /about, /services hero. **Out:** every other landing page, /services, /ai-services, /work/dermagen.

## 8. `/klaviyo-email-marketing-australia`
**Target:** "klaviyo agency australia", "klaviyo email marketing setup"
**Sections:** Hero (lead with "Klaviyo Certified") → 5 Klaviyo flows every Shopify store needs → DermaGen result (10K+ subs in 2 years, link to /work/dermagen) → What's included (setup, flows, segments, ongoing) → FAQ → CTA.
**Schema:** BreadcrumbList, Service (`Email Marketing`), FAQPage.
**Links in:** /services, /work/dermagen, /shopify-website-designer-queensland. **Out:** /work/dermagen, /services, /contact.

## 9. `/small-business-automation-queensland`
**Target:** "small business automation queensland", "business automation regional QLD"
**Sections:** Hero → 4 most-automated workflows in small business (cards) → CH Digitals approach (link to /ai-services) → Local proof → FAQ → CTA.
**Schema:** BreadcrumbList, Service (`Business Process Automation`, areaServed Queensland), FAQPage.
**Links in:** /ai-services, /digital-systems-regional-businesses. **Out:** /ai-services, /services, /contact.

## 10. `/website-seo-audit-small-business`
**Target:** "website seo audit small business", "free seo audit australia" — lead-magnet adjacent
**Sections:** Hero leading with the offer → What's in an SEO audit (checklist 8-12 items) → Sample audit output (redacted screenshot) → CTA form (not booking link — lead magnet) → FAQ → second CTA.
**Schema:** BreadcrumbList, Service (`SEO Audit`), FAQPage.
**Decision needed (Kathryn):** Is the audit free? Paid? Form-to-Supabase or booking link? Drives the build.
**Links in:** home footer, /services, /blog (when populated). **Out:** /services, /contact.

---

# Section 5 — Alt-text inventory

**Quick-approve lane** (Kathryn only). Existing alts are mostly factual and acceptable; 3 minor tightenings below.

| File | Image src | Current alt | Recommendation |
|---|---|---|---|
| `site-header.tsx` | `/images/brand/logo-transparent.png` | `CH Digitals logo` | ✅ keep |
| Home hero | `/images/founder/kathryn-about-fresh.jpg` | `Kathryn Weekley — founder of CH Digitals` | ✅ keep (or richer: "Kathryn Weekley, founder of CH Digitals, a digital agency in Emerald, Queensland") |
| Home AI card | `/images/bce/bce-inverted.svg` | `BCE mark` | ✅ keep |
| Home founder section | `/images/founder/kathryn-home-founder.jpg` | `Kathryn smiling while working at a desk` | ✅ keep |
| About hero | `/images/founder/kathryn-about-fresh.jpg` | `Kathryn seated at a table` | Suggest: "Kathryn Weekley, founder of CH Digitals" |
| Services hero | `/images/founder/kathryn-services.jpg` | `Kathryn meeting with clients` | ✅ keep |
| BCE hero | `/images/bce/bce-inverted.svg` | `Business Clarity Engine` | ✅ keep |
| Home + Services client logos | `/images/clients/*.png` | `logo.name` (e.g. "DermaGen") | ✅ keep |

## ⚠ Note

AI portraits `kathryn-about-fresh.jpg` and `kathryn-home-founder.jpg` are being held for replacement (decision 1, locked: keep in place; do NOT swap to fallback). Brand-guide will be updated to reflect the extended interim. Alt text doesn't change with that decision.

---

# Section 6 — Redirect map

**Status:** none required in Phase 1a or in the follow-up commit. No URL has been renamed, moved, or deleted.

## URL Preservation Rule (restated)

No URL change without a Kathryn-approved 301 redirect map, tested in staging, recorded in the handover.

## Anticipated Phase 2

The 10 new landing pages are net-new routes. No existing URL is replaced. No redirects needed for that work.

## Future risk

If `/ai-services` and `/ai-automation-small-business` get consolidated after Phase 2 ships, one becomes a 301 to the other. Decision deferred to that time.

---

# Section 7 — Internal linking map proposal

**Strategic.** Kathryn approves the structure; Aria approves the anchor text where it's user-facing.

## Current state

- Header: 6 links (Home, Services, AI Services, Work, About, Contact)
- Footer: 6 + Privacy + booking + email
- Sub-page bodies don't cross-link enough. Most CTAs default to "book a strategy session" — commercially correct but SEO-shallow.

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
├── Work → DermaGen
├── About
├── Contact
├── Blog
├── BCE
└── Digital Systems for Regional Business (pillar)
```

## Phase 1b wiring proposals (structural, no copy decisions)

1. `Related services` block at the bottom of each main page — 2-3 sub-service links.
2. `Also from CH Digitals` block at the bottom of each case study — links to other case studies once they exist (Phase 3).
3. Footer: third column listing top 4 sub-services once they exist.

## Anchor text rule

Avoid `click here`, `read more`, `learn more`. Use the target page's primary keyword as the link text. Aria + Kathryn lane.

---

# Section 8 — Schema content gaps

**Technical — doesn't need voice review.** Kathryn supplies factual values; Code wires.

## Already wired (commits `6db7850` + `757be433`)

```json
{
  "@type": "Organization",
  "@id": "https://www.chdigitals.com.au/#organization",
  "name": "CH Digitals",
  "url": "https://www.chdigitals.com.au",
  "logo": "https://www.chdigitals.com.au/images/brand/logo-transparent.png",
  "email": "Kathryn@chdigitals.com.au",
  "address": { "@type": "PostalAddress", "streetAddress": "9-13 King Street", "addressLocality": "Emerald", "addressRegion": "QLD", "postalCode": "4720", "addressCountry": "AU" },
  "areaServed": { "@type": "Country", "name": "Australia" },
  "founder": { "@type": "Person", "name": "Kathryn Weekley", "jobTitle": "Founder", "url": "https://www.chdigitals.com.au/about" }
}
```

## Still pending (decision 2, locked partial)

| Field | Status | Action |
|---|---|---|
| `telephone` | Locked: deliberately omitted | None |
| `areaServed` | Locked: `Country: Australia` | ✅ wired in `757be433` |
| `sameAs` | Pending Kathryn-supplied URLs (Facebook + Instagram only per decision 2) | Kathryn pastes URLs; Code wires |
| LocalBusiness upgrade | Open | Kathryn decides whether physical walk-in/appointment makes this a `LocalBusiness` (with `openingHoursSpecification`) vs current `Organization` |
| `image` for Org panel | Open | Kathryn confirms which image at 1200×630 |

## Recommendation noted (for Kathryn's call)

The decision brief asked: "If Code thinks a more structured `areaServed` (e.g. Country + AdministrativeArea Queensland) is meaningfully better for local SEO, flag the recommendation."

**Recommendation:** For an agency that explicitly serves the whole country with regional positioning, the single `Country: Australia` form (currently wired) is the cleanest signal. Adding a second `AdministrativeArea: Queensland` in an array is technically valid and provides a slight signal boost for `queensland digital agency`-type queries, but it also dilutes the broader Australia signal. **Default:** keep as wired. **Override path:** if Kathryn wants both signals, change `areaServed` in `src/lib/schema.ts` to:

```typescript
areaServed: [
  { "@type": "Country", name: "Australia" },
  { "@type": "AdministrativeArea", name: "Queensland" },
],
```

## Service schema content (per /services)

When Kathryn approves the Service schema wiring on `/services`, the content for each of the 6 services in `site-data.ts` becomes:

| Service title | `serviceType` value |
|---|---|
| Website Design & Development | `Web Design` |
| Marketing Strategy & Systems | `Digital Marketing Strategy` |
| Social Media Strategy & Content | `Social Media Marketing` |
| Business Systems Integration | `Business Systems Integration` |
| E-commerce | `E-commerce Development` |
| Ongoing Partnership & Support | `Digital Marketing Consulting` |

All use `areaServed: "Australia"` (or the array form if Kathryn picks the override).

**Recommend NOT including:** `priceRange` (most agencies don't), `audience` (over-narrow).
