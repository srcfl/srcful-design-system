"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

// All available partner logos
const allPartners = [
  { name: "SolarEdge", slug: "solaredge" },
  { name: "Huawei", slug: "huawei" },
  { name: "Fronius", slug: "fronius" },
  { name: "SMA", slug: "sma" },
  { name: "Sungrow", slug: "sungrow" },
  { name: "SolaX", slug: "solax" },
  { name: "Solis", slug: "solis" },
  { name: "Deye", slug: "deye" },
  { name: "Ferroamp", slug: "ferroamp" },
  { name: "Easee", slug: "easee" },
  { name: "Zaptec", slug: "zaptec" },
  { name: "ChargeAmps", slug: "chargeamps" },
  { name: "Pixii", slug: "pixii" },
  { name: "Ambibox", slug: "ambibox" },
  { name: "Kalmar Energi", slug: "kalmar-energi" },
  { name: "NRGi", slug: "nrgi" },
  { name: "Elkedjan", slug: "elkedjan" },
];

// Partner categories for filtering
export const partnerCategories = {
  inverters: ["solaredge", "huawei", "fronius", "sma", "sungrow", "solax", "solis", "deye", "ferroamp"],
  chargers: ["easee", "zaptec", "chargeamps"],
  batteries: ["pixii", "ambibox"],
  utilities: ["kalmar-energi", "nrgi"],
  installers: ["elkedjan"],
};

interface PartnerLogoCarouselProps {
  /** Filter to specific partner slugs. If not provided, shows all partners */
  partners?: string[];
  /** Speed of animation in seconds for one complete cycle */
  speed?: number;
  /** Direction of scroll */
  direction?: "left" | "right";
  /** Show partner names below logos */
  showNames?: boolean;
  /** Custom className for the container */
  className?: string;
}

export function PartnerLogoCarousel({
  partners,
  speed = 30,
  direction = "left",
  showNames = false,
  className = "",
}: PartnerLogoCarouselProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter partners if specific ones are requested
  const displayPartners = partners
    ? allPartners.filter((p) => partners.includes(p.slug))
    : allPartners;

  // Duplicate the list for seamless infinite scroll
  const duplicatedPartners = [...displayPartners, ...displayPartners];

  // Determine the theme folder
  const themeFolder = mounted && resolvedTheme === "dark" ? "dark-mode" : "light-mode";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div
        className={`flex gap-8 md:gap-12 ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.slug}-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center"
          >
            <div className="h-10 md:h-12 w-24 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              {mounted ? (
                <img
                  src={`/images/partner-logos/${themeFolder}/${partner.slug}.svg`}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <div className="h-8 w-24 bg-muted rounded animate-pulse" />
              )}
            </div>
            {showNames && (
              <span className="text-xs text-muted-foreground mt-2">{partner.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Pre-configured variants for common use cases
export function AllPartnersCarousel(props: Omit<PartnerLogoCarouselProps, "partners">) {
  return <PartnerLogoCarousel {...props} />;
}

export function InverterPartnersCarousel(props: Omit<PartnerLogoCarouselProps, "partners">) {
  return <PartnerLogoCarousel partners={partnerCategories.inverters} {...props} />;
}

export function ChargerPartnersCarousel(props: Omit<PartnerLogoCarouselProps, "partners">) {
  return <PartnerLogoCarousel partners={partnerCategories.chargers} {...props} />;
}

export function UtilityPartnersCarousel(props: Omit<PartnerLogoCarouselProps, "partners">) {
  return <PartnerLogoCarousel partners={partnerCategories.utilities} {...props} />;
}
