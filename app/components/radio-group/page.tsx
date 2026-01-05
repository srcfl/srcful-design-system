"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const radioGroupProps = [
  {
    name: "value",
    type: "string",
    default: "-",
    description: "The controlled value of the radio group.",
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
    description: "Whether the entire group is disabled.",
  },
];

export default function RadioGroupPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Radio Group</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A set of checkable buttons where only one can be checked at a time.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { RadioGroup, RadioGroupItem } from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview
          code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
        >
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Option Two</Label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">Charging Mode</h3>
        <ComponentPreview
          code={`<RadioGroup defaultValue="smart">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="smart" id="smart" />
    <Label htmlFor="smart">Smart Charging</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="fast" id="fast" />
    <Label htmlFor="fast">Fast Charging</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="eco" id="eco" />
    <Label htmlFor="eco">Eco Mode</Label>
  </div>
</RadioGroup>`}
        >
          <RadioGroup defaultValue="smart">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="smart" id="smart" />
              <Label htmlFor="smart">Smart Charging</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="fast" id="fast" />
              <Label htmlFor="fast">Fast Charging</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="eco" id="eco" />
              <Label htmlFor="eco">Eco Mode</Label>
            </div>
          </RadioGroup>
        </ComponentPreview>

        <h3 className="text-lg font-medium">With Descriptions</h3>
        <ComponentPreview
          code={`<RadioGroup defaultValue="automatic">
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="automatic" id="automatic" className="mt-1" />
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor="automatic">Automatic</Label>
      <p className="text-sm text-muted-foreground">
        System decides based on grid conditions.
      </p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="manual" id="manual" className="mt-1" />
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor="manual">Manual</Label>
      <p className="text-sm text-muted-foreground">
        You control when to charge and discharge.
      </p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="scheduled" id="scheduled" className="mt-1" />
    <div className="grid gap-1.5 leading-none">
      <Label htmlFor="scheduled">Scheduled</Label>
      <p className="text-sm text-muted-foreground">
        Set specific times for charging.
      </p>
    </div>
  </div>
</RadioGroup>`}
        >
          <RadioGroup defaultValue="automatic">
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="automatic" id="automatic" className="mt-1" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="automatic">Automatic</Label>
                <p className="text-sm text-muted-foreground">
                  System decides based on grid conditions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="manual" id="manual" className="mt-1" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="manual">Manual</Label>
                <p className="text-sm text-muted-foreground">
                  You control when to charge and discharge.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="scheduled" id="scheduled" className="mt-1" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="scheduled">Scheduled</Label>
                <p className="text-sm text-muted-foreground">
                  Set specific times for charging.
                </p>
              </div>
            </div>
          </RadioGroup>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Disabled</h3>
        <ComponentPreview
          code={`<RadioGroup defaultValue="option-one" disabled>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="disabled-one" />
    <Label htmlFor="disabled-one" className="text-muted-foreground">Disabled Selected</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="disabled-two" />
    <Label htmlFor="disabled-two" className="text-muted-foreground">Disabled</Label>
  </div>
</RadioGroup>`}
        >
          <RadioGroup defaultValue="option-one" disabled>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="disabled-one" />
              <Label htmlFor="disabled-one" className="text-muted-foreground">Disabled Selected</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="disabled-two" />
              <Label htmlFor="disabled-two" className="text-muted-foreground">Disabled</Label>
            </div>
          </RadioGroup>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Horizontal Layout</h3>
        <ComponentPreview
          code={`<RadioGroup defaultValue="daily" className="flex space-x-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="hourly" id="hourly" />
    <Label htmlFor="hourly">Hourly</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="daily" id="daily" />
    <Label htmlFor="daily">Daily</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="weekly" id="weekly" />
    <Label htmlFor="weekly">Weekly</Label>
  </div>
</RadioGroup>`}
        >
          <RadioGroup defaultValue="daily" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hourly" id="hourly" />
              <Label htmlFor="hourly">Hourly</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="daily" id="daily" />
              <Label htmlFor="daily">Daily</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="weekly" id="weekly" />
              <Label htmlFor="weekly">Weekly</Label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={radioGroupProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built on Radix UI RadioGroup for full accessibility</li>
          <li>Keyboard navigation (Arrow keys to move, Space to select)</li>
          <li>WAI-ARIA radiogroup pattern</li>
          <li>Always pair with Label components</li>
        </ul>
      </div>
    </div>
  );
}
