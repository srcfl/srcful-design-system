import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Installers",
  description: "Turn installations into recurring revenue. Offer smart energy solutions with simple integration and full support.",
};
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { ArrowRight, Wrench, TrendingUp, Users, Zap, Clock, Shield } from "lucide-react";

export default function InstallersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Recurring Revenue",
      description: "Move beyond one-time installations. Offer ongoing energy optimization services with monthly fees.",
    },
    {
      icon: Clock,
      title: "Simple Installation",
      description: "The Zap gateway installs in minutes. No complex configuration. Plug and play.",
    },
    {
      icon: Users,
      title: "Customer Retention",
      description: "Keep customers engaged with an app they use daily. Lower churn, higher lifetime value.",
    },
    {
      icon: Shield,
      title: "Technical Support",
      description: "We handle the platform. You handle the customer relationship. Full training included.",
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
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-6">
                <Wrench className="h-3 w-3 mr-1" />
                For Installers
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Turn installations into{" "}
                <span className="text-primary">recurring revenue</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Offer your customers smart energy solutions they'll actually use.
                Simple integration, ongoing revenue, full support from us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="mailto:partners@sourceful.energy">
                    Become a Partner
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
          </div>
        </section>

        {/* Partner highlight */}
        <section className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Elkedjan</div>
                <div className="text-sm text-muted-foreground">Sweden's largest installer network</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                The installation business is changing
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Solar panels, EV chargers, batteries—customers want them all.
                But they also want them to work together intelligently.
                That's where you come in.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With Sourceful, you can offer a complete smart energy solution.
                Install the Zap gateway alongside your hardware and give customers
                a platform they'll use every day—with your branding.
              </p>
              <div className="bg-primary/10 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-1">€5-10</div>
                <div className="text-muted-foreground">Per device per year recurring revenue</div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    What you install
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Zap gateway (€39 cost)</li>
                    <li>• 5-minute installation</li>
                    <li>• Works with existing hardware</li>
                    <li>• No configuration needed</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    What customers get
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Real-time energy monitoring</li>
                    <li>• Automatic optimization</li>
                    <li>• Mobile app access</li>
                    <li>• Grid services participation</li>
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
                Why installers partner with us
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

        {/* How it works */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Getting started is easy
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Join the program</h3>
                <p className="text-muted-foreground">
                  Quick onboarding, training, and access to marketing materials.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Install with confidence</h3>
                <p className="text-muted-foreground">
                  Add the Zap to your installations. We provide full support.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Earn recurring revenue</h3>
                <p className="text-muted-foreground">
                  Monthly fees for every active device. Passive income.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to grow your business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join our installer network and start offering smart energy solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:partners@sourceful.energy">
                  Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                  Order Zap Devices
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
