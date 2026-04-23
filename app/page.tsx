"use client";

/**
 * Sourceful Design System — single-page reference.
 *
 * Built with the editorial grammar from sourceful-marketing-site @ hosts:
 *   hero         (near-black ground, signal-orange specimen word)
 *   01 · Brand   (cream — palette + type specimens + voice)
 *   02 · Components (paper — shadcn primitives)
 *   03 · Using   (dark — copy/paste for Claude)
 *
 * Give this URL (or the repo) to Claude and it will match the system.
 */

import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Zap, CheckCircle2, AlertTriangle, Info } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { EditorialSection, withAlpha } from "@/components/editorial-section";
import { TelemetryGallery } from "@/components/telemetry-gallery";
import { MarketMap } from "@/components/market-map";
import { DuotoneDefs, DuotoneImage } from "@/components/duotone-image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Spinner, SPINNERS, type SpinnerVariant } from "@/components/ui/spinner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

/**
 * INK / CREAM / PAPER are the LITERAL brand hex values — used for Hero and
 * UsingSpread which intentionally stay ink-ground in both light & dark mode.
 *
 * For BrandSpread (cream ground) and ComponentsSpread (paper ground) we use
 * the theme-aware CSS vars `--editorial-*-bg` / `--editorial-*-fg` so the
 * sections flip in dark mode (cream/paper invert to ink, ink text becomes
 * cream). That keeps contrast consistent when the user toggles the theme.
 */
const INK = "#0A0A0A";
const CREAM = "#F5F2E1";
const PAPER = "#FAFAF7";
const SIGNAL = "var(--color-signal)";

// Theme-aware section tokens
const CREAM_SECTION_BG = "var(--editorial-cream-bg)";
const CREAM_SECTION_FG = "var(--editorial-cream-fg)";
const PAPER_SECTION_BG = "var(--editorial-paper-bg)";
const PAPER_SECTION_FG = "var(--editorial-paper-fg)";

export default function Page() {
  return (
    <>
      <SiteHeader />
      {/* Duotone SVG filter definitions — mounted once, referenced by any
          photo via filter: url(#duotone-signal). */}
      <DuotoneDefs />
      <main>
        <Hero />
        <BrandSpread />
        <EditorialSpread />
        <ComponentsSpread />
        <UsingSpread />
      </main>
    </>
  );
}

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

/* =========================================================================
   HERO — dark ground, specimen headline, hairlines top + bottom
   ========================================================================= */

// Prompt template offered by the Hero "Copy the prompt" CTA. Matches
// the worked examples in the Using spread: name the thing with its
// subject, point at the DESIGN.md spec. One paste, fill in the <…>,
// send. DESIGN.md is the Stitch-format serialized system, dense and
// agent-ready, versus the hosted page which is for human reading.
const HERO_PROMPT_TEMPLATE = `Create <describe the thing with its subject>
and use the Sourceful design system to ensure consistency:

  https://design.sourceful.energy/DESIGN.md`;

function Hero() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(HERO_PROMPT_TEMPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable (insecure context, old browser) — leave
      // the button idle. The example prompt in the Using spread is still
      // selectable and copyable by hand.
    }
  }

  const hairline = { height: 1, width: "100%", background: withAlpha(CREAM, 0.14) } as const;
  const microLabel = {
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: withAlpha(CREAM, 0.55),
  };
  const microLabelStrong = { ...microLabel, color: CREAM };

  return (
    <section
      style={{
        background: INK,
        color: CREAM,
        minHeight: "92svh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <motion.div
        className="max-w-7xl mx-auto w-full px-6 md:px-8 flex-1 flex flex-col"
        style={{ paddingTop: "clamp(20px, 3vh, 36px)", paddingBottom: "clamp(48px, 8vh, 96px)" }}
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
      >
        <motion.div variants={reveal} style={hairline} />
        <motion.div
          variants={reveal}
          className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4"
        >
          <div className="flex items-center gap-x-8 flex-wrap">
            <span style={microLabelStrong}>Design system</span>
            <span style={microLabel}>Sourceful Energy</span>
            <span style={microLabel}>v0.1 · Lite</span>
          </div>
          <span style={microLabel}>One page · one system</span>
        </motion.div>
        <motion.div variants={reveal} style={hairline} />

        <div className="flex-1 flex flex-col justify-end" style={{ paddingTop: "clamp(48px, 10vh, 140px)" }}>
          <motion.p
            variants={reveal}
            className="text-balance max-w-4xl"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 300,
              fontSize: "clamp(1.25rem, 2.4vw, 2.25rem)",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              margin: "0 0 clamp(24px, 4vh, 48px) 0",
              color: withAlpha(CREAM, 0.88),
            }}
          >
            A single page to show Claude what Sourceful looks like.
          </motion.p>

          <motion.h1
            variants={reveal}
            className="specimen"
            style={{
              fontSize: "clamp(5rem, 18vw, 15rem)",
              margin: 0,
              color: CREAM,
              display: "inline-flex",
              alignItems: "baseline",
            }}
          >
            DESIGN<span aria-hidden style={{ color: SIGNAL }}>.</span>
          </motion.h1>
        </div>

        <motion.div
          variants={reveal}
          className="grid md:grid-cols-12 gap-8 items-end"
          style={{ marginTop: "clamp(32px, 5vh, 64px)" }}
        >
          <p
            className="md:col-span-7 max-w-xl text-balance"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
              fontWeight: 400,
              lineHeight: 1.55,
              color: withAlpha(CREAM, 0.7),
              margin: 0,
            }}
          >
            Tokens, type specimens and shadcn primitives skinned with the
            Sourceful visual system. Point an AI here and anything it builds
            will feel like ours.
          </p>
          <div className="md:col-span-5 md:text-right">
            <Button size="lg" onClick={handleCopy} aria-live="polite">
              {copied ? (
                <>
                  <Check strokeWidth={2} />
                  <span>Prompt copied</span>
                </>
              ) : (
                <>
                  <Copy strokeWidth={2} />
                  <span>Copy the prompt</span>
                </>
              )}
            </Button>
          </div>
        </motion.div>

        <motion.div variants={reveal} style={{ ...hairline, marginTop: "clamp(32px, 5vh, 48px)" }} />
        <motion.div variants={reveal} className="flex flex-wrap items-center justify-between gap-4 py-4">
          <span style={microLabelStrong}>Scroll for the system</span>
          <span style={microLabel}>Directory · 00 of 04</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* =========================================================================
   01 · BRAND
   ========================================================================= */

function BrandSpread() {
  return (
    <EditorialSection
      id="brand"
      bg={CREAM_SECTION_BG}
      fg={CREAM_SECTION_FG}
      kicker="01 · Brand"
      meta={[
        { label: "Editorial light", strong: true },
        "Signal orange",
        "Satoshi",
      ]}
      topRight="Ground truth · tokens"
      footerLeft="Two inks, three greens, one signal"
      footerRight="Directory · 01 of 04"
    >
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
        <motion.h2
          className="lg:col-span-8 display-xl text-balance"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ margin: 0, color: CREAM_SECTION_FG }}
        >
          Warm cream, near-black ink, one recurring orange.
        </motion.h2>
        <motion.p
          className="lg:col-span-4 lg:pt-3 max-w-xl text-balance"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.95rem, 1.1vw, 1.125rem)",
            lineHeight: 1.55,
            margin: 0,
            color: withAlpha(CREAM_SECTION_FG, 0.72),
          }}
        >
          Editorial light is the default. Grounds alternate between cream
          (#F5F2E1), paper (#FAFAF7), and near-black (#0A0A0A). Signal orange{" "}
          <span style={{ color: "var(--color-signal)", fontWeight: 500 }}>#E85D1F</span> carries
          the accent.
        </motion.p>
      </div>

      <div style={{ marginTop: "clamp(56px, 8vh, 112px)" }}>
        <Subhead label="Grounds" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <Swatch name="Ink" value="#0A0A0A" bg="#0A0A0A" fg={CREAM} />
          <Swatch name="Cream" value="#F5F2E1" bg="#F5F2E1" fg={INK} />
          <Swatch name="Paper" value="#FAFAF7" bg="#FAFAF7" fg={INK} />
          <Swatch name="Surface" value="#FFFFFF" bg="#FFFFFF" fg={INK} />
        </div>

        <div className="mt-12">
          <Subhead label="Accent" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <Swatch name="Signal" value="#E85D1F" bg="#E85D1F" fg={INK} hero />
            <Swatch name="Editorial green" value="#15803D" bg="#15803D" fg="#fff" note="Success only" />
            <Swatch name="Destructive" value="#FF0D0D" bg="#FF0D0D" fg="#fff" note="Error only" />
          </div>
        </div>

        <div className="mt-12">
          <Subhead label="Scale · Signal orange" />
          <div className="mt-6 grid grid-cols-6 md:grid-cols-11 gap-1">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((step) => (
              <div key={step} className="flex flex-col items-start">
                <div
                  className="w-full aspect-square"
                  style={{ background: `var(--sourceful-signal-${step})` }}
                />
                <div className="micro-label mt-2" style={{ color: withAlpha(CREAM_SECTION_FG, 0.55) }}>
                  {step}
                </div>
              </div>
            ))}
          </div>
          <p
            className="mt-4 max-w-2xl"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              lineHeight: 1.6,
              color: withAlpha(CREAM_SECTION_FG, 0.6),
            }}
          >
            One brand scale. Lower steps (50–200) are washes and soft tints, 500
            is the signal, higher steps (600–950) are pressed and ink pairings.
            Editorial green stays a single success token, not a scale.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "clamp(72px, 10vh, 144px)" }}>
        <Subhead label="Typography" />
        <div className="mt-8 space-y-10">
          <TypeSpecimen label="Specimen · Satoshi 900" meta="clamp(5rem, 18vw, 15rem)">
            <span className="specimen" style={{ fontSize: "clamp(3rem, 12vw, 10rem)", color: CREAM_SECTION_FG }}>
              200<span style={{ color: SIGNAL }}>ms</span>
            </span>
          </TypeSpecimen>

          <TypeSpecimen label="Display · Satoshi 500" meta="clamp(2.5rem, 6.5vw, 5.5rem)">
            <h3 className="display-xl" style={{ margin: 0, color: CREAM_SECTION_FG }}>
              Local energy coordination infrastructure.
            </h3>
          </TypeSpecimen>

          <TypeSpecimen label="Heading · Satoshi 300" meta="h1 / h2 / h3">
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 300,
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                margin: 0,
                color: CREAM_SECTION_FG,
              }}
            >
              The physical rails that make distributed energy work
            </h3>
          </TypeSpecimen>

          <TypeSpecimen label="Body · Satoshi 400" meta="16px · line 1.55">
            <p className="max-w-2xl" style={{ margin: 0, color: withAlpha(CREAM_SECTION_FG, 0.82), fontSize: 16, lineHeight: 1.55 }}>
              The Zap is a gateway that runs locally. No cloud dependency for
              real-time dispatch. Supports P1, Modbus-TCP, Modbus-RTU, MQTT and
              OCPP. Compatible with 180M EU smart meters.
            </p>
          </TypeSpecimen>

          <TypeSpecimen label="Micro-label · 11px / 0.18em" meta="uppercase">
            <div className="flex flex-wrap items-center gap-8">
              <span className="micro-label" style={{ color: CREAM_SECTION_FG }}>Behind the meter</span>
              <span className="micro-label" style={{ color: withAlpha(CREAM_SECTION_FG, 0.6) }}>SE · DE · NL</span>
              <span className="micro-label" style={{ color: withAlpha(CREAM_SECTION_FG, 0.6) }}>Directory · 00 of 08</span>
            </div>
          </TypeSpecimen>

          <TypeSpecimen label="Mono · JetBrains" meta="code · stats · tabular">
            <code
              className="font-mono"
              style={{ fontSize: 14, color: CREAM_SECTION_FG, background: withAlpha(CREAM_SECTION_FG, 0.06), padding: "4px 8px", borderRadius: 4 }}
            >
              &lt;200ms · 50Hz · €2.5B · 180M meters
            </code>
          </TypeSpecimen>
        </div>
      </div>

      <div style={{ marginTop: "clamp(72px, 10vh, 144px)" }}>
        <Subhead label="Voice" />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mt-6">
          <VoiceRow rule="Physics before buzzwords" example="“Edge control under 200ms” beats “lightning-fast coordination”." />
          <VoiceRow rule="Collaborative with industry" example="Utilities and grid operators are partners, never opponents." />
          <VoiceRow rule="Specific over generic" example="Numbers and examples. €2.5B, not “massive savings”." />
          <VoiceRow rule="No em dashes, no hype" example="No “revolutionary”, “game-changing”, “seamless”. Commas and periods." />
        </div>
      </div>
    </EditorialSection>
  );
}

function Subhead({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="micro-label" style={{ color: CREAM_SECTION_FG }}>{label}</span>
      <div className="flex-1 h-px" style={{ background: withAlpha(CREAM_SECTION_FG, 0.18) }} />
    </div>
  );
}

function Swatch({
  name, value, bg, fg, hero = false, note,
}: { name: string; value: string; bg: string; fg: string; hero?: boolean; note?: string }) {
  return (
    <div className="group">
      <div
        className="aspect-[4/3] flex items-end p-4 transition-transform group-hover:-translate-y-0.5"
        style={{ background: bg, border: `1px solid ${withAlpha(CREAM_SECTION_FG, 0.08)}` }}
      >
        {hero && (
          <span className="specimen" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: fg }}>
            E85D<span style={{ opacity: 0.6 }}>1F</span>
          </span>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14, color: CREAM_SECTION_FG }}>
          {name}
        </span>
        <span className="font-mono" style={{ fontSize: 11, color: withAlpha(CREAM_SECTION_FG, 0.55) }}>
          {value}
        </span>
      </div>
      {note && (
        <div className="micro-label mt-1.5" style={{ color: withAlpha(CREAM_SECTION_FG, 0.45) }}>
          {note}
        </div>
      )}
    </div>
  );
}

function TypeSpecimen({
  label, meta, children,
}: { label: string; meta: string; children: React.ReactNode }) {
  return (
    <div
      className="grid lg:grid-cols-12 gap-x-8 gap-y-4 items-baseline"
      style={{ borderTop: `1px solid ${withAlpha(CREAM_SECTION_FG, 0.18)}`, paddingTop: 24 }}
    >
      <div className="lg:col-span-2">
        <div className="micro-label" style={{ color: CREAM_SECTION_FG }}>{label}</div>
        <div className="font-mono mt-2" style={{ fontSize: 11, color: withAlpha(CREAM_SECTION_FG, 0.55) }}>
          {meta}
        </div>
      </div>
      <div className="lg:col-span-10">{children}</div>
    </div>
  );
}

function VoiceRow({ rule, example }: { rule: string; example: string }) {
  return (
    <div style={{ borderTop: `1px solid ${withAlpha(CREAM_SECTION_FG, 0.18)}`, paddingTop: 16 }}>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          fontSize: "clamp(1.1rem, 1.5vw, 1.35rem)",
          letterSpacing: "-0.015em",
          color: CREAM_SECTION_FG,
        }}
      >
        {rule}
      </div>
      <p className="max-w-lg" style={{ marginTop: 6, fontSize: 15, lineHeight: 1.55, color: withAlpha(CREAM_SECTION_FG, 0.7) }}>
        {example}
      </p>
    </div>
  );
}

/* =========================================================================
   02 · EDITORIAL — logo system, duotone photography, charts, maps, layouts
   ========================================================================= */

function EditorialSpread() {
  return (
    <EditorialSection
      id="editorial"
      bg={PAPER_SECTION_BG}
      fg={PAPER_SECTION_FG}
      kicker="02 · Editorial system"
      meta={[
        { label: "Logos", strong: true },
        "Duotone photography",
        "Charts · Maps · Layouts",
      ]}
      topRight="Graphic grammar"
      footerLeft="How the brand renders in the wild"
      footerRight="Directory · 02 of 04"
    >
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
        <motion.h2
          className="lg:col-span-8 display-xl text-balance"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ margin: 0, color: PAPER_SECTION_FG }}
        >
          Logos, photography, charts and maps. One visual grammar, many surfaces.
        </motion.h2>
        <motion.p
          className="lg:col-span-4 lg:pt-3 max-w-xl text-balance"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.95rem, 1.1vw, 1.125rem)",
            lineHeight: 1.55,
            margin: 0,
            color: withAlpha(PAPER_SECTION_FG, 0.72),
          }}
        >
          Every graphic element inherits the same hairlines, signal orange,
          and Satoshi kickers. Photos get the duotone treatment. Charts are
          hand-rolled SVG. Maps are Natural Earth coastlines traced on scroll.
        </motion.p>
      </div>

      {/* ── Logo ──────────────────────────────────────────────────── */}
      <div style={{ marginTop: "clamp(56px, 8vh, 96px)" }}>
        <EditorialSubhead fg={PAPER_SECTION_FG} label="Logo" />

        {/* Squircle icon — standalone symbol, no wordmark. For avatars,
            favicons, app icons, social squares. Same white-fill master
            as the lockup; invert for light grounds. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <LogoTile
            title="Icon · squircle"
            meta="SVG · on ink"
            filename="sourceful-icon.svg"
            ground="ink"
            src="/assets/sourceful-icon.svg"
            imgMaxH={72}
          />
          <LogoTile
            title="Icon · squircle"
            meta="SVG · on cream (CSS invert)"
            filename="sourceful-icon.svg"
            ground="cream"
            src="/assets/sourceful-icon.svg"
            imgMaxH={72}
            invert
          />
        </div>

        {/* Squircle lockup — the ONLY approved public mark. One SVG
            master, shown on ink (white fill, as authored) and on cream
            (inverted to ink via CSS filter). No round-bolt variants;
            the bolt lives inside the squircle badge. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <LogoTile
            title="Lockup · squircle"
            meta="SVG · on ink"
            filename="sourceful-squircle.svg"
            ground="ink"
            src="/assets/sourceful-squircle.svg"
            imgMaxH={52}
          />
          <LogoTile
            title="Lockup · squircle"
            meta="SVG · on cream (CSS invert)"
            filename="sourceful-squircle.svg"
            ground="cream"
            src="/assets/sourceful-squircle.svg"
            imgMaxH={52}
            invert
          />
        </div>

        <p
          className="mt-4 max-w-2xl"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            lineHeight: 1.6,
            color: withAlpha(PAPER_SECTION_FG, 0.6),
          }}
        >
          One SVG master lives in <code className="font-mono" style={{ fontSize: 12 }}>public/assets/sourceful-squircle.svg</code>.
          For light grounds, apply <code className="font-mono" style={{ fontSize: 12 }}>filter: brightness(0)</code> to
          invert the white fill to ink. All other bolt-in-circle variants are
          deprecated, do not use them.
        </p>

        {/* Wordmark-only warning — "Sourceful" without "Energy" is
            restricted to private internal documents under the current
            copyright agreement. Destructive variant because this is a
            legal boundary, not a style suggestion. */}
        <div className="mt-8">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Private docs only — &ldquo;Sourceful&rdquo; without &ldquo;Energy&rdquo;</AlertTitle>
            <AlertDescription>
              The standalone <strong>Sourceful</strong> wordmark (without
              &ldquo;Energy&rdquo;) is restricted to internal / private
              documents under our current copyright agreement. Never use it on
              the website, marketing material, pitch decks, or anything public.
              The full <strong>Sourceful Energy</strong> lockup above is the
              only mark approved for public surfaces.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* ── Duotone photography ──────────────────────────────────── */}
      <div style={{ marginTop: "clamp(56px, 8vh, 96px)" }}>
        <EditorialSubhead fg={PAPER_SECTION_FG} label="Duotone photography" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <DuotoneTile
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80"
            alt="Solar array at dusk"
            kicker="Signal · ink → #E85D1F"
            filter="signal"
          />
          <DuotoneTile
            src="https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvogroup_pu2000_1860x1050?wid=1024"
            alt="Volvo PU2000 industrial battery"
            kicker="Cool · ink → #D1E0F0"
            filter="cool"
          />
          <DuotoneTile
            src="https://images.pexels.com/photos/35015283/pexels-photo-35015283/free-photo-of-cityscape-of-stockholm-with-historic-buildings.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
            alt="Stockholm cityscape"
            kicker="Ink · monochrome wash"
            filter="ink"
          />
        </div>

        <p
          className="mt-4 max-w-2xl"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            lineHeight: 1.6,
            color: withAlpha(PAPER_SECTION_FG, 0.6),
          }}
        >
          Photos get remapped through an inline SVG filter: luminance grayscale →
          gamma lift → two-colour table remap. Shadows go to deep ink, highlights
          to signal orange. One coherent graphic, not a tinted snapshot.
        </p>
      </div>

      {/* ── Charts ───────────────────────────────────────────────── */}
      <div style={{ marginTop: "clamp(56px, 8vh, 96px)" }}>
        <EditorialSubhead fg={PAPER_SECTION_FG} label="Charts" meta="hand-rolled SVG · no recharts" />
        <div className="mt-6">
          <TelemetryGallery />
        </div>
        <p
          className="mt-4 max-w-2xl"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            lineHeight: 1.6,
            color: withAlpha(PAPER_SECTION_FG, 0.6),
          }}
        >
          Thin strokes, tabular numerals, signal orange for the primary series,
          hairline greys for everything else. Every chart is plain SVG so the
          stroke weights stay exact at any density.
        </p>
      </div>

      {/* ── Maps ─────────────────────────────────────────────────── */}
      <div style={{ marginTop: "clamp(56px, 8vh, 96px)" }}>
        <EditorialSubhead fg={PAPER_SECTION_FG} label="Maps" meta="Natural Earth · scroll-traced" />
        <div
          className="grid grid-cols-1 md:grid-cols-3 mt-6"
          style={{
            borderTop: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.18)}`,
            borderLeft: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.18)}`,
          }}
        >
          {(
            [
              { key: "sweden", city: "Kalmar", country: "Sweden" },
              { key: "germany", city: "Berlin", country: "Germany" },
              { key: "netherlands", city: "Amsterdam", country: "Netherlands" },
            ] as const
          ).map((m, i) => (
            <div
              key={m.key}
              style={{
                borderRight: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.18)}`,
                borderBottom: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.18)}`,
                padding: "clamp(20px, 2vw, 32px)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="micro-label" style={{ color: PAPER_SECTION_FG }}>
                  {m.country}
                </span>
                <span
                  className="micro-label"
                  style={{ color: withAlpha(PAPER_SECTION_FG, 0.5) }}
                >
                  {String(i + 1).padStart(2, "0")} / 03
                </span>
              </div>
              <div style={{ aspectRatio: "1 / 1", width: "100%" }}>
                <MarketMap marketKey={m.key} index={i} />
              </div>
              <div className="flex items-center gap-2">
                <span
                  aria-hidden
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 999,
                    background: "var(--color-signal)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: 15,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {m.city}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p
          className="mt-4 max-w-2xl"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            lineHeight: 1.6,
            color: withAlpha(PAPER_SECTION_FG, 0.6),
          }}
        >
          Natural Earth 50m coastlines projected to a 1000×1000 viewBox. Each
          country traces itself on scroll via <code className="font-mono" style={{ fontSize: 12 }}>pathLength</code>,
          staggered across tiles. Signal-orange dot marks the city anchor.
        </p>
      </div>

      {/* ── Layouts ──────────────────────────────────────────────── */}
      <div style={{ marginTop: "clamp(56px, 8vh, 96px)" }}>
        <EditorialSubhead fg={PAPER_SECTION_FG} label="Layouts" meta="editorial page rhythms" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <LayoutThumb title="Hero specimen" meta="Ink ground · Satoshi 900">
            <div
              style={{
                background: "#0A0A0A",
                color: "#F5F2E1",
                height: "100%",
                padding: 18,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="micro-label">Sourceful</span>
                <span className="micro-label" style={{ opacity: 0.55 }}>01 / 04</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  letterSpacing: "-0.045em",
                  lineHeight: 0.85,
                }}
              >
                200<span style={{ color: "var(--color-signal)" }}>ms</span>
              </div>
              <span className="micro-label" style={{ opacity: 0.7 }}>
                Edge control, non-negotiable
              </span>
            </div>
          </LayoutThumb>

          <LayoutThumb title="Two-column spread" meta="Cream ground · 8/4 display">
            <div
              style={{
                background: "#F5F2E1",
                color: "#0A0A0A",
                height: "100%",
                padding: 18,
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: 14,
                alignContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    fontSize: 20,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.05,
                  }}
                >
                  Warm cream, near-black ink, one recurring orange.
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  lineHeight: 1.55,
                  color: "rgba(10,10,10,0.7)",
                }}
              >
                Editorial light is default. Grounds alternate between cream,
                paper, and near-black. Signal orange carries the accent.
              </div>
              <div style={{ gridColumn: "1 / -1", height: 1, background: "rgba(10,10,10,0.18)" }} />
              <div className="flex items-center justify-between" style={{ gridColumn: "1 / -1" }}>
                <span className="micro-label">Section</span>
                <span className="micro-label" style={{ opacity: 0.55 }}>02 / 04</span>
              </div>
            </div>
          </LayoutThumb>

          <LayoutThumb title="Stats grid" meta="Paper ground · 3-up metrics">
            <div
              style={{
                background: "#FAFAF7",
                color: "#0A0A0A",
                height: "100%",
                padding: 18,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <span className="micro-label">Stats · 3-up</span>
              <div
                className="grid grid-cols-3"
                style={{ gap: 12, borderTop: "1px solid rgba(10,10,10,0.18)", paddingTop: 12 }}
              >
                {[
                  { v: "180M", k: "meters" },
                  { v: "<200", k: "ms p95" },
                  { v: "€2.5B", k: "savings" },
                ].map((s) => (
                  <div key={s.k}>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 900,
                        fontSize: 22,
                        letterSpacing: "-0.04em",
                        lineHeight: 0.9,
                      }}
                    >
                      {s.v}
                    </div>
                    <div className="micro-label mt-1.5" style={{ color: "rgba(10,10,10,0.55)" }}>
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
              <span className="micro-label" style={{ color: "rgba(10,10,10,0.55)" }}>
                03 of 04
              </span>
            </div>
          </LayoutThumb>

          <LayoutThumb title="Closing spread" meta="Ink ground · specimen CTA">
            <div
              style={{
                background: "#0A0A0A",
                color: "#F5F2E1",
                height: "100%",
                padding: 18,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <span className="micro-label" style={{ opacity: 0.55 }}>04 · Apply</span>
              <div
                aria-hidden
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  letterSpacing: "-0.045em",
                  lineHeight: 0.85,
                }}
              >
                APPLY<span style={{ color: "var(--color-signal)" }}>.</span>
              </div>
              <span className="micro-label" style={{ opacity: 0.7 }}>
                One URL · one prompt · done
              </span>
            </div>
          </LayoutThumb>
        </div>

        <p
          className="mt-4 max-w-2xl"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            lineHeight: 1.6,
            color: withAlpha(PAPER_SECTION_FG, 0.6),
          }}
        >
          Four layouts recur across every Sourceful surface. Each stays within
          the hairline rhythm: micro-label kicker at the top, specimen or
          two-column body in the middle, directory counter at the bottom.
        </p>
      </div>

      {/* ── Slide deck ───────────────────────────────────────────────
          Specimens for pitch / investor / capital-day decks. Dark HUD
          identity (near-black ground, neon green accent, JetBrains Mono
          micro-labels with wide tracking). These slides are the
          reference for Claude when asked to draft or mock a Sourceful
          deck — the title pattern and the table pattern cover 80% of
          what Fredrik asks for. */}
      <div style={{ marginTop: "clamp(56px, 8vh, 96px)" }}>
        <EditorialSubhead
          fg={PAPER_SECTION_FG}
          label="Slide deck"
          meta="editorial pitch decks · 16:9 · ink or cream ground"
        />

        <div className="grid grid-cols-1 gap-6 mt-6">
          <SlideThumb title="Title slide" meta="Hero statement · bold Satoshi + signal highlight">
            <TitleSlide />
          </SlideThumb>

          <SlideThumb title="Table slide" meta="Four-column comparison · highlight row">
            <TableSlide />
          </SlideThumb>
        </div>

        <p
          className="mt-4 max-w-2xl"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            lineHeight: 1.6,
            color: withAlpha(PAPER_SECTION_FG, 0.6),
          }}
        >
          Decks stay in the editorial system. Grounds alternate between
          ink (<code className="font-mono" style={{ fontSize: 12 }}>#0A0A0A</code>)
          and cream (<code className="font-mono" style={{ fontSize: 12 }}>#F5F2E1</code>),
          signal orange (<code className="font-mono" style={{ fontSize: 12 }}>#E85D1F</code>)
          carries one or two highlight words per slide, Satoshi at
          display weight, JetBrains Mono for kickers and page
          counters. One big idea per slide. Fredrik likes a table when
          the argument is comparative, that&apos;s what the second
          specimen is for.
        </p>
      </div>
    </EditorialSection>
  );
}

// ─── Editorial subhead (paper-ground variant) ───────────────────────

function EditorialSubhead({
  fg,
  label,
  meta,
}: {
  fg: string;
  label: string;
  meta?: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="micro-label" style={{ color: fg }}>
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: withAlpha(fg, 0.18) }} />
      {meta && (
        <span className="micro-label" style={{ color: withAlpha(fg, 0.5) }}>
          {meta}
        </span>
      )}
    </div>
  );
}

// ─── LogoTile ───────────────────────────────────────────────────────

type LogoTileGround = "ink" | "cream" | "split";

function LogoTile({
  title,
  meta,
  filename,
  ground,
  src,
  lightSrc,
  darkSrc,
  imgMaxH = 48,
  invert = false,
}: {
  title: string;
  meta: string;
  filename: string;
  ground: LogoTileGround;
  src?: string;
  lightSrc?: string;
  darkSrc?: string;
  imgMaxH?: number;
  /** Apply `filter: brightness(0)` to recolour a white-fill SVG into
   *  ink for display on a light ground. */
  invert?: boolean;
}) {
  return (
    <div
      style={{
        border: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.12)}`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Display area */}
      <div
        style={{
          display: ground === "split" ? "grid" : "flex",
          gridTemplateColumns: ground === "split" ? "1fr 1fr" : undefined,
          alignItems: "stretch",
          minHeight: 140,
        }}
      >
        {ground === "split" ? (
          <>
            <LogoStage bg="#F5F2E1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightSrc}
                alt={`${title} (light)`}
                style={{ maxHeight: imgMaxH, width: "auto", display: "block" }}
              />
            </LogoStage>
            <LogoStage bg="#0A0A0A">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={darkSrc}
                alt={`${title} (dark)`}
                style={{ maxHeight: imgMaxH, width: "auto", display: "block" }}
              />
            </LogoStage>
          </>
        ) : (
          <LogoStage bg={ground === "ink" ? "#0A0A0A" : "#F5F2E1"}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={title}
              style={{
                maxHeight: imgMaxH,
                width: "auto",
                display: "block",
                filter: invert ? "brightness(0)" : undefined,
              }}
            />
          </LogoStage>
        )}
      </div>

      {/* Caption bar */}
      <div
        className="flex items-center justify-between gap-3"
        style={{
          padding: "10px 14px",
          borderTop: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.12)}`,
        }}
      >
        <div className="flex flex-col">
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: 13,
              color: PAPER_SECTION_FG,
            }}
          >
            {title}
          </span>
          <span className="micro-label" style={{ color: withAlpha(PAPER_SECTION_FG, 0.5) }}>
            {meta}
          </span>
        </div>
        <span
          className="font-mono"
          style={{ fontSize: 11, color: withAlpha(PAPER_SECTION_FG, 0.55) }}
        >
          {filename}
        </span>
      </div>
    </div>
  );
}

function LogoStage({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "28px 20px",
        minHeight: 140,
        width: "100%",
        flex: 1,
      }}
    >
      {children}
    </div>
  );
}

// ─── DuotoneTile ────────────────────────────────────────────────────

function DuotoneTile({
  src,
  alt,
  kicker,
  filter,
}: {
  src: string;
  alt: string;
  kicker: string;
  filter: "signal" | "cool" | "ink";
}) {
  return (
    <div style={{ border: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.12)}` }}>
      <DuotoneImage src={src} alt={alt} filter={filter} aspectRatio="4 / 3" />
      <div
        className="flex items-center justify-between gap-3"
        style={{
          padding: "10px 14px",
          borderTop: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.12)}`,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 13,
            color: PAPER_SECTION_FG,
          }}
        >
          {alt}
        </span>
        <span className="micro-label" style={{ color: withAlpha(PAPER_SECTION_FG, 0.55) }}>
          {kicker}
        </span>
      </div>
    </div>
  );
}

// ─── LayoutThumb ────────────────────────────────────────────────────

function LayoutThumb({
  title,
  meta,
  children,
}: {
  title: string;
  meta: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ border: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.12)}` }}
    >
      <div style={{ aspectRatio: "4 / 3", overflow: "hidden" }}>{children}</div>
      <div
        className="flex items-center justify-between gap-3"
        style={{
          padding: "10px 14px",
          borderTop: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.12)}`,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 13,
            color: PAPER_SECTION_FG,
          }}
        >
          {title}
        </span>
        <span className="micro-label" style={{ color: withAlpha(PAPER_SECTION_FG, 0.55) }}>
          {meta}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Slide deck specimens ─────────────────────────────────────────
//
// Slides live inside the editorial system — same cream / ink / signal
// vocabulary as the rest of the page. No neon, no HUD. The PDF Fredrik
// shared is a content guide, not a style guide.
//
// Two grounds for contrast: TitleSlide on ink (near-black with cream
// ink), TableSlide on cream (editorial default). Signal orange is the
// single accent across both.

const DECK_INK = "#0A0A0A";
const DECK_CREAM = "#F5F2E1";
const DECK_SIGNAL = "var(--color-signal)";
const DECK_MUTED_ON_INK = "rgba(245, 242, 225, 0.6)";
const DECK_MUTED_ON_CREAM = "rgba(10, 10, 10, 0.55)";
const DECK_HAIRLINE_ON_INK = "rgba(245, 242, 225, 0.15)";
const DECK_HAIRLINE_ON_CREAM = "rgba(10, 10, 10, 0.15)";

/**
 * MetaPairs — label/value grid for slide footer rails. Auto-sized label
 * column so values share a flush left edge. Each row is a baseline-
 * aligned grid so the tracked uppercase micro-label and the plain-case
 * value sit on the same text baseline, regardless of their font metrics.
 */
function MetaPairs({
  items,
  mutedColor,
}: {
  items: ReadonlyArray<readonly [string, string]>;
  mutedColor: string;
}) {
  return (
    <div
      className="grid grid-cols-[auto_1fr]"
      style={{
        columnGap: "clamp(10px, 1.4vw, 18px)",
        rowGap: "clamp(2px, 0.4vw, 6px)",
        alignItems: "baseline",
      }}
    >
      {items.map(([label, value]) => (
        <Fragment key={label}>
          <span className="micro-label" style={{ color: mutedColor }}>
            {label}
          </span>
          <span style={{ fontFamily: "var(--font-sans)" }}>{value}</span>
        </Fragment>
      ))}
    </div>
  );
}

/**
 * SlideThumb — 16:9 frame with a paper-ground caption bar. Same reveal
 * cadence as LayoutThumb so the deck block reads as part of the same
 * rhythm on scroll.
 */
function SlideThumb({
  title,
  meta,
  children,
}: {
  title: string;
  meta: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ border: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.12)}` }}
    >
      <div style={{ aspectRatio: "16 / 9", overflow: "hidden" }}>
        {children}
      </div>
      <div
        className="flex items-center justify-between gap-3"
        style={{
          padding: "10px 14px",
          borderTop: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.12)}`,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: 13,
            color: PAPER_SECTION_FG,
          }}
        >
          {title}
        </span>
        <span className="micro-label" style={{ color: withAlpha(PAPER_SECTION_FG, 0.55) }}>
          {meta}
        </span>
      </div>
    </motion.div>
  );
}

/**
 * TitleSlide — opening slide pattern on an INK ground. Logo lockup +
 * event meta on the top rail; giant Satoshi display headline with one
 * signal-orange highlight phrase; event/date/speaker/co. grid on the
 * bottom rail, JetBrains Mono values.
 */
function TitleSlide() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: DECK_INK,
        color: DECK_CREAM,
        padding: "clamp(16px, 3.5%, 36px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top rail — use the full squircle lockup SVG (icon + authored
          wordmark baked in). Never reconstruct the wordmark from system
          type; the real brand glyphs live in the SVG master. */}
      <div className="flex items-start justify-between">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/sourceful-squircle.svg"
          alt="Sourceful Energy"
          style={{
            height: "clamp(16px, 2vw, 24px)",
            width: "auto",
            display: "block",
          }}
        />
        <span
          className="micro-label"
          style={{ color: DECK_MUTED_ON_INK, fontSize: "clamp(9px, 0.9vw, 11px)" }}
        >
          Capital Day · 2026
        </span>
      </div>

      {/* Headline */}
      <div>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: "clamp(28px, 5.4vw, 68px)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Sweden needs a<br />
          <span style={{ color: DECK_SIGNAL }}>coordination layer</span>.<br />
          We&apos;re building it.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(11px, 1.4vw, 18px)",
            lineHeight: 1.5,
            color: DECK_MUTED_ON_INK,
            marginTop: "clamp(10px, 1.6vw, 20px)",
            maxWidth: "52ch",
          }}
        >
          The world needs one. We start in Europe.
        </p>
      </div>

      {/* Bottom rail — label/value pairs share a baseline grid. Each
          row gets a fixed line-height so the labels (JetBrains Mono,
          tracked) and values (sans) sit on the same baseline, and the
          two rows keep an even vertical rhythm regardless of label
          width. */}
      <div
        className="grid grid-cols-2"
        style={{
          gap: "clamp(12px, 2vw, 24px)",
          paddingTop: "clamp(10px, 1.5vw, 18px)",
          borderTop: `1px solid ${DECK_HAIRLINE_ON_INK}`,
          fontSize: "clamp(9px, 1vw, 11px)",
          lineHeight: 1.6,
        }}
      >
        <MetaPairs
          items={[
            ["Event", "Capital Day"],
            ["Date", "2026"],
          ]}
          mutedColor={DECK_MUTED_ON_INK}
        />
        <MetaPairs
          items={[
            ["Speaker", "Fredrik Ahlgren, CEO"],
            ["Co.", "Sourceful Labs AB"],
          ]}
          mutedColor={DECK_MUTED_ON_INK}
        />
      </div>
    </div>
  );
}

/**
 * TableSlide — comparative argument pattern on a CREAM ground. Top rail
 * with logo + page kicker, big headline with signal-orange highlight,
 * four-column table with a signal-tinted highlight row for the current
 * era, stat strip + closing line at the bottom. Fredrik likes a table
 * when the argument is comparative — this is the reference.
 */
function TableSlide() {
  const rows = [
    {
      era: "Railroads · 1850s–90s",
      physical: "Steam locomotive",
      financial: "First mortgage bonds · land-grant securities",
      capital: "$10B · 81% of NYSE by 1885",
    },
    {
      era: "Solar · 2013",
      physical: "PV panels at scale",
      financial: "SolarCity ABS at 4.8%",
      capital: "$54M pilot → $15B+ market",
    },
    {
      era: "C&I batteries · now",
      physical: "LFP packs at $70/kWh",
      financial: "SPV today · revenue-backed securities tomorrow",
      capital: "First standalone BESS ABS · 2027–2030",
      highlight: true,
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: DECK_CREAM,
        color: DECK_INK,
        padding: "clamp(14px, 3%, 32px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "clamp(10px, 1.5vw, 18px)",
      }}
    >
      {/* Top rail: real lockup SVG (white master inverted to ink for
          the cream ground) + page kicker. */}
      <div className="flex items-start justify-between">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/sourceful-squircle.svg"
          alt="Sourceful Energy"
          style={{
            height: "clamp(14px, 1.8vw, 20px)",
            width: "auto",
            display: "block",
            filter: "brightness(0)",
          }}
        />
        <span
          className="micro-label"
          style={{ color: DECK_MUTED_ON_CREAM, fontSize: "clamp(8px, 0.85vw, 11px)" }}
        >
          05 · The Pattern
        </span>
      </div>

      {/* Kicker + headline */}
      <div>
        <span
          className="micro-label"
          style={{
            color: DECK_MUTED_ON_CREAM,
            fontSize: "clamp(8px, 0.9vw, 11px)",
            display: "block",
            marginBottom: "clamp(4px, 0.8vw, 10px)",
          }}
        >
          Why this works — the historical pattern
        </span>
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 500,
            fontSize: "clamp(20px, 3.6vw, 46px)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Batteries are<br />
          the new <span style={{ color: DECK_SIGNAL }}>railroads</span>.
        </h3>
      </div>

      {/* Table */}
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(8px, 0.95vw, 12px)",
          lineHeight: 1.35,
        }}
      >
        {/* Header row */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1.2fr 1.4fr 2fr 1.6fr",
            gap: "clamp(6px, 1vw, 14px)",
            paddingBottom: "clamp(6px, 0.8vw, 10px)",
            borderBottom: `1px solid ${DECK_HAIRLINE_ON_CREAM}`,
          }}
        >
          {["Era", "Physical innovation", "Financial innovation", "Capital mobilized"].map((h, i) => (
            <span
              key={h}
              className="micro-label"
              style={{
                color: DECK_MUTED_ON_CREAM,
                fontSize: "clamp(7px, 0.75vw, 10px)",
                textAlign: i === 3 ? "right" : "left",
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Rows — current-era row carries a signal-tinted wash and an
            ink-anchored signal kicker bar on the left edge. */}
        {rows.map((r) => (
          <div
            key={r.era}
            className="grid"
            style={{
              gridTemplateColumns: "1.2fr 1.4fr 2fr 1.6fr",
              gap: "clamp(6px, 1vw, 14px)",
              padding: "clamp(6px, 0.9vw, 12px)",
              marginLeft: r.highlight ? "clamp(-6px, -0.9vw, -12px)" : 0,
              marginRight: r.highlight ? "clamp(-6px, -0.9vw, -12px)" : 0,
              borderBottom: r.highlight ? "none" : `1px solid ${DECK_HAIRLINE_ON_CREAM}`,
              background: r.highlight
                ? "color-mix(in srgb, var(--color-signal) 10%, transparent)"
                : "transparent",
              borderLeft: r.highlight ? `2px solid ${DECK_SIGNAL}` : undefined,
            }}
          >
            <span style={{ fontWeight: 500 }}>{r.era}</span>
            <span>{r.physical}</span>
            <span>{r.financial}</span>
            <span
              className="font-mono"
              style={{
                textAlign: "right",
                letterSpacing: "0.02em",
              }}
            >
              {r.capital}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom rail: stats + closing line */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "auto auto auto 1fr",
          gap: "clamp(12px, 2vw, 28px)",
          alignItems: "end",
          paddingTop: "clamp(8px, 1.2vw, 14px)",
          borderTop: `1px solid ${DECK_HAIRLINE_ON_CREAM}`,
        }}
      >
        {[
          { v: "5.0", unit: "yrs", k: "Payback" },
          { v: "53", unit: "%", k: "Median IRR" },
          { v: "95", unit: "%", k: "Runs clear 12% IRR" },
        ].map((s) => (
          <div key={s.k}>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 500,
                fontSize: "clamp(18px, 2.6vw, 34px)",
                lineHeight: 0.95,
                letterSpacing: "-0.015em",
                color: DECK_INK,
              }}
            >
              {s.v}
              <span style={{ fontSize: "0.55em", color: DECK_SIGNAL }}>{s.unit}</span>
            </div>
            <span
              className="micro-label"
              style={{
                color: DECK_MUTED_ON_CREAM,
                fontSize: "clamp(7px, 0.75vw, 10px)",
                display: "block",
                marginTop: 4,
              }}
            >
              {s.k}
            </span>
          </div>
        ))}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(9px, 1.05vw, 13px)",
            lineHeight: 1.4,
            color: DECK_INK,
            margin: 0,
            textAlign: "right",
          }}
        >
          Technology creates the asset.{" "}
          <span style={{ color: DECK_SIGNAL }}>
            Financial instruments create the market.
          </span>
          <br />
          We&apos;re building both.
        </p>
      </div>
    </div>
  );
}

/* =========================================================================
   03 · COMPONENTS
   ========================================================================= */

function ComponentsSpread() {
  return (
    <EditorialSection
      id="components"
      bg={PAPER_SECTION_BG}
      fg={PAPER_SECTION_FG}
      kicker="03 · Components"
      meta={[
        { label: "shadcn/ui", strong: true },
        "Radix primitives",
        "Tailwind + CVA",
      ]}
      topRight="Skinned with Sourceful tokens"
      footerLeft="Drop-in primitives"
      footerRight="Directory · 03 of 04"
    >
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10">
        <motion.h2
          className="lg:col-span-8 display-xl text-balance"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ margin: 0, color: CREAM_SECTION_FG }}
        >
          Everything you need, none of what you don&rsquo;t.
        </motion.h2>
        <motion.p
          className="lg:col-span-4 lg:pt-3 max-w-xl text-balance"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.95rem, 1.1vw, 1.125rem)",
            lineHeight: 1.55,
            margin: 0,
            color: withAlpha(CREAM_SECTION_FG, 0.72),
          }}
        >
          Every primitive is stock shadcn/ui wired to the Sourceful tokens.
          Copy the files, keep the CSS variables and Tailwind config, and it
          looks native anywhere.
        </motion.p>
      </div>

      <div style={{ marginTop: "clamp(56px, 8vh, 96px)" }} className="space-y-14">
        <ComponentBlock label="Buttons" meta="variant · size">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Apply to host</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><ArrowUpRight className="h-4 w-4" /></Button>
            <Button disabled>Disabled</Button>
          </div>
        </ComponentBlock>

        <ComponentBlock label="Badges" meta="status · counters">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Signal</Badge>
            <Badge variant="ink">Ink</Badge>
            <Badge variant="success">Online</Badge>
            <Badge variant="cream">Cream</Badge>
            <Badge variant="signal">Signal soft</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Error</Badge>
          </div>
        </ComponentBlock>

        <ComponentBlock label="Alerts" meta="default · destructive · signal">
          <div className="grid md:grid-cols-3 gap-4">
            <Alert variant="info">
              <Info className="h-4 w-4" />
              <AlertTitle>New market live</AlertTitle>
              <AlertDescription>Netherlands now accepting pilot applications.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Gateway offline</AlertTitle>
              <AlertDescription>Site Hafenstraße hasn&rsquo;t reported in 12 minutes.</AlertDescription>
            </Alert>
            <Alert variant="signal">
              <Zap className="h-4 w-4" />
              <AlertTitle>Signal accent</AlertTitle>
              <AlertDescription>Reserve for the recurring editorial signal orange.</AlertDescription>
            </Alert>
            <Alert variant="success">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Dispatch confirmed</AlertTitle>
              <AlertDescription>42 kW reserved for 6 minutes at 14:02 CET.</AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Default</AlertTitle>
              <AlertDescription>Hairline accent, no tint. For quiet system messages.</AlertDescription>
            </Alert>
          </div>
        </ComponentBlock>

        <ComponentBlock label="Cards" meta="stats · content">
          <div className="grid md:grid-cols-3 gap-4">
            <StatCard label="Avg edge latency" value="187ms" delta="under 200ms target" />
            <StatCard label="Pilot sites" value="24" delta="+3 this quarter" />
            <StatCard label="Batteries hosted" value="6.4 MWh" delta="Stockholm + Kalmar" />
          </div>
        </ComponentBlock>

        <ComponentBlock label="Forms" meta="input · textarea · select · check · radio · switch · slider">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site">Site name</Label>
                <Input id="site" placeholder="Kungsgatan 42" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Installation notes</Label>
                <Textarea id="notes" placeholder="Grid connection, access windows, etc." rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="market">Market</Label>
                <Select>
                  <SelectTrigger id="market">
                    <SelectValue placeholder="Pick a market" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="se">Sweden</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="nl">Netherlands</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="font-normal">Host agreement reviewed</Label>
              </div>
              <div className="space-y-2">
                <Label>Ownership model</Label>
                <RadioGroup defaultValue="operator" className="space-y-1">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="operator" id="r-op" />
                    <Label htmlFor="r-op" className="font-normal">Operator owned</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="property" id="r-prop" />
                    <Label htmlFor="r-prop" className="font-normal">Property owned</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notif" className="font-normal">Dispatch notifications</Label>
                <Switch id="notif" defaultChecked />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Reserve state of charge</Label>
                  <span className="font-mono text-xs text-muted-foreground">40%</span>
                </div>
                <Slider defaultValue={[40]} max={100} step={5} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Commissioning progress</Label>
                  <span className="font-mono text-xs text-muted-foreground">62%</span>
                </div>
                <Progress value={62} />
              </div>
            </div>
          </div>
        </ComponentBlock>

        <ComponentBlock label="Tabs · Accordion · Table" meta="layout · disclosure · data">
          <div className="grid lg:grid-cols-2 gap-8">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="telemetry">Telemetry</TabsTrigger>
                <TabsTrigger value="logs">Logs</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="text-sm text-muted-foreground pt-4">
                Stockholm · Kungsgatan 42. 200 kWh installed, operator-owned, K3 compliant.
              </TabsContent>
              <TabsContent value="telemetry" className="text-sm text-muted-foreground pt-4">
                P1 + Modbus-TCP. Edge latency 187ms p95.
              </TabsContent>
              <TabsContent value="logs" className="text-sm text-muted-foreground pt-4">
                Last dispatch 14:02:11 CET · success · 42 kW for 6 minutes.
              </TabsContent>
            </Tabs>

            <Accordion type="single" collapsible>
              <AccordionItem value="one">
                <AccordionTrigger>What does the Zap do?</AccordionTrigger>
                <AccordionContent>
                  A gateway running our software locally. Translates between
                  meters, batteries, and the coordination layer in under 200ms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="two">
                <AccordionTrigger>Cloud dependency?</AccordionTrigger>
                <AccordionContent>
                  Local execution by default. Cloud is opt-in for fleet views
                  and analytics. Nothing critical depends on it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="three">
                <AccordionTrigger>Which meters?</AccordionTrigger>
                <AccordionContent>
                  180M EU smart meters supported via P1, Modbus-TCP, Modbus-RTU,
                  MQTT and OCPP.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Site</TableHead>
                  <TableHead>Market</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Latency</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Kungsgatan 42</TableCell>
                  <TableCell>Sweden</TableCell>
                  <TableCell>200 kWh</TableCell>
                  <TableCell>
                    <Badge variant="success">Online</Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono">187ms</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hafenstraße 7</TableCell>
                  <TableCell>Germany</TableCell>
                  <TableCell>400 kWh</TableCell>
                  <TableCell><Badge variant="destructive">Offline</Badge></TableCell>
                  <TableCell className="text-right font-mono">—</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Prinsengracht 112</TableCell>
                  <TableCell>Netherlands</TableCell>
                  <TableCell>150 kWh</TableCell>
                  <TableCell>
                    <Badge>Commissioning</Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono">212ms</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </ComponentBlock>

        <ComponentBlock
          label="Spinners"
          meta="47 variants · monospace · edge-activity indicators"
        >
          <p
            className="max-w-2xl"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              lineHeight: 1.6,
              color: withAlpha(PAPER_SECTION_FG, 0.6),
              margin: "0 0 24px",
            }}
          >
            Terminal-style frame-cycle indicators. Use them on live grid tiles,
            Zap boot, firmware flash, or while an agent thinks — anywhere
            sub-second response would otherwise feel silent. Braille reads as
            infrastructure, ASCII as CLI.
          </p>

          <SpinnerCategory
            title="Braille"
            meta="32 variants · agent streams + edge activity"
            variants={[
              "dots","dots2","dots3","dots4","dots5","dots6","dots7","dots8",
              "dots9","dots10","dots11","dots12","dots13","dots14",
              "sand","bounce","dots_circle","wave","scan","rain","pulse",
              "snake","sparkle","cascade","columns","orbit","breathe",
              "waverows","checkerboard","helix","fillsweep","diagswipe",
            ]}
          />
          <SpinnerCategory
            title="ASCII"
            meta="15 variants · CLI + low-bandwidth grounds"
            variants={[
              "dqpb","rolling_line","simple_dots","simple_dots_scrolling",
              "arc","balloon","circle_halves","circle_quarters","point",
              "square_corners","toggle","triangle","grow_horizontal",
              "grow_vertical","noise",
            ]}
          />
          <div
            className="mt-8 grid gap-6 md:grid-cols-3"
            style={{
              borderTop: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.12)}`,
              paddingTop: 28,
            }}
          >
            <SpinnerUsage
              headline="Live grid tile"
              meta="dots · cream · edge sample pending"
              variant="dots"
              tone="cream"
              caption="frequency sampling · 50Hz target"
            />
            <SpinnerUsage
              headline="Agent thinking"
              meta="wave · signal · model streaming"
              variant="wave"
              tone="signal"
              caption="claude · 247 tokens/s"
            />
            <SpinnerUsage
              headline="Zap boot"
              meta="orbit · cream · MQTT handshake"
              variant="orbit"
              tone="cream"
              caption="gateway · provisioning"
            />
          </div>
        </ComponentBlock>
      </div>
    </EditorialSection>
  );
}

function ComponentBlock({
  label, meta, children,
}: { label: string; meta: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ borderTop: `1px solid ${withAlpha(CREAM_SECTION_FG, 0.18)}`, paddingTop: 28 }}
    >
      <div className="flex items-baseline justify-between mb-6">
        <span className="micro-label" style={{ color: CREAM_SECTION_FG }}>{label}</span>
        <span className="font-mono" style={{ fontSize: 11, color: withAlpha(CREAM_SECTION_FG, 0.55) }}>
          {meta}
        </span>
      </div>
      {children}
    </motion.div>
  );
}

// ─── Spinner specimen helpers ───────────────────────────────────────

const INK_BG = "#0A0A0A";
const CREAM_FG = "#F5F2E1";

/**
 * SpinnerCategory — sub-section within the Spinners component block.
 * Lays out every variant in the category as a small ink tile with the
 * spinner running in cream + variant name + frame/interval meta.
 */
function SpinnerCategory({
  title,
  meta,
  variants,
}: {
  title: string;
  meta: string;
  variants: readonly SpinnerVariant[];
}) {
  return (
    <div className="mt-2" style={{ marginBottom: 28 }}>
      <div
        className="flex items-baseline justify-between"
        style={{
          marginBottom: 12,
          paddingBottom: 6,
          borderBottom: `1px solid ${withAlpha(PAPER_SECTION_FG, 0.12)}`,
        }}
      >
        <span className="micro-label" style={{ color: PAPER_SECTION_FG }}>{title}</span>
        <span
          className="font-mono"
          style={{ fontSize: 11, color: withAlpha(PAPER_SECTION_FG, 0.55) }}
        >
          {meta}
        </span>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(148px, 1fr))",
          gap: 8,
        }}
      >
        {variants.map((v) => {
          const spec = SPINNERS[v];
          return (
            <div
              key={v}
              style={{
                background: INK_BG,
                color: CREAM_FG,
                padding: "14px 12px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 10,
                minHeight: 96,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Spinner variant={v} tone="cream" size="lg" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <code
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    color: CREAM_FG,
                    letterSpacing: "0.02em",
                  }}
                >
                  {v}
                </code>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    color: withAlpha(CREAM_FG, 0.5),
                    letterSpacing: "0.04em",
                  }}
                >
                  {spec.frames.length}f · {spec.interval}ms
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * SpinnerUsage — one worked example of a spinner in context. Ink panel,
 * mimics a dashboard tile or live stream row.
 */
function SpinnerUsage({
  headline,
  meta,
  variant,
  tone,
  caption,
}: {
  headline: string;
  meta: string;
  variant: SpinnerVariant;
  tone: "cream" | "signal";
  caption: string;
}) {
  return (
    <div
      style={{
        background: INK_BG,
        color: CREAM_FG,
        padding: 20,
        border: `1px solid ${withAlpha(CREAM_FG, 0.1)}`,
      }}
    >
      <div
        className="flex items-baseline justify-between"
        style={{ marginBottom: 14 }}
      >
        <span className="micro-label" style={{ color: CREAM_FG }}>{headline}</span>
        <span
          className="font-mono"
          style={{ fontSize: 10, color: withAlpha(CREAM_FG, 0.5) }}
        >
          {meta}
        </span>
      </div>
      <div
        className="flex items-center gap-3"
        style={{ padding: "18px 0", borderTop: `1px solid ${withAlpha(CREAM_FG, 0.1)}` }}
      >
        <Spinner variant={variant} tone={tone} size="md" />
        <span
          className="font-mono"
          style={{
            fontSize: 12,
            color: withAlpha(CREAM_FG, 0.8),
            letterSpacing: "0.02em",
          }}
        >
          {caption}
        </span>
      </div>
    </div>
  );
}

function StatCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription className="micro-label">{label}</CardDescription>
        <CardTitle>
          <span className="specimen-md" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", display: "block" }}>
            {value}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">{delta}</span>
        </div>
      </CardContent>
    </Card>
  );
}

/* =========================================================================
   03 · USING — dark closing spread
   ========================================================================= */

function UsingSpread() {
  return (
    <EditorialSection
      id="using"
      bg={INK}
      fg={CREAM}
      kicker="04 · Using with Claude"
      meta={[
        { label: "Point and build", strong: true },
        "DESIGN.md · one URL",
        "No npm install",
      ]}
      topRight="Give Claude DESIGN.md"
      footerLeft="design.sourceful.energy/DESIGN.md"
      footerRight="Directory · 04 of 04"
    >
      <div className="flex flex-col items-start" style={{ paddingTop: "clamp(24px, 4vh, 64px)" }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          aria-label="Build"
          className="specimen"
          style={{
            fontSize: "clamp(5rem, 20vw, 18rem)",
            margin: 0,
            color: CREAM,
            paddingBottom: "0.08em",
          }}
        >
          BUILD<span aria-hidden style={{ color: SIGNAL }}>.</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl text-balance"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            marginTop: "clamp(24px, 4vh, 48px)",
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.05rem, 1.4vw, 1.35rem)",
            fontWeight: 400,
            lineHeight: 1.45,
            color: withAlpha(CREAM, 0.82),
            margin: "clamp(24px, 4vh, 48px) 0 0 0",
          }}
        >
          One URL. Paste it into your prompt. Tell Claude to match{" "}
          <span style={{ color: CREAM, fontWeight: 500 }}>tokens, type, and components</span>.
          No package install, no config, no Tailwind setup on their end.
        </motion.p>

        <div className="w-full mt-12">
          <pre
            className="font-mono text-sm whitespace-pre-wrap"
            style={{
              background: "rgba(245, 242, 225, 0.06)",
              border: `1px solid ${withAlpha(CREAM, 0.14)}`,
              padding: "20px 24px",
              color: withAlpha(CREAM, 0.85),
              lineHeight: 1.55,
            }}
          >
{`# Example prompts

Create a pitch slide on the $20 Zap gateway and our 200ms
edge response, and use the Sourceful design system to ensure
consistency:

  https://design.sourceful.energy/DESIGN.md


Create a device-detail dashboard for a commercial Vault
showing SoC, spot price, peak shaving, and the last 24h of
grid flow. Use the Sourceful design system to ensure
consistency:

  https://design.sourceful.energy/DESIGN.md


# The shape

Name the thing + name the subject + point at DESIGN.md.
The spec carries the look. Your sentence carries the
substance, so the numbers and claims stay real.`}
          </pre>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a
              href="https://github.com/srcfl/srcful-design-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              <span>srcful/srcful-design-system</span>
              <ArrowUpRight strokeWidth={2} />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-[color:var(--cream)] hover:bg-[rgba(245,242,225,0.08)]"
            style={{ color: withAlpha(CREAM, 0.75) }}
          >
            <a href="#brand">Back to brand tokens</a>
          </Button>
        </div>
      </div>
    </EditorialSection>
  );
}

