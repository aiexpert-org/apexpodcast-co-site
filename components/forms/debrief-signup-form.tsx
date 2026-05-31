'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { cn } from '@/lib/utils'

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  email: z.string().email('Enter a valid email'),
})

type FormValues = z.infer<typeof schema>

/**
 * The Debrief newsletter signup. Two fields, per COPY-SPEC §0.
 *
 * Submission endpoint is the GHL master sub-account form (tag: `debrief_footer`
 * or `debrief_network`). That endpoint is not wired yet, so for now the values
 * are logged and the success state shown. TODO: swap to GHL in the Phase 5 sweep.
 */
export default function DebriefSignupForm({
  source = 'debrief_footer',
  tone = 'dark',
}: {
  source?: 'debrief_footer' | 'debrief_network'
  tone?: 'dark' | 'light'
}) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  async function onSubmit(values: FormValues) {
    const parsed = schema.safeParse(values)
    if (!parsed.success) return
    // TODO: swap to GHL — POST to the GHL form endpoint with the `source` tag (Phase 5).
    console.log('[debrief signup]', { ...parsed.data, source })
    setSubmitted(true)
  }

  const inputClass = tone === 'dark' ? 'form-input-dark' : 'form-input'
  const labelClass = cn('font-mono uppercase text-xs tracking-widest', tone === 'dark' ? 'text-bone/55' : 'text-ink/55')
  const errorClass = 'mt-1 text-xs text-acid'

  if (submitted) {
    return (
      <p className={cn('text-sm', tone === 'dark' ? 'text-bone/70' : 'text-ink/70')}>
        You are on the list. We send The Debrief when there is something worth sending.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <div>
        <label htmlFor={`${source}-firstName`} className={cn(labelClass, 'sr-only')}>
          First name
        </label>
        <input
          id={`${source}-firstName`}
          type="text"
          placeholder="First name"
          className={inputClass}
          aria-invalid={errors.firstName ? 'true' : 'false'}
          {...register('firstName', { required: 'First name is required' })}
        />
        {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
      </div>
      <div>
        <label htmlFor={`${source}-email`} className={cn(labelClass, 'sr-only')}>
          Email
        </label>
        <input
          id={`${source}-email`}
          type="email"
          placeholder="Email"
          className={inputClass}
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /[^@\s]+@[^@\s]+\.[^@\s]+/, message: 'Enter a valid email' },
          })}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
        Subscribe
      </button>
    </form>
  )
}
