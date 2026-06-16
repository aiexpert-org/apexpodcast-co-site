import type { Metadata } from 'next'
import PageHero from '@/components/ui/page-hero'
import ContactBlock from '@/components/sections/contact-block'
import { ShowCard } from '@/components/sections/show-grid'
import { Reveal, RevealStagger, RevealItem } from '@/components/motion/reveal'
import { CASE_STUDY_SHOWS } from '@/lib/shows'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'The human-hosted shows in the Apex stable. The Apex Podcast, Sweeter After Difficulty, The Russ Laggan Podcast, and Winning Twice. A producer in the room on every one.',
  alternates: { canonical: '/case-studies/' },
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies."
        title={
          <>
            The shows we produce, and the people behind them
            <span className="text-acid">.</span>
          </>
        }
      >
        Four human-hosted shows, four different audiences, one production standard. A producer at
        every session, a Pentatype profile under every show, and a place on the network for every
        release.
      </PageHero>

      <section className="section">
        <div className="container-apex">
          <RevealStagger className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {CASE_STUDY_SHOWS.map((show) => (
              <RevealItem key={show.slug}>
                <ShowCard show={show} />
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal className="mt-16 max-w-2xl border-t border-ink/15 pt-10">
            <h2 className="h-sub text-ink">
              More of the catalog is in production
              <span className="text-acid">.</span>
            </h2>
            <p className="mt-4 text-ink/70">
              Twenty AI-voiced shows from the Apex Podcast Network are in production now. See them on
              the{' '}
              <a href="/portfolio/" className="text-ink underline decoration-acid underline-offset-4">
                portfolio
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <ContactBlock source="case-studies-index">
        <p>
          Want a show like these? Apex takes on a small number each cycle. Drop your name and what you
          want to launch, and a producer will reach out when a spot opens.
        </p>
      </ContactBlock>
    </>
  )
}
