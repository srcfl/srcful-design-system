import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Utilities",
  description: "Unlock distributed flexibility at scale. Local execution for grid services, TSO certifications included, white-label ready.",
};
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { ArrowRight, Building2, Zap, Clock, Shield, TrendingUp, Users } from "lucide-react";

export default function UtilitiesPage() {
  const benefits = [
    {
      icon: Clock,
      title: "Real-time Grid Services",
      description: "Enable frequency response and demand flexibility with millisecond-level control that cloud APIs can't deliver.",
    },
    {
      icon: Shield,
      title: "Reduce Coordination Failures",
      description: "Stop losing money to negative pricing and curtailment. Our local execution layer bridges the gap between distributed assets and grid needs.",
    },
    {
      icon: TrendingUp,
      title: "Unlock Distributed Flexibility",
      description: "Aggregate residential and commercial assets into a virtual power plant you can actually control.",
    },
    {
      icon: Users,
      title: "White-label Platform",
      description: "Offer your customers a branded energy management experience while we handle the infrastructure.",
    },
  ];

  const stats = [
    { value: "€2.5B", label: "Annual coordination losses in EU" },
    { value: "700+", label: "Hours of negative pricing (2023)" },
    { value: "200ms", label: "Our response time" },
    { value: "2-5s", label: "Cloud API response time" },
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
                <Building2 className="h-3 w-3 mr-1" />
                For Utilities
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Grid services that{" "}
                <span className="text-primary">actually work</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Cloud platforms observe energy. We execute control. Partner with us
                to unlock the distributed flexibility your grid needs—at the speeds
                physics demands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/platform">
                    Learn About Platform
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                The coordination gap is costing you billions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                40-70 million EVs in Europe by 2030. 2,800 GWh of distributed storage
                that needs coordination. Cloud APIs respond in 2-5 seconds—but grid
                frequency must balance every second.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                The result? €2.5B destroyed annually in coordination failures.
                700+ hours of negative electricity pricing. Assets sitting idle
                when the grid needs them most.
              </p>
              <p className="text-lg font-medium">
                We bridge this gap with local execution infrastructure.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="font-semibold mb-4">Current partnerships</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span><strong>Kalmar Energi</strong> — Go-live imminent</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span><strong>NRGi (Denmark)</strong> — 250K customer pipeline</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span><strong>Fortum, Skellefteå Kraft</strong> — Active discussions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Why utilities partner with us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We enable utilities to deliver real grid services—not just dashboards.
              </p>
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

        {/* How it works */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                How the partnership works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">We provide the infrastructure</h3>
                <p className="text-muted-foreground">
                  Zap gateways, platform access, and API integration. You focus on customers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Your brand, our technology</h3>
                <p className="text-muted-foreground">
                  White-label the platform for your customers. We stay invisible.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Share the value</h3>
                <p className="text-muted-foreground">
                  Platform licensing + grid services margin. Aligned incentives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to unlock distributed flexibility?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how Sourceful can help you deliver real grid services.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Partnerships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
