import type { Metadata } from 'next'
import HomeHero from '@/components/sections/home-hero'
import HostsBand from '@/components/sections/hosts-band'
import ShowInAction from '@/components/sections/show-in-action'
import NetworkTeaser from '@/components/sections/network-teaser'
import ServicesTeaser from '@/components/sections/services-teaser'
import ListenSubscribeBand from '@/components/sections/listen-subscribe-band'

export const metadata: Metadata = {
  title: 'The Apex Podcast',
  description:
    'The Apex Podcast, hosted by Brett K Moore and Randy Highsmith. Inside the producer’s seat, the network behind a release, and the guests worth an hour. Listen on Spotify, Apple, or anywhere.',
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <HostsBand />
      <ShowInAction />
      <NetworkTeaser />
      <ServicesTeaser />
      <ListenSubscribeBand />
    </>
  )
}
