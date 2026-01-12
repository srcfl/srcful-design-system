"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ComponentPreview } from "@/components/component-preview";
import {
  Zap,
  Battery,
  Sun,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  MoreHorizontal
} from "lucide-react";

export default function DashboardPatternPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Dashboard Patterns</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Common layouts and components for building energy management dashboards.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Stat Cards
        </h2>
        <p className="text-muted-foreground">
          Display key metrics with icons, values, and trend indicators.
        </p>
        <ComponentPreview
          code={`<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">Solar Production</CardTitle>
      <Sun className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">4.2 kW</div>
      <p className="text-xs text-muted-foreground">
        <span className="text-green-500">+12%</span> from yesterday
      </p>
    </CardContent>
  </Card>

  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">Battery Level</CardTitle>
      <Battery className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">78%</div>
      <Progress value={78} className="mt-2" />
    </CardContent>
  </Card>

  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">Grid Export</CardTitle>
      <Zap className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">1.8 kW</div>
      <p className="text-xs text-muted-foreground">
        Earning <span className="text-green-500">€0.32/hr</span>
      </p>
    </CardContent>
  </Card>

  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">Home Usage</CardTitle>
      <Activity className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">2.4 kW</div>
      <p className="text-xs text-muted-foreground">
        <span className="text-red-500">+8%</span> from average
      </p>
    </CardContent>
  </Card>
</div>`}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Solar Production</CardTitle>
                <Sun className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2 kW</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+12%</span> from yesterday
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Battery Level</CardTitle>
                <Battery className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <Progress value={78} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Grid Export</CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.8 kW</div>
                <p className="text-xs text-muted-foreground">
                  Earning <span className="text-green-500">€0.32/hr</span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Home Usage</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4 kW</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500">+8%</span> from average
                </p>
              </CardContent>
            </Card>
          </div>
        </ComponentPreview>
      </div>

      {/* Stat Cards with Badges */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Stat Cards with Status
        </h2>
        <p className="text-muted-foreground">
          Add badges to indicate device or system status.
        </p>
        <ComponentPreview
          code={`<div className="grid gap-4 md:grid-cols-3">
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">Inverter</CardTitle>
      <Badge variant="success">Online</Badge>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">4.2 kW</div>
      <p className="text-xs text-muted-foreground">Current output</p>
    </CardContent>
  </Card>

  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">Battery</CardTitle>
      <Badge variant="energy">Charging</Badge>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">78%</div>
      <p className="text-xs text-muted-foreground">Est. full in 2h</p>
    </CardContent>
  </Card>

  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">EV Charger</CardTitle>
      <Badge variant="secondary">Idle</Badge>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">0 kW</div>
      <p className="text-xs text-muted-foreground">No vehicle connected</p>
    </CardContent>
  </Card>
</div>`}
        >
          <div className="grid gap-4 md:grid-cols-3 w-full">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Inverter</CardTitle>
                <Badge variant="success">Online</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.2 kW</div>
                <p className="text-xs text-muted-foreground">Current output</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Battery</CardTitle>
                <Badge variant="energy">Charging</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">Est. full in 2h</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">EV Charger</CardTitle>
                <Badge variant="secondary">Idle</Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0 kW</div>
                <p className="text-xs text-muted-foreground">No vehicle connected</p>
              </CardContent>
            </Card>
          </div>
        </ComponentPreview>
      </div>

      {/* Large Stat Display */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Hero Metrics
        </h2>
        <p className="text-muted-foreground">
          Large, prominent display for the most important metric.
        </p>
        <ComponentPreview
          code={`<Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
  <CardContent className="pt-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">Today's Earnings</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">€12.84</span>
          <span className="flex items-center text-sm text-green-500">
            <ArrowUpRight className="h-4 w-4" />
            23%
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          vs €10.43 yesterday
        </p>
      </div>
      <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center">
        <TrendingUp className="h-8 w-8 text-green-500" />
      </div>
    </div>
  </CardContent>
</Card>`}
        >
          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20 w-full max-w-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Today&apos;s Earnings</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">€12.84</span>
                    <span className="flex items-center text-sm text-green-500">
                      <ArrowUpRight className="h-4 w-4" />
                      23%
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    vs €10.43 yesterday
                  </p>
                </div>
                <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </ComponentPreview>
      </div>

      {/* Device List Card */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Device List
        </h2>
        <p className="text-muted-foreground">
          Display a list of devices with status and quick actions.
        </p>
        <ComponentPreview
          code={`<Card>
  <CardHeader>
    <CardTitle>Connected Devices</CardTitle>
    <CardDescription>3 devices online</CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    {/* Device row */}
    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
          <Sun className="h-5 w-5 text-green-500" />
        </div>
        <div>
          <p className="font-medium">Solar Inverter</p>
          <p className="text-sm text-muted-foreground">4.2 kW output</p>
        </div>
      </div>
      <Badge variant="success">Online</Badge>
    </div>

    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Battery className="h-5 w-5 text-blue-500" />
        </div>
        <div>
          <p className="font-medium">Home Battery</p>
          <p className="text-sm text-muted-foreground">78% charged</p>
        </div>
      </div>
      <Badge variant="energy">Charging</Badge>
    </div>

    <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <Zap className="h-5 w-5 text-yellow-500" />
        </div>
        <div>
          <p className="font-medium">EV Charger</p>
          <p className="text-sm text-muted-foreground">Ready</p>
        </div>
      </div>
      <Badge variant="secondary">Idle</Badge>
    </div>
  </CardContent>
</Card>`}
        >
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Connected Devices</CardTitle>
              <CardDescription>3 devices online</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Sun className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Solar Inverter</p>
                    <p className="text-sm text-muted-foreground">4.2 kW output</p>
                  </div>
                </div>
                <Badge variant="success">Online</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Battery className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Home Battery</p>
                    <p className="text-sm text-muted-foreground">78% charged</p>
                  </div>
                </div>
                <Badge variant="energy">Charging</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium">EV Charger</p>
                    <p className="text-sm text-muted-foreground">Ready</p>
                  </div>
                </div>
                <Badge variant="secondary">Idle</Badge>
              </div>
            </CardContent>
          </Card>
        </ComponentPreview>
      </div>

      {/* Page Header */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Page Header
        </h2>
        <p className="text-muted-foreground">
          Standard dashboard page header with title, description, and actions.
        </p>
        <ComponentPreview
          code={`<div className="flex items-center justify-between">
  <div>
    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
    <p className="text-muted-foreground">
      Welcome back! Here's your energy overview.
    </p>
  </div>
  <div className="flex items-center gap-2">
    <Button variant="outline">Export</Button>
    <Button>Add Device</Button>
  </div>
</div>`}
        >
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here&apos;s your energy overview.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Export</Button>
              <Button>Add Device</Button>
            </div>
          </div>
        </ComponentPreview>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Best Practices
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Use a 4-column grid for stat cards on desktop, 2 on tablet, 1 on mobile</li>
          <li>Show the most important metrics first (top-left)</li>
          <li>Include trend indicators (+/-%) to show change over time</li>
          <li>Use consistent icon sizes (h-4 w-4 for headers, h-5 w-5 for larger)</li>
          <li>Add status badges to indicate real-time device states</li>
          <li>Use color-coded backgrounds for hero metrics (green for positive, red for alerts)</li>
          <li>Keep card titles short and scannable</li>
          <li>Show units clearly (kW, %, €)</li>
        </ul>
      </div>
    </div>
  );
}
