"use client";

import Link from "next/link";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  PolarGrid,
  PolarAngleAxis,
  XAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentNav } from "@/components/component-nav";

const sampleData = [
  { month: "Jan", value: 186 },
  { month: "Feb", value: 205 },
  { month: "Mar", value: 237 },
  { month: "Apr", value: 273 },
  { month: "May", value: 309 },
  { month: "Jun", value: 314 },
];

const pieData = [
  { name: "solar", value: 65, fill: "hsl(142, 76%, 36%)" },
  { name: "grid", value: 25, fill: "hsl(220, 14%, 50%)" },
  { name: "battery", value: 10, fill: "hsl(48, 100%, 50%)" },
];

const radarData = [
  { metric: "A", value: 85 },
  { metric: "B", value: 90 },
  { metric: "C", value: 72 },
  { metric: "D", value: 65 },
  { metric: "E", value: 88 },
];

const chartConfig = {
  value: { label: "Value", color: "hsl(142, 76%, 36%)" },
} satisfies ChartConfig;

const chartTypes = [
  {
    title: "Area Chart",
    description: "Visualize data with filled areas",
    href: "/components/charts/area",
    preview: (
      <ChartContainer config={chartConfig} className="h-[120px] w-full">
        <AreaChart data={sampleData}>
          <Area type="monotone" dataKey="value" fill="hsl(142, 76%, 36%)" fillOpacity={0.3} stroke="hsl(142, 76%, 36%)" />
        </AreaChart>
      </ChartContainer>
    ),
  },
  {
    title: "Bar Chart",
    description: "Compare values across categories",
    href: "/components/charts/bar",
    preview: (
      <ChartContainer config={chartConfig} className="h-[120px] w-full">
        <BarChart data={sampleData}>
          <Bar dataKey="value" fill="hsl(142, 76%, 36%)" radius={4} />
        </BarChart>
      </ChartContainer>
    ),
  },
  {
    title: "Line Chart",
    description: "Track trends over time",
    href: "/components/charts/line",
    preview: (
      <ChartContainer config={chartConfig} className="h-[120px] w-full">
        <LineChart data={sampleData}>
          <Line type="monotone" dataKey="value" stroke="hsl(142, 76%, 36%)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    ),
  },
  {
    title: "Pie Chart",
    description: "Show proportions and percentages",
    href: "/components/charts/pie",
    preview: (
      <ChartContainer config={chartConfig} className="h-[120px] w-full">
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={25} outerRadius={45} />
        </PieChart>
      </ChartContainer>
    ),
  },
  {
    title: "Radar Chart",
    description: "Display multivariate data",
    href: "/components/charts/radar",
    preview: (
      <ChartContainer config={chartConfig} className="h-[120px] w-full">
        <RadarChart data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" tick={false} />
          <Radar dataKey="value" fill="hsl(142, 76%, 36%)" fillOpacity={0.3} stroke="hsl(142, 76%, 36%)" />
        </RadarChart>
      </ChartContainer>
    ),
  },
  {
    title: "Radial Chart",
    description: "Progress rings and gauges",
    href: "/components/charts/radial",
    preview: (
      <ChartContainer config={chartConfig} className="h-[120px] w-full">
        <RadialBarChart data={[{ value: 72, fill: "hsl(142, 76%, 36%)" }]} startAngle={90} endAngle={-270} innerRadius={30} outerRadius={50}>
          <RadialBar background dataKey="value" cornerRadius={5} />
        </RadialBarChart>
      </ChartContainer>
    ),
  },
];

export default function ChartsOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Charts</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Beautiful, accessible charts built with Recharts. Copy and paste into your apps.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Chart Types
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {chartTypes.map((chart) => (
            <Link key={chart.title} href={chart.href} className="group block">
              <Card className="h-full transition-all duration-200 group-hover:border-primary group-hover:bg-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {chart.title}
                  </CardTitle>
                  <CardDescription>{chart.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {chart.preview}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Customization
        </h2>
        <Link href="/components/charts/tooltip" className="group block">
          <Card className="transition-all duration-200 group-hover:border-primary group-hover:bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                Tooltip & Legend
              </CardTitle>
              <CardDescription>
                Customize tooltips, legends, and chart configuration options.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`npx shadcn@latest add chart`}</code>
          </pre>
        </div>
        <p className="text-muted-foreground">
          This will install the chart component and its dependencies (Recharts).
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Quick Start
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const chartConfig = {
  solar: {
    label: "Solar",
    color: "hsl(142, 76%, 36%)",
  },
}

export function MyChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px]">
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="solar" fill="var(--color-solar)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Built with Recharts - composable and flexible</li>
          <li>Automatic dark mode support via CSS variables</li>
          <li>Accessible with keyboard navigation</li>
          <li>Customizable tooltips and legends</li>
          <li>Energy-themed color palette included</li>
          <li>Responsive by default</li>
        </ul>
      </div>

      <ComponentNav currentHref="/components/charts" />
    </div>
  );
}
