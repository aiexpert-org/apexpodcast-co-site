import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import FooterCta from '@/components/sections/footer-cta'

export const metadata: Metadata = {
  title: 'How We Work',
  description:
    'Three steps. The Pentatype tunes the show to the host. A producer sits in the room on every session. The Apex Podcast Network carries the release.',
  alternates: { canonical: '/how-we-work/' },
}

/**
 * How We Work. Three sections, one declarative line each. No business-model
 * speak, no scarcity copy. Each section anchored with the same visual rhythm
 * the home hero set: a catalog stamp, a display headline, a short prose
 * passage that earns the line.
 */
const STEPS = [
  {
    n: '01',
    line: 'We tune the show to the host.',
    body:
      'Before the first session, every host takes the Pentatype assessment. Connection, Structure, Conviction, Discovery, Meaning. The format follows the way you actually process the world. The show fits you instead of asking you to fit the show.',
  },
  {
    n: '02',
    line: 'A producer sits in the room.',
    body:
      'Every session has a producer on the line. Markers, redirects, a question saved for the right moment, the kindness to let a long pause breathe. The result is a conversation that holds together at minute thirty, not just at minute three.',
  },
  {
    n: '03',
    line: 'The network carries the release.',
    body:
      'Every Apex show ships onto the Apex Podcast Network feed, where each release carries the others. One conversation, several doors in. The network compounds because the catalog compounds.',
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-bone pt-36 text-ink md:pt-44">
        <div className="container-apex">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-acid">
              How we work
            </p>
            <h1 className="display mt-5 text-ink">
              Three steps. Nothing extra
              <span className="text-acid">.</span>
            </h1>
            <p className="lead mt-6 max-w-2xl text-ink/75">
              The craft, not the business model. The work, not the pitch. What
              actually happens between a first conversation and a published
              episode.
            </p>
          </Reveal>

          <div className="mt-24 space-y-24 md:mt-32 md:space-y-32">
            {STEPS.map((s) => (
              <Reveal key={s.n}>
                <article className="grid items-start gap-10 border-t border-ink/15 pt-10 lg:grid-cols-[10rem_1fr] lg:gap-16">
                  <p className="font-mono text-sm uppercase tracking-widest text-ink/55">
                    Step {s.n}
                  </p>
                  <div className="max-w-2xl">
                    <h2 className="h-section text-ink">
                      {s.line.replace(/\.$/, '')}
                      <span className="text-acid">.</span>
                    </h2>
                    <p className="mt-6 text-ink/75">{s.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="h-32" />
        </div>
      </section>

      <FooterCta source="how-we-work-footer" />
    </>
  )
}
