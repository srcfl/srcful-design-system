export default function VitePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Using with Vite
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          The design system is fully compatible with Vite, Create React App, and other non-Next.js setups.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Quick Start
        </h2>
        <p className="leading-7">
          Install the package and import styles:
        </p>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`npm install @sourceful-energy/ui`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Basic Setup
        </h2>
        <p className="leading-7">
          The only difference from Next.js is handling dark mode yourself. Here&apos;s a complete example:
        </p>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`// main.tsx or App.tsx
import { useState, useEffect } from "react"
import {
  DesignSystemProvider,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@sourceful-energy/ui"
import "@sourceful-energy/ui/styles.css"  // Required!
import "./index.css"

function App() {
  // Handle dark mode (replaces next-themes)
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )

  // Toggle .dark class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <DesignSystemProvider defaultTheme="elevated">
      <div className="min-h-screen bg-background text-foreground p-8">
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Works in Vite!</CardTitle>
          </CardHeader>
          <CardContent>
            All components work exactly the same.
          </CardContent>
        </Card>
      </div>
    </DesignSystemProvider>
  )
}

export default App`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Dark Mode
        </h2>
        <p className="leading-7">
          The design system uses a <code className="bg-muted px-1 py-0.5 rounded text-sm">.dark</code> class on the <code className="bg-muted px-1 py-0.5 rounded text-sm">&lt;html&gt;</code> element for dark mode.
          In Next.js, <code className="bg-muted px-1 py-0.5 rounded text-sm">next-themes</code> handles this automatically.
          In Vite, you toggle it yourself:
        </p>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`// Toggle dark mode - that's it!
document.documentElement.classList.toggle("dark", isDarkMode)`}</code>
          </pre>
        </div>
        <p className="leading-7">
          You can use any state management (useState, Zustand, localStorage) to persist the user&apos;s preference.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Themes & Accessibility
        </h2>
        <p className="leading-7">
          The <code className="bg-muted px-1 py-0.5 rounded text-sm">DesignSystemProvider</code> handles visual themes and accessibility modes.
          It&apos;s pure React with no framework dependencies:
        </p>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`import {
  DesignSystemProvider,
  useAccessibility,
  Switch
} from "@sourceful-energy/ui"

// Visual themes: "base" (flat) or "elevated" (premium)
<DesignSystemProvider defaultTheme="elevated">
  <App />
</DesignSystemProvider>

// Accessibility hooks work in Vite
function AccessibilitySettings() {
  const {
    fontMode, setFontMode,        // "default" | "dyslexic"
    colorMode, setColorMode,      // color blind modes
    spacingMode, setSpacingMode,  // "default" | "comfortable"
    focusMode, setFocusMode,      // "default" | "enhanced"
  } = useAccessibility()

  return (
    <Switch
      checked={fontMode === "dyslexic"}
      onCheckedChange={(v) => setFontMode(v ? "dyslexic" : "default")}
    />
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          No Next.js Dependencies
        </h2>
        <p className="leading-7">
          The npm package has <strong>zero Next.js dependencies</strong>.
          Only React and React DOM are peer dependencies:
        </p>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`{
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0"
  }
}`}</code>
          </pre>
        </div>
        <p className="leading-7">
          This means fast installs and no bloat in your Vite project.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Full Example with Persistence
        </h2>
        <p className="leading-7">
          Here&apos;s a more complete example with localStorage persistence for dark mode:
        </p>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`import { useState, useEffect } from "react"

function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const stored = localStorage.getItem("darkMode")
    if (stored !== null) return stored === "true"
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    // Update class and localStorage
    document.documentElement.classList.toggle("dark", darkMode)
    localStorage.setItem("darkMode", String(darkMode))
  }, [darkMode])

  return [darkMode, setDarkMode] as const
}

// Use in your app
function App() {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <DesignSystemProvider defaultTheme="elevated">
      <Button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </Button>
    </DesignSystemProvider>
  )
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
