import CtaLink from '@/components/ui/cta-link'
import Link from '@/components/ui/smart-link'
import PodcastPhone from '@/components/ui/podcast-phone'
import { siteConfig } from '@/lib/site-config'

/**
 * Home hero. Customer is the hero: a host who already has a sphere and wants a
 * show produced. Direct hook, specifics over adjectives, "sphere" woven in.
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
            <p className="eyebrow-acid">Done-for-you podcast production</p>
            <h1 className="display mt-6 text-bone">
              Have a sphere? We turn it into a show
              <span className="text-acid">.</span>
            </h1>
            <p className="lead mt-7 max-w-2xl text-bone/70">
              If you already have an audience, you don&rsquo;t need more marketing. You need
              production. We handle the pentatype intake, the questions, the recording, the edits, and
              the publishing. Your show ships, and your sphere hears you.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaLink href="/contact/" variant="primary" arrow>
                Tell us about your show
              </CtaLink>
              <CtaLink href={siteConfig.listen.anywhere} variant="ghost-dark">
                Listen to an episode
              </CtaLink>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <p className="font-mono text-xs uppercase tracking-widest text-bone/55">
                We&rsquo;ll tell you if it&rsquo;s a fit.
              </p>
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
