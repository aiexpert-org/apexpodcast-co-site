import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { LinkCard } from "@/components/card";
import { ButtonLink } from "@/components/button";

export const metadata: Metadata = {
  title: "Case Studies — Apex Clients",
  description:
    "How Apex Podcast Co builds relationship engines for eXp leaders. Featuring Austin Cheviron, Russ Laggan, and Randy Highsmith.",
  alternates: { canonical: "/case-studies" },
};

const studies = [
  {
    href: "/case-studies/austin-cheviron",
    eyebrow: "Author + Coach · eXp Instructor of the Year",
    name: "Austin Cheviron",
    headline: "Building a coaching pipeline through conversation.",
    body: "Top eXp instructor. Author of The Money Puzzle. Built Cheviron Coaching with three signature programs. Launched his podcast with Apex producing the full stack.",
  },
  {
    href: "/case-studies/russ-laggan",
    eyebrow: "VP of Training, eXp Realty · Author + Speaker",
    name: "Russ Laggan",
    headline: "Two podcasts. Weekly cadence. One engine.",
    body: "Author of Be Followable. Creator of the Spheramid System™. 1,692 agents recruited in a single year. Apex runs both of his shows weekly through Riverside.",
  },
  {
    href: "/case-studies/randy-highsmith",
    eyebrow: "Founder Eating His Own Cooking",
    name: "Randy Highsmith",
    headline: "Why Apex's co-founder runs his podcast through PREPP.",
    body: "Randy's personal-brand podcast is produced through the same Apex system we sell. Proof we run our own framework on ourselves.",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <Container>
          <Eyebrow>Case Studies</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            Proof, not testimonials.
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            Three active Apex clients, all in production right now. Two senior
            eXp Realty leaders running personal brands alongside their eXp
            roles. One co-founder running his own podcast through the same
            system we sell.
          </p>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {studies.map((s) => (
              <LinkCard key={s.href} href={s.href}>
                <Eyebrow>{s.eyebrow}</Eyebrow>
                <h2 className="mt-4 font-display text-2xl uppercase leading-tight">
                  {s.name}
                </h2>
                <p className="mt-3 text-[color:var(--color-accent)] text-base">
                  {s.headline}
                </p>
                <p className="mt-4 text-[color:var(--color-foreground)]/80">
                  {s.body}
                </p>
              </LinkCard>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[color:var(--color-muted)]">
              Want your story here? Start with a Pilot.
            </p>
            <div className="mt-5">
              <ButtonLink href="/pilot" variant="primary" size="lg" withArrow>
                Explore The Pilot
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
