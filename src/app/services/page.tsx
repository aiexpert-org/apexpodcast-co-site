import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { PreppIconRow } from "@/components/prepp-icons";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — One Episode + Guest Map ($997) and Your Weekly Show ($2,997/cycle)",
  description:
    "Two ways to start with Apex Podcast Co. $997 one-time wedge or $2,997 per 28-day cycle for the full weekly production with PodcastNetwork integration included free.",
  alternates: { canonical: "/services" },
};

const tiers = [
  {
    name: "One Episode + Guest Map",
    price: "$997",
    cadence: "one-time",
    pitch:
      "One complete episode through the full PREPP stack + a 90-min Guest Strategy Session mapping your first 10 ideal guests from your own network. $997 credits toward Your Weekly Show within 60 days.",
    bullets: [
      "Show concept + format session (60 min)",
      "Producer-led Riverside recording (multi-cam 4K)",
      "Full audio + video edit (one complete episode)",
      "Custom episode artwork",
      "3 short-form clips + 1 quote card",
      "AI-optimized show notes (3 tiers) + transcript",
      "Hosting setup + publish to Spotify or YouTube",
      "90-min Guest Strategy Session — map 10 guests + outreach scripts",
      "Pipeline tracking template (Notion / Sheet)",
      "$997 credits toward Your Weekly Show (60-day window)",
    ],
    cta: { label: "Apply for One Episode + Guest Map", href: "/pilot" },
    accent: false,
    note: "5 spots per month at launch.",
  },
  {
    name: "Your Weekly Show",
    price: "$2,997",
    cadence: "per 28-day cycle · 13 cycles/year",
    pitch:
      "Full PREPP stack, weekly cadence. 22 deliverables per cycle. PodcastNetwork.org's relationship-engine system installed free. Your weekly cadence, our production engine.",
    bullets: [
      "All 22 deliverables per cycle (see breakdown on Your Weekly Show page)",
      "Weekly Riverside session (4 episodes/cycle)",
      "Full audio + video edit, branded intro/outro",
      "Show notes 3 tiers + transcript + custom episode artwork",
      "Transistor hosting + global distribution + YouTube publish",
      "10 clips/ep + 4 quote cards/ep",
      "3 LinkedIn posts/ep + AEO blog post + newsletter blurb",
      "Metricool-automated social scheduling",
      "Monthly analytics with AI-generated recommendations",
      "PodcastNetwork.org system access — included free",
    ],
    cta: { label: "See Your Weekly Show", href: "/flagship" },
    accent: true,
    note: "Annual prepay: 13 cycles for the price of 12 = $35,964/yr.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <Container>
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            Two ways to start with Apex.
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            No tier ladder. No à-la-carte menu. Two clean choices: try us on
            one episode, or run your whole podcast through us every week. If
            your scope is different — multi-show, existing show with custom
            needs — we quote it directly.
          </p>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16 border-y border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <PreppIconRow />
        </Container>
      </Section>

      {/* TWO SKUS */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 items-stretch">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={
                  tier.accent
                    ? "rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-mid)] p-8 flex flex-col"
                    : "rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)]/60 p-8 flex flex-col"
                }
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-2xl sm:text-3xl uppercase leading-tight">
                    {tier.name}
                  </h2>
                  {tier.accent ? (
                    <span className="text-xs font-display uppercase tracking-wider text-[color:var(--color-accent)]">
                      Full production
                    </span>
                  ) : (
                    <span className="text-xs font-display uppercase tracking-wider text-[color:var(--color-muted)]">
                      The wedge
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-baseline gap-3 flex-wrap">
                  <span className="font-display text-4xl text-[color:var(--color-accent)]">
                    {tier.price}
                  </span>
                  <span className="text-sm text-[color:var(--color-muted)] uppercase tracking-wide">
                    {tier.cadence}
                  </span>
                </div>

                <p className="mt-5 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  {tier.pitch}
                </p>

                <ul className="mt-7 space-y-3 flex-1">
                  {tier.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-[color:var(--color-foreground)]/90"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[color:var(--color-accent)]"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                  {tier.note}
                </p>

                <div className="mt-6">
                  <ButtonLink
                    href={tier.cta.href}
                    variant={tier.accent ? "primary" : "outline"}
                    size="md"
                    withArrow
                    className="w-full"
                  >
                    {tier.cta.label}
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* CUSTOM SCOPE */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Don't fit one of these two?</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
              Custom scope, quoted directly.
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85 leading-relaxed">
              Some clients already have a podcast and only want help with
              specific stages. Some run multiple shows. Some need a
              configuration we don't list publicly. Tell us what you need;
              we'll quote it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <ButtonLink href="/apply" variant="primary" size="lg" withArrow>
                Tell us about your show
              </ButtonLink>
              <ButtonLink href="/pricing" variant="outline" size="lg">
                See pricing detail
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* UPSELL MECHANIC */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>The upsell mechanic</Eyebrow>
              <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                $997 credits toward Your Weekly Show.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                If you start with One Episode + Guest Map and decide to
                continue within 60 days, the full $997 applies as credit toward
                your first 28-day cycle of Your Weekly Show. That's ~33% of
                your first cycle covered.
              </p>
            </div>
            <div>
              <Eyebrow>How fast can we start?</Eyebrow>
              <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                2–3 weeks from kickoff to publish.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                We take 5 One Episode clients per month at launch so Brett or
                Randy can be on every call personally. Your Weekly Show clients
                start within 2 weeks of contract — first episode produced in
                cycle 1.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
