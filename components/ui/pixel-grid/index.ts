export { PixelGrid } from "./pixel-grid";
export type {
  PixelGridProps,
  PixelGridColor,
  PixelGridSpeed,
  PixelGridSize,
  PixelGridDimension,
  PatternType,
  PatternType3x3,
  PatternType4x4,
  PatternType5x5,
  PatternType6x6,
} from "./pixel-grid";

export {
  PixelGridShowcase,
  PixelGridColorComparison,
  PixelGridSizeComparison,
  PixelGridDimensionComparison,
} from "./pixel-grid-showcase";
export type {
  PixelGridShowcaseProps,
  PixelGridColorComparisonProps,
  PixelGridSizeComparisonProps,
  PixelGridDimensionComparisonProps,
} from "./pixel-grid-showcase";

// 3x3 patterns (default)
export { patterns, patternNames, patternCategories } from "./patterns";
export type { PatternDefinition, PatternFrame } from "./patterns";

// 4x4 patterns
export {
  patterns as patterns4x4,
  patternNames as patternNames4x4,
  patternCategories as patternCategories4x4,
} from "./patterns-4x4";

// 5x5 patterns
export {
  patterns as patterns5x5,
  patternNames as patternNames5x5,
  patternCategories as patternCategories5x5,
} from "./patterns-5x5";

// 6x6 patterns
export {
  patterns as patterns6x6,
  patternNames as patternNames6x6,
  patternCategories as patternCategories6x6,
} from "./patterns-6x6";
