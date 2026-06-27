import type { Metadata } from 'next'
import NetworkCatalog from '@/components/sections/network-catalog'
import FooterCta from '@/components/sections/footer-cta'
import { NETWORK_SHOWS } from '@/lib/shows'
import { fetchTransistorShows, matchTransistorShow, type TransistorShow } from '@/lib/transistor'

export const metadata: Metadata = {
  title: 'The Apex Podcast Network',
  description:
    'The catalog. Live shows, coming-soon productions, and the Pentatype Core badge each one carries. Pulled from Transistor.',
  alternates: { canonical: '/network/' },
}

// Refresh the catalog hourly so Transistor metadata stays current without
// hammering the API on every visit.
export const revalidate = 3600

export default async function NetworkPage() {
  const transistor = await fetchTransistorShows()
  const transistorBySlug: Record<string, TransistorShow | null> = {}
  for (const show of NETWORK_SHOWS) {
    transistorBySlug[show.slug] = matchTransistorShow(show.slug, show.title, transistor)
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-bone pt-36 text-ink md:pt-44">
        <div className="container-apex">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-acid">
              The Apex Podcast Network
            </p>
            <h1 className="display mt-5 text-ink">
              The catalog
              <span className="text-acid">.</span>
            </h1>
            <p className="lead mt-6 max-w-2xl text-ink/75">
              Every Apex production, in one grid. Each show carries a Pentatype
              Core badge for the producer-craft frame it sits inside. Filter by
              Core to find the lane that matches how you process the world.
            </p>
          </div>

          <div className="mt-16 md:mt-24">
            <NetworkCatalog shows={NETWORK_SHOWS} transistorBySlug={transistorBySlug} />
          </div>

          <div className="h-32" />
        </div>
      </section>

      <FooterCta source="network-footer" />
    </>
  )
}
