// UI Components
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

export { Badge, badgeVariants } from "../components/ui/badge";

export { Button, buttonVariants } from "../components/ui/button";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export { Checkbox } from "../components/ui/checkbox";

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export { Input } from "../components/ui/input";

export { Label } from "../components/ui/label";

export { Progress } from "../components/ui/progress";

export { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

export { ScrollArea, ScrollBar } from "../components/ui/scroll-area";

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export { Separator } from "../components/ui/separator";

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

export { Skeleton } from "../components/ui/skeleton";

export { Slider } from "../components/ui/slider";

export { Switch } from "../components/ui/switch";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

export { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export { Textarea } from "../components/ui/textarea";

// Navigation components
export {
  SideMenu,
  type SideMenuItem,
  type SideMenuSection,
  type SideMenuProps,
} from "../components/ui/side-menu";

export {
  TopMenu,
  TopMenuUser,
  TopMenuUserItem,
  TopMenuUserSection,
  type BreadcrumbItem,
  type TopMenuProps,
  type TopMenuUserProps,
  type TopMenuUserItemProps,
} from "../components/ui/top-menu";

export {
  SimpleTabs,
  SimpleTabsPanel,
  SimpleTabsRoot,
  SimpleTabsList,
  SimpleTabsTrigger,
  SimpleTabsContent,
  type SimpleTab,
  type SimpleTabsProps,
  type SimpleTabsPanelProps,
  type SimpleTabsRootProps,
  type SimpleTabsListProps,
  type SimpleTabsTriggerProps,
} from "../components/ui/simple-tabs";

export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

// Utility functions
export { cn } from "./utils";

// Providers
export { LenisProvider } from "../components/lenis-provider";

// Design System Provider & Accessibility Hooks
export {
  DesignSystemProvider,
  useDesignSystemTheme,
  useFontMode,
  useColorMode,
  useSpacingMode,
  useFocusMode,
  useAccessibility,
  useDesignSystem,
  type Theme,
  type FontMode,
  type ColorMode,
  type SpacingMode,
  type FocusMode,
  type DesignSystemProviderProps,
} from "../components/design-system-provider";

// Pixel Grid (Sourceful Brand Animation)
export {
  PixelGrid,
  PixelGridShowcase,
  PixelGridColorComparison,
  PixelGridSizeComparison,
  patterns,
  patternNames,
  patternCategories,
} from "../components/ui/pixel-grid";
export type {
  PixelGridProps,
  PixelGridColor,
  PixelGridSpeed,
  PixelGridSize,
  PixelGridShowcaseProps,
  PixelGridColorComparisonProps,
  PixelGridSizeComparisonProps,
  PatternType,
  PatternDefinition,
  PatternFrame,
} from "../components/ui/pixel-grid";
