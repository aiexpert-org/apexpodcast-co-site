import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { Border } from '@/components/ccm/border'
import { PageIntro } from '@/components/ccm/page-intro'
import { SectionIntro } from '@/components/ccm/section-intro'
import { ContactBlock } from '@/components/ccm/contact-block'

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'Three steps and an AI-native operating model. The Pentatype tunes the show to the host. A producer sits in the room on every session. The network carries the release. Two co-founder producers, a deep AI stack behind them.',
  alternates: { canonical: '/how-we-work/' },
}

const STEPS = [
  {
    title: 'Tune the show to the host.',
    body:
      'Before the first session, every host takes the Pentatype assessment. Connection, Structure, Conviction, Discovery, Meaning. The format follows the way you actually process the world. The show fits you instead of asking you to fit the show.',
  },
  {
    title: 'A producer sits in the room.',
    body:
      'Every session has a producer on the line. Markers, redirects, a question saved for the right moment, the kindness to let a long pause breathe. The result is a conversation that holds together at minute thirty, not just at minute three.',
  },
  {
    title: 'The network carries the release.',
    body:
      'Every Apex show ships onto the Apex Podcast Network feed, where each release carries the others. One conversation, several doors in. The network compounds because the catalog compounds.',
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      <PageIntro eyebrow="How we work" title="Three steps. Nothing extra.">
        <p>
          The craft, not the business model. The work, not the pitch. What
          actually happens between a first conversation and a published episode.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger faster>
          <ul role="list" className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {STEPS.map((item) => (
              <FadeIn as="li" key={item.title}>
                <Border className="pt-8">
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-neutral-600">
                    {item.body}
                  </p>
                </Border>
              </FadeIn>
            ))}
          </ul>
        </FadeInStagger>
      </Container>

      <section aria-label="AI-native operating model">
        <SectionIntro
          eyebrow="The operating model"
          title="Two co-founder producers. A deep AI stack behind them."
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            Apex is intentionally two people. Brett K Moore and Randy Highsmith
            run every show together, and an AI-native production stack runs
            everything that does not need a human in the room. The output looks
            like a ten-person agency. The economics look like two co-founders
            with very good tools.
          </p>
        </SectionIntro>

        <Container className="mt-12">
          <FadeIn>
            <ul role="list" className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <li className="rounded-3xl border border-neutral-200 p-7">
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-cta)]">
                  Producers
                </p>
                <h3 className="mt-4 font-display text-xl text-neutral-950">
                  Humans in the room.
                </h3>
                <p className="mt-3 text-neutral-600">
                  Strategy, host coaching, the live producer call on every
                  recording, taste decisions, the producer debrief, the
                  block-analysis audit. The work that has to be a person stays
                  a person.
                </p>
              </li>
              <li className="rounded-3xl border border-neutral-200 p-7">
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-cta)]">
                  AI stack
                </p>
                <h3 className="mt-4 font-display text-xl text-neutral-950">
                  Everything else.
                </h3>
                <p className="mt-3 text-neutral-600">
                  Editing assists, transcription, show notes, guest research
                  pulls, social repurposing, cover-art variants, outreach drafts,
                  scheduling. Tools that compress the parts of production that
                  used to need a junior team.
                </p>
              </li>
              <li className="rounded-3xl border border-neutral-200 p-7">
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-cta)]">
                  The math
                </p>
                <h3 className="mt-4 font-display text-xl text-neutral-950">
                  Boutique quality, scaled by AI.
                </h3>
                <p className="mt-3 text-neutral-600">
                  This is why the pricing works. We do not pad the bundle with
                  a junior team because the AI handles their old work. You get
                  a producer in the room and a network around the release,
                  without paying for the agency overhead in between.
                </p>
              </li>
            </ul>
          </FadeIn>

          <FadeIn className="mt-10">
            <Link
              href="/tooling/"
              className="inline-flex items-center gap-2 text-base font-semibold text-neutral-950 underline decoration-[var(--color-cta)] underline-offset-4 hover:decoration-2"
            >
              See the full Apex tooling stack
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </FadeIn>
        </Container>
      </section>

      <ContactBlock heading="Ready to start?">
        <p>
          Apex takes on a small number of new shows each quarter. Leave your
          info and we&rsquo;ll reach out personally when a spot opens.
        </p>
      </ContactBlock>
    </>
  )
}
