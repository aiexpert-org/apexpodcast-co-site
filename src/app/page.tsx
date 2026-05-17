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
          <Eyebrow>Apex Podcast Co · Built on PREPP</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.95] uppercase tracking-tight text-[color:var(--color-foreground)]">
            Your podcast should pay for itself in{" "}
            <span className="text-[color:var(--color-accent)]">pipeline.</span>
            <br />
            Not just feel good.
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-[color:var(--color-foreground)]/80 leading-relaxed">
            We turn one conversation into an entire content engine — and an
            entire content engine into a flow of warm relationships. Apex
            produces, distributes, and amplifies the podcasts of authors,
            executives, and eXp leaders. The episodes are the surface output.
            The relationships your show builds are the real product.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/how-it-works" variant="primary" size="lg" withArrow>
              See how PREPP works
            </ButtonLink>
            <ButtonLink href="/pilot" variant="outline" size="lg">
              Start with a $997 Pilot
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
                body: "The right invite list turns your show into a deliberate map of the relationships you want next.",
              },
              {
                head: "Every episode is a sales conversation.",
                body: "Without the pressure. Each interview compounds trust and signals authority to the next prospect.",
              },
              {
                head: "Every show is a relationship machine — if it's built right.",
                body: "Not editing. Not hosting. A system. That's what Apex builds and runs for you.",
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
                Five stages. One system. Every Apex engagement runs all five —
                or plugs into the stages you're missing.
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
            kill for. What they don't have is a production team that turns
            those relationships into pipeline.
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

      {/* TIER LADDER */}
      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <Eyebrow>Choose Your Door</Eyebrow>
              <h2 className="mt-4 font-display text-[length:var(--text-h1)] uppercase leading-[1.02]">
                Three ways to start.
              </h2>
              <p className="mt-4 max-w-2xl text-[color:var(--color-foreground)]/80">
                A no-friction entry tier, an a la carte option, and the full
                Podcast Content OS. Pick the door that fits where you are right
                now.
              </p>
            </div>
            <Link
              href="/services"
              className="self-start lg:self-end inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.18em] text-[color:var(--color-accent)] hover:underline"
            >
              Compare all tiers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <LinkCard href="/pilot" ariaLabel="The Pilot — $997">
              <Eyebrow>Entry · $997</Eyebrow>
              <h3 className="mt-4 font-display text-2xl uppercase leading-tight">
                The Pilot.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/80">
                One episode produced end-to-end + a guest strategy session
                where we help you map your first 10 ideal guests from your own
                network.
              </p>
            </LinkCard>

            <LinkCard href="/services" ariaLabel="A la carte single-stage">
              <Eyebrow>Mid-tier · A la carte</Eyebrow>
              <h3 className="mt-4 font-display text-2xl uppercase leading-tight">
                Single-stage support.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/80">
                Already producing? Bolt on the PREPP stages that are slowing
                you down — editing, clipping, publishing, or promote-only.
              </p>
            </LinkCard>

            <LinkCard href="/flagship" ariaLabel="Flagship — Podcast Content OS">
              <Eyebrow>Flagship · ~$4,800/mo</Eyebrow>
              <h3 className="mt-4 font-display text-2xl uppercase leading-tight">
                The Podcast Content OS.
              </h3>
              <p className="mt-4 text-[color:var(--color-foreground)]/80">
                All five PREPP stages, weekly cadence, done. For leaders running
                their podcast as a primary pipeline asset.
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
              Most "podcast services" sell editing by the hour. That's why most
              podcasts don't grow a business. The real product is the
              relationships your show builds. The OS is the only way to capture
              that value at scale. Apex is the OS, run as a service.
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
                Brett runs business development. Randy runs production. Both
                have spent years inside the eXp ecosystem — the strategists,
                instructors, and operators who anchor our case study roster
                are also the people we have coffee with. Apex was built to be
                the production company we wished existed when we started.
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
                your first 10 ideal guests, and whether the Pilot or Flagship
                is the right next step.
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
