import type { Metadata } from 'next'
import PageHero from '@/components/ui/page-hero'
import ShowGrid from '@/components/sections/show-grid'
import ContactBlock from '@/components/sections/contact-block'
import { Reveal } from '@/components/motion/reveal'
import { REAL_SHOWS, NETWORK_SHOWS } from '@/lib/shows'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'The Apex catalog. Human-hosted shows produced in the room and AI-voiced shows from the Apex Podcast Network. Cover art is the work.',
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
        {REAL_SHOWS.length} human-hosted shows produced with a producer in the room, and{' '}
        {NETWORK_SHOWS.length} AI-voiced shows from the Apex Podcast Network. The cover art is the
        work. Move across the grid and watch it light up.
      </PageHero>

      <section className="section">
        <div className="container-apex">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow-acid">The grid</p>
            <h2 className="mt-4 h-section text-ink">
              Twenty four shows and counting
              <span className="text-acid">.</span>
            </h2>
            <p className="mt-5 text-ink/70">
              The human-hosted shows link through to their case study. The network productions are
              in production now, branded as Apex Podcast Network releases.
            </p>
          </Reveal>

          <ShowGrid />
        </div>
      </section>

      <ContactBlock source="portfolio">
        <p>
          Want your own show in this grid? Apex takes on a small number of new shows each cycle. Drop
          your name and what you want to launch, and a producer will reach out when a spot opens.
        </p>
      </ContactBlock>
    </>
  )
}
