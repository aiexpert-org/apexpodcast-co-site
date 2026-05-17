import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-display uppercase tracking-wider font-semibold transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-background)] disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-accent)] text-[color:var(--color-accent-foreground)] hover:bg-[color:var(--color-accent-hover)]",
  outline:
    "border border-[color:var(--color-border)] text-[color:var(--color-foreground)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]",
  ghost:
    "text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  withArrow,
  children,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" aria-hidden /> : null}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  withArrow,
  children,
}: CommonProps & { href: string }) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" aria-hidden /> : null}
    </Link>
  );
}
