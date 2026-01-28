/**
 * Zap LED Animation Code Generator
 *
 * Generates code in four formats:
 * 1. Arduino/FastLED (prototyping)
 * 2. ESP-IDF (production firmware)
 * 3. Flutter/Dart (mobile app)
 * 4. React/TypeScript (web apps)
 */

import {
  zapPatterns,
  zapPatternColors,
  type ZapPatternType,
} from "@/components/ui/pixel-grid/patterns-zap";
import type { PatternDefinition } from "@/components/ui/pixel-grid/patterns";

// Color definitions for different platforms
const COLORS = {
  green: { hex: "#16a34a", rgb: { r: 22, g: 163, b: 74 } },
  blue: { hex: "#0ea5e9", rgb: { r: 14, g: 165, b: 233 } },
  pink: { hex: "#ec4899", rgb: { r: 236, g: 72, b: 153 } },
};

export type CodeFormat = "arduino" | "espidf" | "flutter" | "react";

/**
 * Convert pattern frames to a 2D array of 0s and 1s
 */
function framesToBitmap(pattern: PatternDefinition): number[][] {
  return pattern.frames.map((frame) => {
    const bitmap = Array(25).fill(0);
    frame.activePixels.forEach((pixel) => {
      bitmap[pixel] = 1;
    });
    return bitmap;
  });
}

/**
 * Generate Arduino/FastLED code
 */
export function generateArduinoCode(
  patternId: ZapPatternType,
  colorOverride?: keyof typeof COLORS
): string {
  const pattern = zapPatterns[patternId];
  const color = colorOverride || zapPatternColors[patternId] || "green";
  const colorDef = COLORS[color as keyof typeof COLORS] || COLORS.green;
  const frames = framesToBitmap(pattern);
  const frameDuration = Math.round(
    (pattern.cycleDuration || 1500) / pattern.frames.length
  );

  const functionName = patternId.replace(/-/g, "_");

  return `/**
 * ${pattern.name}
 * ${pattern.description}
 *
 * Hardware: M5Stack Atom Matrix (5x5 WS2812C)
 * Generated from Sourceful Design System
 */

#include <FastLED.h>

#define NUM_LEDS 25
#define DATA_PIN 27
#define BRIGHTNESS 20

CRGB leds[NUM_LEDS];
CRGB color = CRGB(${colorDef.rgb.r}, ${colorDef.rgb.g}, ${colorDef.rgb.b}); // ${color}

const uint8_t FRAME_COUNT = ${frames.length};
const uint16_t FRAME_DURATION = ${frameDuration}; // ms
const uint16_t CYCLE_DURATION = ${pattern.cycleDuration || 1500}; // ms

// Frame data: 1 = pixel on, 0 = pixel off
const uint8_t frames[${frames.length}][25] PROGMEM = {
${frames.map((frame) => `  {${frame.join(",")}}`).join(",\n")}
};

void setup() {
  FastLED.addLeds<WS2812, DATA_PIN, GRB>(leds, NUM_LEDS);
  FastLED.setBrightness(BRIGHTNESS);
}

void ${functionName}() {
  static uint8_t currentFrame = 0;
  static unsigned long lastUpdate = 0;

  if (millis() - lastUpdate >= FRAME_DURATION) {
    lastUpdate = millis();

    // Clear all LEDs
    fill_solid(leds, NUM_LEDS, CRGB::Black);

    // Set active pixels from current frame
    for (int i = 0; i < NUM_LEDS; i++) {
      if (pgm_read_byte(&frames[currentFrame][i])) {
        leds[i] = color;
      }
    }

    FastLED.show();
    currentFrame = (currentFrame + 1) % FRAME_COUNT;
  }
}

void loop() {
  ${functionName}();
}
`;
}

/**
 * Generate ESP-IDF code
 */
export function generateEspIdfCode(
  patternId: ZapPatternType,
  colorOverride?: keyof typeof COLORS
): string {
  const pattern = zapPatterns[patternId];
  const color = colorOverride || zapPatternColors[patternId] || "green";
  const colorDef = COLORS[color as keyof typeof COLORS] || COLORS.green;
  const frames = framesToBitmap(pattern);
  const frameDuration = Math.round(
    (pattern.cycleDuration || 1500) / pattern.frames.length
  );

  const functionName = patternId.replace(/-/g, "_");
  const upperName = patternId.replace(/-/g, "_").toUpperCase();

  return `/**
 * ${pattern.name}
 * ${pattern.description}
 *
 * Hardware: M5Stack Atom Matrix (5x5 WS2812C)
 * Generated from Sourceful Design System
 */

#include <string.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "led_strip.h"
#include "esp_log.h"

static const char *TAG = "zap_led";

#define LED_STRIP_GPIO 27
#define LED_STRIP_NUM_LEDS 25
#define LED_STRIP_RMT_RES_HZ (10 * 1000 * 1000)

#define ${upperName}_FRAME_COUNT ${frames.length}
#define ${upperName}_FRAME_DURATION ${frameDuration}
#define ${upperName}_CYCLE_DURATION ${pattern.cycleDuration || 1500}

// Color: ${color}
#define COLOR_R ${colorDef.rgb.r}
#define COLOR_G ${colorDef.rgb.g}
#define COLOR_B ${colorDef.rgb.b}

static led_strip_handle_t led_strip;

// Frame data: 1 = pixel on, 0 = pixel off
static const uint8_t ${functionName}_frames[${frames.length}][25] = {
${frames.map((frame) => `    {${frame.join(",")}}`).join(",\n")}
};

static void led_strip_init(void)
{
    led_strip_config_t strip_config = {
        .strip_gpio_num = LED_STRIP_GPIO,
        .max_leds = LED_STRIP_NUM_LEDS,
        .led_pixel_format = LED_PIXEL_FORMAT_GRB,
        .led_model = LED_MODEL_WS2812,
    };

    led_strip_rmt_config_t rmt_config = {
        .clk_src = RMT_CLK_SRC_DEFAULT,
        .resolution_hz = LED_STRIP_RMT_RES_HZ,
    };

    ESP_ERROR_CHECK(led_strip_new_rmt_device(&strip_config, &rmt_config, &led_strip));
    led_strip_clear(led_strip);
}

void ${functionName}_animation(void)
{
    static uint8_t current_frame = 0;

    // Clear all LEDs
    led_strip_clear(led_strip);

    // Set active pixels from current frame
    for (int i = 0; i < LED_STRIP_NUM_LEDS; i++) {
        if (${functionName}_frames[current_frame][i]) {
            led_strip_set_pixel(led_strip, i, COLOR_R, COLOR_G, COLOR_B);
        }
    }

    led_strip_refresh(led_strip);
    current_frame = (current_frame + 1) % ${upperName}_FRAME_COUNT;
}

void ${functionName}_task(void *pvParameters)
{
    led_strip_init();

    while (1) {
        ${functionName}_animation();
        vTaskDelay(pdMS_TO_TICKS(${upperName}_FRAME_DURATION));
    }
}

void app_main(void)
{
    xTaskCreate(${functionName}_task, "${functionName}", 2048, NULL, 5, NULL);
}
`;
}

/**
 * Generate Flutter/Dart code
 */
export function generateFlutterCode(
  patternId: ZapPatternType,
  colorOverride?: keyof typeof COLORS
): string {
  const pattern = zapPatterns[patternId];
  const color = colorOverride || zapPatternColors[patternId] || "green";
  const colorDef = COLORS[color as keyof typeof COLORS] || COLORS.green;
  const frames = framesToBitmap(pattern);
  const frameDuration = Math.round(
    (pattern.cycleDuration || 1500) / pattern.frames.length
  );

  const className = patternId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  return `/// ${pattern.name}
/// ${pattern.description}
///
/// Hardware: M5Stack Atom Matrix (5x5 WS2812C)
/// Generated from Sourceful Design System

import 'dart:async';
import 'package:flutter/material.dart';

class ${className}Animation {
  static const String id = '${patternId}';
  static const String name = '${pattern.name}';
  static const String description = '${pattern.description}';

  static const int frameCount = ${frames.length};
  static const int frameDuration = ${frameDuration}; // ms
  static const int cycleDuration = ${pattern.cycleDuration || 1500}; // ms

  // Color: ${color}
  static const Color color = Color(0xFF${colorDef.hex.slice(1).toUpperCase()});

  // Frame data: 1 = pixel on, 0 = pixel off
  static const List<List<int>> frames = [
${frames.map((frame) => `    [${frame.join(",")}]`).join(",\n")}
  ];
}

/// Widget to display the ${pattern.name} animation
class ${className}Widget extends StatefulWidget {
  final double size;
  final Color? colorOverride;

  const ${className}Widget({
    super.key,
    this.size = 100,
    this.colorOverride,
  });

  @override
  State<${className}Widget> createState() => _${className}WidgetState();
}

class _${className}WidgetState extends State<${className}Widget> {
  int _currentFrame = 0;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _startAnimation();
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  void _startAnimation() {
    _timer = Timer.periodic(
      const Duration(milliseconds: ${className}Animation.frameDuration),
      (_) {
        setState(() {
          _currentFrame = (_currentFrame + 1) % ${className}Animation.frameCount;
        });
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final pixelSize = widget.size / 5;
    final gap = pixelSize * 0.2;
    final color = widget.colorOverride ?? ${className}Animation.color;

    return SizedBox(
      width: widget.size,
      height: widget.size,
      child: GridView.builder(
        physics: const NeverScrollableScrollPhysics(),
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 5,
          mainAxisSpacing: gap,
          crossAxisSpacing: gap,
        ),
        itemCount: 25,
        itemBuilder: (context, index) {
          final isActive = ${className}Animation.frames[_currentFrame][index] == 1;
          return AnimatedContainer(
            duration: const Duration(milliseconds: 100),
            decoration: BoxDecoration(
              color: isActive ? color : color.withOpacity(0.1),
              borderRadius: BorderRadius.circular(2),
            ),
          );
        },
      ),
    );
  }
}
`;
}

/**
 * Generate React/TypeScript code
 */
export function generateReactCode(
  patternId: ZapPatternType,
  colorOverride?: keyof typeof COLORS
): string {
  const pattern = zapPatterns[patternId];
  const color = colorOverride || zapPatternColors[patternId] || "green";

  return `/**
 * ${pattern.name}
 * ${pattern.description}
 *
 * Using Sourceful Design System PixelGrid component
 */

import { PixelGrid } from "@sourceful-energy/ui";

// Basic usage
export function ${patternId.replace(/-./g, (x) => x[1].toUpperCase())}Animation() {
  return (
    <PixelGrid
      pattern="${patternId}"
      dimension={5}
      color="${color}"
      size="lg"
    />
  );
}

// With customization
export function ${patternId.replace(/-./g, (x) => x[1].toUpperCase())}AnimationCustom({
  color = "${color}",
  size = "md",
  speed = "normal",
  paused = false,
}: {
  color?: "green" | "blue" | "pink";
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
  paused?: boolean;
}) {
  return (
    <PixelGrid
      pattern="${patternId}"
      dimension={5}
      color={color}
      size={size}
      speed={speed}
      paused={paused}
    />
  );
}

// Static display (non-animated)
export function ${patternId.replace(/-./g, (x) => x[1].toUpperCase())}Static() {
  return (
    <PixelGrid
      pattern="${patternId}"
      dimension={5}
      color="${color}"
      animated={false}
    />
  );
}
`;
}

/**
 * Generate code for all Zap patterns in a specific format
 */
export function generateAllPatterns(format: CodeFormat): string {
  const patterns = Object.keys(zapPatterns) as ZapPatternType[];

  switch (format) {
    case "arduino":
      return patterns
        .map((id) => generateArduinoCode(id))
        .join("\n\n// " + "=".repeat(70) + "\n\n");
    case "espidf":
      return patterns
        .map((id) => generateEspIdfCode(id))
        .join("\n\n// " + "=".repeat(70) + "\n\n");
    case "flutter":
      return patterns
        .map((id) => generateFlutterCode(id))
        .join("\n\n// " + "=".repeat(70) + "\n\n");
    case "react":
      return patterns
        .map((id) => generateReactCode(id))
        .join("\n\n// " + "=".repeat(70) + "\n\n");
  }
}

/**
 * Generate a downloadable file content for a format
 */
export function generateDownloadableContent(format: CodeFormat): {
  content: string;
  filename: string;
  mimeType: string;
} {
  const content = generateAllPatterns(format);

  switch (format) {
    case "arduino":
      return {
        content,
        filename: "zap_animations.ino",
        mimeType: "text/x-arduino",
      };
    case "espidf":
      return {
        content,
        filename: "zap_animations.c",
        mimeType: "text/x-csrc",
      };
    case "flutter":
      return {
        content,
        filename: "zap_animations.dart",
        mimeType: "application/dart",
      };
    case "react":
      return {
        content,
        filename: "zap_animations.tsx",
        mimeType: "text/typescript",
      };
  }
}

/**
 * Get generator function for a specific format
 */
export function getGenerator(
  format: CodeFormat
): (patternId: ZapPatternType, color?: keyof typeof COLORS) => string {
  switch (format) {
    case "arduino":
      return generateArduinoCode;
    case "espidf":
      return generateEspIdfCode;
    case "flutter":
      return generateFlutterCode;
    case "react":
      return generateReactCode;
  }
}
