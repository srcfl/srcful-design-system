"use client";

/**
 * EditorialSection — shared shell for the magazine-style spreads.
 *
 * Frames content with a top metadata row (kicker + meta items on the left,
 * context on the right) and a bottom footer row, both bounded by hairlines.
 * Each spread sets its own bg + fg so the page rhythms through dark / cream
 * / orange grounds.
 *
 * Ported from sourceful-marketing-site @ hosts branch verbatim — this IS the
 * brand system, the rest of the design reference defers to it.
 */

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type MetaItem = string | { label: string; strong?: boolean };

export type EditorialSectionProps = {
  bg: string;
  fg: string;
  kicker?: string;
  meta?: MetaItem[];
  topRight?: ReactNode;
  footerLeft?: ReactNode;
  footerRight?: ReactNode;
  hideTop?: boolean;
  hideFooter?: boolean;
  className?: string;
  id?: string;
  children: ReactNode;
};

export function EditorialSection({
  bg,
  fg,
  kicker,
  meta,
  topRight,
  footerLeft,
  footerRight,
  hideTop = false,
  hideFooter = false,
  className,
  id,
  children,
}: EditorialSectionProps) {
  const hairline: CSSProperties = {
    height: 1,
    width: "100%",
    background: withAlpha(fg, 0.16),
  };

  const microLabel: CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: withAlpha(fg, 0.6),
  };

  const microLabelStrong: CSSProperties = {
    ...microLabel,
    color: fg,
  };

  return (
    <section
      id={id}
      className={className}
      style={{ background: bg, color: fg, position: "relative" }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8">
        {!hideTop && (
          <>
            <div style={hairline} />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4"
            >
              <div className="flex items-center gap-x-8 gap-y-2 flex-wrap">
                {kicker && <span style={microLabelStrong}>{kicker}</span>}
                {meta?.map((m, i) => {
                  const strong = typeof m !== "string" && m.strong;
                  const label = typeof m === "string" ? m : m.label;
                  return (
                    <span key={i} style={strong ? microLabelStrong : microLabel}>
                      {label}
                    </span>
                  );
                })}
              </div>
              {topRight && <span style={microLabel}>{topRight}</span>}
            </motion.div>
            <div style={hairline} />
          </>
        )}

        <div
          style={{
            paddingTop: "clamp(48px, 8vh, 112px)",
            paddingBottom: "clamp(48px, 8vh, 112px)",
          }}
        >
          {children}
        </div>

        {!hideFooter && (
          <>
            <div style={hairline} />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap items-center justify-between gap-4 py-4"
            >
              <span style={microLabelStrong}>{footerLeft}</span>
              <span style={microLabel}>{footerRight}</span>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

// ─── helpers ─────────────────────────────────────────────────────────
export function withAlpha(color: string, alpha: number): string {
  if (color.startsWith("#")) {
    const hex = color.slice(1);
    const full =
      hex.length === 3
        ? hex.split("").map((c) => c + c).join("")
        : hex.padEnd(6, "0").slice(0, 6);
    const r = parseInt(full.slice(0, 2), 16);
    const g = parseInt(full.slice(2, 4), 16);
    const b = parseInt(full.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `color-mix(in srgb, ${color} ${Math.round(alpha * 100)}%, transparent)`;
}
