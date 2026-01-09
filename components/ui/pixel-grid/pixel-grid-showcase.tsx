"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { PixelGrid, type PixelGridColor, type PixelGridSize } from "./pixel-grid";
import { patternCategories, type PatternType } from "./patterns";

export interface PixelGridShowcaseProps {
  /** Color theme for all grids */
  color?: PixelGridColor;
  /** Size for all grids */
  size?: PixelGridSize;
  /** Show category headers */
  showCategories?: boolean;
  /** Filter to specific categories */
  categories?: string[];
  /** Additional className */
  className?: string;
}

export function PixelGridShowcase({
  color = "green",
  size = "md",
  showCategories = true,
  categories,
  className,
}: PixelGridShowcaseProps) {
  const filteredCategories = categories
    ? Object.entries(patternCategories).filter(([cat]) => categories.includes(cat))
    : Object.entries(patternCategories);

  return (
    <div className={cn("pixel-grid-showcase", className)}>
      {showCategories ? (
        <div className="space-y-8">
          {filteredCategories.map(([category, patterns]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-muted-foreground mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-6">
                {patterns.map((pattern) => (
                  <PixelGrid
                    key={pattern}
                    pattern={pattern}
                    color={color}
                    size={size}
                    showLabel
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-6">
          {filteredCategories.flatMap(([_, patterns]) =>
            patterns.map((pattern) => (
              <PixelGrid
                key={pattern}
                pattern={pattern}
                color={color}
                size={size}
                showLabel
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

PixelGridShowcase.displayName = "PixelGridShowcase";

/**
 * A grid showing the same pattern in different colors
 */
export interface PixelGridColorComparisonProps {
  pattern: PatternType;
  size?: PixelGridSize;
  className?: string;
}

export function PixelGridColorComparison({
  pattern,
  size = "md",
  className,
}: PixelGridColorComparisonProps) {
  const colors: PixelGridColor[] = ["blue", "pink", "green"];

  return (
    <div className={cn("flex gap-6 items-center", className)}>
      {colors.map((color) => (
        <div key={color} className="flex flex-col items-center gap-2">
          <PixelGrid pattern={pattern} color={color} size={size} />
          <span className="text-xs text-muted-foreground font-mono">{color}</span>
        </div>
      ))}
    </div>
  );
}

PixelGridColorComparison.displayName = "PixelGridColorComparison";

/**
 * A grid showing the same pattern in different sizes
 */
export interface PixelGridSizeComparisonProps {
  pattern: PatternType;
  color?: PixelGridColor;
  className?: string;
}

export function PixelGridSizeComparison({
  pattern,
  color = "green",
  className,
}: PixelGridSizeComparisonProps) {
  const sizes: PixelGridSize[] = ["sm", "md", "lg"];

  return (
    <div className={cn("flex gap-6 items-end", className)}>
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <PixelGrid pattern={pattern} color={color} size={size} />
          <span className="text-xs text-muted-foreground font-mono">{size}</span>
        </div>
      ))}
    </div>
  );
}

PixelGridSizeComparison.displayName = "PixelGridSizeComparison";
