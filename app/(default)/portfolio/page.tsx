import type { Metadata } from 'next'
import PageHero from '@/components/ui/page-hero'
import ShowGrid from '@/components/sections/show-grid'
import ContactBlock from '@/components/sections/contact-block'
import { Reveal } from '@/components/motion/reveal'
import { REAL_SHOWS, NETWORK_SHOWS, CATEGORIES } from '@/lib/shows'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'The Apex catalog. Four human-hosted shows produced with a producer in the room, and twenty AI-narrated brand productions from the Apex Podcast Network across six categories.',
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
        Four human-hosted shows produced with a producer in the room, and {NETWORK_SHOWS.length}{' '}
        AI-narrated brand productions from the Apex Podcast Network. Six categories, one feed. Each
        network show is inspired by a podcast that already proved the lane. Move across the grid and
        watch it light up.
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
              Four anchor shows, produced in the room, with a real host at the chair. They are the
              face of the network. Click any one for the case study.
            </p>
          </Reveal>
          <ShowGrid shows={REAL_SHOWS} />
        </div>
      </section>

      {/* The Apex Podcast Network: 20 AI-narrated brand productions. */}
      <section className="section pt-0">
        <div className="container-apex">
          <Reveal className="mb-8 max-w-2xl">
            <p className="eyebrow-acid">The Apex Podcast Network</p>
            <h2 className="mt-4 h-section text-ink">
              Twenty brand productions, six categories
              <span className="text-acid">.</span>
            </h2>
            <p className="mt-5 text-ink/70">
              Narrated with AI voice production and disclosed on every release. Each one opens the
              same way. From the Apex Podcast Network. This is the show.
            </p>
          </Reveal>

          {/* Category legend. */}
          <Reveal className="mb-12 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink/55"
              >
                {cat}
              </span>
            ))}
          </Reveal>

          <ShowGrid shows={NETWORK_SHOWS} />
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
