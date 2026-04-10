"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/site/button-link";
import { navItems, siteConfig } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:rgba(10,10,10,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="shrink-0" aria-label="CH Digitals home">
          <Image
            src="/images/brand/logo-transparent.png"
              alt="CH Digitals logo"
            width={420}
            height={75}
            priority
            className="h-auto w-[170px] md:w-[230px]"
          />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-off-white)] transition hover:text-[var(--color-gold)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ButtonLink href={siteConfig.bookingUrl}>
            Book a Strategy Session
          </ButtonLink>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-[var(--color-off-white)] md:hidden"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[var(--color-black)] px-5 py-6 md:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[var(--color-off-white)]"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href={siteConfig.bookingUrl} className="mt-3">
              Book a Strategy Session
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
