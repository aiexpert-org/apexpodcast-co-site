import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";

export const metadata: Metadata = {
  title: "Pricing — Apex Podcast Co",
  description:
    "Two SKUs. $997 one-time for One Episode + Guest Map. $2,997 per 28-day cycle for Your Weekly Show with PodcastNetwork.org integration included free.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <Container>
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            Two ways in. No tier ladder.
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            Most podcast agencies make you pick from 4–5 tiers and an à-la-carte
            menu. We don't. Two SKUs, both transparent, both showing exactly
            what you get. Custom scopes quoted directly.
          </p>
        </Container>
      </Section>

      {/* HEADLINE TIERS */}
      <Section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40 py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-7">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                The wedge · One-time
              </p>
              <p className="mt-3 font-display text-4xl text-[color:var(--color-accent)]">
                $997
              </p>
              <p className="mt-3 font-display text-lg uppercase tracking-tight text-[color:var(--color-foreground)]">
                One Episode + Guest Map
              </p>
              <p className="mt-3 text-sm text-[color:var(--color-foreground)]/80 leading-relaxed">
                One complete episode through full PREPP + 90-min Guest Strategy
                Session mapping your first 10 guests. Credits toward Your
                Weekly Show within 60 days. 5 spots/month at launch.
              </p>
              <div className="mt-6">
                <ButtonLink href="/pilot" variant="outline" size="md" withArrow className="w-full">
                  See One Episode + Guest Map
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-mid)] p-7">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Full production · Per 28-day cycle
              </p>
              <p className="mt-3 font-display text-4xl text-[color:var(--color-accent)]">
                $2,997
              </p>
              <p className="mt-3 font-display text-lg uppercase tracking-tight text-[color:var(--color-foreground)]">
                Your Weekly Show
              </p>
              <p className="mt-3 text-sm text-[color:var(--color-foreground)]/80 leading-relaxed">
                Full PREPP, weekly cadence, 22 deliverables per cycle.
                PodcastNetwork.org system access included free. 13 cycles/year.
                Annual prepay $35,964 (13 for the price of 12).
              </p>
              <div className="mt-6">
                <ButtonLink href="/flagship" variant="primary" size="md" withArrow className="w-full">
                  See Your Weekly Show
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* WHY WE'RE PRICED THIS WAY */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Why we're priced this way</Eyebrow>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
              Aggressive entry now. We raise as case studies stack.
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85 leading-relaxed">
              Most premium B2B podcast agencies (JAR Audio, Pod People) charge
              $3,000–$5,000/month for what they call full production. We
              deliver more — 22 deliverables per cycle, not 8–12 — at $2,997.
            </p>
            <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
              The difference isn't quality. It's our AI-leveraged production
              stack: Riverside, Descript, Opus Clip, Castmagic, Transistor,
              Metricool, Claude, ChatGPT, Codex. What used to take a legacy
              agency 25–30 hours per episode takes us 5–8.
            </p>
            <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
              We pass the savings to you. As our case studies stack and the
              market establishes our value, we'll raise prices. Existing
              clients grandfather at the entry rate.
            </p>
          </div>
        </Container>
      </Section>

      {/* ANCHOR VISUAL */}
      <Section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow>The Weekly Show anchor</Eyebrow>
            <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
              ~$12,000 in pricable services per cycle.
              <br />
              <span className="line-through opacity-50">$12,000.</span>{" "}
              <span className="text-[color:var(--color-accent)]">$2,997.</span>
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-foreground)]/85 leading-relaxed">
              You save ~$9,000/cycle (75% less) on pricable services alone —
              and the PodcastNetwork.org system access (sold separately to
              non-Apex clients) is on top, included free.
            </p>
            <div className="mt-8">
              <ButtonLink href="/flagship" variant="outline" size="lg" withArrow>
                See the full anchor table
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <Eyebrow>Frequently asked</Eyebrow>
          <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
            Pricing FAQ.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl">
            {[
              {
                q: "Why don't you charge per episode?",
                a: "Per-episode billing turns every cycle into a negotiation. Per-cycle retainers let us plan capacity, deliver consistently, and lock the unit economics that fund your growth.",
              },
              {
                q: "What's the minimum commitment on Your Weekly Show?",
                a: "3 cycles minimum (about 12 weeks). Most clients run 6+ cycles. Annual prepay is the strongest commitment but optional.",
              },
              {
                q: "Can I switch between the two SKUs?",
                a: "One Episode + Guest Map is one-time. It resolves into either signing on for Your Weekly Show (with the $997 credit applied) or not. You don't switch tiers — you graduate from one to the other.",
              },
              {
                q: "What if I miss a recording in a cycle?",
                a: "We hold capacity for 4 episodes per cycle. Miss one? Recover within the cycle, or roll to the next cycle (within 30 days). Past 30 days, unused capacity expires — we held the slot.",
              },
              {
                q: "Do you sign an NDA?",
                a: "Yes, included in our standard agreement.",
              },
              {
                q: "Who owns the content?",
                a: "You do, always. Apex retains the right to reference clips and excerpts in our portfolio unless you opt out in writing.",
              },
              {
                q: "Do you offer per-cycle discounts for multiple shows?",
                a: "Yes. Multi-show clients get quoted custom. Tell us about your config via the apply form.",
              },
              {
                q: "What's PodcastNetwork.org and why is it included?",
                a: "PodcastNetwork.org is a separately-owned company (Brett co-owns both) that sells the relationship-engine system. It's free for Apex Your Weekly Show clients because Brett co-owns both businesses.",
              },
            ].map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-lg uppercase tracking-tight text-[color:var(--color-foreground)]">
                  {f.q}
                </h3>
                <p className="mt-3 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight">
              Pick the door.
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85">
              Or tell us about a custom scope — we'll come back with a quote
              within one business day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <ButtonLink href="/pilot" variant="outline" size="lg" withArrow>
                Start with One Episode
              </ButtonLink>
              <ButtonLink href="/flagship" variant="primary" size="lg" withArrow>
                Go straight to Your Weekly Show
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
