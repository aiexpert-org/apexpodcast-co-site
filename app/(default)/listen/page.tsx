import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import ClosingCta from '@/components/sections/closing-cta'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Listen',
  description:
    'The Apex Podcast on Spotify, Apple Podcasts, and everywhere else. Real conversations with people who have something to say.',
  alternates: { canonical: '/listen/' },
}

const SELF = '/listen'

function platformHref(url: string): string {
  if (!url) return '/contact/'
  if (url === siteConfig.url + SELF || url === siteConfig.url + SELF + '/') {
    return '/contact/'
  }
  return url
}

export default function ListenPage() {
  const spotify = platformHref(siteConfig.listen.spotify)
  const apple = platformHref(siteConfig.listen.apple)
  const anywhere = platformHref(siteConfig.listen.anywhere)
  const transistor = platformHref(siteConfig.transistorUrl)

  return (
    <>
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">The Apex Podcast</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            Listen wherever you listen
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            Real conversations with people who have something to say. Listening is free. So is coming on the show.
          </p>
        </div>
      </section>

      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <p className="eyebrow">Pick a platform</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <PlatformCard name="Spotify" blurb="New episodes drop weekly." href={spotify} external />
            </Reveal>
            <Reveal delay={0.05}>
              <PlatformCard name="Apple Podcasts" blurb="New episodes drop weekly." href={apple} external />
            </Reveal>
            <Reveal delay={0.1}>
              <PlatformCard name="RSS" blurb="The Apex Podcast Network feed." href={transistor} external />
            </Reveal>
            <Reveal delay={0.15}>
              <PlatformCard name="Anywhere else" blurb="Pick the app you use." href={anywhere} external />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-bone pt-0">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">Want to come on?</p>
              <p className="mt-5 text-ink/75">
                We record with people who have something real to say. If that is you, coming on is free.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <CtaLink href="/contact/" variant="primary" arrow>
                  Apply to be on the show
                </CtaLink>
                <CtaLink href={siteConfig.pentatypeUrl} variant="ghost-light">
                  Take the Pentatype
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCta headline="Want a show of your own?" />
    </>
  )
}

function PlatformCard({
  name,
  blurb,
  href,
  external,
}: {
  name: string
  blurb: string
  href: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex h-full flex-col justify-between rounded-3xl border border-ink/12 bg-bone p-7 transition hover:border-ink/40 hover:bg-ink hover:text-bone"
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-ink/55 group-hover:text-bone/55">
          Platform
        </p>
        <h3 className="mt-3 font-display text-xl text-ink group-hover:text-bone">{name}</h3>
        <p className="mt-3 text-sm text-ink/70 group-hover:text-bone/70">{blurb}</p>
      </div>
      <p className="mt-6 inline-flex items-center font-mono text-xs uppercase tracking-widest text-ink group-hover:text-bone">
        Open
        <span className="ml-2" aria-hidden="true">&rarr;</span>
      </p>
    </a>
  )
}
