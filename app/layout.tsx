import type { Metadata } from "next";
import { JetBrains_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { LenisProvider } from "@/components/lenis-provider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-heading-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sourceful Design System",
  description:
    "A single page to show Claude what Sourceful looks like. Editorial tokens, type specimens, and shadcn primitives skinned with the Sourceful visual system.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Satoshi from Fontshare — primary sans, matches the marketing site */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          jetbrainsMono.variable,
          barlowCondensed.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
