"use client";

import { useState } from "react";

type FormState =
  | { status: "idle"; message: string }
  | { status: "loading"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

type WindowWithTracking = Window & {
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
};

function readUtmFromLocation() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get("utm_source") || undefined,
    medium: params.get("utm_medium") || undefined,
    campaign: params.get("utm_campaign") || undefined,
    content: params.get("utm_content") || undefined,
    term: params.get("utm_term") || undefined,
  };
}

function readReferrer() {
  if (typeof document === "undefined") return "";
  return document.referrer;
}

export function BceWaitlistForm() {
  const [state, setState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "loading", message: "Saving your spot..." });

    let response: Response;
    try {
      response = await fetch("/api/bce-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          businessName: formData.get("businessName"),
          utm: readUtmFromLocation(),
          referrer: readReferrer(),
        }),
      });
    } catch {
      setState({
        status: "error",
        message: "Network hiccup. Give it another try in a moment.",
      });
      return;
    }

    const data = (await response.json().catch(() => ({}))) as {
      message?: string;
      error?: string;
    };

    if (!response.ok) {
      setState({
        status: "error",
        message: data.error ?? "We couldn't save your spot. Please try again.",
      });
      return;
    }

    // Fire conversion events
    try {
      const w = window as WindowWithTracking;
      if (typeof w.fbq === "function") {
        w.fbq("track", "Lead", { content_name: "BCE Waitlist" });
      }
      if (typeof w.gtag === "function") {
        w.gtag("event", "generate_lead", {
          event_category: "waitlist",
          event_label: "bce",
        });
      }
    } catch {
      // Tracking is best-effort. Never block success state on it.
    }

    form.reset();
    setState({
      status: "success",
      message:
        data.message ?? "You're on the list. Check your inbox for confirmation.",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-[28px] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_80px_rgba(10,10,10,0.08)] md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--color-copy)]">
          Name
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="min-h-12 rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 outline-none transition focus:border-[var(--color-navy)]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-copy)]">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="min-h-12 rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 outline-none transition focus:border-[var(--color-navy)]"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-copy)]">
        Business name <span className="text-[var(--color-meta)]">(optional)</span>
        <input
          name="businessName"
          type="text"
          autoComplete="organization"
          className="min-h-12 rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 outline-none transition focus:border-[var(--color-navy)]"
        />
      </label>
      <button
        type="submit"
        disabled={state.status === "loading" || state.status === "success"}
        className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-black)] transition hover:-translate-y-0.5 hover:bg-[#d6ba86] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state.status === "loading"
          ? "Saving..."
          : state.status === "success"
            ? "You're on the list"
            : "Join the waitlist"}
      </button>
      {state.status !== "idle" ? (
        <p
          className={`text-sm ${state.status === "success" ? "text-[var(--color-navy)]" : state.status === "error" ? "text-[#aa4c4c]" : "text-[var(--color-meta)]"}`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
