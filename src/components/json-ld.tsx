import { siteConfig } from "@/lib/site-config";

/**
 * JSON-LD structured data for Apex Podcast Co.
 * Apex is a services business, so we use ProfessionalService (not LocalBusiness).
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    founder: siteConfig.founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.role,
    })),
    serviceType: "Podcast production and distribution",
    areaServed: { "@type": "Country", name: "United States" },
    knowsAbout: [
      "Podcast production",
      "Podcast editing",
      "Podcast distribution",
      "Short-form video clipping",
      "Riverside.fm production",
      "Real estate brand building",
      "eXp Realty",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
