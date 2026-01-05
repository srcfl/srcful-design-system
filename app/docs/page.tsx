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
          For AI Assistants
        </h2>
        <p className="leading-7">
          This design system is built with AI-assisted development in mind. Each component
          includes structured metadata that AI tools can parse:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>JSON schemas defining props and variants</li>
          <li>TypeScript types for autocomplete</li>
          <li>Usage examples in code blocks</li>
          <li>Accessibility guidelines</li>
        </ul>
        <p className="leading-7">
          Point your Claude Code <code className="bg-muted px-1 py-0.5 rounded text-sm">CLAUDE.md</code> to
          this documentation for AI-assisted development with Sourceful components.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Quick Start
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`npm install @srcful/ui

# In your app
import { Button, Card, Input } from "@srcful/ui"
import "@srcful/ui/styles.css"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Patterns
        </h2>
        <p className="leading-7">
          Learn how to combine components effectively with these patterns:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>
            <a href="/docs/patterns/forms" className="text-primary hover:underline">
              Form Patterns
            </a>{" "}
            - Best practices for building forms
          </li>
        </ul>
      </div>
    </div>
  );
}
