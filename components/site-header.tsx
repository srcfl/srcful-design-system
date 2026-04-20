"use client";

/**
 * Site header — editorial squircle logo + uppercase micro-label nav,
 * hairline bottom border, dark-ink ground so it reads on top of the hero.
 *
 * Matches the sourceful-marketing-site @ hosts Hero top-row treatment: the
 * nav cluster is the only chrome, theme toggle and GitHub drop to 11px
 * micro-label as well.
 */

import { useEffect, useState } from "react";
import { Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { EditorialNavCluster } from "@/components/editorial-nav";

const INK = "#0A0A0A";
const CREAM = "#F5F2E1";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: INK,
        color: CREAM,
        borderBottom: `1px solid ${withAlpha(CREAM, 0.14)}`,
      }}
    >
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-6 md:px-8">
        <EditorialNavCluster fg={CREAM} muted={withAlpha(CREAM, 0.55)} logoSize={20} />

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <a
            href="https://github.com/srcfl/srcful-design-system"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            style={microStyle(CREAM)}
          >
            <Github className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span aria-hidden style={{ width: 60, height: 14 }} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
      style={{ ...microStyle(CREAM), background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
    >
      {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

function microStyle(color: string) {
  return {
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    fontWeight: 500 as const,
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color,
  };
}

function withAlpha(color: string, alpha: number) {
  if (!color.startsWith("#")) return color;
  const hex = color.slice(1).padEnd(6, "0").slice(0, 6);
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
