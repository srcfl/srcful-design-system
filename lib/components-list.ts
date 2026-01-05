export const componentsList = [
  // Forms
  { name: "Button", href: "/components/button", category: "Forms" },
  { name: "Input", href: "/components/input", category: "Forms" },
  { name: "Textarea", href: "/components/textarea", category: "Forms" },
  { name: "Label", href: "/components/label", category: "Forms" },
  { name: "Select", href: "/components/select", category: "Forms" },
  { name: "Checkbox", href: "/components/checkbox", category: "Forms" },
  { name: "Radio Group", href: "/components/radio-group", category: "Forms" },
  { name: "Switch", href: "/components/switch", category: "Forms" },
  { name: "Slider", href: "/components/slider", category: "Forms" },
  // Data Display
  { name: "Badge", href: "/components/badge", category: "Data Display" },
  { name: "Card", href: "/components/card", category: "Data Display" },
  { name: "Chart", href: "/components/chart", category: "Data Display" },
  { name: "Table", href: "/components/table", category: "Data Display" },
  { name: "Skeleton", href: "/components/skeleton", category: "Data Display" },
  { name: "Separator", href: "/components/separator", category: "Data Display" },
  // Feedback
  { name: "Alert", href: "/components/alert", category: "Feedback" },
  { name: "Dialog", href: "/components/dialog", category: "Feedback" },
  { name: "Toast", href: "/components/toast", category: "Feedback" },
  { name: "Tooltip", href: "/components/tooltip", category: "Feedback" },
  { name: "Progress", href: "/components/progress", category: "Feedback" },
  // Navigation & Layout
  { name: "Dropdown Menu", href: "/components/dropdown-menu", category: "Navigation" },
  { name: "Tabs", href: "/components/tabs", category: "Navigation" },
  { name: "Accordion", href: "/components/accordion", category: "Navigation" },
  { name: "Sheet", href: "/components/sheet", category: "Navigation" },
  { name: "Scroll Area", href: "/components/scroll-area", category: "Navigation" },
];

export function getComponentNav(currentHref: string) {
  const index = componentsList.findIndex((c) => c.href === currentHref);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? componentsList[index - 1] : null,
    next: index < componentsList.length - 1 ? componentsList[index + 1] : null,
  };
}
