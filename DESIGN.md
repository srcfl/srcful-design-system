# Design System: Sourceful Energy
**Project:** srcful-design-system · https://design.sourceful.energy

A single editorial identity for Sourceful Energy, a local energy
coordination infrastructure company. Point an AI agent (Stitch, Claude,
Cursor) at this file and it has everything it needs to produce UI that
reads as Sourceful.

## 1. Visual Theme & Atmosphere

Editorial, warm, infrastructural. Think a well-set broadsheet at dusk,
not a SaaS dashboard. Generous margins, confident headline sizes, one
recurring accent. The atmosphere is calm and spacious on paper grounds,
dramatic and ink-heavy on closing spreads. No HUD, no scanlines, no
glows, no gradients. Dark mode is a plain editorial inversion, not a
terminal skin.

Density is low. Whitespace carries meaning. The page is designed to be
read top-to-bottom like a printed piece, so rhythm matters more than
feature parity. Micro-labels in monospace set the meter.

One accent colour, one display face, one body face, one monospace face
for kickers and stats. The restraint is the point.

## 2. Color Palette & Roles

### Grounds (the three page-level backgrounds)

- **Warm Paper (`#FAFAF7`)** — the default page ground. A faint
  yellow-cream off-white, the colour of uncoated book paper in
  daylight. Used as the canvas for component spreads and most reading
  copy.
- **Editorial Cream (`#F5F2E1`)** — deeper than paper, closer to old
  newsprint. Used for spread bodies that need to feel hand-set and
  slightly warmer than the page default. Also used as the foreground
  colour on ink grounds.
- **Deep Ink (`#0A0A0A`)** — a near-black with no blue in it. Used for
  hero and closing spreads, where the page is meant to feel printed in
  dense ink rather than "dark mode." Stays ink in both light and dark
  themes (intentional drama).
- **Pure Surface White (`#FFFFFF`)** — cards and elevated elements on
  paper grounds. Never used as a page ground.

### The Accent (used sparingly, for punctuation)

- **Signal Orange (`#E85D1F`)** — the one and only editorial accent. A
  confident, slightly toasted orange that reads as energy without
  slipping into high-vis safety colour. Used for primary buttons, link
  underlines, one highlight word per headline, focus rings, and the
  occasional rule or divider.
- **Signal Orange Scale (`#FFF4ED` → `#3B1205`)** — an eleven-step
  ramp centred on 500. Lower steps (50–200) are warm washes for
  backgrounds; higher steps (700–950) are pressed states and ink
  pairings. Never introduce a second accent — stretch this scale.

### Semantic Singletons (each one role, no scales)

- **Confirmed Green (`#15803D`)** — a deep, saturated forest green.
  Used exclusively for "online" / "confirmed" state indicators. Never
  as a brand colour, never as a heading, never as an accent. If you
  want "success" energy that isn't state, use Signal Orange.
- **Destructive Red (`#FF0D0D`)** — an electric, unambiguous red.
  Used only for destructive actions and hard errors. One shade, no
  scale.
- **Near-Black Text (`#111827`)** — slightly cooler than Deep Ink,
  used for body copy so paragraphs don't vibrate against the page.
- **Soft Gray Muted (`#6B7280`)** — cool neutral gray for secondary
  text and meta.
- **Whisper Border (`#E7E5E0`)** — a warm, barely-there border that
  sits one shade below Warm Paper. Hairline dividers and card outlines.
- **Border Subtle (`#F0EDE5`)** — even fainter, for internal card
  dividers.

### Dark-Mode Inversions

Dark mode is not its own identity. Cream grounds become Deep Ink, paper
becomes a slightly lifted `#0F0F0F`, text becomes Editorial Cream
(`#F5F2E1`). Signal Orange does not shift. Borders become
`rgba(245, 242, 225, 0.12)` — cream at 12% alpha, so hairlines stay
legible without introducing a new grey.

## 3. Typography Rules

One family for display and body, one for monospace. Three faces total,
no secondary display face.

- **Display & Body — Satoshi** (loaded from Fontshare, weights 300 /
  400 / 500 / 700 / 900). Satoshi is a geometric humanist sans with
  slightly open apertures and generous x-height. It carries editorial
  weight at 900 for hero specimens and reads as confident body copy at
  400.
  - **Hero / display**: Satoshi 900, tight tracking (`-0.02em`), line
    height 1.05, fluid size (clamp 2.5rem → 6rem). One word per line
    where possible. One signal-orange highlight word per headline.
  - **Section headings (h1–h3)**: Satoshi 300, tracking `-0.02em`,
    line height 1.05. Light weight on big sizes reads as editorial,
    not corporate.
  - **Body**: Satoshi 400, 16px, line height 1.55. `text-wrap: pretty`
    on paragraphs so last-line widows get balanced.
  - **Emphasis in body**: Satoshi 500, never italics. Italics are
    reserved for true citations.

- **Micro-labels & stats — JetBrains Mono** (next/font, weights 400 /
  500 / 700). Used for kickers ("01 · BRAND"), meta rows, numeric
  values in data displays, and the micro-label row under
  TypeSpecimens.
  - **Micro-label**: 11px, uppercase, letter-spacing `0.18em`. Tight,
    deliberate, functions as the meter of the page.
  - **Numeric readouts**: mono at 13–14px, lining figures.

No other faces. No Barlow, no Inter, no system-ui headings. If a
design calls for a "display" font that isn't Satoshi, it isn't
Sourceful.

## 4. Component Stylings

The primitives are shadcn-style (Radix + Tailwind + CVA) in
`components/ui/`. The editorial voice is expressed through restraint:
square corners, hairline borders, no shadows unless elevation is
semantic.

- **Buttons**: Sharp, squared-off edges (`rounded-none`) — a
  deliberate editorial cue, these are not rounded product buttons.
  The default ("primary") variant fills with Signal Orange and sets
  text to Deep Ink for contrast. Outline variant has a hairline
  border in the current ink colour and a transparent background.
  Ghost variant drops the border entirely and only shows a subtle
  background on hover. Hover is a small opacity nudge, not a colour
  shift. Sizes are `sm` (h-8), default (h-10), and `lg` (h-12). Focus
  shows a 2px Signal Orange ring offset by 2px — never removed.

- **Cards / Containers**: Sharp, squared-off edges (`rounded-none`)
  with a whisper-thin border (`1px solid rgba(ink, 0.15)`) and no
  drop shadow by default. They read as printed panels, not floating
  tiles. Background is Pure Surface White on paper grounds or a
  `#141414` lift on ink grounds. Internal padding is generous
  (`p-6`), header and content are visually separated by rhythm not
  rules.

- **Inputs / Forms**: Underline-style rather than boxed. No
  background fill, no border on three sides — just a 1px bottom
  border in the current ink colour, which thickens to 2px in Signal
  Orange on focus. Padding is horizontal-zero, vertical 8px, height
  44px (`h-11`). Placeholder text is Soft Gray Muted. This is the
  biggest departure from standard shadcn and is a deliberate
  editorial choice — forms read as marginalia, not data entry.

- **Badges**: Sharp edges, hairline border, micro-label typography
  (11px uppercase, 0.18em tracking). Solid variants fill with a
  semantic colour (Signal Orange, Confirmed Green, Destructive Red)
  at full weight. Soft variants use the 50-step wash as background
  with 200-step text — useful for inline status pills that shouldn't
  shout.

- **Alerts**: Full-width horizontal rails with a 3px left border in
  the semantic colour, a 50-step wash background, and 700-step
  typography. No icons unless the alert is destructive or a
  confirmation.

- **Spinners — signature primitive**: 47 terminal-style frame-cycle
  indicators (32 braille, 15 ASCII), rendered as a single monospace
  glyph that cycles on `setInterval`. Not a generic loading state —
  these tie the 200ms edge-response story to a visual primitive that
  reads as infrastructure. Default is `dots` (braille). Use `scan` /
  `pulse` / `breathe` for live grid activity, `orbit` for boot
  sequences, ASCII variants for CLI-style UIs. All respect
  `prefers-reduced-motion` (freeze on frame 0).

- **Navigation**: Uppercase micro-label links (11px / 0.18em
  tracking) with an animated 1px underline that scales from left on
  hover. Active state is full-width underline in Signal Orange. The
  nav sits on whatever ground the page provides — cream, paper, or
  ink — and flips its ink colour to match.

## 5. Layout Principles

- **One full-width page, vertical spreads**. The design system is
  expressed as a single scrollable page, broken into four editorial
  spreads (Brand, Editorial, Components, Using with Claude). Each
  spread picks its own ground (cream, paper, or ink) and flips its
  foreground accordingly. This gives the page the rhythm of a
  magazine.

- **Asymmetric editorial grid**. Twelve-column on desktop, with
  content frequently biased 8/4 or 5/7 rather than centred.
  Kickers ("01 · BRAND") sit in the narrow column, the main
  specimen takes the wide one. Full-width images and hero
  specimens break the grid on purpose.

- **Generous whitespace**. Section vertical padding is `py-24` on
  desktop (`py-16` on mobile). Hero spreads use `min-h-screen`
  so the opening word always reads as a full-page statement. Cards
  and form inputs get more padding than strictly necessary — the
  spaciousness is part of the voice.

- **Micro-label meta rows** sit on the top rail of each spread in
  JetBrains Mono 11px uppercase. They function like dek lines in
  print: a short sequence of comma-separated descriptors that
  frames the spread (e.g., "Editorial light · Signal orange ·
  Satoshi"). This rhythmic device appears on every spread and is
  one of the strongest identity cues.

- **Max-width for reading copy**: 65ch for body paragraphs, 80rem
  (`max-w-7xl`) for the overall page container.

- **No decoration for its own sake**. No gradients, no glass,
  no glows, no ornamental borders. If a shape isn't carrying
  information, it shouldn't be there. The page earns visual
  interest through typographic scale and the alternation of
  grounds, not through treatments.

- **Spacing scale**: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96
  pixels. Prefer the larger steps — `space-12` (48px) is the
  default gap between major elements, `space-24` (96px) between
  spreads.

- **Dark mode**: automatic via `<html class="dark">`. Each
  spread's ground flips to its dark counterpart (cream → ink,
  paper → near-black), text becomes cream. Signal Orange is
  invariant. No component needs dark-mode-specific code —
  grounds do the work.
