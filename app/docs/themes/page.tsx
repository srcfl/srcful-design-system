"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useDesignSystemTheme } from "@/components/design-system-provider";
import { Layers, Sparkles, Info } from "lucide-react";

export default function ThemesPage() {
  const { theme, setTheme } = useDesignSystemTheme();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Visual Themes
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Choose the visual style for your application with our theme system.
        </p>
      </div>

      <Alert variant="info">
        <Info className="h-4 w-4" />
        <AlertTitle>Developer Choice</AlertTitle>
        <AlertDescription>
          Themes are set by developers at build time, not by end users. Choose
          the visual style that best fits your application&apos;s purpose.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Available Themes
        </h2>
        <p className="leading-7">
          The design system ships with two visual themes. Both themes fully
          support light and dark mode.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Card
            className={`cursor-pointer transition-all ${
              theme === "base" ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setTheme("base")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Base Theme
                {theme === "base" && (
                  <Badge variant="secondary" className="ml-auto">
                    Active
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Clean, flat design with minimal shadows. Ideal for data-heavy
                dashboards and technical interfaces.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>- Flat surfaces with subtle borders</li>
                <li>- Minimal shadow depth</li>
                <li>- Maximum content density</li>
                <li>- Professional, utilitarian feel</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all ${
              theme === "elevated" ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setTheme("elevated")}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Elevated Theme
                {theme === "elevated" && (
                  <Badge variant="secondary" className="ml-auto">
                    Active
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Premium feel with depth and dimension. Perfect for consumer
                products and marketing sites.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>- Floating cards with soft shadows</li>
                <li>- Raised buttons with highlights</li>
                <li>- Recessed input fields</li>
                <li>- Modern, premium aesthetic</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Live Preview
        </h2>
        <p className="leading-7">
          Click a theme card above to see how components look with each theme.
          Currently viewing:{" "}
          <Badge variant="outline" className="ml-1">
            {theme}
          </Badge>
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Example Card</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Input field example" />
              <div className="flex gap-2">
                <Button>Primary</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="energy">Energy</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Alert Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert variant="success" className="py-2">
                <AlertDescription>Success message</AlertDescription>
              </Alert>
              <Alert variant="warning" className="py-2">
                <AlertDescription>Warning message</AlertDescription>
              </Alert>
              <Alert variant="destructive" className="py-2">
                <AlertDescription>Error message</AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Setup
        </h2>
        <p className="leading-7">
          Set your theme in the <code className="bg-muted px-1 py-0.5 rounded text-sm">DesignSystemProvider</code>:
        </p>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`// app/layout.tsx
import { ThemeProvider } from "next-themes"
import { DesignSystemProvider } from "@sourceful-energy/ui"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          {/* Set your visual theme here */}
          <DesignSystemProvider defaultTheme="elevated">
            {children}
          </DesignSystemProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          CSS Variables
        </h2>
        <p className="leading-7">
          The elevated theme overrides these CSS variables to add depth:
        </p>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`[data-theme="elevated"] {
  /* Cards float above the surface */
  --card-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 4px 16px rgba(0, 0, 0, 0.04);

  /* Buttons feel tactile and raised */
  --button-shadow:
    0 1px 2px rgba(0, 0, 0, 0.06),
    0 2px 4px rgba(0, 0, 0, 0.04);
  --button-highlight: inset 0 1px 0 rgba(255, 255, 255, 0.25);

  /* Inputs appear carved into the surface */
  --input-bg: rgba(0, 0, 0, 0.02);
  --input-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessing Theme Programmatically
        </h2>
        <p className="leading-7">
          Use the <code className="bg-muted px-1 py-0.5 rounded text-sm">useDesignSystemTheme</code> hook
          to read or change the theme:
        </p>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`import { useDesignSystemTheme } from "@sourceful-energy/ui"

function ThemeSwitcher() {
  const { theme, setTheme } = useDesignSystemTheme()

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="base">Base</option>
      <option value="elevated">Elevated</option>
    </select>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Theme vs Dark Mode
        </h2>
        <p className="leading-7">
          The theme system is separate from dark mode. Themes control visual
          style (flat vs elevated), while dark mode controls the color scheme.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4">Layer</th>
                <th className="text-left py-2 pr-4">Controlled By</th>
                <th className="text-left py-2 pr-4">Options</th>
                <th className="text-left py-2">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-4 font-medium">Theme</td>
                <td className="py-2 pr-4">Developer</td>
                <td className="py-2 pr-4">base, elevated</td>
                <td className="py-2">Visual style & depth</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 font-medium">Color Scheme</td>
                <td className="py-2 pr-4">User / System</td>
                <td className="py-2 pr-4">light, dark, system</td>
                <td className="py-2">Light or dark colors</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Accessibility</td>
                <td className="py-2 pr-4">User</td>
                <td className="py-2 pr-4">See Accessibility page</td>
                <td className="py-2">Font, color, spacing adaptations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
