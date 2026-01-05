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
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentNav } from "@/components/component-nav";

const performanceData = [
  { metric: "Efficiency", current: 85, target: 90 },
  { metric: "Uptime", current: 98, target: 99 },
  { metric: "Output", current: 72, target: 80 },
  { metric: "Savings", current: 65, target: 70 },
  { metric: "ROI", current: 88, target: 85 },
  { metric: "Grid Support", current: 45, target: 60 },
];

const comparisonData = [
  { metric: "Jan", siteA: 85, siteB: 70 },
  { metric: "Feb", siteA: 90, siteB: 75 },
  { metric: "Mar", siteA: 88, siteB: 82 },
  { metric: "Apr", siteA: 92, siteB: 85 },
  { metric: "May", siteA: 95, siteB: 88 },
  { metric: "Jun", siteA: 91, siteB: 90 },
];

const chartConfig = {
  current: {
    label: "Current",
    color: "hsl(142, 76%, 36%)",
  },
  target: {
    label: "Target",
    color: "hsl(220, 14%, 50%)",
  },
  siteA: {
    label: "Site A",
    color: "hsl(142, 76%, 36%)",
  },
  siteB: {
    label: "Site B",
    color: "hsl(48, 100%, 50%)",
  },
} satisfies ChartConfig;

export default function RadarChartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Radar Chart</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Display multivariate data on a radial grid. Great for comparing multiple metrics.
        </p>
      </div>

      {/* Basic Radar Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Basic Radar Chart
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>System Performance</CardTitle>
            <CardDescription>Current performance across key metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
              <RadarChart data={performanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Radar
                  name="current"
                  dataKey="current"
                  stroke="var(--color-current)"
                  fill="var(--color-current)"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Comparison Radar */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Comparison Radar
        </h2>
        <p className="text-muted-foreground">
          Compare current performance against targets or benchmarks.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Current vs Target</CardTitle>
            <CardDescription>Performance metrics comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
              <RadarChart data={performanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Radar
                  name="target"
                  dataKey="target"
                  stroke="var(--color-target)"
                  fill="var(--color-target)"
                  fillOpacity={0.1}
                  strokeDasharray="5 5"
                />
                <Radar
                  name="current"
                  dataKey="current"
                  stroke="var(--color-current)"
                  fill="var(--color-current)"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Site Comparison */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Multi-Site Comparison
        </h2>
        <p className="text-muted-foreground">
          Compare multiple entities across the same metrics.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Site Performance</CardTitle>
            <CardDescription>Monthly efficiency comparison between sites</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
              <RadarChart data={comparisonData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Radar
                  name="siteA"
                  dataKey="siteA"
                  stroke="var(--color-siteA)"
                  fill="var(--color-siteA)"
                  fillOpacity={0.3}
                />
                <Radar
                  name="siteB"
                  dataKey="siteB"
                  stroke="var(--color-siteB)"
                  fill="var(--color-siteB)"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Without Fill */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Line Only
        </h2>
        <p className="text-muted-foreground">
          Use lines without fill for cleaner comparison of multiple series.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Performance Outline</CardTitle>
            <CardDescription>Stroke-only radar for clarity</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
              <RadarChart data={comparisonData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Radar
                  name="siteA"
                  dataKey="siteA"
                  stroke="var(--color-siteA)"
                  strokeWidth={2}
                  fill="none"
                  dot={{ fill: "var(--color-siteA)", strokeWidth: 0, r: 4 }}
                />
                <Radar
                  name="siteB"
                  dataKey="siteB"
                  stroke="var(--color-siteB)"
                  strokeWidth={2}
                  fill="none"
                  dot={{ fill: "var(--color-siteB)", strokeWidth: 0, r: 4 }}
                />
              </RadarChart>
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
            <code>{`import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { metric: "Efficiency", value: 85 },
  { metric: "Uptime", value: 98 },
  { metric: "Output", value: 72 },
]

<ChartContainer config={chartConfig} className="min-h-[350px]">
  <RadarChart data={data}>
    <PolarGrid />
    <PolarAngleAxis dataKey="metric" />
    <PolarRadiusAxis angle={30} domain={[0, 100]} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Radar
      name="current"
      dataKey="value"
      stroke="var(--color-current)"
      fill="var(--color-current)"
      fillOpacity={0.3}
    />
  </RadarChart>
</ChartContainer>`}</code>
          </pre>
        </div>
      </div>

      <ComponentNav currentHref="/components/charts/radar" />
    </div>
  );
}
