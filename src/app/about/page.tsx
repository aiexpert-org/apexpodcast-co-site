import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";

export const metadata: Metadata = {
  title: "About — Brett Moore + Randy Highsmith",
  description:
    "Apex Podcast Co was founded by Brett Moore and Randy Highsmith as a 50/50 partnership to build the production company we wished existed.",
  alternates: { canonical: "/about" },
};

const beliefs = [
  "Conversations build businesses. Editors don't. Systems do.",
  "Your network is the foundation. Production is the multiplier.",
  "Specificity wins. Real guests, real numbers, real names.",
  "Five stages, in order, every week. PREPP is the spine.",
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-10">
        <Container>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            Brett Moore + Randy Highsmith. 50/50. Building the production
            company we wished we'd had.
          </h1>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--color-border)] py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <article className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-8">
              <Eyebrow>Co-founder · 50/50 partner</Eyebrow>
              <h2 className="mt-3 font-display text-3xl uppercase leading-tight">
                Brett Moore
              </h2>
              <p className="mt-5 text-[color:var(--color-foreground)]/85 leading-relaxed">
                Brett co-founded Apex with Randy and operates an adjacent
                brand-and-website studio (The Brand Spine, brettkmoore.com)
                that has shipped sites for founders, brokers, and
                operator-leaders. His instinct for who Apex's right-fit
                clients are comes from a decade spent inside those decision
                rooms — the ones where a brand decides whether the next
                channel becomes pipeline or noise.
              </p>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                Brett also owns <strong>PodcastNetwork.org</strong> separately
                — a relationship-engine system company that's integrated with
                Apex (every Apex Your Weekly Show client gets the system
                installed free as a perk). The IP for the system stays with
                PodcastNetwork.org; Apex's 50/50 partnership with Randy is
                scoped to the production-service IP.
              </p>
              <p className="mt-6 text-xs text-[color:var(--color-muted)]">
                [NEEDS HEADSHOT — square + landscape crops, Brett to provide.]
              </p>
            </article>

            <article className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-8">
              <Eyebrow>Co-founder · 50/50 partner</Eyebrow>
              <h2 className="mt-3 font-display text-3xl uppercase leading-tight">
                Randy Highsmith
              </h2>
              <p className="mt-5 text-[color:var(--color-foreground)]/85 leading-relaxed">
                Randy runs production. He's the operator behind every Apex
                episode — the Riverside captures, the edit pipeline, the clip
                rollouts, the analytics review. His personal podcast (related
                to <em>Sweeter After Difficulty</em>) runs on the same Apex
                production stack we deliver to Your Weekly Show clients. The
                PREPP framework was born from Randy's experience shipping
                production work at scale.
              </p>
              <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                His relationships inside eXp — particularly through Russ Laggan
                and Austin Cheviron — are why Apex's wedge market is so well
                defined. Randy doesn't just produce podcasts for eXp leaders.
                He's in the rooms where eXp leaders compare notes.
              </p>
              <p className="mt-6 text-xs text-[color:var(--color-muted)]">
                [NEEDS HEADSHOT — square + landscape crops, Randy to provide.]
              </p>
            </article>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] items-start">
            <div>
              <Eyebrow>The Founding Story</Eyebrow>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl uppercase leading-tight">
                Why "operating system" instead of "service."
              </h2>
              <div className="mt-6 space-y-5 text-[color:var(--color-foreground)]/85 leading-relaxed">
                <p>
                  When Brett and Randy started kicking around the Apex idea,
                  the podcast production market was loud about features and
                  silent about outcomes. Editing per hour. Clip packs. "We'll
                  help you launch." Nothing in the pitch matched the reason
                  any operator-leader actually wants a podcast — building the
                  next ten relationships that turn into the next year of deals.
                </p>
                <p>
                  The bet underneath Apex is that the production work has to be
                  paired with the relationship engineering or it doesn't
                  matter. PREPP is that pairing made operational. The
                  partnership is 50/50 because both sides — strategy and
                  production — are equally load-bearing.
                </p>
                <p>
                  Apex sells production. PodcastNetwork sells the relationship
                  system. Bundled in one engagement, free for Apex clients.
                  That's the line — even on the $997 One Episode + Guest Map
                  wedge, you see both halves of the value. Samples don't earn
                  recurring trust; full systems do.
                </p>
              </div>
            </div>

            <div className="rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-background)] p-8">
              <Eyebrow>What we believe</Eyebrow>
              <ul className="mt-5 space-y-4">
                {beliefs.map((b) => (
                  <li
                    key={b}
                    className="font-display text-base uppercase tracking-wider leading-snug text-[color:var(--color-foreground)] border-b border-[color:var(--color-border)] pb-4 last:border-0 last:pb-0"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight">
              Work with us.
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85">
              The fastest way to know if we're built for you is to apply. Brett
              or Randy reads every application personally.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <ButtonLink href="/apply" variant="primary" size="lg" withArrow>
                Apply
              </ButtonLink>
              <ButtonLink href="/how-it-works" variant="outline" size="lg">
                Read the framework
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
