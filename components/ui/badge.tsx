import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Editorial Badge — micro-label pill, sharp corners, uppercase type.
 *
 * Styled to match the marketing site's "directory" and "topRight" kickers:
 * 11px Satoshi 500, 0.18em tracking, tight 0 baseline, no rounded corners.
 * Solid variants use the editorial palette directly (signal, ink, green);
 * soft variants keep a hairline border in the same hue.
 */

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5",
    "rounded-none",
    "font-sans font-medium uppercase",
    "text-[11px] tracking-[0.18em] leading-none",
    "px-2.5 py-1.5",
    "transition-colors",
    "[&_svg]:size-3 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        /** Signal orange on ink — recurring editorial accent. */
        default: "bg-[#E85D1F] text-[#0A0A0A]",
        /** Near-black ink, cream text — strong status pill. */
        ink: "bg-[#0A0A0A] text-[#F5F2E1]",
        /** Editorial green — online / success. */
        success: "bg-[#15803D] text-white",
        /** Warm cream, ink text — paired with dark grounds. */
        cream: "bg-[#F5F2E1] text-[#0A0A0A]",
        /** Ghost / meta — hairline outline, current colour ink. */
        outline: "border border-current/40 text-current bg-transparent",
        /** Tinted: signal orange wash. */
        signal: "bg-[#E85D1F]/10 text-[#E85D1F] border border-[#E85D1F]/30",
        secondary: "bg-foreground/5 text-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
