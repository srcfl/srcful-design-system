export default function DocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Introduction
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Welcome to the Sourceful Design System documentation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          What is this?
        </h2>
        <p className="leading-7">
          The Sourceful Design System is a collection of reusable components, design tokens,
          and guidelines for building consistent, accessible interfaces across all Sourceful
          Energy products.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Key Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>50+ production-ready React components</li>
          <li>Built on Radix UI primitives for accessibility</li>
          <li>Styled with Tailwind CSS</li>
          <li>Full TypeScript support</li>
          <li>Dark mode support</li>
          <li>WCAG 2.1 AA compliant</li>
          <li>Machine-readable component schemas for AI tooling</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Claude Code Integration
        </h2>
        <p className="leading-7">
          This design system is optimized for AI-assisted development. Add our{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm">CLAUDE.md</code> template to your
          project and Claude Code will automatically use the design system.
        </p>
        <p className="leading-7">
          <a href="/docs/claude-code" className="text-primary hover:underline">
            View the Claude Code setup guide →
          </a>
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Quick Start
        </h2>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`npm install @sourceful-energy/ui

# In your app
import { Button, Card, Input } from "@sourceful-energy/ui"
import "@sourceful-energy/ui/styles.css"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Patterns & Examples
        </h2>
        <p className="leading-7">
          Learn how to combine components effectively:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <a href="/docs/patterns/forms" className="block rounded-lg border p-4 hover:bg-muted transition-colors">
            <h3 className="font-medium mb-1">Form Patterns</h3>
            <p className="text-sm text-muted-foreground">Validation, layout, and best practices for forms</p>
          </a>
          <a href="/components/energy-flow" className="block rounded-lg border p-4 hover:bg-muted transition-colors">
            <h3 className="font-medium mb-1">Energy Flow</h3>
            <p className="text-sm text-muted-foreground">Visualize real-time energy distribution</p>
          </a>
          <a href="/components/sites-map" className="block rounded-lg border p-4 hover:bg-muted transition-colors">
            <h3 className="font-medium mb-1">Sites Map</h3>
            <p className="text-sm text-muted-foreground">Interactive maps for site locations</p>
          </a>
          <a href="/components/ai-chat" className="block rounded-lg border p-4 hover:bg-muted transition-colors">
            <h3 className="font-medium mb-1">AI Chat</h3>
            <p className="text-sm text-muted-foreground">Conversational AI interface component</p>
          </a>
          <a href="/components/charts" className="block rounded-lg border p-4 hover:bg-muted transition-colors">
            <h3 className="font-medium mb-1">Charts</h3>
            <p className="text-sm text-muted-foreground">Area, bar, line, pie, and more</p>
          </a>
          <a href="/" className="block rounded-lg border p-4 hover:bg-muted transition-colors">
            <h3 className="font-medium mb-1">Dashboard Examples</h3>
            <p className="text-sm text-muted-foreground">Full dashboard layouts on the home page</p>
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Credits
        </h2>
        <p className="leading-7">
          This design system is built on top of{" "}
          <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            shadcn/ui
          </a>
          , a collection of beautifully designed components by{" "}
          <a href="https://twitter.com/shadcn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            @shadcn
          </a>
          . Components are built with{" "}
          <a href="https://www.radix-ui.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Radix UI
          </a>{" "}
          primitives and styled with{" "}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Tailwind CSS
          </a>
          .
        </p>
      </div>
    </div>
  );
}
