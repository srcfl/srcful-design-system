"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { PixelGrid, type PixelGridColor, type PixelGridSize, type PixelGridDimension } from "./pixel-grid";
import { patternCategories as patternCategories3x3, type PatternType as PatternType3x3 } from "./patterns";
import { patternCategories as patternCategories4x4, type PatternType as PatternType4x4 } from "./patterns-4x4";
import { patternCategories as patternCategories6x6, type PatternType as PatternType6x6 } from "./patterns-6x6";

type PatternType = PatternType3x3 | PatternType4x4 | PatternType6x6;

// Get pattern categories based on dimension
function getPatternCategories(dimension: PixelGridDimension): Record<string, string[]> {
  switch (dimension) {
    case 4:
      return patternCategories4x4 as Record<string, string[]>;
    case 6:
      return patternCategories6x6 as Record<string, string[]>;
    default:
      return patternCategories3x3 as Record<string, string[]>;
  }
}

export interface PixelGridShowcaseProps {
  /** Grid dimension - 3x3, 4x4, or 6x6 */
  dimension?: PixelGridDimension;
  /** Color theme for all grids */
  color?: PixelGridColor;
  /** Size for all grids */
  size?: PixelGridSize;
  /** Whether to animate (false = static display) */
  animated?: boolean;
  /** Show category headers */
  showCategories?: boolean;
  /** Filter to specific categories */
  categories?: string[];
  /** Additional className */
  className?: string;
}

export function PixelGridShowcase({
  dimension = 3,
  color = "green",
  size = "md",
  animated = true,
  showCategories = true,
  categories,
  className,
}: PixelGridShowcaseProps) {
  const patternCategories = getPatternCategories(dimension);
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
                    pattern={pattern as PatternType}
                    dimension={dimension}
                    color={color}
                    size={size}
                    animated={animated}
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
                pattern={pattern as PatternType}
                dimension={dimension}
                color={color}
                size={size}
                animated={animated}
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
  dimension?: PixelGridDimension;
  size?: PixelGridSize;
  animated?: boolean;
  className?: string;
}

export function PixelGridColorComparison({
  pattern,
  dimension = 3,
  size = "md",
  animated = true,
  className,
}: PixelGridColorComparisonProps) {
  const colors: PixelGridColor[] = ["blue", "pink", "green"];

  return (
    <div className={cn("flex gap-6 items-center", className)}>
      {colors.map((color) => (
        <div key={color} className="flex flex-col items-center gap-2">
          <PixelGrid pattern={pattern} dimension={dimension} color={color} size={size} animated={animated} />
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
  dimension?: PixelGridDimension;
  color?: PixelGridColor;
  animated?: boolean;
  className?: string;
}

export function PixelGridSizeComparison({
  pattern,
  dimension = 3,
  color = "green",
  animated = true,
  className,
}: PixelGridSizeComparisonProps) {
  const sizes: PixelGridSize[] = ["sm", "md", "lg"];

  return (
    <div className={cn("flex gap-6 items-end", className)}>
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <PixelGrid pattern={pattern} dimension={dimension} color={color} size={size} animated={animated} />
          <span className="text-xs text-muted-foreground font-mono">{size}</span>
        </div>
      ))}
    </div>
  );
}

PixelGridSizeComparison.displayName = "PixelGridSizeComparison";

/**
 * A grid showing the same pattern in different dimensions
 */
export interface PixelGridDimensionComparisonProps {
  /** Common pattern name that exists in all dimensions (e.g., "solo-center", "corners-sync") */
  pattern: "solo-center" | "solo-tl" | "solo-br" | "corners-sync" | "corners-only" | "frame" | "frame-sync" | "plus-hollow";
  color?: PixelGridColor;
  size?: PixelGridSize;
  animated?: boolean;
  className?: string;
}

export function PixelGridDimensionComparison({
  pattern,
  color = "green",
  size = "md",
  animated = true,
  className,
}: PixelGridDimensionComparisonProps) {
  const dimensions: PixelGridDimension[] = [3, 4, 6];

  return (
    <div className={cn("flex gap-6 items-end", className)}>
      {dimensions.map((dimension) => (
        <div key={dimension} className="flex flex-col items-center gap-2">
          <PixelGrid pattern={pattern} dimension={dimension} color={color} size={size} animated={animated} />
          <span className="text-xs text-muted-foreground font-mono">{dimension}x{dimension}</span>
        </div>
      ))}
    </div>
  );
}

PixelGridDimensionComparison.displayName = "PixelGridDimensionComparison";
