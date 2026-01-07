"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧", available: true },
  { code: "sv", label: "Svenska", flag: "🇸🇪", available: false, comingSoon: true },
];

export function LanguageSwitcher() {
  // For now, we're always in English since Swedish pages aren't built yet
  const currentLocale = "en";

  const handleLanguageSelect = (langCode: string) => {
    const lang = languages.find((l) => l.code === langCode);
    if (lang?.comingSoon) {
      // Could show a toast here in the future
      return;
    }
    // For future: implement locale switching
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 px-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline text-xs uppercase">{currentLocale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageSelect(language.code)}
            disabled={!language.available}
            className={`flex items-center justify-between ${currentLocale === language.code ? "bg-muted" : ""}`}
          >
            <span className="flex items-center gap-2">
              <span>{language.flag}</span>
              <span>{language.label}</span>
            </span>
            {currentLocale === language.code && (
              <Check className="h-4 w-4 text-primary" />
            )}
            {language.comingSoon && (
              <span className="text-xs text-muted-foreground">Soon</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
