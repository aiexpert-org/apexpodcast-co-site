import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site-config";

/**
 * PREPP icon row — the brand's signature visual.
 * Five large letter-marks (P · R · E · P · P) in orange on dark.
 * Antonio display font, uppercase, tight tracking.
 *
 * Used on: Home, /how-it-works, /services, /pricing.
 */
export function PreppIconRow({
  className,
  withLabels = true,
  withTaglines = false,
  linkToHowItWorks = true,
}: {
  className?: string;
  withLabels?: boolean;
  withTaglines?: boolean;
  linkToHowItWorks?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-5 gap-3 sm:gap-5",
        withTaglines && "sm:grid-cols-5 grid-cols-1",
        className,
      )}
      aria-label="The PREPP framework: Plan, Record, Edit, Publish, Promote"
    >
      {siteConfig.prepp.map((stage, idx) => {
        const inner = (
          <div className="group flex flex-col items-center text-center">
            <div
              className={cn(
                "font-display text-[color:var(--color-accent)] leading-none select-none",
                "text-[clamp(3rem,8vw,5.5rem)] sm:text-[clamp(3.5rem,7vw,6rem)]",
                "transition-transform group-hover:-translate-y-1",
              )}
            >
              {stage.letter}
            </div>
            {withLabels ? (
              <div className="mt-2 font-display text-xs sm:text-sm uppercase tracking-[0.18em] text-[color:var(--color-foreground)]">
                {stage.name}
              </div>
            ) : null}
            {withTaglines ? (
              <p className="mt-3 text-sm text-[color:var(--color-muted)] max-w-[22ch] leading-snug">
                {stage.tagline}
              </p>
            ) : null}
          </div>
        );

        return linkToHowItWorks ? (
          <Link
            key={`${stage.letter}-${idx}`}
            href="/how-it-works"
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] rounded-sm"
          >
            {inner}
          </Link>
        ) : (
          <div key={`${stage.letter}-${idx}`}>{inner}</div>
        );
      })}
    </div>
  );
}

/** Single PREPP letter-mark — for inline use in PREPP stage section headers. */
export function PreppLetter({
  letter,
  className,
}: {
  letter: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "font-display text-[color:var(--color-accent)] leading-none select-none",
        className,
      )}
    >
      {letter}
    </span>
  );
}
