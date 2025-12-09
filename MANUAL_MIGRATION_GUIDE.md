# Manual Database Migration Guide

## Quick Start: Run Migrations in Supabase Dashboard

Since automated migrations are experiencing connection timeouts, follow these steps to manually set up your database.

## Step-by-Step Instructions

### 1. Access SQL Editor
1. Go to: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf/sql/new
2. Make sure you're logged in to your Supabase account

### 2. Run Each Migration (In Order)

Open each file below from your project and copy its contents into the SQL Editor, then click "Run".

#### Migration 1: Create signature_programs Table
📁 File: `supabase/migrations/001_create_signature_programs.sql`

#### Migration 2: Create partner_universities Table
📁 File: `supabase/migrations/002_create_partner_universities.sql`

#### Migration 3: Create testimonials Table
📁 File: `supabase/migrations/003_create_testimonials.sql`

#### Migration 4-5: Seed Signature Programs Data
📁 Files: 
- `supabase/migrations/004_seed_signature_programs.sql`
- `supabase/migrations/005_seed_signature_programs_part2.sql`

#### Migration 6-7: Seed Partner Universities Data
📁 Files:
- `supabase/migrations/006_seed_partner_universities.sql`
- `supabase/migrations/007_seed_partner_universities_part2.sql`

#### Migration 8-9: Seed Testimonials Data
📁 Files:
- `supabase/migrations/008_seed_testimonials.sql`
- `supabase/migrations/009_seed_testimonials_part2.sql`

### 3. Verify Success

After running all migrations:

1. **Check Tables**: Go to Table Editor in Supabase Dashboard
   - You should see: `signature_programs`, `partner_universities`, `testimonials`

2. **Check Data**: Click each table to verify data was inserted
   - signature_programs: Should have ~8 programs
   - partner_universities: Should have ~12 universities
   - testimonials: Should have ~6 testimonials

3. **Check Storage**: Go to Storage section
   - Buckets should exist: `signature-programs`, `partner-universities`, `testimonials`

### 4. Test Application

```bash
npm run dev
```

Visit: http://localhost:5173

- Homepage should show signature programs
- Partner universities section should display
- Testimonials should be visible

## Troubleshooting

### "Policy already exists" Error
If you see this, it means the migration was partially run. Safe to ignore or drop the policy first.

### "Table already exists" Error
The migration uses `CREATE TABLE IF NOT EXISTS`, so this shouldn't happen. If it does, the table is already created.

### No Data Showing
1. Check Table Editor to confirm data exists
2. Check browser console for errors
3. Verify .env file has correct credentials
4. Restart dev server

## Alternative: Use Supabase CLI

```bash
# Install
npm install -g supabase

# Login
supabase login

# Link project
supabase link --project-ref nrowebneeydlishwmdpf

# Push migrations
supabase db push
```

This will automatically run all migration files in order.
