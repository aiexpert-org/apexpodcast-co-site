import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/how-it-works", priority: 0.9, changeFrequency: "monthly" },
  { path: "/podcast-content-os", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pilot", priority: 0.95, changeFrequency: "monthly" },
  { path: "/flagship", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.85, changeFrequency: "monthly" },
  { path: "/case-studies", priority: 0.85, changeFrequency: "monthly" },
  { path: "/case-studies/austin-cheviron", priority: 0.7, changeFrequency: "monthly" },
  { path: "/case-studies/russ-laggan", priority: 0.7, changeFrequency: "monthly" },
  { path: "/case-studies/randy-highsmith", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/apply", priority: 0.95, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: `${siteConfig.url}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
