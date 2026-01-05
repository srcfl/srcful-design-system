"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const tabsProps = [
  {
    name: "value",
    type: "string",
    default: "-",
    description: "The controlled value of the active tab.",
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
    description: "Callback when the active tab changes.",
  },
];

export default function TabsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Tabs</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A set of layered sections of content that display one panel at a time.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@srcful/ui"`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <ComponentPreview
          code={`<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Make changes to your account here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Change your password here.</p>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="account" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="text-sm text-muted-foreground pt-2">Make changes to your account here.</p>
            </TabsContent>
            <TabsContent value="password">
              <p className="text-sm text-muted-foreground pt-2">Change your password here.</p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Examples
        </h2>

        <h3 className="text-lg font-medium">Device Details</h3>
        <ComponentPreview
          code={`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <div className="space-y-2 pt-2">
      <p className="font-medium">Solar Inverter</p>
      <p className="text-sm text-muted-foreground">Status: Online</p>
      <p className="text-sm text-muted-foreground">Current Output: 5.2 kW</p>
    </div>
  </TabsContent>
  <TabsContent value="analytics">
    <div className="space-y-2 pt-2">
      <p className="font-medium">Energy Production</p>
      <p className="text-sm text-muted-foreground">Today: 24.5 kWh</p>
      <p className="text-sm text-muted-foreground">This Month: 680 kWh</p>
    </div>
  </TabsContent>
  <TabsContent value="settings">
    <div className="space-y-2 pt-2">
      <p className="font-medium">Device Settings</p>
      <p className="text-sm text-muted-foreground">Configure device parameters.</p>
    </div>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="overview" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="space-y-2 pt-2">
                <p className="font-medium">Solar Inverter</p>
                <p className="text-sm text-muted-foreground">Status: Online</p>
                <p className="text-sm text-muted-foreground">Current Output: 5.2 kW</p>
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <div className="space-y-2 pt-2">
                <p className="font-medium">Energy Production</p>
                <p className="text-sm text-muted-foreground">Today: 24.5 kWh</p>
                <p className="text-sm text-muted-foreground">This Month: 680 kWh</p>
              </div>
            </TabsContent>
            <TabsContent value="settings">
              <div className="space-y-2 pt-2">
                <p className="font-medium">Device Settings</p>
                <p className="text-sm text-muted-foreground">Configure device parameters.</p>
              </div>
            </TabsContent>
          </Tabs>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Full Width Tabs</h3>
        <ComponentPreview
          code={`<Tabs defaultValue="day" className="w-full">
  <TabsList className="w-full">
    <TabsTrigger value="day" className="flex-1">Day</TabsTrigger>
    <TabsTrigger value="week" className="flex-1">Week</TabsTrigger>
    <TabsTrigger value="month" className="flex-1">Month</TabsTrigger>
    <TabsTrigger value="year" className="flex-1">Year</TabsTrigger>
  </TabsList>
  <TabsContent value="day">
    <p className="text-sm text-muted-foreground pt-2">Daily view content</p>
  </TabsContent>
  <TabsContent value="week">
    <p className="text-sm text-muted-foreground pt-2">Weekly view content</p>
  </TabsContent>
  <TabsContent value="month">
    <p className="text-sm text-muted-foreground pt-2">Monthly view content</p>
  </TabsContent>
  <TabsContent value="year">
    <p className="text-sm text-muted-foreground pt-2">Yearly view content</p>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="day" className="w-full max-w-md">
            <TabsList className="w-full">
              <TabsTrigger value="day" className="flex-1">Day</TabsTrigger>
              <TabsTrigger value="week" className="flex-1">Week</TabsTrigger>
              <TabsTrigger value="month" className="flex-1">Month</TabsTrigger>
              <TabsTrigger value="year" className="flex-1">Year</TabsTrigger>
            </TabsList>
            <TabsContent value="day">
              <p className="text-sm text-muted-foreground pt-2">Daily view content</p>
            </TabsContent>
            <TabsContent value="week">
              <p className="text-sm text-muted-foreground pt-2">Weekly view content</p>
            </TabsContent>
            <TabsContent value="month">
              <p className="text-sm text-muted-foreground pt-2">Monthly view content</p>
            </TabsContent>
            <TabsContent value="year">
              <p className="text-sm text-muted-foreground pt-2">Yearly view content</p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>

        <h3 className="text-lg font-medium">Energy Sources</h3>
        <ComponentPreview
          code={`<Tabs defaultValue="solar">
  <TabsList>
    <TabsTrigger value="solar">Solar</TabsTrigger>
    <TabsTrigger value="battery">Battery</TabsTrigger>
    <TabsTrigger value="grid">Grid</TabsTrigger>
  </TabsList>
  <TabsContent value="solar">
    <div className="rounded-lg border p-4 mt-2">
      <div className="text-2xl font-bold">5.2 kW</div>
      <p className="text-sm text-muted-foreground">Current solar production</p>
    </div>
  </TabsContent>
  <TabsContent value="battery">
    <div className="rounded-lg border p-4 mt-2">
      <div className="text-2xl font-bold">85%</div>
      <p className="text-sm text-muted-foreground">Battery charge level</p>
    </div>
  </TabsContent>
  <TabsContent value="grid">
    <div className="rounded-lg border p-4 mt-2">
      <div className="text-2xl font-bold">0.8 kW</div>
      <p className="text-sm text-muted-foreground">Exporting to grid</p>
    </div>
  </TabsContent>
</Tabs>`}
        >
          <Tabs defaultValue="solar" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="solar">Solar</TabsTrigger>
              <TabsTrigger value="battery">Battery</TabsTrigger>
              <TabsTrigger value="grid">Grid</TabsTrigger>
            </TabsList>
            <TabsContent value="solar">
              <div className="rounded-lg border p-4 mt-2">
                <div className="text-2xl font-bold">5.2 kW</div>
                <p className="text-sm text-muted-foreground">Current solar production</p>
              </div>
            </TabsContent>
            <TabsContent value="battery">
              <div className="rounded-lg border p-4 mt-2">
                <div className="text-2xl font-bold">85%</div>
                <p className="text-sm text-muted-foreground">Battery charge level</p>
              </div>
            </TabsContent>
            <TabsContent value="grid">
              <div className="rounded-lg border p-4 mt-2">
                <div className="text-2xl font-bold">0.8 kW</div>
                <p className="text-sm text-muted-foreground">Exporting to grid</p>
              </div>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <PropsTable props={tabsProps} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Accessibility
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built on Radix UI Tabs for full accessibility</li>
          <li>Keyboard navigation (Arrow keys, Home, End)</li>
          <li>WAI-ARIA tablist pattern</li>
          <li>Tab panels are properly associated with triggers</li>
        </ul>
      </div>
    </div>
  );
}
