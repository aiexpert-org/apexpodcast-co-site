import type { Metadata } from 'next'
import HostPage from '@/components/sections/host-page'
import { getHost } from '@/lib/hosts'

const host = getHost('austin-cheviron')!

export const metadata: Metadata = {
  title: host.name,
  description: `${host.name}. ${host.tagline} Apply to be a guest on the show.`,
  alternates: { canonical: '/austin-cheviron/' },
}

export default function AustinChevironPage() {
  return <HostPage host={host} />
}
