/**
 * Pattern definitions for the PixelGrid component.
 *
 * Grid position reference (3x3):
 * [0,0] [1,0] [2,0]   (top-left, top-center, top-right)
 * [0,1] [1,1] [2,1]   (mid-left, center, mid-right)
 * [0,2] [1,2] [2,2]   (bot-left, bot-center, bot-right)
 *
 * Index mapping (row-major order):
 * 0 1 2
 * 3 4 5
 * 6 7 8
 */

// Convert [x, y] coordinates to index
const toIndex = (x: number, y: number): number => y * 3 + x;

// Define pixel positions
const TL = toIndex(0, 0); // 0 - top-left
const TC = toIndex(1, 0); // 1 - top-center
const TR = toIndex(2, 0); // 2 - top-right
const ML = toIndex(0, 1); // 3 - mid-left
const MC = toIndex(1, 1); // 4 - center
const MR = toIndex(2, 1); // 5 - mid-right
const BL = toIndex(0, 2); // 6 - bot-left
const BC = toIndex(1, 2); // 7 - bot-center
const BR = toIndex(2, 2); // 8 - bot-right

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
  // L-shape patterns
  | "L-tl"
  | "L-tr"
  | "L-bl"
  | "L-br"
  // T-shape patterns
  | "T-top"
  | "T-bot"
  | "T-left"
  | "T-right"
  // Duo patterns
  | "duo-h"
  | "duo-v"
  | "duo-diag"
  // Frame patterns
  | "frame"
  | "frame-sync"
  // Plus pattern
  | "plus-hollow"
  // Sparse patterns
  | "sparse-1"
  | "sparse-2"
  | "sparse-3";

export interface PatternFrame {
  activePixels: number[];
  duration?: number; // Override default frame duration (ms)
}

export interface PatternDefinition {
  name: string;
  description: string;
  frames: PatternFrame[];
  cycleDuration?: number; // Total cycle duration in ms (default: 1500)
}

/**
 * Pattern definitions.
 * Each pattern is an array of frames, where each frame specifies which pixels are active.
 * Animation interpolates between frames for smooth transitions.
 */
export const patterns: Record<PatternType, PatternDefinition> = {
  // Solo patterns - single pixel pulses
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
      { activePixels: [TL, TC] },
      { activePixels: [TL, TC, TR] },
      { activePixels: [TC, TR] },
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
      { activePixels: [ML, MC] },
      { activePixels: [ML, MC, MR] },
      { activePixels: [MC, MR] },
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
      { activePixels: [BL, BC] },
      { activePixels: [BL, BC, BR] },
      { activePixels: [BC, BR] },
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
      { activePixels: [TL, ML] },
      { activePixels: [TL, ML, BL] },
      { activePixels: [ML, BL] },
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
      { activePixels: [TC, MC] },
      { activePixels: [TC, MC, BC] },
      { activePixels: [MC, BC] },
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
      { activePixels: [TR, MR] },
      { activePixels: [TR, MR, BR] },
      { activePixels: [MR, BR] },
      { activePixels: [BR] },
      { activePixels: [] },
    ],
  },

  // Line patterns - diagonal
  "line-diag-1": {
    name: "Diagonal TL-BR",
    description: "Diagonal from top-left to bottom-right",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL, MC] },
      { activePixels: [TL, MC, BR] },
      { activePixels: [MC, BR] },
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
      { activePixels: [TR, MC] },
      { activePixels: [TR, MC, BL] },
      { activePixels: [MC, BL] },
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

  // L-shape patterns
  "L-tl": {
    name: "L Top-Left",
    description: "L shape in top-left corner",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL, ML] },
      { activePixels: [TL, ML, MC] },
      { activePixels: [TL, ML, MC] },
      { activePixels: [ML, MC] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },
  "L-tr": {
    name: "L Top-Right",
    description: "L shape in top-right corner",
    frames: [
      { activePixels: [] },
      { activePixels: [TR] },
      { activePixels: [TR, MR] },
      { activePixels: [TR, MR, MC] },
      { activePixels: [TR, MR, MC] },
      { activePixels: [MR, MC] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },
  "L-bl": {
    name: "L Bottom-Left",
    description: "L shape in bottom-left corner",
    frames: [
      { activePixels: [] },
      { activePixels: [BL] },
      { activePixels: [BL, ML] },
      { activePixels: [BL, ML, MC] },
      { activePixels: [BL, ML, MC] },
      { activePixels: [ML, MC] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },
  "L-br": {
    name: "L Bottom-Right",
    description: "L shape in bottom-right corner",
    frames: [
      { activePixels: [] },
      { activePixels: [BR] },
      { activePixels: [BR, MR] },
      { activePixels: [BR, MR, MC] },
      { activePixels: [BR, MR, MC] },
      { activePixels: [MR, MC] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },

  // T-shape patterns
  "T-top": {
    name: "T Top",
    description: "T shape pointing down",
    frames: [
      { activePixels: [] },
      { activePixels: [TC] },
      { activePixels: [TL, TC, TR] },
      { activePixels: [TL, TC, TR, MC] },
      { activePixels: [TL, TC, TR, MC] },
      { activePixels: [TC, MC] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },
  "T-bot": {
    name: "T Bottom",
    description: "T shape pointing up",
    frames: [
      { activePixels: [] },
      { activePixels: [BC] },
      { activePixels: [BL, BC, BR] },
      { activePixels: [BL, BC, BR, MC] },
      { activePixels: [BL, BC, BR, MC] },
      { activePixels: [BC, MC] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },
  "T-left": {
    name: "T Left",
    description: "T shape pointing right",
    frames: [
      { activePixels: [] },
      { activePixels: [ML] },
      { activePixels: [TL, ML, BL] },
      { activePixels: [TL, ML, BL, MC] },
      { activePixels: [TL, ML, BL, MC] },
      { activePixels: [ML, MC] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },
  "T-right": {
    name: "T Right",
    description: "T shape pointing left",
    frames: [
      { activePixels: [] },
      { activePixels: [MR] },
      { activePixels: [TR, MR, BR] },
      { activePixels: [TR, MR, BR, MC] },
      { activePixels: [TR, MR, BR, MC] },
      { activePixels: [MR, MC] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },

  // Duo patterns
  "duo-h": {
    name: "Duo Horizontal",
    description: "Two horizontal pixels pulse",
    frames: [
      { activePixels: [] },
      { activePixels: [ML] },
      { activePixels: [ML, MR] },
      { activePixels: [ML, MR] },
      { activePixels: [MR] },
      { activePixels: [] },
    ],
  },
  "duo-v": {
    name: "Duo Vertical",
    description: "Two vertical pixels pulse",
    frames: [
      { activePixels: [] },
      { activePixels: [TC] },
      { activePixels: [TC, BC] },
      { activePixels: [TC, BC] },
      { activePixels: [BC] },
      { activePixels: [] },
    ],
  },
  "duo-diag": {
    name: "Duo Diagonal",
    description: "Diagonal pair pulses",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL, BR] },
      { activePixels: [TL, BR] },
      { activePixels: [BR] },
      { activePixels: [] },
    ],
  },

  // Frame patterns
  frame: {
    name: "Frame",
    description: "Outer pixels light up clockwise",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL, TC] },
      { activePixels: [TC, TR] },
      { activePixels: [TR, MR] },
      { activePixels: [MR, BR] },
      { activePixels: [BR, BC] },
      { activePixels: [BC, BL] },
      { activePixels: [BL, ML] },
      { activePixels: [ML, TL] },
      { activePixels: [TL] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },
  "frame-sync": {
    name: "Frame Sync",
    description: "All outer pixels pulse together",
    frames: [
      { activePixels: [] },
      { activePixels: [TL, TC, TR, ML, MR, BL, BC, BR] },
      { activePixels: [TL, TC, TR, ML, MR, BL, BC, BR] },
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
      { activePixels: [TC, MC, BC] },
      { activePixels: [TC, ML, MC, MR, BC] },
      { activePixels: [TC, ML, MC, MR, BC] },
      { activePixels: [TC, MC, BC] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
  },

  // Sparse patterns
  "sparse-1": {
    name: "Sparse 1",
    description: "Scattered pattern variation 1",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL, MR] },
      { activePixels: [TL, MR, BC] },
      { activePixels: [TL, MR, BC] },
      { activePixels: [MR, BC] },
      { activePixels: [BC] },
      { activePixels: [] },
    ],
  },
  "sparse-2": {
    name: "Sparse 2",
    description: "Scattered pattern variation 2",
    frames: [
      { activePixels: [] },
      { activePixels: [TC] },
      { activePixels: [TC, BL] },
      { activePixels: [TC, BL, BR] },
      { activePixels: [TC, BL, BR] },
      { activePixels: [BL, BR] },
      { activePixels: [BR] },
      { activePixels: [] },
    ],
  },
  "sparse-3": {
    name: "Sparse 3",
    description: "Scattered pattern variation 3",
    frames: [
      { activePixels: [] },
      { activePixels: [TR] },
      { activePixels: [TR, ML] },
      { activePixels: [TR, ML, BL] },
      { activePixels: [TR, ML, BL] },
      { activePixels: [ML, BL] },
      { activePixels: [BL] },
      { activePixels: [] },
    ],
  },
};

// Export all pattern names for use in showcase
export const patternNames = Object.keys(patterns) as PatternType[];

// Group patterns by category for organized display
export const patternCategories: Record<string, PatternType[]> = {
  Solo: ["solo-center", "solo-tl", "solo-br"],
  "Horizontal Lines": ["line-h-top", "line-h-mid", "line-h-bot"],
  "Vertical Lines": ["line-v-left", "line-v-mid", "line-v-right"],
  "Diagonal Lines": ["line-diag-1", "line-diag-2"],
  Corners: ["corners-sync", "corners-only"],
  "L-Shapes": ["L-tl", "L-tr", "L-bl", "L-br"],
  "T-Shapes": ["T-top", "T-bot", "T-left", "T-right"],
  Duos: ["duo-h", "duo-v", "duo-diag"],
  Frame: ["frame", "frame-sync"],
  Plus: ["plus-hollow"],
  Sparse: ["sparse-1", "sparse-2", "sparse-3"],
};
