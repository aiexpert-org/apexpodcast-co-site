/**
 * Pentatype Podcasting Edition — Find Your Core (v1.0).
 *
 * Source: 01-Businesses/Pentatype/research/source-from-brettkmoore-gmail/
 *         07-podcasting-find-your-core-v1.0.md
 * Scoring methodology: same source + 01-find-your-core-v5.0.md.
 *
 * Five Cores: Connection (THM), Structure (PTR), Conviction (MID),
 * Discovery (RNG), Meaning (PNK).
 *
 * Scoring: Part 1 = 1 pt per choice (max 4/dim).
 *          Part 2 = inverse rank: 1st = 5 pts down to 5th = 1 pt (max 15/dim).
 *          Part 3 = same inverse rank (max 15/dim). Total max 34/dim.
 * Tie-break by Part 2 (stress) scores — most diagnostic of Core processing.
 *
 * Owned by Pentatype the company (Brett K Moore + Russ Laggan 50/50).
 * Licensed to Apex Podcast Co under the partnership terms.
 */

export type Core = 'connection' | 'structure' | 'conviction' | 'discovery' | 'meaning'

export const CORES: Core[] = ['connection', 'structure', 'conviction', 'discovery', 'meaning']

export const CORE_LABEL: Record<Core, string> = {
  connection: 'Connection',
  structure: 'Structure',
  conviction: 'Conviction',
  discovery: 'Discovery',
  meaning: 'Meaning',
}

export const CORE_FINGER: Record<Core, string> = {
  connection: 'Thumb',
  structure: 'Pointer',
  conviction: 'Middle',
  discovery: 'Ring',
  meaning: 'Pinkie',
}

export const CORE_TAGLINE: Record<Core, string> = {
  connection: 'You process through relationships, empathy, and emotional resonance.',
  structure: 'You process through systems, organization, and closing open loops.',
  conviction: 'You process through testing, challenging, and pressure-testing ideas.',
  discovery: 'You process through curiosity, investigation, and uncovering the unknown.',
  meaning: 'You process through reflection, philosophy, and the search for significance.',
}

export const CORE_RESULT: Record<Core, string> = {
  connection:
    'Your Core is Connection. You read the room first, build rapport on air, and an episode lands for you when the guest opens up and the audience feels it with you. The risk: gentleness over candor. The strength: people trust you on a microphone faster than they trust almost anyone else. Your best shows are intimate, real, and full of the warmth that only comes when the host genuinely wants to know the person on the other side.',
  structure:
    'Your Core is Structure. You plan the arc before the recording, run a tight outline, and an episode lands for you when the segments work and the takeaways are clean. The risk: too much rails, not enough room for the unexpected. The strength: the show is reliable, listenable, and produces value every week without fail. Your best shows are the ones a busy operator can play on a commute and walk away with a useful move.',
  conviction:
    'Your Core is Conviction. You press, push back, and pressure-test claims because the audience deserves an honest conversation. An episode lands for you when a guest sharpens a position under heat. The risk: friction that turns combative. The strength: you cut through the polite veneer that most podcasts settle for. Your best shows are the ones that change how a listener thinks about something they previously took for granted.',
  discovery:
    'Your Core is Discovery. You follow the thread, dig past the press kit, and an episode lands for you when something surfaces that nobody saw coming, including you. The risk: rabbit holes the audience does not follow. The strength: you find the story under the story. Your best shows are the ones that uncover a detail or angle no other show in your space has surfaced.',
  meaning:
    'Your Core is Meaning. You ask the bigger question, hold the longer view, and an episode lands for you when the conversation arrives at something true about being human. The risk: drifting into abstraction. The strength: depth that almost no other show offers. Your best shows are the ones that shift a listener\'s perspective in a way that stays with them long after the episode ends.',
}

export type ForcedChoice = {
  id: string
  prompt: string
  a: { label: string; core: Core }
  b: { label: string; core: Core }
}

export type RankScenario = {
  id: string
  prompt: string
  options: { label: string; core: Core }[]
}

/** Part 1 — forced choices. */
export const PART_1: ForcedChoice[] = [
  {
    id: 'q1',
    prompt: 'Preparing for an interview with a new guest. First instinct:',
    a: { label: 'Learn about them as a person, build genuine rapport on air.', core: 'connection' },
    b: { label: 'Research their work thoroughly, outline a clear question flow.', core: 'structure' },
  },
  {
    id: 'q2',
    prompt: 'Guest says something you know is wrong during a live recording:',
    a: { label: 'Gently redirect so the guest feels supported while the audience still gets the truth.', core: 'connection' },
    b: { label: 'Push back directly because the audience deserves an honest conversation.', core: 'conviction' },
  },
  {
    id: 'q3',
    prompt: 'What makes an episode memorable:',
    a: { label: 'A moment where the guest opened up and the audience felt the vulnerability.', core: 'connection' },
    b: { label: 'An unexpected revelation nobody saw coming, including you.', core: 'discovery' },
  },
  {
    id: 'q4',
    prompt: 'Your best episodes tend to:',
    a: { label: 'Leave people feeling more connected to each other.', core: 'connection' },
    b: { label: 'Leave people questioning something they previously took for granted.', core: 'meaning' },
  },
  {
    id: 'q5',
    prompt: 'The conversation is going off track:',
    a: { label: 'Guide it back to the planned structure so the episode stays focused.', core: 'structure' },
    b: { label: 'Let it go further because the tension is revealing something interesting.', core: 'conviction' },
  },
  {
    id: 'q6',
    prompt: 'Developing a new episode concept:',
    a: { label: 'Map out the full episode arc with clear segments and transitions.', core: 'structure' },
    b: { label: 'Follow a thread of curiosity and see where the conversation naturally leads.', core: 'discovery' },
  },
  {
    id: 'q7',
    prompt: 'You want your show to be known for:',
    a: { label: 'The most well-organized, reliable source of information in its lane.', core: 'structure' },
    b: { label: 'A show that changes how people think about your topic.', core: 'meaning' },
  },
  {
    id: 'q8',
    prompt: 'A guest just made a bold claim:',
    a: { label: 'Challenge it and see if it holds up.', core: 'conviction' },
    b: { label: 'Dig deeper to understand the evidence and the story behind it.', core: 'discovery' },
  },
  {
    id: 'q9',
    prompt: 'Which gives you more energy as a podcaster:',
    a: { label: 'A spirited debate where both sides sharpen their positions.', core: 'conviction' },
    b: { label: 'A quiet moment where the conversation reaches something profoundly true.', core: 'meaning' },
  },
  {
    id: 'q10',
    prompt: 'The episodes you are most proud of:',
    a: { label: 'Uncovered a story or detail nobody else in your space had found.', core: 'discovery' },
    b: { label: 'Arrived at a deeper truth about the human experience.', core: 'meaning' },
  },
]

/** Part 2 — stress scenarios, rank 1 (most likely) to 5 (least likely). */
export const PART_2: RankScenario[] = [
  {
    id: 'q11',
    prompt: 'Your guest cancels 30 minutes before a live recording. You would most likely:',
    options: [
      { label: 'Call someone from your network and pull them in.', core: 'connection' },
      { label: 'Pull out a backup outline and run that instead.', core: 'structure' },
      { label: 'Go solo and riff on a hot take you have been sitting on.', core: 'conviction' },
      { label: 'Deep dive into a topic you have been researching.', core: 'discovery' },
      { label: 'Record a reflective solo on the lesson or the bigger picture.', core: 'meaning' },
    ],
  },
  {
    id: 'q12',
    prompt: 'Mid-interview, the conversation is boring. You would most likely:',
    options: [
      { label: 'Share something personal to invite the guest to drop their guard.', core: 'connection' },
      { label: 'Pivot to a different outline section.', core: 'structure' },
      { label: 'Hit them with a provocative question to force them out of comfort.', core: 'conviction' },
      { label: 'Ask an unexpected angle they have never been asked before.', core: 'discovery' },
      { label: 'Pause and ask what they really care about underneath the topic.', core: 'meaning' },
    ],
  },
  {
    id: 'q13',
    prompt: 'A listener publicly criticizes your show. You would most likely:',
    options: [
      { label: 'Reach out to understand what they are actually feeling.', core: 'connection' },
      { label: 'Review recent data and show structure for patterns.', core: 'structure' },
      { label: 'Defend the creative direction you have committed to.', core: 'conviction' },
      { label: 'Investigate the criticism for something you missed.', core: 'discovery' },
      { label: 'Reflect on whether the show is still aligned with its original purpose.', core: 'meaning' },
    ],
  },
]

/** Part 3 — priority rankings, rank 1 (most important) to 5 (least). */
export const PART_3: RankScenario[] = [
  {
    id: 'q14',
    prompt: 'Why you podcast. Rank from most to least true for you:',
    options: [
      { label: 'Building meaningful relationships.', core: 'connection' },
      { label: 'A well-produced, reliable show.', core: 'structure' },
      { label: 'A platform to challenge ideas and hold people accountable.', core: 'conviction' },
      { label: 'Uncovering stories nobody else covers.', core: 'discovery' },
      { label: 'Exploring topics that matter, for lasting impact.', core: 'meaning' },
    ],
  },
  {
    id: 'q15',
    prompt: 'Preparing for an important interview. Rank what matters most:',
    options: [
      { label: 'Knowing the guest enough to make them comfortable.', core: 'connection' },
      { label: 'A tight outline that covers everything.', core: 'structure' },
      { label: 'The toughest questions that push the guest to be real.', core: 'conviction' },
      { label: 'An angle nobody else has explored with this guest.', core: 'discovery' },
      { label: 'The deeper meaning the conversation could have for the audience.', core: 'meaning' },
    ],
  },
  {
    id: 'q16',
    prompt: 'What you want the audience to walk away with. Rank from most to least important:',
    options: [
      { label: 'An intimate, real conversation they felt part of.', core: 'connection' },
      { label: 'Clear, actionable takeaways.', core: 'structure' },
      { label: 'The confidence to question something they previously accepted.', core: 'conviction' },
      { label: 'New information or an untold story.', core: 'discovery' },
      { label: 'A shift in perspective that stays with them.', core: 'meaning' },
    ],
  },
]

export type Scores = Record<Core, number>

export function emptyScores(): Scores {
  return { connection: 0, structure: 0, conviction: 0, discovery: 0, meaning: 0 }
}

export type PentatypeAnswers = {
  /** Part 1: question id to 'a' or 'b'. */
  forced: Record<string, 'a' | 'b'>
  /** Part 2 + Part 3: question id to ordered list of option indices (top to bottom). */
  ranked: Record<string, number[]>
}

export type PentatypeResult = {
  scores: Scores
  primary: Core
  /** Per-dimension Part 2 score, used for tie-break and shown on the result. */
  stressScores: Scores
}

export function scorePentatype(answers: PentatypeAnswers): PentatypeResult {
  const scores = emptyScores()
  const part1 = emptyScores()
  const part2 = emptyScores()
  const part3 = emptyScores()

  // Part 1: forced choice, 1 pt per choice.
  for (const q of PART_1) {
    const pick = answers.forced[q.id]
    if (pick === 'a' || pick === 'b') {
      const core = q[pick].core
      part1[core] += 1
    }
  }

  // Part 2 + Part 3: inverse rank scoring.
  // The `ranked` value is an array of option indices in user order (top = rank 1).
  // Points: rank 1 → 5, rank 2 → 4, rank 3 → 3, rank 4 → 2, rank 5 → 1.
  const applyRanked = (qs: RankScenario[], target: Scores) => {
    for (const q of qs) {
      const order = answers.ranked[q.id]
      if (!Array.isArray(order) || order.length !== q.options.length) continue
      for (let rank = 0; rank < order.length; rank++) {
        const optionIndex = order[rank]
        const opt = q.options[optionIndex]
        if (!opt) continue
        const pts = q.options.length - rank // 5..1 for a 5-option list
        target[opt.core] += pts
      }
    }
  }
  applyRanked(PART_2, part2)
  applyRanked(PART_3, part3)

  for (const c of CORES) {
    scores[c] = part1[c] + part2[c] + part3[c]
  }

  // Primary core: highest total, tie-break by Part 2 (stress) score.
  let primary: Core = 'connection'
  let best = -1
  let bestStress = -1
  for (const c of CORES) {
    if (scores[c] > best || (scores[c] === best && part2[c] > bestStress)) {
      primary = c
      best = scores[c]
      bestStress = part2[c]
    }
  }

  return { scores, primary, stressScores: part2 }
}

export type StepKind = 'forced' | 'ranked'

export type Step =
  | { kind: 'forced'; question: ForcedChoice }
  | { kind: 'ranked'; question: RankScenario }

export const STEPS: Step[] = [
  ...PART_1.map((q) => ({ kind: 'forced' as const, question: q })),
  ...PART_2.map((q) => ({ kind: 'ranked' as const, question: q })),
  ...PART_3.map((q) => ({ kind: 'ranked' as const, question: q })),
]

/** Color tint used on Network catalog cards + result page. */
export const CORE_TINT: Record<Core, { ring: string; bg: string; dot: string }> = {
  connection: {
    ring: 'ring-rose-500/60',
    bg: 'bg-rose-500/10',
    dot: 'bg-rose-500',
  },
  structure: {
    ring: 'ring-sky-500/60',
    bg: 'bg-sky-500/10',
    dot: 'bg-sky-500',
  },
  conviction: {
    ring: 'ring-amber-500/60',
    bg: 'bg-amber-500/10',
    dot: 'bg-amber-500',
  },
  discovery: {
    ring: 'ring-emerald-500/60',
    bg: 'bg-emerald-500/10',
    dot: 'bg-emerald-500',
  },
  meaning: {
    ring: 'ring-violet-500/60',
    bg: 'bg-violet-500/10',
    dot: 'bg-violet-500',
  },
}
