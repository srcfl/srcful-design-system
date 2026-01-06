"use client";

import { useState } from "react";
import { ElectricityPrice, generateDemoPriceData } from "@/components/ui/electricity-price";
import { ComponentNav } from "@/components/component-nav";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ElectricityPricePage() {
  const [currentPrice, setCurrentPrice] = useState(1.85);
  const [priceLevel, setPriceLevel] = useState<"low" | "medium" | "high">("medium");
  const [trend, setTrend] = useState<"rising" | "falling" | "stable">("stable");

  const priceData = generateDemoPriceData();
  const tips = [
    "Charge your battery during the night (00:00-06:00) for lowest rates",
    "Avoid high-power appliances during peak hours (17:00-20:00)",
    "Solar production peak expected around 12:00 today",
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Electricity Price</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Real-time electricity pricing card with charts, trends, and smart tips.
        </p>
      </div>

      {/* Demo */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Interactive Demo
        </h2>
        <div className="max-w-md">
          <ElectricityPrice
            currentPrice={currentPrice}
            unit="kr/kWh"
            region="SE3"
            priceLevel={priceLevel}
            trend={trend}
            priceData={priceData}
            lowPrice={0.85}
            avgPrice={1.45}
            highPrice={2.35}
            cheapestTime="03:00"
            cheapestPrice={0.85}
            tips={tips}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Adjust Values
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-2xl">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Current Price</Label>
              <span className="text-sm text-muted-foreground">{currentPrice.toFixed(2)} kr/kWh</span>
            </div>
            <Slider
              value={[currentPrice * 100]}
              onValueChange={([v]) => setCurrentPrice(v / 100)}
              min={50}
              max={300}
              step={5}
            />
          </div>

          <div className="space-y-2">
            <Label>Price Level</Label>
            <Select value={priceLevel} onValueChange={(v) => setPriceLevel(v as typeof priceLevel)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Trend</Label>
            <Select value={trend} onValueChange={(v) => setTrend(v as typeof trend)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rising">Rising</SelectItem>
                <SelectItem value="stable">Stable</SelectItem>
                <SelectItem value="falling">Falling</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Current price display with unit and region</li>
          <li>Price level badge (Low/Medium/High)</li>
          <li>Trend indicator (Rising/Stable/Falling)</li>
          <li>Interactive price chart with tooltips</li>
          <li>Price statistics (Low/Avg/High)</li>
          <li>Collapsible smart tips section</li>
          <li>Cheapest time indicator</li>
          <li>Dark mode support</li>
        </ul>
      </div>

      {/* Usage */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Usage
        </h2>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`import { ElectricityPrice, generateDemoPriceData } from "@/components/ui/electricity-price"

// Basic usage
<ElectricityPrice
  currentPrice={1.85}
  unit="kr/kWh"
  region="SE3"
  priceLevel="medium"
/>

// Full featured
<ElectricityPrice
  currentPrice={1.85}
  unit="kr/kWh"
  region="SE3"
  priceLevel="high"
  trend="rising"
  priceData={generateDemoPriceData()}
  lowPrice={0.85}
  avgPrice={1.45}
  highPrice={2.35}
  cheapestTime="03:00"
  cheapestPrice={0.85}
  tips={[
    "Charge during night hours for lowest rates",
    "Solar peak expected at noon",
  ]}
/>`}</code>
          </pre>
        </div>
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Props
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Default</th>
                <th className="text-left p-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">currentPrice</td>
                <td className="p-3 font-mono text-xs">number</td>
                <td className="p-3 text-muted-foreground">-</td>
                <td className="p-3">Current electricity price</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">unit</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 text-muted-foreground">"kr/kWh"</td>
                <td className="p-3">Price unit display</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">region</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 text-muted-foreground">-</td>
                <td className="p-3">Price region (e.g., SE3)</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">priceLevel</td>
                <td className="p-3 font-mono text-xs">"low" | "medium" | "high"</td>
                <td className="p-3 text-muted-foreground">"medium"</td>
                <td className="p-3">Price level indicator</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">trend</td>
                <td className="p-3 font-mono text-xs">"rising" | "falling" | "stable"</td>
                <td className="p-3 text-muted-foreground">"stable"</td>
                <td className="p-3">Price trend indicator</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">priceData</td>
                <td className="p-3 font-mono text-xs">PriceDataPoint[]</td>
                <td className="p-3 text-muted-foreground">[]</td>
                <td className="p-3">Price chart data</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-mono text-xs">tips</td>
                <td className="p-3 font-mono text-xs">string[]</td>
                <td className="p-3 text-muted-foreground">[]</td>
                <td className="p-3">Smart tips to display</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">cheapestTime</td>
                <td className="p-3 font-mono text-xs">string</td>
                <td className="p-3 text-muted-foreground">-</td>
                <td className="p-3">Time of cheapest price</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Dependencies */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Dependencies
        </h2>
        <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 border border-sourceful-gray-200 dark:border-transparent p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto">
          <pre>
            <code>{`npm install recharts`}</code>
          </pre>
        </div>
      </div>

      <ComponentNav currentHref="/components/electricity-price" />
    </div>
  );
}







