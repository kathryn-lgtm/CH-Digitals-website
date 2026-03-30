"use client";

import { useState } from "react";

type FormState =
  | { status: "idle"; message: string }
  | { status: "loading"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<FormState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({
      status: "loading",
      message: "Sending your message...",
    });

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        business: formData.get("business"),
        message: formData.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = (await response.json()) as { message?: string; error?: string };

    if (!response.ok) {
      setState({
        status: "error",
        message: data.error ?? "The form could not be sent right now.",
      });
      return;
    }

    form.reset();
    setState({
      status: "success",
      message: data.message ?? "Message sent successfully.",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-[28px] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_80px_rgba(10,10,10,0.08)] md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--color-copy)]">
          Name
          <input
            required
            name="name"
            type="text"
            className="min-h-12 rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 outline-none transition focus:border-[var(--color-navy)]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-copy)]">
          Email
          <input
            required
            name="email"
            type="email"
            className="min-h-12 rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 outline-none transition focus:border-[var(--color-navy)]"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-copy)]">
        Business
        <input
          name="business"
          type="text"
          className="min-h-12 rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 outline-none transition focus:border-[var(--color-navy)]"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--color-copy)]">
        What are you trying to solve?
        <textarea
          required
          name="message"
          rows={6}
          className="rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-4 outline-none transition focus:border-[var(--color-navy)]"
        />
      </label>
      <button
        type="submit"
        disabled={state.status === "loading"}
        className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-black)] transition hover:-translate-y-0.5 hover:bg-[#d6ba86] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state.status === "loading" ? "Sending..." : "Send enquiry"}
      </button>
      {state.status !== "idle" ? (
        <p
          className={`text-sm ${state.status === "success" ? "text-[var(--color-navy)]" : "text-[#aa4c4c]"}`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
