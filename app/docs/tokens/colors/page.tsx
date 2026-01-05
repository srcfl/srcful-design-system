const brandColors = [
  {
    name: "Green",
    description: "Primary brand color, used for actions and links",
    shades: [
      { name: "50", value: "#f0fdf4", class: "bg-sourceful-green-50" },
      { name: "100", value: "#dcfce7", class: "bg-sourceful-green-100" },
      { name: "200", value: "#bbf7d0", class: "bg-sourceful-green-200" },
      { name: "300", value: "#86efac", class: "bg-sourceful-green-300" },
      { name: "400", value: "#4ade80", class: "bg-sourceful-green-400" },
      { name: "500", value: "#22c55e", class: "bg-sourceful-green-500", primary: true },
      { name: "600", value: "#16a34a", class: "bg-sourceful-green-600" },
      { name: "700", value: "#15803d", class: "bg-sourceful-green-700" },
      { name: "800", value: "#166534", class: "bg-sourceful-green-800" },
      { name: "900", value: "#14532d", class: "bg-sourceful-green-900" },
    ],
  },
  {
    name: "Gray",
    description: "Neutral tones for text, backgrounds, and borders",
    shades: [
      { name: "50", value: "#f9fafb", class: "bg-sourceful-gray-50" },
      { name: "100", value: "#f3f4f6", class: "bg-sourceful-gray-100" },
      { name: "200", value: "#e5e7eb", class: "bg-sourceful-gray-200" },
      { name: "300", value: "#d1d5db", class: "bg-sourceful-gray-300" },
      { name: "400", value: "#9ca3af", class: "bg-sourceful-gray-400" },
      { name: "500", value: "#6b7280", class: "bg-sourceful-gray-500" },
      { name: "600", value: "#4b5563", class: "bg-sourceful-gray-600" },
      { name: "700", value: "#374151", class: "bg-sourceful-gray-700" },
      { name: "800", value: "#1f2937", class: "bg-sourceful-gray-800" },
      { name: "900", value: "#111827", class: "bg-sourceful-gray-900" },
      { name: "950", value: "#0a0a0a", class: "bg-sourceful-gray-950" },
    ],
  },
  {
    name: "Yellow",
    description: "Energy accent color, used for highlights and warnings",
    shades: [
      { name: "50", value: "#fffce8", class: "bg-sourceful-yellow-50" },
      { name: "100", value: "#fff8c2", class: "bg-sourceful-yellow-100" },
      { name: "200", value: "#fff089", class: "bg-sourceful-yellow-200" },
      { name: "300", value: "#ffe545", class: "bg-sourceful-yellow-300" },
      { name: "400", value: "#FFD500", class: "bg-sourceful-yellow-400", primary: true },
      { name: "500", value: "#e6c000", class: "bg-sourceful-yellow-500" },
      { name: "600", value: "#cc9f00", class: "bg-sourceful-yellow-600" },
      { name: "700", value: "#a37700", class: "bg-sourceful-yellow-700" },
    ],
  },
];

const semanticColors = [
  { name: "background", description: "Page background", light: "#ffffff", dark: "#0a0a0a" },
  { name: "foreground", description: "Primary text", light: "#111827", dark: "#ffffff" },
  { name: "primary", description: "Primary actions, links", light: "#16a34a", dark: "#00FF84" },
  { name: "secondary", description: "Secondary elements", light: "#f3f4f6", dark: "#1f2937" },
  { name: "muted", description: "Muted backgrounds", light: "#f3f4f6", dark: "#1f2937" },
  { name: "accent", description: "Hover states", light: "#e8f5e9", dark: "#1a3d1a" },
  { name: "destructive", description: "Error states", light: "#FF0D0D", dark: "#FF0D0D" },
];

export default function ColorsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Colors</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Color tokens for the Sourceful Design System.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Brand colors
        </h2>
        <p className="leading-7">
          Our core brand palette with full shade ranges.
        </p>

        {brandColors.map((color) => (
          <div key={color.name} className="space-y-3">
            <h3 className="text-lg font-medium">{color.name}</h3>
            <p className="text-sm text-muted-foreground">{color.description}</p>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {color.shades.map((shade) => (
                <div key={shade.name} className="space-y-1.5">
                  <div
                    className={`h-10 w-full rounded-md ${shade.class} ${shade.primary ? "ring-2 ring-primary ring-offset-2" : ""}`}
                  />
                  <div className="text-xs">
                    <div className="font-medium">{shade.name}</div>
                    <div className="text-muted-foreground font-mono">{shade.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Semantic colors
        </h2>
        <p className="leading-7">
          Purpose-based colors that adapt between light and dark modes.
        </p>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-medium">Token</th>
                <th className="text-left p-3 font-medium">Usage</th>
                <th className="text-left p-3 font-medium">Light</th>
                <th className="text-left p-3 font-medium">Dark</th>
              </tr>
            </thead>
            <tbody>
              {semanticColors.map((color) => (
                <tr key={color.name} className="border-t">
                  <td className="p-3 font-mono text-xs">--{color.name}</td>
                  <td className="p-3 text-muted-foreground">{color.description}</td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-6 w-6 rounded border"
                        style={{ backgroundColor: color.light }}
                      />
                      <span className="font-mono text-xs">{color.light}</span>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-6 w-6 rounded border"
                        style={{ backgroundColor: color.dark }}
                      />
                      <span className="font-mono text-xs">{color.dark}</span>
                    </div>
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
            <code>{`{/* Semantic colors (theme-aware) */}
<div className="bg-background text-foreground" />
<div className="bg-primary text-primary-foreground" />

{/* Brand colors (fixed) */}
<div className="bg-sourceful-green-500" />
<div className="text-sourceful-yellow-400" />

{/* With opacity */}
<div className="bg-primary/50" />
<div className="border-sourceful-green-500/20" />`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
