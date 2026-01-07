import type { Metadata } from "next";
import Link from "next/link";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Sun, Battery, Car, Zap, TrendingDown, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Energy Tools & Calculators",
  description: "Free energy calculators to estimate your savings with solar, batteries, EV charging, and smart energy management.",
};

const tools = [
  {
    title: "Savings Calculator",
    description: "Estimate your total energy savings with solar, battery storage, and smart management in Sweden.",
    href: "/tools/savings-calculator",
    icon: Calculator,
    available: true,
  },
  {
    title: "Solar ROI Calculator",
    description: "Calculate the return on investment for your solar panel installation.",
    href: "/tools/solar-roi",
    icon: Sun,
    available: false,
  },
  {
    title: "Battery Sizing Tool",
    description: "Find the optimal battery size for your home based on consumption patterns.",
    href: "/tools/battery-sizing",
    icon: Battery,
    available: false,
  },
  {
    title: "EV Charging Calculator",
    description: "Estimate your EV charging costs and savings with smart charging.",
    href: "/tools/ev-charging",
    icon: Car,
    available: false,
  },
  {
    title: "V2X Savings Estimator",
    description: "Calculate potential earnings from vehicle-to-grid energy trading.",
    href: "/tools/v2x-savings",
    icon: Zap,
    available: false,
  },
  {
    title: "Negative Price Analyzer",
    description: "Check historical negative electricity prices in your region.",
    href: "/tools/negative-prices",
    icon: TrendingDown,
    available: false,
  },
];

export default function ToolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="relative max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-6">
                <Calculator className="h-3 w-3 mr-1" />
                Free Tools
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Energy{" "}
                <span className="text-primary">Calculators & Tools</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Plan your energy setup with our free calculators. Estimate savings, size your system, and understand the economics of distributed energy.
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={tool.title}
                  className={`relative overflow-hidden ${
                    tool.available
                      ? "hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer"
                      : "opacity-60"
                  }`}
                >
                  {tool.available ? (
                    <Link href={tool.href} className="block h-full">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="flex items-center gap-2">
                          {tool.title}
                          <ArrowRight className="h-4 w-4" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {tool.description}
                        </CardDescription>
                      </CardContent>
                    </Link>
                  ) : (
                    <>
                      <CardHeader>
                        <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <CardTitle className="flex items-center gap-2">
                          {tool.title}
                          <Badge variant="outline" className="text-xs">Coming Soon</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {tool.description}
                        </CardDescription>
                      </CardContent>
                    </>
                  )}
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need a custom calculation?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our team can provide detailed analysis for your specific energy setup. Contact us for a personalized assessment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
