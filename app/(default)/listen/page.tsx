import type { Metadata } from 'next'
import { Reveal } from '@/components/motion/reveal'
import CtaLink from '@/components/ui/cta-link'
import ClosingCta from '@/components/sections/closing-cta'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Listen',
  description:
    'The Apex Podcast on Spotify, Apple Podcasts, and every other listening surface. Listening is free, your pentatype is free, and coming on the show is free.',
  alternates: { canonical: '/listen/' },
}

/**
 * /listen is the platform landing page. CTAs across the site (“Listen on Spotify”,
 * “Apple Podcasts”, “Listen anywhere”) point here. The buttons wire to
 * siteConfig.listen.* with a contact-form fallback for any link still set to the
 * /listen self-reference (so nothing dead-ends while the show is approved on the
 * podcast platforms). Replace the listen URLs in site-config when the real
 * Spotify, Apple Podcasts, and Transistor all-platforms URLs are issued.
 */

const SELF = '/listen'

function platformHref(url: string): string {
  // Treat a URL that still resolves to the /listen page itself (the Phase 3
  // placeholder pattern) as “not yet wired” and fall back to the contact route
  // so the link still does something useful.
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
      {/* Hero */}
      <section className="bg-ink text-bone">
        <div className="container-apex pb-20 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow-acid">The Apex Podcast</p>
          <h1 className="display mt-6 max-w-4xl text-bone">
            Listen wherever you listen
            <span className="text-acid">.</span>
          </h1>
          <p className="lead mt-7 max-w-3xl text-bone/70">
            The Apex Podcast on Spotify, Apple Podcasts, and every other listening surface. Listening
            is free, your pentatype is free, and coming on the show is free.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-bone/55">
            Season 1: The Pentatype Communication Codes. Episode 001, Pentatype Intro, shipped 2026-06-02.
          </p>
        </div>
      </section>

      {/* Platform buttons */}
      <section className="section bg-bone">
        <div className="container-apex">
          <Reveal>
            <p className="eyebrow">Pick your platform.</p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <PlatformCard
                name="Spotify"
                blurb="Subscribe on Spotify. New episodes drop weekly."
                href={spotify}
                external
              />
            </Reveal>
            <Reveal delay={0.05}>
              <PlatformCard
                name="Apple Podcasts"
                blurb="Subscribe on Apple Podcasts. New episodes drop weekly."
                href={apple}
                external
              />
            </Reveal>
            <Reveal delay={0.1}>
              <PlatformCard
                name="Transistor RSS"
                blurb="The Apex Podcast Network feed direct from Transistor."
                href={transistor}
                external
              />
            </Reveal>
            <Reveal delay={0.15}>
              <PlatformCard
                name="Listen anywhere"
                blurb="The all-platforms page. Pick the app you use."
                href={anywhere}
                external
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* About the show */}
      <section className="section bg-bone pt-0">
        <div className="container-apex">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">About the show.</p>
              <p className="mt-5 text-ink/75">
                The Apex Podcast is the show where our producers sit down with an owner, operator, or
                leader and find the show inside what they have already built. Two on-air segments
                anchor every episode: your Pentatype, read live, and a producer-led best-memory and
                worst-memory exercise. The recording is the conversation.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <CtaLink href="/" variant="primary" arrow>
                  See the show
                </CtaLink>
                <CtaLink href={siteConfig.pentatypeUrl} variant="ghost-light" external>
                  Take the Pentatype
                </CtaLink>
                <CtaLink href="/contact/" variant="ghost-light">
                  Apply to be on the show
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
