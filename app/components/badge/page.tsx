import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const badgeProps = [
  {
    name: "variant",
    type: '"default" | "secondary" | "destructive" | "outline" | "energy" | "success" | "warning" | "info"',
    default: '"default"',
    description: "The visual style of the badge.",
  },
  {
    name: "className",
    type: "string",
    default: "-",
    description: "Additional CSS classes.",
  },
];

export default function BadgePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Badge</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Displays a badge or label for categorization or status indication.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { Badge } from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview code={`<Badge>Badge</Badge>`}>
          <Badge>Badge</Badge>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">All Variants</h3>
        <ComponentPreview
          code={`<div className="flex flex-wrap gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="info">Info</Badge>
  <Badge variant="energy">Energy</Badge>
</div>`}
        >
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="energy">Energy</Badge>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Status Indicators</h3>
        <ComponentPreview
          code={`<div className="flex flex-wrap gap-2">
  <Badge variant="success">Online</Badge>
  <Badge variant="warning">Pending</Badge>
  <Badge variant="destructive">Offline</Badge>
</div>`}
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="success">Online</Badge>
            <Badge variant="warning">Pending</Badge>
            <Badge variant="destructive">Offline</Badge>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Device Types</h3>
        <ComponentPreview
          code={`<div className="flex flex-wrap gap-2">
  <Badge variant="energy">Solar</Badge>
  <Badge variant="info">Battery</Badge>
  <Badge variant="secondary">EV Charger</Badge>
</div>`}
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="energy">Solar</Badge>
            <Badge variant="info">Battery</Badge>
            <Badge variant="secondary">EV Charger</Badge>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">In Context</h3>
        <ComponentPreview
          code={`<div className="flex items-center gap-2">
  <span className="font-medium">Device Status:</span>
  <Badge variant="success">Connected</Badge>
</div>`}
        >
          <div className="flex items-center gap-2">
            <span className="font-medium">Device Status:</span>
            <Badge variant="success">Connected</Badge>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={badgeProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Badges are decorative by default</li>
          <li>Use meaningful text content for screen readers</li>
          <li>Don't rely solely on color to convey meaning</li>
          <li>Consider adding aria-label for icon-only badges</li>
        </ul>
      </div>
    </div>
  );
}
