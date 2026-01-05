const fontFamilies = [
  {
    name: "Sans (Satoshi)",
    class: "font-sans",
    usage: "UI text, headings, body copy",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    name: "Mono (JetBrains Mono)",
    class: "font-mono",
    usage: "Code, technical values, data",
    sample: "const energy = 42.5 kWh",
  },
];

const fontSizes = [
  { name: "text-xs", size: "12px", lineHeight: "16px", usage: "Captions, badges" },
  { name: "text-sm", size: "14px", lineHeight: "20px", usage: "Secondary text, labels" },
  { name: "text-base", size: "16px", lineHeight: "24px", usage: "Body text (default)" },
  { name: "text-lg", size: "18px", lineHeight: "28px", usage: "Lead paragraphs" },
  { name: "text-xl", size: "20px", lineHeight: "28px", usage: "Section titles" },
  { name: "text-2xl", size: "24px", lineHeight: "32px", usage: "Card headings" },
  { name: "text-3xl", size: "30px", lineHeight: "36px", usage: "Page sections" },
  { name: "text-4xl", size: "36px", lineHeight: "40px", usage: "Page titles" },
];

const fontWeights = [
  { name: "font-normal", weight: "400", usage: "Body text" },
  { name: "font-medium", weight: "500", usage: "Labels, emphasis" },
  { name: "font-semibold", weight: "600", usage: "Headings, buttons" },
  { name: "font-bold", weight: "700", usage: "Strong headings" },
];

export default function TypographyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Typography</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Font families, sizes, and weights for consistent text styling.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Font families
        </h2>
        <div className="space-y-4">
          {fontFamilies.map((font) => (
            <div key={font.name} className="rounded-lg border p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{font.name}</h3>
                <code className="text-xs bg-muted px-2 py-1 rounded">{font.class}</code>
              </div>
              <p className="text-sm text-muted-foreground">{font.usage}</p>
              <p className={`text-lg ${font.class}`}>{font.sample}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Font sizes
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-medium">Class</th>
                <th className="text-left p-3 font-medium">Size</th>
                <th className="text-left p-3 font-medium">Line height</th>
                <th className="text-left p-3 font-medium">Usage</th>
                <th className="text-left p-3 font-medium">Preview</th>
              </tr>
            </thead>
            <tbody>
              {fontSizes.map((size) => (
                <tr key={size.name} className="border-t">
                  <td className="p-3 font-mono text-xs">{size.name}</td>
                  <td className="p-3">{size.size}</td>
                  <td className="p-3">{size.lineHeight}</td>
                  <td className="p-3 text-muted-foreground">{size.usage}</td>
                  <td className="p-3">
                    <span className={size.name}>Aa</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Font weights
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-medium">Class</th>
                <th className="text-left p-3 font-medium">Weight</th>
                <th className="text-left p-3 font-medium">Usage</th>
                <th className="text-left p-3 font-medium">Preview</th>
              </tr>
            </thead>
            <tbody>
              {fontWeights.map((weight) => (
                <tr key={weight.name} className="border-t">
                  <td className="p-3 font-mono text-xs">{weight.name}</td>
                  <td className="p-3">{weight.weight}</td>
                  <td className="p-3 text-muted-foreground">{weight.usage}</td>
                  <td className="p-3">
                    <span className={weight.name}>The quick brown fox</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Heading scale
        </h2>
        <div className="space-y-4 rounded-lg border p-4">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Heading 1 (text-4xl)
          </h1>
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            Heading 2 (text-3xl)
          </h2>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Heading 3 (text-2xl)
          </h3>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Heading 4 (text-xl)
          </h4>
          <p className="leading-7">
            Body text using default text-base size. This is how regular paragraph content appears
            in the design system with proper line height for readability.
          </p>
          <p className="text-sm text-muted-foreground">
            Secondary text using text-sm with muted foreground color.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`{/* Headings */}
<h1 className="text-4xl font-bold tracking-tight">Page Title</h1>
<h2 className="text-2xl font-semibold">Section</h2>

{/* Body text */}
<p className="leading-7">Paragraph content...</p>
<p className="text-sm text-muted-foreground">Secondary text</p>

{/* Code/technical */}
<code className="font-mono text-sm">42.5 kWh</code>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
