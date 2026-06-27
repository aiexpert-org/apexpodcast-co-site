#!/usr/bin/env python3
"""
Apex Podcast Network 17-show wordmark generator.
Authored 2026-06-18. Companion to brand/2026-06-16-20-show-stable/covers/_generator.py.

Builds horizontal wordmark lockups (graphic element + Archivo Black wordmark) for
the 17 NEW network shows. Each show ships three variants: white-on-ink, ink-on-bone,
acid-on-ink. PNG fallbacks rasterized at 1024x256 alongside the SVGs.

LOCKED PALETTE (inherits from cover-art system):
    Acid  #BFD93B
    Ink   #14140F
    Bone  #FAF8F3
    Stone #C4BDB1 (not used in wordmarks; family is 3-color)

LAYOUT (1024 x 256 canvas):
    [64 padding][128 glyph][48 gap][   wordmark up to 720   ][64 padding]

The padding rule (0.5 x wordmark height) governs the family: wordmark target height
is 128, padding above + below is 64 each, glyph box matches wordmark height.

Single-line wordmark with auto-fit font size. Floor 56, target 124, ceiling 140.
Letter-spacing held at 0 across the family for visual unity (Archivo Black is wide
enough that tracking adds nothing).

The graphic primitives are all single-color geometric marks. One per show. Designed
to read at 32px and scale up to 800px without legibility loss. Stroke-based marks
use stroke_w that scales with the 128px box; fill-based marks use solid shapes.
"""

from __future__ import annotations
import math
import os
from pathlib import Path

import cairosvg
from PIL import ImageFont

# Locate the Archivo Black TTF for accurate metric calculations.
_FONT_CANDIDATES = [
    os.path.expanduser("~/.fonts/ArchivoBlack-Regular.ttf"),
    "/sessions/dreamy-happy-bardeen/.fonts/ArchivoBlack-Regular.ttf",
    "/usr/share/fonts/truetype/google-fonts/ArchivoBlack-Regular.ttf",
]
ARCHIVO_TTF = next((p for p in _FONT_CANDIDATES if os.path.exists(p)), None)

# ---------- Palette ----------
ACID = "#BFD93B"
INK = "#14140F"
BONE = "#FAF8F3"

# ---------- Canvas geometry ----------
CANVAS_W = 1024
CANVAS_H = 256
PAD = 64                           # 0.5 x wordmark height (128)
GLYPH_BOX = 128                    # equal to wordmark target height
GLYPH_GAP = 48
GLYPH_X = PAD                      # 64
GLYPH_CY = CANVAS_H // 2           # 128
GLYPH_CX = GLYPH_X + GLYPH_BOX // 2  # 128
WORDMARK_X_START = GLYPH_X + GLYPH_BOX + GLYPH_GAP  # 240
WORDMARK_MAX_W = CANVAS_W - WORDMARK_X_START - PAD - 16  # 704 (16 px extra safety margin)
WORDMARK_CY = CANVAS_H // 2        # 128

# Font sizing
FONT_TARGET = 124
FONT_FLOOR = 56
FONT_CEILING = 140
CHAR_METRIC = 0.80   # Archivo Black per-char advance ratio (measured empirically, padded for safety)
SPACE_METRIC = 0.42  # space advance ratio


# ---------- Variant resolution ----------
# Each variant is (background, wordmark_fill, graphic_fill).
VARIANTS = {
    "white-on-ink":  (INK,  BONE, BONE),
    "ink-on-bone":   (BONE, INK,  INK),
    "acid-on-ink":   (INK,  BONE, ACID),
}


# ---------- 17 shows ----------
# (slug, display, glyph_key)
SHOWS = [
    ("the-brief",                    "THE BRIEF",                       "clock"),
    ("etymon",                       "ETYMON",                          "epsilon"),
    ("read-the-room",                "READ THE ROOM",                   "pentagon_dots"),
    ("ai-native",                    "AI NATIVE",                       "dot_matrix"),
    ("coaches",                      "COACHES",                         "play_xo"),
    ("perfect-love",                 "PERFECT LOVE",                    "four_petal"),
    ("legacy",                       "LEGACY",                          "column"),
    ("master-of-two-worlds",         "MASTER OF TWO WORLDS",            "threshold"),
    ("first-principles",             "FIRST PRINCIPLES",                "arrow_bedrock"),
    ("old-books",                    "OLD BOOKS",                       "book_spine"),
    ("the-55-plus-operator",         "THE 55+ OPERATOR",                "hourglass"),
    ("same-stars",                   "SAME STARS",                      "constellation"),
    ("hands-on",                     "HANDS ON",                        "hammer"),
    ("the-liner-notes",              "THE LINER NOTES",                 "stylus"),
    ("pure-reading",                 "PURE READING",                    "crescent"),
    ("hard-questions-for-the-faithful", "HARD QUESTIONS FOR THE FAITHFUL", "question_arc"),
    ("the-lyricists",                "THE LYRICISTS",                   "quote_marks"),
]


# ---------- Wordmark renderer ----------

# When single-line fitting forces the font below this threshold, stack to 2 lines.
STACK_TRIGGER = 80


_FONT_CACHE: dict[int, ImageFont.FreeTypeFont] = {}


def _get_font(size: int) -> ImageFont.FreeTypeFont | None:
    if ARCHIVO_TTF is None:
        return None
    if size not in _FONT_CACHE:
        _FONT_CACHE[size] = ImageFont.truetype(ARCHIVO_TTF, size)
    return _FONT_CACHE[size]


def estimate_width(text: str, size: int) -> float:
    """Measured width using the actual TTF when available, else metric estimate.

    The 1.04 multiplier covers cases where the last glyph's ink bearing extends
    slightly past the advance returned by Pillow's getlength.
    """
    font = _get_font(size)
    if font is not None:
        return font.getlength(text) * 1.04
    chars = sum(CHAR_METRIC if c != " " else SPACE_METRIC for c in text)
    return chars * size


def fit_font_size(text: str, max_w: float, start: int = FONT_TARGET, floor: int = FONT_FLOOR,
                   ceiling: int = FONT_CEILING) -> int:
    """Find the largest font size <= start such that the wordmark fits in max_w.

    Family consistency: never grow above the start target. Only shrink when needed.
    The ceiling parameter is retained for API compatibility but ignored here.
    """
    _ = ceiling
    size = start
    while size > floor and estimate_width(text, size) > max_w:
        size -= 2
    return size


def best_two_line_split(words):
    """Choose the word-boundary split that minimizes width imbalance.

    Width is measured by character count (not metric-weighted) which is close
    enough for Archivo Black at any size.
    """
    if len(words) < 2:
        return [words], []
    best = None
    for cut in range(1, len(words)):
        line1 = words[:cut]
        line2 = words[cut:]
        # Character-count proxy: sum of word lengths + spaces.
        w1 = sum(len(w) for w in line1) + (len(line1) - 1)
        w2 = sum(len(w) for w in line2) + (len(line2) - 1)
        score = abs(w1 - w2) + max(w1, w2) * 0.05  # mild penalty for the longer line
        if best is None or score < best[0]:
            best = (score, line1, line2)
    return best[1], best[2]


def render_wordmark(text: str, fill: str) -> str:
    """Left-aligned wordmark starting at WORDMARK_X_START, vertically centered.

    Single-line preferred. Switches to 2-line stack when single-line fit would
    require a font_size below STACK_TRIGGER.
    """
    single_size = fit_font_size(text, WORDMARK_MAX_W)
    if single_size >= STACK_TRIGGER or " " not in text:
        # Single line.
        baseline_y = WORDMARK_CY + int(single_size * 0.34)
        return (
            f'<text x="{WORDMARK_X_START}" y="{baseline_y}" '
            f'font-family="Archivo Black, Impact, sans-serif" '
            f'font-weight="900" font-size="{single_size}" letter-spacing="0" '
            f'fill="{fill}" text-anchor="start">{text}</text>'
        )

    # Two-line stack.
    words = text.split(" ")
    line1_words, line2_words = best_two_line_split(words)
    line1 = " ".join(line1_words)
    line2 = " ".join(line2_words)
    # Fit each line independently, then use the smaller of the two so they match.
    s1 = fit_font_size(line1, WORDMARK_MAX_W, start=92, floor=48, ceiling=110)
    s2 = fit_font_size(line2, WORDMARK_MAX_W, start=92, floor=48, ceiling=110)
    size = min(s1, s2)
    # Vertical placement: line gap of 6 px between cap and next cap.
    cap_h = size * 0.72  # Archivo Black cap height roughly 0.72 em
    total_block_h = cap_h * 2 + 6
    top_of_block = WORDMARK_CY - total_block_h / 2
    baseline_1 = top_of_block + cap_h
    baseline_2 = baseline_1 + cap_h + 6
    parts = [
        f'<text x="{WORDMARK_X_START}" y="{baseline_1:.1f}" '
        f'font-family="Archivo Black, Impact, sans-serif" '
        f'font-weight="900" font-size="{size}" letter-spacing="0" '
        f'fill="{fill}" text-anchor="start">{line1}</text>',
        f'<text x="{WORDMARK_X_START}" y="{baseline_2:.1f}" '
        f'font-family="Archivo Black, Impact, sans-serif" '
        f'font-weight="900" font-size="{size}" letter-spacing="0" '
        f'fill="{fill}" text-anchor="start">{line2}</text>',
    ]
    return "\n".join(parts)


# ---------- Glyph primitives ----------
# Each primitive draws inside the 128 x 128 glyph box centered on (GLYPH_CX, GLYPH_CY).
# Inner padding of 8 px keeps marks from kissing the box edge.

INNER = 8
GLYPH_INNER_HALF = (GLYPH_BOX // 2) - INNER  # 56


def glyph_clock(color: str) -> str:
    """The Brief - analog clock face with two hands at 10:10."""
    r_outer = 52
    stroke = 10
    parts = [
        f'<circle cx="{GLYPH_CX}" cy="{GLYPH_CY}" r="{r_outer}" '
        f'fill="none" stroke="{color}" stroke-width="{stroke}"/>',
    ]
    # Hour hand to 10 o'clock (-150 from 12, but classic clock 10:10 -> -60 from horizontal left)
    # 10 position is at angle 240 deg from 3 o'clock, i.e., upper-left
    ang_hour = math.radians(-30 - 90)  # 10 o'clock = -120 deg from east axis
    hx = GLYPH_CX + math.cos(ang_hour) * 24
    hy = GLYPH_CY + math.sin(ang_hour) * 24
    # Minute hand to 2 (upper-right)
    ang_min = math.radians(60 - 90)  # 2 o'clock = -60 deg from east
    mx = GLYPH_CX + math.cos(ang_min) * 32
    my = GLYPH_CY + math.sin(ang_min) * 32
    parts.append(
        f'<line x1="{GLYPH_CX}" y1="{GLYPH_CY}" x2="{hx:.1f}" y2="{hy:.1f}" '
        f'stroke="{color}" stroke-width="8" stroke-linecap="round"/>'
    )
    parts.append(
        f'<line x1="{GLYPH_CX}" y1="{GLYPH_CY}" x2="{mx:.1f}" y2="{my:.1f}" '
        f'stroke="{color}" stroke-width="8" stroke-linecap="round"/>'
    )
    parts.append(f'<circle cx="{GLYPH_CX}" cy="{GLYPH_CY}" r="6" fill="{color}"/>')
    return "".join(parts)


def glyph_epsilon(color: str) -> str:
    """Etymon - Greek epsilon glyph drawn geometrically.

    Two stacked C-curves with a center horizontal: an arc opening right.
    """
    # An epsilon shape: outer arc (left-facing C) with a horizontal bar through the middle.
    cx, cy = GLYPH_CX, GLYPH_CY
    r = 48
    stroke = 12
    # The arc sweeps from upper-right around the left to lower-right.
    x1 = cx + r * math.cos(math.radians(-50))
    y1 = cy + r * math.sin(math.radians(-50))
    x2 = cx + r * math.cos(math.radians(50))
    y2 = cy + r * math.sin(math.radians(50))
    parts = [
        # Open arc (left-facing C, sweeps clockwise through the left side)
        f'<path d="M {x1:.1f} {y1:.1f} A {r} {r} 0 1 0 {x2:.1f} {y2:.1f}" '
        f'fill="none" stroke="{color}" stroke-width="{stroke}" stroke-linecap="round"/>',
        # Center horizontal bar
        f'<line x1="{cx - 24}" y1="{cy}" x2="{cx + 18}" y2="{cy}" '
        f'stroke="{color}" stroke-width="{stroke}" stroke-linecap="round"/>',
    ]
    return "".join(parts)


def glyph_pentagon_dots(color: str) -> str:
    """Read the Room - five dots arranged in a regular pentagon (Pentatype, 5 archetypes)."""
    r = 48
    dot_r = 11
    parts = []
    for i in range(5):
        ang = math.radians(-90 + i * 72)
        x = GLYPH_CX + r * math.cos(ang)
        y = GLYPH_CY + r * math.sin(ang)
        parts.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{dot_r}" fill="{color}"/>')
    return "".join(parts)


def glyph_dot_matrix(color: str) -> str:
    """AI Native - 3x3 dot matrix grid."""
    spacing = 28
    dot_r = 9
    parts = []
    for ry in range(3):
        for cx_i in range(3):
            x = GLYPH_CX - spacing + cx_i * spacing
            y = GLYPH_CY - spacing + ry * spacing
            parts.append(f'<circle cx="{x}" cy="{y}" r="{dot_r}" fill="{color}"/>')
    return "".join(parts)


def glyph_play_xo(color: str) -> str:
    """Coaches - chalk play diagram: X on the left, O on the right, line connecting."""
    # X glyph (two crossed strokes), centered at GLYPH_CX - 28
    stroke = 11
    xcx = GLYPH_CX - 28
    s = 18
    parts = [
        f'<line x1="{xcx - s}" y1="{GLYPH_CY - s}" x2="{xcx + s}" y2="{GLYPH_CY + s}" '
        f'stroke="{color}" stroke-width="{stroke}" stroke-linecap="round"/>',
        f'<line x1="{xcx + s}" y1="{GLYPH_CY - s}" x2="{xcx - s}" y2="{GLYPH_CY + s}" '
        f'stroke="{color}" stroke-width="{stroke}" stroke-linecap="round"/>',
    ]
    # Connector line (dashed/solid) from X to O
    ocx = GLYPH_CX + 28
    parts.append(
        f'<line x1="{xcx + s + 8}" y1="{GLYPH_CY}" x2="{ocx - 18 - 8}" y2="{GLYPH_CY}" '
        f'stroke="{color}" stroke-width="6" stroke-linecap="round" '
        f'stroke-dasharray="4,8"/>'
    )
    # O glyph
    parts.append(
        f'<circle cx="{ocx}" cy="{GLYPH_CY}" r="18" fill="none" stroke="{color}" '
        f'stroke-width="{stroke}"/>'
    )
    return "".join(parts)


def glyph_four_petal(color: str) -> str:
    """Perfect Love - four petal flower (Four Loves: storge, philia, eros, agape).

    Four overlapping circles arranged in a plus, intersection forms the four-petal mark.
    """
    cx, cy = GLYPH_CX, GLYPH_CY
    r = 26
    offset = 22
    centers = [
        (cx, cy - offset),
        (cx + offset, cy),
        (cx, cy + offset),
        (cx - offset, cy),
    ]
    parts = []
    for (x, y) in centers:
        parts.append(
            f'<circle cx="{x}" cy="{y}" r="{r}" fill="none" stroke="{color}" stroke-width="11"/>'
        )
    return "".join(parts)


def glyph_column(color: str) -> str:
    """Legacy - obelisk silhouette (Washington-monument shape).

    Tall tapered trapezoid with a pyramidal cap, sitting on a single base plinth.
    """
    cx, cy = GLYPH_CX, GLYPH_CY
    # Geometry
    top_y = cy - 48
    cap_y = cy - 34
    bot_y = cy + 34
    base_y = cy + 44
    top_half_w = 8       # narrower at the cap
    bot_half_w = 22      # wider at the base
    parts = []
    # Pyramidal cap (triangle)
    parts.append(
        f'<polygon points="{cx},{top_y} {cx - top_half_w},{cap_y} {cx + top_half_w},{cap_y}" fill="{color}"/>'
    )
    # Tapered shaft (trapezoid)
    parts.append(
        f'<polygon points="{cx - top_half_w},{cap_y} {cx + top_half_w},{cap_y} '
        f'{cx + bot_half_w},{bot_y} {cx - bot_half_w},{bot_y}" fill="{color}"/>'
    )
    # Plinth base
    parts.append(
        f'<rect x="{cx - 36}" y="{bot_y}" width="72" height="10" fill="{color}"/>'
    )
    return "".join(parts)


def glyph_threshold(color: str) -> str:
    """Master of Two Worlds - two vertical bars (threshold/gateway)."""
    cx, cy = GLYPH_CX, GLYPH_CY
    h = 96
    bar_w = 16
    gap = 36
    parts = [
        f'<rect x="{cx - gap - bar_w}" y="{cy - h // 2}" width="{bar_w}" height="{h}" fill="{color}"/>',
        f'<rect x="{cx + gap}" y="{cy - h // 2}" width="{bar_w}" height="{h}" fill="{color}"/>',
    ]
    # Optional connecting lintel
    parts.append(
        f'<rect x="{cx - gap - bar_w}" y="{cy - h // 2}" width="{2 * gap + 2 * bar_w}" height="10" fill="{color}"/>'
    )
    return "".join(parts)


def glyph_arrow_bedrock(color: str) -> str:
    """First Principles - downward arrow pointing to a horizontal bedrock line."""
    cx, cy = GLYPH_CX, GLYPH_CY
    # Bedrock line at bottom
    parts = [
        f'<rect x="{cx - 48}" y="{cy + 36}" width="96" height="10" fill="{color}"/>',
    ]
    # Arrow shaft
    parts.append(
        f'<rect x="{cx - 6}" y="{cy - 44}" width="12" height="62" fill="{color}"/>'
    )
    # Arrow head (triangle pointing down)
    parts.append(
        f'<polygon points="{cx - 22},{cy + 18} {cx + 22},{cy + 18} {cx},{cy + 38}" fill="{color}"/>'
    )
    return "".join(parts)


def glyph_book_spine(color: str) -> str:
    """Old Books - book spine with dog-eared upper-right corner."""
    cx, cy = GLYPH_CX, GLYPH_CY
    # Spine outline: tall rectangle
    bx = cx - 30
    by = cy - 48
    bw = 60
    bh = 96
    fold = 18
    # Construct polygon: top-left, top-right minus fold, fold edge, bottom-right, bottom-left
    pts = [
        (bx, by),
        (bx + bw - fold, by),
        (bx + bw, by + fold),
        (bx + bw, by + bh),
        (bx, by + bh),
    ]
    pts_str = " ".join(f"{x},{y}" for x, y in pts)
    # Fold triangle (the dog-ear)
    fold_pts = f"{bx + bw - fold},{by} {bx + bw - fold},{by + fold} {bx + bw},{by + fold}"
    parts = [
        f'<polygon points="{pts_str}" fill="none" stroke="{color}" stroke-width="10" stroke-linejoin="round"/>',
        f'<polyline points="{fold_pts}" fill="none" stroke="{color}" stroke-width="8" stroke-linejoin="round"/>',
        # Two horizontal lines on the spine (suggest pages / band)
        f'<line x1="{bx + 10}" y1="{by + 30}" x2="{bx + bw - 28}" y2="{by + 30}" stroke="{color}" stroke-width="5"/>',
        f'<line x1="{bx + 10}" y1="{by + 50}" x2="{bx + bw - 14}" y2="{by + 50}" stroke="{color}" stroke-width="5"/>',
    ]
    return "".join(parts)


def glyph_hourglass(color: str) -> str:
    """The 55+ Operator - hourglass silhouette."""
    cx, cy = GLYPH_CX, GLYPH_CY
    # Two triangles meeting at center, with top and bottom caps.
    top_y = cy - 48
    bot_y = cy + 48
    cap_w = 64
    cap_h = 10
    parts = [
        # Top cap
        f'<rect x="{cx - cap_w // 2}" y="{top_y - cap_h}" width="{cap_w}" height="{cap_h}" fill="{color}"/>',
        # Bottom cap
        f'<rect x="{cx - cap_w // 2}" y="{bot_y}" width="{cap_w}" height="{cap_h}" fill="{color}"/>',
        # Top triangle (filled)
        f'<polygon points="{cx - cap_w // 2 + 4},{top_y} {cx + cap_w // 2 - 4},{top_y} {cx},{cy}" fill="{color}"/>',
        # Bottom triangle (filled)
        f'<polygon points="{cx},{cy} {cx - cap_w // 2 + 4},{bot_y} {cx + cap_w // 2 - 4},{bot_y}" fill="{color}"/>',
    ]
    return "".join(parts)


def glyph_constellation(color: str) -> str:
    """Same Stars - four dots connected by lines (small constellation)."""
    cx, cy = GLYPH_CX, GLYPH_CY
    # Four points
    pts = [
        (cx - 36, cy - 28),
        (cx + 10, cy - 40),
        (cx + 32, cy + 6),
        (cx - 6, cy + 36),
    ]
    parts = []
    # Connecting lines
    for i in range(len(pts) - 1):
        x1, y1 = pts[i]
        x2, y2 = pts[i + 1]
        parts.append(
            f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="4"/>'
        )
    # Dots on top
    radii = [9, 11, 8, 10]
    for (x, y), rr in zip(pts, radii):
        parts.append(f'<circle cx="{x}" cy="{y}" r="{rr}" fill="{color}"/>')
    return "".join(parts)


def glyph_hammer(color: str) -> str:
    """Hands On - claw-hammer silhouette.

    Asymmetric head (face on the right, claw V-cut on the left) with a long
    angled handle. The asymmetry is what reads as 'hammer' vs 'T'.
    """
    cx, cy = GLYPH_CX, GLYPH_CY
    # Head polygon: face on right (rounded), claw V on the left.
    # Coordinates assembled clockwise from upper-left of the head.
    head_top = cy - 48
    head_bot = cy - 14
    face_x = cx + 32     # right face of the head
    neck_x = cx - 10     # where claw splits
    claw_tip_x = cx - 36 # leftmost claw tip
    parts = []
    # Head silhouette
    pts = [
        (claw_tip_x, head_top + 4),   # upper claw tip
        (neck_x, head_top + 10),       # claw inner cusp (top)
        (cx + 6, head_top),            # head top edge
        (face_x, head_top + 4),        # face top-right
        (face_x + 4, cy - 30),         # face right side
        (face_x, head_bot - 4),        # face bottom-right
        (cx + 6, head_bot),            # head bottom edge
        (neck_x, head_bot - 8),        # claw inner cusp (bottom)
        (claw_tip_x + 4, head_bot - 4),# lower claw tip
        (claw_tip_x - 4, cy - 26),     # claw outer left edge (mid)
    ]
    head_pts = " ".join(f"{x:.1f},{y:.1f}" for x, y in pts)
    parts.append(f'<polygon points="{head_pts}" fill="{color}"/>')
    # V-notch (the claw split): triangle of the BG color carved out.
    notch_pts = f"{claw_tip_x + 2},{cy - 30} {neck_x - 2},{cy - 30} {(claw_tip_x + neck_x) / 2:.1f},{cy - 16}"
    # We can't easily punch a hole, so we draw the notch using two separate claw fingers above.
    # Instead let's add a simple V-line cut from the claw face.
    # Use a small notch polygon overlay using the canvas BG. Since we don't know BG here,
    # we will simulate by adding a thin acid/ink line carved out using stroke.
    # Simpler: leave the claw as the polygon's natural shape.
    # Handle: angled diagonal from head down to lower-right.
    handle_top_x = cx + 4
    handle_top_y = head_bot - 2
    handle_bot_x = cx + 36
    handle_bot_y = cy + 48
    handle_w = 12
    # Build the handle as a tilted rectangle (polygon).
    dx = handle_bot_x - handle_top_x
    dy = handle_bot_y - handle_top_y
    length = (dx * dx + dy * dy) ** 0.5
    nx = -dy / length * (handle_w / 2)
    ny = dx / length * (handle_w / 2)
    hp = [
        (handle_top_x + nx, handle_top_y + ny),
        (handle_bot_x + nx, handle_bot_y + ny),
        (handle_bot_x - nx, handle_bot_y - ny),
        (handle_top_x - nx, handle_top_y - ny),
    ]
    hp_str = " ".join(f"{x:.1f},{y:.1f}" for x, y in hp)
    parts.append(f'<polygon points="{hp_str}" fill="{color}"/>')
    return "".join(parts)


def glyph_stylus(color: str) -> str:
    """The Liner Notes - phonograph stylus: diagonal arm + cartridge dot + record edge arc."""
    cx, cy = GLYPH_CX, GLYPH_CY
    # Record edge (small arc at bottom-left, suggesting an LP edge)
    parts = [
        f'<path d="M {cx - 48} {cy + 40} A 80 80 0 0 1 {cx + 48} {cy + 40}" '
        f'fill="none" stroke="{color}" stroke-width="6"/>',
    ]
    # Tonearm: diagonal line from upper-right pointing toward record
    arm_x1 = cx + 42
    arm_y1 = cy - 44
    arm_x2 = cx - 18
    arm_y2 = cy + 26
    parts.append(
        f'<line x1="{arm_x1}" y1="{arm_y1}" x2="{arm_x2}" y2="{arm_y2}" '
        f'stroke="{color}" stroke-width="10" stroke-linecap="round"/>'
    )
    # Pivot at upper-right
    parts.append(f'<circle cx="{arm_x1}" cy="{arm_y1}" r="7" fill="{color}"/>')
    # Stylus tip / cartridge (bigger dot at lower-left end of arm)
    parts.append(f'<circle cx="{arm_x2}" cy="{arm_y2}" r="10" fill="{color}"/>')
    return "".join(parts)


def glyph_crescent(color: str) -> str:
    """Pure Reading - crescent moon silhouette."""
    cx, cy = GLYPH_CX, GLYPH_CY
    # Crescent via two overlapping circles, using SVG path with arc segments.
    r1 = 50
    r2 = 44
    # Outer circle minus inner circle offset to the right => crescent opens right.
    # Build via path: outer arc on the left, inner arc back to the start point.
    x_start = cx + 20
    y_start = cy - 46
    # Outer arc from top-right of outer circle, around the left, to bottom-right.
    path = (
        f'M {x_start} {y_start} '
        f'A {r1} {r1} 0 1 0 {x_start} {cy + 46} '
        f'A {r2} {r2} 0 1 1 {x_start} {y_start} Z'
    )
    return f'<path d="{path}" fill="{color}"/>'


def glyph_question_arc(color: str) -> str:
    """Hard Questions for the Faithful - geometric question mark (open arc + dot)."""
    cx, cy = GLYPH_CX, GLYPH_CY
    stroke = 14
    # Question hook: open arc from upper-left around the top down to the center-right.
    # Path traces upper-left -> top -> right -> center
    parts = [
        f'<path d="M {cx - 28} {cy - 24} '
        f'A 28 28 0 1 1 {cx + 4} {cy + 12} '
        f'L {cx + 4} {cy + 22}" '
        f'fill="none" stroke="{color}" stroke-width="{stroke}" '
        f'stroke-linecap="round" stroke-linejoin="round"/>',
        # Dot at bottom
        f'<circle cx="{cx + 4}" cy="{cy + 44}" r="9" fill="{color}"/>',
    ]
    return "".join(parts)


def glyph_quote_marks(color: str) -> str:
    """The Lyricists - opening quotation marks (two solid blocks)."""
    cx, cy = GLYPH_CX, GLYPH_CY
    # Two rounded rectangles (the bodies of the curly opening quotes), each with a small triangle tail.
    block_w = 22
    block_h = 32
    gap = 16
    # Left quote
    lx = cx - gap // 2 - block_w
    rx = cx + gap // 2
    top_y = cy - 30
    parts = []
    for x in (lx, rx):
        # Body
        parts.append(
            f'<rect x="{x}" y="{top_y}" width="{block_w}" height="{block_h}" fill="{color}" rx="6"/>'
        )
        # Tail (small triangular drop)
        parts.append(
            f'<polygon points="{x + 4},{top_y + block_h} {x + block_w - 4},{top_y + block_h} '
            f'{x + 4},{top_y + block_h + 18}" fill="{color}"/>'
        )
    return "".join(parts)


GLYPHS = {
    "clock":          glyph_clock,
    "epsilon":        glyph_epsilon,
    "pentagon_dots":  glyph_pentagon_dots,
    "dot_matrix":     glyph_dot_matrix,
    "play_xo":        glyph_play_xo,
    "four_petal":     glyph_four_petal,
    "column":         glyph_column,
    "threshold":      glyph_threshold,
    "arrow_bedrock":  glyph_arrow_bedrock,
    "book_spine":     glyph_book_spine,
    "hourglass":      glyph_hourglass,
    "constellation":  glyph_constellation,
    "hammer":         glyph_hammer,
    "stylus":         glyph_stylus,
    "crescent":       glyph_crescent,
    "question_arc":   glyph_question_arc,
    "quote_marks":    glyph_quote_marks,
}


# ---------- Builder ----------

def build_wordmark_svg(display: str, glyph_key: str, variant: str) -> str:
    """Build the SVG. Glyph is wrapped in `<g class="glyph">` and the wordmark in
    `<g class="wordmark">` so the consuming site can recolor each independently
    via CSS without touching the generator.
    """
    bg, wordmark_fill, graphic_fill = VARIANTS[variant]
    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {CANVAS_W} {CANVAS_H}" '
        f'role="img" aria-label="{display} wordmark">',
        f'<rect width="{CANVAS_W}" height="{CANVAS_H}" fill="{bg}"/>',
        f'<g class="glyph">{GLYPHS[glyph_key](graphic_fill)}</g>',
        f'<g class="wordmark">{render_wordmark(display, wordmark_fill)}</g>',
        '</svg>',
    ]
    return "\n".join(parts)


def rasterize(svg_text: str, png_path: Path) -> None:
    cairosvg.svg2png(
        bytestring=svg_text.encode("utf-8"),
        write_to=str(png_path),
        output_width=CANVAS_W,
        output_height=CANVAS_H,
    )


def main() -> None:
    here = Path(__file__).resolve().parent
    for slug, display, glyph_key in SHOWS:
        folder = here / slug
        folder.mkdir(parents=True, exist_ok=True)
        for variant in VARIANTS:
            svg_text = build_wordmark_svg(display, glyph_key, variant)
            svg_path = folder / f"wordmark-{variant}.svg"
            png_path = folder / f"wordmark-{variant}.png"
            svg_path.write_text(svg_text, encoding="utf-8")
            rasterize(svg_text, png_path)
        print(f"OK  {slug}/  (3 variants)")


if __name__ == "__main__":
    main()
