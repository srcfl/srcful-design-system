"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentNav } from "@/components/component-nav";
import { Zap, Sun, Battery } from "lucide-react";

const energyData = [
  { month: "Jan", solar: 186, grid: 80, battery: 45 },
  { month: "Feb", solar: 205, grid: 65, battery: 52 },
  { month: "Mar", solar: 237, grid: 50, battery: 61 },
  { month: "Apr", solar: 273, grid: 40, battery: 70 },
  { month: "May", solar: 309, grid: 30, battery: 82 },
  { month: "Jun", solar: 314, grid: 25, battery: 89 },
];

const chartConfig = {
  solar: {
    label: "Solar Production",
    color: "hsl(142, 76%, 36%)",
    icon: Sun,
  },
  grid: {
    label: "Grid Import",
    color: "hsl(220, 14%, 50%)",
    icon: Zap,
  },
  battery: {
    label: "Battery Storage",
    color: "hsl(48, 100%, 50%)",
    icon: Battery,
  },
} satisfies ChartConfig;

const simpleConfig = {
  solar: {
    label: "Solar",
    color: "hsl(142, 76%, 36%)",
  },
  grid: {
    label: "Grid",
    color: "hsl(220, 14%, 50%)",
  },
} satisfies ChartConfig;

export default function TooltipPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Chart Tooltip</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Customize tooltips to show contextual information on hover.
        </p>
      </div>

      {/* Default Tooltip */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Default Tooltip
        </h2>
        <p className="text-muted-foreground">
          The default tooltip shows the label and value from your chart config.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Energy Data</CardTitle>
            <CardDescription>Hover over bars to see values</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={simpleConfig} className="min-h-[250px] w-full">
              <BarChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="solar" fill="var(--color-solar)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Indicator Styles */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Indicator Styles
        </h2>
        <p className="text-muted-foreground">
          Choose between dot, line, or dashed indicators.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Dot (Default)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={simpleConfig} className="min-h-[200px] w-full">
                <LineChart data={energyData}>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                  <Line type="monotone" dataKey="solar" stroke="var(--color-solar)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="grid" stroke="var(--color-grid)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Line</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={simpleConfig} className="min-h-[200px] w-full">
                <LineChart data={energyData}>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                  <Line type="monotone" dataKey="solar" stroke="var(--color-solar)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="grid" stroke="var(--color-grid)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Dashed</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={simpleConfig} className="min-h-[200px] w-full">
                <LineChart data={energyData}>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
                  <Line type="monotone" dataKey="solar" stroke="var(--color-solar)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="grid" stroke="var(--color-grid)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hide Label */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Hide Label
        </h2>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1 rounded">hideLabel</code> for single-series charts or pie charts.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Solar Only</CardTitle>
            <CardDescription>Tooltip without label header</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={simpleConfig} className="min-h-[250px] w-full">
              <BarChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Bar dataKey="solar" fill="var(--color-solar)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          With Icons
        </h2>
        <p className="text-muted-foreground">
          Add icons to your chart config for richer tooltips.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Energy Mix</CardTitle>
            <CardDescription>Icons appear in tooltip and legend</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <BarChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="solar" fill="var(--color-solar)" radius={4} />
                <Bar dataKey="grid" fill="var(--color-grid)" radius={4} />
                <Bar dataKey="battery" fill="var(--color-battery)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { Sun, Zap, Battery } from "lucide-react"

const chartConfig = {
  solar: {
    label: "Solar Production",
    color: "hsl(142, 76%, 36%)",
    icon: Sun,  // Icons show in tooltip
  },
  grid: {
    label: "Grid Import",
    color: "hsl(220, 14%, 50%)",
    icon: Zap,
  },
}`}</code>
          </pre>
        </div>
      </div>

      {/* Custom Formatter */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Custom Formatter
        </h2>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1 rounded">labelFormatter</code> to customize the tooltip header.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Formatted Labels</CardTitle>
            <CardDescription>Custom date formatting in tooltip</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={simpleConfig} className="min-h-[250px] w-full">
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => `${value} 2024`}
                    />
                  }
                />
                <Line type="monotone" dataKey="solar" stroke="var(--color-solar)" strokeWidth={2} dot={false} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Legend Positioning */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Legend Options
        </h2>
        <p className="text-muted-foreground">
          Position the legend at the top or bottom of your chart.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Legend Top</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={simpleConfig} className="min-h-[250px] w-full">
                <BarChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend verticalAlign="top" content={<ChartLegendContent />} />
                  <Bar dataKey="solar" fill="var(--color-solar)" radius={4} />
                  <Bar dataKey="grid" fill="var(--color-grid)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Legend Bottom</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={simpleConfig} className="min-h-[250px] w-full">
                <BarChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend verticalAlign="bottom" content={<ChartLegendContent />} />
                  <Bar dataKey="solar" fill="var(--color-solar)" radius={4} />
                  <Bar dataKey="grid" fill="var(--color-grid)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"

{/* Basic tooltip */}
<ChartTooltip content={<ChartTooltipContent />} />

{/* Tooltip options */}
<ChartTooltip
  content={
    <ChartTooltipContent
      hideLabel          {/* Hide label header */}
      hideIndicator      {/* Hide color indicator */}
      indicator="dot"    {/* "dot" | "line" | "dashed" */}
      labelFormatter={(value) => \`Custom: \${value}\`}
    />
  }
/>

{/* Legend */}
<ChartLegend
  verticalAlign="top"  {/* "top" | "bottom" */}
  content={<ChartLegendContent nameKey="name" />}
/>`}</code>
          </pre>
        </div>
      </div>

      {/* ChartConfig Reference */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          ChartConfig Reference
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 font-medium">Property</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-mono text-xs">label</td>
                <td className="p-3 text-muted-foreground">ReactNode</td>
                <td className="p-3">Display name in tooltip and legend</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-mono text-xs">color</td>
                <td className="p-3 text-muted-foreground">string</td>
                <td className="p-3">CSS color value (HSL recommended)</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-mono text-xs">icon</td>
                <td className="p-3 text-muted-foreground">ComponentType</td>
                <td className="p-3">Icon component (e.g., Lucide icon)</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-mono text-xs">theme</td>
                <td className="p-3 text-muted-foreground">&#123; light, dark &#125;</td>
                <td className="p-3">Theme-specific colors</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ComponentNav currentHref="/components/charts/tooltip" />
    </div>
  );
}
