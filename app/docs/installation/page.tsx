export default function InstallationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Installation
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Get started with the Sourceful Design System in your project.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Install the package
        </h2>
        <p className="leading-7">
          Install the Sourceful UI package using npm, yarn, or pnpm:
        </p>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`# npm
npm install @sourceful-energy/ui

# yarn
yarn add @sourceful-energy/ui

# pnpm
pnpm add @sourceful-energy/ui`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Import styles
        </h2>
        <p className="leading-7">
          Import the CSS file in your app&apos;s entry point (e.g., <code className="bg-muted px-1 py-0.5 rounded text-sm">layout.tsx</code> or <code className="bg-muted px-1 py-0.5 rounded text-sm">_app.tsx</code>):
        </p>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import "@sourceful-energy/ui/styles.css"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Use components
        </h2>
        <p className="leading-7">
          Import and use components directly:
        </p>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { Button, Card, Input, Badge } from "@sourceful-energy/ui"

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter device name" />
      <Button>Add Device</Button>
      <Badge variant="success-soft">Online</Badge>
    </Card>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Peer dependencies
        </h2>
        <p className="leading-7">
          The package requires the following peer dependencies:
        </p>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`{
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0"
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Tailwind CSS setup (optional)
        </h2>
        <p className="leading-7">
          If you want to use the Sourceful color tokens in your own styles, extend your Tailwind config:
        </p>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
      colors: {
        sourceful: {
          green: {
            500: "#00FF84",
            600: "#00cc6a",
          },
          gray: {
            900: "#111827",
            950: "#0a0a0a",
          },
        },
      },
    },
  },
}

export default config`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          TypeScript
        </h2>
        <p className="leading-7">
          The package includes TypeScript definitions. All components are fully typed
          with autocompletion support in your IDE.
        </p>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import type { ButtonProps, BadgeProps } from "@sourceful-energy/ui"`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
