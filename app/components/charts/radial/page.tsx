"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  RadialBar,
  RadialBarChart,
  PolarAngleAxis,
  Label,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentNav } from "@/components/component-nav";

const progressData = [
  { name: "progress", value: 72, fill: "hsl(142, 76%, 36%)" },
];

const multiData = [
  { name: "solar", value: 85, fill: "hsl(142, 76%, 36%)" },
  { name: "wind", value: 65, fill: "hsl(200, 80%, 50%)" },
  { name: "grid", value: 45, fill: "hsl(220, 14%, 50%)" },
];

const chartConfig = {
  progress: {
    label: "Progress",
    color: "hsl(142, 76%, 36%)",
  },
  solar: {
    label: "Solar",
    color: "hsl(142, 76%, 36%)",
  },
  wind: {
    label: "Wind",
    color: "hsl(200, 80%, 50%)",
  },
  grid: {
    label: "Grid",
    color: "hsl(220, 14%, 50%)",
  },
} satisfies ChartConfig;

export default function RadialChartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Radial Chart</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Display progress, completion rates, or single metrics with radial bars.
        </p>
      </div>

      {/* Progress Ring */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Progress Ring
        </h2>
        <p className="text-muted-foreground">
          Show completion progress with a circular gauge.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Daily Goal</CardTitle>
            <CardDescription>Energy production target completion</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
              <RadialBarChart
                data={progressData}
                startAngle={90}
                endAngle={-270}
                innerRadius={80}
                outerRadius={110}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={10}
                  fill="var(--color-progress)"
                />
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
                            className="fill-foreground text-4xl font-bold"
                          >
                            72%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground text-sm"
                          >
                            Complete
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Multiple Rings */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Multiple Metrics
        </h2>
        <p className="text-muted-foreground">
          Compare multiple values with concentric rings.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Energy Sources</CardTitle>
            <CardDescription>Production efficiency by source</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <RadialBarChart
                data={multiData}
                startAngle={90}
                endAngle={-270}
                innerRadius={30}
                outerRadius={110}
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
                <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={5}
                />
              </RadialBarChart>
            </ChartContainer>
            <div className="flex justify-center gap-4 mt-4">
              {multiData.map((item) => (
                <div key={item.name} className="flex items-center gap-2 text-sm">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="capitalize">{item.name}</span>
                  <span className="text-muted-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gauge Style */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Gauge Style
        </h2>
        <p className="text-muted-foreground">
          Create a semi-circular gauge for dashboard displays.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>System Efficiency</CardTitle>
            <CardDescription>Current operating efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
              <RadialBarChart
                data={[{ name: "efficiency", value: 88, fill: "hsl(142, 76%, 36%)" }]}
                startAngle={180}
                endAngle={0}
                innerRadius={80}
                outerRadius={110}
                cy="70%"
              >
                <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
                />
                <RadialBar
                  background
                  dataKey="value"
                  cornerRadius={10}
                />
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
                            y={(viewBox.cy || 0) - 10}
                            className="fill-foreground text-3xl font-bold"
                          >
                            88%
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Grid of Radials */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Dashboard Cards
        </h2>
        <p className="text-muted-foreground">
          Use small radial charts as KPI indicators.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Solar", value: 92, color: "hsl(142, 76%, 36%)" },
            { label: "Wind", value: 78, color: "hsl(200, 80%, 50%)" },
            { label: "Battery", value: 65, color: "hsl(48, 100%, 50%)" },
            { label: "Grid", value: 34, color: "hsl(220, 14%, 50%)" },
          ].map((item) => (
            <Card key={item.label}>
              <CardContent className="pt-4">
                <ChartContainer config={{ value: { label: item.label, color: item.color } }} className="min-h-[120px] w-full">
                  <RadialBarChart
                    data={[{ value: item.value, fill: item.color }]}
                    startAngle={90}
                    endAngle={-270}
                    innerRadius={35}
                    outerRadius={50}
                  >
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar background dataKey="value" cornerRadius={5} />
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                              <tspan className="fill-foreground text-lg font-bold">{item.value}%</tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </RadialBarChart>
                </ChartContainer>
                <p className="text-center text-sm text-muted-foreground mt-2">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
          <pre>
            <code>{`import { RadialBar, RadialBarChart, PolarAngleAxis, Label } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const data = [{ name: "progress", value: 72, fill: "hsl(142, 76%, 36%)" }]

<ChartContainer config={chartConfig} className="min-h-[250px]">
  <RadialBarChart
    data={data}
    startAngle={90}
    endAngle={-270}    {/* Full circle: -270, Half: 0 */}
    innerRadius={80}
    outerRadius={110}
  >
    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
    <RadialBar
      background        {/* Shows track behind bar */}
      dataKey="value"
      cornerRadius={10}
    />
    <Label content={...} />  {/* Center label */}
  </RadialBarChart>
</ChartContainer>`}</code>
          </pre>
        </div>
      </div>

      <ComponentNav currentHref="/components/charts/radial" />
    </div>
  );
}
