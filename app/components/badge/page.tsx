import { ComponentNav } from "@/components/component-nav";
import { Badge } from "@/components/ui/badge";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { Check, X, Circle, Zap, AlertTriangle } from "lucide-react";
import { PixelGrid } from "@/components/ui/pixel-grid";

const badgeProps = [
  {
    name: "variant",
    type: '"default" | "secondary" | "destructive" | "outline" | "energy" | "success" | "warning" | "info" | "*-soft" | "*-outline"',
    default: '"default"',
    description: "The visual style of the badge. Soft and outline variants available for success, warning, destructive, info, energy.",
  },
  {
    name: "rounded",
    type: '"default" | "full"',
    default: '"default"',
    description: "The border radius. Use 'full' for pill-shaped badges.",
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
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`import { Badge } from "@sourceful-energy/ui"`}</code>
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

        <h3 className="text-lg font-medium">Soft Variants</h3>
        <ComponentPreview
          code={`<div className="flex flex-wrap gap-2">
  <Badge variant="success-soft">Success</Badge>
  <Badge variant="warning-soft">Warning</Badge>
  <Badge variant="destructive-soft">Error</Badge>
  <Badge variant="info-soft">Info</Badge>
  <Badge variant="energy-soft">Energy</Badge>
</div>`}
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="success-soft">Success</Badge>
            <Badge variant="warning-soft">Warning</Badge>
            <Badge variant="destructive-soft">Error</Badge>
            <Badge variant="info-soft">Info</Badge>
            <Badge variant="energy-soft">Energy</Badge>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Outline Variants</h3>
        <ComponentPreview
          code={`<div className="flex flex-wrap gap-2">
  <Badge variant="success-outline">Success</Badge>
  <Badge variant="warning-outline">Warning</Badge>
  <Badge variant="destructive-outline">Error</Badge>
  <Badge variant="info-outline">Info</Badge>
</div>`}
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="success-outline">Success</Badge>
            <Badge variant="warning-outline">Warning</Badge>
            <Badge variant="destructive-outline">Error</Badge>
            <Badge variant="info-outline">Info</Badge>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Fully Rounded (Pill)</h3>
        <ComponentPreview
          code={`<div className="flex flex-wrap gap-2">
  <Badge rounded="full">Default</Badge>
  <Badge variant="success-soft" rounded="full">Online</Badge>
  <Badge variant="warning-soft" rounded="full">Pending</Badge>
  <Badge variant="info-soft" rounded="full">New</Badge>
</div>`}
        >
          <div className="flex flex-wrap gap-2">
            <Badge rounded="full">Default</Badge>
            <Badge variant="success-soft" rounded="full">Online</Badge>
            <Badge variant="warning-soft" rounded="full">Pending</Badge>
            <Badge variant="info-soft" rounded="full">New</Badge>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">With Icons</h3>
        <ComponentPreview
          code={`<div className="flex flex-wrap gap-2">
  <Badge variant="success-soft">
    <Check /> Verified
  </Badge>
  <Badge variant="destructive-soft">
    <X /> Failed
  </Badge>
  <Badge variant="warning-soft">
    <AlertTriangle /> Warning
  </Badge>
  <Badge variant="energy-soft">
    <Zap /> Active
  </Badge>
</div>`}
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="success-soft">
              <Check /> Verified
            </Badge>
            <Badge variant="destructive-soft">
              <X /> Failed
            </Badge>
            <Badge variant="warning-soft">
              <AlertTriangle /> Warning
            </Badge>
            <Badge variant="energy-soft">
              <Zap /> Active
            </Badge>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Loading State</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Use PixelGrid alongside badges for branded loading indicators.
        </p>
        <ComponentPreview
          code={`<div className="flex flex-col gap-3">
  <div className="flex items-center gap-2">
    <PixelGrid dimension="4x4" pattern="cross-spin" size="sm" />
    <Badge variant="secondary">Loading</Badge>
  </div>
  <div className="flex items-center gap-2">
    <PixelGrid dimension="4x4" pattern="ripple" size="sm" />
    <Badge variant="info-soft" rounded="full">Syncing</Badge>
  </div>
  <div className="flex items-center gap-2">
    <PixelGrid pattern="corners-sync" size="sm" />
    <Badge variant="warning-soft">Processing</Badge>
  </div>
</div>`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <PixelGrid dimension="4x4" pattern="cross-spin" size="sm" />
              <Badge variant="secondary">Loading</Badge>
            </div>
            <div className="flex items-center gap-2">
              <PixelGrid dimension="4x4" pattern="ripple" size="sm" />
              <Badge variant="info-soft" rounded="full">Syncing</Badge>
            </div>
            <div className="flex items-center gap-2">
              <PixelGrid pattern="corners-sync" size="sm" />
              <Badge variant="warning-soft">Processing</Badge>
            </div>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Status with Dot</h3>
        <ComponentPreview
          code={`<div className="flex flex-wrap gap-2">
  <Badge variant="success-soft" rounded="full">
    <Circle className="fill-current" /> Online
  </Badge>
  <Badge variant="warning-soft" rounded="full">
    <Circle className="fill-current" /> Away
  </Badge>
  <Badge variant="destructive-soft" rounded="full">
    <Circle className="fill-current" /> Offline
  </Badge>
</div>`}
        >
          <div className="flex flex-wrap gap-2">
            <Badge variant="success-soft" rounded="full">
              <Circle className="fill-current" /> Online
            </Badge>
            <Badge variant="warning-soft" rounded="full">
              <Circle className="fill-current" /> Away
            </Badge>
            <Badge variant="destructive-soft" rounded="full">
              <Circle className="fill-current" /> Offline
            </Badge>
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
  <Badge variant="success-soft">Connected</Badge>
</div>`}
        >
          <div className="flex items-center gap-2">
            <span className="font-medium">Device Status:</span>
            <Badge variant="success-soft">Connected</Badge>
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

      <ComponentNav currentHref="/components/badge" />
    </div>
  );
}
