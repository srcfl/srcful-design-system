/**
 * Pattern definitions for the 4x4 PixelGrid component.
 *
 * Grid position reference (4x4):
 *  0  1  2  3   (row 0)
 *  4  5  6  7   (row 1)
 *  8  9 10 11   (row 2)
 * 12 13 14 15   (row 3)
 */

// Convert [x, y] coordinates to index
const toIndex = (x: number, y: number): number => y * 4 + x;

// Define pixel positions
const TL = toIndex(0, 0); // 0
const T1 = toIndex(1, 0); // 1
const T2 = toIndex(2, 0); // 2
const TR = toIndex(3, 0); // 3
const L1 = toIndex(0, 1); // 4
const C1 = toIndex(1, 1); // 5
const C2 = toIndex(2, 1); // 6
const R1 = toIndex(3, 1); // 7
const L2 = toIndex(0, 2); // 8
const C3 = toIndex(1, 2); // 9
const C4 = toIndex(2, 2); // 10
const R2 = toIndex(3, 2); // 11
const BL = toIndex(0, 3); // 12
const B1 = toIndex(1, 3); // 13
const B2 = toIndex(2, 3); // 14
const BR = toIndex(3, 3); // 15

export type PatternType =
  // Solo patterns
  | "solo-center"
  | "solo-tl"
  | "solo-br"
  // Line patterns - horizontal
  | "line-h-top"
  | "line-h-mid"
  | "line-h-bot"
  // Line patterns - vertical
  | "line-v-left"
  | "line-v-mid"
  | "line-v-right"
  // Line patterns - diagonal
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
  // Square patterns (4x4 specific)
  | "square-inner"
  | "square-outer"
  // Cross patterns
  | "cross-full"
  | "cross-spin";

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
    description: "Center pixels pulse",
    frames: [
      { activePixels: [] },
      { activePixels: [C1, C2, C3, C4] },
      { activePixels: [C1, C2, C3, C4] },
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

  // Line patterns - horizontal
  "line-h-top": {
    name: "Horizontal Top",
    description: "Top row lights up left to right",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL, T1] },
      { activePixels: [TL, T1, T2] },
      { activePixels: [TL, T1, T2, TR] },
      { activePixels: [T1, T2, TR] },
      { activePixels: [T2, TR] },
      { activePixels: [TR] },
      { activePixels: [] },
    ],
  },
  "line-h-mid": {
    name: "Horizontal Middle",
    description: "Middle rows light up left to right",
    frames: [
      { activePixels: [] },
      { activePixels: [L1, L2] },
      { activePixels: [L1, L2, C1, C3] },
      { activePixels: [L1, L2, C1, C3, C2, C4] },
      { activePixels: [L1, L2, C1, C3, C2, C4, R1, R2] },
      { activePixels: [C1, C3, C2, C4, R1, R2] },
      { activePixels: [C2, C4, R1, R2] },
      { activePixels: [R1, R2] },
      { activePixels: [] },
    ],
  },
  "line-h-bot": {
    name: "Horizontal Bottom",
    description: "Bottom row lights up left to right",
    frames: [
      { activePixels: [] },
      { activePixels: [BL] },
      { activePixels: [BL, B1] },
      { activePixels: [BL, B1, B2] },
      { activePixels: [BL, B1, B2, BR] },
      { activePixels: [B1, B2, BR] },
      { activePixels: [B2, BR] },
      { activePixels: [BR] },
      { activePixels: [] },
    ],
  },

  // Line patterns - vertical
  "line-v-left": {
    name: "Vertical Left",
    description: "Left column lights up top to bottom",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL, L1] },
      { activePixels: [TL, L1, L2] },
      { activePixels: [TL, L1, L2, BL] },
      { activePixels: [L1, L2, BL] },
      { activePixels: [L2, BL] },
      { activePixels: [BL] },
      { activePixels: [] },
    ],
  },
  "line-v-mid": {
    name: "Vertical Middle",
    description: "Middle columns light up top to bottom",
    frames: [
      { activePixels: [] },
      { activePixels: [T1, T2] },
      { activePixels: [T1, T2, C1, C2] },
      { activePixels: [T1, T2, C1, C2, C3, C4] },
      { activePixels: [T1, T2, C1, C2, C3, C4, B1, B2] },
      { activePixels: [C1, C2, C3, C4, B1, B2] },
      { activePixels: [C3, C4, B1, B2] },
      { activePixels: [B1, B2] },
      { activePixels: [] },
    ],
  },
  "line-v-right": {
    name: "Vertical Right",
    description: "Right column lights up top to bottom",
    frames: [
      { activePixels: [] },
      { activePixels: [TR] },
      { activePixels: [TR, R1] },
      { activePixels: [TR, R1, R2] },
      { activePixels: [TR, R1, R2, BR] },
      { activePixels: [R1, R2, BR] },
      { activePixels: [R2, BR] },
      { activePixels: [BR] },
      { activePixels: [] },
    ],
  },

  // Diagonal patterns
  "line-diag-1": {
    name: "Diagonal TL-BR",
    description: "Diagonal from top-left to bottom-right",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL, C1] },
      { activePixels: [TL, C1, C4] },
      { activePixels: [TL, C1, C4, BR] },
      { activePixels: [C1, C4, BR] },
      { activePixels: [C4, BR] },
      { activePixels: [BR] },
      { activePixels: [] },
    ],
  },
  "line-diag-2": {
    name: "Diagonal TR-BL",
    description: "Diagonal from top-right to bottom-left",
    frames: [
      { activePixels: [] },
      { activePixels: [TR] },
      { activePixels: [TR, C2] },
      { activePixels: [TR, C2, C3] },
      { activePixels: [TR, C2, C3, BL] },
      { activePixels: [C2, C3, BL] },
      { activePixels: [C3, BL] },
      { activePixels: [BL] },
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
      { activePixels: [TL] },
      { activePixels: [TL, T1] },
      { activePixels: [T1, T2] },
      { activePixels: [T2, TR] },
      { activePixels: [TR, R1] },
      { activePixels: [R1, R2] },
      { activePixels: [R2, BR] },
      { activePixels: [BR, B2] },
      { activePixels: [B2, B1] },
      { activePixels: [B1, BL] },
      { activePixels: [BL, L2] },
      { activePixels: [L2, L1] },
      { activePixels: [L1, TL] },
      { activePixels: [TL] },
      { activePixels: [] },
    ],
    cycleDuration: 2500,
  },
  "frame-sync": {
    name: "Frame Sync",
    description: "All outer pixels pulse together",
    frames: [
      { activePixels: [] },
      { activePixels: [TL, T1, T2, TR, L1, R1, L2, R2, BL, B1, B2, BR] },
      { activePixels: [TL, T1, T2, TR, L1, R1, L2, R2, BL, B1, B2, BR] },
      { activePixels: [] },
    ],
  },

  // Plus pattern
  "plus-hollow": {
    name: "Plus",
    description: "Plus/cross shape lights up",
    frames: [
      { activePixels: [] },
      { activePixels: [C1, C2, C3, C4] },
      { activePixels: [T1, T2, C1, C2, C3, C4, B1, B2] },
      { activePixels: [T1, T2, L1, L2, C1, C2, C3, C4, R1, R2, B1, B2] },
      { activePixels: [T1, T2, L1, L2, C1, C2, C3, C4, R1, R2, B1, B2] },
      { activePixels: [T1, T2, C1, C2, C3, C4, B1, B2] },
      { activePixels: [C1, C2, C3, C4] },
      { activePixels: [] },
    ],
  },

  // Square patterns (4x4 specific)
  "square-inner": {
    name: "Inner Square",
    description: "Inner 2x2 square pulses",
    frames: [
      { activePixels: [] },
      { activePixels: [C1] },
      { activePixels: [C1, C2] },
      { activePixels: [C1, C2, C4] },
      { activePixels: [C1, C2, C3, C4] },
      { activePixels: [C1, C2, C3, C4] },
      { activePixels: [C2, C3, C4] },
      { activePixels: [C3, C4] },
      { activePixels: [C4] },
      { activePixels: [] },
    ],
  },
  "square-outer": {
    name: "Outer Square",
    description: "Outer frame expands from center",
    frames: [
      { activePixels: [] },
      { activePixels: [C1, C2, C3, C4] },
      { activePixels: [T1, T2, L1, C1, C2, R1, L2, C3, C4, R2, B1, B2] },
      { activePixels: [TL, T1, T2, TR, L1, R1, L2, R2, BL, B1, B2, BR] },
      { activePixels: [TL, T1, T2, TR, L1, R1, L2, R2, BL, B1, B2, BR] },
      { activePixels: [T1, T2, L1, C1, C2, R1, L2, C3, C4, R2, B1, B2] },
      { activePixels: [C1, C2, C3, C4] },
      { activePixels: [] },
    ],
  },

  // Cross patterns
  "cross-full": {
    name: "Cross Full",
    description: "Full cross pattern",
    frames: [
      { activePixels: [] },
      { activePixels: [T1, T2, C1, C2, C3, C4, B1, B2, L1, L2, R1, R2] },
      { activePixels: [T1, T2, C1, C2, C3, C4, B1, B2, L1, L2, R1, R2] },
      { activePixels: [] },
    ],
  },
  "cross-spin": {
    name: "Cross Spin",
    description: "Cross pattern rotates",
    frames: [
      { activePixels: [T1, T2, B1, B2] },
      { activePixels: [T1, T2, B1, B2, TR, BR] },
      { activePixels: [L1, L2, R1, R2] },
      { activePixels: [L1, L2, R1, R2, TL, BL] },
      { activePixels: [T1, T2, B1, B2] },
    ],
    cycleDuration: 2000,
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
  Squares: ["square-inner", "square-outer"],
  Cross: ["cross-full", "cross-spin"],
};
