"use client";

import { useState } from "react";
import { EMSSchedule, generateDemoSchedule, type ScheduleMode } from "@/components/ui/ems-schedule";
import { ComponentNav } from "@/components/component-nav";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function EMSSchedulePage() {
  const [currentHour, setCurrentHour] = useState(14);
  const demoSchedule = generateDemoSchedule();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">EMS Schedule</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A 24-hour timeline visualization for Energy Management System schedules.
        </p>
      </div>

      {/* Demo */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Interactive Demo
        </h2>
        <div className="max-w-lg">
          <EMSSchedule
            slots={demoSchedule}
            currentHour={currentHour}
            title="Today's Schedule"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Adjust Current Hour
        </h2>
        <div className="max-w-md space-y-2">
          <div className="flex justify-between">
            <Label>Current Hour</Label>
            <span className="text-sm text-muted-foreground">
              {currentHour.toString().padStart(2, "0")}:00
            </span>
          </div>
          <Slider
            value={[currentHour]}
            onValueChange={([v]) => setCurrentHour(v)}
            min={0}
            max={23}
            step={1}
          />
        </div>
      </div>

      {/* Schedule Modes */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Schedule Modes
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-3 w-3 rounded bg-sourceful-gray-200 dark:bg-sourceful-gray-700" />
              <span className="font-medium">Idle</span>
            </div>
            <p className="text-sm text-muted-foreground">System is inactive, no energy management</p>
          </div>
          <div className="p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-3 w-3 rounded bg-sourceful-green-200 dark:bg-sourceful-green-800" />
              <span className="font-medium">Self-Consumption</span>
            </div>
            <p className="text-sm text-muted-foreground">Maximize use of self-generated solar power</p>
          </div>
          <div className="p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-3 w-3 rounded bg-pink-200 dark:bg-pink-800" />
              <span className="font-medium">Charging</span>
            </div>
            <p className="text-sm text-muted-foreground">Battery charging from grid (low price hours)</p>
          </div>
          <div className="p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-3 w-3 rounded bg-blue-200 dark:bg-blue-800" />
              <span className="font-medium">Exporting</span>
            </div>
            <p className="text-sm text-muted-foreground">Exporting excess solar to grid</p>
          </div>
          <div className="p-4 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-3 w-3 rounded bg-orange-200 dark:bg-orange-800" />
              <span className="font-medium">Discharging</span>
            </div>
            <p className="text-sm text-muted-foreground">Battery discharge during peak prices</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>24-hour timeline visualization</li>
          <li>5 schedule modes with distinct colors</li>
          <li>Current hour indicator with ring highlight</li>
          <li>Optional legend display</li>
          <li>Hover tooltips showing hour and mode</li>
          <li>Dark mode support</li>
          <li>Customizable title</li>
        </ul>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`import { EMSSchedule, generateDemoSchedule } from "@/components/ui/ems-schedule"

// Basic usage with generated demo data
<EMSSchedule
  slots={generateDemoSchedule()}
  currentHour={14}
  title="Today's Schedule"
/>

// Custom schedule
<EMSSchedule
  slots={[
    { hour: 0, mode: "charging" },
    { hour: 6, mode: "self-consumption" },
    { hour: 12, mode: "exporting" },
    { hour: 18, mode: "discharging" },
  ]}
  currentHour={new Date().getHours()}
  showLegend={true}
/>`}</code>
          </pre>
        </div>
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Default</th>
                <th className="text-left p-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">slots</td>
                <td className="p-3 font-mono text-xs">ScheduleSlot[]</td>
                <td className="p-3 text-muted-foreground">-</td>
                <td className="p-3">Array of schedule slots with hour and mode</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">currentHour</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 text-muted-foreground">-</td>
                <td className="p-3">Current hour to highlight (0-23)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">showLegend</td>
                <td className="p-3 font-mono text-xs">boolean</td>
                <td className="p-3 text-muted-foreground">true</td>
                <td className="p-3">Whether to show the legend</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">title</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 text-muted-foreground">"Schedule"</td>
                <td className="p-3">Card title</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 text-muted-foreground">-</td>
                <td className="p-3">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ComponentNav currentHref="/components/ems-schedule" />
    </div>
  );
}







