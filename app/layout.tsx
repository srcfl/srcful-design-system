import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { LenisProvider } from "@/components/lenis-provider";
import { AuthProvider } from "@/components/auth-provider";
import { IntercomProvider } from "@/components/intercom-provider";
import { CookieConsent } from "@/components/cookie-consent";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Sourceful Energy - Local Energy Coordination Infrastructure",
    template: "%s | Sourceful Energy",
  },
  description: "The physical rails that make distributed energy work. Local execution at 200ms for utilities, homeowners, and developers.",
  keywords: ["energy", "distributed energy", "smart grid", "V2X", "solar", "EV charging", "home battery", "energy coordination"],
  authors: [{ name: "Sourceful Energy" }],
  creator: "Sourceful Energy",
  publisher: "Sourceful Energy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sourceful.energy",
    siteName: "Sourceful Energy",
    title: "Sourceful Energy - Local Energy Coordination Infrastructure",
    description: "The physical rails that make distributed energy work. Local execution at 200ms for utilities, homeowners, and developers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourceful Energy",
    description: "The physical rails that make distributed energy work.",
    creator: "@srcful",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          satoshi.variable,
          jetbrainsMono.variable
        )}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
          >
            <LenisProvider>
              <IntercomProvider>
                {children}
              </IntercomProvider>
            </LenisProvider>
            <CookieConsent />
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
