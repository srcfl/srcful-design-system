/**
 * Zap LED Animation Patterns for M5Stack Atom Matrix (5x5 grid)
 *
 * Hardware: M5Stack Atom Matrix
 * - 5x5 WS2812C RGB LED matrix (25 individually addressable LEDs)
 * - ESP32-PICO-D4 @ 240MHz
 * - Recommended brightness: 20 (FastLED scale)
 * - Ultra-compact: 24x24x13.8mm
 *
 * Grid position reference (5x5):
 *  0  1  2  3  4   (row 0)
 *  5  6  7  8  9   (row 1)
 * 10 11 12 13 14   (row 2)
 * 15 16 17 18 19   (row 3)
 * 20 21 22 23 24   (row 4)
 */

import type { PatternDefinition, PatternFrame } from "./patterns";

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

// All pixels for convenience
const ALL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const FRAME = [TL, T1, TC, T3, TR, L1, R1, ML, MR, L3, R3, BL, B1, BC, B3, BR];

// Zap pattern types
export type ZapPatternType =
  // 1. Startup & Identity (3)
  | "zap-boot"
  | "zap-ready"
  | "zap-logo"
  // 2. Connection States (4)
  | "zap-pairing"
  | "zap-connecting"
  | "zap-connected"
  | "zap-no-network"
  // 3. Operational States (3)
  | "zap-active"
  | "zap-standby"
  | "zap-offline"
  // 4. Data States (3)
  | "zap-data-tx"
  | "zap-syncing"
  | "zap-no-data"
  // 5. Energy Flow States (6)
  | "zap-importing"
  | "zap-exporting"
  | "zap-charging"
  | "zap-discharging"
  | "zap-peak-alert"
  | "zap-grid-event"
  // 6. Control Mode States (3)
  | "zap-local"
  | "zap-remote"
  | "zap-scheduled"
  // 7. Error States (3)
  | "zap-error"
  | "zap-warning"
  | "zap-updating"
  // 8. V2X/EV Specific (4)
  | "zap-ev-connected"
  | "zap-ev-charging"
  | "zap-v2x-active"
  | "zap-ev-complete"
  // 9. P1 Meter Specific (3)
  | "zap-meter-reading"
  | "zap-meter-connected"
  | "zap-phase-balance"
  // 10. SoC Display (5)
  | "zap-soc-0"
  | "zap-soc-25"
  | "zap-soc-50"
  | "zap-soc-75"
  | "zap-soc-100"
  // 11. Fun & Decorative
  | "zap-smiley"
  | "zap-smiley-wink"
  | "zap-heart"
  | "zap-heart-beat"
  | "zap-star"
  | "zap-star-spin"
  | "zap-fireworks"
  | "zap-confetti"
  | "zap-flower"
  | "zap-sun"
  | "zap-moon"
  | "zap-cloud"
  | "zap-rain"
  | "zap-snow"
  | "zap-waves"
  | "zap-fire"
  | "zap-tree"
  | "zap-house"
  | "zap-car"
  | "zap-rocket"
  | "zap-ghost"
  | "zap-skull"
  | "zap-cat"
  | "zap-fish"
  | "zap-music"
  // 12. Emojis
  | "zap-checkmark"
  | "zap-cross"
  | "zap-question"
  | "zap-exclaim"
  | "zap-arrow-up"
  | "zap-arrow-down"
  | "zap-arrow-left"
  | "zap-arrow-right"
  | "zap-play"
  | "zap-pause"
  | "zap-stop"
  | "zap-power"
  | "zap-wifi-bars"
  | "zap-signal"
  | "zap-hourglass"
  | "zap-clock"
  | "zap-bell"
  | "zap-mail"
  // 13. Games & Fun
  | "zap-pacman"
  | "zap-space-invader"
  | "zap-tetris"
  | "zap-dice"
  | "zap-crown"
  | "zap-trophy";

export const zapPatterns: Record<ZapPatternType, PatternDefinition> = {
  // ============================================================
  // 1. STARTUP & IDENTITY (3 animations)
  // ============================================================

  "zap-boot": {
    name: "Boot/Power On",
    description: "Spiral expanding from center - indicates device powering up",
    frames: [
      { activePixels: [] },
      { activePixels: [MC] },
      { activePixels: [MC, R12, M1, M3, R32] },
      { activePixels: [R12, M1, M3, R32, R11, R13, R31, R33] },
      { activePixels: [R11, R12, R13, M1, M3, R31, R32, R33, TC, ML, MR, BC] },
      { activePixels: [TC, ML, MR, BC, TL, T1, T3, TR, L1, R1, L3, R3, BL, B1, B3, BR] },
      { activePixels: ALL },
      { activePixels: ALL },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
    cycleDuration: 2500,
  },

  "zap-ready": {
    name: "Ready/Hello",
    description: "Diamond pulse - indicates device is ready for operation",
    frames: [
      { activePixels: [] },
      { activePixels: [MC] },
      { activePixels: [MC, R12, M1, M3, R32] },
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R31, R32, R33, BC] },
      { activePixels: [TC, R11, R12, R13, ML, M1, MC, M3, MR, R31, R32, R33, BC] },
      { activePixels: [TC, R11, R12, R13, ML, M1, MC, M3, MR, R31, R32, R33, BC] },
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R31, R32, R33, BC] },
      { activePixels: [MC, R12, M1, M3, R32] },
      { activePixels: [MC] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-logo": {
    name: "Lightning Bolt",
    description: "Custom lightning bolt shape - Zap brand identity",
    frames: [
      { activePixels: [] },
      { activePixels: [T3] },
      { activePixels: [T3, R13] },
      { activePixels: [T3, R13, R12, M1] },
      { activePixels: [T3, R13, R12, M1, MC, M3] },
      { activePixels: [T3, R13, R12, M1, MC, M3, R32, R31] },
      { activePixels: [T3, R13, R12, M1, MC, M3, R32, R31, B1] },
      // Hold the lightning bolt shape
      { activePixels: [T3, R13, R12, M1, MC, M3, R32, R31, B1] },
      { activePixels: [T3, R13, R12, M1, MC, M3, R32, R31, B1] },
      { activePixels: [T3, R13, R12, M1, MC, M3, R32, R31, B1] },
      // Flash
      { activePixels: ALL },
      { activePixels: [T3, R13, R12, M1, MC, M3, R32, R31, B1] },
      { activePixels: [] },
    ],
    cycleDuration: 2500,
  },

  // ============================================================
  // 2. CONNECTION STATES (4 animations)
  // ============================================================

  "zap-pairing": {
    name: "Pairing/WiFi Setup",
    description: "Checkerboard alternating - indicates pairing mode active",
    frames: [
      { activePixels: [TL, TC, TR, R11, R13, ML, MC, MR, R31, R33, BL, BC, BR] },
      { activePixels: [TL, TC, TR, R11, R13, ML, MC, MR, R31, R33, BL, BC, BR] },
      { activePixels: [] },
      { activePixels: [T1, T3, L1, R12, R1, M1, M3, L3, R32, R3, B1, B3] },
      { activePixels: [T1, T3, L1, R12, R1, M1, M3, L3, R32, R3, B1, B3] },
      { activePixels: [] },
    ],
    cycleDuration: 1500,
  },

  "zap-connecting": {
    name: "Connecting",
    description: "Expanding rings from center - indicates connection attempt",
    frames: [
      { activePixels: [] },
      { activePixels: [MC] },
      { activePixels: [MC] },
      { activePixels: [R11, R12, R13, M1, M3, R31, R32, R33] },
      { activePixels: [R11, R12, R13, M1, M3, R31, R32, R33] },
      { activePixels: FRAME },
      { activePixels: FRAME },
      { activePixels: [] },
    ],
    cycleDuration: 1800,
  },

  "zap-connected": {
    name: "Connected",
    description: "Quick pulse then steady center - indicates successful connection",
    frames: [
      { activePixels: ALL },
      { activePixels: ALL },
      { activePixels: [MC] },
      { activePixels: [MC] },
      { activePixels: [MC] },
      { activePixels: [MC] },
      { activePixels: [MC] },
      { activePixels: [MC] },
    ],
    cycleDuration: 2000,
  },

  "zap-no-network": {
    name: "No Network",
    description: "Frame blink warning (orange->red suggested) - indicates network loss",
    frames: [
      { activePixels: FRAME },
      { activePixels: FRAME },
      { activePixels: [] },
      { activePixels: FRAME },
      { activePixels: FRAME },
      { activePixels: [] },
      { activePixels: [] },
      { activePixels: [] },
    ],
    cycleDuration: 1200,
  },

  // ============================================================
  // 3. OPERATIONAL STATES (3 animations)
  // ============================================================

  "zap-active": {
    name: "Active",
    description: "Gentle center heartbeat - indicates active operation",
    frames: [
      { activePixels: [MC] },
      { activePixels: [MC, R12, M1, M3, R32] },
      { activePixels: [MC, R12, M1, M3, R32] },
      { activePixels: [MC] },
      { activePixels: [MC] },
      { activePixels: [] },
      { activePixels: [MC] },
      { activePixels: [MC] },
    ],
    cycleDuration: 2500,
  },

  "zap-standby": {
    name: "Standby/Idle",
    description: "Slow corners pulse - indicates standby mode",
    frames: [
      { activePixels: [] },
      { activePixels: [] },
      { activePixels: [TL, TR, BL, BR] },
      { activePixels: [TL, TR, BL, BR] },
      { activePixels: [TL, TR, BL, BR] },
      { activePixels: [] },
      { activePixels: [] },
      { activePixels: [] },
    ],
    cycleDuration: 3000,
  },

  "zap-offline": {
    name: "Offline",
    description: "Single pixel breathing (gray suggested) - indicates offline mode",
    frames: [
      { activePixels: [] },
      { activePixels: [] },
      { activePixels: [] },
      { activePixels: [MC] },
      { activePixels: [MC] },
      { activePixels: [MC] },
      { activePixels: [] },
      { activePixels: [] },
    ],
    cycleDuration: 4000,
  },

  // ============================================================
  // 4. DATA STATES (3 animations)
  // ============================================================

  "zap-data-tx": {
    name: "Data Transferring",
    description: "Spiral flow - indicates data transmission",
    frames: [
      { activePixels: [TL] },
      { activePixels: [T1, TC] },
      { activePixels: [T3, TR] },
      { activePixels: [R1, MR] },
      { activePixels: [R3, BR] },
      { activePixels: [B3, BC] },
      { activePixels: [B1, BL] },
      { activePixels: [L3, ML] },
      { activePixels: [L1, TL] },
    ],
    cycleDuration: 1200,
  },

  "zap-syncing": {
    name: "Syncing",
    description: "Frame rotation - indicates sync in progress",
    frames: [
      { activePixels: [TL, T1] },
      { activePixels: [TC, T3] },
      { activePixels: [TR, R1] },
      { activePixels: [MR, R3] },
      { activePixels: [BR, B3] },
      { activePixels: [BC, B1] },
      { activePixels: [BL, L3] },
      { activePixels: [ML, L1] },
    ],
    cycleDuration: 1000,
  },

  "zap-no-data": {
    name: "No Data",
    description: "X pattern pulse (yellow suggested) - indicates no data received",
    frames: [
      { activePixels: [] },
      { activePixels: [TL, TR, MC, BL, BR] },
      { activePixels: [TL, R11, TR, R13, MC, R31, BL, R33, BR] },
      { activePixels: [TL, R11, TR, R13, MC, R31, BL, R33, BR] },
      { activePixels: [TL, TR, MC, BL, BR] },
      { activePixels: [] },
    ],
    cycleDuration: 1500,
  },

  // ============================================================
  // 5. ENERGY FLOW STATES (6 animations)
  // ============================================================

  "zap-importing": {
    name: "Grid Import",
    description: "Lines flowing inward (yellow suggested) - indicates power import from grid",
    frames: [
      { activePixels: [TL, T1, TC, T3, TR] },
      { activePixels: [L1, R11, R12, R13, R1] },
      { activePixels: [ML, M1, MC, M3, MR] },
      { activePixels: [L3, R31, R32, R33, R3] },
      { activePixels: [BL, B1, BC, B3, BR] },
      { activePixels: [L3, R31, R32, R33, R3] },
      { activePixels: [ML, M1, MC, M3, MR] },
      { activePixels: [L1, R11, R12, R13, R1] },
    ],
    cycleDuration: 1000,
  },

  "zap-exporting": {
    name: "Grid Export",
    description: "Lines flowing outward (green) - indicates power export to grid",
    frames: [
      { activePixels: [ML, M1, MC, M3, MR] },
      { activePixels: [L1, R11, R12, R13, R1] },
      { activePixels: [TL, T1, TC, T3, TR] },
      { activePixels: [L1, R11, R12, R13, R1] },
      { activePixels: [ML, M1, MC, M3, MR] },
      { activePixels: [L3, R31, R32, R33, R3] },
      { activePixels: [BL, B1, BC, B3, BR] },
      { activePixels: [L3, R31, R32, R33, R3] },
    ],
    cycleDuration: 1000,
  },

  "zap-charging": {
    name: "Battery Charging",
    description: "Fill from bottom up (blue->green) - indicates battery charging",
    frames: [
      { activePixels: [] },
      { activePixels: [BL, B1, BC, B3, BR] },
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3] },
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3, ML, M1, MC, M3, MR] },
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3, ML, M1, MC, M3, MR, L1, R11, R12, R13, R1] },
      { activePixels: ALL },
      { activePixels: ALL },
      { activePixels: [] },
    ],
    cycleDuration: 2500,
  },

  "zap-discharging": {
    name: "Battery Discharging",
    description: "Drain from top (green->yellow) - indicates battery discharging",
    frames: [
      { activePixels: ALL },
      { activePixels: [L1, R11, R12, R13, R1, ML, M1, MC, M3, MR, L3, R31, R32, R33, R3, BL, B1, BC, B3, BR] },
      { activePixels: [ML, M1, MC, M3, MR, L3, R31, R32, R33, R3, BL, B1, BC, B3, BR] },
      { activePixels: [L3, R31, R32, R33, R3, BL, B1, BC, B3, BR] },
      { activePixels: [BL, B1, BC, B3, BR] },
      { activePixels: [] },
      { activePixels: ALL },
      { activePixels: ALL },
    ],
    cycleDuration: 2500,
  },

  "zap-peak-alert": {
    name: "Peak Approaching",
    description: "Fast frame pulse (orange) - indicates peak pricing/demand approaching",
    frames: [
      { activePixels: FRAME },
      { activePixels: [] },
      { activePixels: FRAME },
      { activePixels: [] },
      { activePixels: FRAME },
      { activePixels: FRAME },
    ],
    cycleDuration: 800,
  },

  "zap-grid-event": {
    name: "Grid Event Active",
    description: "Rapid corners sync (bright green) - indicates grid event participation",
    frames: [
      { activePixels: [TL, TR, BL, BR] },
      { activePixels: ALL },
      { activePixels: [TL, TR, BL, BR] },
      { activePixels: ALL },
    ],
    cycleDuration: 600,
  },

  // ============================================================
  // 6. CONTROL MODE STATES (3 animations)
  // ============================================================

  "zap-local": {
    name: "Local Control",
    description: "L shape indicator (green) - indicates local control mode",
    frames: [
      { activePixels: [] },
      { activePixels: [TL] },
      { activePixels: [TL, L1] },
      { activePixels: [TL, L1, ML] },
      { activePixels: [TL, L1, ML, L3] },
      { activePixels: [TL, L1, ML, L3, BL, B1, BC] },
      { activePixels: [TL, L1, ML, L3, BL, B1, BC] },
      { activePixels: [TL, L1, ML, L3, BL, B1, BC] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-remote": {
    name: "Remote Control",
    description: "Cloud-like pattern (blue) - indicates remote/cloud control mode",
    frames: [
      { activePixels: [] },
      { activePixels: [R11, R12, R13] },
      { activePixels: [T1, TC, T3, R11, R12, R13, M1, M3] },
      { activePixels: [T1, TC, T3, R11, R12, R13, M1, MC, M3] },
      { activePixels: [T1, TC, T3, R11, R12, R13, M1, MC, M3] },
      { activePixels: [T1, TC, T3, R11, R12, R13, M1, M3] },
      { activePixels: [R11, R12, R13] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-scheduled": {
    name: "Scheduled Mode",
    description: "Clock rotation (purple suggested) - indicates scheduled/timer mode",
    frames: [
      { activePixels: [TC, MC] },
      { activePixels: [R13, MC] },
      { activePixels: [MR, MC] },
      { activePixels: [R33, MC] },
      { activePixels: [BC, MC] },
      { activePixels: [R31, MC] },
      { activePixels: [ML, MC] },
      { activePixels: [R11, MC] },
    ],
    cycleDuration: 2000,
  },

  // ============================================================
  // 7. ERROR STATES (3 animations)
  // ============================================================

  "zap-error": {
    name: "Error",
    description: "X pattern (red) - indicates error state",
    frames: [
      { activePixels: [] },
      { activePixels: [TL, TR, MC, BL, BR] },
      { activePixels: [TL, R11, TR, R13, MC, R31, BL, R33, BR] },
      { activePixels: [TL, R11, TR, R13, MC, R31, BL, R33, BR] },
      { activePixels: [TL, R11, TR, R13, MC, R31, BL, R33, BR] },
      { activePixels: [] },
      { activePixels: [TL, R11, TR, R13, MC, R31, BL, R33, BR] },
      { activePixels: [] },
    ],
    cycleDuration: 1200,
  },

  "zap-warning": {
    name: "Warning",
    description: "Triangle blink (orange) - indicates warning state",
    frames: [
      { activePixels: [] },
      { activePixels: [TC] },
      { activePixels: [TC, R11, R13] },
      { activePixels: [TC, R11, R13, ML, MR] },
      { activePixels: [TC, R11, R13, ML, MR, BL, B1, BC, B3, BR] },
      { activePixels: [TC, R11, R13, ML, MR, BL, B1, BC, B3, BR] },
      { activePixels: [] },
      { activePixels: [TC, R11, R13, ML, MR, BL, B1, BC, B3, BR] },
      { activePixels: [] },
    ],
    cycleDuration: 1500,
  },

  "zap-updating": {
    name: "Firmware Update",
    description: "Progress bar fill (blue) - indicates firmware update in progress",
    frames: [
      { activePixels: [ML] },
      { activePixels: [ML, M1] },
      { activePixels: [ML, M1, MC] },
      { activePixels: [ML, M1, MC, M3] },
      { activePixels: [ML, M1, MC, M3, MR] },
      { activePixels: [ML, M1, MC, M3, MR] },
      { activePixels: [ML, M1, MC, M3, MR] },
      { activePixels: [] },
    ],
    cycleDuration: 1500,
  },

  // ============================================================
  // 8. V2X/EV SPECIFIC (4 animations)
  // ============================================================

  "zap-ev-connected": {
    name: "Vehicle Connected",
    description: "Plug icon pattern (blue) - indicates EV connected",
    frames: [
      { activePixels: [] },
      { activePixels: [T1, T3] },
      { activePixels: [T1, R11, R13, T3] },
      { activePixels: [T1, R11, R12, R13, T3] },
      { activePixels: [T1, R11, R12, R13, T3, MC] },
      { activePixels: [T1, R11, R12, R13, T3, MC, R32] },
      { activePixels: [T1, R11, R12, R13, T3, MC, R32, BC] },
      { activePixels: [T1, R11, R12, R13, T3, MC, R32, BC] },
      { activePixels: [T1, R11, R12, R13, T3, MC, R32, BC] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-ev-charging": {
    name: "EV Charging",
    description: "Upward flow (blue->green) - indicates EV is charging",
    frames: [
      { activePixels: [BC] },
      { activePixels: [R32] },
      { activePixels: [MC] },
      { activePixels: [R12] },
      { activePixels: [TC] },
      { activePixels: [] },
    ],
    cycleDuration: 800,
  },

  "zap-v2x-active": {
    name: "V2X Bidirectional",
    description: "Alternating flow (green+blue) - indicates V2X bidirectional mode",
    frames: [
      { activePixels: [TC, R12] },
      { activePixels: [MC] },
      { activePixels: [R32, BC] },
      { activePixels: [MC] },
    ],
    cycleDuration: 600,
  },

  "zap-ev-complete": {
    name: "Charge Complete",
    description: "Checkmark/success (green) - indicates charging complete",
    frames: [
      { activePixels: [] },
      { activePixels: [R31] },
      { activePixels: [R31, BL] },
      { activePixels: [R31, BL, MC] },
      { activePixels: [R31, BL, MC, R13] },
      { activePixels: [R31, BL, MC, R13, TR] },
      // Hold checkmark
      { activePixels: [R31, BL, MC, R13, TR] },
      { activePixels: [R31, BL, MC, R13, TR] },
      { activePixels: [R31, BL, MC, R13, TR] },
      { activePixels: [R31, BL, MC, R13, TR] },
      { activePixels: [] },
    ],
    cycleDuration: 2500,
  },

  // ============================================================
  // 9. P1 METER SPECIFIC (3 animations)
  // ============================================================

  "zap-meter-reading": {
    name: "Meter Reading",
    description: "Horizontal scan (cyan) - indicates meter reading in progress",
    frames: [
      { activePixels: [TL, L1, ML, L3, BL] },
      { activePixels: [T1, R11, M1, R31, B1] },
      { activePixels: [TC, R12, MC, R32, BC] },
      { activePixels: [T3, R13, M3, R33, B3] },
      { activePixels: [TR, R1, MR, R3, BR] },
      { activePixels: [T3, R13, M3, R33, B3] },
      { activePixels: [TC, R12, MC, R32, BC] },
      { activePixels: [T1, R11, M1, R31, B1] },
    ],
    cycleDuration: 1200,
  },

  "zap-meter-connected": {
    name: "P1 Connected",
    description: "P indicator (green) - indicates P1 meter connected",
    frames: [
      { activePixels: [] },
      { activePixels: [T1, L1, R11, R12, ML, M1, L3, BL] },
      { activePixels: [T1, L1, R11, R12, ML, M1, L3, BL] },
      { activePixels: [T1, L1, R11, R12, ML, M1, L3, BL] },
      { activePixels: [T1, L1, R11, R12, ML, M1, L3, BL] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-phase-balance": {
    name: "Phase Indicator",
    description: "3 vertical columns (RGB suggested) - indicates 3-phase balance",
    frames: [
      { activePixels: [] },
      { activePixels: [T1, R11, M1, R31, B1] },
      { activePixels: [T1, R11, M1, R31, B1, TC, R12, MC, R32, BC] },
      { activePixels: [T1, R11, M1, R31, B1, TC, R12, MC, R32, BC, T3, R13, M3, R33, B3] },
      { activePixels: [T1, R11, M1, R31, B1, TC, R12, MC, R32, BC, T3, R13, M3, R33, B3] },
      { activePixels: [T1, R11, M1, R31, B1, TC, R12, MC, R32, BC, T3, R13, M3, R33, B3] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  // ============================================================
  // 10. SOC DISPLAY (5 static states with pulse)
  // ============================================================

  "zap-soc-0": {
    name: "SoC 0-20%",
    description: "1 row lit (red) - indicates critical battery level",
    frames: [
      { activePixels: [] },
      { activePixels: [BL, B1, BC, B3, BR] },
      { activePixels: [BL, B1, BC, B3, BR] },
      { activePixels: [] },
      { activePixels: [BL, B1, BC, B3, BR] },
      { activePixels: [BL, B1, BC, B3, BR] },
    ],
    cycleDuration: 1000,
  },

  "zap-soc-25": {
    name: "SoC 20-40%",
    description: "2 rows lit (orange) - indicates low battery level",
    frames: [
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3] },
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3] },
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-soc-50": {
    name: "SoC 40-60%",
    description: "3 rows lit (yellow) - indicates medium battery level",
    frames: [
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3, ML, M1, MC, M3, MR] },
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3, ML, M1, MC, M3, MR] },
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3, ML, M1, MC, M3, MR] },
      { activePixels: [] },
    ],
    cycleDuration: 3000,
  },

  "zap-soc-75": {
    name: "SoC 60-80%",
    description: "4 rows lit (light green) - indicates good battery level",
    frames: [
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3, ML, M1, MC, M3, MR, L1, R11, R12, R13, R1] },
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3, ML, M1, MC, M3, MR, L1, R11, R12, R13, R1] },
      { activePixels: [BL, B1, BC, B3, BR, L3, R31, R32, R33, R3, ML, M1, MC, M3, MR, L1, R11, R12, R13, R1] },
      { activePixels: [] },
    ],
    cycleDuration: 4000,
  },

  "zap-soc-100": {
    name: "SoC 80-100%",
    description: "5 rows lit (green) - indicates full battery",
    frames: [
      { activePixels: ALL },
      { activePixels: ALL },
      { activePixels: ALL },
      { activePixels: ALL },
    ],
    cycleDuration: 5000,
  },

  // ============================================================
  // 11. FUN & DECORATIVE
  // ============================================================

  "zap-smiley": {
    name: "Smiley Face",
    description: "Happy face - for success or celebration",
    frames: [
      { activePixels: [] },
      // Eyes and smile
      { activePixels: [R11, R13, L3, R31, R32, R33, R3] },
      { activePixels: [R11, R13, L3, R31, R32, R33, R3] },
      { activePixels: [R11, R13, L3, R31, R32, R33, R3] },
      { activePixels: [R11, R13, L3, R31, R32, R33, R3] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-smiley-wink": {
    name: "Winking Smiley",
    description: "Playful winking face animation",
    frames: [
      { activePixels: [R11, R13, L3, R31, R32, R33, R3] },
      { activePixels: [R11, R13, L3, R31, R32, R33, R3] },
      { activePixels: [M1, R13, L3, R31, R32, R33, R3] }, // wink left eye
      { activePixels: [M1, R13, L3, R31, R32, R33, R3] },
      { activePixels: [R11, R13, L3, R31, R32, R33, R3] },
      { activePixels: [R11, R13, L3, R31, R32, R33, R3] },
    ],
    cycleDuration: 1500,
  },

  "zap-heart": {
    name: "Heart",
    description: "Heart shape - for love and favorites",
    frames: [
      { activePixels: [] },
      { activePixels: [T1, T3, L1, R11, R12, R13, R1, ML, M1, MC, M3, MR, R31, R32, R33, BC] },
      { activePixels: [T1, T3, L1, R11, R12, R13, R1, ML, M1, MC, M3, MR, R31, R32, R33, BC] },
      { activePixels: [T1, T3, L1, R11, R12, R13, R1, ML, M1, MC, M3, MR, R31, R32, R33, BC] },
      { activePixels: [] },
    ],
    cycleDuration: 1500,
  },

  "zap-heart-beat": {
    name: "Heart Beat",
    description: "Pulsing heart - for health or love",
    frames: [
      { activePixels: [R12, M1, MC, M3, R32] }, // small heart
      { activePixels: [T1, T3, L1, R11, R12, R13, R1, ML, M1, MC, M3, MR, R31, R32, R33, BC] }, // big
      { activePixels: [T1, T3, L1, R11, R12, R13, R1, ML, M1, MC, M3, MR, R31, R32, R33, BC] },
      { activePixels: [R12, M1, MC, M3, R32] }, // small
      { activePixels: [R12, M1, MC, M3, R32] },
      { activePixels: [T1, T3, L1, R11, R12, R13, R1, ML, M1, MC, M3, MR, R31, R32, R33, BC] },
    ],
    cycleDuration: 1200,
  },

  "zap-star": {
    name: "Star",
    description: "Star shape - for ratings and favorites",
    frames: [
      { activePixels: [] },
      { activePixels: [TC, R11, R12, R13, ML, M1, MC, M3, MR, R31, R33, BL, BR] },
      { activePixels: [TC, R11, R12, R13, ML, M1, MC, M3, MR, R31, R33, BL, BR] },
      { activePixels: [TC, R11, R12, R13, ML, M1, MC, M3, MR, R31, R33, BL, BR] },
      { activePixels: [] },
    ],
    cycleDuration: 1500,
  },

  "zap-star-spin": {
    name: "Spinning Star",
    description: "Rotating star animation",
    frames: [
      { activePixels: [TC, MC, BC] },
      { activePixels: [R13, MC, R31] },
      { activePixels: [ML, MC, MR] },
      { activePixels: [R11, MC, R33] },
      { activePixels: [TC, MC, BC] },
    ],
    cycleDuration: 800,
  },

  "zap-fireworks": {
    name: "Fireworks",
    description: "Explosive celebration animation",
    frames: [
      { activePixels: [BC] },
      { activePixels: [MC] },
      { activePixels: [TC, R12] },
      { activePixels: [TL, TC, TR, R11, R13] },
      { activePixels: [TL, T1, TC, T3, TR, L1, R11, R12, R13, R1] },
      { activePixels: [TL, TR, L1, R1, ML, MR] },
      { activePixels: [TL, TR, BL, BR] },
      { activePixels: [] },
    ],
    cycleDuration: 1500,
  },

  "zap-confetti": {
    name: "Confetti",
    description: "Random celebration sparkles",
    frames: [
      { activePixels: [TL, R13, M1, R3, BC] },
      { activePixels: [T1, R11, MR, R31, B3] },
      { activePixels: [TC, L1, MC, R33, BL] },
      { activePixels: [T3, R1, M3, L3, B1] },
      { activePixels: [TR, R12, ML, R32, BR] },
    ],
    cycleDuration: 1000,
  },

  "zap-flower": {
    name: "Flower",
    description: "Blooming flower animation",
    frames: [
      { activePixels: [] },
      { activePixels: [MC] },
      { activePixels: [MC, R12, M1, M3, R32] },
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R31, R32, R33, BC] },
      { activePixels: [TC, R11, R12, R13, ML, M1, MC, M3, MR, R31, R32, R33, BC] },
      { activePixels: [TC, R11, R12, R13, ML, M1, MC, M3, MR, R31, R32, R33, BC] },
      { activePixels: [MC, R12, M1, M3, R32] },
      { activePixels: [] },
    ],
    cycleDuration: 2500,
  },

  "zap-sun": {
    name: "Sun",
    description: "Radiating sun - for solar energy",
    frames: [
      { activePixels: [R11, R12, R13, M1, MC, M3, R31, R32, R33] }, // core
      { activePixels: [TC, R11, R12, R13, ML, M1, MC, M3, MR, R31, R32, R33, BC] }, // + rays
      { activePixels: [TL, TC, TR, R11, R12, R13, ML, M1, MC, M3, MR, R31, R32, R33, BL, BC, BR] },
      { activePixels: [TC, R11, R12, R13, ML, M1, MC, M3, MR, R31, R32, R33, BC] },
      { activePixels: [R11, R12, R13, M1, MC, M3, R31, R32, R33] },
    ],
    cycleDuration: 1500,
  },

  "zap-moon": {
    name: "Moon",
    description: "Crescent moon - for night mode",
    frames: [
      { activePixels: [] },
      { activePixels: [T1, TC, T3, L1, R13, R1, ML, MR, L3, R3, B1, BC, B3] }, // full moon outline
      { activePixels: [T1, TC, L1, ML, L3, B1, BC] }, // crescent
      { activePixels: [T1, TC, L1, ML, L3, B1, BC] },
      { activePixels: [T1, TC, T3, L1, R13, R1, ML, MR, L3, R3, B1, BC, B3] },
      { activePixels: [] },
    ],
    cycleDuration: 3000,
  },

  "zap-cloud": {
    name: "Cloud",
    description: "Fluffy cloud shape",
    frames: [
      { activePixels: [] },
      { activePixels: [T1, TC, T3, L1, R11, R12, R13, R1, ML, M1, MC, M3, MR] },
      { activePixels: [T1, TC, T3, L1, R11, R12, R13, R1, ML, M1, MC, M3, MR] },
      { activePixels: [T1, TC, T3, L1, R11, R12, R13, R1, ML, M1, MC, M3, MR] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-rain": {
    name: "Rain",
    description: "Falling raindrops animation",
    frames: [
      { activePixels: [T1, T3, R11, R13] },
      { activePixels: [R11, R13, M1, M3] },
      { activePixels: [M1, M3, R31, R33] },
      { activePixels: [R31, R33, B1, B3] },
      { activePixels: [B1, B3, TC, R12] },
      { activePixels: [TC, R12, R11, R13] },
    ],
    cycleDuration: 900,
  },

  "zap-snow": {
    name: "Snow",
    description: "Falling snowflakes",
    frames: [
      { activePixels: [TL, TC, TR] },
      { activePixels: [L1, R12, R1] },
      { activePixels: [TL, ML, MC, MR, TR] },
      { activePixels: [L3, R32, R3] },
      { activePixels: [BL, BC, BR] },
      { activePixels: [R31, R33] },
    ],
    cycleDuration: 1500,
  },

  "zap-waves": {
    name: "Waves",
    description: "Ocean wave animation",
    frames: [
      { activePixels: [TL, TC, TR, R11, R13] },
      { activePixels: [T1, T3, L1, R12, R1, R11, R13] },
      { activePixels: [TL, TC, TR, R11, R12, R13] },
      { activePixels: [T1, T3, L1, R1, R11, R13] },
    ],
    cycleDuration: 1000,
  },

  "zap-fire": {
    name: "Fire",
    description: "Flickering flames",
    frames: [
      { activePixels: [MC, R31, R32, R33, BL, B1, BC, B3, BR] },
      { activePixels: [R12, M1, MC, M3, R31, R32, R33, B1, BC, B3] },
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R32, BC] },
      { activePixels: [R12, MC, R32, R31, R33, B1, BC, B3] },
      { activePixels: [M1, MC, M3, R31, R32, R33, BL, B1, BC, B3, BR] },
    ],
    cycleDuration: 600,
  },

  "zap-tree": {
    name: "Tree",
    description: "Simple tree shape - for nature/eco",
    frames: [
      { activePixels: [] },
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R32, BC] }, // tree
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R32, BC] },
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R32, BC] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-house": {
    name: "House",
    description: "Home icon - for home automation",
    frames: [
      { activePixels: [] },
      { activePixels: [TC, R11, R13, ML, M1, MC, M3, MR, L3, R31, R33, R3, BL, B1, B3, BR] },
      { activePixels: [TC, R11, R13, ML, M1, MC, M3, MR, L3, R31, R33, R3, BL, B1, B3, BR] },
      { activePixels: [TC, R11, R13, ML, M1, MC, M3, MR, L3, R31, R33, R3, BL, B1, B3, BR] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-car": {
    name: "Car",
    description: "Simple car shape - side view",
    frames: [
      { activePixels: [R11, R12, R13, ML, M1, MC, M3, MR, R31, R33] }, // car body + wheels
      { activePixels: [R11, R12, R13, ML, M1, MC, M3, MR, R31, R33] },
      // wheels spin effect
      { activePixels: [R11, R12, R13, ML, M1, MC, M3, MR, L3, R3] },
      { activePixels: [R11, R12, R13, ML, M1, MC, M3, MR, L3, R3] },
    ],
    cycleDuration: 800,
  },

  "zap-rocket": {
    name: "Rocket",
    description: "Rocket launch animation",
    frames: [
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, L3, R32, R3, BC] }, // rocket
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, L3, R32, R3, B1, BC, B3] }, // + flame
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, L3, R32, R3, BL, B1, BC, B3, BR] }, // bigger flame
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, L3, R32, R3, B1, BC, B3] },
    ],
    cycleDuration: 600,
  },

  "zap-ghost": {
    name: "Ghost",
    description: "Spooky ghost animation",
    frames: [
      { activePixels: [T1, TC, T3, L1, R11, R13, R1, ML, M1, MC, M3, MR, L3, R31, R33, R3, BL, BC, BR] },
      { activePixels: [T1, TC, T3, L1, R11, R13, R1, ML, M1, MC, M3, MR, L3, R31, R33, R3, B1, B3] },
      { activePixels: [T1, TC, T3, L1, R11, R13, R1, ML, M1, MC, M3, MR, L3, R31, R33, R3, BL, BC, BR] },
    ],
    cycleDuration: 1000,
  },

  "zap-skull": {
    name: "Skull",
    description: "Skull icon - for danger/death",
    frames: [
      { activePixels: [] },
      { activePixels: [T1, TC, T3, L1, R11, R13, R1, ML, MC, MR, R31, R32, R33] },
      { activePixels: [T1, TC, T3, L1, R11, R13, R1, ML, MC, MR, R31, R32, R33] },
      { activePixels: [] },
      { activePixels: [T1, TC, T3, L1, R11, R13, R1, ML, MC, MR, R31, R32, R33] },
      { activePixels: [] },
    ],
    cycleDuration: 1200,
  },

  "zap-cat": {
    name: "Cat",
    description: "Cat face with animated ears",
    frames: [
      { activePixels: [TL, TR, R11, R13, ML, MC, MR, R31, R33] }, // ears up
      { activePixels: [TL, TR, R11, R13, ML, MC, MR, R31, R33] },
      { activePixels: [L1, R1, R11, R13, ML, MC, MR, R31, R33] }, // ears down
      { activePixels: [TL, TR, R11, R13, ML, MC, MR, R31, R33] },
    ],
    cycleDuration: 1500,
  },

  "zap-fish": {
    name: "Fish",
    description: "Swimming fish animation",
    frames: [
      { activePixels: [R11, M1, MC, M3, MR, R3, R32] },
      { activePixels: [R11, R12, M1, MC, M3, R33, R32] },
      { activePixels: [L1, R12, ML, M1, MC, M3, R32] },
      { activePixels: [R11, R12, M1, MC, M3, R33, R32] },
    ],
    cycleDuration: 800,
  },

  "zap-music": {
    name: "Music Note",
    description: "Musical note animation",
    frames: [
      { activePixels: [] },
      { activePixels: [T3, TR, R13, R1, MR, R3, R33, B3] },
      { activePixels: [T3, TR, R13, R1, MR, R3, R33, B3] },
      { activePixels: [T3, TR, R13, R1, MR, R3, R33, B3] },
      { activePixels: [] },
    ],
    cycleDuration: 1500,
  },

  // ============================================================
  // 12. EMOJIS & SYMBOLS
  // ============================================================

  "zap-checkmark": {
    name: "Checkmark",
    description: "Success/done indicator",
    frames: [
      { activePixels: [] },
      { activePixels: [R31] },
      { activePixels: [R31, BL] },
      { activePixels: [R31, BL, MC] },
      { activePixels: [R31, BL, MC, R13] },
      { activePixels: [R31, BL, MC, R13, TR] },
      { activePixels: [R31, BL, MC, R13, TR] },
      { activePixels: [R31, BL, MC, R13, TR] },
    ],
    cycleDuration: 1500,
  },

  "zap-cross": {
    name: "Cross/X",
    description: "Cancel/error indicator",
    frames: [
      { activePixels: [] },
      { activePixels: [TL, TR, MC, BL, BR] },
      { activePixels: [TL, R11, TR, R13, MC, R31, BL, R33, BR] },
      { activePixels: [TL, R11, TR, R13, MC, R31, BL, R33, BR] },
      { activePixels: [] },
    ],
    cycleDuration: 1000,
  },

  "zap-question": {
    name: "Question Mark",
    description: "Help/unknown indicator",
    frames: [
      { activePixels: [] },
      { activePixels: [T1, TC, T3, R1, R13, MC, BC] },
      { activePixels: [T1, TC, T3, R1, R13, MC, BC] },
      { activePixels: [T1, TC, T3, R1, R13, MC] }, // blink dot
      { activePixels: [T1, TC, T3, R1, R13, MC, BC] },
    ],
    cycleDuration: 1500,
  },

  "zap-exclaim": {
    name: "Exclamation Mark",
    description: "Alert/important indicator",
    frames: [
      { activePixels: [] },
      { activePixels: [TC, R12, MC, BC] },
      { activePixels: [TC, R12, MC, BC] },
      { activePixels: [TC, R12, MC] }, // blink dot
      { activePixels: [TC, R12, MC, BC] },
      { activePixels: [] },
    ],
    cycleDuration: 1000,
  },

  "zap-arrow-up": {
    name: "Arrow Up",
    description: "Upward direction indicator",
    frames: [
      { activePixels: [TC, R11, R12, R13, MC, R32, BC] },
      { activePixels: [TC, R11, R12, R13, MC, R32, BC] },
      { activePixels: [] },
      { activePixels: [TC, R11, R12, R13, MC, R32, BC] },
    ],
    cycleDuration: 1000,
  },

  "zap-arrow-down": {
    name: "Arrow Down",
    description: "Downward direction indicator",
    frames: [
      { activePixels: [TC, R12, MC, R31, R32, R33, BC] },
      { activePixels: [TC, R12, MC, R31, R32, R33, BC] },
      { activePixels: [] },
      { activePixels: [TC, R12, MC, R31, R32, R33, BC] },
    ],
    cycleDuration: 1000,
  },

  "zap-arrow-left": {
    name: "Arrow Left",
    description: "Leftward direction indicator",
    frames: [
      { activePixels: [R12, ML, M1, MC, M3, R32] },
      { activePixels: [R12, ML, M1, MC, M3, R32] },
      { activePixels: [] },
      { activePixels: [R12, ML, M1, MC, M3, R32] },
    ],
    cycleDuration: 1000,
  },

  "zap-arrow-right": {
    name: "Arrow Right",
    description: "Rightward direction indicator",
    frames: [
      { activePixels: [R12, M1, MC, M3, MR, R32] },
      { activePixels: [R12, M1, MC, M3, MR, R32] },
      { activePixels: [] },
      { activePixels: [R12, M1, MC, M3, MR, R32] },
    ],
    cycleDuration: 1000,
  },

  "zap-play": {
    name: "Play",
    description: "Media play button",
    frames: [
      { activePixels: [] },
      { activePixels: [R11, M1, MC, R31, R32] },
      { activePixels: [R11, R12, M1, MC, M3, R31, R32, R33] },
      { activePixels: [R11, R12, R13, M1, MC, M3, MR, R31, R32, R33] },
      { activePixels: [R11, R12, R13, M1, MC, M3, MR, R31, R32, R33] },
    ],
    cycleDuration: 1500,
  },

  "zap-pause": {
    name: "Pause",
    description: "Media pause button",
    frames: [
      { activePixels: [] },
      { activePixels: [R11, R13, M1, M3, R31, R33] },
      { activePixels: [R11, R13, M1, M3, R31, R33] },
      { activePixels: [R11, R13, M1, M3, R31, R33] },
      { activePixels: [] },
    ],
    cycleDuration: 1500,
  },

  "zap-stop": {
    name: "Stop",
    description: "Media stop button",
    frames: [
      { activePixels: [] },
      { activePixels: [R11, R12, R13, M1, MC, M3, R31, R32, R33] },
      { activePixels: [R11, R12, R13, M1, MC, M3, R31, R32, R33] },
      { activePixels: [R11, R12, R13, M1, MC, M3, R31, R32, R33] },
      { activePixels: [] },
    ],
    cycleDuration: 1500,
  },

  "zap-power": {
    name: "Power",
    description: "Power button symbol",
    frames: [
      { activePixels: [] },
      { activePixels: [TC, R12, L1, R1, ML, MC, MR, L3, R3, B1, BC, B3] },
      { activePixels: [TC, R12, L1, R1, ML, MC, MR, L3, R3, B1, BC, B3] },
      { activePixels: [TC, R12, L1, R1, ML, MC, MR, L3, R3, B1, BC, B3] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-wifi-bars": {
    name: "WiFi Bars",
    description: "WiFi signal strength animation",
    frames: [
      { activePixels: [BC] },
      { activePixels: [BC, R31, R32, R33] },
      { activePixels: [BC, R31, R32, R33, M1, MC, M3] },
      { activePixels: [BC, R31, R32, R33, M1, MC, M3, R11, R12, R13] },
      { activePixels: [BC, R31, R32, R33, M1, MC, M3, R11, R12, R13, TC] },
    ],
    cycleDuration: 1500,
  },

  "zap-signal": {
    name: "Signal Bars",
    description: "Cellular signal strength",
    frames: [
      { activePixels: [BL] },
      { activePixels: [BL, L3, B1] },
      { activePixels: [BL, L3, B1, ML, R31, BC] },
      { activePixels: [BL, L3, B1, ML, R31, BC, L1, R32, B3] },
      { activePixels: [BL, L3, B1, ML, R31, BC, L1, R32, B3, TL, R33, BR] },
    ],
    cycleDuration: 1500,
  },

  "zap-hourglass": {
    name: "Hourglass",
    description: "Loading/waiting animation",
    frames: [
      { activePixels: [TL, T1, TC, T3, TR, R11, R13, MC, R31, R33, BL, B1, BC, B3, BR] },
      { activePixels: [TL, T1, TC, T3, TR, MC, R31, R33, BL, B1, BC, B3, BR] },
      { activePixels: [TL, T1, TC, T3, TR, R31, R32, R33, BL, B1, BC, B3, BR] },
      { activePixels: [TL, T1, TC, T3, TR, R11, R13, MC, R31, R33, BL, B1, BC, B3, BR] },
    ],
    cycleDuration: 1200,
  },

  "zap-clock": {
    name: "Clock",
    description: "Time/clock face animation",
    frames: [
      { activePixels: [T1, TC, T3, L1, MC, R1, ML, MR, L3, R3, B1, BC, B3, R12] }, // 12 o'clock
      { activePixels: [T1, TC, T3, L1, MC, R1, ML, MR, L3, R3, B1, BC, B3, R13] }, // 3
      { activePixels: [T1, TC, T3, L1, MC, R1, ML, MR, L3, R3, B1, BC, B3, R32] }, // 6
      { activePixels: [T1, TC, T3, L1, MC, R1, ML, MR, L3, R3, B1, BC, B3, R31] }, // 9
    ],
    cycleDuration: 2000,
  },

  "zap-bell": {
    name: "Bell",
    description: "Notification bell animation",
    frames: [
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R31, R32, R33, BC] },
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R31, R32, R33, B1] }, // swing left
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R31, R32, R33, BC] },
      { activePixels: [TC, R11, R12, R13, M1, MC, M3, R31, R32, R33, B3] }, // swing right
    ],
    cycleDuration: 800,
  },

  "zap-mail": {
    name: "Mail/Envelope",
    description: "Message/email indicator",
    frames: [
      { activePixels: [] },
      { activePixels: [TL, TC, TR, L1, R11, R13, R1, ML, M1, M3, MR, L3, R31, R32, R33, R3] },
      { activePixels: [TL, TC, TR, L1, R11, R13, R1, ML, M1, M3, MR, L3, R31, R32, R33, R3] },
      { activePixels: [TL, TC, TR, L1, R11, R13, R1, ML, M1, M3, MR, L3, R31, R32, R33, R3] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  // ============================================================
  // 13. GAMES & FUN
  // ============================================================

  "zap-pacman": {
    name: "Pac-Man",
    description: "Classic arcade chomping animation",
    frames: [
      { activePixels: [T1, TC, T3, L1, R11, R12, R13, ML, M1, MC, L3, R31, R32, R33, B1, BC, B3] }, // open
      { activePixels: [T1, TC, T3, L1, R11, R12, R13, R1, ML, M1, MC, M3, MR, L3, R31, R32, R33, R3, B1, BC, B3] }, // closed
    ],
    cycleDuration: 500,
  },

  "zap-space-invader": {
    name: "Space Invader",
    description: "Classic arcade alien animation",
    frames: [
      { activePixels: [T1, T3, R11, R12, R13, TL, TC, TR, ML, M1, MC, M3, MR, R31, R33] }, // arms up
      { activePixels: [T1, T3, R11, R12, R13, TL, TC, TR, ML, M1, MC, M3, MR, L3, R3] }, // arms down
    ],
    cycleDuration: 800,
  },

  "zap-tetris": {
    name: "Tetris",
    description: "Falling tetris blocks",
    frames: [
      { activePixels: [T1, TC, T3, TR] }, // T piece at top
      { activePixels: [R11, R12, R13, R1] },
      { activePixels: [M1, MC, M3, MR] },
      { activePixels: [R31, R32, R33, R3] },
      { activePixels: [B1, BC, B3, BR, R31, R32, R33, R3] }, // landed
      { activePixels: [B1, BC, B3, BR, R31, R32, R33, R3] },
    ],
    cycleDuration: 1500,
  },

  "zap-dice": {
    name: "Dice",
    description: "Rolling dice animation",
    frames: [
      { activePixels: [MC] }, // 1
      { activePixels: [R11, R33] }, // 2
      { activePixels: [R11, MC, R33] }, // 3
      { activePixels: [R11, R13, R31, R33] }, // 4
      { activePixels: [R11, R13, MC, R31, R33] }, // 5
      { activePixels: [R11, R13, M1, M3, R31, R33] }, // 6
    ],
    cycleDuration: 1800,
  },

  "zap-crown": {
    name: "Crown",
    description: "Royal crown icon",
    frames: [
      { activePixels: [] },
      { activePixels: [TL, TC, TR, R11, R12, R13, ML, M1, MC, M3, MR] },
      { activePixels: [TL, TC, TR, R11, R12, R13, ML, M1, MC, M3, MR] },
      { activePixels: [TL, TC, TR, R11, R12, R13, ML, M1, MC, M3, MR] },
      { activePixels: [] },
    ],
    cycleDuration: 2000,
  },

  "zap-trophy": {
    name: "Trophy",
    description: "Winner trophy icon",
    frames: [
      { activePixels: [] },
      { activePixels: [TL, T1, TC, T3, TR, L1, R11, R12, R13, R1, R11, R13, R31, R32, R33, BC] },
      { activePixels: [TL, T1, TC, T3, TR, L1, R11, R12, R13, R1, R11, R13, R31, R32, R33, BC] },
      // sparkle
      { activePixels: [TL, T1, TC, T3, TR, L1, R11, R12, R13, R1, R11, R13, R31, R32, R33, BC, ML, MR, BL, BR] },
      { activePixels: [TL, T1, TC, T3, TR, L1, R11, R12, R13, R1, R11, R13, R31, R32, R33, BC] },
    ],
    cycleDuration: 2000,
  },
};

// Export pattern names for use in showcase
export const zapPatternNames = Object.keys(zapPatterns) as ZapPatternType[];

// Group patterns by category for organized display
export const zapPatternCategories: Record<string, ZapPatternType[]> = {
  "Startup & Identity": ["zap-boot", "zap-ready", "zap-logo"],
  "Connection": ["zap-pairing", "zap-connecting", "zap-connected", "zap-no-network"],
  "Operational": ["zap-active", "zap-standby", "zap-offline"],
  "Data": ["zap-data-tx", "zap-syncing", "zap-no-data"],
  "Energy Flow": ["zap-importing", "zap-exporting", "zap-charging", "zap-discharging", "zap-peak-alert", "zap-grid-event"],
  "Control Mode": ["zap-local", "zap-remote", "zap-scheduled"],
  "Error": ["zap-error", "zap-warning", "zap-updating"],
  "V2X/EV": ["zap-ev-connected", "zap-ev-charging", "zap-v2x-active", "zap-ev-complete"],
  "P1 Meter": ["zap-meter-reading", "zap-meter-connected", "zap-phase-balance"],
  "Battery SoC": ["zap-soc-0", "zap-soc-25", "zap-soc-50", "zap-soc-75", "zap-soc-100"],
  "Fun & Decorative": [
    "zap-smiley", "zap-smiley-wink", "zap-heart", "zap-heart-beat",
    "zap-star", "zap-star-spin", "zap-fireworks", "zap-confetti",
    "zap-flower", "zap-sun", "zap-moon", "zap-cloud", "zap-rain", "zap-snow",
    "zap-waves", "zap-fire", "zap-tree", "zap-house", "zap-car",
    "zap-rocket", "zap-ghost", "zap-skull", "zap-cat", "zap-fish", "zap-music"
  ],
  "Emojis & Symbols": [
    "zap-checkmark", "zap-cross",
    "zap-question", "zap-exclaim", "zap-arrow-up", "zap-arrow-down",
    "zap-arrow-left", "zap-arrow-right", "zap-play", "zap-pause", "zap-stop",
    "zap-power", "zap-wifi-bars", "zap-signal", "zap-hourglass", "zap-clock",
    "zap-bell", "zap-mail"
  ],
  "Games & Fun": ["zap-pacman", "zap-space-invader", "zap-tetris", "zap-dice", "zap-crown", "zap-trophy"],
};

// Color recommendations for each pattern
export const zapPatternColors: Record<ZapPatternType, string> = {
  // Startup & Identity - Green (brand)
  "zap-boot": "green",
  "zap-ready": "green",
  "zap-logo": "green",
  // Connection - Blue
  "zap-pairing": "blue",
  "zap-connecting": "blue",
  "zap-connected": "green",
  "zap-no-network": "pink", // orange/red
  // Operational
  "zap-active": "green",
  "zap-standby": "green",
  "zap-offline": "blue", // gray
  // Data
  "zap-data-tx": "blue",
  "zap-syncing": "blue",
  "zap-no-data": "pink", // yellow
  // Energy Flow
  "zap-importing": "pink", // yellow
  "zap-exporting": "green",
  "zap-charging": "blue",
  "zap-discharging": "green",
  "zap-peak-alert": "pink", // orange
  "zap-grid-event": "green",
  // Control Mode
  "zap-local": "green",
  "zap-remote": "blue",
  "zap-scheduled": "blue", // purple
  // Error
  "zap-error": "pink", // red
  "zap-warning": "pink", // orange
  "zap-updating": "blue",
  // V2X/EV
  "zap-ev-connected": "blue",
  "zap-ev-charging": "blue",
  "zap-v2x-active": "green",
  "zap-ev-complete": "green",
  // P1 Meter
  "zap-meter-reading": "blue", // cyan
  "zap-meter-connected": "green",
  "zap-phase-balance": "blue", // multi
  // SoC
  "zap-soc-0": "pink", // red
  "zap-soc-25": "pink", // orange
  "zap-soc-50": "pink", // yellow
  "zap-soc-75": "green",
  "zap-soc-100": "green",
  // Fun & Decorative
  "zap-smiley": "green",
  "zap-smiley-wink": "green",
  "zap-heart": "pink",
  "zap-heart-beat": "pink",
  "zap-star": "pink", // yellow/gold
  "zap-star-spin": "pink",
  "zap-fireworks": "pink", // multi
  "zap-confetti": "blue", // multi
  "zap-flower": "pink",
  "zap-sun": "pink", // yellow
  "zap-moon": "blue",
  "zap-cloud": "blue",
  "zap-rain": "blue",
  "zap-snow": "blue",
  "zap-waves": "blue",
  "zap-fire": "pink", // orange/red
  "zap-tree": "green",
  "zap-house": "green",
  "zap-car": "blue",
  "zap-rocket": "pink", // orange
  "zap-ghost": "blue",
  "zap-skull": "pink",
  "zap-cat": "pink", // orange
  "zap-fish": "blue",
  "zap-music": "blue",
  // Emojis & Symbols
  "zap-checkmark": "green",
  "zap-cross": "pink",
  "zap-question": "blue",
  "zap-exclaim": "pink",
  "zap-arrow-up": "green",
  "zap-arrow-down": "green",
  "zap-arrow-left": "green",
  "zap-arrow-right": "green",
  "zap-play": "green",
  "zap-pause": "blue",
  "zap-stop": "pink",
  "zap-power": "green",
  "zap-wifi-bars": "blue",
  "zap-signal": "green",
  "zap-hourglass": "blue",
  "zap-clock": "blue",
  "zap-bell": "pink", // yellow
  "zap-mail": "blue",
  // Games & Fun
  "zap-pacman": "pink", // yellow
  "zap-space-invader": "green",
  "zap-tetris": "blue",
  "zap-dice": "blue",
  "zap-crown": "pink", // gold
  "zap-trophy": "pink", // gold
};
