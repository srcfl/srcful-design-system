"use client";

import { useEffect } from "react";
import Intercom from "@intercom/messenger-js-sdk";

const INTERCOM_APP_ID = "uqngf2sv";

export function IntercomProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Intercom
    Intercom({
      app_id: INTERCOM_APP_ID,
    });
  }, []);

  return <>{children}</>;
}

// Export for direct initialization if needed
export function initIntercom() {
  Intercom({
    app_id: INTERCOM_APP_ID,
  });
}
