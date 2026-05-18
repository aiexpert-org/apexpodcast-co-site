import Link from "next/link";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { PreppIconRow } from "@/components/prepp-icons";
import { LinkCard } from "@/components/card";
import { OrganizationJsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />

      {/* HERO */}
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
        <Container>
          <Eyebrow>Apex Podcast Co · Production + PodcastNetwork integration</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.95] uppercase tracking-tight text-[color:var(--color-foreground)]">
            Your podcast, produced.
            <br />
            Your network,{" "}
            <span className="text-[color:var(--color-accent)]">mapped.</span>
            <br />
            Every week.
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-[color:var(--color-foreground)]/80 leading-relaxed">
            Apex Podcast Co produces podcasts end-to-end for authors,
            executives, and eXp leaders. As an Apex client, you also get free
            integrated access to <strong>PodcastNetwork.org</strong>'s
            relationship-engine system — a separately-owned product that turns
            each guest into a referral source and each episode into deal flow.
            Two products. One engagement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/pilot" variant="primary" size="lg" withArrow>
              Start with One Episode + Guest Map ($997)
            </ButtonLink>
            <ButtonLink href="/flagship" variant="outline" size="lg">
              See Your Weekly Show ($2,997/cycle)
            </ButtonLink>
          </div>
        </Container>
      </Section>

      {/* INSIGHT BLOCK — three short panels */}
      <Section className="py-16 sm:py-20 border-y border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              {
                head: "Every guest is a referral source.",
                body: "The PodcastNetwork system helps you map the right 10 names from your own contacts before episode one airs.",
              },
              {
                head: "Every episode is a sales conversation.",
                body: "Without the pressure. Each interview compounds trust and signals authority to the next prospect.",
              },
              {
                head: "Every show is a content engine — if it's built right.",
                body: "Not editing. Not hosting. A production stack plus a relationship system. That's what Apex runs for you.",
              },
            ].map((panel) => (
              <div key={panel.head}>
                <h3 className="font-display text-lg uppercase tracking-wider text-[color:var(--color-accent)]">
                  {panel.head}
                </h3>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  {panel.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* PREPP IN 30 SECONDS */}
      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <Eyebrow>The Framework</Eyebrow>
              <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
                PREPP in 30 seconds.
              </h2>
              <p className="mt-4 max-w-xl text-[color:var(--color-foreground)]/80">
                Five stages. One production system. Our AI-leveraged stack
                (Riverside, Descript, Opus Clip, Castmagic, Transistor,
                Metricool, Claude, ChatGPT) delivers in 5–8 hours per episode
                what legacy agencies bill 25–30 hours for.
              </p>
            </div>
            <Link
              href="/how-it-works"
              className="self-start lg:self-end inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)] hover:underline"
            >
              Full breakdown <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14">
            <PreppIconRow withTaglines />
          </div>
        </Container>
      </Section>

      {/* CASE STUDIES TEASER */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <Eyebrow>Proof</Eyebrow>
          <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
            Built for leaders inside eXp Realty.
          </h2>
          <p className="mt-4 max-w-2xl text-[color:var(--color-foreground)]/80">
            Both Austin and Russ are senior eXp leaders running personal brands
            alongside their eXp work. They have networks most agencies would
            kill for. Apex is the production team — and the PodcastNetwork
            integration is the system — that turns those relationships into
            pipeline.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <LinkCard href="/case-studies/austin-cheviron">
              <Eyebrow>Case Study · Author + Coach</Eyebrow>
              <h3 className="mt-4 font-display text-2xl uppercase leading-tight">
                Austin Cheviron — eXp Instructor of the Year.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/80">
                How a top eXp instructor is using his new podcast to grow
                Cheviron Coaching — author of <em>The Money Puzzle</em>,
                builder of three programs, deep eXp network ready to activate.
              </p>
            </LinkCard>

            <LinkCard href="/case-studies/russ-laggan">
              <Eyebrow>Case Study · VP Training, eXp</Eyebrow>
              <h3 className="mt-4 font-display text-2xl uppercase leading-tight">
                Russ Laggan — Two podcasts. Weekly. One engine.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/80">
                How the VP of Training at eXp runs <em>The Russ Laggan
                Podcast</em> + <em>The Big Agent Meeting</em> as a recruiting,
                authority, and book-launch engine — without burning Sundays
                editing audio.
              </p>
            </LinkCard>
          </div>
        </Container>
      </Section>

      {/* TWO SKUs */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <Eyebrow>Two SKUs · No tier sprawl</Eyebrow>
              <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
                Two ways to start.
              </h2>
              <p className="mt-4 max-w-2xl text-[color:var(--color-foreground)]/80">
                Try us on one episode, or run your whole podcast through us
                every week. Custom scopes (existing shows, multi-show configs)
                quoted directly via the apply form.
              </p>
            </div>
            <Link
              href="/pricing"
              className="self-start lg:self-end inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)] hover:underline"
            >
              Compare both <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <LinkCard href="/pilot" ariaLabel="One Episode + Guest Map — $997 one-time">
              <Eyebrow>The wedge · $997 one-time</Eyebrow>
              <h3 className="mt-4 font-display text-2xl uppercase leading-tight">
                One Episode + Guest Map.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/80">
                One complete episode through the full PREPP stack, plus a
                90-min Guest Strategy Session that maps your first 10 ideal
                guests from your own network. $997 credits toward Your Weekly
                Show if you continue.
              </p>
            </LinkCard>

            <LinkCard href="/flagship" ariaLabel="Your Weekly Show — $2,997 per 28-day cycle">
              <Eyebrow>The full production · $2,997/cycle</Eyebrow>
              <h3 className="mt-4 font-display text-2xl uppercase leading-tight">
                Your Weekly Show.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/80">
                Full PREPP, weekly cadence, 22 deliverables per 28-day cycle.
                PodcastNetwork system access included free. 13 billing cycles
                per year. Annual prepay: $35,964 (13 for the price of 12).
              </p>
            </LinkCard>
          </div>
        </Container>
      </Section>

      {/* MANIFESTO TEASER */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>The Manifesto</Eyebrow>
            <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
              Stop thinking of your podcast as an audio show. Start thinking of
              it as a content operating system.
            </h2>
            <p className="mt-6 text-lg text-[color:var(--color-foreground)]/85 leading-relaxed">
              Most podcast services sell editing by the hour. Apex sells
              production + integration with PodcastNetwork.org's
              relationship-engine system. Two products bundled in one
              engagement — and the bundling is the differentiator no other
              production agency can match, because no other production agency
              owns a network business.
            </p>
            <div className="mt-8">
              <ButtonLink href="/podcast-content-os" variant="outline" size="lg" withArrow>
                Read the full thesis
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* FOUNDERS + FINAL CTA */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
            <div>
              <Eyebrow>The Partnership</Eyebrow>
              <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
                Brett Moore + Randy Highsmith. 50/50.
              </h2>
              <p className="mt-6 text-[color:var(--color-foreground)]/85 leading-relaxed">
                Co-founders, 50/50 split. Both have spent years inside the eXp
                ecosystem — the strategists, instructors, and operators on our
                case study roster are the people we have coffee with.
                PodcastNetwork.org is Brett's separately-owned sister company —
                the integration is what makes Apex's offer different from every
                other production agency.
              </p>
              <div className="mt-8">
                <ButtonLink href="/about" variant="ghost" size="md" withArrow>
                  Read our story
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-background)] p-8">
              <h3 className="font-display text-2xl uppercase leading-tight">
                Book a Blueprint Session.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/80">
                30 minutes with Brett or Randy. We'll map your show concept,
                your first 10 ideal guests, and whether One Episode + Guest Map
                or Your Weekly Show is the right next step.
              </p>
              <div className="mt-6">
                <ButtonLink href="/apply" variant="primary" size="lg" withArrow className="w-full">
                  Apply now
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs text-[color:var(--color-muted)] text-center">
                Or email{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="underline hover:text-[color:var(--color-accent)]"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
