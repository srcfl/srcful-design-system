"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const selectProps = [
  {
    name: "value",
    type: "string",
    default: "-",
    description: "The controlled value of the select.",
  },
  {
    name: "defaultValue",
    type: "string",
    default: "-",
    description: "The default value when uncontrolled.",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    default: "-",
    description: "Callback when the value changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the select is disabled.",
  },
  {
    name: "placeholder",
    type: "string",
    default: "-",
    description: "Placeholder text when no value is selected.",
  },
];

export default function SelectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Select</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Displays a list of options for the user to pick from.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview
          code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">With Label</h3>
        <ComponentPreview
          code={`<div className="space-y-2">
  <Label>Device Type</Label>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Select device" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="inverter">Inverter</SelectItem>
      <SelectItem value="battery">Battery</SelectItem>
      <SelectItem value="ev-charger">EV Charger</SelectItem>
    </SelectContent>
  </Select>
</div>`}
        >
          <div className="space-y-2 w-full max-w-sm">
            <Label>Device Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select device" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inverter">Inverter</SelectItem>
                <SelectItem value="battery">Battery</SelectItem>
                <SelectItem value="ev-charger">EV Charger</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">With Default Value</h3>
        <ComponentPreview
          code={`<Select defaultValue="solar">
  <SelectTrigger className="w-[180px]">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="solar">Solar</SelectItem>
    <SelectItem value="wind">Wind</SelectItem>
    <SelectItem value="hydro">Hydro</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select defaultValue="solar">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solar">Solar</SelectItem>
              <SelectItem value="wind">Wind</SelectItem>
              <SelectItem value="hydro">Hydro</SelectItem>
            </SelectContent>
          </Select>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Disabled</h3>
        <ComponentPreview
          code={`<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option">Option</SelectItem>
  </SelectContent>
</Select>`}
        >
          <Select disabled>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Disabled" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option">Option</SelectItem>
            </SelectContent>
          </Select>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={selectProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Full keyboard navigation support</li>
          <li>WAI-ARIA compliant listbox pattern</li>
          <li>Supports screen readers</li>
          <li>Type-ahead search functionality</li>
        </ul>
      </div>
    </div>
  );
}
