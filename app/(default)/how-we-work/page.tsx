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
    'Three steps, a client maturity arc, and an AI-native operating model. The Pentatype tunes the show to the host. A producer sits in the room while it matters. The network carries the release. Two co-founder producers, a deep AI stack behind them.',
  alternates: { canonical: '/how-we-work/' },
}

const STEPS = [
  {
    title: 'Tune the show to the host.',
    body:
      'Before the first session, every host takes the Pentatype assessment. Connection, Structure, Conviction, Discovery, Meaning. The format follows the way you actually process the world. The show fits you instead of asking you to fit the show.',
  },
  {
    title: 'A producer sits in the room while it matters.',
    body:
      'Early sessions get a producer on the line every time. Markers, redirects, a question saved for the right moment, the kindness to let a long pause breathe. As the host hits stride, the producer steps back from real-time and forward into strategy. The promise is the arc, not a forever-presence.',
  },
  {
    title: 'The network carries the release.',
    body:
      'Every Apex show ships onto the Apex Podcast Network feed, where each release carries the others. One conversation, several doors in. The network compounds because the catalog compounds, and it compounds more the longer you stay in it.',
  },
]

const MATURITY: { phase: string; window: string; producer: string; ai: string; network: string }[] = [
  {
    phase: 'Onboarding',
    window: 'First one to three cycles',
    producer:
      'Producer in the room every session. Host coaching. Episode arc design. The moves that turn a willing host into a host the audience trusts.',
    ai: 'Riverside Magic Editor on the long-form cut. Magic Clips on the short-form. Producer-reviewed on every release.',
    network:
      'Show added to the Apex Podcast Network feed. First Debrief feature scheduled. First guest pairings opened from the network roster.',
  },
  {
    phase: 'Established',
    window: 'Cycles four to twelve',
    producer:
      'Producer at the key moments: strategy session, first run-through, debrief. Not on every recording. The host runs the room with prep we built together.',
    ai: 'AI stack carries more of the per-episode mechanics. Producer touches the cuts that matter and trusts the ones that do not.',
    network:
      'Network co-marketing turns on. Bidirectional guest booking running both directions. Host pitched onto other shows, qualified guests routed onto yours.',
  },
  {
    phase: 'Mature',
    window: 'Cycle thirteen and beyond',
    producer:
      'Producer pulls in for the audit, the strategy review, and the high-leverage cycle decisions. The host runs the room. We sit beside the work, not inside every session.',
    ai: 'AI stack handles record, edit, clip, and publish at full pace. Producer reviews the audit and the patterns the AI cannot see.',
    network:
      'Network compounds. The show carries other shows; other shows carry yours. The relationship is no longer about real-time presence. It is about the surface around your release.',
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

      <section aria-label="The client maturity model">
        <SectionIntro
          eyebrow="The maturity arc"
          title="A producer in the room when it matters, less of one as you grow."
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            The Apex commitment is honest about what changes the longer you
            work with us. The producer is in the room at the start. As you find
            your voice, the producer steps back from real-time and forward into
            strategy. The longer you are on the network, the more it does for
            you. Same price every cycle; the value shifts as you do.
          </p>
        </SectionIntro>

        <Container className="mt-12">
          <FadeIn>
            <div className="overflow-hidden rounded-3xl border border-neutral-200">
              <div className="hidden grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1.4fr)_minmax(0,1.4fr)] gap-px bg-neutral-200 md:grid">
                <div className="bg-white p-6 font-mono text-xs uppercase tracking-widest text-neutral-500" />
                <div className="bg-white p-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
                  Producer
                </div>
                <div className="bg-white p-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
                  AI stack
                </div>
                <div className="bg-white p-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
                  Network
                </div>
                {MATURITY.map((m) => (
                  <div key={m.phase + '-row'} className="contents">
                    <div className="bg-white p-6">
                      <p className="font-display text-xl font-semibold tracking-tight text-neutral-950">
                        {m.phase}
                      </p>
                      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
                        {m.window}
                      </p>
                    </div>
                    <div className="bg-white p-6 text-sm leading-6 text-neutral-700">
                      {m.producer}
                    </div>
                    <div className="bg-white p-6 text-sm leading-6 text-neutral-700">
                      {m.ai}
                    </div>
                    <div className="bg-white p-6 text-sm leading-6 text-neutral-700">
                      {m.network}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 divide-y divide-neutral-200 md:hidden">
                {MATURITY.map((m) => (
                  <article key={m.phase + '-mobile'} className="p-6">
                    <p className="font-display text-xl font-semibold tracking-tight text-neutral-950">
                      {m.phase}
                    </p>
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest text-neutral-500">
                      {m.window}
                    </p>
                    <dl className="mt-5 space-y-4 text-sm leading-6 text-neutral-700">
                      <div>
                        <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-neutral-500">
                          Producer
                        </dt>
                        <dd className="mt-1">{m.producer}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-neutral-500">
                          AI stack
                        </dt>
                        <dd className="mt-1">{m.ai}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-neutral-500">
                          Network
                        </dt>
                        <dd className="mt-1">{m.network}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

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
