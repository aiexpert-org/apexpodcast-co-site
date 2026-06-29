import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import TierTeaser from '@/components/sections/tier-teaser'
import ClosingCta from '@/components/sections/closing-cta'
import PageHero from '@/components/ui/page-hero'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'The work, two ways. Try one episode for $997. Run the show for $2,997 a cycle. Promotion sits with our partner network at PodcastNetwork.org.',
  alternates: { canonical: '/services/' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Producers who care about the craft
            <span className="text-acid">.</span>
          </>
        }
      >
        Try one episode. Run the show, ongoing. Promotion is handled by our partner network at PodcastNetwork.org.
      </PageHero>

      <TierTeaser />

      <section className="bg-bone pb-20 md:pb-28">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl rounded-3xl border border-ink/12 bg-bone p-8 md:p-10">
              <p className="eyebrow">The Prepisode credit</p>
              <p className="mt-5 text-ink/75">
                Try The Prepisode first and the $997 credits in full toward your first Weekly Show cycle if you continue inside ninety days. No commitment up front.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta headline="Not sure which one fits? We will tell you." />
    </>
  )
}
