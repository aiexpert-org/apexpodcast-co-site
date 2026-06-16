import type { Metadata } from 'next'
import Link from '@/components/ui/smart-link'
import HomeHero from '@/components/sections/home-hero'
import ContactBlock from '@/components/sections/contact-block'
import { ShowCard } from '@/components/sections/show-grid'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import { CASE_STUDY_SHOWS, SHOWS } from '@/lib/shows'

export const metadata: Metadata = {
  title: 'The Apex Podcast. Podcasting for owners, operators, and leaders',
  description:
    'Apex Podcast Co is a producer and a network. A producer in the room on every session, the Pentatype method that tunes the show to its host, and a feed where every Apex show carries the others.',
  alternates: { canonical: '/' },
}

const OFFER = [
  {
    title: 'A producer in the room',
    body: 'A real producer on every session. Markers, interventions, a clean conversation. We make the show good before anyone hits publish.',
  },
  {
    title: 'A network around it',
    body: 'Every show goes onto the Apex Podcast Network feed, where each release carries the others. The network compounds because the work compounds.',
  },
  {
    title: 'Tuned to how you talk',
    body: 'The Pentatype assessment maps how you actually communicate, so the show fits the host instead of the host fighting the format.',
  },
]

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* The catalog: selected human-hosted shows. */}
      <section className="section">
        <div className="container-apex">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow-acid">The catalog</p>
              <h2 className="mt-4 h-section text-ink">
                Shows we produce in the room
                <span className="text-acid">.</span>
              </h2>
            </div>
            <Link
              href="/portfolio/"
              className="group inline-flex items-center font-mono text-xs uppercase tracking-widest text-ink/70 hover:text-ink"
            >
              See all {SHOWS.length} shows
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </Reveal>

          <RevealStagger className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {CASE_STUDY_SHOWS.map((show) => (
              <RevealItem key={show.slug}>
                <ShowCard show={show} />
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* The offer. */}
      <section className="section pt-0">
        <div className="container-apex">
          <Reveal className="max-w-2xl">
            <p className="eyebrow-acid">The offer</p>
            <h2 className="mt-4 h-section text-ink">
              A producer in the room, the network around your show
              <span className="text-acid">.</span>
            </h2>
            <p className="mt-5 text-ink/70">
              Apex is a producer and a network. The producer makes the show good. The network makes
              it travel. See the three ways in on the{' '}
              <Link href="/subscription/" className="text-ink underline decoration-acid underline-offset-4">
                subscription page
              </Link>
              .
            </p>
          </Reveal>

          <RevealStagger className="mt-14 grid gap-x-10 gap-y-12 lg:grid-cols-3">
            {OFFER.map((item) => (
              <RevealItem key={item.title}>
                <div className="border-t border-ink/15 pt-6">
                  <h3 className="font-display text-2xl tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-4 text-ink/70">{item.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <ContactBlock source="home">
        <p>
          Tell us what you want to launch. A producer will reach out by email when a spot opens. Apex
          takes on a small number of new shows each cycle, so the cap is the point.
        </p>
      </ContactBlock>
    </>
  )
}
