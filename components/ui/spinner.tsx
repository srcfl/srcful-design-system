"use client";

/**
 * Spinner — terminal-style agent activity indicator.
 *
 * 54 Unicode frame-cycle spinners — braille, ASCII, arrows, emoji — rendered
 * as a single <span> in our monospace token. Zero SVG, zero Lottie.
 *
 * Ported from expo-agent-spinners (MIT © eronred):
 *   https://github.com/Eronred/expo-agent-spinners
 *
 * Why these exist in the Sourceful design system
 * ----------------------------------------------
 * Live grid data, Zap edge activity, AI agent streams — sub-second frame
 * cycles feel physical. They tie the 200ms edge-response story to a visual
 * primitive that reads as infrastructure, not decoration. Use them for:
 *
 *   - Live frequency / SoC / spot-price tiles while the next sample lands
 *   - Zap gateway boot, firmware flash, MQTT handshake
 *   - Admin tools while an agent thinks
 *
 * Usage
 * -----
 *   <Spinner variant="dots" />                      // default
 *   <Spinner variant="scan" tone="signal" size="md" />
 *   <Spinner variant="breathe" paused />            // freeze on frame 0
 *
 * Honours prefers-reduced-motion automatically: freezes on frame 0.
 */

import { useEffect, useState, type CSSProperties, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// ─── Frame data ─────────────────────────────────────────────────────
//
// Each entry: { frames, interval }. Interval is ms per frame.
// Frames preserve the original Unicode widths; don't collapse whitespace.

export const SPINNERS = {
  // ── Braille (32) ───────────────────────────────────────────────────
  dots:         { frames: ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"], interval: 80 },
  dots2:        { frames: ["⣾","⣽","⣻","⢿","⡿","⣟","⣯","⣷"], interval: 80 },
  dots3:        { frames: ["⠋","⠙","⠚","⠞","⠖","⠦","⠴","⠲","⠳","⠓"], interval: 80 },
  dots4:        { frames: ["⠄","⠆","⠇","⠋","⠙","⠸","⠰","⠠","⠰","⠸","⠙","⠋","⠇","⠆"], interval: 80 },
  dots5:        { frames: ["⠋","⠙","⠚","⠒","⠂","⠂","⠒","⠲","⠴","⠦","⠖","⠒","⠐","⠐","⠒","⠓","⠋"], interval: 80 },
  dots6:        { frames: ["⠁","⠉","⠙","⠚","⠒","⠂","⠂","⠒","⠲","⠴","⠤","⠄","⠄","⠤","⠴","⠲","⠒","⠂","⠂","⠒","⠚","⠙","⠉","⠁"], interval: 80 },
  dots7:        { frames: ["⠈","⠉","⠋","⠓","⠒","⠐","⠐","⠒","⠖","⠦","⠤","⠠","⠠","⠤","⠦","⠖","⠒","⠐","⠐","⠒","⠓","⠋","⠉","⠈"], interval: 80 },
  dots8:        { frames: ["⠁","⠁","⠉","⠙","⠚","⠒","⠂","⠂","⠒","⠲","⠴","⠤","⠄","⠄","⠤","⠠","⠠","⠤","⠦","⠖","⠒","⠐","⠐","⠒","⠓","⠋","⠉","⠈","⠈"], interval: 80 },
  dots9:        { frames: ["⢹","⢺","⢼","⣸","⣇","⡧","⡗","⡏"], interval: 80 },
  dots10:       { frames: ["⢄","⢂","⢁","⡁","⡈","⡐","⡠"], interval: 80 },
  dots11:       { frames: ["⠁","⠂","⠄","⡀","⢀","⠠","⠐","⠈"], interval: 100 },
  dots12:       { frames: ["⢀⠀","⡀⠀","⠄⠀","⢂⠀","⡂⠀","⠅⠀","⢃⠀","⡃⠀","⠍⠀","⢋⠀","⡋⠀","⠍⠁","⢋⠁","⡋⠁","⠍⠉","⠋⠉","⠋⠉","⠉⠙","⠉⠙","⠉⠩","⠈⢙","⠈⡙","⢈⠩","⡀⢙","⠄⡙","⢂⠩","⡂⢘","⠅⡘","⢃⠨","⡃⢐","⠍⡐","⢋⠠","⡋⢀","⠍⡁","⢋⠁","⡋⠁","⠍⠉","⠋⠉","⠋⠉","⠉⠙","⠉⠙","⠉⠩","⠈⢙","⠈⡙","⠈⠩","⠀⢙","⠀⡙","⠀⠩","⠀⢘","⠀⡘","⠀⠨","⠀⢐","⠀⡐","⠀⠠","⠀⢀","⠀⡀"], interval: 80 },
  dots13:       { frames: ["⣼","⣹","⢻","⠿","⡟","⣏","⣧","⣶"], interval: 80 },
  dots14:       { frames: ["⠉⠉","⠈⠙","⠀⠹","⠀⢸","⠀⣰","⢀⣠","⣀⣀","⣄⡀","⣆⠀","⡇⠀","⠏⠀","⠋⠁"], interval: 80 },
  sand:         { frames: ["⠁","⠂","⠄","⡀","⡈","⡐","⡠","⣀","⣁","⣂","⣄","⣌","⣔","⣤","⣥","⣦","⣮","⣶","⣷","⣿","⡿","⠿","⢟","⠟","⡛","⠛","⠫","⢋","⠋","⠍","⡉","⠉","⠑","⠡","⢁"], interval: 80 },
  bounce:       { frames: ["⠁","⠂","⠄","⡀","⠄","⠂"], interval: 120 },
  dots_circle:  { frames: ["⢎⠀","⠎⠁","⠊⠑","⠈⠱","⠀⡱","⢀⡰","⢄⡠","⢆⡀"], interval: 80 },
  wave:         { frames: ["⠁⠂⠄⡀","⠂⠄⡀⢀","⠄⡀⢀⠠","⡀⢀⠠⠐","⢀⠠⠐⠈","⠠⠐⠈⠁","⠐⠈⠁⠂","⠈⠁⠂⠄"], interval: 100 },
  scan:         { frames: ["⠀⠀⠀⠀","⡇⠀⠀⠀","⣿⠀⠀⠀","⢸⡇⠀⠀","⠀⣿⠀⠀","⠀⢸⡇⠀","⠀⠀⣿⠀","⠀⠀⢸⡇","⠀⠀⠀⣿","⠀⠀⠀⢸"], interval: 70 },
  rain:         { frames: ["⢁⠂⠔⠈","⠂⠌⡠⠐","⠄⡐⢀⠡","⡈⠠⠀⢂","⠐⢀⠁⠄","⠠⠁⠊⡀","⢁⠂⠔⠈","⠂⠌⡠⠐","⠄⡐⢀⠡","⡈⠠⠀⢂","⠐⢀⠁⠄","⠠⠁⠊⡀"], interval: 100 },
  pulse:        { frames: ["⠀⠶⠀","⠰⣿⠆","⢾⣉⡷","⣏⠀⣹","⡁⠀⢈"], interval: 180 },
  snake:        { frames: ["⣁⡀","⣉⠀","⡉⠁","⠉⠉","⠈⠙","⠀⠛","⠐⠚","⠒⠒","⠖⠂","⠶⠀","⠦⠄","⠤⠤","⠠⢤","⠀⣤","⢀⣠","⣀⣀"], interval: 80 },
  sparkle:      { frames: ["⡡⠊⢔⠡","⠊⡰⡡⡘","⢔⢅⠈⢢","⡁⢂⠆⡍","⢔⠨⢑⢐","⠨⡑⡠⠊"], interval: 150 },
  cascade:      { frames: ["⠀⠀⠀⠀","⠀⠀⠀⠀","⠁⠀⠀⠀","⠋⠀⠀⠀","⠞⠁⠀⠀","⡴⠋⠀⠀","⣠⠞⠁⠀","⢀⡴⠋⠀","⠀⣠⠞⠁","⠀⢀⡴⠋","⠀⠀⣠⠞","⠀⠀⢀⡴","⠀⠀⠀⣠","⠀⠀⠀⢀"], interval: 60 },
  columns:      { frames: ["⡀⠀⠀","⡄⠀⠀","⡆⠀⠀","⡇⠀⠀","⣇⠀⠀","⣧⠀⠀","⣷⠀⠀","⣿⠀⠀","⣿⡀⠀","⣿⡄⠀","⣿⡆⠀","⣿⡇⠀","⣿⣇⠀","⣿⣧⠀","⣿⣷⠀","⣿⣿⠀","⣿⣿⡀","⣿⣿⡄","⣿⣿⡆","⣿⣿⡇","⣿⣿⣇","⣿⣿⣧","⣿⣿⣷","⣿⣿⣿","⣿⣿⣿","⠀⠀⠀"], interval: 60 },
  orbit:        { frames: ["⠃","⠉","⠘","⠰","⢠","⣀","⡄","⠆"], interval: 100 },
  breathe:      { frames: ["⠀","⠂","⠌","⡑","⢕","⢝","⣫","⣟","⣿","⣟","⣫","⢝","⢕","⡑","⠌","⠂","⠀"], interval: 100 },
  waverows:     { frames: ["⠖⠉⠉⠑","⡠⠖⠉⠉","⣠⡠⠖⠉","⣄⣠⡠⠖","⠢⣄⣠⡠","⠙⠢⣄⣠","⠉⠙⠢⣄","⠊⠉⠙⠢","⠜⠊⠉⠙","⡤⠜⠊⠉","⣀⡤⠜⠊","⢤⣀⡤⠜","⠣⢤⣀⡤","⠑⠣⢤⣀","⠉⠑⠣⢤","⠋⠉⠑⠣"], interval: 90 },
  checkerboard: { frames: ["⢕⢕⢕","⡪⡪⡪","⢊⠔⡡","⡡⢊⠔"], interval: 250 },
  helix:        { frames: ["⢌⣉⢎⣉","⣉⡱⣉⡱","⣉⢎⣉⢎","⡱⣉⡱⣉","⢎⣉⢎⣉","⣉⡱⣉⡱","⣉⢎⣉⢎","⡱⣉⡱⣉","⢎⣉⢎⣉","⣉⡱⣉⡱","⣉⢎⣉⢎","⡱⣉⡱⣉","⢎⣉⢎⣉","⣉⡱⣉⡱","⣉⢎⣉⢎","⡱⣉⡱⣉"], interval: 80 },
  fillsweep:    { frames: ["⣀⣀","⣤⣤","⣶⣶","⣿⣿","⣿⣿","⣿⣿","⣶⣶","⣤⣤","⣀⣀","⠀⠀","⠀⠀"], interval: 100 },
  diagswipe:    { frames: ["⠁⠀","⠋⠀","⠟⠁","⡿⠋","⣿⠟","⣿⡿","⣿⣿","⣿⣿","⣾⣿","⣴⣿","⣠⣾","⢀⣴","⠀⣠","⠀⢀","⠀⠀","⠀⠀"], interval: 60 },

  // ── ASCII (15) ─────────────────────────────────────────────────────
  dqpb:                   { frames: ["d","q","p","b"], interval: 100 },
  rolling_line:           { frames: ["/","-","\\","|","\\","-"], interval: 80 },
  simple_dots:            { frames: [".  ",".. ","...","   "], interval: 400 },
  simple_dots_scrolling:  { frames: [".  ",".. ","..."," ..","  .","   "], interval: 200 },
  arc:                    { frames: ["◜","◠","◝","◞","◡","◟"], interval: 100 },
  balloon:                { frames: [".","o","O","o","."], interval: 120 },
  circle_halves:          { frames: ["◐","◓","◑","◒"], interval: 50 },
  circle_quarters:        { frames: ["◴","◷","◶","◵"], interval: 120 },
  point:                  { frames: ["···","•··","·•·","··•","···"], interval: 200 },
  square_corners:         { frames: ["◰","◳","◲","◱"], interval: 180 },
  toggle:                 { frames: ["⊶","⊷"], interval: 250 },
  triangle:               { frames: ["◢","◣","◤","◥"], interval: 50 },
  grow_horizontal:        { frames: ["▏","▎","▍","▌","▋","▊","▉","▊","▋","▌","▍","▎"], interval: 120 },
  grow_vertical:          { frames: ["▁","▃","▄","▅","▆","▇","▆","▅","▄","▃"], interval: 120 },
  noise:                  { frames: ["▓","▒","░"," ","░","▒"], interval: 100 },

  // ── Arrows (2) ─────────────────────────────────────────────────────
  arrow:                  { frames: ["←","↖","↑","↗","→","↘","↓","↙"], interval: 100 },
  double_arrow:           { frames: ["⇐","⇖","⇑","⇗","⇒","⇘","⇓","⇙"], interval: 100 },

  // ── Emoji (6) — note: color tone is ignored, emoji is its own colour
  hearts:                 { frames: ["🩷","🧡","💛","💚","💙","🩵","💜","🤎","🖤","🩶","🤍"], interval: 120 },
  clock:                  { frames: ["🕛","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚"], interval: 100 },
  earth:                  { frames: ["🌍","🌎","🌏"], interval: 180 },
  moon:                   { frames: ["🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘"], interval: 80 },
  speaker:                { frames: ["🔈","🔉","🔊","🔉"], interval: 160 },
  weather:                { frames: ["☀️","🌤","⛅️","🌥","☁️","🌧","🌨","⛈"], interval: 100 },
} as const;

export type SpinnerVariant = keyof typeof SPINNERS;

/** Every variant name in deterministic order — handy for specimen grids. */
export const SPINNER_VARIANTS = Object.keys(SPINNERS) as readonly SpinnerVariant[];

// ─── Component ─────────────────────────────────────────────────────

type SpinnerTone = "auto" | "cream" | "ink" | "signal" | "muted";
type SpinnerSize = "xs" | "sm" | "md" | "lg";

const TONE_COLORS: Record<SpinnerTone, string> = {
  // On dark grounds, cream reads; on light grounds, ink. `auto` defers to
  // the parent's `color` via currentColor — use this inside a container
  // that already sets a colour.
  auto:   "currentColor",
  cream:  "var(--color-cream)",
  ink:    "var(--color-ink)",
  signal: "var(--color-signal)",
  muted:  "rgba(120, 120, 120, 0.55)",
};

const SIZE_PX: Record<SpinnerSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
};

type SpinnerOwnProps = {
  /** Which of the 54 frame sets to cycle. */
  variant?: SpinnerVariant;
  /** Colour token. `auto` inherits via currentColor. Emoji variants ignore this. */
  tone?: SpinnerTone;
  /** Preset font-size. Defaults to `sm` (14px). */
  size?: SpinnerSize;
  /** Freeze on frame 0. Useful for docs/screenshots. */
  paused?: boolean;
  /** Accessible label announced to screen readers. Defaults to "Loading". */
  label?: string;
};

export type SpinnerProps = SpinnerOwnProps &
  Omit<HTMLAttributes<HTMLSpanElement>, keyof SpinnerOwnProps>;

export function Spinner({
  variant = "dots",
  tone = "auto",
  size = "sm",
  paused = false,
  label = "Loading",
  className,
  style,
  ...rest
}: SpinnerProps) {
  const spec = SPINNERS[variant];
  const [frameIndex, setFrameIndex] = useState(0);

  // Reduced-motion: freeze on frame 0 regardless of `paused`.
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(
      () => setFrameIndex((i) => (i + 1) % spec.frames.length),
      spec.interval
    );
    return () => window.clearInterval(id);
  }, [paused, reduced, spec.frames.length, spec.interval]);

  // Reserve width based on the first frame's display character count so the
  // container doesn't shift between frames. Using `ch` works because the
  // span renders in a monospace font.
  const charCount = [...spec.frames[0]].length;
  const fontSize = SIZE_PX[size];

  const mergedStyle: CSSProperties = {
    display: "inline-block",
    fontFamily: "var(--font-mono)",
    fontSize,
    lineHeight: 1,
    color: TONE_COLORS[tone],
    minWidth: `${charCount}ch`,
    textAlign: "center",
    whiteSpace: "pre",
    fontVariantNumeric: "tabular-nums",
    ...style,
  };

  return (
    <span
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cn(className)}
      style={mergedStyle}
      {...rest}
    >
      <span aria-hidden="true">{spec.frames[frameIndex]}</span>
    </span>
  );
}
