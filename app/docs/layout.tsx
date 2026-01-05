import { SiteHeader } from "@/components/site-header";
import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="max-w-7xl mx-auto flex-1 px-4 md:px-8 w-full">
        <div className="flex-1 md:grid md:grid-cols-[200px_1fr] md:gap-8 lg:gap-12">
          <DocsSidebar type="docs" />
          <main className="relative py-6 lg:py-8">
            <div className="w-full min-w-0">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
