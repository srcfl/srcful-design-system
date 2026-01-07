"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { FadeIn } from "@/components/animations";
import {
  ArrowRight,
  ExternalLink,
  Code,
  Zap,
  Book,
  MessageSquare,
  Terminal,
  Palette,
  Cpu,
  Users,
  Github
} from "lucide-react";

export default function DevelopersPage() {
  const t = useTranslations("developers");
  const tCommon = useTranslations("common");

  const tools = [
    {
      icon: Terminal,
      title: "Developer Portal",
      description: "Full API access, authentication, device management, and real-time data streams.",
      href: "https://developer.sourceful.energy",
      external: true,
      badge: "Primary",
    },
    {
      icon: Book,
      title: "API Reference",
      description: "Complete endpoint documentation with examples in multiple languages.",
      href: "https://developer.sourceful.energy/api",
      external: true,
    },
    {
      icon: Palette,
      title: "Design System",
      description: "50+ React components, design tokens, and brand guidelines for building Sourceful apps.",
      href: "https://design.sourceful.energy",
      external: true,
    },
    {
      icon: Cpu,
      title: "Hardware Docs",
      description: "Zap gateway integration, protocol specs, and firmware documentation.",
      href: "https://developer.sourceful.energy/hardware",
      external: true,
    },
  ];

  const features = [
    {
      title: "200ms Local Response",
      description: "Execute commands at the edge. No round-trip to the cloud for time-critical operations.",
    },
    {
      title: "Protocol Agnostic",
      description: "P1, Modbus, MQTT, OCPP—we handle the translation layer so you don't have to.",
    },
    {
      title: "Real-time WebSockets",
      description: "Subscribe to device events, energy data, and grid signals in real-time.",
    },
    {
      title: "Comprehensive Webhooks",
      description: "Get notified of device state changes, alerts, and energy events.",
    },
    {
      title: "OAuth 2.0 & API Keys",
      description: "Flexible authentication for different integration scenarios.",
    },
    {
      title: "Sandbox Environment",
      description: "Test your integration with simulated devices before going live.",
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
            <FadeIn className="max-w-3xl">
              <Badge variant="secondary" className="mb-6">
                <Code className="h-3 w-3 mr-1" />
                {t("hero.badge")}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                {t("hero.title")}{" "}
                <span className="text-primary">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                    {tCommon("buttons.openDevPortal")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://discord.gg/srcful" target="_blank" rel="noopener noreferrer">
                    {tCommon("buttons.joinDiscord")}
                    <MessageSquare className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Developer Tools */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything you need to build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools, documentation, and resources for integrating with the Sourceful platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <a
                  key={tool.title}
                  href={tool.href}
                  target={tool.external ? "_blank" : undefined}
                  rel={tool.external ? "noopener noreferrer" : undefined}
                >
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        {tool.badge && (
                          <Badge variant="default">{tool.badge}</Badge>
                        )}
                        {tool.external && !tool.badge && (
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      <CardTitle className="mt-4">{tool.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {tool.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Platform capabilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built for developers who need real-time control over energy infrastructure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Simple, powerful API
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Control devices, read energy data, and respond to grid signals
                  with a clean, well-documented API.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>RESTful endpoints with JSON responses</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>WebSocket streams for real-time data</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Idempotent operations for reliability</span>
                  </li>
                </ul>
                <Button asChild>
                  <a href="https://developer.sourceful.energy/api" target="_blank" rel="noopener noreferrer">
                    {tCommon("buttons.viewDocs")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="bg-muted rounded-lg p-6 font-mono text-sm overflow-x-auto">
                <div className="text-muted-foreground mb-4"># List all devices</div>
                <pre className="text-foreground">
{`curl https://api.sourceful.energy/v1/devices \\
  -H "Authorization: Bearer src_live_..."

{
  "devices": [
    {
      "id": "dev_abc123",
      "type": "ev_charger",
      "status": "online",
      "power_kw": 7.4,
      "location": {
        "site_id": "site_xyz",
        "name": "Stockholm HQ"
      }
    }
  ],
  "total": 1
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-8 w-8 text-primary" />
                      <h3 className="text-2xl font-bold">Join the Community</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Connect with other developers building on Sourceful. Get help,
                      share projects, and shape the future of the platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild>
                        <a href="https://discord.gg/srcful" target="_blank" rel="noopener noreferrer">
                          {tCommon("buttons.joinDiscord")}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="https://github.com/srcfl" target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-3xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Developers</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-3xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Components</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-3xl font-bold text-primary">OSS</div>
                      <div className="text-sm text-muted-foreground">Open Source</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to start building?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Get API access, explore the documentation, and ship your first integration today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                  {tCommon("buttons.getStarted")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                  {tCommon("buttons.getTheZap")}
                  <Zap className="ml-2 h-4 w-4" />
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
