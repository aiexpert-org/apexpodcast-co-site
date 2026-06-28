import type { Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { Border } from '@/components/ccm/border'
import { SectionIntro } from '@/components/ccm/section-intro'
import { ApexHero } from '@/components/ccm/apex-hero'
import { ContactBlock } from '@/components/ccm/contact-block'
import LogoScroller from '@/components/sections/logo-scroller'
import SelectedWork from '@/components/sections/selected-work'
import PentatypeAssessment from '@/components/sections/pentatype-assessment'
import TierTeaser from '@/components/sections/tier-teaser'
import { prepPhases } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Apex Podcast Co. Producers for serious artists, founders, and operators.',
  description:
    'A boutique production company. A producer in the room while you find your voice, fading to strategy and network review as you grow. The sound you would expect from a record label, applied to the long-form conversation.',
  alternates: { canonical: '/' },
}

const WHAT_WE_DO = [
  {
    title: 'A producer in the room while it matters.',
    body:
      'Every session at the start. The producer arc is the point. We sit in the room until you can run it, then we step back to strategy and the network as you grow.',
  },
  {
    title: 'A network around your show.',
    body:
      'You ship into a catalog of twenty-six productions built on the Pentatype communication framework. The network compounds the longer you stay in it.',
  },
  {
    title: 'An AI-native operating model.',
    body:
      'Two co-founder producers, a deep AI stack behind them. Riverside for record, edit, and clip. The work that has to be a human stays a human; the rest runs on tools. The output looks like a ten-person agency at two-co-founder economics.',
  },
]

export default function Home() {
  return (
    <>
      <ApexHero />

      {/* Dark Logo Scroller — apex catalog rolls past on ink with the parallax
          drift. CCM equivalent of the OrgCarousel, rebuilt for the dark
          surface and apex's twenty-six show slate. */}
      <LogoScroller />

      {/* The work — primary offer description, the apex three pillars,
          mirroring CCM's "The method" section structure. */}
      <section aria-label="What Apex Podcast Co does">
        <SectionIntro
          eyebrow="The work"
          title="A boutique production company built around three commitments."
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            Apex Podcast Co is what a record label looks like when it is built
            for long-form conversation. Three commitments hold every show we
            produce, every session we sit in on, every cover that ships.
          </p>
        </SectionIntro>

        <Container className="mt-16">
          <FadeInStagger faster>
            <ul role="list" className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {WHAT_WE_DO.map((item) => (
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
      </section>

      {/* The PREP system — the architecture under every Apex offer. CCM "The
          method" equivalent, framed as the operational spine. */}
      <section aria-label="The PREP system">
        <SectionIntro
          eyebrow="The PREP system"
          title="Prepare, Record + Edit + Publish, Promote. The architecture under every Apex offer."
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            PREP is what Apex actually does for a show. Three phases on either side of the recording.
            Bundled inside Your Weekly Show, run once inside The Prepisode, or taken as standalone
            Promote inside Apex Podcast Network.
          </p>
        </SectionIntro>

        <Container className="mt-16">
          <FadeInStagger faster>
            <ul role="list" className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {prepPhases.map((phase) => (
                <FadeIn as="li" key={phase.title}>
                  <Border className="pt-8">
                    <p className="font-mono text-2xl tracking-tighter text-[var(--color-cta)]">
                      {phase.letter}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-neutral-950">
                      {phase.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-neutral-600">
                      {phase.body}
                    </p>
                  </Border>
                </FadeIn>
              ))}
            </ul>
          </FadeInStagger>
        </Container>

        <Container className="mt-10">
          <FadeIn>
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 text-base font-semibold text-neutral-950 underline decoration-[var(--color-cta)] underline-offset-4 hover:decoration-2"
            >
              See the four ways in
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </FadeIn>
        </Container>
      </section>

      {/* Selected Work — the flagship trio, CCM "Stories from the work"
          equivalent. Component owns its own intro band. */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <SelectedWork />
        <Container className="mt-10">
          <FadeIn>
            <Link
              href="/case-studies/"
              className="inline-flex items-center gap-2 text-base font-semibold text-neutral-950 underline decoration-[var(--color-cta)] underline-offset-4 hover:decoration-2"
            >
              Read every case study
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </FadeIn>
        </Container>
      </div>

      {/* Pentatype Assessment — apex-bespoke section. Component owns its own
          intro band. */}
      <div className="mt-24 sm:mt-32 lg:mt-40">
        <PentatypeAssessment />
      </div>

      <ContactBlock heading="Join the wait list.">
        <p>
          Apex takes on a small number of new shows each quarter. Leave your
          info and we&rsquo;ll reach out personally when a spot opens.
        </p>
      </ContactBlock>
    </>
  )
}
