import CtaLink from '@/components/ui/cta-link'
import { siteConfig } from '@/lib/site-config'

/** The 2x2 letter grid (a p / e x) from the brand icon system, as an editorial mark. */
function LetterGrid() {
  return (
    <div
      className="grid aspect-square w-full max-w-sm grid-cols-2 gap-px overflow-hidden rounded-3xl border border-acid/25 bg-acid/10"
      aria-hidden="true"
    >
      {['a', 'p', 'e', 'x'].map((ch) => (
        <div key={ch} className="flex items-center justify-center bg-ink/40">
          <span className="font-display lowercase text-acid leading-none text-[clamp(3rem,10vw,6rem)]">
            {ch}
          </span>
        </div>
      ))}
    </div>
  )
}

/**
 * Home hero. Rendered statically (no reveal-on-mount) because it is entirely
 * above the fold: opacity-0 entrance animations here delay LCP for no real gain.
 * The signature hero motion (LCP-safe) lands in Phase 4.
 */
export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-bone">
      {/* soft acid wash */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-acid/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-apex relative">
        <div className="grid items-center gap-12 pb-20 pt-36 md:gap-16 md:pb-28 md:pt-44 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow-acid">Producer. Network. Cycle. Release.</p>
            <h1 className="display mt-6 text-bone">
              A producer in the room.
              <br />
              A network around your show
              <span className="text-acid">.</span>
            </h1>
            <p className="lead mt-7 max-w-2xl text-bone/70">
              Apex Podcast Co is a producer and a network. We tune a show to its host with the
              Pentatype methodology, we produce live during recording, and we publish into a feed
              where every Apex show carries the others. The work is the show. The network is the
              multiplier.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaLink href={siteConfig.discoveryUrl} variant="primary" arrow>
                Book a discovery call
              </CtaLink>
              <CtaLink href="/work/" variant="ghost-dark">
                See the work
              </CtaLink>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
              20 minutes. With Brett or Randy. No pitch deck.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="flex justify-center lg:justify-end">
              <LetterGrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
