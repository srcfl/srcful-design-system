import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Editorial Alert — top hairline + left-hugging title/body, no rounded
 * corners, accent colour carried by a 2px left rule instead of a full bg
 * flood. The signal variant uses the recurring #E85D1F orange.
 *
 * Keeps the icon slot from the shadcn pattern, but aligns type to the
 * editorial grammar: Satoshi 500 kicker, 14px description.
 */

const alertVariants = cva(
  [
    "relative w-full rounded-none px-5 py-4",
    "bg-background text-foreground",
    "border-t border-l-[2px] border-t-foreground/15",
    "[&>svg]:absolute [&>svg]:left-5 [&>svg]:top-4 [&>svg]:size-4",
    "[&>svg~*]:pl-8 [&>svg+div]:translate-y-[-1px]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border-l-foreground/40 [&>svg]:text-foreground",
        /** Signal orange — the editorial accent. */
        signal:
          "border-l-[#E85D1F] bg-[#E85D1F]/5 [&>svg]:text-[#E85D1F]",
        /** Editorial green — system online / success. */
        success:
          "border-l-[#15803D] bg-[#15803D]/5 [&>svg]:text-[#15803D]",
        info: "border-l-sky-600 bg-sky-600/5 [&>svg]:text-sky-600 dark:border-l-sky-400 dark:[&>svg]:text-sky-400",
        destructive:
          "border-l-destructive bg-destructive/5 text-destructive-foreground [&>svg]:text-destructive",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-1 font-sans font-medium leading-tight tracking-[-0.01em]",
      "text-base text-foreground",
      className
    )}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-foreground/70 leading-relaxed [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
