"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAccessibility } from "@/components/design-system-provider";
import {
  Eye,
  Type,
  Focus,
  Space,
  Shield,
  CheckCircle,
  Globe,
  Accessibility,
} from "lucide-react";

export default function AccessibilityPage() {
  const {
    fontMode,
    setFontMode,
    colorMode,
    setColorMode,
    spacingMode,
    setSpacingMode,
    focusMode,
    setFocusMode,
  } = useAccessibility();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Accessibility
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Built-in accessibility modes for users with different needs, fully
          compliant with EU regulations.
        </p>
      </div>

      <Alert variant="success">
        <Shield className="h-4 w-4" />
        <AlertTitle>EU Compliance Ready</AlertTitle>
        <AlertDescription>
          This design system meets the European Accessibility Act (EAA)
          requirements effective June 2025 and WCAG 2.1 AA standards.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          User Accessibility Settings
        </h2>
        <p className="leading-7">
          These options are designed to be offered to end users. Preferences are
          automatically persisted to localStorage.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Reading Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Type className="h-4 w-4" />
                Reading
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dyslexic-font">Dyslexia-friendly font</Label>
                  <p className="text-xs text-muted-foreground">
                    Uses Lexend, designed for improved readability
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
                  <Label htmlFor="text-spacing">Increased text spacing</Label>
                  <p className="text-xs text-muted-foreground">
                    WCAG 1.4.12 compliant spacing
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
            </CardContent>
          </Card>

          {/* Vision Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Eye className="h-4 w-4" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Color vision adjustment</Label>
                <Select value={colorMode} onValueChange={setColorMode}>
                  <SelectTrigger>
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
                <p className="text-xs text-muted-foreground">
                  Adjusts status colors for better visibility
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Keyboard Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Focus className="h-4 w-4" />
                Keyboard Navigation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="enhanced-focus">
                    Enhanced focus indicators
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    High-contrast 3px focus rings
                  </p>
                </div>
                <Switch
                  id="enhanced-focus"
                  checked={focusMode === "enhanced"}
                  onCheckedChange={(checked) =>
                    setFocusMode(checked ? "enhanced" : "default")
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Accessibility className="h-4 w-4" />
                Live Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input placeholder="Tab here to see focus" />
              <div className="flex gap-2 flex-wrap">
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Error</Badge>
                <Badge variant="energy">Energy</Badge>
              </div>
              <p className="text-sm">
                Sample text to preview font and spacing changes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight flex items-center gap-2">
          <Globe className="h-5 w-5" />
          EU Compliance
        </h2>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            European Accessibility Act (EAA)
          </h3>
          <p className="leading-7">
            The European Accessibility Act (Directive 2019/882) requires digital
            products and services to be accessible to people with disabilities.
            Enforcement began <strong>June 28, 2025</strong>.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4">Requirement</th>
                  <th className="text-left py-2 pr-4">Standard</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 pr-4">Text contrast ratio</td>
                  <td className="py-2 pr-4">WCAG 1.4.3 (4.5:1)</td>
                  <td className="py-2">
                    <Badge variant="success">Pass</Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">UI component contrast</td>
                  <td className="py-2 pr-4">WCAG 1.4.11 (3:1)</td>
                  <td className="py-2">
                    <Badge variant="success">Pass</Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Focus indicators visible</td>
                  <td className="py-2 pr-4">WCAG 2.4.7</td>
                  <td className="py-2">
                    <Badge variant="success">Pass</Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Text spacing adjustable</td>
                  <td className="py-2 pr-4">WCAG 1.4.12</td>
                  <td className="py-2">
                    <Badge variant="success">Pass</Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Keyboard accessible</td>
                  <td className="py-2 pr-4">WCAG 2.1.1</td>
                  <td className="py-2">
                    <Badge variant="success">Pass</Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Reduced motion support</td>
                  <td className="py-2 pr-4">WCAG 2.3.3</td>
                  <td className="py-2">
                    <Badge variant="success">Pass</Badge>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4">Touch targets (mobile)</td>
                  <td className="py-2 pr-4">WCAG 2.5.8 (44px)</td>
                  <td className="py-2">
                    <Badge variant="success">Pass</Badge>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Windows High Contrast</td>
                  <td className="py-2 pr-4">forced-colors</td>
                  <td className="py-2">
                    <Badge variant="success">Pass</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Automatic System Support</h3>
          <p className="leading-7">
            The design system automatically respects user system preferences:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>prefers-reduced-motion</strong> - All animations
                disabled when enabled
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>prefers-contrast: more</strong> - Increased border
                contrast
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>forced-colors</strong> - Windows High Contrast mode
                support
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Browser zoom</strong> - All sizes use rem units for
                proper scaling
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Implementation
        </h2>
        <p className="leading-7">
          Use the{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">
            useAccessibility
          </code>{" "}
          hook to build settings interfaces:
        </p>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`import { useAccessibility } from "@sourceful-energy/ui"

function AccessibilitySettings() {
  const {
    fontMode, setFontMode,
    colorMode, setColorMode,
    spacingMode, setSpacingMode,
    focusMode, setFocusMode,
  } = useAccessibility()

  return (
    <div className="space-y-4">
      {/* Dyslexia-friendly font */}
      <Switch
        checked={fontMode === "dyslexic"}
        onCheckedChange={(v) => setFontMode(v ? "dyslexic" : "default")}
      />

      {/* Color blind modes */}
      <Select value={colorMode} onValueChange={setColorMode}>
        <SelectItem value="default">Default colors</SelectItem>
        <SelectItem value="deuteranopia">Red-green color blind</SelectItem>
        <SelectItem value="protanopia">Red color blind</SelectItem>
        <SelectItem value="tritanopia">Blue-yellow color blind</SelectItem>
        <SelectItem value="achromatopsia">Grayscale</SelectItem>
      </Select>

      {/* Text spacing (WCAG 1.4.12) */}
      <Switch
        checked={spacingMode === "comfortable"}
        onCheckedChange={(v) => setSpacingMode(v ? "comfortable" : "default")}
      />

      {/* Enhanced focus (WCAG 2.4.7) */}
      <Switch
        checked={focusMode === "enhanced"}
        onCheckedChange={(v) => setFocusMode(v ? "enhanced" : "default")}
      />
    </div>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Data Attributes
        </h2>
        <p className="leading-7">
          The provider sets these attributes on{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-sm">
            &lt;html&gt;
          </code>
          :
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4">Attribute</th>
                <th className="text-left py-2 pr-4">Values</th>
                <th className="text-left py-2">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-4 font-mono text-xs">data-font-mode</td>
                <td className="py-2 pr-4">dyslexic</td>
                <td className="py-2">Switches to Lexend font</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-mono text-xs">data-color-mode</td>
                <td className="py-2 pr-4">
                  deuteranopia, protanopia, tritanopia, achromatopsia
                </td>
                <td className="py-2">Color blind palettes</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-mono text-xs">data-spacing</td>
                <td className="py-2 pr-4">comfortable</td>
                <td className="py-2">WCAG 1.4.12 text spacing</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">data-focus-mode</td>
                <td className="py-2 pr-4">enhanced</td>
                <td className="py-2">High-visibility focus rings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Individual Hooks
        </h2>
        <p className="leading-7">
          For granular control, use individual hooks:
        </p>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`import {
  useFontMode,
  useColorMode,
  useSpacingMode,
  useFocusMode,
  useDesignSystem,
} from "@sourceful-energy/ui"

// Individual settings
const { fontMode, setFontMode } = useFontMode()
const { colorMode, setColorMode } = useColorMode()
const { spacingMode, setSpacingMode } = useSpacingMode()
const { focusMode, setFocusMode } = useFocusMode()

// Full context (theme + all accessibility)
const ctx = useDesignSystem()`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Best Practices
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Offer settings in your app</p>
              <p className="text-sm text-muted-foreground">
                Add an accessibility settings panel using the hooks above. Users
                expect to find these in Settings or Profile pages.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Don&apos;t rely on color alone</p>
              <p className="text-sm text-muted-foreground">
                Always combine color with icons or text labels for status
                indicators. Our Alert and Badge components support icons.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Test with keyboard navigation</p>
              <p className="text-sm text-muted-foreground">
                All interactive elements should be reachable via Tab and
                operable with Enter/Space. Our Radix-based components handle
                this automatically.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Use semantic HTML</p>
              <p className="text-sm text-muted-foreground">
                Use heading levels (h1-h6) correctly, label form inputs, and use
                landmark regions (main, nav, aside). Screen readers depend on
                semantic structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
