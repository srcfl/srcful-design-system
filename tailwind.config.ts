import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sourceful Brand Colors
        sourceful: {
          // Neon Green (Primary)
          green: {
            DEFAULT: "var(--sourceful-green)",
            50: "var(--sourceful-green-50)",
            100: "var(--sourceful-green-100)",
            200: "var(--sourceful-green-200)",
            300: "var(--sourceful-green-300)",
            400: "var(--sourceful-green-400)",
            500: "var(--sourceful-green-500)",
            600: "var(--sourceful-green-600)",
            700: "var(--sourceful-green-700)",
            800: "var(--sourceful-green-800)",
            900: "var(--sourceful-green-900)",
            950: "var(--sourceful-green-950)",
          },
          // Yellow (Energy)
          yellow: {
            DEFAULT: "var(--sourceful-yellow)",
            50: "var(--sourceful-yellow-50)",
            100: "var(--sourceful-yellow-100)",
            200: "var(--sourceful-yellow-200)",
            300: "var(--sourceful-yellow-300)",
            400: "var(--sourceful-yellow-400)",
            500: "var(--sourceful-yellow-500)",
            600: "var(--sourceful-yellow-600)",
            700: "var(--sourceful-yellow-700)",
            800: "var(--sourceful-yellow-800)",
            900: "var(--sourceful-yellow-900)",
          },
          // Orange (Warning)
          orange: {
            DEFAULT: "var(--sourceful-orange)",
            50: "var(--sourceful-orange-50)",
            100: "var(--sourceful-orange-100)",
            200: "var(--sourceful-orange-200)",
            300: "var(--sourceful-orange-300)",
            400: "var(--sourceful-orange-400)",
            500: "var(--sourceful-orange-500)",
            600: "var(--sourceful-orange-600)",
            700: "var(--sourceful-orange-700)",
            800: "var(--sourceful-orange-800)",
            900: "var(--sourceful-orange-900)",
          },
          // Red (Error/Destructive)
          red: {
            DEFAULT: "var(--sourceful-red)",
            50: "var(--sourceful-red-50)",
            100: "var(--sourceful-red-100)",
            200: "var(--sourceful-red-200)",
            300: "var(--sourceful-red-300)",
            400: "var(--sourceful-red-400)",
            500: "var(--sourceful-red-500)",
            600: "var(--sourceful-red-600)",
            700: "var(--sourceful-red-700)",
            800: "var(--sourceful-red-800)",
            900: "var(--sourceful-red-900)",
          },
          // Teal (Energetic Teal)
          teal: {
            DEFAULT: "var(--sourceful-teal)",
            50: "var(--sourceful-teal-50)",
            100: "var(--sourceful-teal-100)",
            200: "var(--sourceful-teal-200)",
            300: "var(--sourceful-teal-300)",
            400: "var(--sourceful-teal-400)",
            500: "var(--sourceful-teal-500)",
            600: "var(--sourceful-teal-600)",
            700: "var(--sourceful-teal-700)",
            800: "var(--sourceful-teal-800)",
            900: "var(--sourceful-teal-900)",
            950: "var(--sourceful-teal-950)",
          },
          // Navy (Deep Blue)
          navy: {
            DEFAULT: "var(--sourceful-navy)",
            50: "var(--sourceful-navy-50)",
            100: "var(--sourceful-navy-100)",
            200: "var(--sourceful-navy-200)",
            300: "var(--sourceful-navy-300)",
            400: "var(--sourceful-navy-400)",
            500: "var(--sourceful-navy-500)",
            600: "var(--sourceful-navy-600)",
            700: "var(--sourceful-navy-700)",
            800: "var(--sourceful-navy-800)",
            900: "var(--sourceful-navy-900)",
          },
          // Blue (Info)
          blue: {
            DEFAULT: "var(--sourceful-blue)",
            50: "var(--sourceful-blue-50)",
            100: "var(--sourceful-blue-100)",
            200: "var(--sourceful-blue-200)",
            300: "var(--sourceful-blue-300)",
            400: "var(--sourceful-blue-400)",
            500: "var(--sourceful-blue-500)",
            600: "var(--sourceful-blue-600)",
            700: "var(--sourceful-blue-700)",
            800: "var(--sourceful-blue-800)",
            900: "var(--sourceful-blue-900)",
          },
          // Gray Scale
          gray: {
            50: "var(--sourceful-gray-50)",
            100: "var(--sourceful-gray-100)",
            200: "var(--sourceful-gray-200)",
            300: "var(--sourceful-gray-300)",
            400: "var(--sourceful-gray-400)",
            500: "var(--sourceful-gray-500)",
            600: "var(--sourceful-gray-600)",
            700: "var(--sourceful-gray-700)",
            800: "var(--sourceful-gray-800)",
            900: "var(--sourceful-gray-900)",
            950: "var(--sourceful-gray-950)",
          },
          black: "var(--sourceful-black)",
          white: "var(--sourceful-white)",
        },
        // ShadCN semantic colors mapped to Sourceful tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-from-top": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          from: { opacity: "0", transform: "translateX(10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "energy-pulse": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 hsl(var(--accent) / 0.4)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 0 8px hsl(var(--accent) / 0)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-in",
        "scale-in": "scale-in 0.15s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.2s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.2s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.2s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.2s ease-out",
        "energy-pulse": "energy-pulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
