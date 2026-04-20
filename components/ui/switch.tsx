"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

/**
 * Editorial Switch — square-cornered track, square thumb, signal-orange
 * on-state. No pills, no shadows — reads like a toggle drawn with a
 * hairline pen rather than an iOS control.
 */

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-10 shrink-0 cursor-pointer items-center",
      "rounded-none border border-foreground/30 transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E85D1F] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed disabled:opacity-40",
      "data-[state=checked]:bg-[#E85D1F] data-[state=checked]:border-[#E85D1F]",
      "data-[state=unchecked]:bg-transparent",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-3.5 w-3.5 rounded-none transition-transform",
        "data-[state=checked]:bg-[#0A0A0A] data-[state=checked]:translate-x-[22px]",
        "data-[state=unchecked]:bg-foreground/60 data-[state=unchecked]:translate-x-0.5"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
