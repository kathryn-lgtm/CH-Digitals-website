DRAFT — not approved. Aria refines, Kathryn read-aloud, then move to `approved/`.

# Title + meta drafts — 11 routes

**Targets:**
- Title: 50–60 chars (rendered, after " | CH Digitals" suffix). Current titles average 17–30 chars and underuse keyword real estate.
- Meta description: 140–160 chars. Current metas are mostly fine; DermaGen at 233 truncates.

Every title below assumes the existing layout template `%s | CH Digitals` (suffix = 14 chars including separator).

---

## `/` Home

**Current title (rendered):** CH Digitals | Websites, Systems, and AI Automation (51 ch)
**Current meta:** "CH Digitals builds websites, systems, and AI automation for regional Queensland businesses ready to reduce admin, improve conversion, and grow with better digital infrastructure." (174 ch, slightly over)

Current title is the layout `default`, not the page title. Page sets `title: "Home"` which renders as `Home | CH Digitals` (17 ch). The layout default is what renders when no page overrides — only happens on / since / sets its own. **This is wrong:** the layout default is being shadowed by the page's `"Home"`. Recommend dropping `title: "Home"` from `page.tsx` so the layout default renders.

**Option A (recommended) — use layout default by removing page title override:**
Rendered: `CH Digitals | Websites, Systems, and AI Automation` (51 ch)

**Option B — keyword-led page title:**
Rendered: `Digital Agency Central Highlands QLD | CH Digitals` (51 ch)

**Option C — outcome-led:**
Rendered: `Websites, Systems & AI for Regional Business | CH Digitals` (58 ch)

**Meta draft (155 ch):**
"Digital agency in Emerald, QLD building websites, systems, and AI automation for regional businesses. Less admin, better conversion, infrastructure that scales."

---

## `/about` About

**Current:** title `About` → `About | CH Digitals` (19 ch). Meta 188 ch.

**Option A:** `About Kathryn Weekley & CH Digitals | CH Digitals` (50 ch)
**Option B:** `About — Founder Kathryn Weekley & the Studio | CH Digitals` (57 ch)
**Option C:** `Meet Kathryn — Central Highlands Digital Agency | CH Digitals` (60 ch)

**Meta draft (158 ch):**
"Meet Kathryn Weekley, founder of CH Digitals. Seven years building websites, systems, and AI infrastructure for 30+ regional Queensland businesses."

---

## `/services` Services

**Current:** title `Services` → `Services | CH Digitals` (22 ch). Meta 167 ch.

**Option A:** `Web Design, Marketing & Automation Services | CH Digitals` (58 ch)
**Option B:** `Services — Websites, Systems, Marketing | CH Digitals` (52 ch)
**Option C:** `Digital Services for Small Business QLD | CH Digitals` (54 ch)

**Meta draft (159 ch):**
"Website design, marketing systems, social, e-commerce, integrations, and ongoing partnership for regional QLD businesses. Built around fit, not packages."

---

## `/ai-services` AI Services

**Current:** title `AI Services` → `AI Services | CH Digitals` (25 ch). Meta 158 ch.

**Option A:** `AI Agents & Automation for Small Business | CH Digitals` (56 ch)
**Option B:** `AI Automation Services for QLD Business | CH Digitals` (54 ch)
**Option C:** `Custom AI Agents, Lead Follow-up, Integrations | CH Digitals` (60 ch)

**Meta draft (160 ch):**
"AI agents, lead follow-up automation, business process automation, and custom AI integrations built for small and medium businesses. Practical, not hype."

---

## `/work` Work

**Current:** title `Work` → `Work | CH Digitals` (18 ch). Meta 174 ch.

**Option A:** `Case Studies — Real Results for Real Businesses | CH Digitals` (60 ch)
**Option B:** `Work — DermaGen, Skincare, Trades, Education | CH Digitals` (58 ch)
**Option C:** `Client Case Studies | CH Digitals` (33 ch — short, available room)

**Meta draft (160 ch):**
"Case studies showing how better digital systems became stronger revenue, conversion, and growth. Featured: DermaGen — $592K+ in sales over three years."

---

## `/work/dermagen` DermaGen Case Study

**Current:** title `DermaGen Case Study — $592K+ in Sales` → with suffix = 54 ch (OK). Meta **233 ch — over the 160 limit**.

**Option A (title — keep current):** `DermaGen Case Study — $592K+ in Sales | CH Digitals` (54 ch)
**Option B:** `DermaGen Skincare Shopify Rebuild | CH Digitals` (49 ch)
**Option C:** `From $500 to $30K/month — DermaGen Case Study | CH Digitals` (58 ch)

**Meta draft — trim to 158 ch:**
"How CH Digitals rebuilt DermaGen on Shopify, growing online revenue from ~$500/month to $30K/month and $592K+ in sales across three years."

---

## `/contact` Contact

**Current:** title `Contact` → `Contact | CH Digitals` (21 ch). Meta 175 ch.

**Option A:** `Contact — Book a Free Strategy Session | CH Digitals` (51 ch)
**Option B:** `Contact CH Digitals — Emerald QLD Digital Agency | CH Digitals` (61 ch)
**Option C:** `Contact | CH Digitals` (current — leave if short titles preferred for short pages)

**Meta draft (157 ch):**
"Book a free strategy session with Kathryn at CH Digitals, or send the business problem you need solved across web, systems, marketing, or AI."

---

## `/blog` Blog

**Current:** title `Blog` → `Blog | CH Digitals` (18 ch). Meta 153 ch.

**Recommendation:** noindex this route until real content lands. If kept indexable:

**Option A:** `Insights on Web, Systems & AI for Regional Business | CH Digitals` (66 ch — over)
**Option B:** `Insights — Digital Systems, AI, Regional Growth | CH Digitals` (60 ch)
**Option C:** `Blog & Insights | CH Digitals` (29 ch)

**Meta draft (152 ch):**
"Insights from CH Digitals on websites, digital systems, regional business growth, and practical AI automation. New articles landing through 2026."

---

## `/bce` Business Clarity Engine

**Current:** title `Business Clarity Engine — Early Access` → with suffix = 54 ch (OK). Meta 189 ch (slightly over).

**Option A (keep current):** `Business Clarity Engine — Early Access | CH Digitals` (54 ch)
**Option B:** `Business Clarity Engine — BCE Waitlist | CH Digitals` (53 ch)
**Option C:** `Business Clarity Engine | Early Access by CH Digitals` (54 ch)

**Meta draft — trim to 158 ch:**
"The Business Clarity Engine is a guided business system for founders — direction, clarity, action. Join the waitlist before 2026 early access."

---

## `/privacy` Privacy Policy

Leave as-is. Title 38 ch, meta 84 ch. No SEO value to optimise.

---

## `/review` Leave a Review

Correctly noindex. Title + meta only matter if someone shares the link — leave as-is.
