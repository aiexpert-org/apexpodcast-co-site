'use client'

import { useMemo, useState } from 'react'
import ShowCover from '@/components/ui/show-cover'
import { cn } from '@/lib/utils'
import { CORE_LABEL, CORE_TINT, CORES, type Core } from '@/lib/pentatype'
import type { Show } from '@/lib/shows'
import type { TransistorShow } from '@/lib/transistor'

/**
 * Network catalog grid. Pulled from the static SHOWS list and enriched with
 * Transistor metadata where the server-side fetch returned data. Carries an
 * optional Pentatype Core filter (Connection / Structure / Conviction /
 * Discovery / Meaning) per the v4 producer-craft frame.
 */
export default function NetworkCatalog({
  shows,
  transistorBySlug,
}: {
  shows: Show[]
  transistorBySlug: Record<string, TransistorShow | null>
}) {
  const [coreFilter, setCoreFilter] = useState<Core | 'all'>('all')
  const [statusFilter, setStatusFilter] = useState<'all' | 'live' | 'coming-soon'>('all')

  const filtered = useMemo(() => {
    return shows.filter((s) => {
      if (coreFilter !== 'all' && s.core !== coreFilter) return false
      if (statusFilter !== 'all' && s.status !== statusFilter) return false
      return true
    })
  }, [shows, coreFilter, statusFilter])

  const liveCount = shows.filter((s) => s.status === 'live').length
  const comingCount = shows.filter((s) => s.status === 'coming-soon').length

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-ink/60">
          {liveCount} live / {comingCount} coming soon
        </p>
        <div className="flex flex-wrap gap-2">
          <FilterChip
            active={statusFilter === 'all'}
            onClick={() => setStatusFilter('all')}
          >
            All
          </FilterChip>
          <FilterChip
            active={statusFilter === 'live'}
            onClick={() => setStatusFilter('live')}
          >
            Live
          </FilterChip>
          <FilterChip
            active={statusFilter === 'coming-soon'}
            onClick={() => setStatusFilter('coming-soon')}
          >
            Coming Soon
          </FilterChip>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pb-12">
        <FilterChip
          active={coreFilter === 'all'}
          onClick={() => setCoreFilter('all')}
        >
          Every Core
        </FilterChip>
        {CORES.map((c) => (
          <FilterChip
            key={c}
            active={coreFilter === c}
            onClick={() => setCoreFilter(c)}
            core={c}
          >
            {CORE_LABEL[c]}
          </FilterChip>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="font-mono text-xs uppercase tracking-widest text-ink/55">
          Nothing matches that filter yet. Reset to see the full catalog.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((show) => (
            <CatalogCard
              key={show.slug}
              show={show}
              transistor={transistorBySlug[show.slug] ?? null}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
  core,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  core?: Core
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'btn-sm group font-mono uppercase tracking-widest',
        active
          ? 'bg-ink text-bone hover:brightness-95'
          : 'border border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink',
      )}
    >
      {core && (
        <span
          aria-hidden="true"
          className={cn(
            'mr-2 inline-block h-1.5 w-1.5 rounded-full',
            CORE_TINT[core].dot,
          )}
        />
      )}
      {children}
    </button>
  )
}

function CatalogCard({
  show,
  transistor,
}: {
  show: Show
  transistor: TransistorShow | null
}) {
  const isLive = show.status === 'live'
  const tint = CORE_TINT[show.core]
  const description = transistor?.description?.trim() || show.excerpt
  const listenUrl =
    show.listenUrl ?? transistor?.spotifyUrl ?? transistor?.appleUrl ?? transistor?.websiteUrl ?? null

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-square overflow-hidden rounded-2xl ring-1 ring-ink/10">
        {transistor?.imageUrl && isLive ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={transistor.imageUrl}
            alt={show.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <ShowCover show={show} />
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-acid/0 mix-blend-multiply transition duration-500 group-hover:bg-acid/12"
        />
      </div>

      <div className="mt-5 flex grow flex-col">
        <div className="flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-widest text-ink/55">
          <span>{show.catalog}</span>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 ring-1',
              tint.bg,
              tint.ring,
            )}
          >
            <span className={cn('inline-block h-1.5 w-1.5 rounded-full', tint.dot)} />
            {CORE_LABEL[show.core]}
          </span>
          {!isLive && <span className="text-ink/40">Coming Soon</span>}
        </div>

        <h3 className="mt-3 font-display text-xl leading-tight tracking-tight text-ink">
          {show.title}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink/55">
          {show.host ?? 'Apex Catalog'}
        </p>
        {show.hitComparable && (
          <p className="mt-1 text-xs italic text-ink/50">{show.hitComparable}</p>
        )}

        <p className="mt-4 grow text-sm leading-relaxed text-ink/70">
          {description}
        </p>

        {isLive && listenUrl && (
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.7rem] uppercase tracking-widest">
            <a
              href={listenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/listen inline-flex items-center text-ink hover:text-acid"
            >
              Listen
              <span
                aria-hidden="true"
                className="ml-2 transition-transform duration-200 group-hover/listen:translate-x-0.5"
              >
                &rarr;
              </span>
            </a>
            {transistor?.appleUrl && (
              <a
                href={transistor.appleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/55 hover:text-acid"
              >
                Apple
              </a>
            )}
            {transistor?.spotifyUrl && (
              <a
                href={transistor.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/55 hover:text-acid"
              >
                Spotify
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
