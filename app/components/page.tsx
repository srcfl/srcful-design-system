import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { componentsList } from "@/lib/components-list";

const componentDescriptions: Record<string, string> = {
  Button: "Displays a button or a component that looks like a button.",
  Input: "Displays a form input field.",
  Textarea: "Displays a multi-line text input field.",
  Label: "Renders an accessible label associated with controls.",
  Select: "Displays a list of options for the user to pick from.",
  Checkbox: "A control that allows the user to toggle between checked and not checked.",
  "Radio Group": "A set of checkable buttons where only one can be checked at a time.",
  Switch: "A control that allows the user to toggle between on and off.",
  Slider: "An input where the user selects a value from within a given range.",
  Toggle: "A two-state button that can be on or off.",
  "Toggle Group": "A set of toggle buttons that can work together.",
  Calendar: "A date field component that allows users to select dates.",
  "Date Picker": "A date picker built with Calendar and Popover.",
  Avatar: "An image element with a fallback for user profiles.",
  Badge: "Displays a badge or a component that looks like a badge.",
  Card: "Displays a card with header, content, and footer.",
  Chart: "Beautiful charts built with Recharts. Area, bar, line, pie, radar, and radial.",
  Table: "A responsive table component.",
  Skeleton: "Used to show a placeholder while content is loading.",
  Separator: "Visually separates content.",
  "Hover Card": "For sighted users to preview content behind a link.",
  Alert: "Displays a callout for user attention.",
  Dialog: "A modal dialog that interrupts the user.",
  Popover: "Displays rich content in a portal triggered by a button.",
  Toast: "A succinct message that is displayed temporarily.",
  Tooltip: "A popup that displays information related to an element.",
  Progress: "Displays an indicator showing the completion progress of a task.",
  Command: "Fast, composable command menu for search and actions.",
  "Dropdown Menu": "Displays a menu to the user.",
  Tabs: "A set of layered sections of content.",
  Accordion: "A vertically stacked set of interactive headings.",
  Collapsible: "An interactive component which expands and collapses.",
  Sheet: "A panel that slides out from the side of the screen.",
  "Scroll Area": "Augments native scroll functionality for custom styling.",
  "Sites Map": "Interactive Mapbox map for visualizing energy site locations.",
  "Energy Flow": "React Flow diagram showing real-time energy distribution.",
  "AI Chat": "Conversational AI interface for energy system management.",
  "Pixel Grid": "Animated pixel grids (3x3 to 6x6) for brand visuals and loading states.",
  "Zap Animations": "LED animation library for M5Stack Atom Matrix 5x5 grid - 35 patterns for Zap gateway.",
  "EMS Schedule": "Energy management system schedule visualization.",
  "Electricity Price": "Real-time electricity price display component.",
  "Weather Card": "Weather information card for energy context.",
};

export default function ComponentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Components
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Browse and use our collection of reusable components.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {componentsList.map((component) => (
          <Link key={component.name} href={component.href} className="group block">
            <Card className="h-full transition-all duration-200 border-border group-hover:border-primary group-hover:bg-primary/5">
              <CardHeader>
                <div className="text-xs text-muted-foreground mb-1">
                  {component.category}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {component.name}
                </CardTitle>
                <CardDescription>
                  {componentDescriptions[component.name]}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
