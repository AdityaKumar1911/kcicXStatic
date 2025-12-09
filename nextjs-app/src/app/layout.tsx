import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { FacebookPixel } from "@/components/analytics/FacebookPixel";
import { VercelAnalytics } from "@/components/analytics/VercelAnalytics";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cornerstone.edu.in"),
  title: {
    default: "KCIC - Knowledge Creators International College",
    template: "%s | KCIC",
  },
  description: "Transform your future with world-class UK degrees. KCIC offers innovative programs in Engineering, Technology, Business, and Sciences with guaranteed industry placements.",
  keywords: ["UK degrees", "engineering", "technology", "international college", "study abroad", "KCIC"],
  authors: [{ name: "KCIC" }],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://cornerstone.edu.in",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "KCIC",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kcic_edu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
        
        {/* Floating WhatsApp Button */}
        <FloatingWhatsAppButton />
        
        {/* Vercel Analytics & Speed Insights - Auto-enabled on Vercel */}
        <VercelAnalytics />
        
        {/* Google Analytics - Only loads with valid ID */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        
        {/* Facebook Pixel - Only loads with valid ID */}
        {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
          <Suspense fallback={null}>
            <FacebookPixel pixelId={process.env.NEXT_PUBLIC_FB_PIXEL_ID} />
          </Suspense>
        )}
      </body>
    </html>
  );
}
