"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/**
 * Vercel Analytics and Speed Insights Component
 * 
 * This component integrates:
 * - Vercel Analytics: Tracks page views, unique visitors, and custom events
 * - Speed Insights: Monitors Core Web Vitals (LCP, FID, CLS, TTFB, INP)
 * 
 * Both are automatically enabled when deployed to Vercel.
 * No additional configuration needed - just add to your layout.
 */
export function VercelAnalytics() {
  return (
    <>
      {/* Vercel Analytics - Tracks page views and custom events */}
      <Analytics 
        mode="production"
        debug={process.env.NODE_ENV === "development"}
      />
      
      {/* Speed Insights - Monitors Core Web Vitals */}
      <SpeedInsights 
        debug={process.env.NODE_ENV === "development"}
      />
    </>
  );
}

/**
 * Custom event tracking helper
 * Use this to track custom events in your application
 * 
 * Example usage:
 * import { trackEvent } from "@/components/analytics/VercelAnalytics";
 * trackEvent("button_click", { button_name: "Apply Now" });
 */
export function trackEvent(
  eventName: string, 
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && (window as any).va) {
    (window as any).va("event", { name: eventName, ...properties });
  }
}
