"use client";

/**
 * MarketMap — editorial country plate. Hairline coastline on a cream
 * ground; a signal-orange city anchor dot marks the pilot location.
 *
 * Ported from sourceful-marketing-site @ hosts. Stroke uses
 * `currentColor` so the plate inherits the parent section's
 * foreground (ink on cream, cream on ink in dark mode).
 *
 * On scroll-in, the coastline draws itself via framer-motion
 * `pathLength` (0 → 1), staggered across tiles so each country traces
 * in sequence. Islands fade in during the mainland trace.
 */

import { motion } from "framer-motion";
import { MARKET_MAPS, MARKET_MAP_VIEWBOX } from "./market-maps-data";

const ACCENT = "var(--color-signal)";

const DRAW_DURATION = 1.5;
const DRAW_STAGGER = 0.55;
const ISLANDS_DURATION = 0.9;

type Props = {
  marketKey: string;
  index: number;
};

export function MarketMap({ marketKey, index }: Props) {
  const data = MARKET_MAPS[marketKey];
  if (!data) return null;

  const { mainland, islands, city } = data;
  const vb = MARKET_MAP_VIEWBOX;

  const drawDelay = index * DRAW_STAGGER;
  const islandsDelay = drawDelay + DRAW_DURATION * 0.35;
  const viewport = { once: true, margin: "-80px" };

  return (
    <motion.svg
      viewBox={`0 0 ${vb} ${vb}`}
      width="100%"
      height="100%"
      role="img"
      aria-label={`${marketKey} — ${city.name}`}
      style={{ display: "block" }}
    >
      <motion.path
        d={mainland}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewport}
        transition={{
          duration: DRAW_DURATION,
          delay: drawDelay,
          ease: [0.65, 0, 0.35, 1],
        }}
      />

      {islands && (
        <motion.path
          d={islands}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{
            duration: ISLANDS_DURATION,
            delay: islandsDelay,
            ease: "easeOut",
          }}
        />
      )}

      {/* City anchor — signal-orange dot + halo. */}
      <motion.g
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewport}
        transition={{
          duration: 0.4,
          delay: drawDelay + DRAW_DURATION * 0.85,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <circle cx={city.x} cy={city.y} r={14} fill={ACCENT} opacity={0.18} />
        <circle cx={city.x} cy={city.y} r={6} fill={ACCENT} />
      </motion.g>
    </motion.svg>
  );
}
