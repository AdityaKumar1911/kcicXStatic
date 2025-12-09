# 🚀 Quick Migration Setup

## ⚠️ Connection Timeout Detected

The automated migration system is experiencing connection timeouts with your Supabase project.

**This is normal** - free tier projects often pause after inactivity.

## ✅ Solution: Manual Migration (5 minutes)

### Step 1: Wake Up Your Project
1. Visit: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf
2. If you see "Paused", click **"Restore"** or **"Resume"**
3. Wait 30 seconds for project to activate

### Step 2: Open SQL Editor
Click here: [Open SQL Editor](https://supabase.com/dashboard/project/nrowebneeydlishwmdpf/sql/new)

### Step 3: Copy & Run Each Migration

Run these **in order** (copy content from each file, paste in SQL Editor, click Run):

#### ✅ Create Tables (Run First)
1. `supabase/migrations/001_create_signature_programs.sql`
2. `supabase/migrations/002_create_partner_universities.sql`
3. `supabase/migrations/003_create_testimonials.sql`

#### ✅ Add Data (Run After Tables)
4. `supabase/migrations/004_seed_signature_programs.sql`
5. `supabase/migrations/005_seed_signature_programs_part2.sql`
6. `supabase/migrations/006_seed_partner_universities.sql`
7. `supabase/migrations/007_seed_partner_universities_part2.sql`
8. `supabase/migrations/008_seed_testimonials.sql`
9. `supabase/migrations/009_seed_testimonials_part2.sql`

#### ✅ Add Performance Indexes (Optional but Recommended)
10. `supabase/migrations/010_add_performance_indexes.sql`

#### 🔐 Add Admin Access Control (NEW - Run for Admin Features)
11. `supabase/migrations/011_create_admin_users.sql` - Creates admin_users table with roles
12. `supabase/migrations/012_create_audit_logs.sql` - Creates audit logging system
13. `supabase/migrations/013_update_rls_policies.sql` - Updates RLS for programs & universities
14. `supabase/migrations/014_update_testimonials_rls.sql` - Updates RLS for testimonials & adds triggers


### Step 4: Verify
1. Go to [Table Editor](https://supabase.com/dashboard/project/nrowebneeydlishwmdpf/editor)
2. You should see 5 tables with data:
   - ✅ signature_programs (8 rows)
   - ✅ partner_universities (12 rows)
   - ✅ testimonials (6 rows)
   - ✅ admin_users (1 row - super admin)
   - ✅ audit_logs (0 rows initially)


### Step 5: Test App
```bash
npm run dev
```

Visit http://localhost:5173 - you should see programs, universities, and testimonials!

## 🎯 Alternative: Use CLI (Faster)

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref nrowebneeydlishwmdpf

# Run all migrations automatically
supabase db push
```

## 📚 More Help
- **Admin Guide**: See `ADMIN_GUIDE.md` for admin access control details
- **Admin Panel**: See `ADMIN_PANEL_GUIDE.md` for frontend integration
- **Detailed Guide**: See `MANUAL_MIGRATION_GUIDE.md`
- **Troubleshooting**: See `SUPABASE_CONNECTION_STATUS.md`
- **Connection Issues**: See `TROUBLESHOOTING.md`

