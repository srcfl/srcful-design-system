import Link from "next/link";

export default function ClaudeCodePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Claude Code Setup
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Configure your project to use the Sourceful Design System with Claude Code.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Why use CLAUDE.md?
        </h2>
        <p className="leading-7">
          Claude Code automatically reads <code className="bg-muted px-1.5 py-0.5 rounded text-sm">CLAUDE.md</code> files
          in your project root. By adding our template, Claude will automatically:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Use components from <code className="bg-muted px-1.5 py-0.5 rounded text-sm">@sourceful-energy/ui</code></li>
          <li>Follow Sourceful design patterns and color tokens</li>
          <li>Avoid creating custom components when design system components exist</li>
          <li>Apply correct dark mode and accessibility practices</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Setup Steps
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">1. Install the package</h3>
            <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
              <code>npm install @sourceful-energy/ui</code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">2. Add styles to your app</h3>
            <p className="text-muted-foreground mb-2">
              Import the styles in your root layout or app entry point:
            </p>
            <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
              <pre><code>{`import "@sourceful-energy/ui/styles.css"`}</code></pre>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">3. Add the CLAUDE.md template</h3>
            <p className="text-muted-foreground mb-2">
              Download the template to your project root:
            </p>
            <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
              <code>curl -o CLAUDE.md https://raw.githubusercontent.com/srcfl/srcful-design-system/main/CLAUDE.project-template.md</code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">4. Customize for your project</h3>
            <p className="text-muted-foreground">
              Open <code className="bg-muted px-1.5 py-0.5 rounded text-sm">CLAUDE.md</code> and add any project-specific
              context at the bottom. This helps Claude understand your specific codebase patterns.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Template Contents
        </h2>
        <p className="leading-7">
          The template includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li><strong>Component quick reference</strong> - Table mapping needs to components</li>
          <li><strong>Import patterns</strong> - Correct way to import components and styles</li>
          <li><strong>Key patterns</strong> - Theming, colors, toasts, forms</li>
          <li><strong>Don&apos;t list</strong> - Common mistakes to avoid</li>
          <li><strong>Project notes section</strong> - Space for your custom context</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Example Prompts
        </h2>
        <p className="leading-7">
          Once set up, you can give Claude Code prompts like:
        </p>
        <div className="space-y-3">
          <div className="rounded-lg border bg-card p-4">
            <p className="text-sm italic text-muted-foreground">&quot;Create a form for adding a new site with name, location, and capacity fields&quot;</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="text-sm italic text-muted-foreground">&quot;Add a card showing battery status with a progress bar&quot;</p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="text-sm italic text-muted-foreground">&quot;Create a data table for displaying device list with sorting&quot;</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Claude will automatically use the correct design system components, patterns, and styling.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Reskinning Existing Projects
        </h2>
        <p className="leading-7">
          For existing projects that don&apos;t use the design system yet, the CLAUDE.md template includes
          specific guidelines to ensure Claude doesn&apos;t break your existing code.
        </p>

        <div className="space-y-4 mt-4">
          <h3 className="font-semibold text-lg">Critical: CSS Import Order</h3>
          <p className="text-muted-foreground">
            The design system CSS <strong>must</strong> be imported before your project&apos;s globals.css:
          </p>
          <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
            <pre><code>{`// In your root layout - ORDER MATTERS
import "@sourceful-energy/ui/styles.css"  // FIRST
import "./globals.css"                     // SECOND`}</code></pre>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          <h3 className="font-semibold text-lg">What Claude Will Do</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Replace UI primitives (buttons, cards, inputs) with design system components</li>
            <li>Use semantic color tokens like <code className="bg-muted px-1.5 py-0.5 rounded text-sm">text-foreground</code> and <code className="bg-muted px-1.5 py-0.5 rounded text-sm">bg-background</code></li>
            <li>Preserve existing page structure, layouts, and routing</li>
            <li>Work incrementally - one component type at a time</li>
          </ul>
        </div>

        <div className="space-y-4 mt-4">
          <h3 className="font-semibold text-lg">What Claude Won&apos;t Do</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Change page layouts, routing, or component hierarchy</li>
            <li>Remove or reorganize page sections</li>
            <li>Delete code assuming it&apos;s unused</li>
            <li>Override design system CSS variables</li>
          </ul>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          You don&apos;t need to migrate everything at once. The design system components can coexist with existing code.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Troubleshooting
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Unstyled components / CSS variables undefined</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
              <li>Verify <code className="bg-muted px-1.5 py-0.5 rounded text-sm">@sourceful-energy/ui/styles.css</code> is imported FIRST</li>
              <li>Check package version is 0.1.22+: <code className="bg-muted px-1.5 py-0.5 rounded text-sm">npm list @sourceful-energy/ui</code></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Dark mode not working</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
              <li>Add <code className="bg-muted px-1.5 py-0.5 rounded text-sm">suppressHydrationWarning</code> to the <code className="bg-muted px-1.5 py-0.5 rounded text-sm">&lt;html&gt;</code> tag</li>
              <li>Wrap app in <code className="bg-muted px-1.5 py-0.5 rounded text-sm">ThemeProvider</code> with <code className="bg-muted px-1.5 py-0.5 rounded text-sm">attribute=&quot;class&quot;</code></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-primary/5 p-4">
        <p className="text-sm">
          <strong>View the template:</strong>{" "}
          <a
            href="https://github.com/srcfl/srcful-design-system/blob/main/CLAUDE.project-template.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            CLAUDE.project-template.md on GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
