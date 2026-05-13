DRAFT — not approved. Questions are starter material; answers are skeleton only. Aria writes the real answers in Kathryn's voice, Kathryn read-aloud.

# FAQ skeletons — 5 priority pages

FAQs unlock `FAQPage` JSON-LD and featured-snippet eligibility. Schema scaffolding (`faqSchema` in `src/lib/schema.ts`) is ready; once answers are approved, wiring is ~10 minutes per page in Phase 1b.

---

## `/` Home (4 questions)

1. **What does CH Digitals do?**
   _Skeleton:_ One sentence: web + systems + AI for regional businesses. Add a clarifying sentence on "infrastructure not just a website."

2. **Do you only work with businesses in regional Queensland?**
   _Skeleton:_ Based in Emerald QLD, primary client base is regional QLD, but work spans Australia and beyond. One example.

3. **What does a typical engagement look like?**
   _Skeleton:_ Free strategy session → scoped proposal → build → ongoing partnership. Timeline range.

4. **What is the Business Clarity Engine?**
   _Skeleton:_ One-paragraph BCE pitch with link to `/bce`.

---

## `/services` Services (6 questions)

1. **Do I need a new website to start working with CH Digitals?**
2. **Can you work with my existing website / CRM / e-commerce platform?**
3. **What is the difference between a website build and a digital system build?**
4. **Do you offer ongoing support after launch?**
5. **How long does a typical website project take?**
6. **What is the investment range?** (or: "How do you price?")

---

## `/ai-services` AI Services (5 questions)

1. **What does "AI agent" actually mean for my business?**
2. **Will an AI agent replace my staff?**
3. **What can AI automation realistically do today?**
4. **What does it cost to build a custom AI agent?**
5. **How long does an AI build take from scoping to live?**

---

## `/work` Work (3 questions)

1. **Can I see results in industries other than skincare?**
2. **What does "54.2% checkout conversion rate" actually mean?**
3. **Do you share more case studies on request?**

---

## `/contact` Contact (3 questions)

1. **How long does the free strategy session take?**
2. **Is there a minimum project size?**
3. **Do you offer remote-only work, or do you visit clients?**

---

## Schema wiring (for Phase 1b reference)

```tsx
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";

const faqs = [
  { question: "...", answer: "..." },
  // ...
];

// inside the page:
<JsonLd data={faqSchema(faqs)} />
```

Answers in the schema must match the visible FAQ text on the page (Google penalises mismatch). So visible FAQ section needs to ship in the same commit as the schema.
