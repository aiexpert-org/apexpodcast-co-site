import { siteConfig } from '@/lib/site-config'

/**
 * The Apex Podcast episodes.
 *
 * SCAFFOLD: no real episodes are wired yet, so these are explicit placeholder
 * rows (no fabricated titles, guests, or dates). When the Transistor feed is
 * integrated, replace these with real data and flip `episodesPublished`. The
 * EpisodeCard component renders either state.
 */

export type Episode = {
  n: number
  title: string
  blurb: string
  duration: string
  date: string
  listenUrl: string
}

export const episodesPublished = false

export const episodes: Episode[] = [
  {
    n: 1,
    title: '[Episode 1 title pending]',
    blurb: '[Episode summary pending feed]',
    duration: '[--:--]',
    date: '[Date]',
    listenUrl: siteConfig.listen.anywhere,
  },
  {
    n: 2,
    title: '[Episode 2 title pending]',
    blurb: '[Episode summary pending feed]',
    duration: '[--:--]',
    date: '[Date]',
    listenUrl: siteConfig.listen.anywhere,
  },
  {
    n: 3,
    title: '[Episode 3 title pending]',
    blurb: '[Episode summary pending feed]',
    duration: '[--:--]',
    date: '[Date]',
    listenUrl: siteConfig.listen.anywhere,
  },
]
