"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Map, BarChart3, Table2, Activity, Cpu, Coins, Zap, Building2, Wrench, Code, Users, ExternalLink, CircuitBoard } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/animations";
import { SitesOverviewExample } from "@/components/examples/sites-overview";
import { AnalyticsDashboardExample } from "@/components/examples/analytics-dashboard";
import { FleetDashboardExample } from "@/components/examples/fleet-dashboard";
import { EnergyMonitorExample } from "@/components/examples/energy-monitor";
import { EMSDashboardExample } from "@/components/examples/ems-dashboard";
import { SavingsRewardsExample } from "@/components/examples/savings-rewards";
import { PartnerLogoCarousel } from "@/components/partner-logo-carousel";

export default function Home() {
  const stats = [
    { value: "€2.5B", label: "Destroyed annually in coordination failures" },
    { value: "700+", label: "Hours of negative electricity pricing" },
    { value: "200ms", label: "Local response time (vs 2-5s cloud)" },
    { value: "€39", label: "Zap gateway cost" },
  ];

  const audiences = [
    {
      icon: Users,
      title: "Homeowners",
      description: "Cut energy bills with real-time pricing, peak shaving, and V2X. One device for all your energy needs.",
      href: "/use-cases/homeowners",
    },
    {
      icon: Building2,
      title: "Utilities",
      description: "Enable grid services at scale with local execution. Partner with us to unlock distributed flexibility.",
      href: "/use-cases/utilities",
    },
    {
      icon: CircuitBoard,
      title: "OEMs",
      description: "Integrate 200ms local control into EV chargers, batteries, and inverters. Protocol-agnostic.",
      href: "/use-cases/oems",
    },
    {
      icon: Wrench,
      title: "Installers",
      description: "Offer smart energy solutions to your customers. Simple integration, recurring revenue.",
      href: "/use-cases/installers",
    },
    {
      icon: Code,
      title: "Developers",
      description: "Build on our platform. API-first design, comprehensive docs, active community.",
      href: "/developers",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="absolute inset-x-0 bottom-0 h-32 hero-gradient" />

          <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 pb-16 pt-24 md:pt-32 md:pb-24 text-center px-4 md:px-8">
            <FadeIn delay={0}>
              <Badge variant="outline" className="border-primary/50">
                <span className="mr-2">⚡</span>
                Local Energy Coordination Infrastructure
              </Badge>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl">
                The physical rails that make{" "}
                <span className="text-primary">distributed energy</span>{" "}
                actually work
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
                Cloud APIs respond in 2-5 seconds. Grid frequency must balance every second.
                We build the local execution layer that bridges this gap—giving utilities and
                homeowners actual control over distributed energy.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Button size="lg" asChild>
                  <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                    Start Building
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                    Get the Zap
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y bg-muted/30">
          <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.value}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Dashboard Demo */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <FadeIn className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Platform Preview</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Real-time energy coordination
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitor sites, analyze performance, manage fleets, and automate energy optimization—all from one platform.
            </p>
          </FadeIn>

          <Tabs defaultValue="sites" className="w-full">
            <div className="flex items-center justify-center mb-6 overflow-x-auto">
              <TabsList className="h-10">
                <TabsTrigger value="sites" className="gap-2">
                  <Map className="hidden sm:block h-4 w-4" />
                  <span className="hidden sm:inline">Sites Overview</span>
                  <span className="sm:hidden">Sites</span>
                </TabsTrigger>
                <TabsTrigger value="analytics" className="gap-2">
                  <BarChart3 className="hidden sm:block h-4 w-4" />
                  <span className="hidden sm:inline">Analytics</span>
                  <span className="sm:hidden">Charts</span>
                </TabsTrigger>
                <TabsTrigger value="fleet" className="gap-2">
                  <Table2 className="hidden sm:block h-4 w-4" />
                  <span className="hidden sm:inline">Fleet</span>
                  <span className="sm:hidden">Table</span>
                </TabsTrigger>
                <TabsTrigger value="monitor" className="gap-2">
                  <Activity className="hidden sm:block h-4 w-4" />
                  <span className="hidden sm:inline">Energy Monitor</span>
                  <span className="sm:hidden">Monitor</span>
                </TabsTrigger>
                <TabsTrigger value="ems" className="gap-2">
                  <Cpu className="hidden sm:block h-4 w-4" />
                  <span className="hidden sm:inline">Automate</span>
                  <span className="sm:hidden">Auto</span>
                </TabsTrigger>
                <TabsTrigger value="savings" className="gap-2">
                  <Coins className="hidden sm:block h-4 w-4" />
                  <span className="hidden sm:inline">Savings</span>
                  <span className="sm:hidden">Save</span>
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
            <TabsContent value="savings" className="mt-0 focus-visible:outline-none focus-visible:ring-0 data-[state=inactive]:hidden" tabIndex={-1} forceMount>
              <SavingsRewardsExample />
            </TabsContent>
          </Tabs>
        </section>

        {/* Audiences */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Built for the energy ecosystem
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From utilities managing grid flexibility to developers building the next energy app.
              </p>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" staggerDelay={0.1}>
              {audiences.map((audience) => {
                const Icon = audience.icon;
                return (
                  <StaggerItem key={audience.title}>
                    <Link href={audience.href} className="no-underline hover:no-underline block h-full">
                      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
                        <CardHeader>
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle>{audience.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            {audience.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* Developer Section */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Code className="h-3 w-3 mr-1" />
                  For Developers
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  API-first platform for energy applications
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Build energy apps that respond in milliseconds, not seconds.
                  Our local execution layer handles the physics while you focus on the experience.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>RESTful API with WebSocket support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Protocol-agnostic: P1, Modbus, MQTT, OCPP</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Comprehensive webhooks for real-time events</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Active Discord community for support</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                      Open Dev Portal
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/developers">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6 font-mono text-sm">
                <div className="text-muted-foreground mb-4"># Control a device in milliseconds</div>
                <pre className="text-foreground overflow-x-auto">
{`curl -X POST https://api.sourceful.energy/v1/devices/dev_123/control \\
  -H "Authorization: Bearer src_live_..." \\
  -d '{
    "action": "start_charging",
    "params": {
      "rate_kw": 7.4,
      "duration_minutes": 120
    }
  }'

# Response from local Zap gateway
{
  "status": "executed",
  "latency_ms": 187,
  "device": "dev_123",
  "action": "start_charging"
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* The Zap */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Hardware</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-left">
                  The Zap Gateway
                </h2>
                <p className="text-lg text-muted-foreground mb-6 text-left">
                  Local execution at the edge. 200ms response time, offline-capable,
                  compatible with 180M EU smart meters. The missing link between
                  cloud platforms and physical energy infrastructure.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>200ms local response time</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Offline-capable with local decision making</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>P1, Modbus, MQTT, OCPP protocols</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Data sovereignty—stays local</span>
                  </li>
                </ul>

                <Button asChild>
                  <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                    Order Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="https://framerusercontent.com/images/52u6CS3UoJqPVCIoGLR1YrUww.png?scale-down-to=1024"
                  alt="Sourceful Energy Zap Gateway"
                  className="w-full max-w-md rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 md:px-8">
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                Trusted by leading energy companies
              </p>
            </div>
            <PartnerLogoCarousel speed={40} />
          </div>
        </section>

        {/* Community CTA */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Join the Community</h3>
                      <p className="text-muted-foreground">
                        Connect with developers, get support, and shape the future of distributed energy.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="outline" asChild>
                      <a href="https://discord.gg/srcful" target="_blank" rel="noopener noreferrer">
                        Join Discord
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild>
                      <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                        Dev Portal
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
