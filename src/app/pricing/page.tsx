import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { PreppLetter } from "@/components/prepp-icons";

export const metadata: Metadata = {
  title: "Pricing — Per-Stage and Full Stack",
  description:
    "Apex Podcast Co pricing broken out by PREPP stage. The Pilot ($997), per-stage a la carte, and the Flagship Podcast Content OS (~$4,800/mo).",
  alternates: { canonical: "/pricing" },
};

const stagePricing = [
  {
    letter: "P",
    name: "Plan",
    items: [
      ["Blueprint Session (concept + format + brand)", "$497 one-time"],
      ["Guest Strategy Session (10-guest map + outreach)", "$497 one-time"],
      ["Full Plan-stage onboarding (Flagship clients)", "Included"],
    ],
  },
  {
    letter: "R",
    name: "Record",
    items: [
      ["Production — per episode", "$250"],
      ["Production — monthly (4 episodes)", "$1,000"],
    ],
  },
  {
    letter: "E",
    name: "Edit",
    items: [
      ["Audio editing — per episode", "$150–$250"],
      ["Video editing (multi-cam) — per episode", "$350–$600"],
      ["Short-form clip — per clip", "$75–$100"],
      ["Clip bundle — 10 clips", "$700–$900"],
    ],
  },
  {
    letter: "P",
    name: "Publish",
    items: [
      ["Publishing & distribution — per episode", "$75–$125"],
      ["Publishing — monthly (4 episodes)", "$400"],
    ],
  },
  {
    letter: "P",
    name: "Promote",
    items: [
      ["Promote retainer — entry", "$750/mo"],
      ["Promote retainer — full social cadence", "$1,000–$1,500/mo"],
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <Container>
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            Show our work. No opaque retainers.
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            Apex pricing is broken out by PREPP stage. Buy one slice, buy a
            bundle, or buy the whole Content OS. Numbers below assume a
            weekly-cadence business podcast (4 episodes/month).
          </p>
        </Container>
      </Section>

      {/* HEADLINE TIERS */}
      <Section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40 py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-7">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                Entry
              </p>
              <p className="mt-3 font-display text-3xl text-[color:var(--color-accent)]">
                $997
              </p>
              <p className="mt-2 text-sm text-[color:var(--color-foreground)]/80">
                The Pilot — one episode + guest strategy
              </p>
            </div>
            <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-7">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                A la carte
              </p>
              <p className="mt-3 font-display text-3xl text-[color:var(--color-accent)]">
                Per-stage
              </p>
              <p className="mt-2 text-sm text-[color:var(--color-foreground)]/80">
                Single PREPP slices — see the breakdown below
              </p>
            </div>
            <div className="rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-mid)] p-7">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Flagship
              </p>
              <p className="mt-3 font-display text-3xl text-[color:var(--color-accent)]">
                ~$4,800/mo
              </p>
              <p className="mt-2 text-sm text-[color:var(--color-foreground)]/80">
                Full Podcast Content OS — all five stages, weekly
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* PER-STAGE BREAKDOWN */}
      <Section>
        <Container>
          <Eyebrow>Per-stage line items</Eyebrow>
          <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
            Buy by the stage.
          </h2>

          <div className="mt-14 space-y-12">
            {stagePricing.map((stage, idx) => (
              <div
                key={`${stage.letter}-${idx}`}
                className="grid gap-8 lg:grid-cols-[180px_1fr] items-start"
              >
                <div className="flex items-end gap-3">
                  <PreppLetter
                    letter={stage.letter}
                    className="text-[clamp(4rem,8vw,6rem)]"
                  />
                  <div className="pb-3">
                    <p className="font-display text-sm uppercase tracking-wider text-[color:var(--color-foreground)]">
                      {stage.name}
                    </p>
                  </div>
                </div>

                <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {stage.items.map(([label, price]) => (
                        <tr
                          key={label}
                          className="border-b border-[color:var(--color-border)]/60 last:border-0"
                        >
                          <td className="px-5 py-3 text-[color:var(--color-foreground)]/90">
                            {label}
                          </td>
                          <td className="px-5 py-3 text-right font-display text-[color:var(--color-accent)] uppercase tracking-wide">
                            {price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* MARKET CONTEXT */}
      <Section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <Eyebrow>Market Context</Eyebrow>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl uppercase leading-tight">
                Why $50 Fiverr editors aren't the comparison.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                The market range for established agency podcast editing is{" "}
                <strong>$150–$350 per episode</strong>. Full production systems
                for business podcasts regularly run{" "}
                <strong>$1,000–$3,000+ monthly</strong>. Apex is priced as a
                full Content OS — production plus the relationship engine —
                which is a different category than commodity editing.
              </p>
              <p className="mt-4 text-[color:var(--color-foreground)]/80 text-sm">
                Benchmarks: Awkward Sage Media (PodRewind), Remote Video Agency
                (increditors.com), r/PodcastGuestExchange editors marketplace.
              </p>
            </div>

            <div>
              <Eyebrow>The ROI Framing</Eyebrow>
              <h3 className="mt-3 font-display text-2xl sm:text-3xl uppercase leading-tight">
                One deal pays for a year of Flagship.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                If your podcast lands you one new coaching client, one keynote,
                one team-recruit, or one referral that converts — the math is
                already in the green. The clients who get the most out of Apex
                aren't trying to break even on production. They're using the
                show as the top of their pipeline.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight">
              Want a custom quote?
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85">
              Multi-show clients, on-location shoots, and unusual scope all get
              quoted directly. Tell us what you're building and we'll come back
              within 1 business day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <ButtonLink href="/apply" variant="primary" size="lg" withArrow>
                Request a quote
              </ButtonLink>
              <ButtonLink href="/services" variant="outline" size="lg">
                Compare tiers
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
