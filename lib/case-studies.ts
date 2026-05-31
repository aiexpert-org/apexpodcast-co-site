/**
 * The three at-launch case-study clients (the Apex catalog, opened 2026).
 *
 * VOICE + HONESTY RULE: facts are sourced from `case-studies/<slug>/profile.md`
 * and `production-notes.md`. Nothing is invented. Where the source marks a field
 * TBD (show names for Austin and Russ, Pentatype results, representative episode
 * URLs, signed host quotes), the field is omitted and the detail page renders an
 * honest "not captured yet / pending sign-off / ships at episode eight" variant
 * rather than a fabricated value. See PHASE2-CONTENT-NEEDED.md for the unlock list.
 *
 * Card surfaces (Home featured trio, /work/ grid) use only the base fields. The
 * /work/<slug>/ detail page uses the full record.
 */

export type ProducerNote = {
  quote: string
  producer: string
  episodeTitle: string
  date: string
}

export type HostQuote = {
  quote: string
  /** A quote only renders on the live page once the host has signed off. */
  signedOff: boolean
}

export type CaseStudy = {
  slug: string
  catalog: string
  host: string
  show?: string
  /** Short, true positioning used on the cards. */
  positioning: string
  /** Producer in the room. Omitted until Brett assigns per client; renders "Apex". */
  producer?: 'Brett' | 'Randy'
  /** Who the host is. Conversational, sourced from profile.md. */
  hostBio: string
  /** Pentatype assessment result. None captured yet for any client. */
  pentatype?: string
  /** The editorial premise / cadence / audience, from production-notes.md. */
  showPremise: string
  /** A real pull quote from a written producer debrief. None on record yet. */
  producerNote?: ProducerNote
  /** Transistor episode embed URL for a representative release. None captured yet. */
  episodeEmbedUrl?: string
  /** Audits run every 8 episodes; none has shipped for the 2026 catalog yet. */
  auditShipped: boolean
  /** A signed host quote. Held back until signedOff is true. */
  hostQuote?: HostQuote
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'austin-cheviron',
    catalog: 'APX-001',
    host: 'Austin Cheviron',
    positioning: 'Author of The Money Puzzle. A money and finance show, in active production.',
    hostBio:
      'Austin Cheviron wrote The Money Puzzle. His show works the same lane the book does: money, finance, and the decisions that sit underneath both, for an audience trying to do better with what they earn.',
    showPremise:
      'A money and finance show in active production. Practical conversations in the same territory as The Money Puzzle, built for people who want to think more clearly about earning, keeping, and deciding.',
    auditShipped: false,
  },
  {
    slug: 'randy-highsmith',
    catalog: 'APX-002',
    host: 'Randy Highsmith',
    show: 'Sweeter After Difficulty',
    positioning: 'Emotional, identity-driven storytelling. The founder eating his own cooking.',
    hostBio:
      'Randy Highsmith is Brett\'s partner at Apex and the host of Sweeter After Difficulty. It is the clearest proof we have: the show a founder produces for himself, running the Apex playbook in real time.',
    showPremise:
      'Survival into thriving, hard truths, emotional recognition, and wisdom carried through story. Conversations that name the things people feel but rarely say out loud.',
    auditShipped: false,
  },
  {
    slug: 'russ-laggan',
    catalog: 'APX-003',
    host: 'Russ Laggan',
    positioning: 'VP of Training at eXp Realty. A weekly real estate leadership show.',
    hostBio:
      'Russ Laggan is VP of Training at eXp Realty and an author. His show speaks to real estate professionals about leadership, training, and the work of building a durable career in the business.',
    showPremise:
      'A weekly show for real estate professionals, recorded on Riverside with a producer in the room. Leadership and training from inside one of the largest brokerages in the business.',
    auditShipped: false,
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

/** The next entry in catalog order, wrapping around to the first. */
export function getNextCaseStudy(slug: string): CaseStudy {
  const i = caseStudies.findIndex((c) => c.slug === slug)
  return caseStudies[(i + 1) % caseStudies.length]
}
