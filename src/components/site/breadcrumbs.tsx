import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  visible?: boolean;
  className?: string;
};

export function Breadcrumbs({ items, visible = false, className }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      {visible ? (
        <nav aria-label="Breadcrumb" className={className}>
          <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-meta)]">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.href} className="flex items-center gap-2">
                  {isLast ? (
                    <span aria-current="page" className="text-[var(--color-black)]">
                      {item.name}
                    </span>
                  ) : (
                    <Link href={item.href} className="transition hover:text-[var(--color-black)]">
                      {item.name}
                    </Link>
                  )}
                  {!isLast ? <span className="text-[var(--color-line)]">›</span> : null}
                </li>
              );
            })}
          </ol>
        </nav>
      ) : null}
    </>
  );
}
