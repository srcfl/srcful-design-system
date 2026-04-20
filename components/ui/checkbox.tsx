"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Editorial Checkbox — square hairline box, filled with ink when checked,
 * signal-orange tick. Matches the sharp-corner editorial grammar.
 */

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-none border border-foreground/40 bg-transparent transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D1F] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed disabled:opacity-40",
      "data-[state=checked]:bg-[#0A0A0A] data-[state=checked]:border-[#0A0A0A] data-[state=checked]:text-[#E85D1F]",
      "dark:data-[state=checked]:bg-[#F5F2E1] dark:data-[state=checked]:border-[#F5F2E1] dark:data-[state=checked]:text-[#E85D1F]",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-3 w-3" strokeWidth={3} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
