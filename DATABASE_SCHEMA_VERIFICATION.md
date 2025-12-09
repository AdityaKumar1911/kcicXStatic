# Database Schema Verification Guide

## Target Schema: 8 Tables

Once your Supabase project is restored, run these queries in SQL Editor to verify the schema state.

### Quick Verification Query
```sql
-- Check which tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_type = 'BASE TABLE'
ORDER BY table_name;
```

**Expected tables after all migrations:**
1. `admin_users`
2. `audit_logs`
3. `campuses`
4. `faculty`
5. `newsletter_subscribers`
6. `partner_universities`
7. `signature_programs`
8. `testimonials`

---

## Table Schemas

### 1. signature_programs
```sql
-- Verify columns
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'signature_programs' ORDER BY ordinal_position;
```
**Required columns:** id, name, study_in_india, study_abroad, course_tag, acceptance, designed_by, slug, banner_image, overlay_text, tagline, partner_universities, display_order, average_salary, potential_recruiters

### 2. partner_universities
```sql
SELECT column_name, data_type FROM information_schema.columns 
WHERE table_name = 'partner_universities';
```
**Required columns:** id, name, slug, country, city, qs_rank, logo_url, summary, description, fees_per_year, scholarship_range, display_order

### 3. testimonials
```sql
SELECT column_name, data_type FROM information_schema.columns 
WHERE table_name = 'testimonials';
```
**Required columns:** id, name, image, program, transferred_to, country, quote, year, status, display_order

### 4. admin_users
**Required columns:** id, email, role, full_name, is_active, created_by, last_login_at

### 5. audit_logs
**Required columns:** id, admin_email, admin_role, action, table_name, record_id, old_data, new_data, ip_address, user_agent

### 6. newsletter_subscribers
**Required columns:** id, email, subscribed_at, status, source

### 7. faculty
**Required columns:** id, name, title, department, image, credentials, specialization, is_active, display_order

### 8. campuses
**Required columns:** id, name, slug, type, city, state, country, address, hero_image_url, gallery, highlights, facilities, contact_phone, contact_email, is_active, display_order

---

## Data Verification
```sql
-- Count records in each table
SELECT 'signature_programs' as tbl, COUNT(*) FROM signature_programs
UNION ALL SELECT 'partner_universities', COUNT(*) FROM partner_universities
UNION ALL SELECT 'testimonials', COUNT(*) FROM testimonials
UNION ALL SELECT 'admin_users', COUNT(*) FROM admin_users
UNION ALL SELECT 'faculty', COUNT(*) FROM faculty
UNION ALL SELECT 'campuses', COUNT(*) FROM campuses;
```

## RLS Verification
```sql
-- Check RLS is enabled
SELECT tablename, rowsecurity FROM pg_tables 
WHERE schemaname = 'public' AND tablename IN (
  'signature_programs', 'partner_universities', 'testimonials',
  'admin_users', 'audit_logs', 'newsletter_subscribers', 'faculty', 'campuses'
);
```

## Migration Order
Run migrations 001-020 in order. Each handles `IF NOT EXISTS` safely.
