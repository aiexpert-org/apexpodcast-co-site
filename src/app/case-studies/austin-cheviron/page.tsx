import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";

export const metadata: Metadata = {
  title: "Austin Cheviron — Case Study",
  description:
    "How eXp Realty Instructor of the Year Austin Cheviron is using his new podcast to grow Cheviron Coaching.",
  alternates: { canonical: "/case-studies/austin-cheviron" },
};

export default function AustinPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-10">
        <Container>
          <Eyebrow>Case Study · Author + Coach</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            How an eXp Instructor of the Year is using his new podcast to grow
            Cheviron Coaching.
          </h1>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--color-border)] py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
            <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-7">
              <Eyebrow>The Profile</Eyebrow>
              <h2 className="mt-3 font-display text-2xl uppercase leading-tight">
                Austin Cheviron
              </h2>
              <p className="mt-3 text-[color:var(--color-foreground)]/85">
                Coach. Speaker. Investor. Author of{" "}
                <em>The Money Puzzle</em>. eXp Realty Instructor of the Year.
              </p>
              <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                Site:{" "}
                <a
                  href="https://austincheviron.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--color-accent)] hover:underline"
                >
                  austincheviron.com
                </a>
              </p>
              <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                Brand stack: Cheviron Coaching (Build Wealth, Agent Success,
                Teams Blueprint), live training, 1-on-1, on-demand courses,
                newsletter, brand-new podcast.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <Eyebrow>The Setup</Eyebrow>
                <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                  Established programs. Deep network. No content channel pulling
                  new prospects through it.
                </h3>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  Austin had built Cheviron Coaching into a recognized brand
                  inside the eXp ecosystem — multiple programs, a published
                  book, a wall of testimonials from named students. What he
                  didn't have was a steady, distributed top-of-funnel that
                  matched the depth of his existing relationships.
                </p>
              </div>

              <div>
                <Eyebrow>The Work</Eyebrow>
                <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                  Weekly conversations with the right people, fully produced.
                </h3>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  Apex runs Austin's full PREPP stack — Plan, Record, Edit,
                  Publish, Promote. We map guests from Austin's own orbit:
                  other coaches, eXp leaders, and authors in his sphere who are
                  themselves potential JV partners and testimonial sources. He
                  hosts. We run everything else.
                </p>
              </div>

              <div>
                <Eyebrow>The Outcome</Eyebrow>
                <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                  Coffee with the right names, on a weekly cadence.
                </h3>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  [NEEDS DATA: episodes published, downloads, clip impressions,
                  newsletter list growth, attributed pipeline. Austin has
                  agreed to share metrics once the show has 90 days of data —
                  see LIVING-NOTES May 15.]
                </p>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  What's already true: Austin has offered to cross-promote the
                  show on his socials within reason — a signal of trust that
                  arrives long before the spreadsheet does.
                </p>
              </div>

              <blockquote className="rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-mid)] p-6">
                <p className="font-display text-xl uppercase leading-snug text-[color:var(--color-foreground)]">
                  [NEEDS PULL-QUOTE: pull a clean line from Austin's iMessage
                  to Randy on May 15, 2026, or from a recent recording.]
                </p>
                <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  — Austin Cheviron, eXp Realty Instructor of the Year
                </footer>
              </blockquote>

              <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-6">
                <Eyebrow>Sample Episode</Eyebrow>
                <p className="mt-3 text-[color:var(--color-foreground)]/80">
                  [NEEDS EMBED: audio + video player for most recent episode.
                  Will live here once 3+ episodes are public.]
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight">
              Want this for your show?
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85">
              The Pilot is the cleanest way to see the system work end-to-end —
              with your own network as the guest list.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <ButtonLink href="/pilot" variant="primary" size="lg" withArrow>
                Start with a Pilot
              </ButtonLink>
              <ButtonLink href="/case-studies/russ-laggan" variant="outline" size="lg">
                See Russ Laggan's setup
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
