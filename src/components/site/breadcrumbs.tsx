import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";

type Tone = "light" | "dark";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  visible?: boolean;
  tone?: Tone;
  className?: string;
};

const toneStyles: Record<Tone, {
  trail: string;
  link: string;
  current: string;
  separator: string;
}> = {
  light: {
    trail: "text-[var(--color-meta)]",
    link: "transition hover:text-[var(--color-black)]",
    current: "text-[var(--color-black)]",
    separator: "text-[var(--color-line)]",
  },
  dark: {
    trail: "text-white/45",
    link: "transition hover:text-[var(--color-gold)]",
    current: "text-white/85",
    separator: "text-white/20",
  },
};

export function Breadcrumbs({
  items,
  visible = false,
  tone = "light",
  className,
}: BreadcrumbsProps) {
  if (items.length === 0) return null;

  const t = toneStyles[tone];

  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      {visible ? (
        <nav aria-label="Breadcrumb" className={className}>
          <ol
            className={`flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] ${t.trail}`}
          >
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.href} className="flex items-center gap-2">
                  {isLast ? (
                    <span aria-current="page" className={t.current}>
                      {item.name}
                    </span>
                  ) : (
                    <Link href={item.href} className={t.link}>
                      {item.name}
                    </Link>
                  )}
                  {!isLast ? <span className={t.separator}>›</span> : null}
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}
    </>
  );
}
