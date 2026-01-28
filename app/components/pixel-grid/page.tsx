"use client";

import { useState, useEffect } from "react";
import {
  PixelGrid,
  PixelGridShowcase,
  PixelGridColorComparison,
  PixelGridSizeComparison,
  PixelGridDimensionComparison,
  patternCategories,
  patternCategories4x4,
  patternCategories5x5,
  patternCategories6x6,
  type PatternType,
  type PixelGridColor,
  type PixelGridSize,
  type PixelGridSpeed,
  type PixelGridDimension,
} from "@/components/ui/pixel-grid";
import { ComponentNav } from "@/components/component-nav";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Get patterns for a dimension
function getPatternsForDimension(dimension: PixelGridDimension): string[] {
  switch (dimension) {
    case 4:
      return Object.values(patternCategories4x4).flat();
    case 5:
      return Object.values(patternCategories5x5).flat();
    case 6:
      return Object.values(patternCategories6x6).flat();
    default:
      return Object.values(patternCategories).flat();
  }
}

export default function PixelGridPage() {
  const [selectedDimension, setSelectedDimension] = useState<PixelGridDimension>(3);
  const [selectedPattern, setSelectedPattern] = useState<PatternType>("frame");
  const [selectedColor, setSelectedColor] = useState<PixelGridColor>("green");
  const [selectedSize, setSelectedSize] = useState<PixelGridSize>("md");
  const [selectedSpeed, setSelectedSpeed] = useState<PixelGridSpeed>("normal");
  const [animated, setAnimated] = useState(true);

  const allPatterns = getPatternsForDimension(selectedDimension);

  // Reset pattern when dimension changes if current pattern doesn't exist
  useEffect(() => {
    if (!allPatterns.includes(selectedPattern)) {
      setSelectedPattern(allPatterns[0] as PatternType);
    }
  }, [selectedDimension, allPatterns, selectedPattern]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Pixel Grid</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Animated pixel grids (3x3, 4x4, 5x5, 6x6) for brand visuals and loading states.
        </p>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Interactive Demo
        </h2>
        <p className="text-muted-foreground">
          Customize the pixel grid with different dimensions, patterns, colors, sizes, and speeds.
        </p>

        <div className="flex flex-wrap gap-4 items-end">
          <div className="space-y-2">
            <Label>Grid</Label>
            <Select value={String(selectedDimension)} onValueChange={(v) => setSelectedDimension(Number(v) as PixelGridDimension)}>
              <SelectTrigger className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3x3</SelectItem>
                <SelectItem value="4">4x4</SelectItem>
                <SelectItem value="5">5x5</SelectItem>
                <SelectItem value="6">6x6</SelectItem>
              </SelectContent>
            </Select>
          </div>

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

          <div className="flex items-center gap-2">
            <Switch id="animated" checked={animated} onCheckedChange={setAnimated} />
            <Label htmlFor="animated">Animated</Label>
          </div>
        </div>

        <div className="flex items-center justify-center p-12 rounded-lg border bg-card">
          <PixelGrid
            pattern={selectedPattern}
            dimension={selectedDimension}
            color={selectedColor}
            size={selectedSize}
            speed={selectedSpeed}
            animated={animated}
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

      {/* Dimension Comparison */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Grid Dimensions
        </h2>
        <p className="text-muted-foreground">
          Four grid dimensions: 3x3 (9 pixels), 4x4 (16 pixels), 5x5 (25 pixels), and 6x6 (36 pixels). Each has unique patterns optimized for that size.
        </p>
        <div className="flex items-center justify-center p-8 rounded-lg border bg-card">
          <PixelGridDimensionComparison pattern="corners-sync" color="green" size="lg" />
        </div>
      </div>

      {/* Static vs Animated */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Static Mode
        </h2>
        <p className="text-muted-foreground">
          Set <code className="text-sm bg-muted px-1 py-0.5 rounded">animated=false</code> to show a static display of the pattern.
        </p>
        <div className="flex items-center justify-center gap-12 p-8 rounded-lg border bg-card">
          <div className="flex flex-col items-center gap-2">
            <PixelGrid pattern="frame-sync" color="green" size="lg" animated={true} />
            <span className="text-xs text-muted-foreground font-mono">animated</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PixelGrid pattern="frame-sync" color="green" size="lg" animated={false} />
            <span className="text-xs text-muted-foreground font-mono">static</span>
          </div>
        </div>
      </div>

      {/* All Patterns */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          All Patterns
        </h2>
        <p className="text-muted-foreground">
          {selectedDimension === 3 && "31 animation patterns organized into 11 categories (3x3 grid)."}
          {selectedDimension === 4 && "21 animation patterns organized into 9 categories (4x4 grid)."}
          {selectedDimension === 5 && "20 animation patterns organized into 10 categories (5x5 grid)."}
          {selectedDimension === 6 && "22 animation patterns organized into 8 categories (6x6 grid)."}
        </p>
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setSelectedDimension(3)}
            className={`px-3 py-1 text-sm rounded-md ${selectedDimension === 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
          >
            3x3
          </button>
          <button
            onClick={() => setSelectedDimension(4)}
            className={`px-3 py-1 text-sm rounded-md ${selectedDimension === 4 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
          >
            4x4
          </button>
          <button
            onClick={() => setSelectedDimension(5)}
            className={`px-3 py-1 text-sm rounded-md ${selectedDimension === 5 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
          >
            5x5
          </button>
          <button
            onClick={() => setSelectedDimension(6)}
            className={`px-3 py-1 text-sm rounded-md ${selectedDimension === 6 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
          >
            6x6
          </button>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <PixelGridShowcase dimension={selectedDimension} color="green" size="md" />
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Four grid dimensions: 3x3, 4x4, 5x5, 6x6</li>
          <li>94 total animation patterns across all dimensions</li>
          <li>Three color themes: green (Sourceful brand), blue, pink</li>
          <li>Neon glow effects in dark mode</li>
          <li>Three sizes: sm, md, lg</li>
          <li>Three speed options: slow, normal, fast</li>
          <li>Static mode for non-animated display</li>
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

// Basic usage (3x3)
<PixelGrid pattern="frame" />

// 4x4 grid with unique pattern
<PixelGrid dimension={4} pattern="square-inner" />

// 5x5 grid with unique pattern
<PixelGrid dimension={5} pattern="diamond" />

// 6x6 grid with unique pattern
<PixelGrid dimension={6} pattern="ripple" />

// Static (non-animated) display
<PixelGrid pattern="corners-sync" animated={false} />

// With all options
<PixelGrid
  pattern="corners-sync"
  dimension={3}      // 3 | 4 | 5 | 6 (default: 3)
  color="green"      // "green" | "blue" | "pink"
  size="md"          // "sm" | "md" | "lg"
  speed="normal"     // "slow" | "normal" | "fast"
  animated={true}    // true | false (default: true)
  showLabel          // Show pattern name below
  paused={false}     // Pause animation
/>

// Showcase all patterns for a dimension
<PixelGridShowcase dimension={4} color="green" size="md" />`}</code>
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
  pattern: PatternType        // Required - animation pattern
  dimension?: PixelGridDimension // 3 | 4 | 5 | 6 (default: 3)
  color?: PixelGridColor      // "green" | "blue" | "pink" (default: "green")
  size?: PixelGridSize        // "sm" | "md" | "lg" (default: "md")
  speed?: PixelGridSpeed      // "slow" | "normal" | "fast" (default: "normal")
  animated?: boolean          // Enable animation (default: true)
  paused?: boolean            // Pause animation (default: false)
  showLabel?: boolean         // Show pattern name (default: false)
  className?: string          // Additional CSS classes
}`}</code>
          </pre>
        </div>
      </div>

      <ComponentNav currentHref="/components/pixel-grid" />
    </div>
  );
}
