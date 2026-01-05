"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const docsNav: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Design Tokens",
    items: [
      { title: "Colors", href: "/docs/tokens/colors" },
      { title: "Typography", href: "/docs/tokens/typography" },
      { title: "Spacing", href: "/docs/tokens/spacing" },
    ],
  },
];

const componentsNav: NavSection[] = [
  {
    title: "Forms",
    items: [
      { title: "Button", href: "/components/button" },
      { title: "Input", href: "/components/input" },
      { title: "Textarea", href: "/components/textarea" },
      { title: "Label", href: "/components/label" },
      { title: "Select", href: "/components/select" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Radio Group", href: "/components/radio-group" },
      { title: "Switch", href: "/components/switch" },
      { title: "Slider", href: "/components/slider" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { title: "Badge", href: "/components/badge" },
      { title: "Card", href: "/components/card" },
      { title: "Table", href: "/components/table" },
      { title: "Skeleton", href: "/components/skeleton" },
      { title: "Separator", href: "/components/separator" },
    ],
  },
  {
    title: "Charts",
    items: [
      { title: "Overview", href: "/components/charts" },
      { title: "Area Chart", href: "/components/charts/area" },
      { title: "Bar Chart", href: "/components/charts/bar" },
      { title: "Line Chart", href: "/components/charts/line" },
      { title: "Pie Chart", href: "/components/charts/pie" },
      { title: "Radar Chart", href: "/components/charts/radar" },
      { title: "Radial Chart", href: "/components/charts/radial" },
      { title: "Tooltip", href: "/components/charts/tooltip" },
    ],
  },
  {
    title: "Feedback",
    items: [
      { title: "Alert", href: "/components/alert" },
      { title: "Dialog", href: "/components/dialog" },
      { title: "Toast", href: "/components/toast" },
      { title: "Tooltip", href: "/components/tooltip" },
      { title: "Progress", href: "/components/progress" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { title: "Dropdown Menu", href: "/components/dropdown-menu" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Accordion", href: "/components/accordion" },
      { title: "Sheet", href: "/components/sheet" },
      { title: "Scroll Area", href: "/components/scroll-area" },
    ],
  },
];

interface DocsSidebarProps {
  type: "docs" | "components";
}

export function DocsSidebar({ type }: DocsSidebarProps) {
  const pathname = usePathname();
  const nav = type === "docs" ? docsNav : componentsNav;

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
      <div className="relative h-full">
        <div className="h-full py-6 pr-6 lg:py-8 overflow-y-auto scrollbar-none">
          <div className="w-full pb-12">
            {nav.map((section) => (
              <div key={section.title} className="pb-4">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                  {section.title}
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex w-full items-center rounded-md border border-transparent px-2 py-1 transition-colors hover:bg-muted hover:text-foreground",
                        pathname === item.href
                          ? "font-medium text-foreground bg-muted"
                          : "text-muted-foreground"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom fade gradient */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-6 h-16 bg-gradient-to-t from-background to-transparent" />
      </div>
    </aside>
  );
}
