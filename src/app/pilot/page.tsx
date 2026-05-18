import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "One Episode + Guest Map — $997. The whole system, once.",
  description:
    "$997 one-time. One complete episode produced through the full PREPP stack + a 90-min Guest Strategy Session that maps your first 10 ideal guests from your own network. $997 credits toward Your Weekly Show within 60 days.",
  alternates: { canonical: "/pilot" },
};

export default function OneEpisodePage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <Container>
          <Eyebrow>One Episode + Guest Map · One-time</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            <span className="text-[color:var(--color-accent)]">$997.</span>{" "}
            One episode.
            <br />
            The whole system.
            <br />
            Plus your first 10 guests, mapped.
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            We produce a complete episode of your podcast — Plan, Record, Edit,
            Publish, Promote — and we run a 90-minute Guest Strategy Session
            that maps your first 10 ideal guests from your own network, with
            outreach scripts and follow-up choreography included. If you
            continue with us, the $997 applies as credit toward your first
            cycle of Your Weekly Show.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <ButtonLink href="/apply" variant="primary" size="lg" withArrow>
              Apply now (5 spots/month)
            </ButtonLink>
            <ButtonLink href="/flagship" variant="outline" size="lg">
              See Your Weekly Show
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* WHAT YOU GET + ANCHOR TABLE */}
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
                  "60-min Show Concept Session — format, hook, brand direction",
                  "Producer-led Riverside session, multi-cam 4K, live direction",
                  "Full audio + video edit (one complete episode)",
                  "AI-optimized show notes (3 tiers) + full transcript + 1 quote card",
                  "Custom episode artwork designed to your brand",
                  "3 short-form clips, captioned + branded (9:16 + 1:1)",
                  "Hosting setup + episode publish to Spotify or YouTube",
                  "90-min Guest Strategy Session — map your first 10 guests from your network",
                  "Outreach scripts + follow-up choreography templates",
                  "Pipeline tracking template (Notion / Sheet) for you to keep using",
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
              <Eyebrow>What you don't get with the wedge</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                Transparency, day one.
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Ongoing weekly production — that's Your Weekly Show",
                  "Full PodcastNetwork.org system installation — that's a Your Weekly Show benefit",
                  "Newsletter or social posting on your behalf — we hand you assets; you publish from your accounts",
                  "Paid ad spend — separate budget for clients running the full production",
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
                  The credit mechanic
                </p>
                <p className="mt-3 text-[color:var(--color-foreground)]/90">
                  If you continue with Your Weekly Show within 60 days of your
                  One Episode delivery, the entire $997 applies as credit
                  toward your first cycle. That's ~33% of your first cycle
                  covered.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ANCHOR TABLE — what this is worth */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <Eyebrow>What you'd pay separately</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
            Standalone equivalent: $2,625 – $5,000.
          </h2>
          <p className="mt-5 max-w-3xl text-[color:var(--color-foreground)]/85">
            We anchor against established-agency rates from Awkward Sage Media,
            Aloomii, and the broader B2B podcast production category.
          </p>

          <div className="mt-10 rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] overflow-hidden max-w-3xl">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Show concept + format session", "$500–$1,000"],
                  ["Producer-led Riverside recording session", "$400–$700"],
                  ["Full audio + video edit (one episode)", "$400–$700"],
                  ["3 short-form clips, captioned + branded", "$225–$450"],
                  ["Show notes + transcript + quote card", "$150–$250"],
                  ["Hosting setup + episode publish", "$200–$400"],
                  ["Guest Strategy Session (90 min)", "$750–$1,500"],
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
                    Standalone total
                  </td>
                  <td className="px-5 py-4 text-right font-display text-lg text-[color:var(--color-accent)]">
                    $2,625–$5,000
                  </td>
                </tr>
                <tr className="bg-[color:var(--color-accent)]">
                  <td className="px-5 py-4 font-display uppercase tracking-wider text-[color:var(--color-background)]">
                    Your price — One Episode + Guest Map
                  </td>
                  <td className="px-5 py-4 text-right font-display text-lg text-[color:var(--color-background)]">
                    $997
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* SCARCITY + PROCESS */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
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
                  ["Week 1", "Show Concept Session — format, hook, brand. Guest Strategy Session — map 10 guests."],
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
                We take 5 per month.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                That's a hard cap at launch. Brett or Randy is personally on
                every One Episode engagement — the concept session, the Guest
                Strategy, the recording. We'd rather ship five great first
                episodes than twenty rushed ones.
              </p>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                If we're booked out the month you apply, you'll know within 24
                hours and we'll hold a spot in the next available cohort.
              </p>
              <div className="mt-8">
                <ButtonLink href="/apply" variant="primary" size="lg" withArrow className="w-full">
                  Apply now
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CLOSING */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight">
              The hardest part of starting a podcast isn't recording. It's
              knowing who to invite first.
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85">
              We'll help you figure that out — and produce the episode. $997.
              One conversation. The whole system. Credit toward Your Weekly
              Show if you continue.
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
