import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { ButtonLink } from "@/components/site/button-link";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Future insights from CH Digitals on websites, digital systems, regional business growth, and AI automation for small and medium businesses.",
  alternates: {
    canonical: "/blog",
  },
  // Noindex until content lands. Re-index trigger: 5+ articles in any cluster.
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return (
    <PageShell>
      <section className="bg-[var(--color-cream)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[900px] text-center">
          <Breadcrumbs
            visible
            tone="light"
            className="mb-6 flex justify-center"
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
            ]}
          />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
            Insights
          </p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-[var(--color-black)] md:text-7xl">
            Insights are coming.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-copy)]">
            The structure is here for future content around digital systems, regional business growth, and AI automation. Launch priority stays on the core service pages first.
          </p>
          <div className="mt-10">
            <ButtonLink href={siteConfig.bookingUrl}>Book a Strategy Session</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
