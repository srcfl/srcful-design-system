import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { PlatformDashboardPreview } from "@/components/platform-dashboard-preview";
import { PartnerLogoCarousel, partnerCategories } from "@/components/partner-logo-carousel";
import { ArrowRight, Layers, Zap, Cloud, Shield, Activity, Code, ExternalLink, Server, Gauge, BarChart3, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform",
  description: "Local energy coordination infrastructure. 200ms local execution, cloud intelligence, protocol-agnostic integration.",
};

export default function PlatformPage() {
  const layers = [
    {
      icon: Zap,
      title: "Edge Layer",
      subtitle: "The Zap Gateway",
      description: "Local execution in 200ms. Offline-capable, protocol-agnostic, data sovereign. Runs automations without cloud dependency.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      features: ["200ms response", "Offline mode", "Local storage"],
    },
    {
      icon: Layers,
      title: "Coordination Layer",
      subtitle: "Sourceful Platform",
      description: "Aggregates devices, optimizes energy flows, and interfaces with grid operators. The brain of the operation.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: ["Fleet management", "Optimization", "Grid services"],
    },
    {
      icon: Cloud,
      title: "Cloud Layer",
      subtitle: "Analytics & Intelligence",
      description: "Long-term analytics, machine learning, and reporting. The cloud does what cloud does best.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      features: ["ML predictions", "Reporting", "Integrations"],
    },
  ];

  const capabilities = [
    {
      icon: Server,
      title: "Device Management",
      description: "Register, monitor, and control all connected devices from a single dashboard. Real-time status and remote firmware updates.",
    },
    {
      icon: Gauge,
      title: "Energy Optimization",
      description: "Automatic load balancing, peak shaving, and arbitrage. AI-powered scheduling based on prices, weather, and usage patterns.",
    },
    {
      icon: Activity,
      title: "Grid Services",
      description: "Participate in frequency response, demand flexibility, and ancillary services. TSO certifications included.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Real-time insights, historical analysis, and compliance reporting. Export to any format.",
    },
    {
      icon: Users,
      title: "White-label Ready",
      description: "Your brand, our infrastructure. Full customization for partners including mobile apps and dashboards.",
    },
    {
      icon: Code,
      title: "API First",
      description: "Everything accessible via REST API and WebSockets. Build your own experiences on top of our infrastructure.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="relative max-w-7xl mx-auto py-24 md:py-32 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-6">
                  <Layers className="h-3 w-3 mr-1" />
                  Platform
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Local energy coordination{" "}
                  <span className="text-primary">infrastructure</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  The software layer that makes distributed energy actually work.
                  Local execution for speed. Cloud intelligence for optimization.
                  The best of both worlds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Contact Sales
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                      Developer Docs
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Architecture diagram visualization */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <Cloud className="h-8 w-8 text-blue-500" />
                      <div>
                        <div className="font-semibold">Cloud Layer</div>
                        <div className="text-sm text-muted-foreground">Analytics & ML</div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-0.5 h-8 bg-border" />
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <Layers className="h-8 w-8 text-primary" />
                      <div>
                        <div className="font-semibold">Coordination Layer</div>
                        <div className="text-sm text-muted-foreground">Sourceful Platform</div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-0.5 h-8 bg-border" />
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <Zap className="h-8 w-8 text-yellow-500" />
                      <div>
                        <div className="font-semibold">Edge Layer</div>
                        <div className="text-sm text-muted-foreground">Zap Gateway • 200ms</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="border-b">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Platform Preview</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                See the platform in action
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore interactive dashboards showing real-time energy coordination, fleet management, and analytics.
              </p>
            </div>
            <PlatformDashboardPreview />
          </div>
        </section>

        {/* Architecture */}
        <section className="bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Three-layer architecture
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Local execution where speed matters. Cloud intelligence where it adds value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {layers.map((layer) => {
                const Icon = layer.icon;
                return (
                  <Card key={layer.title} className="relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 ${layer.bgColor.replace('/10', '')}`} />
                    <CardHeader>
                      <div className={`w-14 h-14 ${layer.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                        <Icon className={`h-7 w-7 ${layer.color}`} />
                      </div>
                      <CardTitle>{layer.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{layer.subtitle}</p>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {layer.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {layer.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key differentiator */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Why local execution matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Grid frequency must balance every second. Cloud APIs respond in 2-5 seconds.
                  This gap is unbridgeable through software optimization alone.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our platform pushes execution to the edge. The Zap gateway responds in 200ms,
                  works offline, and keeps data local. The cloud handles what cloud does best:
                  analytics, optimization, and coordination at scale.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-lg p-4 text-center border border-primary/20">
                    <div className="text-3xl font-bold text-primary">200ms</div>
                    <div className="text-sm text-muted-foreground">Local response</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-muted-foreground">2-5s</div>
                    <div className="text-sm text-muted-foreground">Cloud response</div>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="font-semibold mb-4">Supported protocols</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["P1 (Smart Meters)", "Modbus RTU/TCP", "MQTT", "OCPP 1.6/2.0", "SunSpec", "REST API"].map((protocol) => (
                    <div key={protocol} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">{protocol}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Compatible with 180M EU smart meters today. More integrations coming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Platform capabilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage and optimize distributed energy assets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <Card key={capability.title}>
                    <CardHeader>
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{capability.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{capability.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 md:px-8">
            <div className="text-center mb-8">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                Integrated with leading energy brands
              </p>
            </div>
            <PartnerLogoCarousel speed={35} />
          </div>
        </section>

        {/* Business model */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Simple, aligned pricing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Platform-only model. We succeed when you succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">SaaS Licensing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">€5-10</div>
                  <CardDescription>Per device per year</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Grid Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">15-25%</div>
                  <CardDescription>Revenue share margin</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">API Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">Usage</div>
                  <CardDescription>Based pricing</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to see it in action?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a demo or explore the developer documentation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                  Developer Docs
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
