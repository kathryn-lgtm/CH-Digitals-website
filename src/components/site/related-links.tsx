import Link from "next/link";

type Tone = "light" | "dark";

export type RelatedLink = {
  href: string;
  eyebrow: string;
  body: string;
  title: string;
};

type RelatedLinksProps = {
  heading?: string;
  description?: string;
  items: RelatedLink[];
  tone?: Tone;
};

const toneStyles: Record<
  Tone,
  {
    section: string;
    heading: string;
    description: string;
    card: string;
    eyebrow: string;
    body: string;
    title: string;
  }
> = {
  light: {
    section: "bg-[var(--color-cream)]",
    heading: "text-[var(--color-meta)]",
    description: "text-[var(--color-copy)]",
    card: "border border-[rgba(10,10,10,0.08)] bg-white hover:border-[var(--color-gold)] hover:shadow-[0_18px_45px_rgba(10,10,10,0.08)]",
    eyebrow: "text-[var(--color-gold)]",
    body: "text-[var(--color-copy)]",
    title: "text-[var(--color-black)] group-hover:text-[var(--color-gold)]",
  },
  dark: {
    section: "bg-[var(--color-black)]",
    heading: "text-[var(--color-gold)]",
    description: "text-white/72",
    card: "border border-white/10 bg-white/[0.04] hover:border-[var(--color-gold)] hover:bg-white/[0.06]",
    eyebrow: "text-[var(--color-gold)]",
    body: "text-white/70",
    title: "text-white/85 group-hover:text-[var(--color-gold)]",
  },
};

export function RelatedLinks({
  heading = "Explore further",
  description,
  items,
  tone = "light",
}: RelatedLinksProps) {
  if (items.length === 0) return null;

  const t = toneStyles[tone];

  return (
    <section className={`px-5 py-16 md:px-8 md:py-20 ${t.section}`}>
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 max-w-3xl space-y-3">
          <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${t.heading}`}>
            {heading}
          </p>
          {description ? (
            <p className={`text-lg leading-8 ${t.description}`}>{description}</p>
          ) : null}
        </div>
        <div
          className={`grid gap-4 ${
            items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group rounded-[24px] px-6 py-6 transition hover:-translate-y-0.5 ${t.card}`}
            >
              <p className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${t.eyebrow}`}>
                {item.eyebrow}
              </p>
              <p className={`mt-3 text-sm leading-7 ${t.body}`}>{item.body}</p>
              <p
                className={`mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${t.title}`}
              >
                {item.title} →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
