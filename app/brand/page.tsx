"use client";

import { SiteHeader } from "@/components/site-header";
import Image from "next/image";

// Primary brand colors
const brandColors = [
  { name: "Neon Green", value: "#00FF84", variable: "--sourceful-green", primary: true },
  { name: "Yellow", value: "#FFD500", variable: "--sourceful-yellow", primary: true },
  { name: "Orange", value: "#FF6B00", variable: "--sourceful-orange", primary: true },
  { name: "Red", value: "#FF0D0D", variable: "--sourceful-red", primary: true },
  { name: "Teal", value: "#0D7377", variable: "--sourceful-teal", primary: true },
  { name: "Navy", value: "#1E3A5F", variable: "--sourceful-navy", primary: true },
  { name: "Blue", value: "#2196F3", variable: "--sourceful-blue", primary: true },
];

const greenColors = [
  { name: "Green 50", value: "#ecfff5", variable: "--sourceful-green-50" },
  { name: "Green 100", value: "#d1ffea", variable: "--sourceful-green-100" },
  { name: "Green 200", value: "#a6ffd6", variable: "--sourceful-green-200" },
  { name: "Green 300", value: "#6affbd", variable: "--sourceful-green-300" },
  { name: "Green 400", value: "#2bff9e", variable: "--sourceful-green-400" },
  { name: "Green 500", value: "#00FF84", variable: "--sourceful-green-500", primary: true },
  { name: "Green 600", value: "#00cc6a", variable: "--sourceful-green-600" },
  { name: "Green 700", value: "#009950", variable: "--sourceful-green-700" },
  { name: "Green 800", value: "#007a40", variable: "--sourceful-green-800" },
  { name: "Green 900", value: "#006636", variable: "--sourceful-green-900" },
];

const yellowColors = [
  { name: "Yellow 50", value: "#fffce8", variable: "--sourceful-yellow-50" },
  { name: "Yellow 100", value: "#fff8c2", variable: "--sourceful-yellow-100" },
  { name: "Yellow 200", value: "#fff089", variable: "--sourceful-yellow-200" },
  { name: "Yellow 300", value: "#ffe545", variable: "--sourceful-yellow-300" },
  { name: "Yellow 400", value: "#FFD500", variable: "--sourceful-yellow-400", primary: true },
  { name: "Yellow 500", value: "#e6c000", variable: "--sourceful-yellow-500" },
  { name: "Yellow 600", value: "#cc9f00", variable: "--sourceful-yellow-600" },
  { name: "Yellow 700", value: "#a37700", variable: "--sourceful-yellow-700" },
];

const orangeColors = [
  { name: "Orange 50", value: "#fff5eb", variable: "--sourceful-orange-50" },
  { name: "Orange 100", value: "#ffe6cc", variable: "--sourceful-orange-100" },
  { name: "Orange 200", value: "#ffc999", variable: "--sourceful-orange-200" },
  { name: "Orange 300", value: "#ffa866", variable: "--sourceful-orange-300" },
  { name: "Orange 400", value: "#ff8533", variable: "--sourceful-orange-400" },
  { name: "Orange 500", value: "#FF6B00", variable: "--sourceful-orange-500", primary: true },
  { name: "Orange 600", value: "#cc5600", variable: "--sourceful-orange-600" },
  { name: "Orange 700", value: "#994000", variable: "--sourceful-orange-700" },
  { name: "Orange 800", value: "#662b00", variable: "--sourceful-orange-800" },
  { name: "Orange 900", value: "#4d2000", variable: "--sourceful-orange-900" },
];

const redColors = [
  { name: "Red 50", value: "#fff0f0", variable: "--sourceful-red-50" },
  { name: "Red 100", value: "#ffd9d9", variable: "--sourceful-red-100" },
  { name: "Red 200", value: "#ffb3b3", variable: "--sourceful-red-200" },
  { name: "Red 300", value: "#ff8080", variable: "--sourceful-red-300" },
  { name: "Red 400", value: "#ff4d4d", variable: "--sourceful-red-400" },
  { name: "Red 500", value: "#FF0D0D", variable: "--sourceful-red-500", primary: true },
  { name: "Red 600", value: "#cc0a0a", variable: "--sourceful-red-600" },
  { name: "Red 700", value: "#990808", variable: "--sourceful-red-700" },
  { name: "Red 800", value: "#660505", variable: "--sourceful-red-800" },
  { name: "Red 900", value: "#4d0404", variable: "--sourceful-red-900" },
];

const tealColors = [
  { name: "Teal 50", value: "#ecfeff", variable: "--sourceful-teal-50" },
  { name: "Teal 100", value: "#cffafe", variable: "--sourceful-teal-100" },
  { name: "Teal 200", value: "#a5f3fc", variable: "--sourceful-teal-200" },
  { name: "Teal 300", value: "#67e8f9", variable: "--sourceful-teal-300" },
  { name: "Teal 400", value: "#22d3ee", variable: "--sourceful-teal-400" },
  { name: "Teal 500", value: "#14b8a6", variable: "--sourceful-teal-500" },
  { name: "Teal 600", value: "#0D7377", variable: "--sourceful-teal-600", primary: true },
  { name: "Teal 700", value: "#0a5c5f", variable: "--sourceful-teal-700" },
  { name: "Teal 800", value: "#084547", variable: "--sourceful-teal-800" },
  { name: "Teal 900", value: "#052e2f", variable: "--sourceful-teal-900" },
];

const navyColors = [
  { name: "Navy 50", value: "#f0f5fa", variable: "--sourceful-navy-50" },
  { name: "Navy 100", value: "#d9e4f0", variable: "--sourceful-navy-100" },
  { name: "Navy 200", value: "#b3c9e0", variable: "--sourceful-navy-200" },
  { name: "Navy 300", value: "#8daed1", variable: "--sourceful-navy-300" },
  { name: "Navy 400", value: "#5c8bc2", variable: "--sourceful-navy-400" },
  { name: "Navy 500", value: "#3a6ca3", variable: "--sourceful-navy-500" },
  { name: "Navy 600", value: "#1E3A5F", variable: "--sourceful-navy-600", primary: true },
  { name: "Navy 700", value: "#182e4c", variable: "--sourceful-navy-700" },
  { name: "Navy 800", value: "#122339", variable: "--sourceful-navy-800" },
  { name: "Navy 900", value: "#0c1726", variable: "--sourceful-navy-900" },
];

const blueColors = [
  { name: "Blue 50", value: "#e8f4fd", variable: "--sourceful-blue-50" },
  { name: "Blue 100", value: "#c5e3fa", variable: "--sourceful-blue-100" },
  { name: "Blue 200", value: "#90c9f6", variable: "--sourceful-blue-200" },
  { name: "Blue 300", value: "#5bb0f1", variable: "--sourceful-blue-300" },
  { name: "Blue 400", value: "#2196F3", variable: "--sourceful-blue-400", primary: true },
  { name: "Blue 500", value: "#1976d2", variable: "--sourceful-blue-500" },
  { name: "Blue 600", value: "#1565c0", variable: "--sourceful-blue-600" },
  { name: "Blue 700", value: "#0d47a1", variable: "--sourceful-blue-700" },
  { name: "Blue 800", value: "#0a3880", variable: "--sourceful-blue-800" },
  { name: "Blue 900", value: "#072960", variable: "--sourceful-blue-900" },
];

const grayColors = [
  { name: "White", value: "#ffffff", variable: "--sourceful-white" },
  { name: "Gray 50", value: "#fafafa", variable: "--sourceful-gray-50" },
  { name: "Gray 100", value: "#f1f1f1", variable: "--sourceful-gray-100" },
  { name: "Gray 200", value: "#e5e5e5", variable: "--sourceful-gray-200" },
  { name: "Gray 400", value: "#a3a3a3", variable: "--sourceful-gray-400" },
  { name: "Gray 600", value: "#525252", variable: "--sourceful-gray-600" },
  { name: "Gray 800", value: "#262626", variable: "--sourceful-gray-800" },
  { name: "Gray 900", value: "#171717", variable: "--sourceful-gray-900" },
  { name: "Gray 950", value: "#0a0a0a", variable: "--sourceful-gray-950" },
  { name: "Black", value: "#000000", variable: "--sourceful-black" },
];

function ColorSwatch({ name, value, variable, primary }: { name: string; value: string; variable: string; primary?: boolean }) {
  return (
    <div className="space-y-1.5">
      <div
        className="h-16 w-full rounded-lg border"
        style={{ backgroundColor: value }}
      />
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        {primary && (
          <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded">
            Primary
          </span>
        )}
      </div>
      <div className="text-xs text-muted-foreground font-mono">{value}</div>
      <div className="text-xs text-muted-foreground font-mono">{variable}</div>
    </div>
  );
}

export default function BrandPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 max-w-5xl mx-auto py-8 px-4 md:px-8 w-full">
        <div className="space-y-12">
          {/* Header */}
          <div>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
              Brand Guidelines
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Visual identity, colors, typography, and voice guidelines for Sourceful Energy.
            </p>
          </div>

          {/* Logo */}
          <section className="space-y-6">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Logo
            </h2>

            {/* Full Logo */}
            <div>
              <h3 className="text-lg font-medium mb-3">Full Logo</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border p-8 flex items-center justify-center bg-white">
                  <Image
                    src="/assets/sourceful-logo-light-mode.svg"
                    alt="Sourceful Logo - Light Mode"
                    width={320}
                    height={42}
                    className="h-10 w-auto"
                  />
                </div>
                <div className="rounded-lg border p-8 flex items-center justify-center bg-sourceful-gray-950">
                  <Image
                    src="/assets/sourceful-logo-dark-mode.svg"
                    alt="Sourceful Logo - Dark Mode"
                    width={320}
                    height={42}
                    className="h-10 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Bolt Symbol */}
            <div>
              <h3 className="text-lg font-medium mb-3">Bolt Symbol</h3>
              <p className="text-sm text-muted-foreground mb-4">
                The bolt symbol can be used independently as an icon or favicon at various sizes.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border p-8 bg-white">
                  <div className="flex items-end gap-6">
                    {[48, 32, 24, 20, 16, 12].map((size) => (
                      <div key={size} className="flex flex-col items-center gap-2">
                        <svg
                          width={size}
                          height={size}
                          viewBox="0 0 53 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="26.4506" cy="26.4506" r="26.4506" fill="#2B2B2B" />
                          <path
                            d="M15.7938 25.7992L28.1412 10.8125C29.0232 9.74191 30.7487 10.5768 30.4567 11.9328L28.0388 23.1595C27.8529 24.0229 28.5485 24.8227 29.4294 24.7583L35.6745 24.3013C36.8624 24.2144 37.5517 25.618 36.7568 26.5049L22.8964 41.9686C21.9519 43.0224 20.2353 42.0583 20.6434 40.7034L24.2924 28.5905C24.5775 27.6441 23.7623 26.7304 22.7896 26.9062L17.0507 27.9434C15.8377 28.1626 15.01 26.7505 15.7938 25.7992Z"
                            fill="#00FF84"
                          />
                        </svg>
                        <span className="text-xs text-muted-foreground font-mono">{size}px</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg border p-8 bg-sourceful-gray-950">
                  <div className="flex items-end gap-6">
                    {[48, 32, 24, 20, 16, 12].map((size) => (
                      <div key={size} className="flex flex-col items-center gap-2">
                        <svg
                          width={size}
                          height={size}
                          viewBox="0 0 53 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.4502 0C41.0583 0 52.9012 11.8421 52.9014 26.4502C52.9014 41.0584 41.0584 52.9014 26.4502 52.9014C11.8421 52.9012 0 41.0583 0 26.4502C0.000191728 11.8422 11.8422 0.000191739 26.4502 0ZM30.457 11.9326C30.7487 10.5769 29.0236 9.74237 28.1416 10.8125L15.7939 25.7988C15.0101 26.7502 15.8378 28.1626 17.0508 27.9434L22.79 26.9062C23.7625 26.7308 24.5771 27.6445 24.292 28.5908L20.6436 40.7031C20.2354 42.0581 21.952 43.0225 22.8965 41.9688L36.7568 26.5049C37.5517 25.618 36.8625 24.2151 35.6748 24.3018L29.4297 24.7588C28.5489 24.8232 27.8531 24.0226 28.0391 23.1592L30.457 11.9326Z"
                            fill="#00FF84"
                          />
                        </svg>
                        <span className="text-xs text-sourceful-gray-400 font-mono">{size}px</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Notes */}
            <div className="rounded-lg border p-6 bg-muted/50">
              <h3 className="font-semibold mb-2">Usage Guidelines</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• The logo consists of the energy bolt symbol and the &quot;Sourceful Energy&quot; wordmark</li>
                <li>• Use light mode logo on light backgrounds, dark mode logo on dark backgrounds</li>
                <li>• The light mode logo features a dark circle with green bolt and dark text</li>
                <li>• The dark mode logo features a green circle with knockout bolt and green text</li>
                <li>• Maintain clear space around the logo equal to the height of the symbol</li>
                <li>• Do not modify the logo colors or proportions</li>
              </ul>
            </div>

            {/* Download */}
            <div>
              <h3 className="text-lg font-medium mb-3">Logo Files</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href="/assets/sourceful-logo-light-mode.svg"
                  download
                  className="flex items-center gap-3 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded bg-white border flex items-center justify-center">
                    <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Light Mode Logo</p>
                    <p className="text-xs text-muted-foreground">SVG format</p>
                  </div>
                </a>
                <a
                  href="/assets/sourceful-logo-dark-mode.svg"
                  download
                  className="flex items-center gap-3 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded bg-sourceful-gray-950 border flex items-center justify-center">
                    <svg className="h-5 w-5 text-sourceful-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Dark Mode Logo</p>
                    <p className="text-xs text-muted-foreground">SVG format</p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Brand Colors Overview */}
          <section className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Brand Colors
            </h2>
            <p className="text-muted-foreground">
              Our core brand palette. Each color serves a specific purpose in the design system.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {brandColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Colors - Neon Green (Primary) */}
          <section className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Neon Green (Primary)
            </h2>
            <p className="text-muted-foreground">
              Our signature neon green (#00FF84) represents energy and innovation. Use darker shades (600-700) for text on light backgrounds.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {greenColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Colors - Yellow (Energy) */}
          <section className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Yellow (Energy)
            </h2>
            <p className="text-muted-foreground">
              Yellow (#FFD500) is our energy accent color, used for highlights, energy-related visualizations, and call-to-actions.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {yellowColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Colors - Orange (Warning) */}
          <section className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Orange (Warning)
            </h2>
            <p className="text-muted-foreground">
              Orange (#FF6B00) is used for warning states and attention-grabbing elements that need visibility without the urgency of red.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {orangeColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Colors - Red (Error) */}
          <section className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Red (Error)
            </h2>
            <p className="text-muted-foreground">
              Red (#FF0D0D) is reserved for error states, destructive actions, and critical alerts that require immediate attention.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {redColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Colors - Teal (Energetic) */}
          <section className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Teal (Energetic)
            </h2>
            <p className="text-muted-foreground">
              Energetic teal (#0D7377) for secondary accents. Use lighter shades (400-500) on dark backgrounds and darker shades (600-700) on light backgrounds for better contrast.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {tealColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Colors - Navy (Deep Blue) */}
          <section className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Navy (Deep Blue)
            </h2>
            <p className="text-muted-foreground">
              Navy (#1E3A5F) provides depth and authority. Used for backgrounds, headers, and elements requiring a professional, trustworthy appearance.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {navyColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Colors - Blue (Info) */}
          <section className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Blue (Info)
            </h2>
            <p className="text-muted-foreground">
              Blue (#2196F3) is used for informational states, links, and interactive elements that need to stand out without conveying urgency.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {blueColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Colors - Neutral */}
          <section className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Neutral Colors
            </h2>
            <p className="text-muted-foreground">
              Gray scale for text, backgrounds, and borders. Use Gray 900 for primary text,
              Gray 600 for secondary text, and lighter shades for backgrounds.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-6 gap-4">
              {grayColors.map((color) => (
                <ColorSwatch key={color.name} {...color} />
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="space-y-6">
            <div>
              <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
                Typography
              </h2>
              <p className="text-muted-foreground mt-2">
                Satoshi is our primary typeface — a modern geometric sans-serif with a clean, technical feel.
              </p>
            </div>

            {/* Type Scale */}
            <div className="space-y-1">
              {/* Display */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">Display</span>
                  <p className="text-caption">60px / 700 / -0.02em</p>
                </div>
                <p className="text-display">Powering energy</p>
              </div>

              {/* H1 */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">H1</span>
                  <p className="text-caption">40px / 700 / -0.02em</p>
                </div>
                <p className="text-h1">Page heading one</p>
              </div>

              {/* H2 */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">H2</span>
                  <p className="text-caption">32px / 600 / -0.01em</p>
                </div>
                <p className="text-h2">Section heading two</p>
              </div>

              {/* H3 */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">H3</span>
                  <p className="text-caption">24px / 600 / -0.01em</p>
                </div>
                <p className="text-h3">Subsection heading three</p>
              </div>

              {/* H4 */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">H4</span>
                  <p className="text-caption">20px / 600</p>
                </div>
                <p className="text-h4">Component heading four</p>
              </div>

              {/* H5 */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">H5</span>
                  <p className="text-caption">18px / 500</p>
                </div>
                <p className="text-h5">Small heading five</p>
              </div>

              {/* H6 */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">H6</span>
                  <p className="text-caption">16px / 500</p>
                </div>
                <p className="text-h6">Tiny heading six</p>
              </div>

              {/* Body Large */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">Body Large</span>
                  <p className="text-caption">18px / 400</p>
                </div>
                <p className="text-body-lg">Lead paragraph text for introductions and emphasis.</p>
              </div>

              {/* Body */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">Body</span>
                  <p className="text-caption">16px / 400</p>
                </div>
                <p className="text-body">Default body text for paragraphs and general content.</p>
              </div>

              {/* Body Small */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">Body Small</span>
                  <p className="text-caption">14px / 400</p>
                </div>
                <p className="text-body-sm">Secondary text, descriptions, and supporting content.</p>
              </div>

              {/* Label Large */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">Label Large</span>
                  <p className="text-caption">14px / 500 / 0.01em</p>
                </div>
                <p className="text-label-lg">Form labels and navigation items</p>
              </div>

              {/* Label */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">Label</span>
                  <p className="text-caption">12px / 500 / 0.01em</p>
                </div>
                <p className="text-label">Small labels and badges</p>
              </div>

              {/* Caption */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">Caption</span>
                  <p className="text-caption">12px / 400</p>
                </div>
                <p className="text-caption">Helper text, timestamps, and metadata</p>
              </div>

              {/* Overline */}
              <div className="flex items-baseline gap-4 py-4 border-b">
                <div className="w-32 flex-shrink-0">
                  <span className="text-label-lg text-muted-foreground">Overline</span>
                  <p className="text-caption">12px / 600 / 0.1em</p>
                </div>
                <p className="text-overline">Category or section label</p>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-medium mb-3">Links</h3>
              <div className="rounded-lg border p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-32 text-label-lg text-muted-foreground">Default</span>
                  <a href="#" className="text-primary underline-offset-4 hover:underline">Link to resource</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-32 text-label-lg text-muted-foreground">Muted</span>
                  <a href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">Secondary link</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-32 text-label-lg text-muted-foreground">External</span>
                  <a href="#" className="text-primary underline-offset-4 hover:underline inline-flex items-center gap-1">
                    External link
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Monospace */}
            <div>
              <h3 className="text-lg font-medium mb-3">Monospace (JetBrains Mono)</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Used for code, technical values, and data displays.
              </p>
              <div className="rounded-lg border p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-32 text-label-lg text-muted-foreground">Code Block</span>
                  <code className="font-mono text-sm bg-muted px-2 py-1 rounded">const energy = await grid.optimize()</code>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-32 text-label-lg text-muted-foreground">Values</span>
                  <span className="font-mono text-sm">192.168.1.1 • 2.4 kWh • 99.9%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-32 text-label-lg text-muted-foreground">Inline</span>
                  <p className="text-sm">Press <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">Ctrl + C</code> to copy</p>
                </div>
              </div>
            </div>

            {/* Usage Classes */}
            <div>
              <h3 className="text-lg font-medium mb-3">CSS Classes</h3>
              <div className="rounded-lg border bg-sourceful-gray-950 p-4 overflow-x-auto">
                <pre className="text-sm text-sourceful-green-400 font-mono">
{`/* Headings */
.text-display  /* 60px, bold, tight tracking */
.text-h1       /* 40px, bold */
.text-h2       /* 32px, semibold */
.text-h3       /* 24px, semibold */
.text-h4       /* 20px, semibold */
.text-h5       /* 18px, medium */
.text-h6       /* 16px, medium */

/* Body */
.text-body-lg  /* 18px, regular */
.text-body     /* 16px, regular */
.text-body-sm  /* 14px, regular */

/* UI Text */
.text-label-lg /* 14px, medium, tracking */
.text-label    /* 12px, medium, tracking */
.text-caption  /* 12px, muted color */
.text-overline /* 12px, uppercase, wide tracking */
.text-lead     /* 18px, muted color */
.text-code     /* mono font, background */`}
                </pre>
              </div>
            </div>
          </section>

          {/* Voice & Tone */}
          <section className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Voice & Tone
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-6 space-y-2">
                <h3 className="font-semibold text-primary">We are</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Clear and direct</li>
                  <li>• Technically precise</li>
                  <li>• Confident but not arrogant</li>
                  <li>• Helpful and supportive</li>
                  <li>• Forward-thinking</li>
                </ul>
              </div>
              <div className="rounded-lg border p-6 space-y-2">
                <h3 className="font-semibold text-destructive">We are not</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Jargon-heavy</li>
                  <li>• Condescending</li>
                  <li>• Overly casual</li>
                  <li>• Vague or ambiguous</li>
                  <li>• Sensationalist</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="space-y-4">
            <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
              Mission Statement
            </h2>
            <blockquote className="border-l-4 border-primary pl-6 py-2 text-xl italic">
              &ldquo;Building local energy coordination infrastructure — the physical rails
              that make distributed energy work.&rdquo;
            </blockquote>
            <p className="text-muted-foreground">
              We believe in physics before code, simple over clever, and local over cloud.
              Our technology enables sub-200ms edge control because grid frequency must
              balance every second — and cloud APIs simply cannot meet this requirement.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
