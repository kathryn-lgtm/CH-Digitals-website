import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--color-gold)] text-[var(--color-black)] shadow-[0_20px_50px_rgba(200,169,110,0.24)] hover:-translate-y-0.5 hover:bg-[#d6ba86]",
  secondary:
    "border border-[var(--color-navy)] text-[var(--color-navy)] hover:border-[var(--color-gold)] hover:text-[var(--color-black)]",
  ghost: "text-[var(--color-navy)] hover:text-[var(--color-gold)]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
