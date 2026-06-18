import type { Metadata } from 'next'
import HomeHero from '@/components/sections/home-hero'
import LogoScroller from '@/components/sections/logo-scroller'
import SelectedWork from '@/components/sections/selected-work'
import PentatypeAssessment from '@/components/sections/pentatype-assessment'
import ProducersBand from '@/components/sections/producers-band'
import FooterCta from '@/components/sections/footer-cta'

export const metadata: Metadata = {
  title: 'Apex Podcast Co. Producers for serious artists, founders, and operators.',
  description:
    'A boutique production company. A producer in the room on every session. A network around your show. The sound you would expect from a record label, applied to the long-form conversation.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <LogoScroller />
      <SelectedWork />
      <PentatypeAssessment />
      <ProducersBand />
      <FooterCta />
    </>
  )
}
