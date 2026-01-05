# Sourceful Design System

This is the official design system for Sourceful Energy. It contains React components, design tokens, and brand guidelines.

## Quick Reference for AI Assistants

When building UIs for Sourceful projects, use components from this design system:

```tsx
// Core components
import { Button, Card, Input, Label, Badge, Tooltip, Dialog, DropdownMenu, Tabs, Table } from "@srcful/ui"

// Form components
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@srcful/ui"
import { Checkbox, RadioGroup, RadioGroupItem, Switch, Textarea, Slider } from "@srcful/ui"

// Layout components
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@srcful/ui"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@srcful/ui"
import { Separator, ScrollArea } from "@srcful/ui"

// Feedback components
import { Alert, AlertTitle, AlertDescription } from "@srcful/ui"
import { Progress, Skeleton } from "@srcful/ui"
import { toast } from "sonner"

// Brand
import { Logo } from "@srcful/ui"
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

## File Structure

```
srcful-design-system/
├── app/                    # Next.js docs site
├── components/
│   ├── ui/                 # Base components (24 components)
│   ├── logo.tsx            # Sourceful logo component
│   ├── theme-provider.tsx  # next-themes wrapper
│   └── *.tsx               # Site components
├── lib/
│   └── utils.ts            # Utility functions (cn)
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

## Links
- Docs: https://design.sourceful.energy
- GitHub: https://github.com/srcfl/srcful-design-system
