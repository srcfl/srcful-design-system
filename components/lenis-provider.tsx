"use client";

/**
 * LenisProvider — mounts a single Lenis smooth-scroll instance and
 * drives it with rAF. Exposes the instance via context so anything in
 * the tree can request a scroll (`useLenis().scrollTo("#hash")`).
 *
 * Also delegates clicks on in-page anchor links (`<a href="#id">`) to
 * Lenis so the nav animates instead of jumping. Honours
 * `prefers-reduced-motion` and bails out on modified clicks so cmd+click
 * still opens in a new tab.
 */

import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

type LenisContextValue = Lenis | null;

const LenisContext = createContext<LenisContextValue>(null);

export function useLenis(): LenisContextValue {
  return useContext(LenisContext);
}

type Props = {
  children: ReactNode;
  /** Scroll easing; default matches Lenis' smooth-ish exponential. */
  lerp?: number;
};

export function LenisProvider({ children, lerp = 0.1 }: Props) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return; // Honour user preference; native jump-scroll is fine.

    const lenis = new Lenis({
      lerp,
      // Let page-level wheel events default through; Lenis smooths them.
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Delegate in-page anchor clicks so <a href="#section"> animates.
    const onClick = (e: MouseEvent) => {
      // Respect modified clicks (cmd/ctrl/shift/middle) — let the browser
      // do its default (new tab / new window).
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = (e.target as HTMLElement | null)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el, { offset: 0 });

      // Reflect the hash in the URL without a jump.
      if (window.history && window.location.hash !== href) {
        window.history.pushState(null, "", href);
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [lerp]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}
