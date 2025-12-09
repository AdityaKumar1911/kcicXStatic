# Supabase CLI Migration Guide

## Project Details
- **Project ID:** `nrowebneeydlishwmdpf`
- **Dashboard:** https://supabase.com/dashboard/project/nrowebneeydlishwmdpf

---

## Step 1: Restore Project (if paused)

Visit dashboard and click **Restore** button:
https://supabase.com/dashboard/project/nrowebneeydlishwmdpf

Wait ~30 seconds for restoration.

---

## Step 2: Install Supabase CLI

```bash
# macOS
brew install supabase/tap/supabase

# Windows (scoop)
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase

# npm (any platform)
npm install -g supabase
```

---

## Step 3: Login to Supabase

```bash
supabase login
```
This opens browser for authentication.

---

## Step 4: Link Project

```bash
supabase link --project-ref nrowebneeydlishwmdpf
```

You'll be prompted for database password (set in Supabase dashboard).

---

## Step 5: Push Migrations

```bash
supabase db push
```

This applies all 20 migrations from `supabase/migrations/` folder:

| Migration | Creates |
|-----------|---------|
| 001-003 | Tables: signature_programs, partner_universities, testimonials |
| 004-009 | Seed data for all tables |
| 010 | Performance indexes |
| 011-012 | admin_users, audit_logs tables |
| 013-014 | RLS policies & triggers |
| 015-017 | newsletter_subscribers, faculty, campuses |
| 018-020 | Schema updates (salary, recruiters, motorsport, AI) |

---

## Step 6: Verify

```bash
# Check migration status
supabase db diff

# Or check in dashboard Table Editor
```

---

## Quick Commands Summary

```bash
# Full setup sequence:
supabase login
supabase link --project-ref nrowebneeydlishwmdpf
supabase db push
```

---

## Troubleshooting

**"Project is paused"** → Restore from dashboard first

**"Permission denied"** → Check database password in Settings → Database

**"Migration failed"** → Run migrations manually in SQL Editor

---

## Expected Result

After `supabase db push`, you should have **8 tables**:
- signature_programs (with seed data)
- partner_universities (with seed data)
- testimonials (with seed data)
- admin_users
- audit_logs
- newsletter_subscribers
- faculty
- campuses
