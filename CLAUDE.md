# Sourceful Design System

This is the official design system for Sourceful Energy. It contains React components, design tokens, and brand guidelines.

## Strategic Context (Required)

**At the start of each session**, read the Sourceful Playbook for strategic context:

```
/Users/paulcooper/Documents/Repos/sourceful-playbook
```

Key files to reference:
- `CLAUDE.md` — Master strategic context and navigation
- `01-core-narrative/Hello-World-Story.md` — Canonical company narrative
- `_facts.md` — Registry of canonical facts (stats, metrics, positioning)
- `03-competitive/Moat-Strategy.md` — Five moats strategy

This ensures design decisions align with:
- **Brand positioning**: "Local Energy Coordination Infrastructure"
- **Core message**: $20 Zap gateway, 200ms response time, €2.5B coordination problem
- **Visual identity**: Energy/grid themes, green primary, yellow accent for energy states

When creating or modifying components, consider how they support the Sourceful narrative and energy domain.

## Quick Reference for AI Assistants

When building UIs for Sourceful projects, use components from this design system:

```tsx
// Core components
import { Button, Card, Input, Label, Badge, Tooltip, Dialog, DropdownMenu, Tabs, Table } from "@sourceful-energy/ui"

// Form components
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@sourceful-energy/ui"
import { Checkbox, RadioGroup, RadioGroupItem, Switch, Textarea, Slider } from "@sourceful-energy/ui"

// Layout components
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@sourceful-energy/ui"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@sourceful-energy/ui"
import { Separator, ScrollArea } from "@sourceful-energy/ui"

// Navigation components
import { SideMenu } from "@sourceful-energy/ui"
import { TopMenu, TopMenuUser, TopMenuUserItem, TopMenuUserSection } from "@sourceful-energy/ui"
import { SimpleTabs, SimpleTabsPanel, SimpleTabsRoot, SimpleTabsList, SimpleTabsTrigger, SimpleTabsContent } from "@sourceful-energy/ui"

// Feedback components
import { Alert, AlertTitle, AlertDescription } from "@sourceful-energy/ui"
import { Progress, Skeleton } from "@sourceful-energy/ui"
import { toast } from "sonner"

// Brand
import { Logo } from "@sourceful-energy/ui"
import { PixelGrid, PixelGridShowcase } from "@sourceful-energy/ui"

// Providers
import { LenisProvider } from "@sourceful-energy/ui"
import { DesignSystemProvider, useDesignSystemTheme, useAccessibility } from "@sourceful-energy/ui"

// CSS (required)
import "@sourceful-energy/ui/styles.css"
```

## Design Tokens

### Colors
- **Primary (Green)**: `sourceful-green-500` (#22c55e) - Use for primary actions, links, success states
- **Accent (Yellow)**: `sourceful-yellow-400` (#facc15) - Use for highlights, warnings, energy indicators
- **Text Primary**: `sourceful-gray-900` (#111827)
- **Text Secondary**: `sourceful-gray-600` (#4b5563)
- **Background**: White (light) / `#0a0a0a` (dark)
- **Borders**: `sourceful-gray-200` (#e5e7eb)

### Typography
- **Sans font**: Satoshi - Use for all UI text (modern geometric sans-serif)
- **Mono font**: JetBrains Mono - Use for code, technical values

### Spacing Scale
- `space-1`: 4px
- `space-2`: 8px
- `space-3`: 12px
- `space-4`: 16px (base unit)
- `space-6`: 24px
- `space-8`: 32px

### Border Radius
- `radius-sm`: 4px
- `radius-md`: 8px (default for buttons, inputs)
- `radius-lg`: 12px (cards, dialogs)

## Component Usage

### Logo
```tsx
// Full logo (symbol + wordmark)
<Logo variant="full" size="md" />

// Symbol only
<Logo variant="symbol" size="lg" />

// Wordmark only
<Logo variant="wordmark" size="md" />

// Force specific theme
<Logo variant="full" forcedTheme="dark" />

// Sizes: xs, sm, md, lg, xl
```

### PixelGrid (Brand Animation)
```tsx
import { PixelGrid, PixelGridShowcase, type PatternType } from "@sourceful-energy/ui"

// Basic usage - animated 3x3 pixel grid
<PixelGrid pattern="solo-center" />

// With Sourceful green (default)
<PixelGrid pattern="frame" color="green" />

// Other color themes
<PixelGrid pattern="corners-sync" color="blue" />
<PixelGrid pattern="plus-hollow" color="pink" />

// Sizes: sm, md (default), lg
<PixelGrid pattern="line-h-mid" size="lg" />

// Speed: slow, normal (default), fast
<PixelGrid pattern="line-diag-1" speed="fast" />

// Show pattern label
<PixelGrid pattern="T-top" showLabel />

// Pause animation
<PixelGrid pattern="frame-sync" paused />

// Showcase all patterns by category
<PixelGridShowcase color="green" size="md" />

// Available patterns (31 total):
// Solo: solo-center, solo-tl, solo-br
// Horizontal: line-h-top, line-h-mid, line-h-bot
// Vertical: line-v-left, line-v-mid, line-v-right
// Diagonal: line-diag-1, line-diag-2
// Corners: corners-sync, corners-only
// L-Shapes: L-tl, L-tr, L-bl, L-br
// T-Shapes: T-top, T-bot, T-left, T-right
// Duos: duo-h, duo-v, duo-diag
// Frame: frame, frame-sync
// Plus: plus-hollow
// Sparse: sparse-1, sparse-2, sparse-3
```

### Button
```tsx
// Primary action (default)
<Button>Save Changes</Button>

// Secondary action
<Button variant="outline">Cancel</Button>

// Destructive action
<Button variant="destructive">Delete</Button>

// Sourceful custom variants
<Button variant="energy">Start Charging</Button>    // Yellow energy button
<Button variant="success">Confirm</Button>          // Green success button
<Button variant="warning">Review</Button>           // Orange warning button

// With icon
<Button><Icon className="mr-2 h-4 w-4" /> Label</Button>

// Loading state
<Button disabled><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading</Button>
```

### Badge
```tsx
// Default variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>

// Sourceful custom variants
<Badge variant="energy">2.4 kWh</Badge>    // Yellow energy indicator
<Badge variant="success">Online</Badge>    // Green success state
<Badge variant="warning">Pending</Badge>   // Orange warning state
<Badge variant="info">New</Badge>          // Blue informational
```

### Alert
```tsx
// Variants: default, success, warning, info, energy, destructive
<Alert variant="success">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>

<Alert variant="energy">
  <Zap className="h-4 w-4" />
  <AlertTitle>Energy Update</AlertTitle>
  <AlertDescription>Solar production is at peak capacity.</AlertDescription>
</Alert>
```

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Form Inputs
```tsx
// Text input
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="name@example.com" />
</div>

// Textarea
<Textarea placeholder="Type your message here." />

// Select
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>

// Checkbox
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>

// Switch
<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>

// Slider
<Slider defaultValue={[50]} max={100} step={1} />
```

### Dialog
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Sheet (Slide-over panel)
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
    {/* Content */}
  </SheetContent>
</Sheet>
```

### Toast (Sonner)
```tsx
import { toast } from "sonner"

// Basic
toast("Event has been created")

// Variants
toast.success("Changes saved")
toast.error("Something went wrong")
toast.info("New update available")
toast.warning("Low battery")

// With description
toast.success("Success", {
  description: "Your changes have been saved.",
})
```

### Progress
```tsx
<Progress value={66} />
```

### Skeleton
```tsx
<div className="space-y-2">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
</div>
```

### Accordion
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content here...</AccordionContent>
  </AccordionItem>
</Accordion>
```

### LenisProvider (Smooth Scrolling)
```tsx
// Wrap your app with LenisProvider for smooth scrolling
import { LenisProvider } from "@sourceful-energy/ui"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}

// For elements that need native scroll (sidebars, modals, etc.)
// Add the data-lenis-prevent attribute
<div className="overflow-y-auto" data-lenis-prevent>
  {/* Content with native scrolling */}
</div>
```

### DesignSystemProvider (Themes & Accessibility)

The DesignSystemProvider manages visual themes and accessibility modes. It works alongside ThemeProvider (for dark/light mode).

```tsx
import { DesignSystemProvider } from "@sourceful-energy/ui"
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* ThemeProvider handles dark/light mode */}
        <ThemeProvider attribute="class" defaultTheme="system">
          {/* DesignSystemProvider handles visual theme + accessibility */}
          <DesignSystemProvider defaultTheme="elevated">
            {children}
          </DesignSystemProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### Themes (Developer Choice)

Set the visual style for your app:

```tsx
// Base theme (flat, current default)
<DesignSystemProvider defaultTheme="base">

// Elevated theme (premium dashboard with depth/shadows)
<DesignSystemProvider defaultTheme="elevated">
```

#### Accessibility Modes (User Choice)

Build accessibility settings UI using the hooks:

```tsx
import { useAccessibility } from "@sourceful-energy/ui"

function AccessibilitySettings() {
  const {
    fontMode, setFontMode,        // "default" | "dyslexic"
    colorMode, setColorMode,      // "default" | "deuteranopia" | "protanopia" | "tritanopia" | "achromatopsia"
    spacingMode, setSpacingMode,  // "default" | "comfortable"
    focusMode, setFocusMode,      // "default" | "enhanced"
  } = useAccessibility()

  return (
    <div className="space-y-4">
      {/* Dyslexia-friendly font (Lexend) */}
      <Switch
        checked={fontMode === "dyslexic"}
        onCheckedChange={(v) => setFontMode(v ? "dyslexic" : "default")}
      />

      {/* Color blind modes */}
      <Select value={colorMode} onValueChange={setColorMode}>
        <SelectItem value="default">Default colors</SelectItem>
        <SelectItem value="deuteranopia">Red-green color blind</SelectItem>
        <SelectItem value="protanopia">Red color blind</SelectItem>
        <SelectItem value="tritanopia">Blue-yellow color blind</SelectItem>
        <SelectItem value="achromatopsia">Grayscale</SelectItem>
      </Select>

      {/* Increased text spacing (WCAG 1.4.12) */}
      <Switch
        checked={spacingMode === "comfortable"}
        onCheckedChange={(v) => setSpacingMode(v ? "comfortable" : "default")}
      />

      {/* Enhanced focus indicators (WCAG 2.4.7) */}
      <Switch
        checked={focusMode === "enhanced"}
        onCheckedChange={(v) => setFocusMode(v ? "enhanced" : "default")}
      />
    </div>
  )
}
```

#### Available Hooks

- `useDesignSystemTheme()` - Access/set visual theme
- `useFontMode()` - Access/set dyslexic font mode
- `useColorMode()` - Access/set color blind mode
- `useSpacingMode()` - Access/set text spacing mode
- `useFocusMode()` - Access/set enhanced focus mode
- `useAccessibility()` - All accessibility settings at once
- `useDesignSystem()` - Full context (theme + all accessibility)

#### Data Attributes

The provider sets these attributes on `<html>`:

- `data-theme="base|elevated"` - Visual theme
- `data-font-mode="dyslexic"` - Dyslexic font active
- `data-color-mode="deuteranopia|protanopia|tritanopia|achromatopsia"` - Color blind mode
- `data-spacing="comfortable"` - Increased text spacing
- `data-focus-mode="enhanced"` - Enhanced focus indicators

User accessibility preferences are persisted to localStorage.

### SideMenu
```tsx
import { SideMenu } from "@sourceful-energy/ui"
import { LayoutDashboard, Home, Settings } from "lucide-react"

const items = [
  { id: "dashboard", label: "Dashboard", href: "/", icon: <LayoutDashboard /> },
];

const sections = [
  {
    id: "fleet",
    title: "Fleet",
    icon: <Home />,
    items: [
      { id: "sites", label: "Sites", href: "/sites", icon: <Home /> },
    ],
  },
];

<SideMenu
  header={<span className="font-bold">My App</span>}
  collapsedHeader={<span className="font-bold">M</span>}
  items={items}
  sections={sections}
  activeItem="dashboard"
  collapsible={true}
  onCollapsedChange={(collapsed) => console.log(collapsed)}
/>
```

### TopMenu
```tsx
import { TopMenu, TopMenuUser, TopMenuUserItem, TopMenuUserSection } from "@sourceful-energy/ui"
import { User, Settings, LogOut } from "lucide-react"

<TopMenu
  breadcrumbs={[
    { label: "Sites", href: "/sites" },
    { label: "Stockholm Home" },
  ]}
  showMobileMenu
  onMobileMenuClick={() => setMenuOpen(true)}
  rightContent={
    <TopMenuUser
      name="John Doe"
      email="john@example.com"
      avatarContent={<User className="h-4 w-4 text-white" />}
    >
      <TopMenuUserSection>
        <TopMenuUserItem icon={<Settings />}>Settings</TopMenuUserItem>
      </TopMenuUserSection>
      <TopMenuUserSection>
        <TopMenuUserItem icon={<LogOut />} variant="danger">Log Out</TopMenuUserItem>
      </TopMenuUserSection>
    </TopMenuUser>
  }
/>
```

### SimpleTabs (Underlined Tabs)
```tsx
import { SimpleTabs, SimpleTabsPanel } from "@sourceful-energy/ui"
import { LayoutDashboard, Settings } from "lucide-react"

// Array-based usage
const tabs = [
  { id: "overview", label: "Overview", icon: <LayoutDashboard /> },
  { id: "settings", label: "Settings", icon: <Settings /> },
];

<SimpleTabs tabs={tabs} defaultTab="overview">
  <SimpleTabsPanel id="overview">
    <p>Overview content...</p>
  </SimpleTabsPanel>
  <SimpleTabsPanel id="settings">
    <p>Settings content...</p>
  </SimpleTabsPanel>
</SimpleTabs>

// Compound component pattern (more flexible)
import { SimpleTabsRoot, SimpleTabsList, SimpleTabsTrigger, SimpleTabsContent } from "@sourceful-energy/ui"

<SimpleTabsRoot defaultTab="tab1">
  <SimpleTabsList>
    <SimpleTabsTrigger value="tab1">Account</SimpleTabsTrigger>
    <SimpleTabsTrigger value="tab2">Password</SimpleTabsTrigger>
  </SimpleTabsList>
  <SimpleTabsContent value="tab1">Account settings...</SimpleTabsContent>
  <SimpleTabsContent value="tab2">Password settings...</SimpleTabsContent>
</SimpleTabsRoot>
```

## Patterns

### Layout
- Use `container` class for max-width content areas
- Standard page padding: `py-6 lg:py-8`
- Card grid: `grid gap-4 md:grid-cols-2 lg:grid-cols-3`

### Dark Mode
- System uses `class` strategy with `.dark` on `<html>`
- All components support dark mode automatically
- Use `bg-background` and `text-foreground` for adaptive colors
- Theme provider: `next-themes` with system detection

### Animations
- `animate-fade-in` / `animate-fade-out` - Fade transitions
- `animate-scale-in` - Scale up animation
- `animate-slide-in-from-*` - Slide from top/bottom/left/right
- `animate-energy-pulse` - Energy indicator pulse effect
- `animate-shimmer` - Loading shimmer effect

### Accessibility
- All components are WCAG 2.1 AA compliant
- Use `Label` with form inputs (connect via `htmlFor`)
- Buttons have visible focus rings
- Dialogs trap focus and support Escape to close

## Changelog

The design system includes a changelog system for tracking changes to components, tokens, and brand.

### Viewing the Changelog
- **Web**: https://design.sourceful.energy/changelog
- **RSS Feed**: https://design.sourceful.energy/changelog.xml

### Subscribing to Updates
Subscribe to the RSS feed to get notified of changes:
- **Slack**: Add RSS app to channel, subscribe to `/changelog.xml`
- **Discord**: Use RSS bot (e.g., MonitoRSS)
- **MS Teams**: Use RSS connector
- **Email**: Use services like Blogtrottr, IFTTT, or Zapier

### Conventional Commits
For automatic changelog generation, use conventional commits:

```bash
feat(component): add new Button variant     # Added
fix(token): correct green-500 hex value     # Fixed
docs: update installation guide             # Changed
BREAKING CHANGE: remove deprecated props    # Breaking
```

Types: `feat`, `fix`, `docs`, `refactor`, `BREAKING CHANGE`
Scopes: `component`, `token`, `brand`, `docs`

### Manual Changelog Updates
Edit `content/changelog/CHANGELOG.md` following this format:

```markdown
## [0.1.22] - 2026-01-07

### Added
- **component**: New component description

### Fixed
- **token**: Fixed issue description

### Changed
- **docs**: Updated documentation
```

## File Structure

```
srcful-design-system/
├── app/                    # Next.js docs site
│   └── changelog/          # Changelog page
├── components/
│   ├── ui/                 # Base components (24 components)
│   ├── logo.tsx            # Sourceful logo component
│   ├── theme-provider.tsx  # next-themes wrapper
│   └── *.tsx               # Site components
├── content/
│   └── changelog/          # Changelog markdown files
│       └── CHANGELOG.md    # Main changelog
├── lib/
│   ├── utils.ts            # Utility functions (cn)
│   ├── changelog.ts        # Changelog parsing utilities
│   └── rss.ts              # RSS feed generation
├── scripts/
│   └── generate-changelog.js # Auto-generate from commits
├── public/
│   ├── assets/             # Logo SVG files
│   └── fonts/              # Satoshi font files
└── registry/               # Component schemas (JSON)
```

## Development

```bash
npm install
npm run dev     # Start dev server at localhost:3000
npm run build   # Production build
```

## Publishing to npm

**IMPORTANT: Remind the user to bump version and publish after making changes to components!**

The package is published as `@sourceful-energy/ui`. After modifying components in `components/ui/` or `lib/`:

```bash
npm version patch   # Bug fixes: 0.1.1 → 0.1.2
npm version minor   # New features: 0.1.2 → 0.2.0
npm version major   # Breaking changes: 0.2.0 → 1.0.0
git push origin main --follow-tags
```

GitHub Actions will automatically publish to npm when the version changes.

**Checklist after component changes:**
- [ ] Test changes locally with `npm run dev`
- [ ] Bump version with `npm version patch/minor/major`
- [ ] Push with `git push origin main --follow-tags`
- [ ] Verify publish at https://www.npmjs.com/package/@sourceful-energy/ui

## Using the Design System in Other Projects

### For AI Assistants: Setup & Integration Guide

When working on a project that uses `@sourceful-energy/ui`, follow these requirements carefully.

#### Critical Setup (New Projects)

```tsx
// 1. Install the package
npm install @sourceful-energy/ui

// 2. In your root layout (app/layout.tsx or pages/_app.tsx)
import "@sourceful-energy/ui/styles.css"  // MUST be first - contains CSS variables
import "./globals.css"                     // Project styles second

// 3. Add ThemeProvider for dark mode
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

#### Critical Setup (Existing Projects / Reskinning)

**Before making any changes, verify:**
```bash
# Check package version (must be 0.1.22+)
npm list @sourceful-energy/ui

# Find where CSS is imported
grep -rn "@sourceful-energy/ui/styles" . --include="*.tsx" --include="*.ts"
```

**Common issues to fix:**
1. **CSS import order** - Design system CSS must load BEFORE project's globals.css
2. **Duplicate Tailwind** - If project has its own Tailwind config, it may conflict
3. **Missing ThemeProvider** - Required for dark mode to work

#### Reskinning Guidelines

**DO:**
- Replace UI primitives (buttons, cards, inputs) with design system components
- Use semantic color tokens: `text-foreground`, `bg-background`, `text-primary`, `bg-muted`
- Preserve existing page structure, layouts, and routing
- Keep all functional logic intact
- Work incrementally: replace one component type, verify it works, then continue
- Test dark mode after changes (add/remove `dark` class on `<html>`)

**DO NOT:**
- Change page layouts, routing, or component hierarchy
- Remove or reorganize page sections
- Add new features beyond what's requested
- Delete code assuming it's unused
- Override design system CSS variables (unless intentionally theming)
- Remove existing Tailwind classes that handle layout (flex, grid, spacing)

#### Component Replacement Mapping

| Replace this | With this |
|-------------|-----------|
| Custom buttons | `<Button variant="...">` |
| Custom cards/panels | `<Card>`, `<CardHeader>`, `<CardContent>` |
| Custom inputs | `<Input>`, `<Textarea>`, `<Select>` |
| Custom modals | `<Dialog>` |
| Custom tooltips | `<Tooltip>` |
| Custom dropdowns | `<DropdownMenu>` or `<Select>` |
| Custom tabs | `<Tabs>` or `<SimpleTabs>` |
| Custom alerts | `<Alert variant="...">` |
| Custom badges/tags | `<Badge variant="...">` |

#### Color Token Usage

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
className="bg-destructive"         // Error background

// Border colors
className="border-border"          // Default borders
className="border-input"           // Form input borders
```

#### Verification Checklist

After each change:
- [ ] Page renders without errors
- [ ] No console warnings about missing CSS variables
- [ ] Dark mode works (toggle `dark` class on `<html>`)
- [ ] Interactive elements (buttons, inputs) are functional
- [ ] Existing functionality still works

#### Troubleshooting

**"CSS variables not defined" / unstyled components:**
- Verify `@sourceful-energy/ui/styles.css` is imported FIRST
- Check package version is 0.1.22 or later
- Ensure no CSS is overriding `:root` variables

**Dark mode not working:**
- Add `suppressHydrationWarning` to `<html>` tag
- Wrap app in `ThemeProvider` with `attribute="class"`
- Check that `.dark` class toggles on `<html>` element

**Conflicting styles:**
- Design system uses Tailwind - if project also uses Tailwind, ensure configs don't conflict
- Check for duplicate `@tailwind base` directives

## Links
- Docs: https://design.sourceful.energy
- GitHub: https://github.com/srcfl/srcful-design-system
