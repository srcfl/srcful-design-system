"use client";

import { useState, useCallback } from "react";
import { PixelGrid, type ZapPatternType, type PixelGridColor } from "@/components/ui/pixel-grid";
import {
  zapPatterns,
  zapPatternNames,
  zapPatternCategories,
  zapPatternColors,
} from "@/components/ui/pixel-grid/patterns-zap";
import {
  generateArduinoCode,
  generateEspIdfCode,
  generateFlutterCode,
  generateReactCode,
  generateDownloadableContent,
  type CodeFormat,
} from "@/lib/zap-code-generator";
import { ComponentNav } from "@/components/component-nav";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Download, Zap, Cpu, Wifi, Battery, AlertTriangle, Car, Gauge, Smile, Sparkles, Gamepad2 } from "lucide-react";

// Category icons
const categoryIcons: Record<string, React.ReactNode> = {
  "Startup & Identity": <Zap className="h-4 w-4" />,
  "Connection": <Wifi className="h-4 w-4" />,
  "Operational": <Cpu className="h-4 w-4" />,
  "Data": <Gauge className="h-4 w-4" />,
  "Energy Flow": <Battery className="h-4 w-4" />,
  "Control Mode": <Cpu className="h-4 w-4" />,
  "Error": <AlertTriangle className="h-4 w-4" />,
  "V2X/EV": <Car className="h-4 w-4" />,
  "P1 Meter": <Gauge className="h-4 w-4" />,
  "Battery SoC": <Battery className="h-4 w-4" />,
  "Fun & Decorative": <Smile className="h-4 w-4" />,
  "Emojis & Symbols": <Sparkles className="h-4 w-4" />,
  "Games & Fun": <Gamepad2 className="h-4 w-4" />,
};

// Color badge variants
const colorBadgeVariant: Record<string, "default" | "secondary" | "destructive" | "outline" | "energy" | "success" | "warning" | "info"> = {
  green: "success",
  blue: "info",
  pink: "warning",
};

function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [text]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="gap-2"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          {label || "Copy"}
        </>
      )}
    </Button>
  );
}

function DownloadButton({ format }: { format: CodeFormat }) {
  const handleDownload = useCallback(() => {
    const { content, filename, mimeType } = generateDownloadableContent(format);
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [format]);

  const formatLabels: Record<CodeFormat, string> = {
    arduino: "Arduino (.ino)",
    espidf: "ESP-IDF (.c)",
    flutter: "Flutter (.dart)",
    react: "React (.tsx)",
  };

  return (
    <Button variant="outline" size="sm" onClick={handleDownload} className="gap-2">
      <Download className="h-3 w-3" />
      {formatLabels[format]}
    </Button>
  );
}

function PatternCard({ patternId }: { patternId: ZapPatternType }) {
  const [selectedFormat, setSelectedFormat] = useState<CodeFormat>("react");
  const pattern = zapPatterns[patternId];
  const recommendedColor = zapPatternColors[patternId] as PixelGridColor;

  const codeGenerators: Record<CodeFormat, (id: ZapPatternType) => string> = {
    react: generateReactCode,
    flutter: generateFlutterCode,
    arduino: generateArduinoCode,
    espidf: generateEspIdfCode,
  };

  const code = codeGenerators[selectedFormat](patternId);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-base font-medium">{pattern.name}</CardTitle>
            <CardDescription className="text-sm">
              {pattern.description}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={colorBadgeVariant[recommendedColor] || "default"}>
              {recommendedColor}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Live Preview */}
        <div className="flex items-center justify-center p-6 rounded-lg bg-muted/50">
          <PixelGrid
            pattern={patternId}
            dimension={5}
            color={recommendedColor}
            size="lg"
            showLabel
          />
        </div>

        {/* Code Tabs */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Select
              value={selectedFormat}
              onValueChange={(v) => setSelectedFormat(v as CodeFormat)}
            >
              <SelectTrigger className="w-[140px] h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React/TS</SelectItem>
                <SelectItem value="flutter">Flutter</SelectItem>
                <SelectItem value="arduino">Arduino</SelectItem>
                <SelectItem value="espidf">ESP-IDF</SelectItem>
              </SelectContent>
            </Select>
            <CopyButton text={code} label="Copy Code" />
          </div>
          <div className="rounded-md bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-3 max-h-[200px] overflow-auto">
            <pre className="text-xs font-mono text-sourceful-gray-900 dark:text-white whitespace-pre-wrap break-words">
              {code.slice(0, 800)}
              {code.length > 800 && "..."}
            </pre>
          </div>
        </div>

        {/* Timing Info */}
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>Cycle: {pattern.cycleDuration || 1500}ms</span>
          <span>Frames: {pattern.frames.length}</span>
          <span>
            Frame: {Math.round((pattern.cycleDuration || 1500) / pattern.frames.length)}ms
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ZapAnimationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<PixelGridColor>("green");
  const [selectedPattern, setSelectedPattern] = useState<ZapPatternType>("zap-ready");

  const categories = Object.keys(zapPatternCategories);
  const displayPatterns =
    selectedCategory === "all"
      ? zapPatternNames
      : zapPatternCategories[selectedCategory] || [];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
              Zap LED Animations
            </h1>
            <p className="text-lg text-muted-foreground">
              Animation library for M5Stack Atom Matrix 5x5 LED grid
            </p>
          </div>
        </div>

        {/* Hardware Context */}
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  Hardware Target
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>M5Stack Atom Matrix - 5x5 WS2812C RGB LEDs</li>
                  <li>ESP32-PICO-D4 @ 240MHz</li>
                  <li>Ultra-compact: 24x24x13.8mm</li>
                  <li>Recommended brightness: 20 (FastLED scale)</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Zap Gateway Purpose
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Local energy coordination gateway (~$20 BOM)</li>
                  <li>200ms response time (vs 2-5s cloud APIs)</li>
                  <li>Protocols: P1, Modbus-TCP/RTU, MQTT, OCPP</li>
                  <li>Offline-capable, data sovereignty</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Demo */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Interactive Demo
        </h2>
        <p className="text-muted-foreground">
          Preview any animation in the library with customizable colors.
        </p>

        <div className="flex flex-wrap gap-4 items-end">
          <div className="space-y-2">
            <label className="text-sm font-medium">Animation</label>
            <Select
              value={selectedPattern}
              onValueChange={(v) => setSelectedPattern(v as ZapPatternType)}
            >
              <SelectTrigger className="w-[220px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {zapPatternNames.map((pattern) => (
                  <SelectItem key={pattern} value={pattern}>
                    {pattern}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Color</label>
            <Select
              value={selectedColor}
              onValueChange={(v) => setSelectedColor(v as PixelGridColor)}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="pink">Pink/Red</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center justify-center p-12 rounded-lg border bg-card">
          <div className="flex flex-col items-center gap-4">
            <PixelGrid
              pattern={selectedPattern}
              dimension={5}
              color={selectedColor}
              size="lg"
            />
            <div className="text-center">
              <p className="font-mono text-sm">{selectedPattern}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {zapPatterns[selectedPattern].description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Categories */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
            Animation Library
          </h2>
          <div className="text-sm text-muted-foreground">
            {zapPatternNames.length} animations in {categories.length} categories
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="gap-2"
            >
              {categoryIcons[category]}
              {category}
            </Button>
          ))}
        </div>

        {/* Pattern Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {displayPatterns.map((patternId) => (
            <PatternCard key={patternId} patternId={patternId} />
          ))}
        </div>
      </div>

      {/* Color System */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Color System
        </h2>
        <p className="text-muted-foreground">
          Colors convey meaning. Use consistently across all Zap devices.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500" />
                <CardTitle className="text-base">Green</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>Success, active, healthy states</li>
                <li>Energy export (selling to grid)</li>
                <li>Local control mode</li>
                <li>Sourceful brand identity</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-500" />
                <CardTitle className="text-base">Blue</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>Connecting, syncing, updating</li>
                <li>EV/V2X charging states</li>
                <li>Remote/cloud control mode</li>
                <li>Data transfer</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-pink-500" />
                <CardTitle className="text-base">Pink/Orange/Red</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>Errors, warnings, alerts</li>
                <li>Energy import (buying from grid)</li>
                <li>Low battery states</li>
                <li>Peak pricing alerts</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-2">Accessibility Note</h4>
            <p className="text-sm text-muted-foreground">
              Never rely on color alone to convey status. Each animation pattern is
              distinct enough to be recognizable regardless of color. Users with
              color blindness can distinguish states by the animation pattern shape
              and movement.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Code Implementation */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Code Implementation
        </h2>

        <Tabs defaultValue="react" className="space-y-4">
          <TabsList>
            <TabsTrigger value="react">React/TypeScript</TabsTrigger>
            <TabsTrigger value="flutter">Flutter/Dart</TabsTrigger>
            <TabsTrigger value="arduino">Arduino/FastLED</TabsTrigger>
            <TabsTrigger value="espidf">ESP-IDF</TabsTrigger>
          </TabsList>

          <TabsContent value="react" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Web Applications</CardTitle>
                <CardDescription>
                  Use the PixelGrid component from @sourceful-energy/ui
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm">
                  <pre className="text-sourceful-gray-900 dark:text-white">{`import { PixelGrid } from "@sourceful-energy/ui"

// Use any Zap animation pattern
<PixelGrid
  pattern="zap-ready"
  dimension={5}
  color="green"
  size="lg"
/>

// Dynamic state rendering
const ZapStatus = ({ status }) => (
  <PixelGrid
    pattern={\`zap-\${status}\`}
    dimension={5}
    color={status === 'error' ? 'pink' : 'green'}
  />
)`}</pre>
                </div>
                <div className="flex gap-2">
                  <DownloadButton format="react" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="flutter" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Mobile Applications</CardTitle>
                <CardDescription>
                  Flutter widget with animation data and rendering
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm">
                  <pre className="text-sourceful-gray-900 dark:text-white">{`// Each pattern generates a widget class
class ZapReadyWidget extends StatefulWidget {
  final double size;
  final Color? colorOverride;

  // Includes Timer-based animation
  // 5x5 grid rendering
  // Configurable size and color
}

// Use in your app
ZapReadyWidget(size: 100)`}</pre>
                </div>
                <div className="flex gap-2">
                  <DownloadButton format="flutter" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="arduino" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Hardware Prototyping</CardTitle>
                <CardDescription>
                  FastLED-based code for Arduino IDE and M5Stack Atom Matrix
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm">
                  <pre className="text-sourceful-gray-900 dark:text-white">{`#include <FastLED.h>
#define NUM_LEDS 25
#define DATA_PIN 27
#define BRIGHTNESS 20

CRGB leds[NUM_LEDS];

// Frame data stored in PROGMEM
const uint8_t frames[][25] PROGMEM = {
  {0,0,0,0,0, 0,0,0,0,0, 0,0,1,0,0, 0,0,0,0,0, 0,0,0,0,0},
  // ... more frames
};

void zap_ready() {
  // Animation loop with timer
}`}</pre>
                </div>
                <div className="flex gap-2">
                  <DownloadButton format="arduino" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="espidf" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Production Firmware</CardTitle>
                <CardDescription>
                  ESP-IDF native code with FreeRTOS tasks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm">
                  <pre className="text-sourceful-gray-900 dark:text-white">{`#include "led_strip.h"
#include "freertos/FreeRTOS.h"

static led_strip_handle_t led_strip;

void zap_ready_task(void *pvParameters) {
    led_strip_init();

    while (1) {
        zap_ready_animation();
        vTaskDelay(pdMS_TO_TICKS(FRAME_DURATION));
    }
}

void app_main(void) {
    xTaskCreate(zap_ready_task, "led", 2048, NULL, 5, NULL);
}`}</pre>
                </div>
                <div className="flex gap-2">
                  <DownloadButton format="espidf" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Download All */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Download Full Library
        </h2>
        <p className="text-muted-foreground">
          Download all {zapPatternNames.length} animations in your preferred format.
        </p>

        <div className="flex flex-wrap gap-3">
          <DownloadButton format="react" />
          <DownloadButton format="flutter" />
          <DownloadButton format="arduino" />
          <DownloadButton format="espidf" />
        </div>
      </div>

      {/* Timing Recommendations */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Timing Recommendations
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="timing">
            <AccordionTrigger>Animation Timing Guidelines</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Fast (600-1000ms cycle)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Grid events, urgent alerts</li>
                    <li>Active data transfer</li>
                    <li>EV charging flow</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Normal (1500-2000ms cycle)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Ready/active states</li>
                    <li>Connection states</li>
                    <li>Mode indicators</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Slow (2500-4000ms cycle)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Standby/idle states</li>
                    <li>Boot sequences</li>
                    <li>Battery SoC display</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Static (hold pattern)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Connected confirmation</li>
                    <li>Charge complete</li>
                    <li>Full battery indicator</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brightness">
            <AccordionTrigger>Brightness Guidelines</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Recommended brightness: 20</strong> on FastLED scale (0-255)
                </p>
                <p>
                  The M5Stack Atom Matrix LEDs are very bright. A brightness of 20 is
                  sufficient for most indoor conditions and prevents eye strain. For
                  outdoor use, consider up to 50-80.
                </p>
                <p>
                  ESP-IDF uses duty cycle (0-255) for brightness control. The same
                  values apply.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="power">
            <AccordionTrigger>Power Considerations</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  At brightness 20, the LED matrix draws approximately 0.2W when all
                  LEDs are white. This is well within the Atom Matrix power budget.
                </p>
                <p>
                  Single-color patterns (using only green, blue, or red) draw less
                  power than multi-color patterns.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Pattern Reference Table */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Quick Reference
        </h2>

        <div className="rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-2 text-left font-medium">Pattern ID</th>
                  <th className="px-4 py-2 text-left font-medium">State</th>
                  <th className="px-4 py-2 text-left font-medium">Color</th>
                  <th className="px-4 py-2 text-left font-medium">Cycle</th>
                </tr>
              </thead>
              <tbody>
                {zapPatternNames.map((id, index) => (
                  <tr
                    key={id}
                    className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
                  >
                    <td className="px-4 py-2 font-mono text-xs">{id}</td>
                    <td className="px-4 py-2">{zapPatterns[id].name}</td>
                    <td className="px-4 py-2">
                      <Badge
                        variant={colorBadgeVariant[zapPatternColors[id]] || "default"}
                        className="text-xs"
                      >
                        {zapPatternColors[id]}
                      </Badge>
                    </td>
                    <td className="px-4 py-2 text-muted-foreground">
                      {zapPatterns[id].cycleDuration || 1500}ms
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ComponentNav currentHref="/components/zap-animations" />
    </div>
  );
}
