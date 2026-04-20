"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Editorial Label — micro-label kicker above form fields.
 * 11px Satoshi 500, 0.18em tracking, uppercase, muted foreground.
 * Matches the directory/topRight kicker pattern from the marketing site.
 */

const labelVariants = cva(
  cn(
    "font-sans font-medium uppercase",
    "text-[11px] tracking-[0.18em] leading-none",
    "text-muted-foreground",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
  )
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
