"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const sliderProps = [
  {
    name: "value",
    type: "number[]",
    default: "-",
    description: "The controlled value of the slider.",
  },
  {
    name: "defaultValue",
    type: "number[]",
    default: "[0]",
    description: "The default value when uncontrolled.",
  },
  {
    name: "onValueChange",
    type: "(value: number[]) => void",
    default: "-",
    description: "Callback when the value changes.",
  },
  {
    name: "min",
    type: "number",
    default: "0",
    description: "The minimum value.",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "The maximum value.",
  },
  {
    name: "step",
    type: "number",
    default: "1",
    description: "The stepping interval.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the slider is disabled.",
  },
];

export default function SliderPage() {
  const [brightness, setBrightness] = useState([50]);
  const [chargeLimit, setChargeLimit] = useState([80]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Slider</h1>
        <p className="text-lg text-muted-foreground mt-2">
          An input where the user selects a value from within a given range.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { Slider } from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview code={`<Slider defaultValue={[50]} max={100} step={1} />`}>
          <Slider defaultValue={[50]} max={100} step={1} className="max-w-sm" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">With Label and Value</h3>
        <ComponentPreview
          code={`const [brightness, setBrightness] = useState([50]);

<div className="space-y-4">
  <div className="flex justify-between">
    <Label>Brightness</Label>
    <span className="text-sm text-muted-foreground">{brightness}%</span>
  </div>
  <Slider
    value={brightness}
    onValueChange={setBrightness}
    max={100}
    step={1}
  />
</div>`}
        >
          <div className="space-y-4 w-full max-w-sm">
            <div className="flex justify-between">
              <Label>Brightness</Label>
              <span className="text-sm text-muted-foreground">{brightness}%</span>
            </div>
            <Slider
              value={brightness}
              onValueChange={setBrightness}
              max={100}
              step={1}
            />
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Custom Range</h3>
        <ComponentPreview
          code={`<div className="space-y-4">
  <Label>Temperature (18°C - 28°C)</Label>
  <Slider defaultValue={[22]} min={18} max={28} step={0.5} />
</div>`}
        >
          <div className="space-y-4 w-full max-w-sm">
            <Label>Temperature (18°C - 28°C)</Label>
            <Slider defaultValue={[22]} min={18} max={28} step={0.5} />
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Charge Limit</h3>
        <ComponentPreview
          code={`const [chargeLimit, setChargeLimit] = useState([80]);

<div className="space-y-4">
  <div className="flex justify-between">
    <Label>Charge Limit</Label>
    <span className="text-sm text-muted-foreground">{chargeLimit}%</span>
  </div>
  <Slider
    value={chargeLimit}
    onValueChange={setChargeLimit}
    min={50}
    max={100}
    step={5}
  />
  <p className="text-sm text-muted-foreground">
    Limiting charge to 80% can extend battery life.
  </p>
</div>`}
        >
          <div className="space-y-4 w-full max-w-sm">
            <div className="flex justify-between">
              <Label>Charge Limit</Label>
              <span className="text-sm text-muted-foreground">{chargeLimit}%</span>
            </div>
            <Slider
              value={chargeLimit}
              onValueChange={setChargeLimit}
              min={50}
              max={100}
              step={5}
            />
            <p className="text-sm text-muted-foreground">
              Limiting charge to 80% can extend battery life.
            </p>
          </div>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Disabled</h3>
        <ComponentPreview code={`<Slider defaultValue={[50]} disabled />`}>
          <Slider defaultValue={[50]} disabled className="max-w-sm" />
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={sliderProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built on Radix UI Slider for full accessibility</li>
          <li>Keyboard navigation (Arrow keys to adjust)</li>
          <li>ARIA attributes automatically managed</li>
          <li>Visible focus indicator on thumb</li>
        </ul>
      </div>
    </div>
  );
}
