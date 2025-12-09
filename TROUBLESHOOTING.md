# 🔧 Troubleshooting Guide

This guide helps you resolve common issues with the Pathways Education Platform.

---

## 🔴 Supabase Connection Issues

### Problem: "DB Disconnected" badge in footer

**Solution:**

1. **Check if .env file exists:**
   ```bash
   ls -la .env
   ```
   If missing, copy from example:
   ```bash
   cp .env.example .env
   ```

2. **Verify your credentials:**
   ```bash
   npm run check-env
   ```

3. **Common issues:**
   - ❌ Using placeholder values (your-project-id, your_supabase_anon_key)
   - ❌ Extra spaces before/after values
   - ❌ Missing https:// in URL
   - ❌ Using service_role key instead of anon public key

4. **Fix it:**
   ```bash
   npm run setup
   ```
   Follow the interactive wizard.

---

### Problem: "Invalid API key" error

**Cause:** You might be using the wrong key.

**Solution:**
1. Go to Supabase Dashboard → Settings → API
2. Copy the **anon public** key (NOT service_role)
3. The key should start with `eyJ`
4. Update your .env file
5. Restart dev server: `npm run dev`

---

### Problem: "Invalid URL format" error

**Cause:** URL is not in the correct format.

**Solution:**
1. URL must start with `https://`
2. URL must end with `.supabase.co`
3. Format: `https://xxxxxxxxxxxxx.supabase.co`
4. Example: `https://abcdefghijk.supabase.co`

---

### Problem: Changes to .env not taking effect

**Cause:** Vite caches environment variables.

**Solution:**
1. Stop the dev server (Ctrl+C)
2. Clear the cache:
   ```bash
   rm -rf node_modules/.vite
   ```
3. Restart:
   ```bash
   npm run dev
   ```

---

## 🔴 Database Issues

### Problem: "Table does not exist" errors

**Cause:** Database migrations haven't been run.

**Solution:**
1. Open [DATABASE_MIGRATION_GUIDE.md](./DATABASE_MIGRATION_GUIDE.md)
2. Go to Supabase Dashboard → SQL Editor
3. Run all migration files in order (001 through 009)
4. Verify tables exist: Settings → Database → Tables

---

### Problem: "Row Level Security policy violation"

**Cause:** RLS policies not properly configured.

**Solution:**
1. Check if you're logged in as admin
2. Verify RLS policies exist:
   - Go to: Authentication → Policies
   - Each table should have policies
3. Re-run migration files 001, 002, 003 if policies are missing

---

## 🔴 Admin Panel Issues

### Problem: Can't log in to admin panel

**Possible causes and solutions:**

1. **Supabase not connected:**
   - See "Supabase Connection Issues" above

2. **No admin user exists:**
   - Create admin user in Supabase Dashboard
   - Go to: Authentication → Users → Add User
   - Email: `admin@pathways.edu`
   - Password: `admin123` (or your choice)

3. **Wrong credentials:**
   - Default: `admin@pathways.edu` / `admin123`
   - If changed, use your custom credentials

---

### Problem: Admin pages show "No data"

**Cause:** Database tables are empty.

**Solution:**
1. Run seed migration files (004-009)
2. These populate tables with sample data
3. See [DATABASE_MIGRATION_GUIDE.md](./DATABASE_MIGRATION_GUIDE.md)

---

## 🔴 Build/Development Issues

### Problem: "Module not found" errors

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Problem: Port 5173 already in use

**Solution:**
1. Kill the process:
   ```bash
   # Mac/Linux
   lsof -ti:5173 | xargs kill -9
   
   # Windows
   netstat -ano | findstr :5173
   taskkill /PID <PID> /F
   ```

2. Or use a different port:
   ```bash
   npm run dev -- --port 3000
   ```

---

### Problem: TypeScript errors

**Solution:**
```bash
# Clear TypeScript cache
rm -rf node_modules/.vite
npm run build
```

---

## 🔴 Image Upload Issues

### Problem: Images not uploading in admin panel

**Cause:** Storage bucket not configured.

**Solution:**
1. Go to Supabase Dashboard → Storage
2. Create bucket named: `program-images`
3. Set bucket to **public**
4. Add policy for public read access

---

## 🔴 Performance Issues

### Problem: Slow page loads

**Solutions:**
1. Check network tab for slow API calls
2. Verify Supabase region is close to you
3. Check if RLS policies are optimized
4. Consider adding database indexes

---

## 📚 Quick Reference

### Useful Commands

```bash
# Setup
npm install              # Install dependencies
npm run setup           # Interactive Supabase setup
npm run check-env       # Verify configuration

# Development
npm run dev             # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Diagnostics
npm run check-env       # Check Supabase config
```

### Important Files

- `.env` - Your Supabase credentials
- `SETUP_ENV.md` - Setup instructions
- `DATABASE_MIGRATION_GUIDE.md` - Database setup
- `SUPABASE_CONNECTION_STATUS.md` - Connection help
- `setup-guide.html` - Visual guide (open in browser)

### Getting Help

1. **Check documentation:**
   - [GETTING_STARTED.md](./GETTING_STARTED.md)
   - [SETUP_ENV.md](./SETUP_ENV.md)
   - [README.md](./README.md)

2. **Run diagnostics:**
   ```bash
   npm run check-env
   ```

3. **Check browser console:**
   - Open DevTools (F12)
   - Look for error messages
   - Check Network tab for failed requests

4. **Check Supabase logs:**
   - Dashboard → Logs
   - Look for errors or warnings

---

## 🆘 Still Having Issues?

If none of the above solutions work:

1. **Verify your setup:**
   - Node.js version 18+
   - npm is up to date
   - Supabase project is active
   - .env file has correct values

2. **Try a clean install:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

3. **Check Supabase status:**
   - Visit: https://status.supabase.com
   - Verify no outages

4. **Review error messages carefully:**
   - Browser console
   - Terminal output
   - Supabase logs

---

**Remember:** Most issues are related to environment configuration. Always start by running `npm run check-env`! 🎯
