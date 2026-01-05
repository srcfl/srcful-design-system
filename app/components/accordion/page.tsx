"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const accordionProps = [
  {
    name: "type",
    type: '"single" | "multiple"',
    default: '"single"',
    description: "Whether one or multiple items can be opened at once.",
  },
  {
    name: "value",
    type: "string | string[]",
    default: "-",
    description: "The controlled value of the opened item(s).",
  },
  {
    name: "defaultValue",
    type: "string | string[]",
    default: "-",
    description: "The default opened item(s) when uncontrolled.",
  },
  {
    name: "collapsible",
    type: "boolean",
    default: "false",
    description: "When type is 'single', allows closing all items.",
  },
];

export default function AccordionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Accordion</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A vertically stacked set of interactive headings that reveal or hide content.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview
          code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the design system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">FAQ</h3>
        <ComponentPreview
          code={`<Accordion type="single" collapsible>
  <AccordionItem value="q1">
    <AccordionTrigger>What is Sourceful?</AccordionTrigger>
    <AccordionContent>
      Sourceful is a platform for coordinating distributed energy resources.
      We help connect solar panels, batteries, and EV chargers to create
      a smarter, more sustainable grid.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="q2">
    <AccordionTrigger>How do I connect my device?</AccordionTrigger>
    <AccordionContent>
      You can connect your device by going to Settings &gt; Devices &gt; Add Device.
      Follow the on-screen instructions to complete the setup.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="q3">
    <AccordionTrigger>What data do you collect?</AccordionTrigger>
    <AccordionContent>
      We collect energy production and consumption data from your devices.
      This data is used to optimize energy usage and provide insights.
      Your data is never sold to third parties.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="w-full max-w-lg">
            <AccordionItem value="q1">
              <AccordionTrigger>What is Sourceful?</AccordionTrigger>
              <AccordionContent>
                Sourceful is a platform for coordinating distributed energy resources.
                We help connect solar panels, batteries, and EV chargers to create
                a smarter, more sustainable grid.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>How do I connect my device?</AccordionTrigger>
              <AccordionContent>
                You can connect your device by going to Settings &gt; Devices &gt; Add Device.
                Follow the on-screen instructions to complete the setup.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>What data do you collect?</AccordionTrigger>
              <AccordionContent>
                We collect energy production and consumption data from your devices.
                This data is used to optimize energy usage and provide insights.
                Your data is never sold to third parties.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Multiple Open</h3>
        <ComponentPreview
          code={`<Accordion type="multiple">
  <AccordionItem value="solar">
    <AccordionTrigger>Solar Production</AccordionTrigger>
    <AccordionContent>
      Your solar panels produced 24.5 kWh today.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="battery">
    <AccordionTrigger>Battery Status</AccordionTrigger>
    <AccordionContent>
      Battery is at 85% capacity. Estimated 6 hours of backup.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="grid">
    <AccordionTrigger>Grid Connection</AccordionTrigger>
    <AccordionContent>
      Currently exporting 0.8 kW to the grid.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="multiple" className="w-full max-w-lg">
            <AccordionItem value="solar">
              <AccordionTrigger>Solar Production</AccordionTrigger>
              <AccordionContent>
                Your solar panels produced 24.5 kWh today.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="battery">
              <AccordionTrigger>Battery Status</AccordionTrigger>
              <AccordionContent>
                Battery is at 85% capacity. Estimated 6 hours of backup.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="grid">
              <AccordionTrigger>Grid Connection</AccordionTrigger>
              <AccordionContent>
                Currently exporting 0.8 kW to the grid.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Default Open</h3>
        <ComponentPreview
          code={`<Accordion type="single" defaultValue="item-1" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Open by default</AccordionTrigger>
    <AccordionContent>
      This item is open when the page loads.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Closed by default</AccordionTrigger>
    <AccordionContent>
      This item starts closed.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" defaultValue="item-1" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Open by default</AccordionTrigger>
              <AccordionContent>
                This item is open when the page loads.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Closed by default</AccordionTrigger>
              <AccordionContent>
                This item starts closed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={accordionProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built on Radix UI Accordion for full accessibility</li>
          <li>Keyboard navigation (Arrow keys, Home, End)</li>
          <li>WAI-ARIA accordion pattern</li>
          <li>Proper focus management</li>
        </ul>
      </div>
    </div>
  );
}
