import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { PUBLIC_SHOWS } from '@/lib/shows'

/**
 * The catalog as a dark panel band. Mirrors the Studio template's "Clients"
 * band pattern: rounded-4xl dark surface, eyebrow header with a hairline,
 * staggered grid of panels. Apex variant carries the three real shows as
 * cover-art panels, each linking out to the show's Transistor page.
 */
export function CatalogPanel() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-40">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white uppercase sm:text-left">
            The catalog
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3"
          >
            {PUBLIC_SHOWS.map((show) => (
              <li key={show.slug}>
                <FadeIn>
                  <Link
                    href={show.listenUrl ?? `/case-studies/${show.slug}/`}
                    target={show.listenUrl ? '_blank' : undefined}
                    rel={show.listenUrl ? 'noopener noreferrer' : undefined}
                    className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-cta)]"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/10">
                      <Image
                        src={show.cover}
                        alt={show.title}
                        fill
                        sizes="(min-width: 640px) 28vw, 90vw"
                        className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <p className="mt-5 font-display text-base font-semibold tracking-tight text-white">
                      {show.title}
                    </p>
                    {show.host && (
                      <p className="mt-1 text-sm text-neutral-400">
                        {show.host}
                      </p>
                    )}
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}
