"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Monitor } from "lucide-react";

export default function ThemingPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Theming
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Customize the look and feel with dark mode and color tokens.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Dark mode
        </h2>
        <p className="leading-7">
          The design system supports light, dark, and system-preference themes out of the box.
          We use <code className="bg-muted px-1 py-0.5 rounded text-sm">next-themes</code> for theme management.
        </p>
        <div className="flex gap-2">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            size="sm"
            onClick={() => setTheme("light")}
          >
            <Sun className="h-4 w-4 mr-2" />
            Light
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "outline"}
            size="sm"
            onClick={() => setTheme("dark")}
          >
            <Moon className="h-4 w-4 mr-2" />
            Dark
          </Button>
          <Button
            variant={theme === "system" ? "default" : "outline"}
            size="sm"
            onClick={() => setTheme("system")}
          >
            <Monitor className="h-4 w-4 mr-2" />
            System
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Setting up dark mode
        </h2>
        <p className="leading-7">
          Wrap your app with the ThemeProvider:
        </p>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`// app/layout.tsx
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
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
          CSS variables
        </h2>
        <p className="leading-7">
          Colors are defined as CSS variables, making it easy to customize the theme.
          The format uses HSL values without the <code className="bg-muted px-1 py-0.5 rounded text-sm">hsl()</code> wrapper
          for better composability with Tailwind&apos;s opacity utilities.
        </p>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 9%;
  --primary: 142 76% 36%;
  --primary-foreground: 0 0% 100%;
  /* ... */
}

.dark {
  --background: 0 0% 4%;
  --foreground: 0 0% 100%;
  --primary: 151 100% 50%;
  --primary-foreground: 0 0% 0%;
  /* ... */
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Using theme colors
        </h2>
        <p className="leading-7">
          Use Tailwind classes with semantic color names:
        </p>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`{/* Semantic colors - adapt to theme */}
<div className="bg-background text-foreground" />
<div className="bg-primary text-primary-foreground" />
<div className="bg-muted text-muted-foreground" />
<div className="bg-accent text-accent-foreground" />

{/* Brand colors - consistent across themes */}
<div className="bg-sourceful-green-500" />
<div className="text-sourceful-yellow-400" />`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Customizing colors
        </h2>
        <p className="leading-7">
          Override CSS variables to customize the theme:
        </p>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`/* In your globals.css */
:root {
  /* Change the primary color */
  --primary: 200 100% 50%;

  /* Change the accent color */
  --accent: 30 100% 50%;
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
