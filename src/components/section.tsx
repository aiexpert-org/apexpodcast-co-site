import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  as: As = "section",
  bleed = false,
}: {
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div" | "header" | "footer";
  bleed?: boolean;
}) {
  return (
    <As
      className={cn(
        "py-20 sm:py-28 lg:py-32",
        bleed && "py-0 sm:py-0 lg:py-0",
        className,
      )}
    >
      {children}
    </As>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}
