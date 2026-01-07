"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WaitlistForm } from "@/components/waitlist-form";
import { Car, Zap, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

export function V2XWaitlistSection() {
  const benefits = [
    {
      icon: Car,
      title: "Bidirectional Charging",
      description: "Use your EV battery to power your home or sell back to the grid.",
    },
    {
      icon: TrendingUp,
      title: "Maximize Savings",
      description: "Charge when electricity is cheap, discharge when it's expensive.",
    },
    {
      icon: Shield,
      title: "Backup Power",
      description: "Your EV becomes an emergency power source for your home.",
    },
    {
      icon: Zap,
      title: "Grid Services",
      description: "Participate in grid flexibility programs and earn rewards.",
    },
  ];

  const compatibleChargers = [
    "Easee",
    "Zaptec",
    "ChargeAmps",
    "Wallbox Quasar",
  ];

  return (
    <section className="border-t bg-gradient-to-br from-yellow-500/5 via-yellow-500/3 to-background">
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 border-yellow-500/50 text-yellow-600 dark:text-yellow-400">
              <Car className="h-3 w-3 mr-1" />
              Coming in 2026
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              V2X: Vehicle-to-Everything
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Turn your electric vehicle into a home battery. The Zap gateway will enable
              bidirectional charging for compatible EVs and chargers—letting you store cheap
              electricity, power your home during outages, and sell back to the grid.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{benefit.title}</div>
                      <div className="text-xs text-muted-foreground">{benefit.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="text-sm font-medium mb-2">Compatible chargers (testing)</h4>
              <div className="flex flex-wrap gap-2">
                {compatibleChargers.map((charger) => (
                  <Badge key={charger} variant="secondary" className="text-xs">
                    {charger}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                V2X requires bidirectional chargers and compatible EVs. More chargers coming.
              </p>
            </div>
          </div>

          <div>
            <Card className="bg-background/50 backdrop-blur">
              <CardContent className="p-6">
                <WaitlistForm
                  feature="v2x"
                  title="Get Early Access to V2X"
                  description="Join the waitlist to be notified when V2X support launches. Early adopters get priority access and testing opportunities."
                  buttonText="Join V2X Waitlist"
                  successMessage="You're on the V2X waitlist! We'll notify you when it's ready."
                />
                <div className="mt-6 pt-4 border-t">
                  <Link
                    href="/v2x"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    Learn more about V2X
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
