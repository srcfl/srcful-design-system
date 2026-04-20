"use client";

/**
 * TelemetryGallery — six-tile editorial chart grid. Ported from
 * sourceful-marketing-site @ hosts for the design system reference.
 *
 * Charts are hand-rolled SVG (no Recharts) so stroke weight, colour
 * and type match the editorial grammar exactly. Colours use
 * `currentColor` so the gallery inherits whatever foreground its
 * parent section sets (ink on cream, or cream on ink in dark mode).
 *
 * Data arrays are illustrative — deterministic curves modelled on a
 * plausible Swedish residential day, not live telemetry.
 */

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

const ACCENT = "var(--color-signal)";

// Use currentColor so the gallery inherits the parent section's fg.
// withAlpha(FG, x) is preserved for readability; it wraps currentColor
// in color-mix so every stroke / fill keeps its relative weight.
const FG = "currentColor";

export function TelemetryGallery() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      style={{
        borderTop: `1px solid ${withAlpha(FG, 0.18)}`,
        borderLeft: `1px solid ${withAlpha(FG, 0.18)}`,
      }}
    >
      <Tile index={1} label="Consumption" window="Last 24h" value="18.4" unit="kWh">
        <AreaSpark data={CONSUMPTION} />
      </Tile>
      <Tile
        index={2}
        label="Production mix"
        window="Today · by source"
        value="12.1"
        unit="kWh self-generated"
      >
        <StackedArea
          series={[
            { values: GRID_IMPORT, color: withAlpha(FG, 0.22) },
            { values: BATTERY, color: withAlpha(FG, 0.55) },
            { values: SOLAR, color: ACCENT },
          ]}
        />
        <MiniLegend
          items={[
            { label: "Solar", color: ACCENT },
            { label: "Battery", color: withAlpha(FG, 0.55) },
            { label: "Grid", color: withAlpha(FG, 0.22) },
          ]}
        />
      </Tile>
      <Tile
        index={3}
        label="Spot price"
        window="SE3 · today"
        value="1.84"
        unit="SEK/kWh · now"
      >
        <LineSpark data={SPOT_PRICE} markNow={17} />
      </Tile>
      <Tile
        index={4}
        label="Peak shaving"
        window="Evening event"
        value="2.2"
        unit="kW clipped"
      >
        <ShaveChart raw={PEAK_RAW} shaved={PEAK_SHAVED} />
      </Tile>
      <Tile index={5} label="Phase balance" window="Live" live value="14.2 / 11.6 / 16.8" unit="A">
        <PhaseBars />
      </Tile>
      <Tile
        index={6}
        label="Grid flow"
        window="Today · net"
        value="−2.3"
        unit="kWh · net export"
      >
        <ZeroBarChart data={GRID_FLOW} />
      </Tile>
    </div>
  );
}

function Tile({
  index,
  label,
  window,
  value,
  unit,
  live = false,
  children,
}: {
  index: number;
  label: string;
  window: string;
  value: string;
  unit: string;
  live?: boolean;
  children: ReactNode;
}) {
  const numStr = String(index).padStart(2, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: 0.04 * index,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{
        padding: "clamp(22px, 2.2vw, 32px)",
        borderRight: `1px solid ${withAlpha(FG, 0.18)}`,
        borderBottom: `1px solid ${withAlpha(FG, 0.18)}`,
        minHeight: "clamp(220px, 24vw, 280px)",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <span style={kickerBase}>
          <span style={{ color: ACCENT }}>{numStr}</span>
          <span style={{ color: withAlpha(FG, 0.4), margin: "0 8px" }}>·</span>
          <span>{label}</span>
        </span>
        <span
          style={{
            ...kickerBase,
            color: withAlpha(FG, 0.5),
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          {live && <LiveDot />}
          {window}
        </span>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 10,
          minHeight: 80,
        }}
      >
        {children}
      </div>

      <div className="flex items-baseline gap-2">
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.5rem, 2vw, 1.875rem)",
            fontWeight: 500,
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        <span style={{ ...kickerBase, color: withAlpha(FG, 0.55) }}>{unit}</span>
      </div>
    </motion.div>
  );
}

function AreaSpark({ data, color = ACCENT }: { data: number[]; color?: string }) {
  const W = 300;
  const H = 72;
  const max = Math.max(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - (v / max) * H;
    return [x, y] as const;
  });
  const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const fill = `${line} L ${W} ${H} L 0 ${H} Z`;
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <path d={fill} fill={color} fillOpacity={0.14} />
      <path d={line} stroke={color} strokeWidth={1.25} fill="none" />
    </svg>
  );
}

function LineSpark({ data, markNow }: { data: number[]; markNow?: number }) {
  const W = 300;
  const H = 72;
  const max = Math.max(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - (v / max) * H;
    return [x, y] as const;
  });
  const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const nowPt = markNow !== undefined ? pts[markNow] : undefined;
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
    >
      <line x1={0} x2={W} y1={H - 0.5} y2={H - 0.5} stroke={withAlpha(FG, 0.14)} strokeWidth={0.5} />
      <path d={line} stroke={ACCENT} strokeWidth={1.25} fill="none" />
      {nowPt && (
        <>
          <line
            x1={nowPt[0]}
            x2={nowPt[0]}
            y1={0}
            y2={H}
            stroke={withAlpha(FG, 0.28)}
            strokeWidth={0.75}
            strokeDasharray="2 3"
          />
          <circle cx={nowPt[0]} cy={nowPt[1]} r={3} fill={ACCENT} />
        </>
      )}
    </svg>
  );
}

function StackedArea({ series }: { series: { values: number[]; color: string }[] }) {
  const W = 300;
  const H = 72;
  const len = series[0].values.length;
  const stacks: number[][] = [];
  for (let i = 0; i < len; i++) {
    let s = 0;
    const col: number[] = [];
    for (const layer of series) {
      s += layer.values[i];
      col.push(s);
    }
    stacks.push(col);
  }
  const max = Math.max(...stacks.map((col) => col[col.length - 1])) || 1;

  const paths = series.map((layer, layerIdx) => {
    const upper = stacks.map((col) => col[layerIdx]);
    const lower =
      layerIdx === 0 ? new Array(len).fill(0) : stacks.map((col) => col[layerIdx - 1]);
    const up = upper.map((v, i) => {
      const x = (i / (len - 1)) * W;
      const y = H - (v / max) * H;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    });
    const down = lower
      .slice()
      .reverse()
      .map((v, i) => {
        const x = ((len - 1 - i) / (len - 1)) * W;
        const y = H - (v / max) * H;
        return `L ${x} ${y}`;
      });
    return { d: [...up, ...down, "Z"].join(" "), color: layer.color };
  });

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.color} fillOpacity={0.85} />
      ))}
    </svg>
  );
}

function ShaveChart({ raw, shaved }: { raw: number[]; shaved: number[] }) {
  const W = 300;
  const H = 72;
  const max = Math.max(...raw);
  const rawPts = raw.map((v, i) => {
    const x = (i / (raw.length - 1)) * W;
    const y = H - (v / max) * H;
    return [x, y] as const;
  });
  const shavedPts = shaved.map((v, i) => {
    const x = (i / (shaved.length - 1)) * W;
    const y = H - (v / max) * H;
    return [x, y] as const;
  });
  const rawPath = rawPts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const shavedPath = shavedPts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const savedRegion = [
    ...rawPts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`),
    ...shavedPts
      .slice()
      .reverse()
      .map(([x, y]) => `L ${x} ${y}`),
    "Z",
  ].join(" ");

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <path d={savedRegion} fill={ACCENT} fillOpacity={0.2} />
      <path d={rawPath} stroke={withAlpha(FG, 0.35)} strokeWidth={1} strokeDasharray="3 3" fill="none" />
      <path d={shavedPath} stroke={ACCENT} strokeWidth={1.5} fill="none" />
    </svg>
  );
}

function PhaseBars() {
  const phases = [
    { label: "L1", value: 14.2 },
    { label: "L2", value: 11.6 },
    { label: "L3", value: 16.8 },
  ];
  const max = 20;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
      {phases.map((p) => (
        <div key={p.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              ...kickerBase,
              color: withAlpha(FG, 0.55),
              width: 22,
              flexShrink: 0,
            }}
          >
            {p.label}
          </span>
          <div
            style={{
              flex: 1,
              height: 6,
              background: withAlpha(FG, 0.1),
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: `${(p.value / max) * 100}%`,
                background: ACCENT,
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono, var(--font-sans))",
              fontSize: 12,
              fontWeight: 500,
              width: 46,
              textAlign: "right",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {p.value.toFixed(1)}&nbsp;A
          </span>
        </div>
      ))}
    </div>
  );
}

function ZeroBarChart({ data }: { data: number[] }) {
  const W = 300;
  const H = 72;
  const max = Math.max(...data.map(Math.abs)) || 1;
  const zero = H / 2;
  const barW = W / data.length;
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <line x1={0} x2={W} y1={zero} y2={zero} stroke={withAlpha(FG, 0.24)} strokeWidth={0.5} />
      {data.map((v, i) => {
        const x = i * barW + barW * 0.12;
        const barHeight = (Math.abs(v) / max) * (H / 2 - 2);
        const y = v >= 0 ? zero - barHeight : zero;
        const color = v >= 0 ? withAlpha(FG, 0.45) : ACCENT;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barW * 0.76}
            height={Math.max(barHeight, 0.8)}
            fill={color}
          />
        );
      })}
    </svg>
  );
}

function MiniLegend({ items }: { items: { label: string; color: string }[] }) {
  return (
    <div className="flex flex-wrap items-center" style={{ gap: 14 }}>
      {items.map((it) => (
        <span key={it.label} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span aria-hidden style={{ width: 8, height: 8, background: it.color, flexShrink: 0 }} />
          <span style={{ ...kickerBase, color: withAlpha(FG, 0.55) }}>{it.label}</span>
        </span>
      ))}
    </div>
  );
}

function LiveDot() {
  return (
    <span
      aria-hidden
      style={{ position: "relative", width: 6, height: 6, display: "inline-block" }}
    >
      <motion.span
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 999,
          background: ACCENT,
          boxShadow: "0 0 6px var(--color-signal, currentColor)",
        }}
      />
    </span>
  );
}

const kickerBase: CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: 10.5,
  fontWeight: 500,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
};

const CONSUMPTION = [
  0.4, 0.4, 0.3, 0.3, 0.3, 0.3, 0.3, 0.4, 0.5, 0.9, 1.6, 2.4, 2.1, 1.4, 1.0, 0.9, 0.8, 0.9, 1.0, 1.2,
  1.3, 1.1, 0.9, 0.8, 0.7, 0.7, 0.8, 1.0, 1.3, 1.8, 2.6, 3.1, 2.9, 2.4, 2.0, 1.7, 1.5, 1.3, 1.1, 0.9,
  0.7, 0.6, 0.5, 0.5, 0.4, 0.4, 0.4, 0.4,
];
const SOLAR = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.3, 0.6, 1.0, 1.5, 2.1, 2.6, 3.0, 3.2, 3.3, 3.2, 3.0, 2.6,
  2.1, 1.5, 0.9, 0.5, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
const BATTERY = [
  0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.4, 0.3, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4,
  0.7, 0.9, 0.9, 0.8, 0.6, 0.4, 0.3, 0.2, 0.1, 0, 0, 0, 0, 0, 0, 0, 0,
];
const GRID_IMPORT = [
  0.4, 0.4, 0.3, 0.3, 0.3, 0.3, 0.3, 0.4, 0.2, 0.5, 1.3, 2.2, 2.0, 1.1, 0.4, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0.1, 0.8, 1.6, 2.2, 2.4, 2.0, 1.5, 1.2, 1.1, 1.1, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.5, 0.4, 0.4,
  0.4, 0.4,
];
const SPOT_PRICE = [
  0.52, 0.5, 0.48, 0.47, 0.45, 0.44, 0.44, 0.46, 0.58, 0.82, 1.54, 1.92, 1.68, 1.2, 0.88, 0.72, 0.64,
  0.7, 0.96, 1.32, 1.88, 2.04, 1.76, 1.24,
];
const PEAK_RAW = [1.0, 1.2, 1.8, 2.4, 3.2, 4.4, 5.2, 5.1, 4.4, 3.2, 2.4, 1.8];
const PEAK_SHAVED = [1.0, 1.2, 1.8, 2.4, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 2.4, 1.8];
const GRID_FLOW = [
  0.4, 0.4, 0.3, 0.3, 0.3, 0.4, 0.6, 1.0, 0.4, -0.5, -1.4, -2.2, -2.6, -2.3, -1.4, -0.3, 0.3, 0.6, 1.0,
  0.8, 0.4, 0.3, 0.3, 0.3,
];

function withAlpha(color: string, alpha: number): string {
  if (color.startsWith("#")) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return `color-mix(in srgb, ${color} ${Math.round(alpha * 100)}%, transparent)`;
}
