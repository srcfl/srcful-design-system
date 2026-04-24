# Sourceful Design System

Single-page editorial design reference for Sourceful Energy. This repo
*is* the spec — tokens live in `app/globals.css`, primitives in
`components/ui/`, and the reference page in `app/page.tsx` shows how
they compose.

It is not an npm package. Downstream projects match the system by
pointing Claude at https://design.sourceful.energy (or this repo) and
copying the patterns.

For AI agents specifically, `DESIGN.md` in this repo is the canonical
serialized spec — Stitch-format, one file, everything an agent needs
to produce UI that reads as Sourceful.

## Strategic context

At the start of each session, read the Sourceful Playbook:

```
/Users/paulcooper/Documents/Repos/sourceful-playbook
```

Key files:
- `CLAUDE.md` — master strategic context
- `01-core-narrative/Hello-World-Story.md` — canonical company narrative
- `_facts.md` — registry of canonical facts
- `03-competitive/Moat-Strategy.md` — five moats

Design work should reinforce: Local Energy Coordination Infrastructure,
the $20 Zap gateway, 200ms edge response, the €2.5B coordination
problem. We're collaborative with utilities, not antagonistic.

## The identity

One editorial voice. Warm cream grounds, signal orange accent, ink
near-black for dark grounds. No HUD, no scanlines, no glows. Dark mode
is a plain editorial inversion.

### Grounds (theme-aware, set per section)

| Token                   | Hex       | Use                              |
|-------------------------|-----------|----------------------------------|
| `--color-paper`         | `#FAFAF7` | page default                     |
| `--color-cream`         | `#F5F2E1` | editorial spread body            |
| `--color-ink`           | `#0A0A0A` | hero + closing dark spreads      |
| `--color-surface`       | `#FFFFFF` | cards / elevated on paper        |

### Accent

| Token                   | Hex       | Use                              |
|-------------------------|-----------|----------------------------------|
| `--sourceful-signal-500`| `#E85D1F` | the one accent — links, primary  |
| `--sourceful-success`   | `#15803D` | online / confirmed state only    |
| `--sourceful-red-500`   | `#FF0D0D` | destructive                      |

Full signal scale is 50–950 (`--sourceful-signal-*`). Use lower steps
for washes, higher steps for pressed / ink pairings.

### Typography

- **Display** — Satoshi 500/900, tight tracking (`-0.02em`), line 1.05.
  Big editorial specimens on alternating grounds.
- **Body** — Satoshi 400/500.
- **Mono / micro-labels** — JetBrains Mono, 11px uppercase, 0.18em
  letter-spacing for kickers and meta.

All three are wired via `app/layout.tsx` and exposed as `--font-sans`,
`--font-heading`, `--font-mono`.

## Primitives

24 shadcn-style components in `components/ui/`. Plain Tailwind +
Radix + CVA, no wrapper package.

```
accordion, alert, badge, button, card, checkbox, dialog,
dropdown-menu, input, label, progress, radio-group, scroll-area,
select, separator, sheet, skeleton, slider, spinner, switch,
table, tabs, textarea, tooltip
```

Import from the local path:

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
```

### Spinner (edge activity / agent streams)

47 terminal-style frame-cycle indicators — 32 braille + 15 ASCII —
rendered as a single monospace glyph cycling on `setInterval`. Zero
SVG, zero Lottie. Adapted from expo-agent-spinners (MIT © eronred); the
upstream arrow and emoji variants are deliberately excluded — arrows
read as nav cues, emoji carry their own colour, both off-voice.

This is a **brand voice tool**, not a generic loader. It ties the
200ms edge-response story to a visual primitive that reads as
infrastructure.

```tsx
import { Spinner } from "@/components/ui/spinner"

<Spinner />                                        // braille dots, 14px, currentColor
<Spinner variant="scan" tone="signal" size="md" /> // signal-orange scan wave
<Spinner variant="breathe" paused />               // frozen on frame 0
```

| Prop       | Type                                          | Default     |
|------------|-----------------------------------------------|-------------|
| `variant`  | one of 47 (see below)                         | `"dots"`    |
| `tone`     | `"auto"` \| `"cream"` \| `"ink"` \| `"signal"` \| `"muted"` | `"auto"`    |
| `size`     | `"xs"` \| `"sm"` \| `"md"` \| `"lg"` (12/14/16/20 px) | `"sm"`      |
| `paused`   | `boolean`                                     | `false`     |
| `label`    | `string` — screen-reader announcement         | `"Loading"` |

**When to pick which**
- **Braille** (`dots`, `wave`, `scan`, `pulse`, `breathe`, `orbit`) —
  live grid data, Zap edge activity, agent streams. Default set.
- **ASCII** (`rolling_line`, `arc`, `point`, `grow_horizontal`) —
  CLI-style UIs, dev tools, low-bandwidth grounds.

Braille (32): `dots`, `dots2`–`dots14`, `sand`, `bounce`, `dots_circle`,
`wave`, `scan`, `rain`, `pulse`, `snake`, `sparkle`, `cascade`,
`columns`, `orbit`, `breathe`, `waverows`, `checkerboard`, `helix`,
`fillsweep`, `diagswipe`.

ASCII (15): `dqpb`, `rolling_line`, `simple_dots`,
`simple_dots_scrolling`, `arc`, `balloon`, `circle_halves`,
`circle_quarters`, `point`, `square_corners`, `toggle`, `triangle`,
`grow_horizontal`, `grow_vertical`, `noise`.

Also exports `SPINNERS` (full frame/interval map) and
`SPINNER_VARIANTS` (ordered list) for building galleries.

## Page-level components

Beyond the primitives, a few higher-level editorial pieces live
directly in `components/`:

- `site-header` — the top nav bar wrapping `editorial-nav`.
- `editorial-nav` — squircle + "Sourceful Design" lockup + uppercase
  micro-label links with animated underline.
- `editorial-section` — the section-grounding wrapper. Each spread
  picks `cream`, `paper`, or `ink` and flips fg/bg accordingly.
- `duotone-image` + `DuotoneDefs` — SVG filter primitives for hero
  imagery (signal / cool / ink washes).
- `telemetry-gallery`, `market-map` — example content blocks that show
  the system applied to Sourceful-specific data.
- `theme-toggle`, `lenis-provider`, `theme-provider`.

The three approved brand marks are static SVGs in `public/assets/`:
`sourceful-icon.svg` (squircle icon), `sourceful-squircle.svg` (icon +
"Sourceful Energy" lockup), `sourceful-design-lockup.svg` (site nav
only). No React Logo component — drop them in as `<img>` / `<Image>`.

## Patterns

### Dark mode

`class` strategy. `.dark` toggles on `<html>` via `next-themes`.
`editorial-section` flips its own ground/text tokens, so dark mode is
automatic for anything using the section wrapper.

### Animations

Keyframes in `globals.css`: `fade-in`, `fade-out`, `scale-in`,
`slide-in-from-*`, `energy-pulse`, `shimmer`, `pulse-ring`, `scroll`.

All primitives respect `prefers-reduced-motion` (Spinner freezes on
frame 0, transitions shorten or disable).

### Voice in copy

- No em/en dashes in user-facing text — commas, periods, parentheses.
- B2B infrastructure tone. No "revolutionary" / "game-changing" /
  "seamless". Specific over generic, numbers over adjectives.
- Collaborative with utilities, never adversarial.
- Don't fabricate product capabilities. When unsure, ask.

## Changelog

Long-form entries in `content/changelog/CHANGELOG.md`, surfaced on
`/changelog` and as RSS at `/changelog.xml`.

Conventional-commit types used: `feat`, `fix`, `docs`, `refactor`,
`BREAKING CHANGE`. Scopes: `component`, `token`, `brand`, `docs`.

## Development

```bash
npm install
npm run dev      # localhost:3000
npm run build
npm run lint
```

The site deploys from `main` to design.sourceful.energy. No npm
publish step — this repo is the reference, not a package.

## Links

- Docs: https://design.sourceful.energy
- GitHub: https://github.com/srcfl/srcful-design-system
