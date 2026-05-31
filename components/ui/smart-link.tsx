import Link from 'next/link'
import type { ComponentProps } from 'react'
import { isLiveRoute } from '@/lib/site-config'

/**
 * next/link wrapper that disables prefetch for internal routes that are not yet
 * built (phased rollout). Prevents RSC-prefetch 404s in the console while later
 * phases are still pending. Live routes (see liveRoutes) prefetch normally.
 */
export default function SmartLink({
  href,
  prefetch,
  ...props
}: ComponentProps<typeof Link>) {
  const hrefStr = typeof href === 'string' ? href : ''
  const isInternal = hrefStr.startsWith('/')
  const resolvedPrefetch =
    prefetch !== undefined ? prefetch : isInternal && !isLiveRoute(hrefStr) ? false : undefined

  return <Link href={href} prefetch={resolvedPrefetch} {...props} />
}
