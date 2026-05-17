import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { PreppIconRow } from "@/components/prepp-icons";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Flagship — The Podcast Content OS",
  description:
    "All five PREPP stages, weekly. The full Podcast Content OS for leaders running their podcast as a primary pipeline asset. From ~$4,800/month.",
  alternates: { canonical: "/flagship" },
};

export default function FlagshipPage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <Container>
          <Eyebrow>Flagship — Podcast Content OS</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            All five stages. Weekly.
            <br />
            <span className="text-[color:var(--color-accent)]">Done.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            The full Apex Podcast Content OS. PREPP, end to end, every week,
            for the leaders who run their podcast as a primary pipeline asset
            — not a side project.
          </p>

          <div className="mt-10 inline-flex flex-col rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-mid)] p-6">
            <span className="text-xs font-display uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              From
            </span>
            <span className="font-display text-5xl sm:text-6xl text-[color:var(--color-accent)]">
              ~$4,800
            </span>
            <span className="text-sm text-[color:var(--color-foreground)]/80 uppercase tracking-wide">
              per month, weekly cadence
            </span>
          </div>
        </Container>
      </Section>

      {/* PREPP ROW */}
      <Section className="py-12 sm:py-16 border-y border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <PreppIconRow withTaglines />
        </Container>
      </Section>

      {/* THE MATH */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <Eyebrow>The Math</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                How the price gets built.
              </h2>
              <p className="mt-5 text-[color:var(--color-foreground)]/85 leading-relaxed">
                Apex's Flagship pricing is anchored on a weekly-cadence
                business podcast (4 episodes/month). We show our work — no
                opaque retainers, no surprise add-ons.
              </p>
            </div>

            <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[color:var(--color-border)]">
                    <th className="text-left font-display uppercase tracking-wider text-xs px-5 py-4 text-[color:var(--color-muted)]">
                      Service
                    </th>
                    <th className="text-right font-display uppercase tracking-wider text-xs px-5 py-4 text-[color:var(--color-muted)]">
                      Monthly
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Production", "$1,000"],
                    ["Editing (audio + video)", "$1,600"],
                    ["Short-form clips (10)", "$800"],
                    ["Publishing & distribution", "$400"],
                    ["Promote — social + analytics", "$1,000"],
                  ].map(([s, p]) => (
                    <tr
                      key={s}
                      className="border-b border-[color:var(--color-border)]/60 last:border-0"
                    >
                      <td className="px-5 py-3 text-[color:var(--color-foreground)]/90">{s}</td>
                      <td className="px-5 py-3 text-right text-[color:var(--color-foreground)]/90">
                        {p}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[color:var(--color-background)]">
                    <td className="px-5 py-4 font-display uppercase tracking-wider text-[color:var(--color-accent)]">
                      Total
                    </td>
                    <td className="px-5 py-4 text-right font-display text-lg text-[color:var(--color-accent)]">
                      ~$4,800/mo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* INCLUDED / NOT INCLUDED */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>What's included</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                The full Podcast Content OS.
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Weekly Riverside session with a producer on the call",
                  "Full audio + video edit (multi-cam) per episode",
                  "Captions, transcripts, show notes, episode artwork",
                  "10+ short-form clips per episode (9:16, 1:1, 16:9 variants)",
                  "Multi-platform publishing — Apple, Spotify, YouTube + Shorts, your site",
                  "SEO-optimized episode pages on your website",
                  "Active Promote stage — social cadence + guest collaboration loops",
                  "Guest pipeline management + outreach choreography (PREPP Plan)",
                  "Monthly analytics review with Brett or Randy directly",
                  "Tier-2 unlock: warm intros from Apex's own network as the partnership deepens",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[color:var(--color-foreground)]/90"
                  >
                    <Check
                      className="mt-1 h-5 w-5 flex-shrink-0 text-[color:var(--color-accent)]"
                      aria-hidden
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Eyebrow>What's not included</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                We're clear on the boundaries.
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Paid ad spend — that's a separate budget, scoped to your goals",
                  "On-location video shoot crews — we run Riverside; bespoke shoots quoted separately",
                  "Appearances / keynote booking — separate service",
                  "Brand-new visual identity from scratch (we evolve what you have)",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[color:var(--color-foreground)]/80"
                  >
                    <X
                      className="mt-1 h-5 w-5 flex-shrink-0 text-[color:var(--color-muted)]"
                      aria-hidden
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* NETWORK MULTIPLIER */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <div className="rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-mid)] p-10 lg:p-14 max-w-4xl mx-auto">
            <Eyebrow>The Network Multiplier</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
              Your relationships are the foundation. Ours are the multiplier.
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-foreground)]/90 leading-relaxed">
              Apex clients get our network — but the right way. Your first 20
              episodes come from people you already know. Once we've built the
              foundation together, our own contacts — eXp executives, authors,
              the professional sports network — become available for warm
              intros. That's a Tier-2 benefit. Not a Day-1 promise.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight">
              Ready to run your podcast as a pipeline asset?
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85">
              The Flagship is invite-based — we run it for a small roster of
              clients at a time so the work stays Brett-and-Randy quality. A
              30-min Blueprint Session is the first step.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <ButtonLink href="/apply" variant="primary" size="lg" withArrow>
                Book a Blueprint Session
              </ButtonLink>
              <ButtonLink href="/pilot" variant="outline" size="lg">
                Start with a Pilot instead
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
