import Link from "next/link";
import { Container } from "./container";
import { siteConfig } from "@/lib/site-config";

const footerNav = [
  {
    heading: "The Work",
    links: [
      { href: "/how-it-works", label: "PREPP Framework" },
      { href: "/podcast-content-os", label: "Manifesto" },
      { href: "/case-studies", label: "Case Studies" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services", label: "All Tiers" },
      { href: "/pilot", label: "The Pilot — $997" },
      { href: "/flagship", label: "Flagship — Podcast Content OS" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/apply", label: "Apply" },
      { href: `mailto:${siteConfig.contact.email}`, label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[color:var(--color-background)]">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-lg tracking-[0.18em] text-[color:var(--color-foreground)]"
            >
              <span className="text-[color:var(--color-accent)]">APEX</span>{" "}
              PODCAST CO
            </Link>
            <p className="mt-5 max-w-sm text-sm text-[color:var(--color-muted)] leading-relaxed">
              A relationship-building engine that happens to manifest as a
              podcast. Built for leaders at eXp Realty and beyond.
            </p>
            <p className="mt-6 text-xs text-[color:var(--color-muted)]">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-[color:var(--color-accent)] transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.heading}>
              <h4 className="font-display text-xs uppercase tracking-[0.22em] text-[color:var(--color-foreground)]">
                {group.heading}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-[color:var(--color-border)] pt-6 text-xs text-[color:var(--color-muted)]">
          <p>
            © {year} {siteConfig.name}. A 50/50 partnership between Brett
            Moore + Randy Highsmith.
          </p>
          <p className="font-display tracking-[0.2em] uppercase">
            Plan · Record · Edit · Publish · Promote
          </p>
        </div>
      </Container>
    </footer>
  );
}
