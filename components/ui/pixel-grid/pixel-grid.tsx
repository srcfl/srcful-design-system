"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { patterns as patterns3x3, type PatternType as PatternType3x3 } from "./patterns";
import { patterns as patterns4x4, type PatternType as PatternType4x4 } from "./patterns-4x4";
import { patterns as patterns5x5, type PatternType as PatternType5x5 } from "./patterns-5x5";
import { patterns as patterns6x6, type PatternType as PatternType6x6 } from "./patterns-6x6";
import { zapPatterns, type ZapPatternType } from "./patterns-zap";

export type PixelGridColor = "blue" | "pink" | "green";
export type PixelGridSpeed = "slow" | "normal" | "fast";
export type PixelGridSize = "sm" | "md" | "lg";
export type PixelGridDimension = 3 | 4 | 5 | 6;

// Re-export pattern types for external use
export type { PatternType3x3, PatternType4x4, PatternType5x5, PatternType6x6 };
export type { ZapPatternType };
export type PatternType = PatternType3x3 | PatternType4x4 | PatternType5x5 | PatternType6x6 | ZapPatternType;

export interface PixelGridProps {
  /** The animation pattern to display */
  pattern: PatternType;
  /** Grid dimension - 3x3, 4x4, or 6x6 */
  dimension?: PixelGridDimension;
  /** Color theme - blue/cyan or pink/coral or green */
  color?: PixelGridColor;
  /** Animation speed */
  speed?: PixelGridSpeed;
  /** Grid size */
  size?: PixelGridSize;
  /** Whether to animate (false = static display) */
  animated?: boolean;
  /** Pause the animation (only applies when animated=true) */
  paused?: boolean;
  /** Additional className for the container */
  className?: string;
  /** Show pattern label below the grid */
  showLabel?: boolean;
}

const speedMap: Record<PixelGridSpeed, number> = {
  slow: 2000,
  normal: 1500,
  fast: 1000,
};

const sizeMap: Record<PixelGridSize, { pixel: number; gap: number }> = {
  sm: { pixel: 6, gap: 2 },
  md: { pixel: 10, gap: 3 },
  lg: { pixel: 14, gap: 4 },
};

// Get patterns based on dimension
function getPatterns(dimension: PixelGridDimension) {
  switch (dimension) {
    case 4:
      return patterns4x4;
    case 5:
      // Merge standard 5x5 patterns with Zap patterns
      return { ...patterns5x5, ...zapPatterns };
    case 6:
      return patterns6x6;
    default:
      return patterns3x3;
  }
}

export function PixelGrid({
  pattern,
  dimension = 3,
  color = "green",
  speed = "normal",
  size = "md",
  animated = true,
  paused = false,
  className,
  showLabel = false,
}: PixelGridProps) {
  const [currentFrame, setCurrentFrame] = React.useState(0);
  const [activePixels, setActivePixels] = React.useState<Set<number>>(
    new Set()
  );

  const patternsForDimension = getPatterns(dimension);
  const patternDef = patternsForDimension[pattern as keyof typeof patternsForDimension];

  // Fallback if pattern doesn't exist for this dimension
  if (!patternDef) {
    console.warn(`Pattern "${pattern}" not found for ${dimension}x${dimension} grid`);
    return null;
  }

  const cycleDuration = patternDef.cycleDuration ?? speedMap[speed];
  const frameDuration = cycleDuration / patternDef.frames.length;
  const pixelCount = dimension * dimension;

  // Animation loop
  React.useEffect(() => {
    if (!animated || paused) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % patternDef.frames.length);
    }, frameDuration);

    return () => clearInterval(interval);
  }, [animated, paused, frameDuration, patternDef.frames.length]);

  // Update active pixels when frame changes or for static display
  React.useEffect(() => {
    if (animated) {
      const frame = patternDef.frames[currentFrame];
      setActivePixels(new Set(frame.activePixels));
    } else {
      // Static: show the "full" frame (frame with most active pixels)
      const fullFrame = patternDef.frames.reduce((max, frame) =>
        frame.activePixels.length > max.activePixels.length ? frame : max
      );
      setActivePixels(new Set(fullFrame.activePixels));
    }
  }, [animated, currentFrame, patternDef.frames]);

  const { pixel: pixelSize, gap } = sizeMap[size];
  const gridSize = pixelSize * dimension + gap * (dimension - 1);

  return (
    <div className={cn("pixel-grid-wrapper", className)}>
      <div
        className={cn("pixel-grid-container", `pixel-grid-${color}`, `pixel-grid-${dimension}x${dimension}`)}
        style={{
          width: gridSize,
          height: gridSize,
          gap: gap,
          gridTemplateColumns: `repeat(${dimension}, 1fr)`,
          ["--pixel-size" as string]: `${pixelSize}px`,
        }}
        role="img"
        aria-label={`${animated ? "Animated" : "Static"} pixel grid: ${patternDef.name}`}
      >
        {Array.from({ length: pixelCount }, (_, index) => (
          <div
            key={index}
            className={cn("pixel-grid-pixel", {
              "pixel-active": activePixels.has(index),
            })}
            style={{
              width: pixelSize,
              height: pixelSize,
            }}
          />
        ))}
      </div>
      {showLabel && (
        <span className="pixel-grid-label font-mono">{pattern}</span>
      )}
    </div>
  );
}

PixelGrid.displayName = "PixelGrid";
