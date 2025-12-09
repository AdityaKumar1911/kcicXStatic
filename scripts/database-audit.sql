-- ============================================
-- DATABASE AUDIT SCRIPT
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. TABLES WITHOUT PRIMARY KEYS
-- Expected: Empty result (all tables should have PKs)
SELECT n.nspname as schema, c.relname as table
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
LEFT JOIN pg_index i ON i.indrelid = c.oid AND i.indisprimary
WHERE c.relkind = 'r' 
  AND i.indrelid IS NULL 
  AND n.nspname NOT IN ('pg_catalog','information_schema');

-- 2. FOREIGN KEY CONSTRAINTS
-- Shows all foreign key relationships
SELECT conname as constraint_name, 
       conrelid::regclass as child_table, 
       confrelid::regclass as parent_table, 
       confdeltype as on_delete
FROM pg_constraint 
WHERE contype = 'f';

-- 3. NULLABILITY AND DEFAULTS
-- Review which columns allow NULL
SELECT table_name, column_name, is_nullable, column_default, data_type
FROM information_schema.columns
WHERE table_schema = 'public'
ORDER BY table_name, ordinal_position;

-- 4. INDEX USAGE STATISTICS
-- Find indexes that are never used
SELECT schemaname, tablename, indexname, idx_scan, idx_tup_read, idx_tup_fetch
FROM pg_stat_user_indexes
ORDER BY idx_scan ASC NULLS FIRST
LIMIT 50;

-- 5. RLS STATUS
-- Check which tables have RLS enabled
SELECT schemaname, tablename, rowsecurity
FROM pg_tables
WHERE schemaname NOT IN ('pg_catalog','information_schema')
ORDER BY tablename;

-- 6. RLS POLICIES
-- List all RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
ORDER BY schemaname, tablename, policyname;

-- 7. TABLES WITH RLS BUT NO POLICIES
-- Security issue: RLS enabled but no policies = no access
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

-- 8. UNUSED TABLES
-- Tables with zero scans (might be deprecated)
SELECT schemaname, relname as table, n_live_tup as rows, 
       seq_scan, idx_scan, last_vacuum, last_analyze
FROM pg_stat_user_tables
WHERE seq_scan = 0 AND idx_scan = 0
ORDER BY n_live_tup DESC;

-- 9. TABLE SIZES
-- Disk space usage
SELECT schemaname, tablename, 
       pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size
FROM pg_tables
WHERE schemaname NOT IN ('pg_catalog','information_schema')
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;

-- 10. DATA INTEGRITY CHECK
-- Count records in each table
SELECT 'signature_programs' as table, COUNT(*) as count FROM signature_programs
UNION ALL
SELECT 'partner_universities', COUNT(*) FROM partner_universities
UNION ALL
SELECT 'testimonials', COUNT(*) FROM testimonials;

-- 11. CHECK FOR EMPTY REQUIRED FIELDS
-- Find records with empty or null required fields
SELECT 'signature_programs' as table, 
       COUNT(*) as empty_names
FROM signature_programs 
WHERE name = '' OR name IS NULL
UNION ALL
SELECT 'partner_universities', 
       COUNT(*)
FROM partner_universities 
WHERE name = '' OR name IS NULL
UNION ALL
SELECT 'testimonials', 
       COUNT(*)
FROM testimonials 
WHERE name = '' OR name IS NULL;

-- 12. TESTIMONIALS STATUS DISTRIBUTION
-- Check testimonial approval status
SELECT status, COUNT(*) as count
FROM testimonials
GROUP BY status
ORDER BY status;

-- 13. DUPLICATE SLUGS CHECK
-- Find duplicate slugs (should be unique)
SELECT slug, COUNT(*) as count
FROM signature_programs
GROUP BY slug
HAVING COUNT(*) > 1
UNION ALL
SELECT slug, COUNT(*) as count
FROM partner_universities
GROUP BY slug
HAVING COUNT(*) > 1;

-- 14. ORPHANED PARTNER UNIVERSITIES
-- Universities not referenced in any signature program
SELECT pu.name, pu.country
FROM partner_universities pu
WHERE NOT EXISTS (
  SELECT 1 FROM signature_programs sp
  WHERE pu.name = ANY(sp.partner_universities)
);

-- 15. PERFORMANCE: SLOW QUERIES
-- Check for missing indexes on frequently queried columns
SELECT schemaname, tablename, attname, n_distinct, correlation
FROM pg_stats
WHERE schemaname = 'public'
  AND n_distinct > 10
ORDER BY abs(correlation) DESC;

-- ============================================
-- END OF AUDIT SCRIPT
-- Review results and apply fixes as needed
-- ============================================
