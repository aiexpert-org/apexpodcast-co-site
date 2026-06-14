import type { Metadata } from 'next'
import HomeHero from '@/components/sections/home-hero'
import ShowThesis from '@/components/sections/show-thesis'
import HowTheShowWorks from '@/components/sections/how-the-show-works'
import HostsBand from '@/components/sections/hosts-band'
import LatestEpisodes from '@/components/sections/latest-episodes'
import NetworkTeaser from '@/components/sections/network-teaser'
import ServicesTeaser from '@/components/sections/services-teaser'
import IntakeBand from '@/components/sections/intake-band'
import ListenSubscribeBand from '@/components/sections/listen-subscribe-band'

export const metadata: Metadata = {
  title: 'The Apex Podcast. Podcasting for owners, operators, and leaders',
  description:
    'The Apex Podcast is the show where Brett K Moore and Randy Highsmith find the show inside what owners, operators, and leaders have already built. Listen free, take your pentatype, or apply to come on. Apex produces done-for-you podcasts end to end.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <ShowThesis />
      <HowTheShowWorks />
      <HostsBand />
      <LatestEpisodes />
      <NetworkTeaser />
      <ServicesTeaser />
      <IntakeBand
        eyebrow="Start here"
        heading="Tell us what you want to launch."
        blurb="Two minutes. You tell us what you are building and which offer fits. A producer picks it up from there. No pitch deck, no obligation."
        source="intake_home"
      />
      <ListenSubscribeBand />
    </>
  )
}
