import TapMark from '@/components/ui/tap-mark'

/**
 * Phone-in-frame hero visual (lifts the Cruip Podcast template's phone element),
 * showing The Apex Podcast cover art on screen with a now-playing UI and the TAP
 * motif. Pure CSS + brand tokens, fully static (no JS, LCP-safe). aria-hidden.
 */
export default function PodcastPhone() {
  return (
    <div className="mx-auto w-full max-w-[17rem] lg:ml-auto lg:mr-0" aria-hidden="true">
      <div className="rounded-[2.6rem] border border-bone/15 bg-ink p-3 shadow-2xl shadow-black/40">
        <div className="overflow-hidden rounded-[2rem] bg-ink ring-1 ring-bone/10">
          {/* notch */}
          <div className="flex justify-center pt-3">
            <div className="h-1.5 w-16 rounded-full bg-bone/20" />
          </div>

          <div className="px-5 pb-6 pt-5">
            {/* cover art */}
            <div className="relative flex aspect-square flex-col justify-between overflow-hidden rounded-2xl bg-ink p-5 ring-1 ring-acid/20">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-acid/15 blur-2xl"
              />
              <div className="flex items-start justify-between">
                <span className="font-display lowercase text-acid">apex.</span>
                <TapMark className="h-7 w-7" />
              </div>
              <div>
                <p className="font-display leading-[0.95] text-bone text-[1.6rem]">
                  the apex
                  <br />
                  podcast
                  <span className="text-acid">.</span>
                </p>
              </div>
            </div>

            {/* now playing */}
            <div className="mt-5">
              <p className="font-display text-base text-bone">The Apex Podcast</p>
              <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-widest text-bone/55">
                Brett K Moore + Randy Highsmith
              </p>

              {/* progress */}
              <div className="mt-4 h-1 w-full rounded-full bg-bone/15">
                <div className="h-1 w-1/3 rounded-full bg-acid" />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[0.55rem] text-bone/45">
                <span>12:04</span>
                <span>38:20</span>
              </div>

              {/* controls */}
              <div className="mt-4 flex items-center justify-center gap-7">
                <span className="text-bone/55 text-sm">&#9664;&#9664;</span>
                <TapMark className="h-11 w-11" />
                <span className="text-bone/55 text-sm">&#9654;&#9654;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
