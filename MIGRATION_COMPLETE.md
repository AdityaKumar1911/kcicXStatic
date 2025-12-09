# Migration to Next.js Complete

## What Changed

The application has been migrated from React + Vite to **Next.js 14** with App Router.

## How to Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The app will run on **http://localhost:3000**

## Project Structure

All Next.js code is in the `nextjs-app/` folder:

```
nextjs-app/
├── src/
│   ├── app/           # Next.js App Router pages
│   │   ├── page.tsx   # Homepage
│   │   ├── programs/  # Programs pages
│   │   ├── universities/
│   │   ├── campuses/
│   │   ├── contact/
│   │   ├── students/
│   │   ├── parents/
│   │   ├── tutors/
│   │   ├── admin/     # Admin panel
│   │   └── ...
│   ├── components/    # React components
│   ├── data/          # Static data files
│   └── lib/           # Utilities & Supabase
├── package.json
└── next.config.js
```

## Key Features

- **Server-Side Rendering** - Better SEO and performance
- **App Router** - Modern Next.js 14 routing
- **Supabase Integration** - Database and auth ready
- **Admin Panel** - Content management at /admin
- **All Pages Migrated** - Programs, Universities, Campuses, etc.

## Environment Variables

Copy `.env.example` to `.env.local` in the `nextjs-app` folder:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```
