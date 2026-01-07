import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Zap Gateway",
  description: "€39 device with 200ms local response. Connect your smart meter, solar, battery, and EV charger. Offline-capable, protocol-agnostic.",
};
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { V2XWaitlistSection } from "@/components/v2x-waitlist-section";
import { ArrowRight, Zap, Clock, Wifi, WifiOff, Shield, Cpu, ExternalLink } from "lucide-react";

export default function ZapPage() {
  const specs = [
    { label: "Response Time", value: "200ms", description: "Local execution" },
    { label: "Price", value: "€39", description: "Sold at-cost" },
    { label: "Compatibility", value: "180M", description: "EU smart meters" },
    { label: "Protocols", value: "5+", description: "P1, Modbus, MQTT, OCPP" },
  ];

  const features = [
    {
      icon: Clock,
      title: "200ms Local Response",
      description: "Execute commands at the edge. No round-trip to the cloud for time-critical operations.",
    },
    {
      icon: WifiOff,
      title: "Offline Capable",
      description: "Keeps working when internet goes down. Local decision-making with cloud sync when available.",
    },
    {
      icon: Shield,
      title: "Data Sovereignty",
      description: "Energy data stays local. You control what goes to the cloud and when.",
    },
    {
      icon: Cpu,
      title: "Protocol Translation",
      description: "P1, Modbus, MQTT, OCPP—we handle the translation layer so you don't have to.",
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
              <div className="text-left">
                <Badge variant="secondary" className="mb-6">
                  <Zap className="h-3 w-3 mr-1" />
                  Hardware
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-left">
                  The Zap Gateway
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-left">
                  The €39 device that bridges the gap between cloud platforms and
                  physical energy infrastructure. Local execution at the edge.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                      Order Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://developer.sourceful.energy/hardware" target="_blank" rel="noopener noreferrer">
                      Technical Docs
                    </a>
                  </Button>
                </div>
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

        {/* Specs */}
        <section className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {specs.map((spec) => (
                <div key={spec.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{spec.value}</div>
                  <div className="font-medium">{spec.label}</div>
                  <div className="text-sm text-muted-foreground">{spec.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              The missing link in distributed energy
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Cloud platforms observe energy. They poll devices every few seconds,
              aggregate data, and provide dashboards. But they can't execute control
              fast enough for real grid services.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Grid frequency must balance every second. Cloud APIs respond in 2-5 seconds.
              This gap is unbridgeable through software optimization alone.
            </p>
            <p className="text-lg font-medium">
              The Zap bridges this gap with local execution.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Built for the edge
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title}>
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Technical specifications
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Processor</span>
                    <span className="font-medium">ESP32-S3</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Connectivity</span>
                    <span className="font-medium">WiFi, Ethernet, RS485</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Protocols</span>
                    <span className="font-medium">P1, Modbus, MQTT, OCPP</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Power</span>
                    <span className="font-medium">USB-C, 5V</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-medium">&lt;200ms local</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted-foreground">Firmware</span>
                    <span className="font-medium">OTA updates</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="font-semibold mb-4">Compatible devices</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Smart Meters (P1)",
                    "EV Chargers",
                    "Battery Systems",
                    "Inverters",
                    "Heat Pumps",
                    "V2X Systems",
                  ].map((device) => (
                    <div key={device} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">{device}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Works with most energy devices through standard protocols.
                  Custom integrations available for OEM partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* V2X Waitlist */}
        <V2XWaitlistSection />

        {/* Pricing */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Sold at cost
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're a platform company, not a hardware company. The Zap is sold
                at BOM cost to maximize adoption. We make money on platform services.
              </p>
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-primary mb-2">€39</div>
                  <div className="text-muted-foreground mb-6">BOM cost per unit</div>
                  <Button size="lg" asChild>
                    <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                      Order Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to build with local execution?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Order a Zap and start building energy applications that actually respond.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                  Order Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                  Developer Docs
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
