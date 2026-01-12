"use client";

import * as React from "react";
import { Settings2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  useDesignSystemTheme,
  useFontMode,
  useColorMode,
  useSpacingMode,
  useFocusMode,
  type Theme,
  type ColorMode,
} from "@/components/design-system-provider";

export function AccessibilitySettings() {
  const { theme, setTheme } = useDesignSystemTheme();
  const { fontMode, setFontMode } = useFontMode();
  const { colorMode, setColorMode } = useColorMode();
  const { spacingMode, setSpacingMode } = useSpacingMode();
  const { focusMode, setFocusMode } = useFocusMode();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" title="Accessibility & Theme Settings">
          <Settings2 className="h-4 w-4" />
          <span className="sr-only">Accessibility Settings</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[320px] sm:w-[400px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Display Settings</SheetTitle>
          <SheetDescription>
            Customize the visual style and accessibility options.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Theme Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Visual Theme</Label>
            <div className="grid grid-cols-2 gap-2">
              <ThemeOption
                value="base"
                label="Base"
                description="Clean, flat design"
                selected={theme === "base"}
                onSelect={() => setTheme("base")}
              />
              <ThemeOption
                value="elevated"
                label="Elevated"
                description="Depth & shadows"
                selected={theme === "elevated"}
                onSelect={() => setTheme("elevated")}
              />
            </div>
          </div>

          <Separator />

          {/* Accessibility Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Accessibility</h3>
              <p className="text-xs text-muted-foreground mt-1">
                These settings are saved to your browser.
              </p>
            </div>

            {/* Reading */}
            <div className="space-y-3">
              <Label className="text-xs uppercase tracking-wide text-muted-foreground">
                Reading
              </Label>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dyslexic-font" className="text-sm">
                    Dyslexia-friendly font
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Uses Lexend font for improved readability
                  </p>
                </div>
                <Switch
                  id="dyslexic-font"
                  checked={fontMode === "dyslexic"}
                  onCheckedChange={(checked) =>
                    setFontMode(checked ? "dyslexic" : "default")
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="text-spacing" className="text-sm">
                    Increased text spacing
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    More space between letters and lines
                  </p>
                </div>
                <Switch
                  id="text-spacing"
                  checked={spacingMode === "comfortable"}
                  onCheckedChange={(checked) =>
                    setSpacingMode(checked ? "comfortable" : "default")
                  }
                />
              </div>
            </div>

            {/* Vision */}
            <div className="space-y-3">
              <Label className="text-xs uppercase tracking-wide text-muted-foreground">
                Vision
              </Label>
              <div className="space-y-2">
                <Label htmlFor="color-mode" className="text-sm">
                  Color adjustment
                </Label>
                <Select
                  value={colorMode}
                  onValueChange={(value) => setColorMode(value as ColorMode)}
                >
                  <SelectTrigger id="color-mode">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default colors</SelectItem>
                    <SelectItem value="deuteranopia">
                      Red-green color blind
                    </SelectItem>
                    <SelectItem value="protanopia">Red color blind</SelectItem>
                    <SelectItem value="tritanopia">
                      Blue-yellow color blind
                    </SelectItem>
                    <SelectItem value="achromatopsia">Grayscale</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Motor / Keyboard */}
            <div className="space-y-3">
              <Label className="text-xs uppercase tracking-wide text-muted-foreground">
                Keyboard Navigation
              </Label>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="focus-mode" className="text-sm">
                    Enhanced focus indicators
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Larger, more visible focus rings
                  </p>
                </div>
                <Switch
                  id="focus-mode"
                  checked={focusMode === "enhanced"}
                  onCheckedChange={(checked) =>
                    setFocusMode(checked ? "enhanced" : "default")
                  }
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Current Settings Summary */}
          <div className="rounded-lg bg-muted p-3 text-xs space-y-1">
            <p className="font-medium">Current settings:</p>
            <p className="text-muted-foreground">
              Theme: <span className="text-foreground">{theme}</span>
              {" | "}
              Font: <span className="text-foreground">{fontMode}</span>
              {" | "}
              Color: <span className="text-foreground">{colorMode}</span>
            </p>
            <p className="text-muted-foreground">
              Spacing: <span className="text-foreground">{spacingMode}</span>
              {" | "}
              Focus: <span className="text-foreground">{focusMode}</span>
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function ThemeOption({
  value,
  label,
  description,
  selected,
  onSelect,
}: {
  value: string;
  label: string;
  description: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`relative flex flex-col items-start rounded-lg border p-3 text-left transition-colors hover:bg-accent ${
        selected
          ? "border-primary bg-accent"
          : "border-border"
      }`}
    >
      {selected && (
        <Check className="absolute right-2 top-2 h-4 w-4 text-primary" />
      )}
      <span className="font-medium text-sm">{label}</span>
      <span className="text-xs text-muted-foreground">{description}</span>
    </button>
  );
}
