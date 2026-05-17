import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ApplyForm } from "@/components/apply-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Apply — Book a Blueprint Session",
  description:
    "Apply to work with Apex Podcast Co. Brett or Randy reads every application personally and responds within one business day.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <>
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-10">
        <Container>
          <Eyebrow>Apply</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            Book a Blueprint Session.
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            Tell us about your show (or the show you want to build). Brett or
            Randy reads every application personally and replies within one
            business day to set up a 30-minute call.
          </p>
        </Container>
      </Section>

      <Section className="border-t border-[color:var(--color-border)] pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] items-start">
            <ApplyForm />

            <aside className="space-y-8 lg:sticky lg:top-24">
              <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-6">
                <Eyebrow>What happens next</Eyebrow>
                <ol className="mt-5 space-y-4 text-sm text-[color:var(--color-foreground)]/90">
                  <li>
                    <strong className="font-display text-[color:var(--color-accent)] text-xs uppercase tracking-wider">
                      Within 24 hours
                    </strong>
                    <p className="mt-1">
                      Brett or Randy reads your application and replies
                      personally with calendar options.
                    </p>
                  </li>
                  <li>
                    <strong className="font-display text-[color:var(--color-accent)] text-xs uppercase tracking-wider">
                      30-minute Blueprint
                    </strong>
                    <p className="mt-1">
                      We map your show concept, your ICP, and your first 10
                      ideal guests live on the call.
                    </p>
                  </li>
                  <li>
                    <strong className="font-display text-[color:var(--color-accent)] text-xs uppercase tracking-wider">
                      Scope + start
                    </strong>
                    <p className="mt-1">
                      We propose the right tier (Pilot, Flagship, or a la
                      carte) and we're in production within 2 weeks.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="rounded-sm border border-[color:var(--color-border)] bg-[color:var(--color-mid)] p-6">
                <Eyebrow>Prefer email?</Eyebrow>
                <p className="mt-3 text-sm text-[color:var(--color-foreground)]/85">
                  Write us directly at{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[color:var(--color-accent)] hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                  . Same humans on the other end.
                </p>
              </div>

              <div className="rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-background)] p-6">
                <Eyebrow>Why limited spots</Eyebrow>
                <p className="mt-3 text-sm text-[color:var(--color-foreground)]/85">
                  We take 5 Pilot clients per month so Brett or Randy is
                  personally on every Blueprint, Guest Strategy session, and
                  recording. Flagship clients start within 2 weeks of
                  contract.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
