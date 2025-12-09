# Database Migration Guide

## ✅ Database Connected!

Your Supabase database is now connected to:
- **Project URL**: https://nrowebneeydlishwmdpf.supabase.co

## Next Steps: Run Database Migrations

Your database tables need to be created. Follow these steps:

### 1. Open Supabase SQL Editor

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf
2. Click on **SQL Editor** in the left sidebar
3. Click **New Query**

### 2. Run Migration Files

Run each migration file in order (found in `supabase/migrations/`):

#### Migration 1: Create Signature Programs Table
```sql
-- Copy and paste content from: supabase/migrations/001_create_signature_programs.sql
```

#### Migration 2: Create Partner Universities Table
```sql
-- Copy and paste content from: supabase/migrations/002_create_partner_universities.sql
```

#### Migration 3: Create Testimonials Table
```sql
-- Copy and paste content from: supabase/migrations/003_create_testimonials.sql
```

#### Migration 4-9: Seed Data
Run the remaining migration files (004-009) to populate your database with initial data.

### 3. Verify Tables Created

After running migrations, verify in Supabase:
1. Go to **Table Editor**
2. You should see: `signature_programs`, `partner_universities`, `testimonials`

### 4. Restart Your App

```bash
npm run dev
```

Your app should now be fully connected to Supabase! 🎉

## Troubleshooting

If you encounter errors:
- Ensure you're running migrations in order (001, 002, 003, etc.)
- Check the Supabase logs for detailed error messages
- See TROUBLESHOOTING.md for more help
