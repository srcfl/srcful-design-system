"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis, ReferenceLine } from "recharts";
import { Zap, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PriceDataPoint {
  time: string;
  price: number;
}

export interface ElectricityPriceProps {
  currentPrice: number;
  unit?: string;
  region?: string;
  priceLevel?: "low" | "medium" | "high";
  trend?: "rising" | "falling" | "stable";
  priceData?: PriceDataPoint[];
  lowPrice?: number;
  avgPrice?: number;
  highPrice?: number;
  cheapestTime?: string;
  cheapestPrice?: number;
  tips?: string[];
  className?: string;
}

const chartConfig = {
  price: { label: "Price", color: "hsl(var(--primary))" },
} satisfies ChartConfig;

const priceLevelConfig = {
  low: { label: "Low", variant: "success" as const, color: "text-green-600 dark:text-green-400" },
  medium: { label: "Medium", variant: "secondary" as const, color: "text-muted-foreground" },
  high: { label: "High", variant: "warning" as const, color: "text-orange-600 dark:text-orange-400" },
};

export function ElectricityPrice({
  currentPrice,
  unit = "kr/kWh",
  region,
  priceLevel = "medium",
  trend = "stable",
  priceData = [],
  lowPrice,
  avgPrice,
  highPrice,
  cheapestTime,
  cheapestPrice,
  tips = [],
  className,
}: ElectricityPriceProps) {
  const [showTips, setShowTips] = React.useState(false);

  const trendText = {
    rising: "rising",
    falling: "falling",
    stable: "stable",
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base font-medium">
            <Zap className="h-4 w-4 text-primary" />
            Electricity Price
          </CardTitle>
          {region && (
            <span className="text-sm text-muted-foreground">{region}</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Price */}
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{currentPrice.toFixed(2)}</span>
            <span className="text-muted-foreground">{unit}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant={priceLevelConfig[priceLevel].variant}>
              {priceLevelConfig[priceLevel].label}
            </Badge>
            <span className="text-sm text-muted-foreground">
              — {trendText[trend]}
            </span>
          </div>
        </div>

        {/* Price Chart */}
        {priceData.length > 0 && (
          <ChartContainer config={chartConfig} className="h-[100px] w-full">
            <AreaChart data={priceData}>
              <XAxis
                dataKey="time"
                tick={{ fontSize: 10 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis hide />
              <ChartTooltip
                content={<ChartTooltipContent formatter={(value) => `${value} ${unit}`} />}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="var(--color-price)"
                fill="var(--color-price)"
                fillOpacity={0.2}
                strokeWidth={1.5}
              />
              {avgPrice && (
                <ReferenceLine
                  y={avgPrice}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                />
              )}
            </AreaChart>
          </ChartContainer>
        )}

        {/* Price Stats */}
        {(lowPrice !== undefined || avgPrice !== undefined || highPrice !== undefined) && (
          <div className="grid grid-cols-3 gap-4 text-center">
            {lowPrice !== undefined && (
              <div>
                <p className="text-xs text-muted-foreground">Low</p>
                <p className="font-semibold text-green-600 dark:text-green-400">
                  {lowPrice.toFixed(2)}
                </p>
              </div>
            )}
            {avgPrice !== undefined && (
              <div>
                <p className="text-xs text-muted-foreground">Avg</p>
                <p className="font-semibold">{avgPrice.toFixed(2)}</p>
              </div>
            )}
            {highPrice !== undefined && (
              <div>
                <p className="text-xs text-muted-foreground">High</p>
                <p className="font-semibold text-orange-600 dark:text-orange-400">
                  {highPrice.toFixed(2)}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Tips */}
        {tips.length > 0 && (
          <button
            onClick={() => setShowTips(!showTips)}
            className="flex items-center justify-between w-full py-2 text-sm border-t"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>{tips.length} tips for you</span>
            </div>
            {showTips ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        )}

        {showTips && tips.length > 0 && (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                {tip}
              </li>
            ))}
          </ul>
        )}

        {/* Cheapest Time */}
        {cheapestTime && cheapestPrice !== undefined && (
          <div className="flex items-center gap-2 py-2 px-3 rounded-lg bg-muted/50 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Cheapest today:</span>
            <span className="font-medium text-primary">{cheapestTime}</span>
            <span className="text-muted-foreground">({cheapestPrice.toFixed(2)} {unit.split("/")[0]})</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Helper to generate demo price data
export function generateDemoPriceData(): PriceDataPoint[] {
  const basePrice = 1.5;
  return Array.from({ length: 48 }, (_, i) => {
    const hour = i / 2;
    // Simulate price curve: low at night, high in morning/evening
    const variation =
      Math.sin((hour - 6) * (Math.PI / 12)) * 0.8 +
      Math.sin((hour - 18) * (Math.PI / 6)) * 0.4 +
      Math.random() * 0.3;
    return {
      time: i === 0 ? "Now" : i === 24 ? "+24h" : i === 47 ? "+48h" : "",
      price: Math.max(0.5, basePrice + variation),
    };
  });
}
