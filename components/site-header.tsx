"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Github, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { Logo } from "@/components/logo";
import { SearchCommand, SearchTrigger } from "@/components/search-command";
import { MobileNav } from "@/components/mobile-nav";
import { FeedbackButton } from "@/components/feedback-button";

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard shortcut for search (⌘K or Ctrl+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { href: "/docs", label: "Docs" },
    { href: "/components", label: "Components" },
    { href: "/brand", label: "Brand" },
    { href: "/changelog", label: "Changelog" },
    { href: "/roadmap", label: "Roadmap" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 md:px-8 relative">
          <div className="flex shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Logo variant="full" size="xs" className="md:hidden" />
              <Logo variant="full" size="sm" className="hidden md:block" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith(item.href)
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <SearchTrigger onClick={() => setSearchOpen(true)} />

            <div className="hidden md:flex items-center gap-2">
              <FeedbackButton />
              {mounted && (
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {theme === "light" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </Button>
              )}
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/srcfl/srcful-design-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
