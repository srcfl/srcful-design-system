"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { ArrowRight, Zap, TrendingUp, Network, Globe, Building2, Mail, ExternalLink } from "lucide-react";

export default function CompanyPage() {
  const t = useTranslations("company");
  const tCommon = useTranslations("common");
  const investors = [
    { name: "Crucible Capital", type: "Lead" },
    { name: "Eviny Ventures", type: "Lead" },
    { name: "Variant Fund", type: "" },
    { name: "Paper Ventures", type: "" },
    { name: "Kosmos Capital", type: "" },
  ];

  const milestones = [
    {
      connections: "1,000",
      status: "Network activation",
      description: "Critical mass for local grid services"
    },
    {
      connections: "10,000",
      status: "Virtual power plant",
      description: "Utility-scale flexibility resource"
    },
    {
      connections: "100,000",
      status: "Infrastructure-grade",
      description: "Regional energy coordination"
    },
    {
      connections: "100M",
      status: "Energy internet",
      description: "Continental-scale coordination"
    },
  ];

  const whyWin = [
    {
      title: "Utilities can't build this",
      description: "They're optimizing for centralized control, not distributed coordination.",
    },
    {
      title: "Manufacturers won't",
      description: "They prefer closed ecosystems that lock in customers.",
    },
    {
      title: "Traditional energy firms",
      description: "They're solving yesterday's problems with yesterday's architecture.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b bg-background">
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="relative max-w-7xl mx-auto py-24 md:py-32 px-4 md:px-8">
            <FadeIn className="max-w-4xl">
              <Badge variant="secondary" className="mb-6">
                <Building2 className="h-3 w-3 mr-1" />
                {t("hero.badge")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-left">
                {t("hero.title")}{" "}
                <span className="text-primary">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 text-left">
                {t("hero.description")}
              </p>
              <p className="text-xl text-muted-foreground mb-8 text-left">
                But energy coordination is still broken. The grid can't talk to your
                battery. Your EV doesn't know when electricity is cheapest. Your solar
                panels don't coordinate with your neighbors.
              </p>
              <p className="text-xl font-medium text-left">
                The coordination layer is missing. We're building it.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">€39</div>
                  <CardTitle className="text-lg">Universal coordinator</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    The Zap gateway supports P1, Modbus, MQTT, OCPP—every protocol that matters.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">€3/mo</div>
                  <CardTitle className="text-lg">Platform subscription</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Captures €1,000-2,500 in annual value through optimization and grid services.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">Open</div>
                  <CardTitle className="text-lg">Platform architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Homes become programmable APIs. Developers build on top. Network effects compound.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="text-3xl font-bold text-primary">N²</div>
                  <CardTitle className="text-lg">Network effects</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Value increases with every connection. Winner-take-most dynamics.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why We'll Win */}
        <section className="border-b">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-left">
                Why Sourceful will win
              </h2>
              <p className="text-lg text-muted-foreground text-left">
                This is an infrastructure transition. Like AWS vs. hardware manufacturers.
                Like internet protocols vs. telecom. Like payment platforms vs. banks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {whyWin.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-muted rounded-lg p-8 max-w-2xl">
              <p className="text-lg font-medium mb-2">Winner-take-most dynamics</p>
              <p className="text-muted-foreground">
                In network-effect markets, second place is worth 10x less than first.
                We're building to be first—in the Nordics, then Europe, then everywhere
                there's a grid.
              </p>
            </div>
          </div>
        </section>

        {/* Funding */}
        <section className="border-b bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Funding
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-left">
                  €3M Seed raised
                </h2>
                <p className="text-lg text-muted-foreground mb-6 text-left">
                  January 2025. Led by Crucible Capital and Eviny Ventures, with participation
                  from Variant Fund, Paper Ventures, and Kosmos Capital.
                </p>
                <p className="text-lg text-muted-foreground text-left">
                  We're building network effects in a €500B market. The capital is deployed
                  into infrastructure that compounds—every device connected makes the next
                  connection more valuable.
                </p>
              </div>

              <div className="bg-background rounded-lg p-8 border">
                <h3 className="font-semibold mb-6">Investors</h3>
                <div className="space-y-4">
                  {investors.map((investor) => (
                    <div key={investor.name} className="flex items-center justify-between">
                      <span className="font-medium">{investor.name}</span>
                      {investor.type && (
                        <Badge variant="outline">{investor.type}</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Roadmap */}
        <section className="border-b">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Growth roadmap
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Network effects unlock at each milestone. Value compounds exponentially.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={milestone.connections} className="relative">
                  <CardHeader>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="text-3xl font-bold text-primary">{milestone.connections}</div>
                    <CardTitle className="text-lg">{milestone.status}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{milestone.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Series A CTA */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <Network className="h-3 w-3 mr-1" />
                Series A Opening
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Infrastructure coordination at scale
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Platform companies trade at 40x revenue (Stripe). Utilities trade at 1.5x.
                We're building a platform company in a utility market.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                If you're deploying capital into energy infrastructure with network effects,
                let's talk.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:invest@sourceful.energy">
                  <Mail className="mr-2 h-4 w-4" />
                  invest@sourceful.energy
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Kalmar, Sweden</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Reg. 559382-0458
                </div>
              </div>
              <p className="text-xs text-muted-foreground max-w-xl text-center md:text-right">
                Content provided for general information purposes. Not financial advice or investment solicitation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
