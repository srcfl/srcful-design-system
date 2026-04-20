import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Editorial Button — sharp corners, Satoshi 500, signal-orange default.
 *
 * Mirrors the sourceful-marketing-site @ hosts CTA pattern:
 *   <Link ... style={{ background: accent, color: "#0A0A0A",
 *                      fontFamily: "var(--font-sans)", fontSize: 14,
 *                      fontWeight: 500, letterSpacing: "-0.005em" }}>
 * Plus a `group hover:gap-4` animation that draws the icon forward on hover.
 */

const buttonVariants = cva(
  [
    "group inline-flex items-center justify-center gap-3 whitespace-nowrap",
    "rounded-none", // square corners — editorial
    "font-sans font-medium tracking-[-0.005em]",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E85D1F] focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 [&_svg]:transition-transform",
    "hover:gap-4", // icon draws forward on hover
  ].join(" "),
  {
    variants: {
      variant: {
        /** Signal orange on near-black ink — primary CTA. */
        default:
          "bg-[#E85D1F] text-[#0A0A0A] hover:bg-[#d85516] active:bg-[#c44a13]",
        /** Editorial green — reserved for success/confirm primary. */
        success:
          "bg-[#15803D] text-white hover:bg-[#166534] active:bg-[#14532d]",
        /** Near-black ink, cream text — inverse primary. */
        ink: "bg-[#0A0A0A] text-[#F5F2E1] hover:bg-[#1a1a1a] active:bg-black",
        /** Cream on ink — for dark grounds. */
        cream:
          "bg-[#F5F2E1] text-[#0A0A0A] hover:bg-[#efebd6] active:bg-[#e8e3c7]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        /** Hairline outline — secondary in-flow action. */
        outline:
          "border border-foreground/30 bg-transparent text-foreground hover:bg-foreground hover:text-background",
        secondary:
          "bg-foreground/5 text-foreground hover:bg-foreground/10",
        ghost:
          "bg-transparent text-foreground hover:bg-foreground/5",
        /** Editorial link — uppercase micro-label with underline slide-in. */
        link: [
          "bg-transparent p-0 h-auto text-foreground",
          "text-[11px] font-medium tracking-[0.18em] uppercase",
          "relative after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-px after:origin-left",
          "after:bg-current after:scale-x-100 hover:after:scale-x-0 after:transition-transform after:duration-300",
        ].join(" "),
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        default: "h-11 px-6 text-sm",
        lg: "h-14 px-7 text-[15px]",
        icon: "h-11 w-11 gap-0 hover:gap-0 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
