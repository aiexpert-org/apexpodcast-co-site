import RotatingWord from '@/components/ui/rotating-word'
import PodcastPhone from '@/components/ui/podcast-phone'
import CTACluster from '@/components/ui/cta-cluster'
import TapMark from '@/components/ui/tap-mark'

/**
 * Podcast-first home hero (STRATEGY-V2 §3 + §3.5). The show is the product:
 * rotating-word headline, the phone playing The Apex Podcast, Listen as the
 * primary CTA. Rendered statically (above the fold) so it stays the LCP element.
 */
export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-bone">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-acid/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-apex relative">
        <div className="grid items-center gap-12 pb-20 pt-36 md:gap-16 md:pb-28 md:pt-44 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5">
              <TapMark className="h-5 w-5" />
              <p className="eyebrow-acid">The Apex Podcast</p>
            </div>
            <h1 className="display mt-6 text-bone">
              Have a <RotatingWord />, we&rsquo;ll turn it into a show
              <span className="text-acid">.</span>
            </h1>
            <p className="lead mt-7 max-w-2xl text-bone/70">
              Hear it happen on The Apex Podcast. Every week, Brett K Moore and Randy Highsmith sit
              down with an owner, operator, or leader and find the show inside what they have already
              built.
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-bone/55">
              Listening is free. So is coming on.
            </p>
            <CTACluster tone="dark" className="mt-9" />
          </div>

          <div className="lg:col-span-5">
            <PodcastPhone />
          </div>
        </div>
      </div>
    </section>
  )
}
