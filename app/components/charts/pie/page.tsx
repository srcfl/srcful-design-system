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
  Pie,
  PieChart,
  Cell,
  Label,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentNav } from "@/components/component-nav";

const energyMixData = [
  { name: "solar", value: 65, fill: "var(--color-solar)" },
  { name: "grid", value: 25, fill: "var(--color-grid)" },
  { name: "battery", value: 10, fill: "var(--color-battery)" },
];

const detailedData = [
  { name: "rooftop", value: 45, fill: "hsl(142, 76%, 36%)" },
  { name: "community", value: 20, fill: "hsl(142, 60%, 50%)" },
  { name: "gridPeak", value: 15, fill: "hsl(220, 14%, 40%)" },
  { name: "gridOffPeak", value: 10, fill: "hsl(220, 14%, 60%)" },
  { name: "battery", value: 10, fill: "hsl(48, 100%, 50%)" },
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
  rooftop: {
    label: "Rooftop Solar",
    color: "hsl(142, 76%, 36%)",
  },
  community: {
    label: "Community Solar",
    color: "hsl(142, 60%, 50%)",
  },
  gridPeak: {
    label: "Grid (Peak)",
    color: "hsl(220, 14%, 40%)",
  },
  gridOffPeak: {
    label: "Grid (Off-Peak)",
    color: "hsl(220, 14%, 60%)",
  },
} satisfies ChartConfig;

export default function PieChartPage() {
  const totalEnergy = energyMixData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Pie Chart</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Show proportions and percentages with circular charts.
        </p>
      </div>

      {/* Basic Pie Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Basic Pie Chart
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Energy Mix</CardTitle>
            <CardDescription>Distribution of energy sources</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={energyMixData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  strokeWidth={2}
                />
                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Donut Chart */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Donut Chart
        </h2>
        <p className="text-muted-foreground">
          Add an inner radius to create a donut shape, perfect for displaying a total value.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Energy Distribution</CardTitle>
            <CardDescription>With center label showing total</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={energyMixData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  strokeWidth={2}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalEnergy}%
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground text-sm"
                            >
                              Total
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Semi-Circle */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Semi-Circle Chart
        </h2>
        <p className="text-muted-foreground">
          Use start and end angles for gauge-style displays.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Solar Percentage</CardTitle>
            <CardDescription>Proportion of solar in energy mix</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={energyMixData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="70%"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={100}
                  strokeWidth={2}
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Multiple Segments */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Detailed Breakdown
        </h2>
        <p className="text-muted-foreground">
          Show more granular data with additional segments.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Detailed Energy Sources</CardTitle>
            <CardDescription>Breakdown by source type</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={detailedData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={100}
                  strokeWidth={2}
                  paddingAngle={2}
                />
                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Side by Side */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Comparison
        </h2>
        <p className="text-muted-foreground">
          Use multiple pie charts to compare different time periods or categories.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Summer</CardTitle>
              <CardDescription>High solar production</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <PieChart>
                  <Pie
                    data={[
                      { name: "solar", value: 75, fill: "var(--color-solar)" },
                      { name: "grid", value: 20, fill: "var(--color-grid)" },
                      { name: "battery", value: 5, fill: "var(--color-battery)" },
                    ]}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                  />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Winter</CardTitle>
              <CardDescription>Lower solar production</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <PieChart>
                  <Pie
                    data={[
                      { name: "solar", value: 35, fill: "var(--color-solar)" },
                      { name: "grid", value: 55, fill: "var(--color-grid)" },
                      { name: "battery", value: 10, fill: "var(--color-battery)" },
                    ]}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                  />
                </PieChart>
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
            <code>{`import { Pie, PieChart, Cell, Label } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "solar", value: 65, fill: "var(--color-solar)" },
  { name: "grid", value: 25, fill: "var(--color-grid)" },
]

<ChartContainer config={chartConfig} className="min-h-[300px]">
  <PieChart>
    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      innerRadius={60}  {/* Set > 0 for donut */}
      outerRadius={100}
      strokeWidth={2}
      paddingAngle={2}  {/* Gap between segments */}
    >
      {/* Optional center label for donut */}
      <Label content={...} />
    </Pie>
    <ChartLegend content={<ChartLegendContent nameKey="name" />} />
  </PieChart>
</ChartContainer>`}</code>
          </pre>
        </div>
      </div>

      <ComponentNav currentHref="/components/charts/pie" />
    </div>
  );
}
