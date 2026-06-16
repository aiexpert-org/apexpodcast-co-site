import type { ReactNode } from 'react'
import { CoverMosaicBackground } from '@/components/ui/cover-mosaic'

/**
 * Inner-page hero, ported from the CCM PageIntro. A dark ink ground (the Apex
 * record-label register for interior pages) with the Show Wall of cover art
 * behind it, an ink gradient keeping the copy clean. eyebrow + display title +
 * lead, matching the existing interior hero rhythm so only the backdrop changes.
 */
export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-bone">
      <CoverMosaicBackground tone="dark" className="hidden md:block" />
      <div className="container-apex relative pb-20 pt-36 md:pb-24 md:pt-44">
        <p className="eyebrow-acid">{eyebrow}</p>
        <h1 className="display mt-6 max-w-4xl text-bone">{title}</h1>
        {children ? (
          <div className="lead mt-7 max-w-3xl text-bone/75">{children}</div>
        ) : null}
      </div>
    </section>
  )
}
