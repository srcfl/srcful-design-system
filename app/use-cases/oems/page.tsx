import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For OEMs",
  description: "Make your hardware grid-intelligent. Integrate 200ms local control into EV chargers, batteries, and inverters. Protocol-agnostic.",
};
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { ArrowRight, Zap, Cpu, Plug, Shield, Clock, Code } from "lucide-react";

export default function OEMsPage() {
  const benefits = [
    {
      icon: Clock,
      title: "Local Execution Built-in",
      description: "Ship products with 200ms response time. No cloud dependency for time-critical operations.",
    },
    {
      icon: Plug,
      title: "Protocol Agnostic",
      description: "We handle P1, Modbus, MQTT, OCPP translation. Focus on your hardware, not integration hell.",
    },
    {
      icon: Shield,
      title: "Grid-Ready Certification",
      description: "Our TSO certifications accelerate your path to market. 2-4 years of regulatory work, done.",
    },
    {
      icon: Code,
      title: "Developer Experience",
      description: "Full API access, comprehensive docs, and design system for building companion apps.",
    },
  ];

  const integrations = [
    "EV Chargers",
    "Battery Storage",
    "Inverters",
    "Heat Pumps",
    "Smart Meters",
    "V2X Systems",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="relative max-w-7xl mx-auto py-24 md:py-32 px-4 md:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-6">
                <Cpu className="h-3 w-3 mr-1" />
                For OEMs
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Make your hardware{" "}
                <span className="text-primary">grid-intelligent</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Integrate local control into EV chargers, batteries, and inverters.
                Ship products that respond in milliseconds and work offline.
                We handle the coordination layer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="mailto:partners@sourceful.energy">
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://developer.sourceful.energy/hardware" target="_blank" rel="noopener noreferrer">
                    Hardware Docs
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {integrations.map((integration) => (
                <Badge key={integration} variant="outline" className="text-sm py-2 px-4">
                  {integration}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Your hardware is smart. Make it grid-smart.
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Energy hardware manufacturers face a choice: build your own coordination
                layer (expensive, slow) or rely on cloud platforms that can't deliver
                real-time control (2-5 second latency).
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We offer a third option: integrate the Zap gateway and get local execution
                at 200ms, grid service capabilities, and a developer platform your
                customers will love.
              </p>
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <Zap className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-semibold">The Zap Gateway</div>
                  <div className="text-sm text-muted-foreground">€39 • 200ms response • Offline-capable</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="border-destructive/50 bg-destructive/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-destructive">Without Sourceful</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 2-5 second cloud latency</li>
                    <li>• Complex protocol integration</li>
                    <li>• No grid service capability</li>
                    <li>• Years of regulatory work</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary/50 bg-primary/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-primary">With Sourceful</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 200ms local execution</li>
                    <li>• Protocol-agnostic integration</li>
                    <li>• Grid services ready</li>
                    <li>• TSO certifications included</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Why OEMs integrate with us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integration path */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Integration path
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Technical Review", desc: "We assess your hardware and define integration scope" },
                { step: "2", title: "Integration", desc: "Embed Zap gateway or integrate via our APIs" },
                { step: "3", title: "Certification", desc: "Leverage our TSO certifications for market access" },
                { step: "4", title: "Launch", desc: "Ship grid-intelligent products to market" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to make your hardware grid-intelligent?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how Sourceful can accelerate your path to market.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:partners@sourceful.energy">
                  Contact Partnerships
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://developer.sourceful.energy/hardware" target="_blank" rel="noopener noreferrer">
                  View Hardware Docs
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
