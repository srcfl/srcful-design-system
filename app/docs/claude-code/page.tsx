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
          Existing Projects
        </h2>
        <p className="leading-7">
          For existing projects that don&apos;t use the design system yet:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Follow the setup steps above</li>
          <li>Ask Claude to &quot;migrate this component to use @sourceful-energy/ui&quot;</li>
          <li>Review and test the changes</li>
          <li>Repeat for other components as needed</li>
        </ol>
        <p className="text-sm text-muted-foreground mt-2">
          You don&apos;t need to migrate everything at once. The design system components can coexist with existing code.
        </p>
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
