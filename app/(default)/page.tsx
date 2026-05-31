import type { Metadata } from 'next'
import HomeHero from '@/components/sections/home-hero'
import ThreePillars from '@/components/sections/three-pillars'
import NetworkProofBar from '@/components/sections/network-proof-bar'
import FeaturedWork from '@/components/sections/featured-work'
import TierTeaser from '@/components/sections/tier-teaser'
import ProducerFrame from '@/components/sections/producer-frame'
import ClosingCta from '@/components/sections/closing-cta'

export const metadata: Metadata = {
  title: 'A producer in the room. A network around your show',
  description:
    'Apex Podcast Co is a producer and a network. A producer in the room every session, the Apex Podcast Network around every release, and the Pentatype methodology tuning each show to its host.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <ThreePillars />
      <NetworkProofBar />
      <FeaturedWork />
      <TierTeaser />
      <ProducerFrame />
      <ClosingCta />
    </>
  )
}
