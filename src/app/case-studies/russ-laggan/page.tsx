import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";

export const metadata: Metadata = {
  title: "Russ Laggan — Case Study",
  description:
    "How the VP of Training at eXp Realty runs two podcasts as a recruiting, authority, and book-launch engine.",
  alternates: { canonical: "/case-studies/russ-laggan" },
};

export default function RussPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-10">
        <Container>
          <Eyebrow>Case Study · VP Training, eXp Realty</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            How the VP of Training at eXp runs two podcasts as a recruiting and
            authority engine.
          </h1>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--color-border)] py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
            <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-7">
              <Eyebrow>The Profile</Eyebrow>
              <h2 className="mt-3 font-display text-2xl uppercase leading-tight">
                Russ Laggan
              </h2>
              <p className="mt-3 text-[color:var(--color-foreground)]/85">
                VP of Training, eXp Realty. Author of{" "}
                <em>Be Followable</em>. Creator of the Spheramid System™ and
                the Pentatype Communication Assessment.
              </p>
              <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                Site:{" "}
                <a
                  href="https://russlaggan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--color-accent)] hover:underline"
                >
                  russlaggan.com
                </a>
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-[color:var(--color-foreground)]/80">
                <li>· 1,692 agents recruited in a single year</li>
                <li>· 28 offices managed</li>
                <li>· $970M volume managed</li>
                <li>· Two active podcasts: The Russ Laggan Podcast + BAM</li>
              </ul>
            </div>

            <div className="space-y-10">
              <div>
                <Eyebrow>The Setup</Eyebrow>
                <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                  Two shows already running. No production engine that could
                  keep pace.
                </h3>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  Russ doesn't need to be sold on podcasting — he was already
                  doing it. What he needed was a team that could absorb the
                  full production weight of <em>two</em> weekly shows so he
                  could focus on the parts only he can do: building Spheramid,
                  selling books, training agents, and recruiting at scale.
                </p>
              </div>

              <div>
                <Eyebrow>The Work</Eyebrow>
                <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                  Both podcasts. Weekly Riverside captures. Full PREPP stack.
                </h3>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  Apex runs both <em>The Russ Laggan Podcast</em> and the
                  industry collaboration{" "}
                  <em>The Big Agent Meeting (BAM)</em> on a weekly cadence. We
                  capture in Riverside, edit audio + video, build the clip
                  rollouts, and run distribution and promotion across every
                  channel Russ's audience lives on.
                </p>
              </div>

              <div>
                <Eyebrow>The Outcome</Eyebrow>
                <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                  Top-of-funnel for assessments, book sales, keynote inquiries,
                  and recruiting conversations.
                </h3>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  [NEEDS DATA: assessment downloads, book sales lift, keynote
                  inquiries, agents recruited through the show. Will share
                  once Russ greenlights specific numbers for public use.]
                </p>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  The structural point: Russ is using his two podcasts as the
                  evangelism layer for Spheramid and Be Followable. Every
                  episode is a top-of-funnel for the products and the
                  recruiting motion that already make him one of the most
                  productive operators in his ecosystem.
                </p>
              </div>

              <blockquote className="rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-mid)] p-6">
                <p className="font-display text-xl uppercase leading-snug text-[color:var(--color-foreground)]">
                  "Influence is cheap.{" "}
                  <span className="text-[color:var(--color-accent)]">
                    Followability is priceless.
                  </span>
                  "
                </p>
                <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                  — Russ Laggan, VP of Training, eXp Realty
                </footer>
              </blockquote>

              <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-6">
                <Eyebrow>Sample Episodes</Eyebrow>
                <p className="mt-3 text-[color:var(--color-foreground)]/80">
                  [NEEDS EMBEDS: audio + video players for one recent episode of
                  The Russ Laggan Podcast and one of BAM. Plus 2–3 selected
                  short-form clips.]
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
              Want this kind of engine for your show?
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85">
              Multi-show engagements like Russ's are Flagship-tier
              relationships. The Pilot is the cleanest first step.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <ButtonLink href="/flagship" variant="primary" size="lg" withArrow>
                See the Flagship
              </ButtonLink>
              <ButtonLink href="/pilot" variant="outline" size="lg">
                Start with a Pilot
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
