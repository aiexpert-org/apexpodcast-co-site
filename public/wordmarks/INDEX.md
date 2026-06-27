# Apex Podcast Network 17-Show Wordmark System

_Authored 2026-06-18. Companion to the 20-show cover-art system at `../2026-06-16-20-show-stable/covers/`. These wordmarks are the horizontal lockups that appear in the dark-block "Shows in the network" scroller on apexpodcast.co AND on the Network catalog page cards. They are DISTINCT from the album cover art (which is square, full-color, rich), and they are not produced for the 10 existing Transistor shows that have host-supplied artwork._

## Family system

Single 1024 x 256 canvas (4:1 lockup). Graphic primitive left, Archivo Black wordmark right, single vertical alignment. Padding of 64 px (0.5 x wordmark target height) on all four sides. The 128 x 128 glyph box sits left-flush, the wordmark begins at x = 240. Maximum wordmark width is 704 px after a 16 px safety margin.

Wordmark sizing follows two modes for family consistency:
- Single-line target font_size 124 (cap height roughly 89 px). Shrinks down to 80 if needed.
- Two-line stack at font_size 92 when single-line cannot hold 80 px. Word split is chosen to minimize line-width imbalance.

This gives the family two stable visual rhythms (tall single line, tall double line) that both feel proportionate to the 128 glyph box and read as one system.

Letter-spacing is held at zero. Archivo Black is wide enough at heavy weight that tracking adds nothing.

## Variants

Each show ships three variants per the brief:

| Variant | Background | Wordmark | Graphic | Where it appears |
|---|---|---|---|---|
| `wordmark-white-on-ink.svg` | Ink #14140F | Bone #FAF8F3 | Bone #FAF8F3 | Dark-block scroller on apexpodcast.co (resting state) |
| `wordmark-ink-on-bone.svg` | Bone #FAF8F3 | Ink #14140F | Ink #14140F | Light backgrounds, Network catalog cards, print |
| `wordmark-acid-on-ink.svg` | Ink #14140F | Bone #FAF8F3 | Acid #BFD93B | Hover state on the scroller. Graphic shifts to Acid; wordmark stays Bone |

PNG fallbacks at 1024 x 256 are rasterized alongside the SVGs for places that cannot ship vector (some social cards, some email clients).

## The 17 shows

| # | Slug | Display | Glyph | Verdict in v4-concept-validation |
|---|------|---------|-------|---|
| 1 | `the-brief/` | THE BRIEF | clock | Daily network briefing, Connection-Core |
| 2 | `etymon/` | ETYMON | epsilon | Etymology daily, Discovery-Core (STRONG KEEP) |
| 3 | `read-the-room/` | READ THE ROOM | pentagon-dots | Pentatype communication, Structure-Core (STRONG KEEP) |
| 4 | `ai-native/` | AI NATIVE | dot-matrix | AI-built businesses, Structure-Core (REBUILT flagship) |
| 5 | `coaches/` | COACHES | X-O play diagram | Great coaches plus principles, Conviction-Core (KEEP) |
| 6 | `perfect-love/` | PERFECT LOVE | four-petal flower | Four Loves curriculum, Meaning-Core (STRONG KEEP) |
| 7 | `legacy/` | LEGACY | obelisk | Building what outlasts, Meaning-Core |
| 8 | `master-of-two-worlds/` | MASTER OF TWO WORLDS | threshold | Hero's Journey, Meaning-Core |
| 9 | `first-principles/` | FIRST PRINCIPLES | arrow to bedrock | Socratic bedrock, Discovery-Core |
| 10 | `old-books/` | OLD BOOKS | book spine, dog-eared | Ancient and classic texts, Meaning-Core |
| 11 | `the-55-plus-operator/` | THE 55+ OPERATOR | hourglass | Second-half-of-career operator, Connection-Core |
| 12 | `same-stars/` | SAME STARS | constellation | Astronomy plus multi-cultural myth, Discovery-Core |
| 13 | `hands-on/` | HANDS ON | claw hammer | Trades and craft, Conviction-Core |
| 14 | `the-liner-notes/` | THE LINER NOTES | phonograph stylus | Album as literary artifact, Conviction-Core |
| 15 | `pure-reading/` | PURE READING | crescent moon | Classics for sleep, Connection-Core |
| 16 | `hard-questions-for-the-faithful/` | HARD QUESTIONS FOR THE FAITHFUL | question mark | Apologetics, Conviction-Core |
| 17 | `the-lyricists/` | THE LYRICISTS | opening quotation marks | Great lyricists decoded, Meaning-Core |

## What is NOT in this folder

The 10 existing Transistor shows already carry host-supplied artwork and are excluded from this system: The Apex Podcast, Sweeter After Difficulty, Russ Laggan Podcast, Winning Twice, Buddy Buck, You're Allowed, In a Moment, The Next Episode, Martin Ruof Podcast, How To Host a Podcast.

The 20 album-cover-art shows from the 2026-06-16 stable use a DIFFERENT visual system (square, full-color, Reid Miles record-label composition) and live at `../2026-06-16-20-show-stable/covers/`. Some of those concept slugs overlap by name with shows in this folder; treat the two systems as separate brand surfaces (cover art vs. horizontal wordmark).

## Re-rolling and renames

The generator at `_GENERATOR.py` is parameterized like its cover-art sibling. To rename a show, edit the `SHOWS` tuple at the top of the file and rerun `python3 _GENERATOR.py`. Each run rewrites all 17 folders. The glyph functions are individually defined; adding a new glyph means writing one function and adding its key to the `GLYPHS` dict.

The generator uses Archivo Black via Pillow for exact width measurement so the wordmark fits the canvas without manual tuning. The TTF is downloaded from the Google Fonts repo on first run; if you move the system to a new machine, drop `ArchivoBlack-Regular.ttf` into `~/.fonts/` and `fc-cache -f` before running.

## Where these get wired in

See `_SCROLLER-SPEC.md` for the apexpodcast.co dark-block "Shows in the network" scroller component spec. The parallel site-rebuild task reads from that file.

## Related files

- `../2026-06-16-20-show-stable/covers/_generator.py` (the parametric cover-art generator)
- `../2026-06-16-20-show-stable/COVER-ART-BRIEF-v2-categories.md` (cover-art brand brief)
- `../../strategy/v4-concept-validation-2026-06-17.md` (which shows ship, why, and the chart-gap rationale)
- `../../website/` (the live Next.js site that will consume these wordmarks)
