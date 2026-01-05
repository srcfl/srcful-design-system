"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Image from "next/image";

const sizes = {
  xs: { height: 20, width: 156 },
  sm: { height: 28, width: 218 },
  md: { height: 36, width: 278 },
  lg: { height: 44, width: 340 },
  xl: { height: 54, width: 416 },
} as const;

interface LogoProps {
  variant?: "full" | "symbol";
  size?: keyof typeof sizes;
  forcedTheme?: "light" | "dark";
  className?: string;
}

export function Logo({
  variant = "full",
  size = "md",
  forcedTheme,
  className,
}: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Use forced theme if provided, otherwise use resolved theme
  const isDark = forcedTheme
    ? forcedTheme === "dark"
    : mounted && resolvedTheme === "dark";

  const sizeConfig = sizes[size];

  // Symbol-only variant extracts just the circle portion
  if (variant === "symbol") {
    const symbolSize = sizeConfig.height;

    if (isDark) {
      return (
        <svg
          width={symbolSize}
          height={symbolSize}
          viewBox="0 0 53 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("flex-shrink-0", className)}
        >
          <path
            d="M26.4502 0C41.0583 0 52.9012 11.8421 52.9014 26.4502C52.9014 41.0584 41.0584 52.9014 26.4502 52.9014C11.8421 52.9012 0 41.0583 0 26.4502C0.000191728 11.8422 11.8422 0.000191739 26.4502 0ZM30.457 11.9326C30.7487 10.5769 29.0236 9.74237 28.1416 10.8125L15.7939 25.7988C15.0101 26.7502 15.8378 28.1626 17.0508 27.9434L22.79 26.9062C23.7625 26.7308 24.5771 27.6445 24.292 28.5908L20.6436 40.7031C20.2354 42.0581 21.952 43.0225 22.8965 41.9688L36.7568 26.5049C37.5517 25.618 36.8625 24.2151 35.6748 24.3018L29.4297 24.7588C28.5489 24.8232 27.8531 24.0226 28.0391 23.1592L30.457 11.9326Z"
            fill="#00FF84"
          />
        </svg>
      );
    }

    return (
      <svg
        width={symbolSize}
        height={symbolSize}
        viewBox="0 0 53 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("flex-shrink-0", className)}
      >
        <circle cx="26.4506" cy="26.4506" r="26.4506" fill="#2B2B2B" />
        <path
          d="M15.7938 25.7992L28.1412 10.8125C29.0232 9.74191 30.7487 10.5768 30.4567 11.9328L28.0388 23.1595C27.8529 24.0229 28.5485 24.8227 29.4294 24.7583L35.6745 24.3013C36.8624 24.2144 37.5517 25.618 36.7568 26.5049L22.8964 41.9686C21.9519 43.0224 20.2353 42.0583 20.6434 40.7034L24.2924 28.5905C24.5775 27.6441 23.7623 26.7304 22.7896 26.9062L17.0507 27.9434C15.8377 28.1626 15.01 26.7505 15.7938 25.7992Z"
          fill="#00FF84"
        />
      </svg>
    );
  }

  // Full logo with wordmark
  const logoSrc = isDark
    ? "/assets/sourceful-logo-dark-mode.svg"
    : "/assets/sourceful-logo-light-mode.svg";

  return (
    <Image
      src={logoSrc}
      alt="Sourceful Energy"
      width={sizeConfig.width}
      height={sizeConfig.height}
      className={cn("flex-shrink-0", className)}
      style={{ height: sizeConfig.height, width: "auto" }}
      priority
    />
  );
}

export default Logo;
