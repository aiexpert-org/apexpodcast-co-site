"use client";

import { useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/cn";

/**
 * Apex Pilot/Flagship application form.
 *
 * POSTs JSON to NEXT_PUBLIC_APPS_SCRIPT_WEBHOOK_URL — the same pattern used
 * on Brett's Burien Best Care Home site. The webhook URL is left as TODO for
 * Brett/Randy to wire up post-launch; until it's set the form will surface
 * a clear "not yet configured" error rather than silently failing.
 */

type Status = "idle" | "submitting" | "success" | "error";

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const webhook = process.env.NEXT_PUBLIC_APPS_SCRIPT_WEBHOOK_URL;

    if (!webhook) {
      setStatus("error");
      setErrorMsg(
        "Form backend not yet connected. Email brett@apexpodcast.co directly while we wire it up.",
      );
      return;
    }

    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "apexpodcast.co",
          submittedAt: new Date().toISOString(),
        }),
        // Apps Script web-app endpoints often respond as text/plain — opaque is fine.
      });

      if (!res.ok) {
        throw new Error(`Webhook returned ${res.status}`);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Email brett@apexpodcast.co directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-mid)] p-8">
        <p className="font-display text-xl uppercase tracking-wider text-[color:var(--color-accent)]">
          Thanks — we'll be in touch.
        </p>
        <p className="mt-3 text-[color:var(--color-foreground)]/80">
          Brett or Randy will personally reply within 1 business day to set up
          a 30-minute Blueprint call. If it's urgent, email{" "}
          <a
            href="mailto:brett@apexpodcast.co"
            className="underline hover:text-[color:var(--color-accent)]"
          >
            brett@apexpodcast.co
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-6 sm:p-8"
    >
      <FormRow label="Your name" name="name" required />
      <FormRow label="Email" name="email" type="email" required />
      <FormRow label="Phone (optional)" name="phone" type="tel" />
      <FormRow
        label="Company or brand"
        name="company"
        placeholder="e.g., Cheviron Coaching, eXp Realty team"
        required
      />

      <FormSelect
        label="eXp Realty affiliation"
        name="exp_affiliation"
        options={[
          { value: "", label: "Select one" },
          { value: "exp_agent", label: "eXp agent" },
          { value: "exp_team", label: "eXp team leader" },
          { value: "exp_exec", label: "eXp executive / instructor" },
          { value: "exp_luxury", label: "eXp Luxury Division" },
          { value: "exp_sports", label: "eXp Professional Sports Division" },
          { value: "non_exp", label: "Not eXp — adjacent industry" },
        ]}
      />

      <FormRow
        label="Current podcast URL (if any)"
        name="podcast_url"
        type="url"
        placeholder="https://..."
      />

      <FormCheckboxGroup
        label="Which PREPP stages do you need most help with?"
        name="prepp_needs"
        options={[
          "Plan — guest pipeline & strategy",
          "Record — production direction",
          "Edit — audio, video, clips",
          "Publish — distribution & SEO",
          "Promote — social rollout & growth",
          "All five — full Podcast Content OS",
        ]}
      />

      <FormSelect
        label="Which SKU fits where you are?"
        name="budget"
        options={[
          { value: "", label: "Select one" },
          { value: "one-episode", label: "One Episode + Guest Map — $997 one-time" },
          { value: "weekly-show", label: "Your Weekly Show — $2,997 per 28-day cycle" },
          { value: "custom", label: "Custom scope / multi-show — quote me" },
          { value: "not-sure", label: "Not sure yet — help me figure it out" },
        ]}
      />

      <FormTextarea
        label="What would success look like in 6 months?"
        name="success_goal"
        rows={4}
        placeholder="A new pipeline of warm intros? A bestselling book launch? Recruiting flywheel?"
      />

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          withArrow
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Submit Application"}
        </Button>
        <p className="text-xs text-[color:var(--color-muted)] self-center">
          We respond within 1 business day. No spam, ever.
        </p>
      </div>

      {status === "error" ? (
        <p className="text-sm text-[color:var(--color-accent)]">{errorMsg}</p>
      ) : null}
    </form>
  );
}

function FormRow({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-display uppercase tracking-[0.18em] text-[color:var(--color-foreground)]/85 mb-2">
        {label}
        {required ? <span className="text-[color:var(--color-accent)]"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputCls}
      />
    </label>
  );
}

function FormTextarea({
  label,
  name,
  rows = 4,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-display uppercase tracking-[0.18em] text-[color:var(--color-foreground)]/85 mb-2">
        {label}
      </span>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className={cn(inputCls, "min-h-[110px] resize-y")}
      />
    </label>
  );
}

function FormSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="block">
      <span className="block text-xs font-display uppercase tracking-[0.18em] text-[color:var(--color-foreground)]/85 mb-2">
        {label}
      </span>
      <select name={name} className={inputCls}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function FormCheckboxGroup({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <fieldset>
      <legend className="block text-xs font-display uppercase tracking-[0.18em] text-[color:var(--color-foreground)]/85 mb-3">
        {label}
      </legend>
      <div className="grid sm:grid-cols-2 gap-2.5">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex items-start gap-2.5 cursor-pointer text-sm text-[color:var(--color-foreground)]/90 hover:text-[color:var(--color-accent)]"
          >
            <input
              type="checkbox"
              name={name}
              value={opt}
              className="mt-1 h-4 w-4 accent-[color:var(--color-accent)]"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

const inputCls =
  "block w-full rounded-sm bg-[color:var(--color-background)] border border-[color:var(--color-border)] px-4 py-3 text-[color:var(--color-foreground)] placeholder:text-[color:var(--color-muted)] focus:outline-none focus:border-[color:var(--color-accent)] focus:ring-1 focus:ring-[color:var(--color-accent)] transition-colors";
