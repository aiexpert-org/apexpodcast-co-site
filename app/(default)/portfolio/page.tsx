import type { Metadata } from 'next'
import PageHero from '@/components/ui/page-hero'
import ShowGrid from '@/components/sections/show-grid'
import ContactBlock from '@/components/sections/contact-block'
import { Reveal } from '@/components/motion/reveal'
import Link from '@/components/ui/smart-link'
import {
  REAL_SHOWS,
  NETWORK_SHOWS,
  NETWORK_BY_CORE,
  CORES,
  CORE_FINGER,
  CORE_GLOSS,
} from '@/lib/shows'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'The Apex catalog. Four human-hosted shows produced with a producer in the room, and seventeen AI-narrated brand productions from the Apex Podcast Network, organized by Pentatype Core.',
  alternates: { canonical: '/portfolio/' },
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="The catalog."
        title={
          <>
            Every show in the Apex stable
            <span className="text-acid">.</span>
          </>
        }
      >
        Four human-hosted shows produced with a producer in the room, and {NETWORK_SHOWS.length} AI-narrated brand productions from the Apex Podcast Network. Five Pentatype Cores, one feed. Move across the grid and watch it light up.
      </PageHero>

      {/* Artist albums: the human-hosted anchors. */}
      <section className="section">
        <div className="container-apex">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow-acid">Artist albums</p>
            <h2 className="mt-4 h-section text-ink">
              The human-hosted shows
              <span className="text-acid">.</span>
            </h2>
            <p className="mt-5 text-ink/70">
              Four anchor shows, produced in the room, with a real host at the chair. They are the face of the network. Click any one for the case study.
            </p>
          </Reveal>
          <ShowGrid shows={REAL_SHOWS} />
        </div>
      </section>

      {/* The Apex Podcast Network: 17 shows by Pentatype Core. */}
      <section className="section pt-0">
        <div className="container-apex">
          <Reveal className="mb-8 max-w-2xl">
            <p className="eyebrow-acid">The Apex Podcast Network</p>
            <h2 className="mt-4 h-section text-ink">
              Seventeen brand productions, five Pentatype Cores
              <span className="text-acid">.</span>
            </h2>
            <p className="mt-5 text-ink/70">
              Narrated with AI voice production and disclosed on every release. Each show sits inside a Pentatype Core, so the network reads as one shape with five sides.
            </p>
            <p className="mt-3 text-sm text-ink/60">
              Find your Core, find your shows.{' '}
              <Link
                href="https://pentatype.com/"
                className="text-ink underline decoration-acid underline-offset-4 hover:text-ink"
              >
                Take the assessment
              </Link>
              .
            </p>
          </Reveal>

          {/* Core legend. */}
          <Reveal className="mb-12 flex flex-wrap gap-2">
            {CORES.map((core) => (
              <span
                key={core}
                className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink/55"
              >
                {core} <span className="text-ink/35">({CORE_FINGER[core]})</span>
              </span>
            ))}
          </Reveal>

          {/* One section per Pentatype Core. */}
          <div className="space-y-20">
            {CORES.map((core) => {
              const shows = NETWORK_BY_CORE[core]
              if (shows.length === 0) return null
              return (
                <div key={core}>
                  <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4 border-t border-ink/15 pt-6">
                    <div className="max-w-2xl">
                      <p className="eyebrow-acid">
                        {core} ({CORE_FINGER[core]})
                      </p>
                      <h3 className="mt-3 font-display text-3xl tracking-tight text-ink">
                        {CORE_GLOSS[core]}
                      </h3>
                    </div>
                    <p className="font-mono text-[0.7rem] uppercase tracking-widest text-ink/45">
                      {shows.length} {shows.length === 1 ? 'show' : 'shows'}
                    </p>
                  </Reveal>
                  <ShowGrid shows={shows} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ContactBlock source="portfolio">
        <p>
          Want your own show in this grid? Apex takes on a small number of new shows each cycle. Drop your name and what you want to launch, and a producer will reach out when a spot opens.
        </p>
      </ContactBlock>
    </>
  )
}
