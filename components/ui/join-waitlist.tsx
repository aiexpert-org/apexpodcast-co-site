'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Join the waitlist. CCM modal pattern, recolored to the Apex acid palette.
 *
 * Five visible fields: first name, last name, email, phone, optional
 * affiliate code. Hidden fields: source CTA id, timestamp, current page URL,
 * honeypot. Submissions POST to /api/waitlist-webhook, which forwards to
 * the Google Sheet Apps Script Web App (and best-effort writes a GHL
 * contact). Until Brett swaps in the real URL, the route succeeds silently.
 *
 * The subhead is the Brett + Randy line, verbatim.
 */
export default function JoinWaitlistButton({
  source = 'unknown',
  tone = 'light',
  size = 'md',
  className,
  label = 'Join the waitlist',
  variant = 'primary',
}: {
  source?: string
  tone?: 'light' | 'dark'
  size?: 'sm' | 'md'
  className?: string
  label?: string
  variant?: 'primary' | 'ghost'
}) {
  const [open, setOpen] = useState(false)

  const sizeClass = size === 'sm' ? 'btn-sm' : 'btn'
  const trigger =
    variant === 'ghost'
      ? `${sizeClass} ${tone === 'dark' ? 'btn-ghost-dark' : 'btn-ghost-light'}`
      : tone === 'dark'
        ? `${sizeClass} btn-ghost-dark`
        : `${sizeClass} btn-primary`

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(trigger, 'group', className)}
      >
        {label}
        <span
          className="ml-2 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          &rarr;
        </span>
      </button>

      <WaitlistDialog open={open} onClose={() => setOpen(false)} source={source} />
    </>
  )
}

type Status = 'idle' | 'submitting' | 'done' | 'error'

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

function WaitlistDialog({
  open,
  onClose,
  source,
}: {
  open: boolean
  onClose: () => void
  source: string
}) {
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)

  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [affiliateCode, setAffiliateCode] = useState('')

  useEffect(() => {
    if (open) {
      setStatus('idle')
      setError(null)
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setAffiliateCode('')
    }
  }, [open])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const honey = (form.elements.namedItem('company') as HTMLInputElement | null)?.value
    if (honey) {
      setStatus('done')
      return
    }

    const fn = firstName.trim()
    const ln = lastName.trim()
    const em = email.trim()
    const ph = phone.trim()
    if (!fn || !ln) {
      setError('Enter your first and last name.')
      return
    }
    if (!EMAIL_RE.test(em)) {
      setError('Enter a valid email address.')
      return
    }
    if (ph.replace(/\D/g, '').length < 7) {
      setError('Enter a phone number we can reach you at.')
      return
    }
    setError(null)
    setStatus('submitting')

    try {
      const res = await fetch('/api/waitlist-webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fn,
          lastName: ln,
          email: em,
          phone: ph,
          affiliateCode: affiliateCode.trim(),
          sourceCtaId: source,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Dialog open={open} onClose={onClose} className="relative z-[120]">
      <div className="fixed inset-0 bg-ink/70 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-end justify-center p-3 sm:items-center sm:p-6">
        <DialogPanel
          ref={dialogRef}
          aria-labelledby={titleId}
          className="w-full max-w-lg rounded-3xl bg-bone p-6 shadow-2xl ring-1 ring-ink/10 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <DialogTitle id={titleId} className="h-sub text-ink">
              {status === 'done' ? 'You’re on the list.' : 'Join the waitlist.'}
            </DialogTitle>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink/60 hover:bg-ink/5 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acid"
              aria-label="Close"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {status === 'done' ? (
            <div className="mt-2">
              <p className="text-ink/75">
                Thanks for adding your name. We will reach out by email when a
                spot opens. The waitlist is how we keep the producer cap honest.
              </p>
              <p className="mt-5 font-mono text-xs uppercase tracking-widest text-ink/55">
                Looking forward to building it with you. &mdash; Brett + Randy
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-primary w-full sm:w-auto"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-ink/55">
                Looking forward to building it with you. &mdash; Brett + Randy
              </p>

              <form onSubmit={onSubmit} noValidate className="mt-6 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    required
                    name="firstName"
                    placeholder="First name"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value)
                      if (error) setError(null)
                    }}
                    disabled={status === 'submitting'}
                    className="form-input"
                  />
                  <input
                    type="text"
                    required
                    name="lastName"
                    placeholder="Last name"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value)
                      if (error) setError(null)
                    }}
                    disabled={status === 'submitting'}
                    className="form-input"
                  />
                </div>

                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError(null)
                  }}
                  disabled={status === 'submitting'}
                  className="form-input"
                />

                <input
                  type="tel"
                  required
                  name="phone"
                  placeholder="Phone"
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    if (error) setError(null)
                  }}
                  disabled={status === 'submitting'}
                  className="form-input"
                />

                <input
                  type="text"
                  name="affiliateCode"
                  placeholder="Affiliate code (e.g. jesserhodesjr2026, optional)"
                  autoComplete="off"
                  value={affiliateCode}
                  onChange={(e) => setAffiliateCode(e.target.value)}
                  disabled={status === 'submitting'}
                  className="form-input"
                />

                {/* Honeypot. Bots fill this, real users never see it. */}
                <div aria-hidden="true" className="hidden">
                  <label>
                    Company
                    <input
                      type="text"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary mt-3 w-full"
                >
                  {status === 'submitting' ? 'Saving' : 'Save my spot'}
                  <span aria-hidden="true" className="ml-2">&rarr;</span>
                </button>

                <div role="status" aria-live="polite">
                  {error && (
                    <p className="mt-2 text-sm text-ink/70">{error}</p>
                  )}
                  {status === 'error' && (
                    <p className="mt-2 text-sm text-ink/70">
                      Something went wrong. Try again, or email brett@apexpodcast.co
                      directly.
                    </p>
                  )}
                </div>
              </form>
            </>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  )
}
