"use client";

import { useState } from "react";
import {
  PixelGrid,
  PixelGridShowcase,
  PixelGridColorComparison,
  PixelGridSizeComparison,
  patternCategories,
  type PatternType,
  type PixelGridColor,
  type PixelGridSize,
  type PixelGridSpeed,
} from "@/components/ui/pixel-grid";
import { ComponentNav } from "@/components/component-nav";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PixelGridPage() {
  const [selectedPattern, setSelectedPattern] = useState<PatternType>("frame");
  const [selectedColor, setSelectedColor] = useState<PixelGridColor>("green");
  const [selectedSize, setSelectedSize] = useState<PixelGridSize>("md");
  const [selectedSpeed, setSelectedSpeed] = useState<PixelGridSpeed>("normal");

  const allPatterns = Object.values(patternCategories).flat();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Pixel Grid</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Animated 3x3 pixel grid for brand visuals and loading states.
        </p>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Interactive Demo
        </h2>
        <p className="text-muted-foreground">
          Customize the pixel grid with different patterns, colors, sizes, and speeds.
        </p>

        <div className="flex flex-wrap gap-4 items-end">
          <div className="space-y-2">
            <Label>Pattern</Label>
            <Select value={selectedPattern} onValueChange={(v) => setSelectedPattern(v as PatternType)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {allPatterns.map((pattern) => (
                  <SelectItem key={pattern} value={pattern}>
                    {pattern}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Color</Label>
            <Select value={selectedColor} onValueChange={(v) => setSelectedColor(v as PixelGridColor)}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="pink">Pink</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Size</Label>
            <Select value={selectedSize} onValueChange={(v) => setSelectedSize(v as PixelGridSize)}>
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Speed</Label>
            <Select value={selectedSpeed} onValueChange={(v) => setSelectedSpeed(v as PixelGridSpeed)}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slow">Slow</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="fast">Fast</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center justify-center p-12 rounded-lg border bg-card">
          <PixelGrid
            pattern={selectedPattern}
            color={selectedColor}
            size={selectedSize}
            speed={selectedSpeed}
            showLabel
          />
        </div>
      </div>

      {/* Color Comparison */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Color Themes
        </h2>
        <p className="text-muted-foreground">
          Three color themes with light/dark mode support. Dark mode features neon glow effects.
        </p>
        <div className="flex items-center justify-center p-8 rounded-lg border bg-card">
          <PixelGridColorComparison pattern="frame" size="lg" />
        </div>
      </div>

      {/* Size Comparison */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Sizes
        </h2>
        <p className="text-muted-foreground">
          Three sizes available: small (6px pixels), medium (10px), and large (14px).
        </p>
        <div className="flex items-center justify-center p-8 rounded-lg border bg-card">
          <PixelGridSizeComparison pattern="corners-sync" color="green" />
        </div>
      </div>

      {/* All Patterns */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          All Patterns
        </h2>
        <p className="text-muted-foreground">
          31 animation patterns organized into 11 categories.
        </p>
        <div className="p-6 rounded-lg border bg-card">
          <PixelGridShowcase color="green" size="md" />
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>31 unique animation patterns across 11 categories</li>
          <li>Three color themes: green (Sourceful brand), blue, pink</li>
          <li>Neon glow effects in dark mode</li>
          <li>Three sizes: sm, md, lg</li>
          <li>Three speed options: slow, normal, fast</li>
          <li>Pause/resume animation control</li>
          <li>Optional pattern labels</li>
          <li>Smooth CSS transitions</li>
          <li>Reduced motion support for accessibility</li>
          <li>Light and dark mode support</li>
        </ul>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`import { PixelGrid, PixelGridShowcase } from "@sourceful-energy/ui"

// Basic usage
<PixelGrid pattern="frame" />

// With all options
<PixelGrid
  pattern="corners-sync"
  color="green"      // "green" | "blue" | "pink"
  size="md"          // "sm" | "md" | "lg"
  speed="normal"     // "slow" | "normal" | "fast"
  showLabel          // Show pattern name below
  paused={false}     // Pause animation
/>

// Showcase all patterns
<PixelGridShowcase color="green" size="md" />`}</code>
          </pre>
        </div>
      </div>

      {/* Pattern Categories */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Pattern Categories
        </h2>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`// Solo (3 patterns)
"solo-center" | "solo-tl" | "solo-br"

// Horizontal Lines (3)
"line-h-top" | "line-h-mid" | "line-h-bot"

// Vertical Lines (3)
"line-v-left" | "line-v-mid" | "line-v-right"

// Diagonal Lines (2)
"line-diag-1" | "line-diag-2"

// Corners (2)
"corners-sync" | "corners-only"

// L-Shapes (4)
"L-tl" | "L-tr" | "L-bl" | "L-br"

// T-Shapes (4)
"T-top" | "T-bot" | "T-left" | "T-right"

// Duos (3)
"duo-h" | "duo-v" | "duo-diag"

// Frame (2)
"frame" | "frame-sync"

// Plus (1)
"plus-hollow"

// Sparse (3)
"sparse-1" | "sparse-2" | "sparse-3"`}</code>
          </pre>
        </div>
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`interface PixelGridProps {
  pattern: PatternType    // Required - animation pattern
  color?: PixelGridColor  // "green" | "blue" | "pink" (default: "green")
  size?: PixelGridSize    // "sm" | "md" | "lg" (default: "md")
  speed?: PixelGridSpeed  // "slow" | "normal" | "fast" (default: "normal")
  paused?: boolean        // Pause animation (default: false)
  showLabel?: boolean     // Show pattern name (default: false)
  className?: string      // Additional CSS classes
}`}</code>
          </pre>
        </div>
      </div>

      <ComponentNav currentHref="/components/pixel-grid" />
    </div>
  );
}
