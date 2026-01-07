"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "sourceful-cookie-consent";
const CONSENT_VERSION = "1"; // Increment if you need to re-ask consent

interface ConsentData {
  accepted: boolean;
  timestamp: string;
  version: string;
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check for existing consent
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent) {
      try {
        const consent: ConsentData = JSON.parse(storedConsent);
        // Show banner again if version changed
        if (consent.version !== CONSENT_VERSION) {
          setShowBanner(true);
        }
      } catch {
        // Invalid stored data, show banner
        setShowBanner(true);
      }
    } else {
      // No consent stored, show banner
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    const consentData: ConsentData = {
      accepted: true,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    setShowBanner(false);
  };

  const handleDecline = () => {
    const consentData: ConsentData = {
      accepted: false,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    setShowBanner(false);
  };

  // Don't render during SSR or if banner shouldn't show
  if (!mounted || !showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg animate-slide-in-from-bottom">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <p className="text-sm text-foreground font-medium mb-1">
              We use cookies to improve your experience
            </p>
            <p className="text-xs text-muted-foreground">
              We use cookies and similar technologies to provide essential site functionality,
              analyze traffic, and personalize your experience. By clicking &quot;Accept&quot;,
              you consent to our use of cookies.{" "}
              <a
                href="/privacy"
                className="underline hover:text-foreground transition-colors"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="text-xs"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="text-xs"
            >
              Accept
            </Button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-2 right-2 sm:hidden p-1 text-muted-foreground hover:text-foreground"
            aria-label="Close cookie banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Utility function to check if user has accepted cookies
export function hasAcceptedCookies(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent) {
      const consent: ConsentData = JSON.parse(storedConsent);
      return consent.accepted && consent.version === CONSENT_VERSION;
    }
  } catch {
    // Invalid data
  }
  return false;
}
