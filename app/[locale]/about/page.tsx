"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { ArrowRight, Zap, Users, Globe, Target } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");
  const tCommon = useTranslations("common");
  const values = [
    {
      title: "Physics Before Code",
      description: "Every technical decision starts with: 'What does the physical system require?'",
    },
    {
      title: "Simple Over Clever",
      description: "If you're proud of how clever it is, simplify it.",
    },
    {
      title: "Local Over Cloud",
      description: "Default to local. Cloud is opt-in, not assumed.",
    },
    {
      title: "Robust Over Feature-Rich",
      description: "Ship something that works 100% before adding features.",
    },
    {
      title: "Open Over Proprietary",
      description: "Network effects, not lock-in.",
    },
  ];

  const milestones = [
    { year: "2023", event: "Founded in Kalmar, Sweden" },
    { year: "2024", event: "$3M seed raised" },
    { year: "2025", event: "First utility partnerships live" },
    { year: "2026", event: "Seed+ round opening" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="relative max-w-7xl mx-auto py-24 md:py-32 px-4 md:px-8">
            <FadeIn className="max-w-3xl">
              <Badge variant="secondary" className="mb-6">
                <Users className="h-3 w-3 mr-1" />
                {t("hero.badge")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t("hero.title")}{" "}
                <span className="text-primary">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                {t("hero.description")}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Our mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The energy system is flipping from centralized to distributed.
                40-70 million EVs in Europe by 2030. Rooftop solar on every house.
                Batteries in every garage. This is happening.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                But distributed energy only works if it's coordinated. And coordination
                requires speed. Grid frequency must balance every second. Cloud APIs
                respond in 2-5 seconds. The gap is unbridgeable through software alone.
              </p>
              <p className="text-lg font-medium">
                We're building the local execution layer that makes distributed
                energy coordination actually possible.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="font-semibold mb-6">The numbers</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary">€2.5B</div>
                  <div className="text-muted-foreground">Destroyed annually in coordination failures</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">700+</div>
                  <div className="text-muted-foreground">Hours of negative electricity pricing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2,800 GWh</div>
                  <div className="text-muted-foreground">Distributed storage needing coordination by 2030</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Engineering principles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                How we build software that works at the speed of physics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={value.title}>
                  <CardHeader>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-sm font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
                Our journey
              </h2>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-20 text-right">
                      <div className="text-xl font-bold text-primary">{milestone.year}</div>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-16 bg-border" />
                      )}
                    </div>
                    <div className="pt-0.5">
                      <div className="text-lg">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="font-medium">Kalmar, Sweden</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Nordic roots, global ambition
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We're based in Kalmar, Sweden—on the southeastern coast,
                  close to our first utility partners. From here, we're building the
                  infrastructure for the global energy transition.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our first markets are the Nordics and Northern Europe, where
                  grid infrastructure is ready for distributed energy. But our
                  technology works anywhere there's a grid.
                </p>
              </div>
              <div className="bg-background rounded-lg p-8 border">
                <h3 className="font-semibold mb-4">Current traction</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-medium">Kalmar Energi (Sweden)</div>
                      <div className="text-sm text-muted-foreground">Go-live imminent</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-medium">NRGi (Denmark)</div>
                      <div className="text-sm text-muted-foreground">250K customer pipeline</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-medium">Elkedjan (Sweden)</div>
                      <div className="text-sm text-muted-foreground">Largest installer network</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Want to join us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We're building something that matters. If you're excited about
              distributed energy and local-first software, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/community">
                  Join Community
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
