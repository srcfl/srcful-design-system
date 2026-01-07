"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, BarChart3, Activity, Map, Settings } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import dashboard examples to reduce initial bundle
const SitesOverviewExample = dynamic(
  () => import("@/components/examples/sites-overview").then((mod) => mod.SitesOverviewExample),
  {
    loading: () => <DashboardSkeleton />,
    ssr: false,
  }
);

const FleetDashboardExample = dynamic(
  () => import("@/components/examples/fleet-dashboard").then((mod) => mod.FleetDashboardExample),
  {
    loading: () => <DashboardSkeleton />,
    ssr: false,
  }
);

const AnalyticsDashboardExample = dynamic(
  () => import("@/components/examples/analytics-dashboard").then((mod) => mod.AnalyticsDashboardExample),
  {
    loading: () => <DashboardSkeleton />,
    ssr: false,
  }
);

const EMSDashboardExample = dynamic(
  () => import("@/components/examples/ems-dashboard").then((mod) => mod.EMSDashboardExample),
  {
    loading: () => <DashboardSkeleton />,
    ssr: false,
  }
);

function DashboardSkeleton() {
  return (
    <div className="h-[500px] bg-muted/50 rounded-lg animate-pulse flex items-center justify-center">
      <div className="text-muted-foreground">Loading dashboard...</div>
    </div>
  );
}

const dashboards = [
  {
    id: "sites",
    label: "Sites Overview",
    icon: Map,
    description: "Geographic view of all connected sites with real-time status",
    component: SitesOverviewExample,
  },
  {
    id: "fleet",
    label: "Fleet Management",
    icon: LayoutDashboard,
    description: "Manage all devices across your entire fleet",
    component: FleetDashboardExample,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    description: "Energy production, consumption, and savings analytics",
    component: AnalyticsDashboardExample,
  },
  {
    id: "ems",
    label: "EMS Control",
    icon: Settings,
    description: "Energy management system with automated scheduling",
    component: EMSDashboardExample,
  },
];

export function PlatformDashboardPreview() {
  const [activeTab, setActiveTab] = useState("sites");

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1">
          {dashboards.map((dashboard) => {
            const Icon = dashboard.icon;
            return (
              <TabsTrigger
                key={dashboard.id}
                value={dashboard.id}
                className="flex items-center gap-2 py-2 px-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{dashboard.label}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {dashboards.map((dashboard) => {
          const DashboardComponent = dashboard.component;
          return (
            <TabsContent key={dashboard.id} value={dashboard.id} className="mt-4">
              <Card className="overflow-hidden">
                <div className="p-4 border-b bg-muted/30 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{dashboard.label}</h3>
                    <p className="text-sm text-muted-foreground">{dashboard.description}</p>
                  </div>
                  <Badge variant="secondary">Interactive Demo</Badge>
                </div>
                <div className="p-4 bg-background">
                  <div className="rounded-lg overflow-hidden border">
                    <DashboardComponent />
                  </div>
                </div>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>

      <p className="text-center text-sm text-muted-foreground">
        These are interactive demos with sample data. Real dashboards show your actual energy data.
      </p>
    </div>
  );
}
