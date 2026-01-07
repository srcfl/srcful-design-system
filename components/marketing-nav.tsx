"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { Menu, ChevronDown, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";

export function MarketingNav() {
  const t = useTranslations("common.nav");
  const tButtons = useTranslations("common.buttons");
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      name: t("platform"),
      href: "/platform",
      description: "Local energy coordination infrastructure",
    },
    {
      name: t("zap"),
      href: "/zap",
      description: "€39 gateway with 200ms response",
    },
  ];

  const useCases = [
    { name: t("homeowners"), href: "/use-cases/homeowners" },
    { name: t("utilities"), href: "/use-cases/utilities" },
    { name: t("oems"), href: "/use-cases/oems" },
    { name: t("installers"), href: "/use-cases/installers" },
  ];

  const developers = [
    { name: "Developer Portal", href: "https://developer.sourceful.energy", external: true },
    { name: "API Reference", href: "https://developer.sourceful.energy/api", external: true },
    { name: "Design System", href: "https://design.sourceful.energy", external: true },
    { name: "Hardware Docs", href: "https://developer.sourceful.energy/hardware", external: true },
    { name: "Community", href: "/community", external: false },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/40"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo variant="full" size="sm" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Products Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                Products
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[240px]">
              {products.map((item) => (
                <Link key={item.name} href={item.href} className="block">
                  <DropdownMenuItem className="flex-col !items-start gap-1 py-2 cursor-pointer">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Developers Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                {t("developers")}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              {developers.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between"
                    >
                      {item.name}
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </a>
                  ) : (
                    <Link href={item.href}>{item.name}</Link>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Use Cases Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                {t("useCases")}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {useCases.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* About Link */}
          <Button variant="ghost" asChild>
            <Link href="/about">{t("about")}</Link>
          </Button>

          {/* Company Link */}
          <Button variant="ghost" asChild>
            <Link href="/contact">{t("contact")}</Link>
          </Button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <LanguageSwitcher />

          {/* Theme toggle */}
          {mounted && (
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden md:flex">
              {theme === "light" ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </Button>
          )}

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                Dev Portal
              </a>
            </Button>
            <Button asChild>
              <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                {tButtons("getTheZap")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-6">
                {/* Products */}
                <div>
                  <h3 className="font-semibold mb-3">Products</h3>
                  <div className="space-y-2">
                    {products.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Developers */}
                <div>
                  <h3 className="font-semibold mb-3">{t("developers")}</h3>
                  <div className="space-y-2">
                    {developers.map((item) => (
                      item.external ? (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 py-2 text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="font-semibold mb-3">{t("useCases")}</h3>
                  <div className="space-y-2">
                    {useCases.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* About */}
                <Link
                  href="/about"
                  className="font-semibold hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("about")}
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  className="font-semibold hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("contact")}
                </Link>

                {/* CTA Buttons */}
                <div className="pt-4 border-t space-y-3">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://developer.sourceful.energy" target="_blank" rel="noopener noreferrer">
                      Dev Portal
                    </a>
                  </Button>
                  <Button className="w-full" asChild>
                    <a href="https://store.sourceful.energy/products/sourceful-energy-zap" target="_blank" rel="noopener noreferrer">
                      {tButtons("getTheZap")}
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
