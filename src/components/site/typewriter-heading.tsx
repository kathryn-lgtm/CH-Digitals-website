"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterHeadingProps = {
  lines: string[];
  className?: string;
};

export function TypewriterHeading({
  lines,
  className = "",
}: TypewriterHeadingProps) {
  const fullText = useMemo(() => lines.join("\n"), [lines]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setVisibleCount((current) => {
        if (current >= fullText.length) {
          window.clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 28);

    return () => window.clearInterval(timer);
  }, [fullText.length, reducedMotion]);

  const effectiveVisibleCount = reducedMotion ? fullText.length : visibleCount;
  const visibleText = fullText.slice(0, effectiveVisibleCount);
  const renderedLines = visibleText.split("\n");
  const isComplete = effectiveVisibleCount >= fullText.length;

  return (
    <h1
      className={`max-w-[11ch] font-display text-[clamp(2rem,5.2vw,4.1rem)] leading-[0.96] tracking-[-0.04em] text-white ${className}`}
      aria-label={fullText.replace(/\n/g, " ")}
    >
      {renderedLines.map((line, index) => (
        <span key={`${line}-${index}`} className="block">
          {line || "\u00A0"}
        </span>
      ))}
      <span
        aria-hidden="true"
        className={`ml-2 inline-block h-[0.9em] w-[0.1em] translate-y-[0.08em] bg-[var(--color-gold)] ${
          isComplete ? "blinking-cursor" : "opacity-100"
        }`}
      />
    </h1>
  );
}
