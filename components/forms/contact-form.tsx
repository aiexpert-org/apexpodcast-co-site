'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const INTEREST_OPTIONS = [
  'Your First Episode ($997)',
  'Your Weekly Show ($2,997/cycle)',
  'Multi-Tenant Pipeline License ($2,997/mo)',
  'Booking my show on Apex',
  'Becoming an affiliate',
  'Something else',
] as const

const schema = z.object({
  name: z.string().min(1, 'Your name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  interest: z.string().min(1, 'Pick one'),
  message: z.string().min(1, 'Tell us a little about your show'),
})

type FormValues = z.infer<typeof schema>

/**
 * Apex lead-capture contact form.
 *
 * TODO: swap to GHL — POST to the GHL master sub-account lead form
 * (QRzW1cp8gNa31VJDILvJ) in the Phase 5 sweep. Field mapping documented in
 * PHASE3-PLACEHOLDERS.md. For now the lead is queued to localStorage
 * (`apex_leads`) and the success state is shown so the flow is testable locally.
 */
export default function ContactForm() {
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
      existing.push({ form: 'contact', ...data, submittedAt: new Date().toISOString() })
      window.localStorage.setItem(key, JSON.stringify(existing))
    } catch {
      // localStorage unavailable (private mode); the mailto fallback still works.
    }
  }

  function onSubmit(values: FormValues) {
    const parsed = schema.safeParse(values)
    if (!parsed.success) return
    queueLead(parsed.data)
    // TODO: swap to GHL form POST (Phase 5).
    console.log('[apex contact lead]', parsed.data)
    setSubmitted(true)
  }

  const field =
    'w-full rounded-xl border border-ink/15 bg-bone px-4 py-3 text-ink placeholder-ink/45 focus:border-ink/40'
  const label = 'block font-mono text-xs uppercase tracking-widest text-ink/65'
  const errorClass = 'mt-1 text-xs text-ink/70'

  if (submitted) {
    return (
      <div className="rounded-3xl border border-ink/12 bg-bone p-8 md:p-10">
        <p className="font-display text-2xl text-ink">Thanks. We have it.</p>
        <p className="mt-3 text-ink/70">
          One of the producers will be in touch. If it is faster for you, email us directly at{' '}
          <a
            href="mailto:brett@apexpodcast.co"
            className="text-ink underline decoration-acid underline-offset-4 hover:text-ink/70"
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
      <div>
        <label htmlFor="contact-name" className={label}>
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          className={`mt-2 ${field}`}
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register('name', { required: 'Your name is required' })}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className={label}>
            Email
          </label>
          <input
            id="contact-email"
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
        <div>
          <label htmlFor="contact-phone" className={label}>
            Phone <span className="text-ink/40">(optional)</span>
          </label>
          <input id="contact-phone" type="tel" className={`mt-2 ${field}`} {...register('phone')} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-interest" className={label}>
          I&rsquo;m interested in
        </label>
        <select
          id="contact-interest"
          className={`mt-2 ${field}`}
          defaultValue=""
          aria-invalid={errors.interest ? 'true' : 'false'}
          {...register('interest', { required: 'Pick one' })}
        >
          <option value="" disabled>
            Pick one
          </option>
          {INTEREST_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        {errors.interest && <p className={errorClass}>{errors.interest.message}</p>}
      </div>

      <div>
        <label htmlFor="contact-message" className={label}>
          Tell us about your show or project
        </label>
        <textarea
          id="contact-message"
          rows={5}
          className={`mt-2 ${field}`}
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register('message', { required: 'Tell us a little about your show' })}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        Send it
      </button>
    </form>
  )
}
