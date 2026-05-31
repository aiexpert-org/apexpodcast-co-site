'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Your name is required'),
  email: z.string().email('Enter a valid email'),
  outlet: z.string().optional(),
  pitch: z.string().min(1, 'A sentence or two helps'),
})

type FormValues = z.infer<typeof schema>

/**
 * "Apply to be a guest" form on the host press-kit pages.
 *
 * TODO: swap to GHL — POST to the Apex GHL master sub-account with the tag
 * `Guest Applicant — {hostName}` (Phase 5). Field mapping in PHASE3-PLACEHOLDERS.md.
 * For now the application is queued to localStorage (`apex_guest_applications`).
 */
export default function GuestApplicationForm({ hostName }: { hostName: string }) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const tag = `Guest Applicant — ${hostName}`

  function onSubmit(values: FormValues) {
    const parsed = schema.safeParse(values)
    if (!parsed.success) return
    if (typeof window !== 'undefined') {
      try {
        const key = 'apex_guest_applications'
        const existing = JSON.parse(window.localStorage.getItem(key) || '[]')
        existing.push({ tag, ...parsed.data, submittedAt: new Date().toISOString() })
        window.localStorage.setItem(key, JSON.stringify(existing))
      } catch {
        // localStorage unavailable; non-fatal.
      }
    }
    // TODO: swap to GHL form POST with tag (Phase 5).
    console.log('[apex guest application]', { tag, ...parsed.data })
    setSubmitted(true)
  }

  const field =
    'w-full rounded-xl border border-ink/15 bg-bone px-4 py-3 text-ink placeholder-ink/45 focus:border-ink/40'
  const label = 'block font-mono text-xs uppercase tracking-widest text-ink/65'
  const errorClass = 'mt-1 text-xs text-ink/70'

  if (submitted) {
    return (
      <div className="rounded-3xl border border-ink/12 bg-bone p-8">
        <p className="font-display text-xl text-ink">Application in.</p>
        <p className="mt-3 text-ink/70">
          A producer reviews guest applications for {hostName}&rsquo;s show and replies if there is a
          fit.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="guest-name" className={label}>
            Name
          </label>
          <input
            id="guest-name"
            type="text"
            className={`mt-2 ${field}`}
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name', { required: 'Your name is required' })}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="guest-email" className={label}>
            Email
          </label>
          <input
            id="guest-email"
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
      <div>
        <label htmlFor="guest-outlet" className={label}>
          Your company or show <span className="text-ink/40">(optional)</span>
        </label>
        <input id="guest-outlet" type="text" className={`mt-2 ${field}`} {...register('outlet')} />
      </div>
      <div>
        <label htmlFor="guest-pitch" className={label}>
          Why you would be a good guest
        </label>
        <textarea
          id="guest-pitch"
          rows={4}
          className={`mt-2 ${field}`}
          aria-invalid={errors.pitch ? 'true' : 'false'}
          {...register('pitch', { required: 'A sentence or two helps' })}
        />
        {errors.pitch && <p className={errorClass}>{errors.pitch.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        Apply to be a guest
      </button>
    </form>
  )
}
