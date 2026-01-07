"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EMSSchedule, generateDemoSchedule } from "@/components/ui/ems-schedule";
import { ElectricityPrice, generateDemoPriceData } from "@/components/ui/electricity-price";
import { WeatherCard, generateDemoForecast } from "@/components/ui/weather-card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis, CartesianGrid } from "recharts";
import { Reorder } from "framer-motion";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Battery, Zap, TrendingUp, Clock, Settings, Play, Pause, RefreshCw, PiggyBank, Leaf, Unplug, Home, GripVertical } from "lucide-react";

const energyForecastData = [
  { hour: "00", solar: 0, consumption: 1.2, battery: 8 },
  { hour: "03", solar: 0, consumption: 0.8, battery: 6 },
  { hour: "06", solar: 0.5, consumption: 1.5, battery: 4 },
  { hour: "09", solar: 3.2, consumption: 2.1, battery: 5 },
  { hour: "12", solar: 5.8, consumption: 2.8, battery: 8 },
  { hour: "15", solar: 4.2, consumption: 3.2, battery: 9 },
  { hour: "18", solar: 1.5, consumption: 4.5, battery: 7 },
  { hour: "21", solar: 0, consumption: 3.2, battery: 5 },
];

const chartConfig = {
  solar: { label: "Solar", color: "hsl(var(--primary))" },
  consumption: { label: "Consumption", color: "hsl(var(--muted-foreground))" },
  battery: { label: "Battery", color: "#facc15" },
} satisfies ChartConfig;

interface PriorityGoal {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const defaultPriorities: PriorityGoal[] = [
  { id: "savings", label: "Maximize savings", icon: <PiggyBank className="h-4 w-4" /> },
  { id: "earnings", label: "Maximize earnings", icon: <TrendingUp className="h-4 w-4" /> },
  { id: "self-consumption", label: "Self-consumption", icon: <Home className="h-4 w-4" /> },
  { id: "grid-independence", label: "Grid independence", icon: <Unplug className="h-4 w-4" /> },
  { id: "carbon", label: "Carbon reduction", icon: <Leaf className="h-4 w-4" /> },
];

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  subtext?: string;
  trend?: "up" | "down";
}

function StatCard({ icon, label, value, subtext, trend }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            {icon}
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">{label}</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold">{value}</p>
              {trend && (
                <TrendingUp
                  className={`h-4 w-4 ${
                    trend === "up" ? "text-green-500" : "text-red-500 rotate-180"
                  }`}
                />
              )}
            </div>
            {subtext && <p className="text-xs text-muted-foreground">{subtext}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AutomationPriorities() {
  const [priorities, setPriorities] = useState<PriorityGoal[]>(defaultPriorities);
  const [autoOptimize, setAutoOptimize] = useState(false);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base">Automation Priorities</CardTitle>
            <CardDescription>{autoOptimize ? "Auto-adjusting based on prices" : "Drag to reorder your goals"}</CardDescription>
          </div>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <Switch id="auto-optimize" checked={autoOptimize} onCheckedChange={setAutoOptimize} />
          <Label htmlFor="auto-optimize" className="text-sm text-muted-foreground cursor-pointer">Auto-optimize</Label>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <Reorder.Group axis="y" values={priorities} onReorder={autoOptimize ? () => {} : setPriorities} className={`space-y-2 ${autoOptimize ? "opacity-60 pointer-events-none" : ""}`}>
          {priorities.map((item, index) => (
            <Reorder.Item
              key={item.id}
              value={item}
              className="flex items-center gap-3 p-2 rounded-lg bg-muted/50 cursor-grab active:cursor-grabbing hover:bg-muted transition-colors"
              whileDrag={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
            >
              <GripVertical className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-medium flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <div className="text-muted-foreground flex-shrink-0">{item.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.label}</p>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </CardContent>
    </Card>
  );
}

export function EMSDashboardExample() {
  const scheduleSlots = generateDemoSchedule();
  const priceData = generateDemoPriceData();
  const forecast = generateDemoForecast();

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">Energy Management System</h2>
          <p className="text-sm text-muted-foreground">Stockholm HQ - Optimizing for cost savings</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="success" className="gap-1">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Running
          </Badge>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Configure</span>
          </Button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <StatCard
          icon={<Zap className="h-5 w-5 text-primary" />}
          label="Today's Savings"
          value="€12.40"
          subtext="vs grid-only"
          trend="up"
        />
        <StatCard
          icon={<Battery className="h-5 w-5 text-yellow-500" />}
          label="Battery SoC"
          value="78%"
          subtext="7.8 kWh stored"
        />
        <StatCard
          icon={<TrendingUp className="h-5 w-5 text-green-500" />}
          label="Self-Sufficiency"
          value="84%"
          subtext="Last 24 hours"
          trend="up"
        />
        <StatCard
          icon={<Clock className="h-5 w-5 text-muted-foreground" />}
          label="Next Action"
          value="14:00"
          subtext="Start charging"
        />
      </div>

      {/* Main Grid */}
      <div className="grid gap-4 lg:grid-cols-3 overflow-hidden">
        {/* Left Column - Schedule & Forecast */}
        <div className="lg:col-span-2 space-y-4 min-w-0">
          {/* Schedule */}
          <EMSSchedule
            slots={scheduleSlots}
            currentHour={new Date().getHours()}
            title="Today's Schedule"
          />

          {/* Energy Forecast */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Energy Forecast</CardTitle>
                  <CardDescription>Predicted solar, consumption & battery</CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <ChartContainer config={chartConfig} className="h-[210px] w-full min-w-[300px]">
                <AreaChart data={energyForecastData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="hour" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}kW`} />
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

          {/* Electricity Prices */}
          <ElectricityPrice
            currentPrice={2.59}
            region="SE3"
            priceLevel="high"
            trend="stable"
            priceData={priceData}
            lowPrice={0.96}
            avgPrice={1.61}
            highPrice={2.88}
            cheapestTime="01:45"
            cheapestPrice={0.96}
            tips={[
              "Run dishwasher after midnight",
              "Pre-heat home before 17:00",
              "Charge EV during off-peak hours",
              "Export excess solar at peak prices",
              "Use battery during evening peak",
              "Delay washing machine to 02:00",
            ]}
          />
        </div>

        {/* Right Column - Priorities & Weather */}
        <div className="space-y-4 min-w-0">
          <AutomationPriorities />

          {/* Quick Actions */}
          <Card className="overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="justify-start">
                  <Play className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">Force Charge</span>
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <Pause className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">Pause Export</span>
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <Battery className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">Discharge</span>
                </Button>
                <Button variant="outline" size="sm" className="justify-start">
                  <RefreshCw className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">Re-optimize</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <WeatherCard
            temperature={-3}
            condition="overcast"
            tempLow={-7}
            tempHigh={-1}
            windSpeed={17}
            rainChance={60}
            uvIndex={0.5}
            sunrise="08:41"
            sunset="15:04"
            solarForecast={0}
            solarPeak="18:00"
            solarPeakPower={0}
            cloudCover={100}
            hourlyForecast={forecast}
          />
        </div>
      </div>
    </div>
  );
}
