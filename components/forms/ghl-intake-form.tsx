'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { cn } from '@/lib/utils'

/**
 * Apex intake / signup form.
 *
 * This is the GoHighLevel intake surface. Per Brett (2026-06-14) the live GHL
 * form is wired in the morning. Two ways to make this live:
 *
 *   1. Native (current): a working form that captures the lead to localStorage
 *      (`apex_leads`) and the console, then shows the success state. To go live,
 *      POST `parsed.data` to the GHL form endpoint at the TODO below. The fields
 *      already map to the GHL spec (Section 1.6): firstName/lastName via `name`,
 *      `email`, `role`, `company`, `goal` ("what do you want to launch?"),
 *      `service` (service of interest).
 *
 *   2. Iframe embed: drop the GHL-generated embed in place of the <form> below.
 *      The placeholder is kept in a comment at the foot of this file so Brett can
 *      paste the real form ID and switch in one edit.
 *
 * GHL master sub-account location: QRzW1cp8gNa31VJDILvJ.
 */

const SERVICE_OPTIONS = [
  'The Prepisode ($997)',
  'Your Weekly Show ($2,997 per cycle)',
  'Apex Podcast Network ($997 per cycle)',
  'Multi-Tenant Pipeline License ($2,997/mo)',
  'Not sure yet',
] as const

const schema = z.object({
  name: z.string().min(1, 'Your name is required'),
  email: z.string().email('Enter a valid email'),
  role: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Pick one'),
  goal: z.string().min(1, 'Tell us what you want to launch'),
})

type FormValues = z.infer<typeof schema>

export default function GhlIntakeForm({
  defaultService,
  source = 'site_intake',
  tone = 'light',
}: {
  defaultService?: (typeof SERVICE_OPTIONS)[number]
  source?: string
  tone?: 'light' | 'dark'
}) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  function queueLead(data: FormValues) {
    if (typeof window === 'undefined') return
    try {
      const key = 'apex_leads'
      const existing = JSON.parse(window.localStorage.getItem(key) || '[]')
      existing.push({ form: source, ...data, submittedAt: new Date().toISOString() })
      window.localStorage.setItem(key, JSON.stringify(existing))
    } catch {
      // localStorage unavailable (private mode); the success state still shows.
    }
  }

  function onSubmit(values: FormValues) {
    const parsed = schema.safeParse(values)
    if (!parsed.success) return
    queueLead(parsed.data)
    // TODO: swap to GHL — POST parsed.data to the GHL form endpoint for location
    // QRzW1cp8gNa31VJDILvJ (form: Apex Production Apply). Map service -> service
    // of interest custom field. Brett wires the real endpoint on 2026-06-15.
    console.log('[apex intake]', { source, ...parsed.data })
    setSubmitted(true)
  }

  const dark = tone === 'dark'
  const field = cn(
    'w-full rounded-xl px-4 py-3 focus:outline-none',
    dark
      ? 'border border-bone/20 bg-bone/5 text-bone placeholder-bone/40 focus:border-acid/60'
      : 'border border-ink/15 bg-bone text-ink placeholder-ink/45 focus:border-ink/40',
  )
  const label = cn('block font-mono text-xs uppercase tracking-widest', dark ? 'text-bone/60' : 'text-ink/65')
  const errorClass = cn('mt-1 text-xs', dark ? 'text-acid' : 'text-ink/70')

  if (submitted) {
    return (
      <div
        className={cn(
          'rounded-3xl p-8 md:p-10',
          dark ? 'border border-bone/15 bg-bone/5 text-bone' : 'border border-ink/12 bg-bone text-ink',
        )}
      >
        <p className="font-display text-2xl">Thanks. We have it.</p>
        <p className={cn('mt-3', dark ? 'text-bone/70' : 'text-ink/70')}>
          One of the producers will be in touch. If it is faster for you, email{' '}
          <a
            href="mailto:brett@apexpodcast.co"
            className={cn('underline decoration-acid underline-offset-4', dark ? 'text-bone' : 'text-ink')}
          >
            brett@apexpodcast.co
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${source}-name`} className={label}>
            Name
          </label>
          <input
            id={`${source}-name`}
            type="text"
            className={`mt-2 ${field}`}
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name', { required: 'Your name is required' })}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor={`${source}-email`} className={label}>
            Email
          </label>
          <input
            id={`${source}-email`}
            type="email"
            className={`mt-2 ${field}`}
            aria-invalid={errors.email ? 'true' : 'false'}
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /[^@\s]+@[^@\s]+\.[^@\s]+/, message: 'Enter a valid email' },
            })}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${source}-role`} className={label}>
            Role <span className={dark ? 'text-bone/40' : 'text-ink/40'}>(optional)</span>
          </label>
          <input id={`${source}-role`} type="text" className={`mt-2 ${field}`} {...register('role')} />
        </div>
        <div>
          <label htmlFor={`${source}-company`} className={label}>
            Company <span className={dark ? 'text-bone/40' : 'text-ink/40'}>(optional)</span>
          </label>
          <input id={`${source}-company`} type="text" className={`mt-2 ${field}`} {...register('company')} />
        </div>
      </div>

      <div>
        <label htmlFor={`${source}-service`} className={label}>
          Service of interest
        </label>
        <select
          id={`${source}-service`}
          className={`mt-2 ${field}`}
          defaultValue={defaultService ?? ''}
          aria-invalid={errors.service ? 'true' : 'false'}
          {...register('service', { required: 'Pick one' })}
        >
          <option value="" disabled>
            Pick one
          </option>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor={`${source}-goal`} className={label}>
          What do you want to launch?
        </label>
        <textarea
          id={`${source}-goal`}
          rows={4}
          className={`mt-2 ${field}`}
          aria-invalid={errors.goal ? 'true' : 'false'}
          {...register('goal', { required: 'Tell us what you want to launch' })}
        />
        {errors.goal && <p className={errorClass}>{errors.goal.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full sm:w-auto">
        Send it
      </button>

      {/*
        GHL iframe alternative. When the live form is ready, replace the <form>
        above with:

        <iframe
          src="https://forms.gohighlevel.com/PLACEHOLDER_FORM_ID"  // TODO: real GHL form (location QRzW1cp8gNa31VJDILvJ)
          title="Apex intake"
          className="h-[640px] w-full rounded-2xl border-0"
          loading="lazy"
        />
      */}
    </form>
  )
}
