"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface BrandLogoProps {
  brand: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-auto max-w-[80px]",
  md: "h-12 w-auto max-w-[120px]",
  lg: "h-16 w-auto max-w-[160px]",
  xl: "h-24 w-auto max-w-[200px]",
};

export function BrandLogo({ brand, size = "md", className = "" }: BrandLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeFolder = mounted && resolvedTheme === "dark" ? "dark-mode" : "light-mode";

  if (!mounted) {
    return (
      <div className={`bg-muted rounded animate-pulse ${sizeClasses[size]}`} style={{ minWidth: 80 }} />
    );
  }

  return (
    <div className={`flex items-center justify-center p-8 bg-muted/50 rounded-2xl ${className}`}>
      <img
        src={`/images/partner-logos/${themeFolder}/${brand}.svg`}
        alt={`${brand} logo`}
        className={`object-contain ${sizeClasses[size]}`}
        onError={(e) => {
          // Fallback to showing brand name if logo not found
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<span class="text-2xl font-bold text-muted-foreground capitalize">${brand}</span>`;
          }
        }}
      />
    </div>
  );
}
