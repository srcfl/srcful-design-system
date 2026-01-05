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
  { name: "Toggle", href: "/components/toggle", category: "Forms" },
  { name: "Toggle Group", href: "/components/toggle-group", category: "Forms" },
  { name: "Calendar", href: "/components/calendar", category: "Forms" },
  { name: "Date Picker", href: "/components/date-picker", category: "Forms" },
  // Data Display
  { name: "Avatar", href: "/components/avatar", category: "Data Display" },
  { name: "Badge", href: "/components/badge", category: "Data Display" },
  { name: "Card", href: "/components/card", category: "Data Display" },
  { name: "Chart", href: "/components/charts", category: "Data Display" },
  { name: "Table", href: "/components/table", category: "Data Display" },
  { name: "Skeleton", href: "/components/skeleton", category: "Data Display" },
  { name: "Separator", href: "/components/separator", category: "Data Display" },
  { name: "Hover Card", href: "/components/hover-card", category: "Data Display" },
  // Feedback
  { name: "Alert", href: "/components/alert", category: "Feedback" },
  { name: "Dialog", href: "/components/dialog", category: "Feedback" },
  { name: "Popover", href: "/components/popover", category: "Feedback" },
  { name: "Toast", href: "/components/toast", category: "Feedback" },
  { name: "Tooltip", href: "/components/tooltip", category: "Feedback" },
  { name: "Progress", href: "/components/progress", category: "Feedback" },
  // Navigation & Layout
  { name: "Command", href: "/components/command", category: "Navigation" },
  { name: "Dropdown Menu", href: "/components/dropdown-menu", category: "Navigation" },
  { name: "Tabs", href: "/components/tabs", category: "Navigation" },
  { name: "Accordion", href: "/components/accordion", category: "Navigation" },
  { name: "Collapsible", href: "/components/collapsible", category: "Navigation" },
  { name: "Sheet", href: "/components/sheet", category: "Navigation" },
  { name: "Scroll Area", href: "/components/scroll-area", category: "Navigation" },
  // Sourceful
  { name: "Sites Map", href: "/components/sites-map", category: "Sourceful" },
  { name: "Energy Flow", href: "/components/energy-flow", category: "Sourceful" },
  { name: "AI Chat", href: "/components/ai-chat", category: "Sourceful" },
  { name: "EMS Schedule", href: "/components/ems-schedule", category: "Sourceful" },
  { name: "Electricity Price", href: "/components/electricity-price", category: "Sourceful" },
  { name: "Weather Card", href: "/components/weather-card", category: "Sourceful" },
];

export function getComponentNav(currentHref: string) {
  const index = componentsList.findIndex((c) => c.href === currentHref);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? componentsList[index - 1] : null,
    next: index < componentsList.length - 1 ? componentsList[index + 1] : null,
  };
}
