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

// Flip to `true` once the Transistor feed is approved under "The Apex Podcast"
// and the per-episode listenUrl values point at real Transistor episode URLs.
// Until then the EpisodeCard renders Episode 001 as a real row alongside two
// pending scaffolds, which is more honest than three pending scaffolds.
export const episodesPublished = false

export const episodes: Episode[] = [
  {
    n: 1,
    title: 'Pentatype Intro',
    blurb:
      'Solo episode. A walkthrough of the Pentatype communication assessment, why it sits inside the producer-craft frame, and how it shapes the way we shape every Apex show.',
    duration: '20 min',
    date: '2026-06-02',
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
