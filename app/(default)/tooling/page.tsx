import type { Metadata } from 'next'
import { Container } from '@/components/ccm/container'
import { FadeIn, FadeInStagger } from '@/components/ccm/fade-in'
import { PageIntro } from '@/components/ccm/page-intro'
import { SectionIntro } from '@/components/ccm/section-intro'
import { ContactBlock } from '@/components/ccm/contact-block'

export const metadata: Metadata = {
  title: 'Tooling',
  description:
    'The Apex tooling stack. Two co-founder producers, a deep AI stack behind them. Riverside.fm consolidates recording, editing, and clipping. Zoom AI Companion, Wispr Flow, NotebookLM, ElevenLabs, Bannerbear, Claude, Suno, Transistor round out the production layer.',
  alternates: { canonical: '/tooling/' },
}

const STACK: { name: string; role: string; body: string }[] = [
  {
    name: 'Riverside.fm',
    role: 'Recording, editing, clipping',
    body: 'The consolidated production platform. Multi-track remote recording with a producer live on every session, Magic Editor for the long-form cut, Magic Clips for short-form. One platform from raw take to delivered episode.',
  },
  {
    name: 'Descript',
    role: 'Editing fallback',
    body: 'Optional fallback for transcript-driven cuts when a session needs it. Riverside Magic Editor is the default; Descript sits behind it for the cases where the producer wants a second pass.',
  },
  {
    name: 'Zoom AI Companion',
    role: 'Meeting capture',
    body: 'Recordings, transcripts, and summaries on every prep call and debrief. The producer reads the room and Zoom keeps the receipts.',
  },
  {
    name: 'Wispr Flow',
    role: 'Voice-first writing',
    body: 'Show notes, outreach drafts, and producer debriefs dictated at conversation speed. Faster than typing, and the voice register lands closer to how the producer actually thinks.',
  },
  {
    name: 'NotebookLM',
    role: 'Guest research',
    body: 'Pulls the longest-form material on a prospective guest and turns it into a Hot Ones-style one-pager the host can walk into the room with.',
  },
  {
    name: 'ElevenLabs',
    role: 'Voice + narration',
    body: 'The narrated network shows. Voice-clone work for show intros, audiogram narration, and the AI-native productions inside the Apex Podcast Network catalog.',
  },
  {
    name: 'Bannerbear',
    role: 'Cover variants + clips',
    body: 'Templated cover art, episode title cards, and short-form motion graphics generated from a single brief instead of a designer ticket.',
  },
  {
    name: 'Claude',
    role: 'Drafting + research synthesis',
    body: 'Editorial summaries, block-analysis audit drafts, episode angle exploration, and outreach drafting. Producer-edited before anything ships.',
  },
  {
    name: 'Suno',
    role: 'Music',
    body: 'Custom intro and outro music for shows that want a sound of their own. The licensed Apex brand kit is the default; Suno is the path when a host wants a bespoke score.',
  },
  {
    name: 'Transistor',
    role: 'Hosting + distribution',
    body: 'Every Apex show ships through Transistor under the Apex Podcast Network feed. Analytics, RSS, dynamic ad insertion, and the network rollups all live here.',
  },
]

export default function ToolingPage() {
  return (
    <>
      <PageIntro eyebrow="The tooling" title="Two producers. A deep AI stack behind them.">
        <p>
          Apex stays two people on purpose. Brett K Moore and Randy Highsmith
          are the producers in every session. An AI-native production stack
          carries everything that does not need a human in the room. This page
          is the stack.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-24">
        <FadeInStagger faster>
          <ul role="list" className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {STACK.map((tool) => (
              <FadeIn as="li" key={tool.name}>
                <article className="h-full rounded-3xl border border-neutral-200 p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="font-display text-2xl font-semibold tracking-tight text-neutral-950">
                      {tool.name}
                    </h2>
                    <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-cta)]">
                      {tool.role}
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-neutral-600">
                    {tool.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </ul>
        </FadeInStagger>
      </Container>

      <SectionIntro
        eyebrow="The point"
        title="Boutique quality, scaled by AI."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          The math only works because of the stack. The producer is in the room
          on every session, the network is around every release, and the work
          that used to need a junior team gets compressed into the tools. You
          pay for the producer and the network, not the agency overhead in
          between.
        </p>
      </SectionIntro>

      <ContactBlock heading="Ready to start?">
        <p>
          Apex takes on a small number of new shows each quarter. Leave your
          info and we&rsquo;ll reach out personally when a spot opens.
        </p>
      </ContactBlock>
    </>
  )
}
