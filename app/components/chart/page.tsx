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
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

const energyData = [
  { month: "Jan", solar: 186, grid: 80 },
  { month: "Feb", solar: 205, grid: 65 },
  { month: "Mar", solar: 237, grid: 50 },
  { month: "Apr", solar: 273, grid: 40 },
  { month: "May", solar: 309, grid: 30 },
  { month: "Jun", solar: 314, grid: 25 },
];

const pieData = [
  { name: "solar", value: 65, fill: "var(--color-solar)" },
  { name: "grid", value: 25, fill: "var(--color-grid)" },
  { name: "battery", value: 10, fill: "var(--color-battery)" },
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

export default function ChartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Chart</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Beautiful charts built with Recharts. Composable, themeable, and accessible.
        </p>
      </div>

      {/* Line Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Line Chart
        </h2>
        <p className="leading-7 text-muted-foreground">
          Track energy production and consumption over time.
        </p>
        <div className="rounded-lg border p-4">
          <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <LineChart data={energyData}>
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
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="grid"
                stroke="var(--color-grid)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>

      {/* Area Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Area Chart
        </h2>
        <p className="leading-7 text-muted-foreground">
          Visualize energy flow with filled areas.
        </p>
        <div className="rounded-lg border p-4">
          <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <AreaChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Area
                type="monotone"
                dataKey="solar"
                fill="var(--color-solar)"
                fillOpacity={0.3}
                stroke="var(--color-solar)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="grid"
                fill="var(--color-grid)"
                fillOpacity={0.3}
                stroke="var(--color-grid)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Bar Chart
        </h2>
        <p className="leading-7 text-muted-foreground">
          Compare energy sources month over month.
        </p>
        <div className="rounded-lg border p-4">
          <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <BarChart data={energyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="solar" fill="var(--color-solar)" radius={4} />
              <Bar dataKey="grid" fill="var(--color-grid)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Pie Chart
        </h2>
        <p className="leading-7 text-muted-foreground">
          Show energy mix distribution.
        </p>
        <div className="rounded-lg border p-4">
          <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                strokeWidth={2}
              />
              <ChartLegend content={<ChartLegendContent nameKey="name" />} />
            </PieChart>
          </ChartContainer>
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", solar: 186 },
  { month: "Feb", solar: 205 },
]

const chartConfig = {
  solar: {
    label: "Solar",
    color: "hsl(142, 76%, 36%)",
  },
} satisfies ChartConfig

export function MyChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px]">
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="solar" fill="var(--color-solar)" />
      </BarChart>
    </ChartContainer>
  )
}`}</code>
          </pre>
        </div>
      </div>

      {/* Chart Config */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Chart Config
        </h2>
        <p className="leading-7 text-muted-foreground">
          Define colors and labels for your chart data series using ChartConfig.
        </p>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`const chartConfig = {
  solar: {
    label: "Solar Production",
    color: "hsl(142, 76%, 36%)", // Sourceful green
  },
  grid: {
    label: "Grid Import",
    color: "hsl(220, 14%, 50%)", // Gray
  },
  battery: {
    label: "Battery",
    color: "hsl(48, 100%, 50%)", // Yellow
  },
} satisfies ChartConfig`}</code>
          </pre>
        </div>
      </div>

      {/* Tips */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Tips
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Always set <code className="bg-muted px-1 rounded text-sm">min-h-[VALUE]</code> on ChartContainer for responsiveness</li>
          <li>Use CSS variables like <code className="bg-muted px-1 rounded text-sm">var(--color-solar)</code> to reference config colors</li>
          <li>ChartTooltipContent automatically formats values and shows labels</li>
          <li>Add <code className="bg-muted px-1 rounded text-sm">vertical=&#123;false&#125;</code> to CartesianGrid for cleaner look</li>
        </ul>
      </div>
    </div>
  );
}
