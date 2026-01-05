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
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentNav } from "@/components/component-nav";

const energyData = [
  { month: "Jan", solar: 186, grid: 80 },
  { month: "Feb", solar: 205, grid: 65 },
  { month: "Mar", solar: 237, grid: 50 },
  { month: "Apr", solar: 273, grid: 40 },
  { month: "May", solar: 309, grid: 30 },
  { month: "Jun", solar: 314, grid: 25 },
];

const horizontalData = [
  { source: "Solar", value: 314 },
  { source: "Wind", value: 186 },
  { source: "Hydro", value: 95 },
  { source: "Grid", value: 65 },
];

const chartConfig = {
  solar: {
    label: "Solar",
    color: "hsl(142, 76%, 36%)",
  },
  grid: {
    label: "Grid",
    color: "hsl(220, 14%, 50%)",
  },
  value: {
    label: "Energy",
    color: "hsl(142, 76%, 36%)",
  },
} satisfies ChartConfig;

export default function BarChartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Bar Chart</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Compare values across categories with vertical or horizontal bars.
        </p>
      </div>

      {/* Basic Bar Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Basic Bar Chart
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Monthly Solar Production</CardTitle>
            <CardDescription>Energy generated in kWh per month</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <BarChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="solar" fill="var(--color-solar)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Grouped Bar Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Grouped Bar Chart
        </h2>
        <p className="text-muted-foreground">
          Compare multiple data series side by side.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Solar vs Grid</CardTitle>
            <CardDescription>Monthly comparison of energy sources</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <BarChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="solar" fill="var(--color-solar)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="grid" fill="var(--color-grid)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Stacked Bar Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Stacked Bar Chart
        </h2>
        <p className="text-muted-foreground">
          Stack bars to show total and composition.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Total Energy Mix</CardTitle>
            <CardDescription>Stacked view of solar and grid import</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <BarChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="grid" stackId="a" fill="var(--color-grid)" />
                <Bar dataKey="solar" stackId="a" fill="var(--color-solar)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Horizontal Bar Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Horizontal Bar Chart
        </h2>
        <p className="text-muted-foreground">
          Use horizontal bars for categories with long labels.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Energy by Source</CardTitle>
            <CardDescription>Total energy contribution by source type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
              <BarChart data={horizontalData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" tickLine={false} axisLine={false} />
                <YAxis dataKey="source" type="category" tickLine={false} axisLine={false} width={60} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="var(--color-value)" radius={[0, 4, 4, 0]}>
                  {horizontalData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? "hsl(142, 76%, 36%)" : "hsl(220, 14%, 50%)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Negative Values */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          With Negative Values
        </h2>
        <p className="text-muted-foreground">
          Display both positive and negative values (e.g., energy import/export).
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Net Energy Flow</CardTitle>
            <CardDescription>Positive = export, Negative = import</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{ net: { label: "Net", color: "hsl(142, 76%, 36%)" } }} className="min-h-[300px] w-full">
              <BarChart data={[
                { month: "Jan", net: -50 },
                { month: "Feb", net: -20 },
                { month: "Mar", net: 30 },
                { month: "Apr", net: 80 },
                { month: "May", net: 120 },
                { month: "Jun", net: 150 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="net" radius={4}>
                  {[
                    { month: "Jan", net: -50 },
                    { month: "Feb", net: -20 },
                    { month: "Mar", net: 30 },
                    { month: "Apr", net: 80 },
                    { month: "May", net: 120 },
                    { month: "Jun", net: 150 },
                  ].map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.net >= 0 ? "hsl(142, 76%, 36%)" : "hsl(0, 84%, 60%)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

<ChartContainer config={chartConfig} className="min-h-[300px]">
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="solar" fill="var(--color-solar)" radius={[4, 4, 0, 0]} />
  </BarChart>
</ChartContainer>

{/* Stacked bars */}
<Bar dataKey="grid" stackId="a" fill="var(--color-grid)" />
<Bar dataKey="solar" stackId="a" fill="var(--color-solar)" />

{/* Horizontal layout */}
<BarChart data={data} layout="vertical">
  <XAxis type="number" />
  <YAxis dataKey="category" type="category" />
</BarChart>`}</code>
          </pre>
        </div>
      </div>

      <ComponentNav currentHref="/components/charts/bar" />
    </div>
  );
}
