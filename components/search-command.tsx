"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { componentsList } from "@/lib/components-list";
import {
  Search,
  FileText,
  Palette,
  Component,
  Zap,
  BookOpen,
  Settings,
  Sun,
  Map,
  Activity,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

const docsPages = [
  { name: "Getting Started", href: "/docs", icon: BookOpen },
  { name: "Installation", href: "/docs/installation", icon: Settings },
  { name: "Theming", href: "/docs/theming", icon: Palette },
  { name: "Colors", href: "/docs/tokens/colors", icon: Palette },
  { name: "Typography", href: "/docs/tokens/typography", icon: FileText },
  { name: "Spacing", href: "/docs/tokens/spacing", icon: FileText },
  { name: "Form Patterns", href: "/docs/patterns/forms", icon: FileText },
];

const brandPages = [
  { name: "Brand Guidelines", href: "/brand", icon: Zap },
];

const categoryIcons: Record<string, React.ElementType> = {
  Forms: Component,
  "Data Display": FileText,
  Feedback: Activity,
  Navigation: Settings,
  Sourceful: Zap,
};

const sourcefulIcons: Record<string, React.ElementType> = {
  "Sites Map": Map,
  "Energy Flow": Activity,
  "AI Chat": MessageSquare,
};

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const router = useRouter();

  const runCommand = React.useCallback(
    (command: () => void) => {
      onOpenChange(false);
      command();
    },
    [onOpenChange]
  );

  // Group components by category
  const groupedComponents = React.useMemo(() => {
    const groups: Record<string, typeof componentsList> = {};
    componentsList.forEach((component) => {
      if (!groups[component.category]) {
        groups[component.category] = [];
      }
      groups[component.category].push(component);
    });
    return groups;
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search components, docs, and more..." />
      <CommandList>
        <CommandEmpty>
          <div className="flex flex-col items-center gap-2 py-4">
            <Search className="h-8 w-8 text-muted-foreground/50" />
            <p className="text-muted-foreground">No results found</p>
          </div>
        </CommandEmpty>

        {/* Quick Links */}
        <CommandGroup heading="Quick Links">
          <CommandItem
            onSelect={() => runCommand(() => router.push("/"))}
          >
            <Sun className="mr-2 h-4 w-4 text-primary" />
            <span>Home</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/components"))}
          >
            <Component className="mr-2 h-4 w-4 text-primary" />
            <span>All Components</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        {/* Documentation */}
        <CommandGroup heading="Documentation">
          {docsPages.map((page) => {
            const Icon = page.icon;
            return (
              <CommandItem
                key={page.href}
                onSelect={() => runCommand(() => router.push(page.href))}
              >
                <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{page.name}</span>
              </CommandItem>
            );
          })}
        </CommandGroup>

        <CommandSeparator />

        {/* Components by Category */}
        {Object.entries(groupedComponents).map(([category, components]) => {
          const CategoryIcon = categoryIcons[category] || Component;
          return (
            <CommandGroup key={category} heading={category}>
              {components.map((component) => {
                const Icon =
                  category === "Sourceful"
                    ? sourcefulIcons[component.name] || Zap
                    : CategoryIcon;
                return (
                  <CommandItem
                    key={component.href}
                    onSelect={() =>
                      runCommand(() => router.push(component.href))
                    }
                  >
                    <Icon
                      className={cn(
                        "mr-2 h-4 w-4",
                        category === "Sourceful"
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                    <span>{component.name}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          );
        })}

        <CommandSeparator />

        {/* Brand */}
        <CommandGroup heading="Brand">
          {brandPages.map((page) => {
            const Icon = page.icon;
            return (
              <CommandItem
                key={page.href}
                onSelect={() => runCommand(() => router.push(page.href))}
              >
                <Icon className="mr-2 h-4 w-4 text-primary" />
                <span>{page.name}</span>
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

export function SearchTrigger({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-muted-foreground transition-colors hover:border-primary/50 hover:bg-accent hover:text-accent-foreground",
        className
      )}
      aria-label="Search"
    >
      <Search className="h-4 w-4" />
    </button>
  );
}
