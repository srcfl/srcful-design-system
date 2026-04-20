import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sourceful brand — one scale: signal orange.
        // Editorial green (success) and red (destructive) are single semantic
        // tokens, not scales. Grays come from Tailwind's neutral + the ink/
        // cream/paper editorial grounds.
        sourceful: {
          signal: {
            50: "var(--sourceful-signal-50)",
            100: "var(--sourceful-signal-100)",
            200: "var(--sourceful-signal-200)",
            300: "var(--sourceful-signal-300)",
            400: "var(--sourceful-signal-400)",
            500: "var(--sourceful-signal-500)",
            600: "var(--sourceful-signal-600)",
            700: "var(--sourceful-signal-700)",
            800: "var(--sourceful-signal-800)",
            900: "var(--sourceful-signal-900)",
            950: "var(--sourceful-signal-950)",
          },
          ink:    "var(--color-ink)",
          cream:  "var(--color-cream)",
          paper:  "var(--color-paper)",
        },
        signal: {
          DEFAULT: "var(--color-signal)",
          foreground: "var(--color-ink)",
        },

        // shadcn semantic aliases
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(0 0% 100%)",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(0 0% 100%)",
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
        heading: ["var(--font-heading)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        "7xl": "80rem",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
