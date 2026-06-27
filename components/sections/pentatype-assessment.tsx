'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import {
  CORE_LABEL,
  CORE_RESULT,
  CORE_TAGLINE,
  CORE_TINT,
  PART_1,
  PART_2,
  PART_3,
  STEPS,
  emptyScores,
  scorePentatype,
  type Core,
  type PentatypeAnswers,
  type PentatypeResult,
} from '@/lib/pentatype'

/**
 * Pentatype: Find Your Core (Podcasting Edition). Embedded on the home page.
 *
 * Multi-step form: 10 forced-choice → 3 stress-rank → 3 priority-rank → result
 * page with name + email capture. Scoring runs in the browser; the result POSTs
 * to /api/pentatype-webhook on email submit. Anchored at $149 ("normally $149,
 * free for the Apex community"); the actual paid Full Profile unlock lives on
 * pentatype.com.
 */

type Status = 'idle' | 'submitting' | 'done' | 'error'

const TOTAL_STEPS = STEPS.length // 16

export default function PentatypeAssessment() {
  const [started, setStarted] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<PentatypeAnswers>({
    forced: {},
    ranked: {},
  })
  const [result, setResult] = useState<PentatypeResult | null>(null)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [submitError, setSubmitError] = useState<string | null>(null)

  const step = STEPS[stepIndex]
  const isLastStep = stepIndex === TOTAL_STEPS - 1
  const isFirstStep = stepIndex === 0
  const progress = ((stepIndex + (result ? 1 : 0)) / TOTAL_STEPS) * 100

  const currentAnswered = useMemo(() => {
    if (!step) return false
    if (step.kind === 'forced') {
      return Boolean(answers.forced[step.question.id])
    }
    const order = answers.ranked[step.question.id]
    return Array.isArray(order) && order.length === step.question.options.length
  }, [step, answers])

  function start() {
    setStarted(true)
    setStepIndex(0)
    setAnswers({ forced: {}, ranked: {} })
    setResult(null)
    setStatus('idle')
    setSubmitError(null)
  }

  function next() {
    if (!currentAnswered) return
    if (isLastStep) {
      // Score and reveal the result.
      const r = scorePentatype(answers)
      setResult(r)
    } else {
      setStepIndex((i) => Math.min(TOTAL_STEPS - 1, i + 1))
    }
  }

  function back() {
    if (result) {
      setResult(null)
      return
    }
    setStepIndex((i) => Math.max(0, i - 1))
  }

  async function onCaptureSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!result) return
    const fn = firstName.trim()
    const em = email.trim()
    if (!fn) {
      setSubmitError('Add your first name.')
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) {
      setSubmitError('Add a valid email address.')
      return
    }
    setSubmitError(null)
    setStatus('submitting')
    try {
      const res = await fetch('/api/pentatype-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fn,
          email: em,
          primary: result.primary,
          scores: result.scores,
          stressScores: result.stressScores,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="pentatype"
      aria-labelledby="pentatype-heading"
      className="section bg-ink text-bone"
    >
      <div className="container-apex">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="max-w-md lg:sticky lg:top-28">
            <p className="font-mono text-xs uppercase tracking-widest text-acid">
              Free for the Apex community
            </p>
            <h2 id="pentatype-heading" className="mt-4 h-section text-bone">
              Find Your Podcast Core
              <span className="text-acid">.</span>
            </h2>
            <p className="mt-5 text-bone/75">
              The Pentatype is our communication assessment. It maps how you
              actually process the world, so the show fits the host instead of
              the host fighting the format. Sixteen questions, about four
              minutes, results on the spot.
            </p>
            <p className="mt-5 text-sm text-bone/55">
              Normally <span className="text-bone line-through decoration-acid">$149</span>{' '}
              on pentatype.com. Free here, on us. We use this assessment with
              every Apex host before the first recording.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-bone/70">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden="true" />
                <span>Connection. Structure. Conviction. Discovery. Meaning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden="true" />
                <span>Scores in the browser. Your answers do not leave your device until you decide.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden="true" />
                <span>Email your result if you want the producer notes that come with it.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-bone/15 bg-ink/40 p-6 backdrop-blur sm:p-10">
            {!started && (
              <Intro onStart={start} />
            )}

            {started && !result && step && (
              <div>
                <ProgressBar value={progress} index={stepIndex} total={TOTAL_STEPS} />

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={step.question.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                  >
                    {step.kind === 'forced' ? (
                      <ForcedQuestion
                        question={step.question}
                        value={answers.forced[step.question.id] ?? null}
                        onChange={(v) =>
                          setAnswers((a) => ({
                            ...a,
                            forced: { ...a.forced, [step.question.id]: v },
                          }))
                        }
                        partLabel={partLabelFor(step.question.id)}
                      />
                    ) : (
                      <RankedQuestion
                        question={step.question}
                        value={answers.ranked[step.question.id] ?? null}
                        onChange={(order) =>
                          setAnswers((a) => ({
                            ...a,
                            ranked: { ...a.ranked, [step.question.id]: order },
                          }))
                        }
                        partLabel={partLabelFor(step.question.id)}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={back}
                    disabled={isFirstStep}
                    className="font-mono text-xs uppercase tracking-widest text-bone/60 hover:text-acid disabled:opacity-30 disabled:hover:text-bone/60"
                  >
                    &larr; Back
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    disabled={!currentAnswered}
                    className={cn(
                      'btn btn-primary',
                      !currentAnswered && 'opacity-50',
                    )}
                  >
                    {isLastStep ? 'See my Core' : 'Next'}
                    <span aria-hidden="true" className="ml-2">&rarr;</span>
                  </button>
                </div>
              </div>
            )}

            {result && (
              <ResultPanel
                result={result}
                firstName={firstName}
                email={email}
                setFirstName={setFirstName}
                setEmail={setEmail}
                onSubmit={onCaptureSubmit}
                status={status}
                error={submitError}
                onRestart={start}
                onBack={back}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function partLabelFor(qid: string): string {
  if (PART_1.some((q) => q.id === qid)) return 'Part 1 / Choose one'
  if (PART_2.some((q) => q.id === qid)) return 'Part 2 / Rank most to least likely'
  if (PART_3.some((q) => q.id === qid)) return 'Part 3 / Rank most to least important'
  return ''
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-bone/55">
        Apex / Find Your Podcast Core
      </p>
      <h3 className="mt-3 font-display text-3xl leading-[1.06] tracking-tight text-bone">
        Sixteen questions. About four minutes.
      </h3>
      <p className="mt-5 text-bone/70">
        Ten forced choices, three stress scenarios, three priority rankings.
        Answer honestly, not aspirationally. Your Core is how you actually
        process the world, not how you wish you did.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {(['connection', 'structure', 'conviction', 'discovery', 'meaning'] as Core[])
          .slice(0, 4)
          .map((c) => (
            <CoreChip key={c} core={c} />
          ))}
        <CoreChip core="meaning" />
      </div>
      <button
        type="button"
        onClick={onStart}
        className="btn btn-primary mt-10"
      >
        Start the assessment
        <span aria-hidden="true" className="ml-2">&rarr;</span>
      </button>
    </div>
  )
}

function CoreChip({ core }: { core: Core }) {
  const t = CORE_TINT[core]
  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-2xl border border-bone/10 p-4',
        t.bg,
      )}
    >
      <span
        className={cn('mt-1 inline-block h-2 w-2 rounded-full', t.dot)}
        aria-hidden="true"
      />
      <div>
        <p className="font-display text-base text-bone">{CORE_LABEL[core]}</p>
        <p className="mt-0.5 text-xs text-bone/65">{CORE_TAGLINE[core]}</p>
      </div>
    </div>
  )
}

function ProgressBar({
  value,
  index,
  total,
}: {
  value: number
  index: number
  total: number
}) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div className="flex-1">
        <div className="h-1 w-full overflow-hidden rounded-full bg-bone/15">
          <div
            className="h-full bg-acid transition-[width] duration-300 ease-out"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
      <span className="font-mono text-xs uppercase tracking-widest text-bone/60">
        {index + 1} / {total}
      </span>
    </div>
  )
}

function ForcedQuestion({
  question,
  value,
  onChange,
  partLabel,
}: {
  question: (typeof PART_1)[number]
  value: 'a' | 'b' | null
  onChange: (v: 'a' | 'b') => void
  partLabel: string
}) {
  return (
    <fieldset>
      <legend className="font-mono text-xs uppercase tracking-widest text-acid">
        {partLabel}
      </legend>
      <p className="mt-4 font-display text-2xl leading-[1.15] text-bone sm:text-3xl">
        {question.prompt}
      </p>
      <div className="mt-7 grid gap-3">
        <Choice
          selected={value === 'a'}
          onClick={() => onChange('a')}
          label={question.a.label}
        />
        <Choice
          selected={value === 'b'}
          onClick={() => onChange('b')}
          label={question.b.label}
        />
      </div>
    </fieldset>
  )
}

function Choice({
  selected,
  onClick,
  label,
}: {
  selected: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        'group text-left rounded-2xl border px-5 py-4 transition',
        selected
          ? 'border-acid bg-acid/10 text-bone'
          : 'border-bone/20 text-bone/85 hover:border-bone/40 hover:bg-bone/[0.04]',
      )}
    >
      <span className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className={cn(
            'mt-1 inline-block h-3 w-3 shrink-0 rounded-full border transition',
            selected
              ? 'border-acid bg-acid'
              : 'border-bone/40 group-hover:border-bone/60',
          )}
        />
        <span className="text-base leading-snug">{label}</span>
      </span>
    </button>
  )
}

function RankedQuestion({
  question,
  value,
  onChange,
  partLabel,
}: {
  question: (typeof PART_2)[number]
  value: number[] | null
  onChange: (order: number[]) => void
  partLabel: string
}) {
  // value holds the user's order: an array of original option indices where
  // position 0 is "most likely / most important" and the last is "least."
  const order = value ?? []
  const remainingIndices = question.options
    .map((_, i) => i)
    .filter((i) => !order.includes(i))

  function pick(i: number) {
    onChange([...order, i])
  }
  function pop() {
    onChange(order.slice(0, -1))
  }

  return (
    <fieldset>
      <legend className="font-mono text-xs uppercase tracking-widest text-acid">
        {partLabel}
      </legend>
      <p className="mt-4 font-display text-2xl leading-[1.15] text-bone sm:text-3xl">
        {question.prompt}
      </p>
      <p className="mt-3 text-sm text-bone/60">
        Tap in order, from most to least. The next option to pick becomes your{' '}
        <span className="text-acid">
          {ordinal(order.length + 1)}
        </span>{' '}
        pick.
      </p>

      <ol className="mt-6 space-y-2">
        {order.map((i, rank) => (
          <li
            key={`${question.id}-${i}`}
            className="flex items-start gap-3 rounded-2xl border border-acid bg-acid/10 px-4 py-3 text-bone"
          >
            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-acid font-mono text-xs font-bold text-ink">
              {rank + 1}
            </span>
            <span className="text-sm leading-snug">{question.options[i].label}</span>
          </li>
        ))}
      </ol>

      {remainingIndices.length > 0 && (
        <ol className="mt-3 space-y-2">
          {remainingIndices.map((i) => (
            <li key={`${question.id}-pool-${i}`}>
              <button
                type="button"
                onClick={() => pick(i)}
                className="group flex w-full items-start gap-3 rounded-2xl border border-bone/20 px-4 py-3 text-left text-bone/85 transition hover:border-bone/40 hover:bg-bone/[0.04]"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bone/30 font-mono text-xs text-bone/60 group-hover:border-bone/60"
                >
                  {order.length + 1}
                </span>
                <span className="text-sm leading-snug">{question.options[i].label}</span>
              </button>
            </li>
          ))}
        </ol>
      )}

      {order.length > 0 && (
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={pop}
            className="font-mono text-xs uppercase tracking-widest text-bone/50 hover:text-acid"
          >
            Undo last pick
          </button>
        </div>
      )}
    </fieldset>
  )
}

function ordinal(n: number) {
  const j = n % 10
  const k = n % 100
  if (k >= 11 && k <= 13) return `${n}th`
  if (j === 1) return `${n}st`
  if (j === 2) return `${n}nd`
  if (j === 3) return `${n}rd`
  return `${n}th`
}

function ResultPanel({
  result,
  firstName,
  email,
  setFirstName,
  setEmail,
  onSubmit,
  status,
  error,
  onRestart,
  onBack,
}: {
  result: PentatypeResult
  firstName: string
  email: string
  setFirstName: (v: string) => void
  setEmail: (v: string) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  status: Status
  error: string | null
  onRestart: () => void
  onBack: () => void
}) {
  const max = useMemo(() => {
    let m = 0
    for (const c of Object.keys(result.scores) as Core[]) {
      m = Math.max(m, result.scores[c])
    }
    return m || 1
  }, [result.scores])
  const t = CORE_TINT[result.primary]

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-widest text-acid">
        Your Core
      </p>
      <h3 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-bone sm:text-5xl">
        {CORE_LABEL[result.primary]}
        <span className="text-acid">.</span>
      </h3>
      <p className="mt-4 text-bone/75">{CORE_TAGLINE[result.primary]}</p>

      <div className={cn('mt-6 rounded-2xl border border-bone/10 p-5', t.bg)}>
        <p className="text-sm leading-relaxed text-bone/85">
          {CORE_RESULT[result.primary]}
        </p>
      </div>

      <ScoreBars scores={result.scores} max={max} primary={result.primary} />

      {status === 'done' ? (
        <div className="mt-8 rounded-2xl border border-acid/40 bg-acid/10 p-5">
          <p className="font-display text-xl text-bone">
            Your result is on the way{firstName ? `, ${firstName}` : ''}.
          </p>
          <p className="mt-2 text-sm text-bone/75">
            Look for an email from brett@apexpodcast.co with your Core, a short
            producer note on what shows we tend to build around it, and the
            unlock link for the Full Profile on pentatype.com.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onRestart}
              className="btn btn-ghost-dark btn-sm"
            >
              Retake the assessment
            </button>
            <a
              href="https://pentatype.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Unlock the Full Profile
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 space-y-3" noValidate>
          <p className="font-mono text-xs uppercase tracking-widest text-bone/60">
            Want the producer notes on your Core?
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              required
              placeholder="First name"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={status === 'submitting'}
              className="form-input-dark"
            />
            <input
              type="email"
              required
              placeholder="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'submitting'}
              className="form-input-dark"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn btn-primary w-full sm:w-auto"
          >
            {status === 'submitting' ? 'Sending' : 'Email me my result'}
            <span aria-hidden="true" className="ml-2">&rarr;</span>
          </button>
          <div role="status" aria-live="polite">
            {error && (
              <p className="text-sm text-bone/80">{error}</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-bone/80">
                Something went wrong. Try again, or email brett@apexpodcast.co
                directly.
              </p>
            )}
          </div>
          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={onBack}
              className="font-mono text-xs uppercase tracking-widest text-bone/50 hover:text-acid"
            >
              &larr; Back to the last question
            </button>
            <button
              type="button"
              onClick={onRestart}
              className="font-mono text-xs uppercase tracking-widest text-bone/50 hover:text-acid"
            >
              Retake the assessment
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

function ScoreBars({
  scores,
  max,
  primary,
}: {
  scores: Record<Core, number>
  max: number
  primary: Core
}) {
  return (
    <div className="mt-8 space-y-2.5">
      {(Object.keys(CORE_LABEL) as Core[]).map((c) => {
        const pct = (scores[c] / max) * 100
        const isPrimary = c === primary
        const t = CORE_TINT[c]
        return (
          <div key={c} className="grid grid-cols-[7rem_1fr_3rem] items-center gap-3">
            <span
              className={cn(
                'font-mono text-xs uppercase tracking-widest',
                isPrimary ? 'text-bone' : 'text-bone/55',
              )}
            >
              {CORE_LABEL[c]}
            </span>
            <div className="h-2 w-full overflow-hidden rounded-full bg-bone/10">
              <div
                className={cn(
                  'h-full rounded-full transition-[width] duration-700 ease-out',
                  isPrimary ? 'bg-acid' : t.dot,
                )}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span
              className={cn(
                'font-mono text-xs tabular-nums',
                isPrimary ? 'text-acid' : 'text-bone/55',
              )}
            >
              {scores[c]}
            </span>
          </div>
        )
      })}
    </div>
  )
}

