import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Palette, Component } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 pb-8 pt-24 md:pt-32 text-center px-4 md:px-8">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
            <span className="mr-2">🌱</span>
            <span>Powering the distributed energy revolution</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Sourceful{" "}
            <span className="text-primary">Design System</span>
          </h1>
          <p className="max-w-[42rem] text-lg text-muted-foreground sm:text-xl">
            Components, tokens, and guidelines for building consistent, accessible
            interfaces across Sourceful Energy products.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/docs">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/components">
                Browse Components
              </Link>
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto py-16 px-4 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-6">
              <Component className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">50+ Components</h3>
              <p className="text-sm text-muted-foreground">
                Production-ready React components built with Radix UI and Tailwind CSS.
                Accessible by default.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Palette className="h-10 w-10 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Design Tokens</h3>
              <p className="text-sm text-muted-foreground">
                Consistent colors, typography, spacing, and shadows.
                CSS variables that work everywhere.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Book className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Brand Guidelines</h3>
              <p className="text-sm text-muted-foreground">
                Voice, tone, and visual identity guidelines for consistent
                communication across all touchpoints.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="max-w-5xl mx-auto py-16 border-t px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <div className="rounded-lg bg-sourceful-gray-950 p-4 font-mono text-sm text-white overflow-x-auto">
            <pre>
              <code>{`npm install @srcful/ui

# Import in your app
import { Button, Card, Input } from "@srcful/ui"
import "@srcful/ui/styles.css"`}</code>
            </pre>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sourceful Energy. Open source under MIT license.
          </p>
          <div className="flex gap-4">
            <a href="https://sourceful.energy" className="text-sm text-muted-foreground hover:text-foreground">
              sourceful.energy
            </a>
            <a href="https://github.com/srcfl" className="text-sm text-muted-foreground hover:text-foreground">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
