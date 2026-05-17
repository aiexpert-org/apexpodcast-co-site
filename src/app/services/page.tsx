import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { PreppIconRow } from "@/components/prepp-icons";
import { LinkCard } from "@/components/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Pilot, A la Carte, Flagship",
  description:
    "Three ways to work with Apex Podcast Co. The Pilot ($997), single-stage a la carte, or the full Podcast Content OS (~$4,800/mo).",
  alternates: { canonical: "/services" },
};

const tiers = [
  {
    name: "The Pilot",
    price: "$997",
    cadence: "one episode, end-to-end",
    pitch: "One episode produced through the full PREPP stack + a guest strategy session for your first 10 ideal guests from your own network.",
    bullets: [
      "60-min Blueprint Session (concept, format, brand)",
      "Riverside session with a producer on the call",
      "Full audio + video edit, captions, transcript, show notes",
      "Published to your platform of choice (Spotify or YouTube)",
      "3 short-form clips + 1 quote card + newsletter blurb",
      "90-min Guest Strategy Session — map 10 guests from your network",
      "Outreach scripts + pipeline tracking template",
      "Credit toward Flagship if you keep going",
    ],
    cta: { label: "Apply for a Pilot", href: "/pilot" },
    accent: false,
  },
  {
    name: "A la Carte",
    price: "Custom",
    cadence: "single PREPP stages",
    pitch: "Already producing? Plug Apex into the stages that are slowing you down. Edit only. Promote only. Publishing only. We meet you where you are.",
    bullets: [
      "Audio editing (per episode)",
      "Video editing — multi-cam (per episode)",
      "Short-form clipping (per clip or 10-pack)",
      "Publishing + distribution (per episode)",
      "Promote-only retainers (per month)",
      "Guest strategy intensives (one-time)",
    ],
    cta: { label: "See pricing", href: "/pricing" },
    accent: false,
  },
  {
    name: "Flagship",
    price: "~$4,800/mo",
    cadence: "all five stages, weekly",
    pitch: "The full Podcast Content OS. Every stage of PREPP, run for you every week. For leaders running their podcast as a primary pipeline asset.",
    bullets: [
      "Weekly Riverside sessions, fully produced",
      "Full audio + video, captions, transcripts, show notes",
      "10+ short-form clips per episode (9:16, 1:1, 16:9)",
      "Multi-platform publishing (Apple, Spotify, YouTube, your site)",
      "Active Promote stage — clip rollout, social cadence, guest loops",
      "Guest pipeline management + outreach choreography",
      "Monthly analytics review and iteration with Brett or Randy",
      "Tier-2 unlock: Apex's own network (eXp, authors, pro sports)",
    ],
    cta: { label: "Explore the Flagship", href: "/flagship" },
    accent: true,
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
            Pick the door that fits where you are right now.
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            We run all five PREPP stages — but we don't believe in one-size
            engagements. Start with a Pilot to see the system. Stay on the
            Flagship to run your podcast as a pipeline asset. Bolt on a la
            carte when you only need a slice.
          </p>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16 border-y border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <PreppIconRow />
        </Container>
      </Section>

      {/* TIER LADDER */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3 items-stretch">
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
                      Flagship
                    </span>
                  ) : null}
                </div>

                <div className="mt-4 flex items-baseline gap-3">
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

                <div className="mt-8">
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

      {/* FAQ-ish */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>What's the upsell mechanic?</Eyebrow>
              <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                Pilot credit applies to Flagship.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                If you start with The Pilot and decide to continue, the full
                $997 applies as credit toward your first month of the Flagship.
                No hard sell — once you see the system run, the math sells
                itself. (60-day credit window from Pilot delivery.)
              </p>
            </div>
            <div>
              <Eyebrow>How fast can we start?</Eyebrow>
              <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                Two to three weeks from kickoff to publish.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                We take 5 Pilot clients per month so Brett or Randy can be on
                every call personally. Flagship clients start within 2 weeks of
                contract signing — we'll have your first episode produced
                inside the first month.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-3">
            <ButtonLink href="/pricing" variant="outline" size="lg" withArrow>
              See full pricing
            </ButtonLink>
            <ButtonLink href="/apply" variant="primary" size="lg" withArrow>
              Apply now
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
