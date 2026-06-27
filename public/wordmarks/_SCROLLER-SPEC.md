# apexpodcast.co Network Scroller Component Spec

_Authored 2026-06-18. Consumed by the parallel apex site rebuild task. Lives in `website/components/` once implemented._

## Purpose

Communicate the breadth of the Apex Podcast Network on the apexpodcast.co landing page without forcing a user to read a catalog. The scroller is the "look how many shows we run" moment, sitting in a dark-block section labeled something like "Shows in the network."

## Visual layout

Full-bleed dark block. Section background Ink #14140F. Two rows of show wordmark cards, drifting in opposite directions. The block sits below the hero, above the network catalog grid.

Section vertical padding 96 px desktop / 64 px mobile. Above the rows, a small label: "Shows in the network" in Space Mono regular, 14 px, Stone #C4BDB1, letter-spacing 6.5 px, all-caps. Below the rows, an optional secondary line: "More launching through 2026" in Space Mono, 11 px, Stone, same letter-spacing.

## Logo cards

Each card holds one wordmark SVG and is anchored to a clickable link. Card dimensions 320 x 80 desktop, 256 x 64 mobile. The SVG inside is set to `width="100%"` with `preserveAspectRatio="xMidYMid meet"` so it scales cleanly inside the card without distortion. Card gap 24 px desktop / 16 px mobile.

The 17 wordmarks ship as three variants. The scroller consumes two:
- Resting: `wordmark-white-on-ink.svg`
- Hover: `wordmark-acid-on-ink.svg`

Implementation tip: do not crossfade two separate SVGs at hover. Instead, ship the white-on-ink as the base and use CSS to recolor the graphic primitive on hover. The generator wraps every glyph in `<g class="glyph">` and every wordmark in `<g class="wordmark">`, so a CSS rule like `.show-card:hover .glyph * { fill: var(--acid); stroke: var(--acid); }` flips the graphic to Acid #BFD93B while leaving the wordmark Bone. This avoids a network round trip and a layout shift.

Several glyphs combine `fill` (filled circles, rects, polygons) with `stroke` (open arcs, lines). The CSS rule must address both attributes to recolor cleanly. The clock face is the canonical example: a stroked outer ring plus a filled center pip. The rule `.glyph * { fill: var(--acid); stroke: var(--acid); }` covers both.

## Motion

Two rows. Top row drifts left-to-right at a constant 28 px/sec. Bottom row drifts right-to-left at 28 px/sec. Speeds intentionally identical so the rows feel paired, not chaotic.

Implementation: each row is a flex container holding the 17 wordmarks duplicated twice (34 cards total per row) so the animation can loop seamlessly. The animation is a single `transform: translateX(...)` keyframe; pixel-based duration calculated from total row width to keep velocity constant regardless of card count.

```css
.row {
  display: flex;
  gap: 24px;
  width: max-content;
  animation: drift-left 60s linear infinite;
}
.row.reverse {
  animation: drift-right 60s linear infinite;
}
@keyframes drift-left {
  from { transform: translateX(0); }
  to   { transform: translateX(calc(-1 * var(--row-half-width))); }
}
@keyframes drift-right {
  from { transform: translateX(calc(-1 * var(--row-half-width))); }
  to   { transform: translateX(0); }
}
```

`--row-half-width` is computed in JS on mount as the total width of the FIRST 17 cards plus their gaps. The animation translates by exactly half the doubled row, which lines the next iteration up at the seam.

## Hover behavior

`:hover` on the section (not on individual cards) pauses both row animations. This lets a user freeze the scroller and read titles before clicking. CSS:

```css
.scroller:hover .row { animation-play-state: paused; }
```

`:hover` on an individual card recolors the glyph to Acid as described above. Both effects compose: hovering a card freezes both rows AND tints that card's glyph.

The wordmark stays Bone on hover. Only the graphic primitive shifts. This is intentional per the brand brief.

`prefers-reduced-motion: reduce` halts the drift animation entirely (set `animation: none` on `.row`) and lets the user scroll horizontally to browse instead. The hover-tint behavior still works.

## Click behavior

Each wordmark is wrapped in an `<a>`. The link target depends on launch state:
- Launched on Transistor: link to the show's listen page (`/shows/{slug}/`).
- Pre-launch: link to the "Coming Soon" page (`/shows/{slug}/coming-soon/`).

A simple `data-launched="true|false"` attribute on the card lets a single component handle both cases. The launch matrix should source from the same JSON manifest that drives the Network catalog grid.

```tsx
<a
  href={launched ? `/shows/${slug}/` : `/shows/${slug}/coming-soon/`}
  data-launched={launched}
  className="show-card"
  aria-label={`${display} ${launched ? 'show page' : 'coming soon'}`}
>
  <img src={`/wordmarks/${slug}/wordmark-white-on-ink.svg`} alt="" />
</a>
```

Accessibility: each link carries an `aria-label` because the SVG decoratively repeats the show name; the SVG itself uses `aria-hidden="true"` (which the generator currently does NOT set; the generator outputs `role="img"` with an `aria-label` on the SVG, which is fine when the SVG IS the only content of the link, but conflicts with a parent `aria-label`). For scroller use the cleanest pattern is to let the `<a>` carry the label and add `aria-hidden="true"` to the SVG; the parallel site task should adjust the IMG tag accordingly.

## Mobile

Below 768 px: collapse to a single row with horizontal swipe (no auto-drift). `overflow-x: auto`, `scroll-snap-type: x mandatory`, snap on each card. Hover-recolor still works on touch via `:active`. Reduce gap to 16 px. Card height 64 px (the SVG holds its 4:1 ratio).

Two-row stacking on mobile is also acceptable if data shows users want to see more at once, but single-row swipe is simpler and matches the cover-art carousel in the show-detail pages.

## Performance

17 cards x 2 (doubled for seamless loop) x 2 rows = 68 SVG elements in the DOM. Each SVG is under 2KB inline; total payload under 140KB raw, well below the 200KB first-load JS floor in the HQ tech stack.

Inline the SVGs server-side in the rendered HTML rather than loading 17 individual `<img>` files. The Next.js component should fs-read the SVG at build time and inject the markup directly. This eliminates 34 network requests and lets the CSS recolor rule reach the glyph element. Acceptable tradeoff: rebuilding 17 wordmarks means a rebuild; given they regenerate from `_GENERATOR.py` and rarely change, that's fine.

Animation runs on `transform` only (GPU-accelerated). Avoid `left` or `margin` animation.

## Failure modes to design for

If a wordmark SVG fails to load, the card should collapse to zero width rather than show a broken-image icon, because the scroller's pixel-precise loop math depends on every card existing. A simple `onError` handler on the `<img>` (if not inlined) sets `display: none`.

If JS is disabled, the scroller falls back to a static grid of 17 cards in their resting state, no animation. The CSS animation is keyframe-only so it works without JS for the basic drift, but the `--row-half-width` calculation needs JS to be precise. The fallback grid is acceptable degradation.

## Network catalog page

The same wordmark SVGs power the Network catalog page (`/network/`), where they appear as larger cards (~480 x 120) in a static grid above each show's description. The catalog uses the `ink-on-bone` variant on a Bone section background; the resting state on a dark hero block on the same page uses the `white-on-ink` variant. Both variants ship from the same generator.

## Asset paths

Final deployed paths in the Next.js repo:

```
public/wordmarks/
  the-brief/
    wordmark-white-on-ink.svg
    wordmark-ink-on-bone.svg
    wordmark-acid-on-ink.svg
  etymon/
    ...
```

The build step that copies `brand/2026-06-18-17-show-wordmarks/<slug>/` to `website/public/wordmarks/<slug>/` should be a single `cp -r` (or `rsync`). Add it to the site repo's build script so a generator rerun followed by a site rebuild ships the updates.

## Open questions for the site task

1. Should the section label use "Shows in the network" or "The Apex Podcast Network"? The cover-art brief uses the latter as the catalog frame; the scroller label is shorter and more direct. Recommend the shorter framing here; the catalog page can carry the longer one.
2. Where in the page does the scroller sit? Below the hero or below the lead testimonial block? The site copy task and the design system reference both have hierarchy implications. Default to below the hero unless the rebuild task surfaces a reason to move it.
3. Are pre-launch shows ALWAYS visible in the scroller, or only after a launch date is set? Recommend: visible from the moment a show has a slug in the JSON manifest, with the `Coming Soon` page being the soft-launch destination. This lets the scroller hold network breadth even before all 17 shows go live.
