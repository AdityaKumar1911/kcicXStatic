// Supabase Browser Client for Next.js Client Components
// Use this in components with 'use client' directive

import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Singleton pattern for client-side (optional)
let browserClient: ReturnType<typeof createBrowserClient> | null = null;

export function getSupabaseClient() {
  if (!browserClient) {
    browserClient = createClient();
  }
  return browserClient;
}

/*
MIGRATION NOTES:
1. This replaces src/lib/supabase.ts for client components
2. Use in components marked with 'use client'
3. Works with React hooks (useState, useEffect, etc.)
4. Maintains session across client-side navigation
*/
