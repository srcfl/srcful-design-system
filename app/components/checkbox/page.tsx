"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const checkboxProps = [
  {
    name: "checked",
    type: "boolean | 'indeterminate'",
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
    description: "Whether the checkbox is disabled.",
  },
  {
    name: "id",
    type: "string",
    default: "-",
    description: "The ID for associating with a label.",
  },
];

export default function CheckboxPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { Checkbox } from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview
          code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
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
  <Checkbox id="checked" defaultChecked />
  <Label htmlFor="checked">Checked by default</Label>
</div>`}
        >
          <div className="flex items-center space-x-2">
            <Checkbox id="checked" defaultChecked />
            <Label htmlFor="checked">Checked by default</Label>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Disabled</h3>
        <ComponentPreview
          code={`<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled" disabled />
    <Label htmlFor="disabled">Disabled</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="disabled-checked" disabled defaultChecked />
    <Label htmlFor="disabled-checked">Disabled checked</Label>
  </div>
</div>`}
        >
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled" className="text-muted-foreground">Disabled</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-checked" disabled defaultChecked />
              <Label htmlFor="disabled-checked" className="text-muted-foreground">Disabled checked</Label>
            </div>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">With Description</h3>
        <ComponentPreview
          code={`<div className="flex items-start space-x-2">
  <Checkbox id="notifications" />
  <div className="grid gap-1.5 leading-none">
    <Label htmlFor="notifications">Enable notifications</Label>
    <p className="text-sm text-muted-foreground">
      Receive updates about your energy usage.
    </p>
  </div>
</div>`}
        >
          <div className="flex items-start space-x-2">
            <Checkbox id="notifications" />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="notifications">Enable notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive updates about your energy usage.
              </p>
            </div>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={checkboxProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Uses native checkbox semantics via Radix UI</li>
          <li>Supports keyboard navigation (Space to toggle)</li>
          <li>Always pair with a Label for screen readers</li>
          <li>Supports indeterminate state</li>
        </ul>
      </div>
    </div>
  );
}
