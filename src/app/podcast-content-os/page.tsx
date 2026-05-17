import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";

export const metadata: Metadata = {
  title: "The Podcast Content OS — Apex's Manifesto",
  description:
    "Most podcast services sell editing. Apex sells a content operating system that turns conversations into deal flow.",
  alternates: { canonical: "/podcast-content-os" },
};

export default function ManifestoPage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <Container>
          <Eyebrow>The Manifesto</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            Stop thinking of your podcast as an audio show. Start thinking of
            it as a content operating system.
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            This is the page where we tell you what we actually believe. If
            this argument lands, we're built for you. If it doesn't, we're
            probably the wrong fit — and that's fine.
          </p>
        </Container>
      </Section>

      {/* THE ARGUMENT */}
      <Section className="border-t border-[color:var(--color-border)] py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-16">
            {/* 1. THE TRAP */}
            <div>
              <Eyebrow>01 · The commodity trap</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                Most podcast services sell editing by the hour.
              </h2>
              <p className="mt-5 text-lg text-[color:var(--color-foreground)]/85 leading-relaxed">
                That's why most podcast clients churn. They paid for a
                deliverable, not an outcome. A clean audio file isn't a
                pipeline. A polished video clip isn't a deal. The editor on
                Fiverr will undercut you forever — that's a race to the bottom
                Apex refuses to enter.
              </p>
              <p className="mt-4 text-[color:var(--color-foreground)]/80">
                If a podcast service can't tell you which sales conversations
                their last client had because of the show, they're selling
                editing. Not podcasting.
              </p>
            </div>

            {/* 2. THE REAL PRODUCT */}
            <div>
              <Eyebrow>02 · The real product</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                The real product is the relationships your show builds.
              </h2>
              <p className="mt-5 text-lg text-[color:var(--color-foreground)]/85 leading-relaxed">
                Each guest is a referral source. Each conversation is a sales
                call with no sales pressure. Each episode compounds into a
                network you can pick up the phone to in five years. The
                published audio is the surface; the relationship infrastructure
                you build by recording with the right people is the asset.
              </p>
              <p className="mt-4 text-[color:var(--color-foreground)]/80">
                You already have the network most agencies would kill for. The
                gap is the system that turns it into deal flow.
              </p>
            </div>

            {/* 3. THE OS */}
            <div>
              <Eyebrow>03 · The operating system</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                An operating system is the only way to capture this value.
              </h2>
              <p className="mt-5 text-lg text-[color:var(--color-foreground)]/85 leading-relaxed">
                A system means:{" "}
                <strong className="text-[color:var(--color-accent)]">
                  who you talk to is intentional
                </strong>{" "}
                (Plan),{" "}
                <strong className="text-[color:var(--color-accent)]">
                  how you record is consistent
                </strong>{" "}
                (Record),{" "}
                <strong className="text-[color:var(--color-accent)]">
                  what you publish is leveraged
                </strong>{" "}
                (Edit + Publish), and{" "}
                <strong className="text-[color:var(--color-accent)]">
                  how it travels is measurable
                </strong>{" "}
                (Promote). PREPP is the OS. It is reproducible, it is
                debuggable, and it compounds.
              </p>
            </div>

            {/* 4. APEX */}
            <div>
              <Eyebrow>04 · Apex</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                Apex is the OS, run as a service.
              </h2>
              <p className="mt-5 text-lg text-[color:var(--color-foreground)]/85 leading-relaxed">
                We don't sell hours. We don't sell features. We sell the system
                that turns a conversation into deal flow. The clients we work
                best with — Austin Cheviron, Russ Laggan, Randy Highsmith — are
                authors, instructors, and executives who already have the
                authority. They don't need to be talked into podcasting. They
                need a production team that can keep pace and a system that
                turns the work into measurable relationships.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* WITH/WITHOUT */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <Eyebrow>The Comparison</Eyebrow>
          <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
            Without a system. With the Apex system.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-sm border border-[color:var(--color-border)] p-7">
              <h3 className="font-display text-xs uppercase tracking-[0.22em] text-[color:var(--color-muted)]">
                Without
              </h3>
              <ul className="mt-5 space-y-3 text-[color:var(--color-foreground)]/80">
                {[
                  "Guests are whoever is willing — not who you actually want.",
                  "Recording is inconsistent, prep is rushed, edits drag for weeks.",
                  "Distribution is one platform, no leveraged repurposing.",
                  "No promotion plan. The episode dies the day it ships.",
                  "Nothing is measured. You can't tell what's working.",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-muted)] flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-[color:var(--color-accent)] p-7 bg-[color:var(--color-background)]">
              <h3 className="font-display text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                With Apex
              </h3>
              <ul className="mt-5 space-y-3 text-[color:var(--color-foreground)]/95">
                {[
                  "Your first 20 guests are mapped from your own network — deliberately.",
                  "Riverside sessions, live production, edits on a weekly drumbeat.",
                  "One episode becomes 30+ pieces across audio, video, and social.",
                  "Promote stage compounds reach and triggers measurable replies.",
                  "Monthly analytics review — we iterate together on what worked.",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* PULL QUOTE */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-display text-3xl sm:text-5xl uppercase leading-[1.05] text-[color:var(--color-foreground)]">
              "Influence is cheap.{" "}
              <span className="text-[color:var(--color-accent)]">
                Followability is priceless.
              </span>
              "
            </p>
            <footer className="mt-6 text-sm uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              — Russ Laggan, VP of Training, eXp Realty (Apex client)
            </footer>
          </blockquote>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight">
              If this argument lands, we're built for you.
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85">
              Book a 30-minute Blueprint Session. We'll map your show concept,
              your first 10 ideal guests, and whether the Pilot or the Flagship
              is the right next step.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <ButtonLink href="/apply" variant="primary" size="lg" withArrow>
                Book a Blueprint Session
              </ButtonLink>
              <ButtonLink href="/how-it-works" variant="outline" size="lg">
                See PREPP in detail
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
