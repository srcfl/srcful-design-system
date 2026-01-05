"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const switchProps = [
  {
    name: "checked",
    type: "boolean",
    default: "false",
    description: "The controlled checked state.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description: "The default checked state when uncontrolled.",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    default: "-",
    description: "Callback when the checked state changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the switch is disabled.",
  },
  {
    name: "id",
    type: "string",
    default: "-",
    description: "The ID for associating with a label.",
  },
];

export default function SwitchPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Switch</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A control that allows the user to toggle between on and off states.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { Switch } from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview
          code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">Default Checked</h3>
        <ComponentPreview
          code={`<div className="flex items-center space-x-2">
  <Switch id="dark-mode" defaultChecked />
  <Label htmlFor="dark-mode">Dark Mode</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Switch id="dark-mode" defaultChecked />
            <Label htmlFor="dark-mode">Dark Mode</Label>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Disabled</h3>
        <ComponentPreview
          code={`<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <Switch id="disabled-off" disabled />
    <Label htmlFor="disabled-off">Disabled Off</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="disabled-on" disabled defaultChecked />
    <Label htmlFor="disabled-on">Disabled On</Label>
  </div>
</div>`}
        >
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch id="disabled-off" disabled />
              <Label htmlFor="disabled-off" className="text-muted-foreground">Disabled Off</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="disabled-on" disabled defaultChecked />
              <Label htmlFor="disabled-on" className="text-muted-foreground">Disabled On</Label>
            </div>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">With Description</h3>
        <ComponentPreview
          code={`<div className="flex items-center justify-between rounded-lg border p-4">
  <div className="space-y-0.5">
    <Label htmlFor="smart-charging">Smart Charging</Label>
    <p className="text-sm text-muted-foreground">
      Optimize charging based on grid conditions.
    </p>
  </div>
  <Switch id="smart-charging" />
</div>`}
        >
          <div className="flex items-center justify-between rounded-lg border p-4 w-full max-w-md">
            <div className="space-y-0.5">
              <Label htmlFor="smart-charging">Smart Charging</Label>
              <p className="text-sm text-muted-foreground">
                Optimize charging based on grid conditions.
              </p>
            </div>
            <Switch id="smart-charging" />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={switchProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Uses native switch role via Radix UI</li>
          <li>Keyboard accessible (Space to toggle)</li>
          <li>Always pair with a Label for screen readers</li>
          <li>Visible focus indicator</li>
        </ul>
      </div>
    </div>
  );
}
