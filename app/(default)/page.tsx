import type { Metadata } from 'next'
import HomeHero from '@/components/sections/home-hero'
import HostsBand from '@/components/sections/hosts-band'
import ShowInAction from '@/components/sections/show-in-action'
import NetworkTeaser from '@/components/sections/network-teaser'
import ServicesTeaser from '@/components/sections/services-teaser'
import ListenSubscribeBand from '@/components/sections/listen-subscribe-band'

export const metadata: Metadata = {
  title: 'Done-for-you podcast production for hosts with a sphere',
  description:
    'Apex Podcast Co produces done-for-you podcasts for owners, operators, and leaders who already have a sphere. Pentatype intake, question prep, recording, edits, publishing, and guest booking. Brett K Moore and Randy Highsmith are in every show.',
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
