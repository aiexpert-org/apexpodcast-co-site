import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "The Pilot — $997. One Episode. The Whole System.",
  description:
    "$997 buys you one complete episode produced through the full PREPP stack — plus a guest strategy session to map your first 10 ideal guests from your own network.",
  alternates: { canonical: "/pilot" },
};

export default function PilotPage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <Container>
          <Eyebrow>The Pilot</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            <span className="text-[color:var(--color-accent)]">$997.</span>{" "}
            One episode.
            <br />
            The whole system.
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            We produce a complete first episode of your podcast — Plan, Record,
            Edit, Publish, Promote — and we help you map your first 10 ideal
            guests from your own network. If you love it, the $997 applies as
            credit toward your first month of the Flagship.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <ButtonLink href="/apply" variant="primary" size="lg" withArrow>
              Apply for a Pilot
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="outline" size="lg">
              See PREPP first
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* WHAT YOU GET */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>What you get</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                A complete first episode, produced end-to-end.
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "60-min Blueprint Session — concept, format, hook, cover-art direction",
                  "Riverside session with a producer on the call, live direction",
                  "Full audio + video cut, captions, transcript, show notes",
                  "Uploaded to one platform of your choice (Spotify or YouTube) + episode page",
                  "3 short-form clips + 1 quote card + 1 newsletter-ready blurb",
                  "90-min Guest Strategy Session — map 10 ideal guests from your network",
                  "Outreach choreography: first-touch scripts + follow-up cadence",
                  "Pipeline tracking template (Notion / Airtable) for you to keep using",
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
              <Eyebrow>What you don't get (yet)</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                Transparency, day one.
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Ongoing weekly production — that's the Flagship",
                  "Apex's own contact network for guest intros — that's a Flagship benefit that unlocks once we've worked together",
                  "Newsletter or social posting on your behalf — we hand you assets; you post them",
                  "Paid ad spend — that lives in a separate budget for clients running the full OS",
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

              <div className="mt-10 rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-background)] p-6">
                <p className="font-display text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  The upsell mechanic
                </p>
                <p className="mt-3 text-[color:var(--color-foreground)]/90">
                  If you love it, the full $997 applies as credit toward your
                  first month of the Flagship. Credit holds for 60 days from
                  Pilot delivery.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SCARCITY + PROCESS */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <Eyebrow>The Process</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                Two to three weeks. End to end.
              </h2>
              <ol className="mt-8 space-y-5">
                {[
                  ["Week 0", "Application reviewed by Brett or Randy. 30-min Blueprint discovery call if it's a fit."],
                  ["Week 1", "Blueprint Session — concept, format, brand. Guest Strategy Session — map 10 guests."],
                  ["Week 2", "Riverside record. Edit. Approval round."],
                  ["Week 3", "Publish. Clip rollout. You receive every asset + the playbook."],
                ].map(([w, body]) => (
                  <li key={w} className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="font-display text-sm uppercase tracking-wider text-[color:var(--color-accent)]">
                      {w}
                    </span>
                    <span className="text-[color:var(--color-foreground)]/85">
                      {body}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-8">
              <Eyebrow>Why this works</Eyebrow>
              <h3 className="mt-4 font-display text-2xl uppercase leading-tight">
                We take 5 Pilots per month.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                That's a hard cap. Brett or Randy is personally on every Pilot
                — the Blueprint, the Guest Strategy, the recording. We'd rather
                ship five great first episodes than twenty rushed ones.
              </p>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                If we're booked out the month you apply, you'll know within 24
                hours and we'll hold a spot in the next available cohort.
              </p>
              <div className="mt-8">
                <ButtonLink href="/apply" variant="primary" size="lg" withArrow className="w-full">
                  Apply for a Pilot
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CLOSING */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight">
              The hardest part of starting a podcast isn't recording. It's
              knowing who to invite first.
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85">
              We'll help you figure that out — and produce the episode. $997.
              One conversation. The whole system.
            </p>
            <div className="mt-8">
              <ButtonLink href="/apply" variant="primary" size="lg" withArrow>
                Apply now
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
