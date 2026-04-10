import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(200,169,110,0.18)] bg-[linear-gradient(180deg,rgba(245,243,239,0.96),rgba(232,228,220,0.94))]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[1.35fr_1fr] md:px-8 md:py-16">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
            CH Digitals
          </p>
          <h2 className="max-w-xl font-display text-3xl leading-tight text-[var(--color-black)] md:text-4xl">
            Built for regional businesses that need better infrastructure, not more digital noise.
          </h2>
          <p className="max-w-lg text-base leading-7 text-[var(--color-copy)]">
            Websites, systems, and AI automation that actually reduce manual workload and help your business scale clearly.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[26px] border border-[rgba(10,10,10,0.08)] bg-white/58 p-6 shadow-[0_12px_32px_rgba(10,10,10,0.04)] backdrop-blur-sm">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
              Navigate
            </p>
            <div className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-[var(--color-copy)] transition hover:text-[var(--color-black)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] border border-[rgba(200,169,110,0.24)] bg-white/72 p-6 shadow-[0_12px_32px_rgba(10,10,10,0.04)] backdrop-blur-sm">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
              Contact
            </p>
            <div className="space-y-3 text-sm text-[var(--color-copy)]">
              <p>{siteConfig.location}</p>
              <Link
                href={`mailto:${siteConfig.contactEmail}`}
                className="block transition hover:text-[var(--color-black)]"
              >
                {siteConfig.contactEmail}
              </Link>
              <Link
                href={siteConfig.bookingUrl}
                className="block transition hover:text-[var(--color-black)]"
              >
                Book a Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
