import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Editorial Input — hairline bottom rule, no rounded corners, no shadow.
 *
 * Leans into the editorial grammar: the input is a line on paper, not a
 * boxed field. Focus state thickens the rule and shifts it to signal
 * orange. Placeholders use the muted foreground at lowered weight.
 */

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-none bg-transparent px-0 py-2",
          "font-sans text-sm text-foreground",
          "border-0 border-b border-foreground/25",
          "placeholder:text-foreground/40 placeholder:font-normal",
          "transition-colors outline-none",
          "focus-visible:border-b-[#E85D1F] focus-visible:border-b-2 focus-visible:pb-[7px]",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "disabled:cursor-not-allowed disabled:opacity-40",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
