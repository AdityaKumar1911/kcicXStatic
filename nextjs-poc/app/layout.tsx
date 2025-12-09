// Next.js Root Layout - POC Migration Example
// This replaces: src/App.tsx + src/main.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

// Static metadata for the entire site
export const metadata: Metadata = {
  title: {
    default: 'KCIC Pathway College - Study in India, Graduate Globally',
    template: '%s | KCIC Pathway College',
  },
  description: 'Save up to ₹40 Lakhs on your UK degree. Study 1-2 years at KCIC India, then transfer to top universities in Finland, UK, or Australia.',
  keywords: ['study abroad', 'UK degree', 'affordable education', 'pathway programs', 'KCIC'],
  authors: [{ name: 'KCIC Pathway College' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kcic.edu.in',
    siteName: 'KCIC Pathway College',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-to-main sr-only focus:not-sr-only">
          Skip to main content
        </a>
        
        {children}
        
        {/* Toast notifications - works with Radix UI */}
        <Toaster />
      </body>
    </html>
  );
}

/*
MIGRATION NOTES:
1. ThemeProvider can be added as a Client Component wrapper
2. AppProvider context needs 'use client' directive
3. Toaster from shadcn/ui works without changes
4. Font optimization is automatic with next/font
5. Metadata API replaces react-helmet/SEO component
*/
