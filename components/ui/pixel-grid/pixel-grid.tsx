"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { patterns, type PatternType } from "./patterns";

export type PixelGridColor = "blue" | "pink" | "green";
export type PixelGridSpeed = "slow" | "normal" | "fast";
export type PixelGridSize = "sm" | "md" | "lg";

export interface PixelGridProps {
  /** The animation pattern to display */
  pattern: PatternType;
  /** Color theme - blue/cyan or pink/coral or green */
  color?: PixelGridColor;
  /** Animation speed */
  speed?: PixelGridSpeed;
  /** Grid size */
  size?: PixelGridSize;
  /** Pause the animation */
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

export function PixelGrid({
  pattern,
  color = "green",
  speed = "normal",
  size = "md",
  paused = false,
  className,
  showLabel = false,
}: PixelGridProps) {
  const [currentFrame, setCurrentFrame] = React.useState(0);
  const [activePixels, setActivePixels] = React.useState<Set<number>>(
    new Set()
  );

  const patternDef = patterns[pattern];
  const cycleDuration = patternDef.cycleDuration ?? speedMap[speed];
  const frameDuration = cycleDuration / patternDef.frames.length;

  // Animation loop
  React.useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % patternDef.frames.length);
    }, frameDuration);

    return () => clearInterval(interval);
  }, [paused, frameDuration, patternDef.frames.length]);

  // Update active pixels when frame changes
  React.useEffect(() => {
    const frame = patternDef.frames[currentFrame];
    setActivePixels(new Set(frame.activePixels));
  }, [currentFrame, patternDef.frames]);

  const { pixel: pixelSize, gap } = sizeMap[size];
  const gridSize = pixelSize * 3 + gap * 2;

  return (
    <div className={cn("pixel-grid-wrapper", className)}>
      <div
        className={cn("pixel-grid-container", `pixel-grid-${color}`)}
        style={{
          width: gridSize,
          height: gridSize,
          gap: gap,
          ["--pixel-size" as string]: `${pixelSize}px`,
        }}
        role="img"
        aria-label={`Animated pixel grid: ${patternDef.name}`}
      >
        {Array.from({ length: 9 }, (_, index) => (
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
