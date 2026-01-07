"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { WaitlistForm } from "@/components/waitlist-form";
import {
  Car,
  Zap,
  TrendingUp,
  Shield,
  Battery,
  Home,
  Grid3X3,
  ArrowRight,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

export default function V2XPage() {
  const benefits = [
    {
      icon: Battery,
      title: "Your EV as Home Battery",
      description:
        "A typical EV battery (50-100 kWh) can power your home for 2-4 days. Use stored energy during peak hours or outages.",
    },
    {
      icon: TrendingUp,
      title: "Arbitrage Savings",
      description:
        "Charge your EV when electricity is cheap (off-peak, solar surplus) and use that energy when prices spike. Save €500-1,500/year.",
    },
    {
      icon: Home,
      title: "Backup Power",
      description:
        "Power critical appliances during outages. Your EV becomes an emergency generator without the noise or fumes.",
    },
    {
      icon: Grid3X3,
      title: "Grid Services",
      description:
        "Participate in grid flexibility programs. Get paid for helping balance the grid during peak demand.",
    },
  ];

  const useCases = [
    {
      title: "V2H (Vehicle-to-Home)",
      description: "Power your home from your EV. Ideal for off-peak arbitrage and backup power.",
      savings: "€500-800/year",
    },
    {
      title: "V2G (Vehicle-to-Grid)",
      description: "Sell energy back to the grid during high demand. Requires utility partnership.",
      savings: "€200-500/year",
    },
    {
      title: "V2L (Vehicle-to-Load)",
      description: "Power external devices directly. Great for camping, construction, or emergencies.",
      savings: "Convenience",
    },
  ];

  const compatibleChargers = [
    { name: "Easee Home", status: "Testing" },
    { name: "Zaptec Go", status: "Testing" },
    { name: "ChargeAmps Halo", status: "Planned" },
    { name: "Wallbox Quasar 2", status: "Planned" },
  ];

  const compatibleEVs = [
    "Hyundai Ioniq 5/6",
    "Kia EV6/EV9",
    "Genesis GV60/70",
    "Ford F-150 Lightning",
    "Nissan Leaf (CHAdeMO)",
    "BYD models (selected)",
  ];

  const requirements = [
    "Zap gateway (€39)",
    "Bidirectional EV charger",
    "V2X-capable electric vehicle",
    "Sourceful platform subscription",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto py-24 md:py-32 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-6 border-yellow-500/50 text-yellow-600 dark:text-yellow-400">
                  <Car className="h-3 w-3 mr-1" />
                  Coming in 2026
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Turn your EV into a{" "}
                  <span className="text-yellow-600 dark:text-yellow-400">home battery</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  V2X (Vehicle-to-Everything) lets you use your electric vehicle's battery
                  to power your home, sell to the grid, and save hundreds of euros per year.
                  All coordinated through the Zap gateway.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white" asChild>
                    <a href="#waitlist">
                      Join the Waitlist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/zap">
                      Learn About the Zap
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 md:w-60 md:h-60 bg-gradient-to-br from-yellow-500/30 to-yellow-500/10 rounded-full flex items-center justify-center">
                      <Car className="h-24 w-24 md:h-32 md:w-32 text-yellow-600 dark:text-yellow-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-background rounded-lg p-3 shadow-lg border">
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span className="font-semibold">50-100 kWh</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Typical EV battery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-600 dark:text-yellow-400">€500-1,500</div>
                <div className="text-sm text-muted-foreground">Annual savings potential</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-600 dark:text-yellow-400">2-4 days</div>
                <div className="text-sm text-muted-foreground">Home backup power</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-600 dark:text-yellow-400">50-100 kWh</div>
                <div className="text-sm text-muted-foreground">Typical EV battery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-600 dark:text-yellow-400">2026</div>
                <div className="text-sm text-muted-foreground">Launch target</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why V2X matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your EV battery is a significant investment. V2X lets you get more value from it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <Card key={benefit.title}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
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
        </section>

        {/* Use Cases */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                V2X modes
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((useCase) => (
                <Card key={useCase.title} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {useCase.description}
                    </CardDescription>
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                      {useCase.savings}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compatibility */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Compatible equipment
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  V2X requires a bidirectional charger and a compatible EV. We're testing with
                  leading brands and will expand support over time.
                </p>

                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Chargers</h3>
                  <div className="space-y-3">
                    {compatibleChargers.map((charger) => (
                      <div key={charger.name} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="font-medium">{charger.name}</span>
                        <Badge variant={charger.status === "Testing" ? "secondary" : "outline"}>
                          {charger.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-muted rounded-lg p-6 mb-6">
                  <h3 className="font-semibold mb-4">Compatible EVs</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {compatibleEVs.map((ev) => (
                      <div key={ev} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{ev}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    V2X capability varies by market and vehicle configuration.
                    Check with your dealer for specific availability.
                  </p>
                </div>

                <div className="bg-background border rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Requirements</h3>
                  <ul className="space-y-2">
                    {requirements.map((req) => (
                      <li key={req} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Section */}
        <section id="waitlist" className="border-t bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-background">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-yellow-500/50 text-yellow-600 dark:text-yellow-400">
                Early Access
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Be first to try V2X
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join the waitlist to get early access when V2X launches. Early adopters will
                have the opportunity to participate in testing and shape the final product.
              </p>

              <Card className="bg-background/80 backdrop-blur">
                <CardContent className="p-6">
                  <WaitlistForm
                    feature="v2x"
                    title="Get Early Access"
                    description="Enter your email to join the V2X waitlist. We'll notify you when it's ready for testing."
                    buttonText="Join V2X Waitlist"
                    successMessage="You're on the list! We'll be in touch when V2X is ready for testing."
                  />
                </CardContent>
              </Card>

              <p className="text-xs text-muted-foreground mt-6">
                By joining, you agree to receive updates about V2X. No spam, just updates.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Start with the Zap today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Get the Zap gateway now and be ready for V2X when it launches.
              Start optimizing your energy today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                  Order Zap Gateway
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/use-cases/homeowners">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
