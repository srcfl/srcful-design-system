import type { Metadata } from "next";
import { Link } from "@/src/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { ArrowRight, Plug, Zap, Battery, Car, Sun, Gauge } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Sourceful integrates with leading solar inverters, EV chargers, batteries, and smart meters. See all compatible devices.",
};

// Brand data with categories
const brands = {
  inverters: [
    { name: "SolarEdge", slug: "solaredge", description: "Premium solar inverters with module-level optimization" },
    { name: "Huawei", slug: "huawei", description: "Smart PV solutions with AI-powered optimization" },
    { name: "Fronius", slug: "fronius", description: "Austrian quality inverters for residential and commercial" },
    { name: "SMA", slug: "sma", description: "German engineering for solar power conversion" },
    { name: "Sungrow", slug: "sungrow", description: "Global leader in inverter technology" },
    { name: "SolaX", slug: "solax", description: "Innovative hybrid inverter solutions" },
    { name: "Solis", slug: "solis", description: "Reliable string inverters for all applications" },
    { name: "Deye", slug: "deye", description: "Cost-effective hybrid inverter systems" },
    { name: "Ferroamp", slug: "ferroamp", description: "Swedish DC nanogrid technology" },
  ],
  chargers: [
    { name: "Easee", slug: "easee", description: "Smart EV charging for homes and businesses" },
    { name: "Zaptec", slug: "zaptec", description: "Norwegian charging solutions" },
    { name: "ChargeAmps", slug: "chargeamps", description: "Swedish premium EV chargers" },
  ],
  batteries: [
    { name: "Pixii", slug: "pixii", description: "Modular battery storage systems" },
    { name: "Ambibox", slug: "ambibox", description: "Smart energy storage solutions" },
  ],
  utilities: [
    { name: "Kalmar Energi", slug: "kalmar-energi", description: "Swedish regional utility partner" },
    { name: "NRGi", slug: "nrgi", description: "Danish energy company with 250K customers" },
  ],
  installers: [
    { name: "Elkedjan", slug: "elkedjan", description: "Sweden's largest installer network" },
  ],
};

const categories = [
  { key: "inverters", label: "Solar Inverters", icon: Sun, count: brands.inverters.length },
  { key: "chargers", label: "EV Chargers", icon: Car, count: brands.chargers.length },
  { key: "batteries", label: "Battery Storage", icon: Battery, count: brands.batteries.length },
  { key: "utilities", label: "Utility Partners", icon: Gauge, count: brands.utilities.length },
  { key: "installers", label: "Installer Networks", icon: Plug, count: brands.installers.length },
];

export default function IntegrationsPage() {
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
                <Plug className="h-3 w-3 mr-1" />
                Integrations
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Works with your{" "}
                <span className="text-primary">existing hardware</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Sourceful integrates with leading solar inverters, EV chargers, batteries,
                and smart meters. No need to replace your equipment—just add the Zap gateway.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/zap">
                    Get the Zap
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://developer.sourceful.energy/hardware" target="_blank" rel="noopener noreferrer">
                    Hardware Docs
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-muted/30 border-b">
          <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.key} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{category.count}</div>
                    <div className="text-sm text-muted-foreground">{category.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solar Inverters */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
              <Sun className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Solar Inverters</h2>
              <p className="text-muted-foreground">Compatible with leading brands</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {brands.inverters.map((brand) => (
              <Link key={brand.slug} href={`/integrations/${brand.slug}`}>
                <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{brand.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{brand.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* EV Chargers */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Car className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">EV Chargers</h2>
                <p className="text-muted-foreground">Smart charging and V2X ready</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {brands.chargers.map((brand) => (
                <Link key={brand.slug} href={`/integrations/${brand.slug}`}>
                  <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{brand.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">V2X Ready</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{brand.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Batteries */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Battery className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Battery Storage</h2>
                <p className="text-muted-foreground">Home and commercial storage solutions</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {brands.batteries.map((brand) => (
                <Link key={brand.slug} href={`/integrations/${brand.slug}`}>
                  <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{brand.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{brand.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Utilities */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                    <Gauge className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Utility Partners</h2>
                    <p className="text-muted-foreground">Energy companies we work with</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {brands.utilities.map((brand) => (
                    <Card key={brand.slug}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{brand.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{brand.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Installers */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <Plug className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Installer Networks</h2>
                    <p className="text-muted-foreground">Certified installation partners</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {brands.installers.map((brand) => (
                    <Card key={brand.slug}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{brand.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{brand.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Don't see your hardware?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              We're constantly adding new integrations. Contact us to request support
              for your specific equipment or check the developer docs for custom integrations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Integration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://developer.sourceful.energy/hardware" target="_blank" rel="noopener noreferrer">
                  Developer Docs
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
