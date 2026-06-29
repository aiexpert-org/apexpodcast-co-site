import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import TierTeaser from '@/components/sections/tier-teaser'
import ClosingCta from '@/components/sections/closing-cta'
import PageHero from '@/components/ui/page-hero'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Three ways to work with Apex. Try one episode for $997. Run a weekly show for $2,997 a cycle. Or amplify a show you already publish for $997 a cycle.',
  alternates: { canonical: '/services/' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pick the way in"
        title={
          <>
            Three ways to work with Apex
            <span className="text-acid">.</span>
          </>
        }
      >
        Try one episode. Run a weekly show. Or amplify what you already publish. Every path ends with an audience listening.
      </PageHero>

      <TierTeaser />

      <section className="bg-bone pb-20 md:pb-28">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl rounded-3xl border border-ink/12 bg-bone p-8 md:p-10">
              <p className="eyebrow">The math</p>
              <p className="mt-5 text-ink/75">
                The first five Weekly Show clients lock at $2,997 per cycle for twenty-four months. Try The Prepisode first? The $997 credits in full toward your first cycle if you continue inside ninety days.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta headline="Not sure which one fits? Ask us." />
    </>
  )
}
