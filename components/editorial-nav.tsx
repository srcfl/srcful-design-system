"use client";

/**
 * Editorial nav cluster — squircle logo + uppercase micro-label links with
 * animated underline. Ported from sourceful-marketing-site @ hosts. Strips
 * the i18n routing layer so it works on a plain Next.js app.
 *
 * fg / muted adapt to whatever ground the nav sits on. On dark grounds the
 * white squircle renders as-is; on light grounds we invert it with a
 * brightness(0) filter.
 */

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "#brand", label: "Brand" },
  { href: "#editorial", label: "Editorial" },
  { href: "#components", label: "Components" },
  { href: "#using", label: "Using" },
] as const;

type Props = {
  /** Primary ink colour for the active link + logo. */
  fg?: string;
  /** Muted colour for inactive links. */
  muted?: string;
  /** Logo size in pixels. */
  logoSize?: number;
};

export function EditorialNavCluster({
  fg = "#F5F2E1",
  muted = "rgba(245, 242, 225, 0.55)",
  logoSize = 20,
}: Props = {}) {
  const pathname = usePathname();
  const invertLogo = isDarkColor(fg);

  return (
    <div className="flex items-center gap-x-6 gap-y-2 flex-wrap w-full md:w-auto">
      <Link
        href="/"
        aria-label="Sourceful Energy — Home"
        className="inline-flex items-center transition-opacity hover:opacity-80"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/sourceful-squircle.svg"
          alt="Sourceful Energy"
          style={{
            height: logoSize,
            width: "auto",
            display: "block",
            filter: invertLogo ? "brightness(0)" : undefined,
          }}
        />
      </Link>

      <div className="hidden md:flex items-center gap-x-6 gap-y-2 flex-wrap">
        {NAV_ITEMS.map((item) => {
          const isActive =
            typeof pathname === "string" && item.href.startsWith("/")
              ? isPathActive(pathname, item.href)
              : false;
          return (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={isActive}
              fg={fg}
              muted={muted}
            />
          );
        })}
      </div>
    </div>
  );
}

function NavLink({
  href, label, isActive, fg, muted,
}: { href: string; label: string; isActive: boolean; fg: string; muted: string }) {
  const base: CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: isActive ? fg : muted,
    transition: "color 300ms ease",
  };

  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative inline-flex items-center"
    >
      <span className="relative">
        {label}
        <span
          aria-hidden
          className="absolute left-0 right-0 -bottom-1 h-px origin-left"
          style={{
            background: isActive ? fg : muted,
            transform: isActive || hover ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 300ms ease",
          }}
        />
      </span>
    </a>
  );
}

function isPathActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

function isDarkColor(color: string): boolean {
  if (!color.startsWith("#")) return false;
  const hex = color.slice(1);
  const full =
    hex.length === 3
      ? hex.split("").map((c) => c + c).join("")
      : hex.padEnd(6, "0").slice(0, 6);
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.5;
}
