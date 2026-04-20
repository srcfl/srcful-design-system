import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Editorial Textarea — hairline frame, sharp corners, no shadow.
 *
 * Unlike Input (which is a single bottom line), Textarea gets a full
 * hairline frame because multiline content needs the container. Focus
 * replaces the frame colour with signal orange.
 */

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[96px] w-full rounded-none bg-transparent px-3 py-2.5",
        "font-sans text-sm text-foreground leading-relaxed",
        "border border-foreground/25",
        "placeholder:text-foreground/40 placeholder:font-normal",
        "transition-colors outline-none",
        "focus-visible:border-[#E85D1F]",
        "disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
