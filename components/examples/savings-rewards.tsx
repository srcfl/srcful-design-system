"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, ReferenceLine } from "recharts";
import { Coins, TrendingUp, Zap, Shield, Calculator, Gift, Car, Battery, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

// Generate realistic Swedish grid exchange data (SE3)
function generateGridExchangeData() {
  const data = [];
  const currentHour = new Date().getHours();

  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, "0");

    // Spot prices: low at night, peaks morning/evening (SE3 pattern)
    let price;
    if (i >= 0 && i < 6) price = 0.45 + Math.random() * 0.4;      // Night: 0.45-0.85
    else if (i >= 6 && i < 9) price = 1.8 + Math.random() * 0.6;  // Morning peak: 1.8-2.4
    else if (i >= 9 && i < 16) price = 0.9 + Math.random() * 0.5; // Midday: 0.9-1.4
    else if (i >= 16 && i < 21) price = 2.2 + Math.random() * 0.9;// Evening peak: 2.2-3.1
    else price = 1.2 + Math.random() * 0.4;                        // Evening: 1.2-1.6

    // Grid exchange: import when cheap, export when expensive
    let gridImport = 0;
    let gridExport = 0;

    if (i >= 0 && i < 6) {
      gridImport = 1.0 + Math.random() * 1.5; // Night: charge battery when cheap
    } else if (i >= 6 && i < 9) {
      gridExport = 1.5 + Math.random() * 2.0; // Morning peak: export from battery
    } else if (i >= 9 && i < 16) {
      gridExport = 2.5 + Math.random() * 3.0; // Midday: solar surplus export
    } else if (i >= 16 && i < 21) {
      gridExport = 2.0 + Math.random() * 2.5; // Evening peak: export from battery (highest prices!)
    } else {
      gridImport = 0.8 + Math.random() * 0.7; // Late evening: start charging again
    }

    data.push({
      hour: `${hour}:00`,
      import: -gridImport, // Negative for visual stacking below zero
      export: gridExport,
      price: Math.round(price * 100) / 100,
      isCurrent: i === currentHour,
    });
  }

  return data;
}

const chartConfig = {
  import: { label: "Grid Import", color: "#3b82f6" },
  export: { label: "Grid Export", color: "#22c55e" },
  price: { label: "Spot Price", color: "#f97316" },
} satisfies ChartConfig;

// Swedish energy costs (typical values)
const ENERGY_TAX = 0.392; // kr/kWh - energiskatt
const GRID_TARIFF_IMPORT = 0.35; // kr/kWh - elnätsavgift import
const GRID_TARIFF_EXPORT = 0.05; // kr/kWh - elnätsavgift export (usually lower)
const VAT_RATE = 0.25; // 25% moms

interface FinancialSummary {
  avgExportPrice: number;
  avgImportPrice: number;
  totalExportKwh: number;
  totalImportKwh: number;
  totalImportCost: number;
  totalExportEarnings: number;
  energyTax: number;
  gridTariffImport: number;
  gridTariffExport: number;
  netSum: number;
}

function calculateFinancialSummary(data: ReturnType<typeof generateGridExchangeData>): FinancialSummary {
  let totalExportKwh = 0;
  let totalImportKwh = 0;
  let weightedExportPrice = 0;
  let weightedImportPrice = 0;

  data.forEach((hour) => {
    if (hour.export > 0) {
      totalExportKwh += hour.export;
      weightedExportPrice += hour.export * hour.price;
    }
    if (hour.import < 0) {
      const importKwh = Math.abs(hour.import);
      totalImportKwh += importKwh;
      weightedImportPrice += importKwh * hour.price;
    }
  });

  const avgExportPrice = totalExportKwh > 0 ? weightedExportPrice / totalExportKwh : 0;
  const avgImportPrice = totalImportKwh > 0 ? weightedImportPrice / totalImportKwh : 0;

  // Export earnings (spot price only, no taxes added)
  const totalExportEarnings = totalExportKwh * avgExportPrice;

  // Import costs include spot price + energy tax + grid tariff (+ VAT on all)
  const spotCost = totalImportKwh * avgImportPrice;
  const energyTax = totalImportKwh * ENERGY_TAX;
  const gridTariffImport = totalImportKwh * GRID_TARIFF_IMPORT;
  const gridTariffExport = totalExportKwh * GRID_TARIFF_EXPORT;
  const totalImportCost = (spotCost + energyTax + gridTariffImport) * (1 + VAT_RATE);

  // Net sum: export earnings minus import costs minus export grid tariff
  const netSum = totalExportEarnings - totalImportCost - gridTariffExport;

  return {
    avgExportPrice: Math.round(avgExportPrice * 100) / 100,
    avgImportPrice: Math.round(avgImportPrice * 100) / 100,
    totalExportKwh: Math.round(totalExportKwh * 10) / 10,
    totalImportKwh: Math.round(totalImportKwh * 10) / 10,
    totalImportCost: Math.round(totalImportCost * 100) / 100,
    totalExportEarnings: Math.round(totalExportEarnings * 100) / 100,
    energyTax: Math.round(energyTax * 100) / 100,
    gridTariffImport: Math.round(gridTariffImport * 100) / 100,
    gridTariffExport: Math.round(gridTariffExport * 100) / 100,
    netSum: Math.round(netSum * 100) / 100,
  };
}

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
          <div className="flex-1 min-w-0">
            <p className="text-sm text-muted-foreground truncate">{label}</p>
            <div className="flex items-center gap-2">
              <p className="text-xl font-bold tabular-nums">{value}</p>
              {trend && (
                <TrendingUp
                  className={cn(
                    "h-4 w-4 flex-shrink-0",
                    trend === "up" ? "text-green-500" : "text-red-500 rotate-180"
                  )}
                />
              )}
            </div>
            {subtext && <p className="text-xs text-muted-foreground truncate">{subtext}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Calculate estimated savings based on system configuration
function calculateSavings(solar: string, battery: string, ev: string) {
  const solarKw = parseInt(solar) || 0;
  const batteryKwh = parseInt(battery) || 0;
  const hasEv = ev === "yes";

  // Base calculations for Swedish market (SE3)
  const selfConsumption = solarKw * 1200; // ~1200 kr/kW/year from self-consumption
  const peakAvoidance = batteryKwh * 450;  // ~450 kr/kWh/year from peak shaving
  const evSavings = hasEv ? 2400 : 0;      // ~2400 kr/year from smart charging
  const gridExport = solarKw * 600;        // ~600 kr/kW/year from export

  return {
    selfConsumption,
    peakAvoidance,
    evSavings,
    gridExport,
    total: selfConsumption + peakAvoidance + evSavings + gridExport,
  };
}

export function SavingsRewardsExample() {
  const [solar, setSolar] = useState("10");
  const [battery, setBattery] = useState("10");
  const [ev, setEv] = useState("no");

  const gridData = generateGridExchangeData();
  const savings = calculateSavings(solar, battery, ev);
  const financials = calculateFinancialSummary(gridData);

  // Demo stats
  const todaySavings = 47.80;
  const rewardPoints = 1247;
  const gridExportRevenue = 12.40;
  const peakAvoided = 8.60;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">Savings & Rewards</h2>
          <p className="text-sm text-muted-foreground">Stockholm Home - SE3 Price Area</p>
        </div>
        <Badge variant="success-soft" className="gap-1 w-fit">
          <span className="h-2 w-2 rounded-full bg-sourceful-green-500 animate-pulse" />
          Live
        </Badge>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        <StatCard
          icon={<Coins className="h-5 w-5 text-primary" />}
          label="Today's Savings"
          value={`${todaySavings.toFixed(0)} kr`}
          subtext="vs grid-only"
          trend="up"
        />
        <StatCard
          icon={<Gift className="h-5 w-5 text-purple-500" />}
          label="Reward Points"
          value={rewardPoints.toLocaleString()}
          subtext="+23 today"
          trend="up"
        />
        <StatCard
          icon={<Zap className="h-5 w-5 text-green-500" />}
          label="Grid Export"
          value={`${gridExportRevenue.toFixed(0)} kr`}
          subtext="8.2 kWh sold"
        />
        <StatCard
          icon={<Shield className="h-5 w-5 text-orange-500" />}
          label="Peak Avoided"
          value={`${peakAvoided.toFixed(0)} kr`}
          subtext="2.1 kWh shifted"
        />
      </div>

      {/* Main Grid */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Left Column - wider */}
        <div className="lg:col-span-2 space-y-4">
          {/* Financial Summary */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Coins className="h-4 w-4 text-primary" />
                Financial Summary
              </CardTitle>
              <CardDescription>Today&apos;s grid exchange economics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Import/Export Volumes */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 p-3 rounded-lg bg-blue-500/10">
                  <p className="text-xs text-muted-foreground">Grid Import</p>
                  <p className="text-lg font-bold tabular-nums">{financials.totalImportKwh} kWh</p>
                  <p className="text-xs text-muted-foreground">
                    Avg: {financials.avgImportPrice.toFixed(2)} kr/kWh
                  </p>
                </div>
                <div className="space-y-1 p-3 rounded-lg bg-green-500/10">
                  <p className="text-xs text-muted-foreground">Grid Export</p>
                  <p className="text-lg font-bold tabular-nums">{financials.totalExportKwh} kWh</p>
                  <p className="text-xs text-muted-foreground">
                    Avg: {financials.avgExportPrice.toFixed(2)} kr/kWh
                  </p>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="space-y-2 pt-2 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Export earnings (spot)</span>
                  <span className="tabular-nums text-green-600 dark:text-green-400">
                    +{financials.totalExportEarnings.toFixed(2)} kr
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Import cost (incl. VAT)</span>
                  <span className="tabular-nums text-red-600 dark:text-red-400">
                    -{financials.totalImportCost.toFixed(2)} kr
                  </span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground pl-3 text-xs">
                  <span>↳ Energy tax</span>
                  <span className="tabular-nums">{financials.energyTax.toFixed(2)} kr</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground pl-3 text-xs">
                  <span>↳ Grid tariff (import)</span>
                  <span className="tabular-nums">{financials.gridTariffImport.toFixed(2)} kr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Grid tariff (export)</span>
                  <span className="tabular-nums text-red-600 dark:text-red-400">
                    -{financials.gridTariffExport.toFixed(2)} kr
                  </span>
                </div>
              </div>

              {/* Net Sum */}
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="font-semibold">Net Balance</span>
                <span className={cn(
                  "text-xl font-bold tabular-nums",
                  financials.netSum >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                )}>
                  {financials.netSum >= 0 ? "+" : ""}{financials.netSum.toFixed(2)} kr
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Includes energiskatt ({ENERGY_TAX} kr/kWh), elnätsavgift, and 25% VAT
              </p>
            </CardContent>
          </Card>

          {/* Savings Calculator */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Calculator className="h-4 w-4 text-primary" />
                Estimate Your Savings
              </CardTitle>
              <CardDescription>Configure your system to see potential savings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground flex items-center gap-1">
                      <Sun className="h-3 w-3" /> Solar
                    </label>
                    <Select value={solar} onValueChange={setSolar}>
                      <SelectTrigger className="h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">None</SelectItem>
                        <SelectItem value="5">5 kW</SelectItem>
                        <SelectItem value="10">10 kW</SelectItem>
                        <SelectItem value="15">15 kW</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground flex items-center gap-1">
                      <Battery className="h-3 w-3" /> Battery
                    </label>
                    <Select value={battery} onValueChange={setBattery}>
                      <SelectTrigger className="h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">None</SelectItem>
                        <SelectItem value="5">5 kWh</SelectItem>
                        <SelectItem value="10">10 kWh</SelectItem>
                        <SelectItem value="15">15 kWh</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground flex items-center gap-1">
                      <Car className="h-3 w-3" /> EV Charger
                    </label>
                    <Select value={ev} onValueChange={setEv}>
                      <SelectTrigger className="h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Yes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Self-consumption</span>
                    <span className="tabular-nums">{savings.selfConsumption.toLocaleString()} kr/year</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Peak avoidance</span>
                    <span className="tabular-nums">{savings.peakAvoidance.toLocaleString()} kr/year</span>
                  </div>
                  {savings.evSavings > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Smart EV charging</span>
                      <span className="tabular-nums">{savings.evSavings.toLocaleString()} kr/year</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Grid export</span>
                    <span className="tabular-nums">{savings.gridExport.toLocaleString()} kr/year</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Estimated Total</span>
                    <span className="text-primary tabular-nums">{savings.total.toLocaleString()} kr/year</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Based on typical Swedish household in SE3 with Sourceful EMS
                </p>
              </CardContent>
          </Card>
        </div>

        {/* Right Column - Chart + Rewards + Breakdown */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Grid Exchange</CardTitle>
              <CardDescription>Import/export & spot price</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[230px] w-full">
                <ComposedChart data={gridData} margin={{ top: 10, right: 5, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis
                    dataKey="hour"
                    tick={{ fontSize: 9 }}
                    interval={3}
                    tickFormatter={(value) => value.split(":")[0]}
                  />
                  <YAxis
                    yAxisId="power"
                    tick={{ fontSize: 9 }}
                    tickFormatter={(v) => `${v > 0 ? "+" : ""}${v.toFixed(0)}`}
                    domain={[-2, 6]}
                    width={30}
                  />
                  <YAxis
                    yAxisId="price"
                    orientation="right"
                    tick={{ fontSize: 9 }}
                    tickFormatter={(v) => `${v.toFixed(1)}`}
                    domain={[0, 4]}
                    width={25}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value, name) => {
                          if (name === "price") return `${value} kr/kWh`;
                          const numValue = Number(value);
                          if (name === "import") return `${Math.abs(numValue).toFixed(2)} kW import`;
                          return `${numValue.toFixed(2)} kW export`;
                        }}
                      />
                    }
                  />
                  <ReferenceLine yAxisId="power" y={0} stroke="hsl(var(--muted-foreground))" strokeWidth={1} />
                  <Area
                    yAxisId="power"
                    type="monotone"
                    dataKey="import"
                    stroke="var(--color-import)"
                    fill="var(--color-import)"
                    fillOpacity={0.4}
                  />
                  <Area
                    yAxisId="power"
                    type="monotone"
                    dataKey="export"
                    stroke="var(--color-export)"
                    fill="var(--color-export)"
                    fillOpacity={0.4}
                  />
                  <Line
                    yAxisId="price"
                    type="monotone"
                    dataKey="price"
                    stroke="var(--color-price)"
                    strokeWidth={2}
                    dot={false}
                  />
                </ComposedChart>
              </ChartContainer>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Import
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Export
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded bg-orange-500" />
                  Price
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rewards Summary */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <Gift className="h-4 w-4 text-purple-500" />
                Rewards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">Today</p>
                  <p className="font-semibold tabular-nums">+23</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Week</p>
                  <p className="font-semibold tabular-nums">+142</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Total</p>
                  <p className="font-semibold tabular-nums">1,247</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Next tier</span>
                  <span className="font-medium">1,500 pts</span>
                </div>
                <Progress value={83} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Today's Breakdown */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="h-4 w-4 text-green-500" />
                Today&apos;s Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-green-500" />
                    <span>Self-consumption</span>
                  </div>
                  <span className="font-semibold tabular-nums text-green-600 dark:text-green-400">+22 kr</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-500" />
                    <span>Peak avoidance</span>
                  </div>
                  <span className="font-semibold tabular-nums text-green-600 dark:text-green-400">+9 kr</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-500" />
                    <span>Grid export</span>
                  </div>
                  <span className="font-semibold tabular-nums text-green-600 dark:text-green-400">+12 kr</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-purple-500" />
                    <span>Smart EV</span>
                  </div>
                  <span className="font-semibold tabular-nums text-green-600 dark:text-green-400">+5 kr</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold tabular-nums text-primary">48 kr</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
