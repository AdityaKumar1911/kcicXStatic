# 🔍 Database Audit & Validation Guide

## Overview
This guide helps you validate your Supabase database schema, security, and performance.

---

## ✅ Quick Status Check

### Current Schema Status
- ✅ **Primary Keys**: All tables have UUID primary keys
- ✅ **RLS Enabled**: All tables have Row Level Security enabled
- ✅ **Indexes**: Display order and slug indexes created
- ✅ **Unique Constraints**: partner_universities.slug is unique
- ⚠️ **Foreign Keys**: None defined (signature_programs.partner_universities is TEXT[] not FK)
- ⚠️ **Triggers**: No updated_at triggers (manual updates required)

---

## 🔧 1. Generate TypeScript Types

### Automated (Recommended)
```bash
# Generate types from live database
npx supabase gen types typescript --project-id nrowebneeydlishwmdpf > src/types/supabase.ts
```

### Manual (Already Done)
✅ Types generated in `src/types/supabase.ts` based on migration files

---

## 🔍 2. Schema Validation Queries

### Run these in Supabase SQL Editor

#### A. Tables Without Primary Keys
```sql
SELECT n.nspname as schema, c.relname as table
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
LEFT JOIN pg_index i ON i.indrelid = c.oid AND i.indisprimary
WHERE c.relkind = 'r' 
  AND i.indrelid IS NULL 
  AND n.nspname NOT IN ('pg_catalog','information_schema');
```
**Expected**: Empty (all tables have PKs)

#### B. Foreign Key Status
```sql
SELECT conname, 
       conrelid::regclass as child_table, 
       confrelid::regclass as parent_table, 
       confdeltype as on_delete
FROM pg_constraint 
WHERE contype = 'f';
```
**Expected**: Empty (no FKs currently)

#### C. Nullability Check
```sql
SELECT table_name, column_name, is_nullable, column_default
FROM information_schema.columns
WHERE table_schema = 'public'
ORDER BY table_name, ordinal_position;
```

#### D. Index Usage
```sql
SELECT relname as table, 
       indexrelname as index, 
       idx_scan
FROM pg_stat_user_indexes
ORDER BY idx_scan ASC NULLS FIRST
LIMIT 50;
```

#### E. RLS Status
```sql
-- Tables with RLS disabled
SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE schemaname NOT IN ('pg_catalog','information_schema')
ORDER BY 1,2;

-- Tables with RLS but no policies
SELECT n.nspname as schema, c.relname as table
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE c.relkind='r' 
  AND c.relrowsecurity = true
  AND NOT EXISTS (
    SELECT 1 FROM pg_policies p 
    WHERE p.schemaname=n.nspname 
      AND p.tablename=c.relname
  );
```
**Expected**: All tables have RLS + policies

#### F. Unused Tables
```sql
SELECT relname as table, 
       n_live_tup as rows, 
       last_vacuum, 
       last_analyze
FROM pg_stat_user_tables
WHERE seq_scan = 0 AND idx_scan = 0
ORDER BY n_live_tup ASC;
```

#### G. Schema Overview
```sql
SELECT table_name, column_name, data_type
FROM information_schema.columns
WHERE table_schema='public'
ORDER BY table_name, ordinal_position;
```

---

## 🔒 3. Security Audit

### RLS Policies Review

#### signature_programs
- ✅ Public read access
- ✅ Authenticated users: INSERT/UPDATE/DELETE
- ⚠️ Consider admin-only policies for production

#### partner_universities
- ✅ Public read access
- ✅ Authenticated users: INSERT/UPDATE/DELETE
- ⚠️ Consider admin-only policies for production

#### testimonials
- ✅ Public read (approved only)
- ✅ Authenticated users: view all + CRUD
- ✅ Status-based filtering working correctly

### Recommendations
1. **Add admin role check**: Replace `auth.role() = 'authenticated'` with admin checks
2. **Add service role policies**: For backend operations
3. **Add rate limiting**: Prevent abuse on public endpoints

---

## ⚡ 4. Performance Optimization

### Missing Indexes (Recommended)
```sql
-- Add slug index to signature_programs
CREATE INDEX IF NOT EXISTS idx_signature_programs_slug 
ON signature_programs(slug);

-- Add country index for filtering
CREATE INDEX IF NOT EXISTS idx_partner_universities_country 
ON partner_universities(country);

-- Add year index for testimonials
CREATE INDEX IF NOT EXISTS idx_testimonials_year 
ON testimonials(year);
```

### Add Updated_At Triggers
```sql
-- Function to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply to all tables
CREATE TRIGGER update_signature_programs_updated_at 
BEFORE UPDATE ON signature_programs
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_partner_universities_updated_at 
BEFORE UPDATE ON partner_universities
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_testimonials_updated_at 
BEFORE UPDATE ON testimonials
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

---

## 🧹 5. Schema Improvements

### Add Foreign Key Constraints
```sql
-- If you want to enforce partner_universities references
-- Note: This requires changing signature_programs.partner_universities 
-- from TEXT[] to a junction table

-- Create junction table
CREATE TABLE signature_program_universities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  signature_program_id UUID NOT NULL REFERENCES signature_programs(id) ON DELETE CASCADE,
  partner_university_id UUID NOT NULL REFERENCES partner_universities(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(signature_program_id, partner_university_id)
);
```

### Add Unique Constraints
```sql
-- Ensure signature_programs slugs are unique
ALTER TABLE signature_programs 
ADD CONSTRAINT unique_signature_programs_slug UNIQUE (slug);
```

---

## 📊 6. Data Validation

### Check Data Integrity
```sql
-- Count records
SELECT 'signature_programs' as table, COUNT(*) as count FROM signature_programs
UNION ALL
SELECT 'partner_universities', COUNT(*) FROM partner_universities
UNION ALL
SELECT 'testimonials', COUNT(*) FROM testimonials;

-- Check for empty required fields
SELECT 'signature_programs' as table, COUNT(*) as empty_names
FROM signature_programs WHERE name = '' OR name IS NULL
UNION ALL
SELECT 'partner_universities', COUNT(*)
FROM partner_universities WHERE name = '' OR name IS NULL
UNION ALL
SELECT 'testimonials', COUNT(*)
FROM testimonials WHERE name = '' OR name IS NULL;
```

---

## 🧪 7. Runtime Contract Test

Create `src/tests/database-smoke-test.ts`:

```typescript
import { supabase } from '@/lib/supabase';
import type { Database } from '@/types/supabase';

export async function databaseSmokeTest() {
  const results = [];

  // 1. Test signature_programs read
  const { data: programs, error: progError } = await supabase
    .from('signature_programs')
    .select('*')
    .limit(1);
  
  results.push({
    test: 'signature_programs read',
    passed: !progError,
    error: progError?.message
  });

  // 2. Test partner_universities read
  const { data: unis, error: uniError } = await supabase
    .from('partner_universities')
    .select('*')
    .limit(1);
  
  results.push({
    test: 'partner_universities read',
    passed: !uniError,
    error: uniError?.message
  });

  // 3. Test testimonials read (approved only for anon)
  const { data: testimonials, error: testError } = await supabase
    .from('testimonials')
    .select('*')
    .eq('status', 'approved')
    .limit(1);
  
  results.push({
    test: 'testimonials read (RLS)',
    passed: !testError,
    error: testError?.message
  });

  return results;
}
```

---

## 📋 Checklist

- [x] TypeScript types generated
- [ ] All SQL validation queries run
- [ ] RLS policies reviewed
- [ ] Performance indexes added
- [ ] Updated_at triggers added
- [ ] Foreign keys considered
- [ ] Unique constraints added
- [ ] Data integrity verified
- [ ] Smoke tests passing

---

## 🚀 Next Steps

1. **Wake up Supabase project** (if paused)
2. **Run all validation queries** in SQL Editor
3. **Apply recommended indexes** and triggers
4. **Test RLS policies** with different user roles
5. **Run smoke tests** to verify everything works
6. **Monitor performance** in Supabase dashboard

---

## 📚 Resources

- [Supabase RLS Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [PostgreSQL Performance Tips](https://wiki.postgresql.org/wiki/Performance_Optimization)
- [Database Design Best Practices](https://supabase.com/docs/guides/database/design)
