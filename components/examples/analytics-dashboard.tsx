"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, Zap, Battery, Sun, ArrowUpRight, DollarSign } from "lucide-react";

const productionData = [
  { time: "00:00", solar: 0, consumption: 1.2, grid: 1.2 },
  { time: "04:00", solar: 0, consumption: 0.8, grid: 0.8 },
  { time: "08:00", solar: 2.1, consumption: 2.5, grid: 0.4 },
  { time: "12:00", solar: 5.8, consumption: 3.2, grid: -2.6 },
  { time: "16:00", solar: 4.2, consumption: 4.1, grid: -0.1 },
  { time: "20:00", solar: 0.5, consumption: 3.8, grid: 3.3 },
];

const weeklyData = [
  { day: "Mon", production: 28, export: 12, savings: 45 },
  { day: "Tue", production: 32, export: 15, savings: 52 },
  { day: "Wed", production: 25, export: 8, savings: 38 },
  { day: "Thu", production: 35, export: 18, savings: 58 },
  { day: "Fri", production: 30, export: 14, savings: 48 },
  { day: "Sat", production: 22, export: 10, savings: 35 },
  { day: "Sun", production: 18, export: 6, savings: 28 },
];

const chartConfig = {
  solar: { label: "Solar", color: "hsl(var(--primary))" },
  consumption: { label: "Consumption", color: "hsl(var(--muted-foreground))" },
  grid: { label: "Grid", color: "#3b82f6" },
  production: { label: "Production", color: "hsl(var(--primary))" },
  export: { label: "Export", color: "#facc15" },
  savings: { label: "Savings", color: "#22c55e" },
} satisfies ChartConfig;

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
  description: string;
}

function StatCard({ title, value, change, trend, icon, description }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center gap-1 mt-1">
          <Badge variant={trend === "up" ? "default" : "secondary"} className="text-xs px-1.5 py-0">
            {trend === "up" ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
            {change}
          </Badge>
          <span className="text-xs text-muted-foreground">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function AnalyticsDashboardExample() {
  return (
    <div className="space-y-4">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
        <StatCard
          title="Total Production"
          value="186.4 kWh"
          change="+12.5%"
          trend="up"
          icon={<Sun className="h-4 w-4 text-primary" />}
          description="vs last week"
        />
        <StatCard
          title="Grid Export"
          value="82.3 kWh"
          change="+8.2%"
          trend="up"
          icon={<ArrowUpRight className="h-4 w-4 text-yellow-500" />}
          description="vs last week"
        />
        <StatCard
          title="Battery Health"
          value="94%"
          change="-0.5%"
          trend="down"
          icon={<Battery className="h-4 w-4 text-muted-foreground" />}
          description="vs last month"
        />
        <StatCard
          title="Savings"
          value="€304"
          change="+18.3%"
          trend="up"
          icon={<DollarSign className="h-4 w-4 text-green-500" />}
          description="vs last week"
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Daily Production Chart */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Today&apos;s Energy Flow</CardTitle>
            <CardDescription>Solar production vs consumption over 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <ChartContainer config={chartConfig} className="h-[250px] w-full min-w-[300px]">
              <AreaChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="time" className="text-xs" />
                <YAxis className="text-xs" tickFormatter={(v) => `${v}kW`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="solar"
                  stackId="1"
                  stroke="var(--color-solar)"
                  fill="var(--color-solar)"
                  fillOpacity={0.6}
                />
                <Area
                  type="monotone"
                  dataKey="consumption"
                  stackId="2"
                  stroke="var(--color-consumption)"
                  fill="var(--color-consumption)"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Weekly Summary */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Weekly Summary</CardTitle>
            <CardDescription>Production and export by day</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <ChartContainer config={chartConfig} className="h-[250px] w-full min-w-[300px]">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" tickFormatter={(v) => `${v}kWh`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="production" fill="var(--color-production)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="export" fill="var(--color-export)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Savings Trend */}
        <Card className="lg:col-span-2 overflow-hidden">
          <CardHeader>
            <CardTitle>Savings Trend</CardTitle>
            <CardDescription>Daily savings from solar production (€)</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <ChartContainer config={chartConfig} className="h-[200px] w-full min-w-[300px]">
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" tickFormatter={(v) => `€${v}`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="savings"
                  stroke="var(--color-savings)"
                  strokeWidth={2}
                  dot={{ fill: "var(--color-savings)", strokeWidth: 2 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>This Month</CardTitle>
            <CardDescription>Performance summary</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">Self-consumption</span>
              </div>
              <span className="font-medium">68%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <span className="text-sm">Grid independence</span>
              </div>
              <span className="font-medium">72%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm">CO₂ saved</span>
              </div>
              <span className="font-medium">124 kg</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-sm">Peak shaving</span>
              </div>
              <span className="font-medium">2.4 kW</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
