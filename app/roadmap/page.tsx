import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { getRoadmapItems } from "@/lib/roadmap";
import { RoadmapContent } from "./roadmap-content";

export const metadata: Metadata = {
  title: "Roadmap - Sourceful Design System",
  description:
    "See what's planned for the Sourceful Design System. Vote on features and track progress.",
};

export const revalidate = 60;

export default async function RoadmapPage() {
  const items = await getRoadmapItems();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Design System Roadmap</h1>
            <p className="text-muted-foreground">
              See what we're working on and vote for features you'd like to see.
              All items are sourced from community feedback.
            </p>
          </div>

          <RoadmapContent initialItems={items} />
        </div>
      </main>
    </div>
  );
}
