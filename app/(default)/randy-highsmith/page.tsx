import type { Metadata } from 'next'
import HostPage from '@/components/sections/host-page'
import { getHost } from '@/lib/hosts'

const host = getHost('randy-highsmith')!

export const metadata: Metadata = {
  title: host.name,
  description: `${host.name}. ${host.tagline} Apply to be a guest on the show.`,
  alternates: { canonical: '/randy-highsmith/' },
}

export default function RandyHighsmithPage() {
  return <HostPage host={host} />
}
