"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Book, Palette, Component, Map, BarChart3, Table2, Activity, Cpu } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SitesOverviewExample } from "@/components/examples/sites-overview";
import { AnalyticsDashboardExample } from "@/components/examples/analytics-dashboard";
import { FleetDashboardExample } from "@/components/examples/fleet-dashboard";
import { EnergyMonitorExample } from "@/components/examples/energy-monitor";
import { EMSDashboardExample } from "@/components/examples/ems-dashboard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero */}
      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Dotted background */}
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="absolute inset-x-0 bottom-0 h-32 hero-gradient" />

          {/* Content */}
          <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 pb-24 pt-24 md:pt-32 md:pb-32 text-center px-4 md:px-8">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm border-travel-animation">
              <span className="mr-2">🌱</span>
              <span>Powering the distributed energy revolution</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Sourceful{" "}
              <span className="text-primary">Design System</span>
            </h1>
            <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
              Components, tokens, and guidelines for building consistent, accessible
              interfaces across Sourceful Energy products.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="/docs">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/components">
                  Browse Components
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Dashboard Examples */}
        <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
          <Tabs defaultValue="sites" className="w-full">
            <div className="flex items-center justify-center mb-6">
              <TabsList className="h-10">
                <TabsTrigger value="sites" className="gap-2">
                  <Map className="h-4 w-4" />
                  <span className="hidden sm:inline">Sites Overview</span>
                  <span className="sm:hidden">Sites</span>
                </TabsTrigger>
                <TabsTrigger value="analytics" className="gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span className="hidden sm:inline">Analytics</span>
                  <span className="sm:hidden">Charts</span>
                </TabsTrigger>
                <TabsTrigger value="fleet" className="gap-2">
                  <Table2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Fleet</span>
                  <span className="sm:hidden">Table</span>
                </TabsTrigger>
                <TabsTrigger value="monitor" className="gap-2">
                  <Activity className="h-4 w-4" />
                  <span className="hidden sm:inline">Energy Monitor</span>
                  <span className="sm:hidden">Monitor</span>
                </TabsTrigger>
                <TabsTrigger value="ems" className="gap-2">
                  <Cpu className="h-4 w-4" />
                  <span className="hidden sm:inline">Energy Management</span>
                  <span className="sm:hidden">EMS</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="sites" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
              <SitesOverviewExample />
            </TabsContent>

            <TabsContent value="analytics" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
              <AnalyticsDashboardExample />
            </TabsContent>

            <TabsContent value="fleet" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
              <FleetDashboardExample />
            </TabsContent>

            <TabsContent value="monitor" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
              <EnergyMonitorExample />
            </TabsContent>

            <TabsContent value="ems" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
              <EMSDashboardExample />
            </TabsContent>
          </Tabs>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto py-16 px-4 md:px-8 border-t">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/components" className="group block">
              <div className="rounded-lg border bg-card p-6 transition-all duration-200 group-hover:border-primary group-hover:bg-primary/5">
                <Component className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">50+ Components</h3>
                <p className="text-sm text-muted-foreground">
                  Production-ready React components built with Radix UI and Tailwind CSS.
                  Accessible by default.
                </p>
              </div>
            </Link>
            <Link href="/docs/tokens/colors" className="group block">
              <div className="rounded-lg border bg-card p-6 transition-all duration-200 group-hover:border-primary group-hover:bg-primary/5">
                <Palette className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Design Tokens</h3>
                <p className="text-sm text-muted-foreground">
                  Consistent colors, typography, spacing, and shadows.
                  CSS variables that work everywhere.
                </p>
              </div>
            </Link>
            <Link href="/brand" className="group block">
              <div className="rounded-lg border bg-card p-6 transition-all duration-200 group-hover:border-primary group-hover:bg-primary/5">
                <Book className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Brand Guidelines</h3>
                <p className="text-sm text-muted-foreground">
                  Voice, tone, and visual identity guidelines for consistent
                  communication across all touchpoints.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Quick Start */}
        <section className="max-w-7xl mx-auto py-16 border-t px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-3">1. Install the package</h3>
              <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto border border-sourceful-gray-200 dark:border-transparent">
                <pre>
                  <code>{`npm install @sourceful-energy/ui

# Import in your app
import { Button, Card, Input } from "@sourceful-energy/ui"
import "@sourceful-energy/ui/styles.css"`}</code>
                </pre>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">2. Add Claude Code support</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Download our CLAUDE.md template so Claude Code automatically uses the design system:
              </p>
              <div className="rounded-lg bg-sourceful-gray-100 dark:bg-sourceful-gray-800 p-4 font-mono text-sm text-sourceful-gray-900 dark:text-white overflow-x-auto border border-sourceful-gray-200 dark:border-transparent">
                <code>curl -o CLAUDE.md https://raw.githubusercontent.com/srcfl/srcful-design-system/main/CLAUDE.project-template.md</code>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                <Link href="/docs/claude-code" className="text-primary hover:underline">
                  Learn more about Claude Code setup →
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sourceful Energy. Open source under MIT license.
          </p>
          <div className="flex gap-4">
            <a href="https://sourceful.energy" className="text-sm text-muted-foreground hover:text-foreground">
              sourceful.energy
            </a>
            <a href="https://github.com/srcfl" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
