"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { ArrowRight, Users, MessageSquare, Github, ExternalLink, Book, Headphones, Heart } from "lucide-react";

export default function CommunityPage() {
  const t = useTranslations("community");
  const tCommon = useTranslations("common");
  const channels = [
    {
      icon: MessageSquare,
      title: "Discord",
      description: "Join our active community of developers, installers, and energy enthusiasts. Get help, share projects, and connect with the team.",
      href: "https://discord.gg/srcful",
      cta: "Join Discord",
      external: true,
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Explore our open source projects, report issues, and contribute to the codebase. We build in the open.",
      href: "https://github.com/srcfl",
      cta: "View GitHub",
      external: true,
    },
    {
      icon: Book,
      title: "Developer Docs",
      description: "Comprehensive documentation for building on the Sourceful platform. API references, guides, and examples.",
      href: "https://developer.sourceful.energy",
      cta: "Read Docs",
      external: true,
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Need help? Our support team is available through Intercom for technical questions and troubleshooting.",
      href: "/contact",
      cta: "Contact Support",
      external: false,
    },
  ];

  const community = {
    developers: "500+",
    countries: "20+",
    discord: "Active",
    response: "< 24h",
  };

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
              <p className="text-xl text-muted-foreground mb-8">
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="https://discord.gg/srcful" target="_blank" rel="noopener noreferrer">
                    Join Discord
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/srcfl" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{community.developers}</div>
                <div className="text-sm text-muted-foreground">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{community.countries}</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{community.discord}</div>
                <div className="text-sm text-muted-foreground">Discord</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{community.response}</div>
                <div className="text-sm text-muted-foreground">Support Response</div>
              </div>
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Connect with us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to get involved, get help, and contribute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <Card key={channel.title} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{channel.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <CardDescription className="text-base flex-grow mb-4">
                      {channel.description}
                    </CardDescription>
                    <Button variant="outline" asChild className="w-fit">
                      {channel.external ? (
                        <a href={channel.href} target="_blank" rel="noopener noreferrer">
                          {channel.cta}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      ) : (
                        <Link href={channel.href}>{channel.cta}</Link>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 10% Community */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="font-medium">The 10%</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Community-driven development
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We're 90% B2B—working with utilities, OEMs, and installers.
                  But 10% of our focus is on the community: early adopters,
                  developers, and energy enthusiasts who help us build something better.
                </p>
                <p className="text-lg text-muted-foreground">
                  The community provides feedback, tests new features, and keeps
                  us honest. In return, they get early access, direct influence
                  on the roadmap, and a voice in how we build.
                </p>
              </div>
              <div className="bg-background rounded-lg p-8 border">
                <h3 className="font-semibold mb-6">What you get</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-medium">Early access</div>
                      <div className="text-sm text-muted-foreground">Test new features before public release</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-medium">Direct feedback channel</div>
                      <div className="text-sm text-muted-foreground">Your input shapes the product</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-medium">Community recognition</div>
                      <div className="text-sm text-muted-foreground">Contributors get credited</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-medium">Open source</div>
                      <div className="text-sm text-muted-foreground">MIT licensed, build what you want</div>
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
              Ready to join?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're a developer, installer, or just curious about
              distributed energy, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://discord.gg/srcful" target="_blank" rel="noopener noreferrer">
                  Join Discord
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
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
