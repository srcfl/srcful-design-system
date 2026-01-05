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
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentNav } from "@/components/component-nav";

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
    label: "Solar",
    color: "hsl(142, 76%, 36%)",
  },
  grid: {
    label: "Grid",
    color: "hsl(220, 14%, 50%)",
  },
  battery: {
    label: "Battery",
    color: "hsl(48, 100%, 50%)",
  },
} satisfies ChartConfig;

export default function AreaChartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Area Chart</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Visualize data over time with filled areas. Great for showing volume and trends.
        </p>
      </div>

      {/* Basic Area Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Basic Area Chart
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Energy Production</CardTitle>
            <CardDescription>Monthly solar energy production in kWh</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <AreaChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="solar"
                  fill="var(--color-solar)"
                  fillOpacity={0.3}
                  stroke="var(--color-solar)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Stacked Area Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Stacked Area Chart
        </h2>
        <p className="text-muted-foreground">
          Show multiple data series stacked on top of each other.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Energy Mix</CardTitle>
            <CardDescription>Solar, grid, and battery contribution over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <AreaChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Area
                  type="monotone"
                  dataKey="battery"
                  stackId="1"
                  fill="var(--color-battery)"
                  fillOpacity={0.6}
                  stroke="var(--color-battery)"
                />
                <Area
                  type="monotone"
                  dataKey="grid"
                  stackId="1"
                  fill="var(--color-grid)"
                  fillOpacity={0.6}
                  stroke="var(--color-grid)"
                />
                <Area
                  type="monotone"
                  dataKey="solar"
                  stackId="1"
                  fill="var(--color-solar)"
                  fillOpacity={0.6}
                  stroke="var(--color-solar)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Gradient Area Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Gradient Fill
        </h2>
        <p className="text-muted-foreground">
          Use gradients for a polished, modern look.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Solar Production</CardTitle>
            <CardDescription>With gradient fill effect</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <AreaChart data={energyData}>
                <defs>
                  <linearGradient id="solarGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="hsl(142, 76%, 36%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="solar"
                  fill="url(#solarGradient)"
                  stroke="var(--color-solar)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Step Area Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Step Area Chart
        </h2>
        <p className="text-muted-foreground">
          Use step interpolation for discrete data changes.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Grid Import</CardTitle>
            <CardDescription>Step-wise grid import visualization</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <AreaChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="step"
                  dataKey="grid"
                  fill="var(--color-grid)"
                  fillOpacity={0.3}
                  stroke="var(--color-grid)"
                  strokeWidth={2}
                />
              </AreaChart>
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
            <code>{`import { Area, AreaChart, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  solar: { label: "Solar", color: "hsl(142, 76%, 36%)" },
}

<ChartContainer config={chartConfig} className="min-h-[300px]">
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Area
      type="monotone"
      dataKey="solar"
      fill="var(--color-solar)"
      fillOpacity={0.3}
      stroke="var(--color-solar)"
    />
  </AreaChart>
</ChartContainer>`}</code>
          </pre>
        </div>
      </div>

      <ComponentNav currentHref="/components/charts/area" />
    </div>
  );
}
