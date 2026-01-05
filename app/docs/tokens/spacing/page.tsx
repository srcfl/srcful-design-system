const spacingScale = [
  { name: "0", value: "0px", class: "w-0" },
  { name: "px", value: "1px", class: "w-px" },
  { name: "0.5", value: "2px", class: "w-0.5" },
  { name: "1", value: "4px", class: "w-1" },
  { name: "1.5", value: "6px", class: "w-1.5" },
  { name: "2", value: "8px", class: "w-2" },
  { name: "2.5", value: "10px", class: "w-2.5" },
  { name: "3", value: "12px", class: "w-3" },
  { name: "3.5", value: "14px", class: "w-3.5" },
  { name: "4", value: "16px", class: "w-4", highlight: true },
  { name: "5", value: "20px", class: "w-5" },
  { name: "6", value: "24px", class: "w-6" },
  { name: "7", value: "28px", class: "w-7" },
  { name: "8", value: "32px", class: "w-8" },
  { name: "9", value: "36px", class: "w-9" },
  { name: "10", value: "40px", class: "w-10" },
  { name: "12", value: "48px", class: "w-12" },
  { name: "14", value: "56px", class: "w-14" },
  { name: "16", value: "64px", class: "w-16" },
];

const borderRadii = [
  { name: "rounded-none", value: "0px", usage: "Square corners" },
  { name: "rounded-sm", value: "2px", usage: "Subtle rounding" },
  { name: "rounded", value: "4px", usage: "Default rounding" },
  { name: "rounded-md", value: "6px", usage: "Buttons, inputs" },
  { name: "rounded-lg", value: "8px", usage: "Cards, dialogs" },
  { name: "rounded-xl", value: "12px", usage: "Large cards" },
  { name: "rounded-2xl", value: "16px", usage: "Hero sections" },
  { name: "rounded-full", value: "9999px", usage: "Pills, avatars" },
];

export default function SpacingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Spacing</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Spacing scale and border radius tokens for consistent layouts.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Spacing scale
        </h2>
        <p className="leading-7">
          Based on a 4px base unit. Use for margin, padding, gap, and sizing.
        </p>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-medium">Name</th>
                <th className="text-left p-3 font-medium">Value</th>
                <th className="text-left p-3 font-medium">Class examples</th>
                <th className="text-left p-3 font-medium">Preview</th>
              </tr>
            </thead>
            <tbody>
              {spacingScale.map((space) => (
                <tr
                  key={space.name}
                  className={`border-t ${space.highlight ? "bg-primary/5" : ""}`}
                >
                  <td className="p-3 font-mono text-xs">{space.name}</td>
                  <td className="p-3">{space.value}</td>
                  <td className="p-3 font-mono text-xs text-muted-foreground">
                    p-{space.name}, m-{space.name}, gap-{space.name}
                  </td>
                  <td className="p-3">
                    <div className={`h-4 bg-primary rounded ${space.class}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Common patterns
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-4 space-y-2">
            <h3 className="font-medium">Component spacing</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><code className="bg-muted px-1 rounded">gap-2</code> (8px) - Between form elements</p>
              <p><code className="bg-muted px-1 rounded">gap-4</code> (16px) - Between sections</p>
              <p><code className="bg-muted px-1 rounded">gap-6</code> (24px) - Between major blocks</p>
            </div>
          </div>
          <div className="rounded-lg border p-4 space-y-2">
            <h3 className="font-medium">Padding</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><code className="bg-muted px-1 rounded">p-2</code> (8px) - Compact buttons</p>
              <p><code className="bg-muted px-1 rounded">p-4</code> (16px) - Cards, inputs</p>
              <p><code className="bg-muted px-1 rounded">p-6</code> (24px) - Page sections</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Border radius
        </h2>
        <p className="leading-7">
          Consistent corner rounding across components.
        </p>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-medium">Class</th>
                <th className="text-left p-3 font-medium">Value</th>
                <th className="text-left p-3 font-medium">Usage</th>
                <th className="text-left p-3 font-medium">Preview</th>
              </tr>
            </thead>
            <tbody>
              {borderRadii.map((radius) => (
                <tr key={radius.name} className="border-t">
                  <td className="p-3 font-mono text-xs">{radius.name}</td>
                  <td className="p-3">{radius.value}</td>
                  <td className="p-3 text-muted-foreground">{radius.usage}</td>
                  <td className="p-3">
                    <div className={`h-10 w-16 bg-primary ${radius.name}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`{/* Spacing */}
<div className="p-4">Padded content</div>
<div className="space-y-4">Vertical stack</div>
<div className="flex gap-2">Horizontal items</div>

{/* Border radius */}
<button className="rounded-md">Button</button>
<div className="rounded-lg">Card</div>
<span className="rounded-full">Badge</span>

{/* Combined */}
<Card className="p-6 rounded-lg">
  <div className="space-y-4">
    <Input className="rounded-md" />
    <Button className="rounded-md">Submit</Button>
  </div>
</Card>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
