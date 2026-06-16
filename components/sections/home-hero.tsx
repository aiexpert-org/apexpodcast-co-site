import RotatingWord from '@/components/ui/rotating-word'
import CTACluster from '@/components/ui/cta-cluster'
import TapMark from '@/components/ui/tap-mark'
import AcidSwipe from '@/components/ui/acid-swipe'
import { CoverMosaicBackground, CoverMosaicMobile } from '@/components/ui/cover-mosaic'

/**
 * Home hero, ported to the CCM language: a full-bleed Show Wall of podcast cover
 * art behind a single column of copy on a bone ground. Cover art replaces CCM's
 * church-graphic tiles; acid is the only splash. The rotating word rides an acid
 * highlighter swipe (the CCM marker move, recolored), which keeps the accent
 * legible on bone where large acid type would wash out. The mosaic warms to full
 * color on the right and on hover; the bone gradient keeps the copy clean.
 */
export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-bone text-ink">
      <CoverMosaicBackground className="hidden md:block" />

      <div className="container-apex relative">
        <div className="max-w-2xl pb-16 pt-36 sm:pb-20 md:pt-44 lg:max-w-3xl">
          <div className="flex items-center gap-2.5">
            <TapMark className="h-5 w-5" />
            <p className="eyebrow-acid [text-shadow:0_0_10px_rgba(250,248,243,0.9)]">
              The Apex Podcast
            </p>
          </div>

          <h1 className="display mt-6 text-ink [text-shadow:0_1px_18px_rgba(250,248,243,0.85)]">
            Have a{' '}
            <span className="relative inline-block isolate">
              <AcidSwipe className="scale-x-100 opacity-100" />
              <span className="relative z-10">
                <RotatingWord colorClass="text-ink" />
              </span>
            </span>
            , we&rsquo;ll turn it into a show<span className="text-acid">.</span>
          </h1>

          <p className="lead mt-7 max-w-2xl text-ink/75 [text-shadow:0_0_12px_rgba(250,248,243,0.9)]">
            Hear it happen on The Apex Podcast. Every week, our producers sit down with an owner,
            operator, or leader and find the show inside what they have already built.
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink/60 [text-shadow:0_0_10px_rgba(250,248,243,0.9)]">
            Listening is free. So is coming on.
          </p>

          <CTACluster tone="light" className="mt-9" />

          {/* Mobile / stacked Show Wall, below the copy where the full-bleed
              wall is hidden. */}
          <CoverMosaicMobile className="mt-12 md:hidden" />
        </div>
      </div>
    </section>
  )
}
