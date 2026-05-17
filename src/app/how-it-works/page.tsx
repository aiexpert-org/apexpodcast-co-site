import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Section, Eyebrow } from "@/components/section";
import { ButtonLink } from "@/components/button";
import { PreppIconRow, PreppLetter } from "@/components/prepp-icons";

export const metadata: Metadata = {
  title: "How It Works — The PREPP Framework",
  description:
    "PREPP is Apex's five-stage operating system for turning a podcast into a pipeline. Plan. Record. Edit. Publish. Promote.",
  alternates: { canonical: "/how-it-works" },
};

const stages = [
  {
    letter: "P",
    name: "Plan",
    promise: "We map your first 20 guests from your own network.",
    body: "Everything before the microphone turns on. Show concept, format, brand identity, episode arcs, publishing calendar — and most importantly, a deliberate guest pipeline drawn from the relationships you already have. Most podcast services skip this stage. It's where 80% of the pipeline value lives.",
    deliverables: [
      "Show concept, premise, positioning, and naming",
      "Target audience definition + ICP map",
      "Cover art, brand identity, and visual system",
      "Guest mapping framework — first 10–20 ideal guests from your own network",
      "Outreach choreography: first-touch scripts, follow-up cadence, calendar logistics",
      "Pipeline tracking template (Notion or Airtable)",
    ],
    tools: ["Notion / Airtable (guest pipeline)", "Castmagic (concept work)"],
  },
  {
    letter: "R",
    name: "Record",
    promise: "We run the conversation so you can run the room.",
    body: "Capturing the conversation at studio quality. A producer is on every call, marking emotional moments and flag-worthy beats in real time so the edit isn't a blind hunt. You show up and host. We handle the rest.",
    deliverables: [
      "Riverside.fm sessions (remote + local audio/video)",
      "Pre-call guest prep + tech check",
      "Live producing during the session",
      "Audio + video quality monitoring",
      "Backups + file management",
    ],
    tools: ["Riverside.fm (flagship)"],
  },
  {
    letter: "E",
    name: "Edit",
    promise: "We turn one hour into 30+ pieces of distribution.",
    body: "Polished assets across every format. Full audio + video, transcripts, captions, show notes, thumbnails, and 10+ short-form clips per episode — cut, captioned, branded, and ready for every platform you publish to.",
    deliverables: [
      "Full episode cut — audio and video",
      "Filler-word and silence removal",
      "Captions, transcripts, and show notes",
      "Episode thumbnail / cover art",
      "10+ short-form clips per episode (9:16, 1:1, 16:9)",
      "Quote cards and carousel posts",
    ],
    tools: ["Descript (text-based editing)", "Castmagic (repurposing)", "CapCut (polish)"],
  },
  {
    letter: "P",
    name: "Publish",
    promise: "We put your show everywhere it needs to be.",
    body: "Your show goes everywhere your people are. Apple Podcasts, Spotify, Amazon, YouTube full episodes plus Shorts, your own site, your newsletter. SEO-optimized episode pages and metadata so search and discovery do their part.",
    deliverables: [
      "Podcast hosting + RSS distribution",
      "Apple, Spotify, Amazon, and the rest of the directories",
      "YouTube full episode + Shorts upload",
      "SEO-optimized episode page on your site",
      "Newsletter and email distribution",
      "Metadata + tagging for discoverability",
    ],
    tools: ["Buzzsprout / Transistor (hosting)", "YouTube native", "Buffer (scheduling)"],
  },
  {
    letter: "P",
    name: "Promote",
    promise: "We turn each episode into measurable reach and replies.",
    body: "The half of podcasting most agencies skip. Short-form clip rollouts, social cadence, guest collaboration loops, email amplification, paid where it makes sense, and a monthly analytics review so you can see what's working and double down.",
    deliverables: [
      "Short-form clip rollout (Reels, TikTok, Shorts)",
      "Solo creator content built around episode themes",
      "Guest collaboration loops (clip-share, tagging, reposts)",
      "Community engagement on your behalf",
      "Email + paid amplification where appropriate",
      "Monthly analytics review and iteration",
    ],
    tools: ["Opus Clip (AI clip generation)", "Buffer / Later (scheduling)", "Canva (templates)", "Zapier (automation)"],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <Container>
          <Eyebrow>The Framework</Eyebrow>
          <h1 className="mt-6 font-display text-[length:var(--text-display)] leading-[0.95] uppercase tracking-tight">
            How Apex turns a podcast into a pipeline.
          </h1>
          <p className="mt-8 max-w-3xl text-lg sm:text-xl text-[color:var(--color-foreground)]/85 leading-relaxed">
            Most podcast services sell you one stage — usually editing. That's
            why most podcasts don't grow a business. PREPP is the whole system.
            We run all five stages, in order, every week.
          </p>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16 border-y border-[color:var(--color-border)] bg-[color:var(--color-mid)]/40">
        <Container>
          <PreppIconRow withTaglines linkToHowItWorks={false} />
        </Container>
      </Section>

      {/* STAGE BREAKDOWN */}
      {stages.map((stage, idx) => (
        <Section
          key={stage.name + idx}
          className={
            idx % 2 === 0
              ? "border-t border-[color:var(--color-border)]"
              : "border-t border-[color:var(--color-border)] bg-[color:var(--color-mid)]/30"
          }
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] items-start">
              <div>
                <div className="flex items-end gap-4">
                  <PreppLetter
                    letter={stage.letter}
                    className="text-[clamp(5rem,11vw,9rem)]"
                  />
                  <div>
                    <Eyebrow>Stage {idx + 1} of 5</Eyebrow>
                    <h2 className="mt-2 font-display text-4xl uppercase leading-none">
                      {stage.name}
                    </h2>
                  </div>
                </div>
                <p className="mt-6 text-xl text-[color:var(--color-accent)] font-display uppercase leading-snug tracking-wide">
                  {stage.promise}
                </p>
                <p className="mt-5 text-[color:var(--color-foreground)]/85 leading-relaxed">
                  {stage.body}
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xs uppercase tracking-[0.22em] text-[color:var(--color-foreground)]">
                    What you get
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {stage.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-[color:var(--color-foreground)]/90"
                      >
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xs uppercase tracking-[0.22em] text-[color:var(--color-foreground)]">
                    Tools we use
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {stage.tools.map((t) => (
                      <li
                        key={t}
                        className="text-xs font-display uppercase tracking-wider text-[color:var(--color-muted)] border border-[color:var(--color-border)] rounded-sm px-3 py-1.5"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* FINAL CTA */}
      <Section className="border-t border-[color:var(--color-border)]">
        <Container>
          <div className="rounded-sm border border-[color:var(--color-accent)] bg-[color:var(--color-mid)] p-10 lg:p-14 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl uppercase leading-tight">
              Want the full stack — or just the pieces you're missing?
            </h2>
            <p className="mt-5 text-[color:var(--color-foreground)]/85">
              The Pilot is the cleanest way to see all five stages in action.
              The Flagship is the full Podcast Content OS, weekly. A la carte
              fills the specific gaps.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <ButtonLink href="/services" variant="primary" size="lg" withArrow>
                Compare service tiers
              </ButtonLink>
              <ButtonLink href="/apply" variant="outline" size="lg">
                Apply for a Pilot
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
