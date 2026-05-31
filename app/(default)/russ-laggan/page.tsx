import type { Metadata } from 'next'
import HostPage from '@/components/sections/host-page'
import { getHost } from '@/lib/hosts'

const host = getHost('russ-laggan')!

export const metadata: Metadata = {
  title: host.name,
  description: `${host.name}. ${host.tagline} Apply to be a guest on the show.`,
  alternates: { canonical: '/russ-laggan/' },
}

export default function RussLagganPage() {
  return <HostPage host={host} />
}
