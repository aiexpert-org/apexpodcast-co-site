import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

/**
 * Default OG image for Apex Podcast Co — 1200x630.
 *
 * Placeholder visual built from brand tokens (dark BG + orange accent +
 * Antonio-style display type). Brett to replace with a branded version
 * post-launch — see /public/og-default.png if a static override is needed.
 */
export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#131416",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          color: "#eeeeee",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#ff5a1c",
            fontWeight: 700,
          }}
        >
          <span>Apex Podcast Co</span>
          <span style={{ color: "#2a2d33" }}>·</span>
          <span style={{ color: "#8a8d93" }}>Built on PREPP</span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 86,
              lineHeight: 1.0,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: -1,
              maxWidth: 1040,
            }}
          >
            Your podcast should pay for itself in{" "}
            <span style={{ color: "#ff5a1c" }}>pipeline.</span>
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "#cfd1d6",
              maxWidth: 980,
            }}
          >
            Relationship-driven podcast production for leaders at eXp Realty
            and beyond.
          </div>
        </div>

        {/* PREPP letter row */}
        <div
          style={{
            display: "flex",
            gap: 32,
            paddingTop: 32,
            borderTop: "1px solid #2a2d33",
          }}
        >
          {["P", "R", "E", "P", "P"].map((l, i) => (
            <div
              key={i}
              style={{
                fontSize: 84,
                fontWeight: 800,
                color: "#ff5a1c",
                lineHeight: 1,
                letterSpacing: 2,
              }}
            >
              {l}
            </div>
          ))}
          <div
            style={{
              marginLeft: "auto",
              alignSelf: "flex-end",
              fontSize: 18,
              color: "#8a8d93",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            apexpodcast.co
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
