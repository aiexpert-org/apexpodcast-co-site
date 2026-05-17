import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";

export const metadata: Metadata = {
  title: "Randy Highsmith — Founder Case Study",
  description:
    "Why Apex's co-founder runs his own podcast through PREPP. Proof we eat our own cooking.",
  alternates: { canonical: "/case-studies/randy-highsmith" },
};

export default function RandyPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-10">
        <Container>
          <Eyebrow>Case Study · Founder</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            Why Apex's co-founder also runs his podcast through PREPP.
          </h1>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--color-border)] py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
            <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-7">
              <Eyebrow>The Profile</Eyebrow>
              <h2 className="mt-3 font-display text-2xl uppercase leading-tight">
                Randy Highsmith
              </h2>
              <p className="mt-3 text-[color:var(--color-foreground)]/85">
                Co-founder of Apex Podcast Co. Head of Production. Co-host of
                <em> Sweeter After Difficulty</em>.
              </p>
              <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                The most honest stress test of any production framework is the
                team running it on themselves.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <Eyebrow>The Premise</Eyebrow>
                <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                  We run our own system on ourselves.
                </h3>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  Randy's personal-brand podcast is produced with the exact
                  same PREPP framework, the same tool stack, and the same
                  weekly cadence we sell to flagship clients. Same Riverside
                  sessions. Same Descript edits. Same clip pipeline. Same
                  promote loop.
                </p>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  When PREPP needs to evolve, Randy feels it first. The system
                  improves because the founders use it in production every
                  single week.
                </p>
              </div>

              <div>
                <Eyebrow>The Outcome</Eyebrow>
                <h3 className="mt-3 font-display text-2xl uppercase leading-tight">
                  Proof of life for the framework.
                </h3>
                <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  [NEEDS CONTENT: Randy's episodes published, listener growth,
                  guest list, business outcomes. To be populated by Randy as
                  the show matures.]
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
              The PREPP framework runs on the founders, too.
            </h2>
            <div className="mt-8">
              <ButtonLink href="/how-it-works" variant="primary" size="lg" withArrow>
                See PREPP in detail
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
