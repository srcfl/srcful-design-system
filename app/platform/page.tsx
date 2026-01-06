import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform",
  description: "Local energy coordination infrastructure. 200ms local execution, cloud intelligence, protocol-agnostic integration.",
};
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { ArrowRight, Layers, Zap, Cloud, Shield, Activity, Code, ExternalLink } from "lucide-react";

export default function PlatformPage() {
  const layers = [
    {
      icon: Zap,
      title: "Edge Layer",
      description: "The Zap gateway executes locally in 200ms. Offline-capable, protocol-agnostic, data sovereign.",
      color: "text-yellow-500",
    },
    {
      icon: Layers,
      title: "Coordination Layer",
      description: "Our platform aggregates devices, optimizes energy flows, and interfaces with grid operators.",
      color: "text-primary",
    },
    {
      icon: Cloud,
      title: "Cloud Layer",
      description: "Analytics, reporting, and long-term optimization. The cloud does what cloud does best.",
      color: "text-blue-500",
    },
  ];

  const capabilities = [
    {
      title: "Device Management",
      description: "Register, monitor, and control all connected devices from a single dashboard.",
    },
    {
      title: "Energy Optimization",
      description: "Automatic load balancing, peak shaving, and arbitrage across your fleet.",
    },
    {
      title: "Grid Services",
      description: "Participate in frequency response, demand flexibility, and ancillary services.",
    },
    {
      title: "Analytics & Reporting",
      description: "Real-time insights, historical analysis, and compliance reporting.",
    },
    {
      title: "White-label Ready",
      description: "Your brand, our infrastructure. Full customization for partners.",
    },
    {
      title: "API First",
      description: "Everything accessible via API. Build your own experiences on top.",
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
            <div className="max-w-3xl text-left">
              <Badge variant="secondary" className="mb-6">
                <Layers className="h-3 w-3 mr-1" />
                Platform
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-left">
                Local energy coordination{" "}
                <span className="text-primary">infrastructure</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-left">
                The software layer that makes distributed energy actually work.
                Local execution for speed. Cloud intelligence for optimization.
                The best of both worlds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="mailto:partners@sourceful.energy">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                    Developer Docs
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
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
                <Card key={layer.title} className="text-center">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4`}>
                      <Icon className={`h-8 w-8 ${layer.color}`} />
                    </div>
                    <CardTitle>{layer.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {layer.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Key differentiator */}
        <section className="border-t bg-muted/30">
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
                  <div className="bg-background rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-primary">200ms</div>
                    <div className="text-sm text-muted-foreground">Local response</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-muted-foreground">2-5s</div>
                    <div className="text-sm text-muted-foreground">Cloud response</div>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="font-semibold mb-4">Supported protocols</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["P1 (Smart Meters)", "Modbus", "MQTT", "OCPP", "SunSpec", "REST API"].map((protocol) => (
                    <div key={protocol} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">{protocol}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Compatible with 180M EU smart meters today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Platform capabilities
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <Card key={capability.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{capability.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                <a href="mailto:partners@sourceful.energy">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
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
