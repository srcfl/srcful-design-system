import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const components = [
  // Forms
  {
    name: "Button",
    description: "Displays a button or a component that looks like a button.",
    href: "/components/button",
    category: "Forms",
  },
  {
    name: "Input",
    description: "Displays a form input field.",
    href: "/components/input",
    category: "Forms",
  },
  {
    name: "Textarea",
    description: "Displays a multi-line text input field.",
    href: "/components/textarea",
    category: "Forms",
  },
  {
    name: "Label",
    description: "Renders an accessible label associated with controls.",
    href: "/components/label",
    category: "Forms",
  },
  {
    name: "Select",
    description: "Displays a list of options for the user to pick from.",
    href: "/components/select",
    category: "Forms",
  },
  {
    name: "Checkbox",
    description: "A control that allows the user to toggle between checked and not checked.",
    href: "/components/checkbox",
    category: "Forms",
  },
  {
    name: "Radio Group",
    description: "A set of checkable buttons where only one can be checked at a time.",
    href: "/components/radio-group",
    category: "Forms",
  },
  {
    name: "Switch",
    description: "A control that allows the user to toggle between on and off.",
    href: "/components/switch",
    category: "Forms",
  },
  {
    name: "Slider",
    description: "An input where the user selects a value from within a given range.",
    href: "/components/slider",
    category: "Forms",
  },
  // Data Display
  {
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    href: "/components/badge",
    category: "Data Display",
  },
  {
    name: "Card",
    description: "Displays a card with header, content, and footer.",
    href: "/components/card",
    category: "Data Display",
  },
  {
    name: "Table",
    description: "A responsive table component.",
    href: "/components/table",
    category: "Data Display",
  },
  {
    name: "Skeleton",
    description: "Used to show a placeholder while content is loading.",
    href: "/components/skeleton",
    category: "Data Display",
  },
  {
    name: "Separator",
    description: "Visually separates content.",
    href: "/components/separator",
    category: "Data Display",
  },
  // Feedback
  {
    name: "Alert",
    description: "Displays a callout for user attention.",
    href: "/components/alert",
    category: "Feedback",
  },
  {
    name: "Dialog",
    description: "A modal dialog that interrupts the user.",
    href: "/components/dialog",
    category: "Feedback",
  },
  {
    name: "Toast",
    description: "A succinct message that is displayed temporarily.",
    href: "/components/toast",
    category: "Feedback",
  },
  {
    name: "Tooltip",
    description: "A popup that displays information related to an element.",
    href: "/components/tooltip",
    category: "Feedback",
  },
  {
    name: "Progress",
    description: "Displays an indicator showing the completion progress of a task.",
    href: "/components/progress",
    category: "Feedback",
  },
  // Navigation & Layout
  {
    name: "Dropdown Menu",
    description: "Displays a menu to the user.",
    href: "/components/dropdown-menu",
    category: "Navigation",
  },
  {
    name: "Tabs",
    description: "A set of layered sections of content.",
    href: "/components/tabs",
    category: "Navigation",
  },
  {
    name: "Accordion",
    description: "A vertically stacked set of interactive headings.",
    href: "/components/accordion",
    category: "Navigation",
  },
  {
    name: "Sheet",
    description: "A panel that slides out from the side of the screen.",
    href: "/components/sheet",
    category: "Navigation",
  },
  {
    name: "Scroll Area",
    description: "Augments native scroll functionality for custom styling.",
    href: "/components/scroll-area",
    category: "Navigation",
  },
];

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
        {components.map((component) => (
          <Link key={component.name} href={component.href}>
            <Card className="h-full hover:border-primary transition-colors">
              <CardHeader>
                <div className="text-xs text-muted-foreground mb-1">
                  {component.category}
                </div>
                <CardTitle className="text-lg">{component.name}</CardTitle>
                <CardDescription>{component.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
