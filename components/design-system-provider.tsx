"use client";

import * as React from "react";

// =============================================================================
// TYPES
// =============================================================================

export type Theme = "base" | "elevated" | (string & {});
export type FontMode = "default" | "dyslexic";
export type ColorMode =
  | "default"
  | "deuteranopia"
  | "protanopia"
  | "tritanopia"
  | "achromatopsia";
export type SpacingMode = "default" | "comfortable";
export type FocusMode = "default" | "enhanced";

interface DesignSystemContextValue {
  // Theme (developer choice)
  theme: Theme;
  setTheme: (theme: Theme) => void;
  // Accessibility modes (user choice)
  fontMode: FontMode;
  setFontMode: (mode: FontMode) => void;
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
  spacingMode: SpacingMode;
  setSpacingMode: (mode: SpacingMode) => void;
  focusMode: FocusMode;
  setFocusMode: (mode: FocusMode) => void;
}

// =============================================================================
// CONTEXT
// =============================================================================

const DesignSystemContext =
  React.createContext<DesignSystemContextValue | null>(null);

// =============================================================================
// HOOKS
// =============================================================================

/**
 * Hook to access and control the visual theme (base, elevated, etc.)
 * Theme is typically set by the developer at app initialization.
 */
export function useDesignSystemTheme() {
  const ctx = React.useContext(DesignSystemContext);
  if (!ctx) {
    throw new Error(
      "useDesignSystemTheme must be used within DesignSystemProvider"
    );
  }
  return { theme: ctx.theme, setTheme: ctx.setTheme };
}

/**
 * Hook to access and control dyslexic font mode.
 */
export function useFontMode() {
  const ctx = React.useContext(DesignSystemContext);
  if (!ctx) {
    throw new Error("useFontMode must be used within DesignSystemProvider");
  }
  return { fontMode: ctx.fontMode, setFontMode: ctx.setFontMode };
}

/**
 * Hook to access and control color blind mode.
 */
export function useColorMode() {
  const ctx = React.useContext(DesignSystemContext);
  if (!ctx) {
    throw new Error("useColorMode must be used within DesignSystemProvider");
  }
  return { colorMode: ctx.colorMode, setColorMode: ctx.setColorMode };
}

/**
 * Hook to access and control text spacing mode (WCAG 1.4.12).
 */
export function useSpacingMode() {
  const ctx = React.useContext(DesignSystemContext);
  if (!ctx) {
    throw new Error("useSpacingMode must be used within DesignSystemProvider");
  }
  return { spacingMode: ctx.spacingMode, setSpacingMode: ctx.setSpacingMode };
}

/**
 * Hook to access and control enhanced focus mode (WCAG 2.4.7).
 */
export function useFocusMode() {
  const ctx = React.useContext(DesignSystemContext);
  if (!ctx) {
    throw new Error("useFocusMode must be used within DesignSystemProvider");
  }
  return { focusMode: ctx.focusMode, setFocusMode: ctx.setFocusMode };
}

/**
 * Hook to access all accessibility settings at once.
 * Useful for building accessibility settings panels.
 */
export function useAccessibility() {
  const ctx = React.useContext(DesignSystemContext);
  if (!ctx) {
    throw new Error("useAccessibility must be used within DesignSystemProvider");
  }
  return {
    fontMode: ctx.fontMode,
    setFontMode: ctx.setFontMode,
    colorMode: ctx.colorMode,
    setColorMode: ctx.setColorMode,
    spacingMode: ctx.spacingMode,
    setSpacingMode: ctx.setSpacingMode,
    focusMode: ctx.focusMode,
    setFocusMode: ctx.setFocusMode,
  };
}

/**
 * Hook to access the full design system context.
 */
export function useDesignSystem() {
  const ctx = React.useContext(DesignSystemContext);
  if (!ctx) {
    throw new Error("useDesignSystem must be used within DesignSystemProvider");
  }
  return ctx;
}

// =============================================================================
// PROVIDER
// =============================================================================

export interface DesignSystemProviderProps {
  children: React.ReactNode;
  /**
   * Visual theme for the application.
   * Typically set by the developer at app initialization.
   * @default "base"
   */
  defaultTheme?: Theme;
  /**
   * Default font mode for accessibility.
   * @default "default"
   */
  defaultFontMode?: FontMode;
  /**
   * Default color mode for color blind users.
   * @default "default"
   */
  defaultColorMode?: ColorMode;
  /**
   * Default text spacing mode for readability.
   * @default "default"
   */
  defaultSpacingMode?: SpacingMode;
  /**
   * Default focus indicator mode for keyboard navigation.
   * @default "default"
   */
  defaultFocusMode?: FocusMode;
  /**
   * localStorage key for persisting user accessibility preferences.
   * Theme is NOT persisted (it's app config, not user preference).
   * @default "sourceful-a11y"
   */
  storageKey?: string;
  /**
   * Disable localStorage persistence (useful for testing).
   * @default false
   */
  disableStorage?: boolean;
}

export function DesignSystemProvider({
  children,
  defaultTheme = "base",
  defaultFontMode = "default",
  defaultColorMode = "default",
  defaultSpacingMode = "default",
  defaultFocusMode = "default",
  storageKey = "sourceful-a11y",
  disableStorage = false,
}: DesignSystemProviderProps) {
  // State
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const [fontMode, setFontMode] = React.useState<FontMode>(defaultFontMode);
  const [colorMode, setColorMode] = React.useState<ColorMode>(defaultColorMode);
  const [spacingMode, setSpacingMode] =
    React.useState<SpacingMode>(defaultSpacingMode);
  const [focusMode, setFocusMode] = React.useState<FocusMode>(defaultFocusMode);
  const [mounted, setMounted] = React.useState(false);

  // Load accessibility preferences from localStorage on mount
  React.useEffect(() => {
    setMounted(true);
    if (disableStorage || typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const prefs = JSON.parse(stored);
        if (prefs.fontMode) setFontMode(prefs.fontMode);
        if (prefs.colorMode) setColorMode(prefs.colorMode);
        if (prefs.spacingMode) setSpacingMode(prefs.spacingMode);
        if (prefs.focusMode) setFocusMode(prefs.focusMode);
      }
    } catch (e) {
      console.warn("Failed to load accessibility preferences:", e);
    }
  }, [storageKey, disableStorage]);

  // Apply theme attribute
  React.useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  // Apply font mode attribute
  React.useEffect(() => {
    if (!mounted) return;
    if (fontMode === "default") {
      document.documentElement.removeAttribute("data-font-mode");
    } else {
      document.documentElement.setAttribute("data-font-mode", fontMode);
    }
  }, [fontMode, mounted]);

  // Apply color mode attribute
  React.useEffect(() => {
    if (!mounted) return;
    if (colorMode === "default") {
      document.documentElement.removeAttribute("data-color-mode");
    } else {
      document.documentElement.setAttribute("data-color-mode", colorMode);
    }
  }, [colorMode, mounted]);

  // Apply spacing mode attribute
  React.useEffect(() => {
    if (!mounted) return;
    if (spacingMode === "default") {
      document.documentElement.removeAttribute("data-spacing");
    } else {
      document.documentElement.setAttribute("data-spacing", spacingMode);
    }
  }, [spacingMode, mounted]);

  // Apply focus mode attribute
  React.useEffect(() => {
    if (!mounted) return;
    if (focusMode === "default") {
      document.documentElement.removeAttribute("data-focus-mode");
    } else {
      document.documentElement.setAttribute("data-focus-mode", focusMode);
    }
  }, [focusMode, mounted]);

  // Persist accessibility preferences (NOT theme - that's app config)
  React.useEffect(() => {
    if (!mounted || disableStorage || typeof window === "undefined") return;

    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ fontMode, colorMode, spacingMode, focusMode })
      );
    } catch (e) {
      console.warn("Failed to save accessibility preferences:", e);
    }
  }, [fontMode, colorMode, spacingMode, focusMode, storageKey, mounted, disableStorage]);

  // Memoize context value to prevent unnecessary re-renders
  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
      fontMode,
      setFontMode,
      colorMode,
      setColorMode,
      spacingMode,
      setSpacingMode,
      focusMode,
      setFocusMode,
    }),
    [theme, fontMode, colorMode, spacingMode, focusMode]
  );

  return (
    <DesignSystemContext.Provider value={value}>
      {children}
    </DesignSystemContext.Provider>
  );
}
