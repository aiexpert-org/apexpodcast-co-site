import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { PreppIconRow } from "@/components/prepp-icons";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Weekly Show — $2,997 per 28-day cycle. Production + PodcastNetwork integration.",
  description:
    "Full PREPP stack, weekly cadence. 22 deliverables per 28-day cycle. PodcastNetwork.org relationship-engine system included free. 13 cycles per year. Annual prepay: 13 for the price of 12 ($35,964/yr).",
  alternates: { canonical: "/flagship" },
};

export default function WeeklyShowPage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <Container>
          <Eyebrow>Your Weekly Show · Per 28-day cycle</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            Your podcast, produced end-to-end.
            <br />
            One team.{" "}
            <span className="text-[color:var(--color-accent)]">Every week.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            Full PREPP stack. 22 distinct deliverables per cycle.
            PodcastNetwork.org's relationship-engine system installed free.
            Your weekly cadence, our production engine.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6 items-start">
            <div className="inline-flex flex-col rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-mid)] p-6">
              <span className="font-display text-5xl sm:text-6xl text-[color:var(--color-accent)]">
                $2,997
              </span>
              <span className="text-sm text-[color:var(--color-foreground)]/80 uppercase tracking-wide">
                per 28-day cycle · 13 cycles/year
              </span>
            </div>
            <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)]/60 p-6 max-w-sm">
              <p className="font-display text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                Annual prepay
              </p>
              <p className="mt-2 font-display text-2xl text-[color:var(--color-foreground)]">
                $35,964/yr
              </p>
              <p className="mt-2 text-sm text-[color:var(--color-foreground)]/80">
                13 cycles for the price of 12 — one cycle free.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <ButtonLink href="/apply" variant="primary" size="lg" withArrow>
              Apply for Your Weekly Show
            </ButtonLink>
            <ButtonLink href="/pilot" variant="outline" size="lg">
              Start with One Episode + Guest Map
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* PREPP ROW */}
      <Section className="py-12 sm:py-16 border-y border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <PreppIconRow withTaglines />
        </Container>
      </Section>

      {/* THE FULL BUNDLE */}
      <Section>
        <Container>
          <Eyebrow>The full bundle</Eyebrow>
          <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
            22 deliverables per cycle.
          </h2>
          <p className="mt-5 max-w-3xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            Our AI-leveraged stack (Riverside, Descript, Opus Clip, Castmagic,
            Transistor, Metricool, Claude, ChatGPT, Codex) compresses what
            legacy agencies bill 25–30 hours per episode down to 5–8. We pass
            the savings to you in the form of a bigger bundle, not a higher
            price.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                letter: "P",
                name: "Plan",
                items: [
                  "Annual show strategy (refreshed quarterly)",
                  "Per-ep guest research brief",
                  "Per-ep host prep doc",
                ],
              },
              {
                letter: "R",
                name: "Record",
                items: [
                  "Weekly Riverside session (4/cycle), multi-cam 4K + broadcast audio",
                  "Live producer on every call",
                  "Backup recording, levels verified",
                ],
              },
              {
                letter: "E",
                name: "Edit",
                items: [
                  "Full audio edit",
                  "Full video edit (multi-cam, branded)",
                  "Branded intro/outro insertion",
                  "Show notes — 3 tiers (short, long, AEO-optimized)",
                  "Full transcript",
                  "Custom episode artwork",
                ],
              },
              {
                letter: "P",
                name: "Publish",
                items: [
                  "Transistor hosting + global audio distribution (Apple, Spotify, Amazon, iHeart)",
                  "YouTube full-episode upload with custom thumbnail + chapters",
                  "Video podcast distribution as Transistor's video tech launches",
                ],
              },
              {
                letter: "P",
                name: "Promote",
                items: [
                  "10 short-form clips/ep (Reels, Shorts, TikTok)",
                  "4 quote cards/ep (carousel-ready)",
                  "3 LinkedIn posts/ep (host-voice via AI, you edit before posting)",
                  "1 newsletter-ready blurb/ep",
                  "1 AEO-optimized blog post/ep",
                  "Weekly Metricool social scheduling",
                  "Monthly analytics with AI-generated recommendations",
                ],
              },
            ].map((stage) => (
              <div
                key={stage.name}
                className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)]/60 p-6"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl text-[color:var(--color-accent)] leading-none">
                    {stage.letter}
                  </span>
                  <span className="font-display text-sm uppercase tracking-wider text-[color:var(--color-foreground)]">
                    {stage.name}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {stage.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[color:var(--color-foreground)]/85 leading-snug"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--color-accent)]"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* PODCASTNETWORK INTEGRATION — bonus, dark band */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-background)]">
        <Container>
          <div className="rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-mid)] p-10 lg:p-14 max-w-4xl mx-auto">
            <Eyebrow>Bonus · PodcastNetwork.org integration</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
              Free system access. Sold separately to non-Apex clients.
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-foreground)]/90 leading-relaxed">
              Every Your Weekly Show client gets PodcastNetwork.org's
              relationship-engine system installed at no extra cost.
              PodcastNetwork sells this access separately to non-Apex clients —
              guest-mapping framework, outreach choreography, network access.
              As an Apex client, it's bundled into your engagement.
            </p>
            <p className="mt-4 text-[color:var(--color-foreground)]/80 leading-relaxed">
              PodcastNetwork.org is a separately-owned company. Brett co-owns
              both, which is why the integration is free for Apex clients. The
              system turns your existing network into a guest pipeline; we
              produce the episodes that pipeline generates.
            </p>
          </div>
        </Container>
      </Section>

      {/* ANCHOR TABLE */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <Eyebrow>What you'd pay separately</Eyebrow>
          <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
            ~$12,000/cycle in pricable services. <br />
            <span className="text-[color:var(--color-accent)]">$2,997.</span>{" "}
            And PodcastNetwork free on top.
          </h2>

          <div className="mt-12 rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] overflow-hidden max-w-4xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[color:var(--color-border)]">
                  <th className="text-left font-display uppercase tracking-wider text-xs px-5 py-4 text-[color:var(--color-muted)]">
                    Service
                  </th>
                  <th className="text-right font-display uppercase tracking-wider text-xs px-5 py-4 text-[color:var(--color-muted)]">
                    Per cycle
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Annual + quarterly strategy + per-ep planning", "$1,000"],
                  ["Producer-led Riverside recording (4 sessions)", "$1,500"],
                  ["Full audio + video editing (4 episodes)", "$2,200"],
                  ["Show notes 3 tiers + transcripts + custom artwork", "$600"],
                  ["Hosting (Transistor) + distribution + YouTube publish", "$300"],
                  ["10 clips/ep + 4 quote cards/ep", "$4,500"],
                  ["3 LinkedIn posts/ep + AEO blog post + newsletter blurbs", "$1,200"],
                  ["Metricool social scheduling automation", "$400"],
                  ["Analytics + AI-generated recommendations", "$300"],
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
                <tr className="border-b border-[color:var(--color-border)]/60 bg-[color:var(--color-background)]">
                  <td className="px-5 py-3 font-display uppercase tracking-wider text-[color:var(--color-foreground)]">
                    Total of pricable services
                  </td>
                  <td className="px-5 py-3 text-right font-display text-[color:var(--color-foreground)]">
                    ~$12,000
                  </td>
                </tr>
                <tr className="border-b border-[color:var(--color-border)]/60">
                  <td className="px-5 py-3 text-[color:var(--color-foreground)]/90">
                    PodcastNetwork.org system access
                  </td>
                  <td className="px-5 py-3 text-right text-[color:var(--color-accent)] font-display uppercase tracking-wide">
                    Included free
                  </td>
                </tr>
                <tr className="bg-[color:var(--color-accent)]">
                  <td className="px-5 py-4 font-display uppercase tracking-wider text-[color:var(--color-background)]">
                    Your Weekly Show
                  </td>
                  <td className="px-5 py-4 text-right font-display text-2xl text-[color:var(--color-background)]">
                    $2,997/cycle
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-8 max-w-3xl text-[color:var(--color-foreground)]/80">
            You save ~$9,000/cycle (75%) on pricable services alone — and the
            PodcastNetwork.org system access (sold separately to non-Apex
            clients) is on top, included free.
          </p>
        </Container>
      </Section>

      {/* WHAT'S NOT INCLUDED */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>What's not included</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
              We're clear on the boundaries.
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Paid ad spend — separate budget, scoped to your goals",
                "On-location video shoot crews — we run Riverside; bespoke shoots quoted separately",
                "Appearances / keynote booking — separate service through PodcastNetwork's premium tier",
                "Newsletter list management — we deliver ready content; you own your email tool",
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
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight">
              Ready to run your podcast as a pipeline asset?
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85">
              Your Weekly Show is the destination. Most clients start with One
              Episode + Guest Map ($997) to see the system, then continue —
              with $997 credited toward their first cycle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <ButtonLink href="/apply" variant="primary" size="lg" withArrow>
                Apply for Your Weekly Show
              </ButtonLink>
              <ButtonLink href="/pilot" variant="outline" size="lg">
                Start with One Episode + Guest Map
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
