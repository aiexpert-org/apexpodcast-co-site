import Link from '@/components/ui/smart-link'
import ListenButtons from '@/components/ui/listen-buttons'
import PodcastPhone from '@/components/ui/podcast-phone'
import { siteConfig } from '@/lib/site-config'

/**
 * Podcast-first home hero. The show is the product: the phone-in-frame plays the
 * Apex Podcast cover, the headline lands the show, the primary CTA is Listen.
 * Rendered statically (above the fold) so it stays the LCP element.
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
            <p className="eyebrow-acid">Now playing</p>
            <h1 className="display mt-6 text-bone">
              The Apex Podcast
              <span className="text-acid">.</span>
            </h1>
            <p className="lead mt-7 max-w-2xl text-bone/70">
              Each episode goes inside the producer&rsquo;s seat, the network that carries a release, and
              the guests worth an hour of your time. Hosted by Brett K Moore and Randy Highsmith. New
              episodes land in the feed.
            </p>
            <ListenButtons tone="dark" className="mt-9" />
            <div className="mt-5">
              <Link
                href={siteConfig.pentatypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center font-mono text-xs uppercase tracking-widest text-bone/70 hover:text-acid"
              >
                Take your pentatype free
                <span
                  className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <PodcastPhone />
          </div>
        </div>
      </div>
    </section>
  )
}
