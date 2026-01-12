# [Project Name]

## UI Framework

This project uses the **Sourceful Design System**. All UI components must come from `@sourceful-energy/ui`.

### Critical Setup Requirements

#### Next.js Setup

```tsx
// 1. In your root layout (app/layout.tsx)
// CSS IMPORT ORDER MATTERS - design system MUST be first
import "@sourceful-energy/ui/styles.css"  // FIRST - contains CSS variables
import "./globals.css"                     // SECOND - project overrides

// 2. Import components as needed
import { Button, Card, Badge, Input, Label } from "@sourceful-energy/ui"

// 3. ThemeProvider for dark mode (required)
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### Vite Setup

```tsx
// main.tsx - CSS IMPORT ORDER MATTERS
import "@sourceful-energy/ui/styles.css"  // FIRST
import "./index.css"                       // SECOND

import { DesignSystemProvider } from "@sourceful-energy/ui"

function App() {
  return (
    <DesignSystemProvider defaultTheme="system">
      {/* Your app */}
    </DesignSystemProvider>
  )
}
```

### Component Quick Reference

| Need | Use |
|------|-----|
| Actions | `Button` (variants: default, outline, destructive, energy, success, warning) |
| Status indicators | `Badge` (variants: default, secondary, destructive, outline, energy, success, warning, info) |
| Containers | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| Forms | `Input`, `Label`, `Select`, `Checkbox`, `Switch`, `Textarea`, `Slider` |
| Feedback | `Alert`, `toast` (from sonner), `Progress`, `Skeleton` |
| Overlays | `Dialog`, `Sheet`, `DropdownMenu`, `Tooltip` |
| Layout | `Tabs`, `SimpleTabs`, `Accordion`, `Separator`, `ScrollArea`, `Table` |
| Navigation | `SideMenu`, `TopMenu` |
| Brand | `Logo` (variants: full, symbol, wordmark), `PixelGrid` (animated brand element) |
| Loading | `PixelGrid` (branded loading animation), `Skeleton` (content placeholder) |

### Color Token Usage

```tsx
// Text colors
className="text-foreground"        // Primary text
className="text-muted-foreground"  // Secondary/subtle text
className="text-primary"           // Brand green
className="text-destructive"       // Error red

// Background colors
className="bg-background"          // Page background
className="bg-card"                // Card/elevated surfaces
className="bg-muted"               // Subtle backgrounds
className="bg-primary"             // Brand green background

// Border colors
className="border-border"          // Default borders
className="border-input"           // Form input borders
```

### Key Patterns

```tsx
// Toasts
import { toast } from "sonner"
toast.success("Saved")
toast.error("Failed")

// Forms: Always pair Label with inputs
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>

// Loading states: Use PixelGrid instead of spinners
import { PixelGrid } from "@sourceful-energy/ui"

// Centered loading
<div className="flex flex-col items-center justify-center py-8">
  <PixelGrid pattern="frame" size="md" />
  <p className="text-sm text-muted-foreground mt-4">Loading...</p>
</div>

// Compact loading (next to buttons/text)
<div className="flex items-center gap-3">
  <PixelGrid dimension={4} pattern="cross-spin" size="sm" />
  <span className="text-sm text-muted-foreground">Saving...</span>
</div>
```

### Visual Themes

```tsx
// Base theme (default) - Clean, minimal styling
<html lang="en">

// Elevated theme - Gradient borders on cards, buttons, badges
<html lang="en" data-theme="elevated">

// The elevated theme adds green gradient lighting effects to:
// - Card borders
// - Primary buttons and badges
// - Input focus states
// - Tab indicators
```

### Accessibility Features

```tsx
// Full accessibility support with AccessibilityProvider
import { AccessibilityProvider, AccessibilitySettings } from "@sourceful-energy/ui"

<AccessibilityProvider>
  <App />
  <AccessibilitySettings /> {/* Optional settings panel */}
</AccessibilityProvider>

// Available accessibility modes (set via data attributes):
// data-font-mode="dyslexic"     - Lexend font for dyslexia
// data-color-mode="deuteranopia" | "protanopia" | "tritanopia" | "achromatopsia"
// data-focus-mode="enhanced"    - High-visibility focus rings
// data-spacing="comfortable"    - Increased text spacing

// Example: Enable dyslexic font mode
<html data-font-mode="dyslexic">
```

### Reskinning Existing Code

When migrating existing components to the design system:

**DO:**
- Replace UI primitives (buttons, cards, inputs) with design system components
- Use semantic color tokens instead of hardcoded colors
- Preserve existing page structure, layouts, and routing
- Keep all functional logic intact
- Work incrementally: replace one component type, verify it works, then continue
- Test dark mode after changes

**DO NOT:**
- Change page layouts, routing, or component hierarchy
- Remove or reorganize page sections
- Add new features beyond what's requested
- Delete code assuming it's unused
- Override design system CSS variables (unless intentionally theming)
- Remove existing Tailwind classes that handle layout (flex, grid, spacing)

### Don't

- Don't create custom buttons, cards, or form inputs - use the design system
- Don't use raw colors like `#22c55e` - use tokens like `text-primary` or `bg-primary`
- Don't install shadcn/ui directly - components are already included
- Don't create custom modal/dialog components - use `Dialog` or `Sheet`
- Don't import `@sourceful-energy/ui/styles.css` AFTER your globals.css

### Troubleshooting

**Unstyled components / CSS variables undefined:**
- Verify `@sourceful-energy/ui/styles.css` is imported FIRST in your layout
- Check package version is 0.1.30 or later: `npm list @sourceful-energy/ui`

**Dark mode not working:**
- Next.js: Add `suppressHydrationWarning` to `<html>` tag, wrap in `ThemeProvider`
- Vite: Use `DesignSystemProvider` which handles theme toggling

**Elevated theme not showing:**
- Add `data-theme="elevated"` to `<html>` element
- Or use `DesignSystemProvider` with `defaultVisualTheme="elevated"`

## Project-Specific Notes

<!-- Add your project-specific context below -->

