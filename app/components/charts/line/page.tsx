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
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentNav } from "@/components/component-nav";

const energyData = [
  { time: "00:00", solar: 0, consumption: 45 },
  { time: "04:00", solar: 0, consumption: 38 },
  { time: "08:00", solar: 120, consumption: 85 },
  { time: "12:00", solar: 280, consumption: 95 },
  { time: "16:00", solar: 180, consumption: 120 },
  { time: "20:00", solar: 20, consumption: 150 },
  { time: "24:00", solar: 0, consumption: 60 },
];

const monthlyData = [
  { month: "Jan", solar: 186, grid: 80 },
  { month: "Feb", solar: 205, grid: 65 },
  { month: "Mar", solar: 237, grid: 50 },
  { month: "Apr", solar: 273, grid: 40 },
  { month: "May", solar: 309, grid: 30 },
  { month: "Jun", solar: 314, grid: 25 },
];

const chartConfig = {
  solar: {
    label: "Solar",
    color: "hsl(142, 76%, 36%)",
  },
  consumption: {
    label: "Consumption",
    color: "hsl(0, 84%, 60%)",
  },
  grid: {
    label: "Grid",
    color: "hsl(220, 14%, 50%)",
  },
} satisfies ChartConfig;

export default function LineChartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Line Chart</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Track trends and changes over time with connected data points.
        </p>
      </div>

      {/* Basic Line Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Basic Line Chart
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Daily Solar Production</CardTitle>
            <CardDescription>Solar output throughout the day in watts</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="solar"
                  stroke="var(--color-solar)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Multi-Line Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Multi-Line Chart
        </h2>
        <p className="text-muted-foreground">
          Compare multiple data series on the same chart.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Production vs Consumption</CardTitle>
            <CardDescription>Solar production compared to household consumption</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="solar"
                  stroke="var(--color-solar)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="consumption"
                  stroke="var(--color-consumption)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* With Dots */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          With Data Points
        </h2>
        <p className="text-muted-foreground">
          Show individual data points for precise readings.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Monthly Trend</CardTitle>
            <CardDescription>Solar vs grid import with data points</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="solar"
                  stroke="var(--color-solar)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-solar)", strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="grid"
                  stroke="var(--color-grid)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-grid)", strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Dashed Lines */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Dashed & Reference Lines
        </h2>
        <p className="text-muted-foreground">
          Use dashed lines for targets or thresholds.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Production with Target</CardTitle>
            <CardDescription>Actual production vs daily target</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ReferenceLine y={100} stroke="hsl(48, 100%, 50%)" strokeDasharray="5 5" label={{ value: "Target", fill: "hsl(48, 100%, 40%)", fontSize: 12 }} />
                <Line
                  type="monotone"
                  dataKey="solar"
                  stroke="var(--color-solar)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Linear vs Curved */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Line Interpolation
        </h2>
        <p className="text-muted-foreground">
          Choose between smooth curves and straight lines.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Monotone (Smooth)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <LineChart data={monthlyData}>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} hide />
                  <Line type="monotone" dataKey="solar" stroke="var(--color-solar)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Linear (Straight)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <LineChart data={monthlyData}>
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} hide />
                  <Line type="linear" dataKey="solar" stroke="var(--color-solar)" strokeWidth={2} dot={false} />
                </LineChart>
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
            <code>{`import { Line, LineChart, XAxis, YAxis, CartesianGrid, ReferenceLine } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

<ChartContainer config={chartConfig} className="min-h-[300px]">
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <XAxis dataKey="time" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line
      type="monotone"       {/* or "linear", "step" */}
      dataKey="solar"
      stroke="var(--color-solar)"
      strokeWidth={2}
      dot={false}           {/* hide dots, or customize */}
      activeDot={{ r: 6 }}  {/* hover dot size */}
    />
  </LineChart>
</ChartContainer>

{/* Add reference line for targets */}
<ReferenceLine y={100} stroke="yellow" strokeDasharray="5 5" />`}</code>
          </pre>
        </div>
      </div>

      <ComponentNav currentHref="/components/charts/line" />
    </div>
  );
}
