type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  eyebrow,
  title,
  description,
  className = "",
  children,
}: SectionProps) {
  return (
    <section className={`px-5 py-16 md:px-8 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-4xl leading-tight text-[var(--color-black)] md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="text-lg leading-8 text-[var(--color-copy)]">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
