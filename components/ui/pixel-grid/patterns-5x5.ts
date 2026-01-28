/**
 * Pattern definitions for the 5x5 PixelGrid component.
 *
 * Grid position reference (5x5):
 *  0  1  2  3  4   (row 0)
 *  5  6  7  8  9   (row 1)
 * 10 11 12 13 14   (row 2)
 * 15 16 17 18 19   (row 3)
 * 20 21 22 23 24   (row 4)
 */

// Convert [x, y] coordinates to index
const toIndex = (x: number, y: number): number => y * 5 + x;

// Define pixel positions - corners
const TL = toIndex(0, 0); // 0
const TR = toIndex(4, 0); // 4
const BL = toIndex(0, 4); // 20
const BR = toIndex(4, 4); // 24

// Top row
const T1 = toIndex(1, 0); // 1
const TC = toIndex(2, 0); // 2 - top center
const T3 = toIndex(3, 0); // 3

// Row 1
const L1 = toIndex(0, 1); // 5
const R11 = toIndex(1, 1); // 6
const R12 = toIndex(2, 1); // 7
const R13 = toIndex(3, 1); // 8
const R1 = toIndex(4, 1); // 9

// Middle row (row 2)
const ML = toIndex(0, 2); // 10
const M1 = toIndex(1, 2); // 11
const MC = toIndex(2, 2); // 12 - true center
const M3 = toIndex(3, 2); // 13
const MR = toIndex(4, 2); // 14

// Row 3
const L3 = toIndex(0, 3); // 15
const R31 = toIndex(1, 3); // 16
const R32 = toIndex(2, 3); // 17
const R33 = toIndex(3, 3); // 18
const R3 = toIndex(4, 3); // 19

// Bottom row
const B1 = toIndex(1, 4); // 21
const BC = toIndex(2, 4); // 22 - bottom center
const B3 = toIndex(3, 4); // 23

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
  // 5x5 specific patterns
  | "diamond"
  | "diamond-fill"
  | "spiral"
  | "x-pattern"
  | "ring-inner"
  | "ring-outer"
  | "checkerboard";

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
    description: "Center pixel pulses",
    frames: [
      { activePixels: [] },
      { activePixels: [MC] },
      { activePixels: [MC] },
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
      { activePixels: [TL, T1, TC] },
      { activePixels: [TL, T1, TC, T3] },
      { activePixels: [TL, T1, TC, T3, TR] },
      { activePixels: [T1, TC, T3, TR] },
      { activePixels: [TC, T3, TR] },
      { activePixels: [T3, TR] },
      { activePixels: [TR] },
      { activePixels: [] },
    ],
  },
  "line-h-mid": {
    name: "Horizontal Middle",
    description: "Middle row lights up left to right",
    frames: [
      { activePixels: [] },
      { activePixels: [ML] },
      { activePixels: [ML, M1] },
      { activePixels: [ML, M1, MC] },
      { activePixels: [ML, M1, MC, M3] },
      { activePixels: [ML, M1, MC, M3, MR] },
      { activePixels: [M1, MC, M3, MR] },
      { activePixels: [MC, M3, MR] },
      { activePixels: [M3, MR] },
      { activePixels: [MR] },
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
      { activePixels: [BL, B1, BC] },
      { activePixels: [BL, B1, BC, B3] },
      { activePixels: [BL, B1, BC, B3, BR] },
      { activePixels: [B1, BC, B3, BR] },
      { activePixels: [BC, B3, BR] },
      { activePixels: [B3, BR] },
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
      { activePixels: [TL, L1, ML] },
      { activePixels: [TL, L1, ML, L3] },
      { activePixels: [TL, L1, ML, L3, BL] },
      { activePixels: [L1, ML, L3, BL] },
      { activePixels: [ML, L3, BL] },
      { activePixels: [L3, BL] },
      { activePixels: [BL] },
      { activePixels: [] },
    ],
  },
  "line-v-mid": {
    name: "Vertical Middle",
    description: "Middle column lights up top to bottom",
    frames: [
      { activePixels: [] },
      { activePixels: [TC] },
      { activePixels: [TC, R12] },
      { activePixels: [TC, R12, MC] },
      { activePixels: [TC, R12, MC, R32] },
      { activePixels: [TC, R12, MC, R32, BC] },
      { activePixels: [R12, MC, R32, BC] },
      { activePixels: [MC, R32, BC] },
      { activePixels: [R32, BC] },
      { activePixels: [BC] },
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
      { activePixels: [TR, R1, MR] },
      { activePixels: [TR, R1, MR, R3] },
      { activePixels: [TR, R1, MR, R3, BR] },
      { activePixels: [R1, MR, R3, BR] },
      { activePixels: [MR, R3, BR] },
      { activePixels: [R3, BR] },
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
      { activePixels: [TL, R11] },
      { activePixels: [TL, R11, MC] },
      { activePixels: [TL, R11, MC, R33] },
      { activePixels: [TL, R11, MC, R33, BR] },
      { activePixels: [R11, MC, R33, BR] },
      { activePixels: [MC, R33, BR] },
      { activePixels: [R33, BR] },
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
      { activePixels: [TR, R13] },
      { activePixels: [TR, R13, MC] },
      { activePixels: [TR, R13, MC, R31] },
      { activePixels: [TR, R13, MC, R31, BL] },
      { activePixels: [R13, MC, R31, BL] },
      { activePixels: [MC, R31, BL] },
      { activePixels: [R31, BL] },
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
      { activePixels: [T1, TC] },
      { activePixels: [TC, T3] },
      { activePixels: [T3, TR] },
      { activePixels: [TR, R1] },
      { activePixels: [R1, MR] },
      { activePixels: [MR, R3] },
      { activePixels: [R3, BR] },
      { activePixels: [BR, B3] },
      { activePixels: [B3, BC] },
      { activePixels: [BC, B1] },
      { activePixels: [B1, BL] },
      { activePixels: [BL, L3] },
      { activePixels: [L3, ML] },
      { activePixels: [ML, L1] },
      { activePixels: [L1, TL] },
      { activePixels: [TL] },
      { activePixels: [] },
    ],
    cycleDuration: 3000,
  },
  "frame-sync": {
    name: "Frame Sync",
    description: "All outer pixels pulse together",
    frames: [
      { activePixels: [] },
      {
        activePixels: [
          TL, T1, TC, T3, TR,
          L1, R1,
          ML, MR,
          L3, R3,
          BL, B1, BC, B3, BR,
        ],
      },
      {
        activePixels: [
          TL, T1, TC, T3, TR,
          L1, R1,
          ML, MR,
          L3, R3,
          BL, B1, BC, B3, BR,
        ],
      },
      { activePixels: [] },
    ],
  },

  // Plus pattern
  "plus-hollow": {
    name: "Plus",
    description: "Plus/cross shape lights up",
    frames: [
      { activePixels: [] },
      { activePixels: [MC] },
      { activePixels: [R12, MC, R32] },
      { activePixels: [TC, R12, MC, R32, BC] },
      { activePixels: [TC, R12, M1, MC, M3, R32, BC] },
      { activePixels: [TC, R12, ML, M1, MC, M3, MR, R32, BC] },
      { activePixels: [TC, R12, ML, M1, MC, M3, MR, R32, BC] },
      { activePixels: [TC, R12, M1, MC, M3, R32, BC] },
      { activePixels: [R12, MC, R32] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },

  // 5x5 specific patterns
  diamond: {
    name: "Diamond",
    description: "Diamond shape expands from center",
    frames: [
      { activePixels: [] },
      { activePixels: [MC] },
      { activePixels: [R12, M1, MC, M3, R32] },
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R31, R32, R33, BC] },
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R31, R32, R33, BC] },
      { activePixels: [R12, M1, MC, M3, R32] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },
  "diamond-fill": {
    name: "Diamond Fill",
    description: "Filled diamond pulses",
    frames: [
      { activePixels: [] },
      {
        activePixels: [
          TC,
          R11, R12, R13,
          ML, M1, MC, M3, MR,
          R31, R32, R33,
          BC,
        ],
      },
      {
        activePixels: [
          TC,
          R11, R12, R13,
          ML, M1, MC, M3, MR,
          R31, R32, R33,
          BC,
        ],
      },
      { activePixels: [] },
    ],
  },
  spiral: {
    name: "Spiral",
    description: "Spiral pattern from outside to center",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL, T1, TC, T3, TR] },
      { activePixels: [TL, T1, TC, T3, TR, R1, MR, R3, BR] },
      { activePixels: [TL, T1, TC, T3, TR, R1, MR, R3, BR, B3, BC, B1, BL] },
      { activePixels: [TL, T1, TC, T3, TR, R1, MR, R3, BR, B3, BC, B1, BL, L3, ML, L1] },
      { activePixels: [TL, T1, TC, T3, TR, R1, MR, R3, BR, B3, BC, B1, BL, L3, ML, L1, R11, R12, R13] },
      { activePixels: [TL, T1, TC, T3, TR, R1, MR, R3, BR, B3, BC, B1, BL, L3, ML, L1, R11, R12, R13, R33, R32, R31] },
      { activePixels: [TL, T1, TC, T3, TR, R1, MR, R3, BR, B3, BC, B1, BL, L3, ML, L1, R11, R12, R13, R33, R32, R31, M1, MC, M3] },
      { activePixels: [TL, T1, TC, T3, TR, R1, MR, R3, BR, B3, BC, B1, BL, L3, ML, L1, R11, R12, R13, R33, R32, R31, M1, MC, M3] },
      { activePixels: [] },
    ],
    cycleDuration: 3000,
  },
  "x-pattern": {
    name: "X Pattern",
    description: "X shape lights up",
    frames: [
      { activePixels: [] },
      { activePixels: [MC] },
      { activePixels: [R11, MC, R33, R13, R31] },
      { activePixels: [TL, R11, MC, R33, BR, TR, R13, R31, BL] },
      { activePixels: [TL, R11, MC, R33, BR, TR, R13, R31, BL] },
      { activePixels: [R11, MC, R33, R13, R31] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },
  "ring-inner": {
    name: "Inner Ring",
    description: "Inner ring of pixels pulses",
    frames: [
      { activePixels: [] },
      { activePixels: [R11, R12, R13, R31, R32, R33, M1, M3] },
      { activePixels: [R11, R12, R13, R31, R32, R33, M1, M3] },
      { activePixels: [] },
    ],
  },
  "ring-outer": {
    name: "Rings",
    description: "Alternating rings expand",
    frames: [
      { activePixels: [] },
      { activePixels: [MC] },
      { activePixels: [R11, R12, R13, M1, M3, R31, R32, R33] },
      {
        activePixels: [
          TL, T1, TC, T3, TR,
          L1, R1,
          ML, MR,
          L3, R3,
          BL, B1, BC, B3, BR,
        ],
      },
      {
        activePixels: [
          TL, T1, TC, T3, TR,
          L1, R1,
          ML, MR,
          L3, R3,
          BL, B1, BC, B3, BR,
        ],
      },
      { activePixels: [R11, R12, R13, M1, M3, R31, R32, R33] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },
  checkerboard: {
    name: "Checkerboard",
    description: "Alternating checkerboard pattern",
    frames: [
      { activePixels: [] },
      { activePixels: [TL, TC, TR, R11, R13, ML, MC, MR, R31, R33, BL, BC, BR] },
      { activePixels: [TL, TC, TR, R11, R13, ML, MC, MR, R31, R33, BL, BC, BR] },
      { activePixels: [] },
      { activePixels: [T1, T3, L1, R12, R1, M1, M3, L3, R32, R3, B1, B3] },
      { activePixels: [T1, T3, L1, R12, R1, M1, M3, L3, R32, R3, B1, B3] },
      { activePixels: [] },
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
  Diamond: ["diamond", "diamond-fill"],
  Rings: ["ring-inner", "ring-outer"],
  Shapes: ["x-pattern", "spiral", "checkerboard"],
};
