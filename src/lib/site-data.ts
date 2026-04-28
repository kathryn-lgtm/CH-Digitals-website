export const siteConfig = {
  name: "CH Digitals",
  description:
    "CH Digitals builds websites, digital operating systems, and AI-powered automation for regional businesses ready to grow without chaos.",
  url: "https://www.chdigitals.com.au",
  bookingUrl: "https://calendar.app.google/Y2U6jpptmevzjUd29",
  gaMeasurementId: "G-XKNMZFM8XX",
  metaPixelId: "197332876517534",
  contactEmail: "Kathryn@chdigitals.com.au",
  location: "9-13 King Street Emerald Queensland 4720",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/ai-services", label: "AI Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const heroContent = {
  eyebrow: "Digital Agency · Central Highlands, Queensland",
  title: "Your Business Deserves More Than a Website.",
  body:
    "We build the complete digital infrastructure behind growing businesses — websites, automations, marketing systems, and now AI. All working together, so you can focus on the work only you can do.",
};

export const positioning = {
  title: "We don't build websites. We build business infrastructure.",
  body:
    "Most agencies hand you a website and disappear. We build the systems underneath it — the automations that save you hours, the integrations that keep everything talking, and the strategy that turns your digital presence into your hardest-working team member. Simple. Strategic. Human.",
};

export const pillars = [
  {
    title: "Websites that work.",
    body: "Fast, mobile-first, and built to convert. Every site is designed around your customer journey — not just how it looks, but what it does.",
  },
  {
    title: "Systems that scale.",
    body: "CRMs, email platforms, payment systems, scheduling tools — connected and working together. Less manual work. More time for what matters.",
  },
  {
    title: "Marketing that moves.",
    body: "Strategy, content, and social mapped to real goals. No guesswork, no busywork. Just a clear plan and the systems to execute it.",
  },
  {
    title: "AI built for your business.",
    body: "Custom AI agents and automations that handle the repetitive work — so your team can focus on the work that actually needs them.",
  },
];

export const stats = [
  { value: "7 Years", label: "Building digital systems for real businesses" },
  { value: "30+", label: "Active clients across Queensland and beyond" },
  { value: "100%", label: "Client retention — because we stay until it works" },
];

export const frameworkSteps = [
  {
    name: "Discover",
    body: "Before we touch design or code, we understand your business. We audit your digital presence, map the customer journey, identify the gaps in your current setup, and tie the roadmap to real outcomes.",
  },
  {
    name: "Design",
    body: "Strategy locked. Now we build. Beautiful interfaces that convert, clean code that performs, and integrations that eliminate manual work. Every decision serves your business — not just the brief.",
  },
  {
    name: "Deploy",
    body: "Launch day is not the finish line. We test everything, monitor real user behaviour, and make sure your systems are working before we hand them over. You go live with confidence.",
  },
  {
    name: "Optimise",
    body: "Your business grows. Your digital system should grow with it. We monitor performance, review analytics, and refine what is already working — so your site stays an asset, not a liability.",
  },
];

export const testimonials = [
  {
    quote:
      "Kathryn turned our website sales to positive profit in a few months. She is committed, creative and organised. Highly recommended.",
    author: "Karen",
    company: "DermaGen by Botanical Chemist",
    href: "/work",
  },
  {
    quote: "Very knowledgeable and shared so much valuable information.",
    author: "Gerry Huston",
    company: "",
  },
  {
    quote:
      "I attended an in-person seminar run by the amazing Kathryn from CH Digital. The entire event was very well organised, the information incredibly well presented and easy to understand, and the whole thing was enjoyable and engaging. Would thoroughly recommend, thank you.",
    author: "Jemma Ryan",
    company: "",
  },
];

export const clientLogos = [
  { name: "DermaGen", src: "/images/clients/dermagen.png", href: "https://dermagen.net.au" },
  { name: "The Birth Teacher", src: "/images/clients/birth-teacher.png", href: "https://www.thebirthteacher.com"},
  { name: "HydroTek Leak Solutions", src: "/images/clients/hydrotek.png", href: "https://www.hydrotekleaksolutions.com.au" },
  { name: "Dusk on the Downs", src: "/images/clients/dusk.png", href: "https://duskonthedowns.com.au"},
  { name: "DMT Ag.", src: "/images/clients/dtmag.png", href: "https://www.dtmag.com.au" },
  { name: "JMAG Industries", src: "/images/clients/jmag.png", href: "https://www.jmagindustries.com.au" },
  { name: "Vulcan Tilt Haulage", src: "/images/clients/vulcan.jpg", href: "https://www.vulcantilt.com.au/" },
  { name: "Mini Treasure Kids", src: "/images/clients/mtk.png", href: "https://www.minitreasurekids.com.au" },
  { name: "MNM Designs", src: "/images/clients/mnm.png", href: "https://www.mnmdesigns.com.au" },
  { name: "M & S Sheds", src: "/images/clients/mssheds.png", href: "https://www.msshedsandgarages.com.au/" },
  { name: "The Social Hub Media Group", src: "/images/clients/social-hub.png", href: "https://tshmediagroup.com.au/" },
];

export const services = [
  {
    title: "Website Design & Development",
    summary:
      "Custom websites built to convert — fast, mobile-first, and designed around your customers.",
    body:
      "Your website is often the first impression someone gets of your business. We make sure it keeps working for you long after launch. Every site is built around your brand, your audience, and your goals.",
    items: [
      "Custom design — no templates, no drag-and-drop compromises",
      "Mobile-first development, tested across key screen sizes",
      "SEO foundations built in from day one",
      "Performance optimised with clean code and strong structure",
      "Integration with your existing tools and booking systems",
      "Ongoing support when the business needs to evolve",
    ],
  },
  {
    title: "Marketing Strategy & Systems",
    summary:
      "A clear marketing system tailored to your business — so you always know what matters and what it is doing.",
    body:
      "Most businesses do not have a marketing problem. They have a clarity problem. We map a system around your goals and then build the infrastructure that makes it run consistently.",
    items: [
      "Marketing audit and opportunity map",
      "Customer journey mapping",
      "Channel strategy and content roadmap",
      "Email marketing setup and automation",
      "Analytics and reporting tied to business outcomes",
    ],
  },
  {
    title: "Social Media Strategy & Content",
    summary: "Show up consistently on social — without it taking over your week.",
    body:
      "Social works when there is a strategy behind it. We build a system that fits around your business and gives you a plan you can actually sustain.",
    items: [
      "Platform audit and channel strategy",
      "Content calendar and posting system",
      "Brand voice guidelines for social",
      "Content creation support or full management",
      "Alignment with the broader marketing system",
    ],
  },
  {
    title: "Business Systems Integration",
    summary:
      "All your tools, actually talking to each other. One streamlined operation instead of five disconnected ones.",
    body:
      "Most businesses are running on a patchwork of tools added one by one and never properly connected. We connect the stack so the business runs on systems, not spreadsheets.",
    items: [
      "Tech stack audit and integration plan",
      "CRM setup and integration",
      "Email platform integration",
      "Payment and booking system connections",
      "Automation builds to eliminate manual steps",
    ],
  },
  {
    title: "E-commerce",
    summary:
      "Sell online, manage members, and automate fulfilment — built to scale from day one.",
    body:
      "An e-commerce build is more than a store. It is an inventory system, a customer experience, a fulfilment workflow, and a marketing channel. We build it properly the first time.",
    items: [
      "Shopify or custom store builds",
      "Membership and gated content systems",
      "Payment gateway setup and testing",
      "Automated fulfilment workflows",
      "Post-purchase email integration",
    ],
  },
  {
    title: "Ongoing Partnership & Support",
    summary:
      "We do not disappear after launch. We stay close to performance, priorities, and the next wave of improvements.",
    body:
      "Most agencies consider the project finished when the invoice goes out. We treat launch as the beginning of the system doing real work.",
    items: [
      "Monthly performance reviews",
      "Content updates and feature additions",
      "Strategic guidance as the business grows",
      "Priority support",
      "Proactive recommendations",
    ],
  },
];

export const aiServices = [
  {
    title: "AI Customer Service Agents",
    body:
      "Handle common enquiries, qualify leads, book appointments, and escalate when a human is genuinely needed. Available 24/7 and trained on your business context.",
  },
  {
    title: "Lead Qualification & Follow-Up Automation",
    body:
      "Stop letting warm leads go cold. AI-powered follow-up that personalises based on behaviour so the right message reaches the right person at the right time.",
  },
  {
    title: "Business Process Automation",
    body:
      "Map repetitive work inside your business — data entry, reporting, scheduling, internal communication — and replace it with automation that gives your hours back.",
  },
  {
    title: "Custom AI Integrations",
    body:
      "Already using a CRM, e-commerce platform, or project management tool? We build an AI layer on top of what you already have so your tools get smarter without a rebuild.",
  },
];

export const aiBuildSteps = [
  {
    title: "Discover the opportunity",
    body: "We map your workflows, identify where AI creates the most value, and prioritise what should be built first.",
  },
  {
    title: "Build and integrate",
    body: "We build your AI agent or automation custom, connect it to your tools, and test it before it touches a real customer.",
  },
  {
    title: "Launch and learn",
    body: "We deploy, monitor, and refine. AI systems improve over time, and we make sure yours does too.",
  },
];

export const values = [
  {
    title: "Regional doesn't mean second-class.",
    body: "The best businesses we know are outside the cities. They deserve world-class digital systems — and that is what we build.",
  },
  {
    title: "Systems over band-aids.",
    body: "We would rather take the time to build it right than patch something broken for another twelve months.",
  },
  {
    title: "Plain language, always.",
    body: "You will always know what we are building, why we are building it, and what it is doing for your business.",
  },
  {
    title: "Long-term, not transactional.",
    body: "Our retention comes from showing up, staying accountable, and genuinely caring whether it works.",
  },
];

export const credentials = [
  "Shopify Partner",
  "Google Certified",
  "Meta Certified",
  "HubSpot Certified",
  "Klaviyo Certified",
  "Marketing with Purpose Certified",
];

// Pricing — mirrored from `6. PRODUCT/apps/ch-dashboard/lib/pricing.ts`.
// Source of truth lives in the CH Dashboard quote engine; update there first, then sync here.
// Public site shows starting prices ("from $X") only; tailored quotes happen via the dashboard.
export const pricingCategories = [
  {
    key: "websites",
    title: "Websites",
    summary: "Fast, mobile-first sites built around your customer journey.",
    tiers: [
      { label: "Essential Site", from: 3500, scope: "Up to 5 pages, responsive, contact form, basic SEO, GA4 + Pixel, 1 revision round" },
      { label: "Business Site", from: 6500, scope: "Up to 10 pages, CMS, blog, booking integration, copy review, 2 revision rounds" },
      { label: "Signature Site", from: 9500, scope: "Up to 15 pages, custom design, full copywriting, advanced integrations, 30-day support" },
    ],
  },
  {
    key: "shopify",
    title: "Shopify & E-commerce",
    summary: "Online stores built to scale — payments, shipping, and email connected from day one.",
    tiers: [
      { label: "Shopify Starter", from: 2499, scope: "Standard theme, up to 25 products, payments, basic shipping, 1 integration" },
      { label: "Shopify Signature", from: 4500, scope: "Custom theme, up to 100 products, 3 integrations, email flows" },
      { label: "Shopify Premium", from: 8500, scope: "Fully custom theme, unlimited products, multi-channel, full integration stack" },
    ],
  },
  {
    key: "brand",
    title: "Brand Identity",
    summary: "Logo, colour, voice, and templates — the brand system your marketing runs on.",
    tiers: [
      { label: "Brand Refresh", from: 1500, scope: "Logo refinement, colour palette, typography, basic guidelines" },
      { label: "Signature Brand Kit", from: 3500, scope: "New logo suite, colour system, voice guide, templates, 12–20pg guidelines" },
      { label: "Full Brand Identity", from: 6500, scope: "Signature kit + social and email templates, photography direction, brand story" },
    ],
  },
  {
    key: "ai",
    title: "AI Agents & Automation",
    summary: "Custom agents and automations that hand back hours every week.",
    tiers: [
      { label: "Single Automation", from: 1500, scope: "One end-to-end workflow (e.g. lead form → CRM → email → task board)" },
      { label: "Agent System — Starter", from: 4500, scope: "2–3 agents, basic tool access, weekly/monthly reporting, 30-day tuning" },
      { label: "Agent System — Growth", from: 8500, scope: "5+ agents, Microsoft 365 integrations, custom dashboard, 60-day tuning + training" },
    ],
  },
  {
    key: "marketing",
    title: "Marketing Systems",
    summary: "The infrastructure underneath email, SEO, and ads — set up properly the first time.",
    tiers: [
      { label: "Email Foundation", from: 1500, scope: "Klaviyo or Mailchimp setup, welcome flow, newsletter template, list import" },
      { label: "SEO Foundation", from: 2500, scope: "Full audit, keyword research, on-page optimisation, GA4 + Search Console, 90-day plan" },
      { label: "Ads Launch", from: 1800, scope: "Google or Meta account setup, pixel install, 2 campaign builds, targeting research" },
      { label: "Complete Marketing Stack", from: 5500, scope: "Email + SEO + Ads bundled, with cross-channel attribution and unified reporting" },
    ],
  },
  {
    key: "integrations",
    title: "Business Systems Integration",
    summary: "Connect the tools you already use so the business runs on systems, not spreadsheets.",
    tiers: [
      { label: "Single Integration", from: 800, scope: "One API connection (e.g. Shopify ↔ Xero, Calendly ↔ CRM)" },
      { label: "Integration Bundle", from: 2500, scope: "Up to 4 integrations, documented and tested" },
      { label: "Full Systems Audit + Build", from: 5500, scope: "Complete workflow audit + build + team training + 30-day support" },
    ],
  },
] as const;

export const retainerTiers = [
  {
    label: "Foundation",
    monthlyFrom: 500,
    scope: "Hosting, SSL, backups, monitoring · 2 hr/mo small updates · Monthly analytics 1-pager · 48hr email support",
  },
  {
    label: "Growth",
    monthlyFrom: 1500,
    scope: "Foundation + 6 hr/mo active work · 8 social posts OR 4 emails/mo · SEO monitoring + quarterly content plan · Monthly 30-min strategy call",
  },
  {
    label: "Partner",
    monthlyFrom: 3000,
    scope: "Growth + 15 hr/mo active work · 15+ social posts across 2–3 platforms + 8 emails/mo · Full SEO + 1 blog/mo · Ads management · Fortnightly strategy call",
  },
] as const;

export const pricingTerms = {
  currency: "AUD",
  gstNote: "All prices exclude 10% GST.",
  paymentSplit: "30% deposit on acceptance · 40% at mid-build milestone · 30% before go-live.",
  paymentTermsDays: 7,
  quoteValidDays: 30,
  retainerMinMonths: 3,
  retainerNoticeDays: 30,
  bundleDiscounts: [
    "10% off when you prepay 6 months of a retainer with your build",
    "15% off when you prepay 12 months",
    "10% off when you bundle 3 or more builds",
  ],
  tshMemberDiscounts: "TSH members receive 5% (Starter), 10% (Growth), or 15% (Professional) off any build.",
  freeStrategySession: "Every engagement starts with a free 45-minute strategy session — no pitch, no obligation.",
} as const;

export const caseStudies = [
  {
    slug: "dermagen",
    client: "DermaGen by Botanical Chemist",
    industry: "Natural, botanical & compounded skincare",
    website: "https://dermagen.net.au",
    headline:
      "From a struggling website to a national skincare brand — built from the ground up.",
    story:
      "DermaGen came to CH Digitals with products that genuinely worked but a digital presence that did not convert, did not scale, and did not communicate the depth of their expertise. The rebuild focused on Shopify, SEO, email, and ongoing digital system support.",
    metrics: [
      { value: "$592K+", label: "Sales generated in the first 3 years" },
      { value: "313K+", label: "Sessions across organic, social, and email" },
      { value: "6,542", label: "Orders processed" },
      { value: "54.2%", label: "Checkout conversion rate" },
      { value: "$79.16", label: "Average order value" },
      { value: "10K+", label: "Email subscribers built in 2 years" },
    ],
    services: [
      "Shopify store build",
      "Website design & development",
      "SEO strategy & execution",
      "Email marketing via Klaviyo",
      "Marketing strategy",
      "Social media",
      "Ongoing support & partnership",
    ],
  },
];
