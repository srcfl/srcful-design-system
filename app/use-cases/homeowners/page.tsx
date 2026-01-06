import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Homeowners",
  description: "Cut energy bills with real-time pricing, peak demand shaving, and V2X. One €39 device for solar, battery, EV, and smart home coordination.",
};
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import {
  ArrowRight,
  Home,
  Zap,
  Sun,
  Car,
  TrendingDown,
  Coins,
  Clock,
  Smartphone,
  Battery,
  BarChart3,
  Shield,
  ExternalLink
} from "lucide-react";

export default function HomeownersPage() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Cut Peak Demand Charges",
      description: "Get real-time alerts before expensive peaks hit. Shift usage to cheaper hours and save up to €266/year on demand fees alone.",
    },
    {
      icon: BarChart3,
      title: "See Every kWh",
      description: "Real-time consumption monitoring with hourly spot prices. Know exactly when electricity is cheap—and when it's 10x more expensive.",
    },
    {
      icon: Coins,
      title: "Earn Rewards",
      description: "Participate in grid balancing services. Your flexibility has value—get paid for helping stabilize the grid.",
    },
    {
      icon: Shield,
      title: "Multi-Brand Coordination",
      description: "One app for all your devices. Solar, battery, EV charger, heat pump—regardless of manufacturer.",
    },
  ];

  const useCases = [
    {
      icon: Home,
      title: "Smart Home Energy",
      description: "Connect your P1 smart meter and see real-time consumption. Time your dishwasher, laundry, and heating to the cheapest hours.",
      savings: "~€266/year",
      savingsLabel: "Peak demand savings",
    },
    {
      icon: Sun,
      title: "Solar & Battery",
      description: "AI-driven optimization for your solar PV and battery. Automatically stop exports during negative prices and maximize self-consumption.",
      savings: "100%",
      savingsLabel: "Self-consumption boost",
    },
    {
      icon: Car,
      title: "V2X & EV Charging",
      description: "Turn your EV into a revenue-generating asset. Charge when prices are low, sell back when they're high. Vehicle-to-Home and Vehicle-to-Grid ready.",
      savings: "3,000-8,000 SEK",
      savingsLabel: "Annual V2X potential",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Get the Zap",
      description: "€39, one-time purchase. Plugs into your P1 smart meter in 5 minutes.",
    },
    {
      step: "2",
      title: "Download the App",
      description: "iOS and Android. See real-time prices and consumption instantly.",
    },
    {
      step: "3",
      title: "Connect Your Devices",
      description: "Solar inverter, battery, EV charger—the Zap coordinates them all.",
    },
    {
      step: "4",
      title: "Start Saving",
      description: "Automatic optimization runs 24/7. No manual intervention needed.",
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
                  <Home className="h-3 w-3 mr-1" />
                  For Homeowners
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-left">
                  Your home,{" "}
                  <span className="text-primary">finally intelligent</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-left">
                  Energy prices change every hour. Sometimes by 10x.
                  The Zap connects your home to real-time prices and coordinates
                  all your devices—solar, battery, EV—to save you money automatically.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                      Get the Zap — €39
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="https://sourceful.energy/app-downloads" target="_blank" rel="noopener noreferrer">
                      <Smartphone className="mr-2 h-4 w-4" />
                      Download App
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://framerusercontent.com/images/52u6CS3UoJqPVCIoGLR1YrUww.png?scale-down-to=1024"
                  alt="Sourceful Energy Zap Gateway"
                  className="w-full max-w-sm rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">€39</div>
                <div className="text-sm text-muted-foreground">One-time cost</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">5 min</div>
                <div className="text-sm text-muted-foreground">Setup time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">€266+</div>
                <div className="text-sm text-muted-foreground">Annual savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">30 day</div>
                <div className="text-sm text-muted-foreground">Money-back guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              One device, endless savings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have solar, an EV, or just want to cut your electricity bill—the Zap makes it automatic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <Card key={useCase.title} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">
                      {useCase.description}
                    </CardDescription>
                    <div className="pt-4 border-t">
                      <div className="text-2xl font-bold text-primary">{useCase.savings}</div>
                      <div className="text-sm text-muted-foreground">{useCase.savingsLabel}</div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Why homeowners love the Zap
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                          <CardDescription className="text-base">
                            {benefit.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* V2X Feature */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Car className="h-3 w-3 mr-1" />
                  V2X Ready
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-left">
                  Your EV is a power plant
                </h2>
                <p className="text-lg text-muted-foreground mb-6 text-left">
                  A typical EV battery holds 60-100 kWh—enough to power your home for days.
                  With V2X technology, your car becomes a revenue-generating asset instead of
                  sitting idle 95% of the time.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>V2H</strong> — Power your home from your EV</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>V2G</strong> — Sell excess energy back to the grid</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>Smart charging</strong> — Always ready when you need to drive</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span><strong>Solar integration</strong> — Store daytime solar for evening use</span>
                  </li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <h3 className="font-semibold mb-6">V2X savings example (Sweden)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-muted-foreground">Energy trading profit</span>
                    <span className="font-bold text-primary">+5,200 SEK</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-muted-foreground">Peak demand reduction</span>
                    <span className="font-bold text-primary">+4,800 SEK</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-muted-foreground">Grid services rewards</span>
                    <span className="font-bold text-primary">+2,200 SEK</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold">Total annual benefit</span>
                    <span className="text-2xl font-bold text-primary">12,200 SEK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Get started in minutes
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {howItWorks.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Ready to start saving?</h2>
                    <p className="text-muted-foreground mb-6">
                      €39 one-time. 5-minute setup. 30-day money-back guarantee.
                      Your home's energy will never be the same.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button size="lg" asChild>
                        <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                          Get the Zap
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <a href="https://sourceful.energy/app-downloads" target="_blank" rel="noopener noreferrer">
                          <Smartphone className="mr-2 h-4 w-4" />
                          Get the App
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary mb-2">€39</div>
                      <div className="text-muted-foreground">One-time purchase</div>
                      <div className="text-sm text-muted-foreground mt-1">Free shipping • 30-day guarantee</div>
                    </div>
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
