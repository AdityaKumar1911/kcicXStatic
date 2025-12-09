# Next.js Migration Proof of Concept

## Overview
This POC demonstrates migrating 3 critical pages from React/Vite to Next.js 14 App Router:
1. **Homepage (Index)** - Tests SSR, component composition, SEO metadata
2. **Program Detail** - Tests dynamic routing, data fetching, Supabase SSR
3. **Contact Page** - Tests client-side forms, validation, Radix UI components

## POC Structure
```
nextjs-poc/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage (Server Component)
│   ├── contact/
│   │   └── page.tsx        # Contact page (Client Component)
│   └── programs/
│       └── [slug]/
│           └── page.tsx    # Dynamic program detail
├── components/
│   ├── Navigation.tsx      # Migrated navigation
│   ├── HeroSection.tsx     # Server component
│   └── ContactForm.tsx     # Client component
├── lib/
│   └── supabase/
│       ├── client.ts       # Browser client
│       └── server.ts       # Server client (SSR)
└── README.md
```

## Key Migration Patterns Demonstrated

### 1. Environment Variables
- `VITE_SUPABASE_URL` → `NEXT_PUBLIC_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Server-only: `SUPABASE_SERVICE_ROLE_KEY`

### 2. Routing Changes
- `react-router-dom` → Next.js App Router
- `useParams()` → `params` prop in page components
- `useNavigate()` → `useRouter()` from `next/navigation`

### 3. SEO/Metadata
- Custom `<SEO>` component → Next.js `metadata` export
- `generateMetadata()` for dynamic pages

### 4. Data Fetching
- Client-side `useEffect` → Server Components with `async/await`
- React Query optional for client-side caching

## Validation Checklist
- [ ] Supabase SSR data fetching works
- [ ] Radix UI components render correctly
- [ ] Forms with validation function
- [ ] Dynamic routes resolve properly
- [ ] SEO metadata generates correctly
- [ ] Build completes without errors
