/**
 * Pattern definitions for the 6x6 PixelGrid component.
 *
 * Grid position reference (6x6):
 *  0  1  2  3  4  5   (row 0)
 *  6  7  8  9 10 11   (row 1)
 * 12 13 14 15 16 17   (row 2)
 * 18 19 20 21 22 23   (row 3)
 * 24 25 26 27 28 29   (row 4)
 * 30 31 32 33 34 35   (row 5)
 */

// Convert [x, y] coordinates to index
const toIndex = (x: number, y: number): number => y * 6 + x;

// Define corner positions
const TL = toIndex(0, 0); // 0
const TR = toIndex(5, 0); // 5
const BL = toIndex(0, 5); // 30
const BR = toIndex(5, 5); // 35

// Row helpers
const row = (y: number) => Array.from({ length: 6 }, (_, x) => toIndex(x, y));
const col = (x: number) => Array.from({ length: 6 }, (_, y) => toIndex(x, y));

// Get outer frame pixels
const outerFrame = [
  ...row(0), // top row
  ...row(5), // bottom row
  ...col(0).slice(1, 5), // left column (excluding corners)
  ...col(5).slice(1, 5), // right column (excluding corners)
];

// Get inner frame (1 pixel in)
const innerFrame = [
  toIndex(1, 1), toIndex(2, 1), toIndex(3, 1), toIndex(4, 1),
  toIndex(1, 4), toIndex(2, 4), toIndex(3, 4), toIndex(4, 4),
  toIndex(1, 2), toIndex(1, 3),
  toIndex(4, 2), toIndex(4, 3),
];

// Center 2x2
const center2x2 = [toIndex(2, 2), toIndex(3, 2), toIndex(2, 3), toIndex(3, 3)];

// Center 4x4
const center4x4 = [
  toIndex(1, 1), toIndex(2, 1), toIndex(3, 1), toIndex(4, 1),
  toIndex(1, 2), toIndex(2, 2), toIndex(3, 2), toIndex(4, 2),
  toIndex(1, 3), toIndex(2, 3), toIndex(3, 3), toIndex(4, 3),
  toIndex(1, 4), toIndex(2, 4), toIndex(3, 4), toIndex(4, 4),
];

export type PatternType =
  // Solo patterns
  | "solo-center"
  | "solo-tl"
  | "solo-br"
  // Line patterns
  | "line-h-top"
  | "line-h-mid"
  | "line-h-bot"
  | "line-v-left"
  | "line-v-mid"
  | "line-v-right"
  | "line-diag-1"
  | "line-diag-2"
  // Corner patterns
  | "corners-sync"
  | "corners-only"
  // Frame patterns
  | "frame"
  | "frame-sync"
  // Plus pattern
  | "plus-hollow"
  // 6x6 specific patterns
  | "ripple"
  | "spiral"
  | "checkerboard"
  | "diamond"
  | "wave";

export interface PatternFrame {
  activePixels: number[];
  duration?: number;
}

export interface PatternDefinition {
  name: string;
  description: string;
  frames: PatternFrame[];
  cycleDuration?: number;
}

export const patterns: Record<PatternType, PatternDefinition> = {
  // Solo patterns
  "solo-center": {
    name: "Solo Center",
    description: "Center 2x2 pixels pulse",
    frames: [
      { activePixels: [] },
      { activePixels: center2x2 },
      { activePixels: center2x2 },
      { activePixels: [] },
    ],
  },
  "solo-tl": {
    name: "Solo Top-Left",
    description: "Top-left pixel pulses",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL] },
      { activePixels: [] },
    ],
  },
  "solo-br": {
    name: "Solo Bottom-Right",
    description: "Bottom-right pixel pulses",
    frames: [
      { activePixels: [] },
      { activePixels: [BR] },
      { activePixels: [BR] },
      { activePixels: [] },
    ],
  },

  // Horizontal lines
  "line-h-top": {
    name: "Horizontal Top",
    description: "Top row lights up left to right",
    frames: [
      { activePixels: [] },
      { activePixels: [0] },
      { activePixels: [0, 1] },
      { activePixels: [0, 1, 2] },
      { activePixels: [0, 1, 2, 3] },
      { activePixels: [0, 1, 2, 3, 4] },
      { activePixels: [0, 1, 2, 3, 4, 5] },
      { activePixels: [1, 2, 3, 4, 5] },
      { activePixels: [2, 3, 4, 5] },
      { activePixels: [3, 4, 5] },
      { activePixels: [4, 5] },
      { activePixels: [5] },
      { activePixels: [] },
    ],
  },
  "line-h-mid": {
    name: "Horizontal Middle",
    description: "Middle rows light up",
    frames: [
      { activePixels: [] },
      { activePixels: [12, 18] },
      { activePixels: [12, 13, 18, 19] },
      { activePixels: [12, 13, 14, 18, 19, 20] },
      { activePixels: [12, 13, 14, 15, 18, 19, 20, 21] },
      { activePixels: [12, 13, 14, 15, 16, 18, 19, 20, 21, 22] },
      { activePixels: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] },
      { activePixels: [13, 14, 15, 16, 17, 19, 20, 21, 22, 23] },
      { activePixels: [14, 15, 16, 17, 20, 21, 22, 23] },
      { activePixels: [15, 16, 17, 21, 22, 23] },
      { activePixels: [16, 17, 22, 23] },
      { activePixels: [17, 23] },
      { activePixels: [] },
    ],
  },
  "line-h-bot": {
    name: "Horizontal Bottom",
    description: "Bottom row lights up left to right",
    frames: [
      { activePixels: [] },
      { activePixels: [30] },
      { activePixels: [30, 31] },
      { activePixels: [30, 31, 32] },
      { activePixels: [30, 31, 32, 33] },
      { activePixels: [30, 31, 32, 33, 34] },
      { activePixels: [30, 31, 32, 33, 34, 35] },
      { activePixels: [31, 32, 33, 34, 35] },
      { activePixels: [32, 33, 34, 35] },
      { activePixels: [33, 34, 35] },
      { activePixels: [34, 35] },
      { activePixels: [35] },
      { activePixels: [] },
    ],
  },

  // Vertical lines
  "line-v-left": {
    name: "Vertical Left",
    description: "Left column lights up",
    frames: [
      { activePixels: [] },
      { activePixels: [0] },
      { activePixels: [0, 6] },
      { activePixels: [0, 6, 12] },
      { activePixels: [0, 6, 12, 18] },
      { activePixels: [0, 6, 12, 18, 24] },
      { activePixels: [0, 6, 12, 18, 24, 30] },
      { activePixels: [6, 12, 18, 24, 30] },
      { activePixels: [12, 18, 24, 30] },
      { activePixels: [18, 24, 30] },
      { activePixels: [24, 30] },
      { activePixels: [30] },
      { activePixels: [] },
    ],
  },
  "line-v-mid": {
    name: "Vertical Middle",
    description: "Middle columns light up",
    frames: [
      { activePixels: [] },
      { activePixels: [2, 3] },
      { activePixels: [2, 3, 8, 9] },
      { activePixels: [2, 3, 8, 9, 14, 15] },
      { activePixels: [2, 3, 8, 9, 14, 15, 20, 21] },
      { activePixels: [2, 3, 8, 9, 14, 15, 20, 21, 26, 27] },
      { activePixels: [2, 3, 8, 9, 14, 15, 20, 21, 26, 27, 32, 33] },
      { activePixels: [8, 9, 14, 15, 20, 21, 26, 27, 32, 33] },
      { activePixels: [14, 15, 20, 21, 26, 27, 32, 33] },
      { activePixels: [20, 21, 26, 27, 32, 33] },
      { activePixels: [26, 27, 32, 33] },
      { activePixels: [32, 33] },
      { activePixels: [] },
    ],
  },
  "line-v-right": {
    name: "Vertical Right",
    description: "Right column lights up",
    frames: [
      { activePixels: [] },
      { activePixels: [5] },
      { activePixels: [5, 11] },
      { activePixels: [5, 11, 17] },
      { activePixels: [5, 11, 17, 23] },
      { activePixels: [5, 11, 17, 23, 29] },
      { activePixels: [5, 11, 17, 23, 29, 35] },
      { activePixels: [11, 17, 23, 29, 35] },
      { activePixels: [17, 23, 29, 35] },
      { activePixels: [23, 29, 35] },
      { activePixels: [29, 35] },
      { activePixels: [35] },
      { activePixels: [] },
    ],
  },

  // Diagonal lines
  "line-diag-1": {
    name: "Diagonal TL-BR",
    description: "Diagonal from top-left to bottom-right",
    frames: [
      { activePixels: [] },
      { activePixels: [0] },
      { activePixels: [0, 7] },
      { activePixels: [0, 7, 14] },
      { activePixels: [0, 7, 14, 21] },
      { activePixels: [0, 7, 14, 21, 28] },
      { activePixels: [0, 7, 14, 21, 28, 35] },
      { activePixels: [7, 14, 21, 28, 35] },
      { activePixels: [14, 21, 28, 35] },
      { activePixels: [21, 28, 35] },
      { activePixels: [28, 35] },
      { activePixels: [35] },
      { activePixels: [] },
    ],
  },
  "line-diag-2": {
    name: "Diagonal TR-BL",
    description: "Diagonal from top-right to bottom-left",
    frames: [
      { activePixels: [] },
      { activePixels: [5] },
      { activePixels: [5, 10] },
      { activePixels: [5, 10, 15] },
      { activePixels: [5, 10, 15, 20] },
      { activePixels: [5, 10, 15, 20, 25] },
      { activePixels: [5, 10, 15, 20, 25, 30] },
      { activePixels: [10, 15, 20, 25, 30] },
      { activePixels: [15, 20, 25, 30] },
      { activePixels: [20, 25, 30] },
      { activePixels: [25, 30] },
      { activePixels: [30] },
      { activePixels: [] },
    ],
  },

  // Corner patterns
  "corners-sync": {
    name: "Corners Sync",
    description: "All corners pulse together",
    frames: [
      { activePixels: [] },
      { activePixels: [TL, TR, BL, BR] },
      { activePixels: [TL, TR, BL, BR] },
      { activePixels: [] },
    ],
  },
  "corners-only": {
    name: "Corners Clockwise",
    description: "Corners light up clockwise",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL, TR] },
      { activePixels: [TR] },
      { activePixels: [TR, BR] },
      { activePixels: [BR] },
      { activePixels: [BR, BL] },
      { activePixels: [BL] },
      { activePixels: [BL, TL] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  // Frame patterns
  frame: {
    name: "Frame",
    description: "Outer pixels light up clockwise",
    frames: [
      { activePixels: [] },
      { activePixels: [0] },
      { activePixels: [0, 1] },
      { activePixels: [1, 2] },
      { activePixels: [2, 3] },
      { activePixels: [3, 4] },
      { activePixels: [4, 5] },
      { activePixels: [5, 11] },
      { activePixels: [11, 17] },
      { activePixels: [17, 23] },
      { activePixels: [23, 29] },
      { activePixels: [29, 35] },
      { activePixels: [35, 34] },
      { activePixels: [34, 33] },
      { activePixels: [33, 32] },
      { activePixels: [32, 31] },
      { activePixels: [31, 30] },
      { activePixels: [30, 24] },
      { activePixels: [24, 18] },
      { activePixels: [18, 12] },
      { activePixels: [12, 6] },
      { activePixels: [6, 0] },
      { activePixels: [] },
    ],
    cycleDuration: 3000,
  },
  "frame-sync": {
    name: "Frame Sync",
    description: "All outer pixels pulse together",
    frames: [
      { activePixels: [] },
      { activePixels: outerFrame },
      { activePixels: outerFrame },
      { activePixels: [] },
    ],
  },

  // Plus pattern
  "plus-hollow": {
    name: "Plus",
    description: "Plus/cross shape lights up",
    frames: [
      { activePixels: [] },
      { activePixels: center2x2 },
      { activePixels: [...center2x2, 8, 9, 26, 27, 13, 16, 19, 22] },
      { activePixels: [...center2x2, 2, 3, 8, 9, 26, 27, 32, 33, 12, 17, 13, 16, 19, 22, 18, 23] },
      { activePixels: [...center2x2, 2, 3, 8, 9, 26, 27, 32, 33, 12, 17, 13, 16, 19, 22, 18, 23] },
      { activePixels: [...center2x2, 8, 9, 26, 27, 13, 16, 19, 22] },
      { activePixels: center2x2 },
      { activePixels: [] },
    ],
  },

  // 6x6 specific patterns
  ripple: {
    name: "Ripple",
    description: "Expanding ripple from center",
    frames: [
      { activePixels: [] },
      { activePixels: center2x2 },
      { activePixels: innerFrame },
      { activePixels: outerFrame },
      { activePixels: outerFrame },
      { activePixels: innerFrame },
      { activePixels: center2x2 },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  spiral: {
    name: "Spiral",
    description: "Spiral from outside to center",
    frames: [
      { activePixels: [] },
      { activePixels: [0] },
      { activePixels: [0, 1, 2, 3, 4, 5] },
      { activePixels: [0, 1, 2, 3, 4, 5, 11, 17, 23, 29, 35] },
      { activePixels: [0, 1, 2, 3, 4, 5, 11, 17, 23, 29, 35, 34, 33, 32, 31, 30] },
      { activePixels: [0, 1, 2, 3, 4, 5, 11, 17, 23, 29, 35, 34, 33, 32, 31, 30, 24, 18, 12, 6] },
      { activePixels: [7, 8, 9, 10, 16, 22, 28, 27, 26, 25, 19, 13] },
      { activePixels: [14, 15, 21, 20] },
      { activePixels: [14, 15, 21, 20] },
      { activePixels: [] },
    ],
    cycleDuration: 3000,
  },

  checkerboard: {
    name: "Checkerboard",
    description: "Alternating checkerboard pattern",
    frames: [
      { activePixels: [] },
      { activePixels: [0, 2, 4, 7, 9, 11, 12, 14, 16, 19, 21, 23, 24, 26, 28, 31, 33, 35] },
      { activePixels: [0, 2, 4, 7, 9, 11, 12, 14, 16, 19, 21, 23, 24, 26, 28, 31, 33, 35] },
      { activePixels: [1, 3, 5, 6, 8, 10, 13, 15, 17, 18, 20, 22, 25, 27, 29, 30, 32, 34] },
      { activePixels: [1, 3, 5, 6, 8, 10, 13, 15, 17, 18, 20, 22, 25, 27, 29, 30, 32, 34] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  diamond: {
    name: "Diamond",
    description: "Diamond shape expands",
    frames: [
      { activePixels: [] },
      { activePixels: center2x2 },
      { activePixels: [8, 9, 13, 16, 19, 22, 26, 27] },
      { activePixels: [2, 3, 7, 10, 12, 17, 18, 23, 25, 28, 32, 33] },
      { activePixels: [2, 3, 7, 10, 12, 17, 18, 23, 25, 28, 32, 33] },
      { activePixels: [8, 9, 13, 16, 19, 22, 26, 27] },
      { activePixels: center2x2 },
      { activePixels: [] },
    ],
  },

  wave: {
    name: "Wave",
    description: "Wave moving across grid",
    frames: [
      { activePixels: [0, 6, 12, 18, 24, 30] },
      { activePixels: [0, 1, 6, 7, 12, 13, 18, 19, 24, 25, 30, 31] },
      { activePixels: [1, 2, 7, 8, 13, 14, 19, 20, 25, 26, 31, 32] },
      { activePixels: [2, 3, 8, 9, 14, 15, 20, 21, 26, 27, 32, 33] },
      { activePixels: [3, 4, 9, 10, 15, 16, 21, 22, 27, 28, 33, 34] },
      { activePixels: [4, 5, 10, 11, 16, 17, 22, 23, 28, 29, 34, 35] },
      { activePixels: [5, 11, 17, 23, 29, 35] },
      { activePixels: [] },
    ],
    cycleDuration: 1500,
  },
};

export const patternNames = Object.keys(patterns) as PatternType[];

export const patternCategories: Record<string, PatternType[]> = {
  Solo: ["solo-center", "solo-tl", "solo-br"],
  "Horizontal Lines": ["line-h-top", "line-h-mid", "line-h-bot"],
  "Vertical Lines": ["line-v-left", "line-v-mid", "line-v-right"],
  "Diagonal Lines": ["line-diag-1", "line-diag-2"],
  Corners: ["corners-sync", "corners-only"],
  Frame: ["frame", "frame-sync"],
  Plus: ["plus-hollow"],
  "6x6 Special": ["ripple", "spiral", "checkerboard", "diamond", "wave"],
};
