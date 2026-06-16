'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Join the wait list. Ported from the CCM wait-list modal. A self-contained
 * button that opens a Dialog with a short form. Submissions queue to
 * localStorage ('apex_waitlist') for now; the GHL wiring is a TODO (see
 * site-config CTA placeholders). Acid is the only splash.
 */
export default function JoinWaitlistButton({
  source = 'unknown',
  tone = 'light',
  size = 'md',
  className,
  label = 'Join the wait list',
}: {
  source?: string
  tone?: 'light' | 'dark'
  size?: 'sm' | 'md'
  className?: string
  label?: string
}) {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const entry = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      idea: String(form.get('idea') || ''),
      source,
      at: new Date().toISOString(),
    }
    try {
      const key = 'apex_waitlist'
      const prev = JSON.parse(localStorage.getItem(key) || '[]')
      prev.push(entry)
      localStorage.setItem(key, JSON.stringify(prev))
    } catch {
      /* no-op */
    }
    setDone(true)
  }

  const sizeClass = size === 'sm' ? 'btn-sm' : 'btn'
  const trigger =
    tone === 'dark'
      ? `${sizeClass} btn-ghost-dark`
      : `${sizeClass} btn-primary`

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={cn(trigger, 'group', className)}>
        {label}
        <span
          className="ml-2 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          &rarr;
        </span>
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-[60]">
        <div className="fixed inset-0 bg-ink/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-lg rounded-3xl bg-bone p-8 shadow-2xl ring-1 ring-ink/10">
            <div className="flex items-start justify-between gap-4">
              <DialogTitle className="h-sub text-ink">
                {done ? 'You’re on the list.' : 'Join the wait list.'}
              </DialogTitle>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink/60 hover:bg-ink/5 hover:text-ink"
                aria-label="Close"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {done ? (
              <p className="mt-4 text-ink/75">
                Thanks. A producer will reach out by email when a spot opens. Apex takes on a small
                number of new shows each cycle, so the cap is the point.
              </p>
            ) : (
              <>
                <p className="mt-3 text-ink/70">
                  Tell us what you want to launch. A producer picks it up from there. No pitch deck,
                  no obligation.
                </p>
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="form-input"
                    autoComplete="name"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="form-input"
                    autoComplete="email"
                  />
                  <textarea
                    name="idea"
                    rows={3}
                    placeholder="What do you want to make a show about? (optional)"
                    className="form-textarea"
                  />
                  <button type="submit" className="btn btn-primary w-full">
                    Join the wait list
                  </button>
                </form>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
