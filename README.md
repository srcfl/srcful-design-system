# Sourceful Design System

Single-page design reference for Sourceful Energy. Warm editorial
identity — signal orange on cream, ink on dark, Satoshi display.

**Live:** [design.sourceful.energy](https://design.sourceful.energy)

## What this repo is

A Next.js site that *is* the design reference. Everything a downstream
project needs to match the Sourceful look lives on one scrollable page:
tokens, primitives, typography specimens, spreads, spinners, voice.

It is **not** an npm package. Consuming projects match the system by
pointing Claude at the live URL (or this repo) — the page, the tokens,
and the primitive source are the spec.

## Using it with Claude

Drop this into any Sourceful project you're starting:

> Match the Sourceful design system:
> https://design.sourceful.energy — warm cream ground, signal orange
> (#E85D1F), ink (#0A0A0A), Satoshi display, JetBrains Mono micro-labels.

Claude reads the page, grabs the tokens and patterns, and applies them.
For the component source, point at `components/ui/` in this repo.

## Development

```bash
npm install
npm run dev      # localhost:3000
npm run build
npm run lint
```

## Structure

```
app/
  globals.css    # tokens — cream, ink, signal, editorial grounds
  layout.tsx     # Satoshi + JetBrains Mono wiring
  page.tsx       # the reference page itself
components/
  ui/            # 24 shadcn-style primitives (Button, Card, Spinner, …)
  editorial-*    # section chrome, nav, kickers
  duotone-image  # SVG duotone filters for hero imagery
  market-map, telemetry-gallery, logo, theme-toggle
public/
  assets/        # logo + lockup SVGs
  fonts/         # Satoshi
```

## License

MIT © Sourceful Energy
