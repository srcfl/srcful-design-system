import type { Metadata } from "next";
import { Link } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MarketingNav } from "@/components/marketing-nav";
import { MarketingFooter } from "@/components/marketing-footer";
import { BrandLogo } from "@/components/brand-logo";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  ExternalLink,
  BarChart3,
  Shield,
  Clock,
  Plug,
} from "lucide-react";

// Brand database
const brandData: Record<string, {
  name: string;
  category: "inverter" | "charger" | "battery" | "utility" | "installer";
  tagline: string;
  description: string;
  features: string[];
  useCases: { title: string; description: string; savings?: string }[];
  protocols: string[];
  compatibility: string;
}> = {
  solaredge: {
    name: "SolarEdge",
    category: "inverter",
    tagline: "Premium solar optimization meets intelligent energy management",
    description: "SolarEdge inverters with power optimizers deliver maximum solar production. Combined with Sourceful, you get real-time optimization, grid services participation, and significant savings through smart energy management.",
    features: [
      "Module-level monitoring and optimization",
      "Real-time production data via SolarEdge API",
      "Automatic self-consumption optimization",
      "Battery integration support",
      "Grid export management",
    ],
    useCases: [
      { title: "Self-consumption Optimization", description: "Automatically shift loads to use solar power when it's available", savings: "€200-400/year" },
      { title: "Peak Shaving", description: "Reduce grid import during expensive peak hours", savings: "€150-300/year" },
      { title: "Grid Services", description: "Participate in frequency response and demand flexibility", savings: "€100-200/year" },
    ],
    protocols: ["SolarEdge API", "Modbus TCP", "SunSpec"],
    compatibility: "All SolarEdge single-phase and three-phase inverters",
  },
  huawei: {
    name: "Huawei",
    category: "inverter",
    tagline: "AI-powered solar meets local energy coordination",
    description: "Huawei FusionSolar inverters bring AI optimization to residential and commercial solar. With Sourceful integration, you unlock true multi-device coordination and grid services capabilities.",
    features: [
      "AI-powered MPPT tracking",
      "FusionSolar cloud integration",
      "Battery storage support (LUNA series)",
      "Smart string monitoring",
      "Integrated energy management",
    ],
    useCases: [
      { title: "Hybrid System Control", description: "Coordinate solar, battery, and grid in real-time", savings: "€300-500/year" },
      { title: "EV Charging Optimization", description: "Charge your EV with excess solar production", savings: "€200-400/year" },
      { title: "Negative Price Response", description: "Automatically increase consumption during negative pricing", savings: "€50-150/year" },
    ],
    protocols: ["FusionSolar API", "Modbus TCP", "MQTT"],
    compatibility: "Huawei SUN2000 series residential and commercial inverters",
  },
  fronius: {
    name: "Fronius",
    category: "inverter",
    tagline: "Austrian precision engineering with smart grid capabilities",
    description: "Fronius inverters are known for reliability and quality. Sourceful enhances your Fronius system with advanced energy management, grid services, and multi-device coordination.",
    features: [
      "Solar.web monitoring integration",
      "Fronius Ohmpilot support",
      "Battery ready with BYD/LG",
      "Smart meter integration",
      "Local API access",
    ],
    useCases: [
      { title: "Hot Water Optimization", description: "Use excess solar to heat water with Ohmpilot", savings: "€100-200/year" },
      { title: "Load Management", description: "Automatically manage high-power appliances", savings: "€150-300/year" },
      { title: "Export Optimization", description: "Maximize revenue from grid exports", savings: "€100-250/year" },
    ],
    protocols: ["Fronius Solar API", "Modbus TCP", "SunSpec"],
    compatibility: "Fronius Primo, Symo, and GEN24 series",
  },
  easee: {
    name: "Easee",
    category: "charger",
    tagline: "Smart EV charging with V2X future-ready capabilities",
    description: "Easee chargers are designed for simplicity and smart features. With Sourceful, you get intelligent charging schedules, solar-aware charging, and upcoming V2X support.",
    features: [
      "Dynamic load balancing",
      "Solar-aware charging",
      "Scheduled charging",
      "Real-time power adjustment",
      "V2X ready (coming 2026)",
    ],
    useCases: [
      { title: "Solar Charging", description: "Charge your EV with excess solar production automatically", savings: "€200-400/year" },
      { title: "Price Optimization", description: "Charge when electricity is cheapest", savings: "€300-600/year" },
      { title: "V2X (Coming Soon)", description: "Use your EV as a home battery", savings: "€500-1000/year" },
    ],
    protocols: ["Easee Cloud API", "OCPP 1.6"],
    compatibility: "Easee Home, Easee Charge, Easee Core",
  },
  zaptec: {
    name: "Zaptec",
    category: "charger",
    tagline: "Norwegian innovation for intelligent EV charging",
    description: "Zaptec chargers offer advanced features for homes and businesses. Sourceful integration enables smart scheduling, solar optimization, and grid services participation.",
    features: [
      "Power management across multiple chargers",
      "Solar integration",
      "Scheduled charging",
      "Load balancing",
      "V2X compatible models",
    ],
    useCases: [
      { title: "Multi-charger Management", description: "Coordinate multiple EVs without upgrading your grid connection", savings: "€500-1000/year" },
      { title: "Solar Surplus Charging", description: "Automatically charge when solar production exceeds consumption", savings: "€200-400/year" },
      { title: "Workplace Charging", description: "Optimize charging for employee vehicles", savings: "Variable" },
    ],
    protocols: ["Zaptec API", "OCPP 1.6/2.0"],
    compatibility: "Zaptec Go, Zaptec Pro",
  },
  chargeamps: {
    name: "ChargeAmps",
    category: "charger",
    tagline: "Swedish premium charging with smart energy features",
    description: "ChargeAmps delivers premium EV charging solutions. With Sourceful, you get advanced energy management, solar integration, and seamless coordination with your home energy system.",
    features: [
      "Aura for multi-charger installations",
      "Dawn for residential charging",
      "Halo for premium installations",
      "Solar-aware charging",
      "Smart scheduling",
    ],
    useCases: [
      { title: "Premium Home Charging", description: "Elegant design with intelligent energy management", savings: "€200-400/year" },
      { title: "Solar Integration", description: "Automatically use excess solar for EV charging", savings: "€250-450/year" },
      { title: "Multi-vehicle Homes", description: "Manage multiple EVs efficiently", savings: "€400-800/year" },
    ],
    protocols: ["ChargeAmps API", "OCPP"],
    compatibility: "ChargeAmps Dawn, Halo, Aura",
  },
  sma: {
    name: "SMA",
    category: "inverter",
    tagline: "German engineering meets intelligent energy coordination",
    description: "SMA is a pioneer in solar technology. Sourceful integration brings advanced energy management, grid services, and multi-device coordination to your SMA system.",
    features: [
      "Sunny Portal integration",
      "Speedwire communication",
      "Battery storage support",
      "Sunny Home Manager compatible",
      "Grid services ready",
    ],
    useCases: [
      { title: "Energy Management", description: "Intelligent load control with Sunny Home Manager", savings: "€200-400/year" },
      { title: "Battery Optimization", description: "Maximize self-consumption with smart storage", savings: "€300-500/year" },
      { title: "Grid Flexibility", description: "Participate in demand response programs", savings: "€100-200/year" },
    ],
    protocols: ["SMA Speedwire", "Modbus TCP", "SunSpec"],
    compatibility: "SMA Sunny Boy, Sunny Tripower, Sunny Island",
  },
  sungrow: {
    name: "Sungrow",
    category: "inverter",
    tagline: "Global inverter technology with local intelligence",
    description: "Sungrow is one of the world's largest inverter manufacturers. With Sourceful, you get smart energy management, hybrid system control, and grid services participation.",
    features: [
      "iSolarCloud integration",
      "Hybrid inverter support",
      "Battery storage ready",
      "Smart export control",
      "Multi-device coordination",
    ],
    useCases: [
      { title: "Hybrid System Control", description: "Optimize solar, battery, and grid together", savings: "€300-500/year" },
      { title: "Self-consumption Boost", description: "Maximize use of your own solar production", savings: "€200-400/year" },
      { title: "Peak Demand Management", description: "Reduce expensive peak imports", savings: "€150-300/year" },
    ],
    protocols: ["Sungrow API", "Modbus TCP"],
    compatibility: "Sungrow SG series residential and commercial inverters",
  },
  solax: {
    name: "SolaX",
    category: "inverter",
    tagline: "Innovative hybrid solutions with smart coordination",
    description: "SolaX specializes in hybrid inverter technology. Sourceful enhances your SolaX system with intelligent scheduling, multi-device coordination, and grid services.",
    features: [
      "SolaX Cloud integration",
      "Hybrid inverter support",
      "EV charger integration",
      "Battery management",
      "Time-of-use optimization",
    ],
    useCases: [
      { title: "All-in-one Energy System", description: "Manage solar, battery, and EV from one platform", savings: "€400-700/year" },
      { title: "Arbitrage Trading", description: "Buy low, use high with battery storage", savings: "€200-400/year" },
      { title: "Backup Power", description: "Seamless backup during outages", savings: "Peace of mind" },
    ],
    protocols: ["SolaX Cloud API", "Modbus TCP"],
    compatibility: "SolaX X1, X3, and hybrid series",
  },
  solis: {
    name: "Solis",
    category: "inverter",
    tagline: "Reliable string inverters with smart grid features",
    description: "Solis offers reliable and cost-effective inverters. With Sourceful integration, you get advanced monitoring, optimization, and participation in grid services.",
    features: [
      "SolisCloud monitoring",
      "String-level optimization",
      "Export control",
      "Hybrid models available",
      "Grid code compliant",
    ],
    useCases: [
      { title: "Cost-effective Solar", description: "Maximize returns from your solar investment", savings: "€200-400/year" },
      { title: "Export Management", description: "Comply with export limits while maximizing self-use", savings: "€100-200/year" },
      { title: "Commercial Applications", description: "Fleet management for commercial installations", savings: "Variable" },
    ],
    protocols: ["Solis API", "Modbus TCP"],
    compatibility: "Solis residential and commercial string inverters",
  },
  deye: {
    name: "Deye",
    category: "inverter",
    tagline: "Affordable hybrid power with intelligent control",
    description: "Deye offers cost-effective hybrid inverter solutions. Sourceful brings advanced energy management and optimization to make the most of your Deye system.",
    features: [
      "Hybrid inverter technology",
      "Battery integration",
      "Off-grid capable",
      "Time-of-use scheduling",
      "Local control",
    ],
    useCases: [
      { title: "Budget Hybrid System", description: "Get hybrid benefits at an affordable price", savings: "€300-500/year" },
      { title: "Off-grid Ready", description: "Prepare for power independence", savings: "Energy security" },
      { title: "Load Shifting", description: "Move consumption to cheap hours", savings: "€200-400/year" },
    ],
    protocols: ["Modbus TCP", "Local API"],
    compatibility: "Deye hybrid inverter series",
  },
  ferroamp: {
    name: "Ferroamp",
    category: "inverter",
    tagline: "Swedish DC nanogrid technology for maximum efficiency",
    description: "Ferroamp's unique DC nanogrid architecture maximizes system efficiency. With Sourceful, you get intelligent coordination of solar, storage, and EV charging.",
    features: [
      "DC nanogrid architecture",
      "EnergyHub integration",
      "Phase balancing",
      "EV charging support",
      "Maximum efficiency",
    ],
    useCases: [
      { title: "DC-coupled Efficiency", description: "Minimize conversion losses with DC architecture", savings: "€200-400/year" },
      { title: "Phase Balancing", description: "Optimize three-phase systems", savings: "€100-200/year" },
      { title: "Premium Installation", description: "Maximum efficiency for discerning customers", savings: "€300-600/year" },
    ],
    protocols: ["Ferroamp API", "Modbus TCP"],
    compatibility: "Ferroamp EnergyHub and SSO system",
  },
  pixii: {
    name: "Pixii",
    category: "battery",
    tagline: "Modular battery storage with intelligent management",
    description: "Pixii offers flexible, modular battery storage. Sourceful enhances your Pixii system with advanced optimization, grid services, and seamless solar integration.",
    features: [
      "Modular scalability",
      "High round-trip efficiency",
      "Grid services ready",
      "Solar integration",
      "Smart scheduling",
    ],
    useCases: [
      { title: "Scalable Storage", description: "Start small and expand as needed", savings: "€300-600/year" },
      { title: "Grid Services", description: "Earn from frequency response participation", savings: "€200-400/year" },
      { title: "Peak Shaving", description: "Reduce demand charges for commercial users", savings: "€500-1500/year" },
    ],
    protocols: ["Pixii API", "Modbus TCP"],
    compatibility: "Pixii battery storage systems",
  },
  ambibox: {
    name: "Ambibox",
    category: "battery",
    tagline: "Smart energy storage for modern homes",
    description: "Ambibox delivers smart battery storage solutions. With Sourceful integration, you get intelligent energy management, grid services, and maximum value from your storage investment.",
    features: [
      "Residential storage",
      "Solar integration",
      "Smart scheduling",
      "Backup power",
      "Grid services ready",
    ],
    useCases: [
      { title: "Home Battery", description: "Store solar for evening use", savings: "€250-500/year" },
      { title: "Backup Power", description: "Keep critical loads running during outages", savings: "Peace of mind" },
      { title: "Price Arbitrage", description: "Buy low, use high", savings: "€200-400/year" },
    ],
    protocols: ["Ambibox API", "Modbus"],
    compatibility: "Ambibox residential storage systems",
  },
};

// Generate static params for all brands and locales
export function generateStaticParams() {
  const locales = ["en", "sv"];
  const brands = Object.keys(brandData);

  return locales.flatMap((locale) =>
    brands.map((brand) => ({
      locale,
      brand,
    }))
  );
}

// Generate metadata for each brand page
export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand: brandSlug } = await params;
  const brand = brandData[brandSlug];
  if (!brand) {
    return {
      title: "Integration Not Found",
    };
  }
  return {
    title: `${brand.name} Integration`,
    description: `Integrate your ${brand.name} ${brand.category} with Sourceful for intelligent energy management, optimization, and grid services.`,
  };
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: brandSlug } = await params;
  const brand = brandData[brandSlug];

  if (!brand) {
    notFound();
  }

  const categoryLabels = {
    inverter: "Solar Inverter",
    charger: "EV Charger",
    battery: "Battery Storage",
    utility: "Utility Partner",
    installer: "Installer Network",
  };

  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-dot-pattern" />
          <div className="relative max-w-7xl mx-auto py-24 md:py-32 px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="secondary">{categoryLabels[brand.category]}</Badge>
                  <Badge variant="outline">Sourceful Compatible</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                  {brand.name} +{" "}
                  <span className="text-primary">Sourceful</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {brand.tagline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/zap">
                      Get the Zap Gateway
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">
                      Contact Sales
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <BrandLogo brand={brandSlug} size="xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Why {brand.name} + Sourceful?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {brand.description}
              </p>
              <div className="space-y-3">
                {brand.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Plug className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Supported Protocols</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {brand.protocols.map((protocol) => (
                      <Badge key={protocol} variant="secondary">{protocol}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Compatibility</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{brand.compatibility}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-t bg-muted/30">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                What you can do
              </h2>
              <p className="text-lg text-muted-foreground">
                Real benefits for {brand.name} owners using Sourceful
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {brand.useCases.map((useCase) => (
                <Card key={useCase.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{useCase.description}</CardDescription>
                    {useCase.savings && (
                      <div className="text-2xl font-bold text-primary">{useCase.savings}</div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                How it works
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Get the Zap</h3>
                <p className="text-muted-foreground text-sm">
                  Order the €39 Zap gateway and connect it to your home network.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Connect {brand.name}</h3>
                <p className="text-muted-foreground text-sm">
                  The Zap automatically discovers and connects to your {brand.name} {brand.category}.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Start Saving</h3>
                <p className="text-muted-foreground text-sm">
                  Enable automations, join grid services, and start optimizing your energy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to optimize your {brand.name} system?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Get the Zap gateway and unlock the full potential of your energy system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                  Order Zap Gateway
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/integrations">
                  View All Integrations
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
