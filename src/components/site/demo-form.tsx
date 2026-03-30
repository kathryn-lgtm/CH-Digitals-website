"use client";

import { useState } from "react";

type DemoState =
  | { status: "idle"; message: string }
  | { status: "loading"; message: string }
  | { status: "error"; message: string }
  | { status: "success"; message: string };

export function DemoForm() {
  const [prompt, setPrompt] = useState("");
  const [state, setState] = useState<DemoState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading", message: "Mapping automation opportunities..." });

    const response = await fetch("/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = (await response.json()) as { result?: string; error?: string };

    if (!response.ok || !data.result) {
      setState({
        status: "error",
        message: data.error ?? "The demo could not generate a result right now.",
      });
      return;
    }

    setState({ status: "success", message: data.result });
  }

  return (
    <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(24,24,24,0.96),rgba(10,10,10,1))] p-6 shadow-[0_36px_100px_rgba(10,10,10,0.35)] md:p-8">
      <div className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/45">
        <span className="h-2.5 w-2.5 rounded-full bg-[#fd5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fdbc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3">automation-opportunity-demo</span>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block">
          <span className="mb-3 block font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
            Describe your business or biggest operational challenge
          </span>
          <textarea
            required
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            rows={5}
            placeholder="e.g. I run a physiotherapy clinic and spend 3 hours a week chasing appointment confirmations..."
            className="w-full rounded-2xl border border-white/10 bg-white/3 px-4 py-4 font-mono text-sm leading-7 text-white outline-none transition placeholder:text-white/35 focus:border-[var(--color-gold)]"
          />
        </label>
        <button
          type="submit"
          disabled={state.status === "loading"}
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-black)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state.status === "loading" ? "Thinking..." : "Show me the opportunities"}
        </button>
      </form>
      <div className="mt-6 min-h-40 rounded-2xl border border-white/8 bg-black/30 p-4 font-mono text-sm leading-7 text-white/88">
        {state.status === "idle" ? (
          <p className="text-white/45">
            Three practical automation opportunities will appear here.
          </p>
        ) : null}
        {state.status === "error" ? (
          <p className="text-[#f5a7a1]">{state.message}</p>
        ) : null}
        {state.status === "loading" ? (
          <p className="text-white/65">{state.message}</p>
        ) : null}
        {state.status === "success" ? (
          <pre className="whitespace-pre-wrap">{state.message}</pre>
        ) : null}
      </div>
    </div>
  );
}
