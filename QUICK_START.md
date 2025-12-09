# 🚀 Quick Start Guide - Database Validation

## 1. Wake Up Your Supabase Project

Your project may be paused on the free tier. Visit:
```
https://supabase.com/dashboard/project/nrowebneeydlishwmdpf
```

Click **"Restore"** or **"Resume"** if prompted.

---

## 2. Run Database Audit (5 minutes)

### Option A: SQL Editor (Recommended)
1. Go to Supabase Dashboard → SQL Editor
2. Open `scripts/database-audit.sql` from your project
3. Copy all content and paste into SQL Editor
4. Click **"Run"**
5. Review results for each query

### Option B: Command Line
```bash
# Generate fresh types
npx supabase gen types typescript --project-id nrowebneeydlishwmdpf > src/types/supabase.ts

# Check for schema drift
npx supabase db diff --linked

# Lint migrations
npx supabase db lint
```

---

## 3. Apply Performance Optimizations

Run migration 010 in SQL Editor:
```bash
# Copy content from: supabase/migrations/010_add_performance_indexes.sql
# Paste into SQL Editor and run
```

This adds:
- ✅ Missing indexes (slug, country, year)
- ✅ Unique constraints
- ✅ Auto-update triggers for updated_at

---

## 4. Run Smoke Tests

In your project terminal:
```bash
npm run dev
```

Then in browser console:
```javascript
import { runDatabaseSmokeTests, printTestResults } from './src/tests/database-smoke-test';
runDatabaseSmokeTests().then(printTestResults);
```

---

## 5. Review Reports

Check these files for detailed analysis:
- `DATABASE_AUDIT_GUIDE.md` - Full audit instructions
- `PERFORMANCE_REPORT.md` - Performance analysis & recommendations
- `src/types/supabase.ts` - Generated TypeScript types

---

## ✅ Success Checklist

- [ ] Supabase project is active (not paused)
- [ ] All audit queries run successfully
- [ ] Migration 010 applied (indexes + triggers)
- [ ] TypeScript types generated
- [ ] Smoke tests passing
- [ ] No RLS policy errors
- [ ] Data counts look correct

---

## 🎯 Expected Results

### Audit Queries
- ✅ No tables without primary keys
- ✅ All tables have RLS enabled
- ✅ All tables have policies
- ✅ No duplicate slugs
- ✅ Reasonable data counts

### Performance
- ✅ All indexes created
- ✅ Triggers working
- ✅ Query times < 10ms

### Security
- ✅ Public can read public data
- ✅ Testimonials filtered by status
- ✅ Write operations require auth

---

## 🆘 Troubleshooting

### "Connection timeout"
→ Project is paused. Resume it in dashboard.

### "Relation does not exist"
→ Migrations not run. See `RUN_MIGRATIONS_HERE.md`

### "Permission denied"
→ RLS policy issue. Check policies in audit results.

### "Types don't match"
→ Regenerate types: `npx supabase gen types typescript...`

---

## 📚 Next Steps

After validation:
1. Review `PERFORMANCE_REPORT.md` for optimization opportunities
2. Consider adding admin-only RLS policies
3. Implement junction tables for better relationships
4. Set up monitoring and alerts

---

*Need help? Check `DATABASE_AUDIT_GUIDE.md` for detailed instructions.*
