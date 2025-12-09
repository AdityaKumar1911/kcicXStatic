# Supabase Setup Guide - Pathways Education Platform

**Project ID**: `nrowebneeydlishwmdpf`  
**Dashboard**: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf

---

## Project Already Configured

✅ Your Supabase project is already set up and connected!

**Current Configuration:**
- Project URL: https://nrowebneeydlishwmdpf.supabase.co
- Environment: Configured in `.env` file
- Status: Ready for development

---

## Quick Verification

### 1. Check Connection Status
```bash
npm run check-env
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Verify in Browser
- Look for green "Connected" badge in footer
- Visit `/admin/login` to access CMS

---

## Step 1: Access Your Supabase Dashboard

Your project dashboard: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf

From here you can:
- View database tables
- Run SQL queries
- Manage storage buckets
- Monitor API usage
- Configure authentication

## Step 2: Get Your API Credentials (Already Configured)

Your credentials are already in the `.env` file. To view or update:

1. In Supabase dashboard, click **"Settings"** (gear icon)
2. Click **"API"** in the left sidebar
3. Copy the following values:
   - **Project URL**: https://nrowebneeydlishwmdpf.supabase.co
   - **anon/public key** (under "Project API keys")

## Step 3: Environment Variables (Already Set)

Your `.env` file is already configured with:
```env
VITE_SUPABASE_URL=https://nrowebneeydlishwmdpf.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```


## Step 4: Create Storage Buckets

1. In Supabase dashboard, go to **Storage**
2. Create three public buckets:
   - `signature-programs`
   - `partner-universities`
   - `testimonials`

For each bucket:
- Click **"New bucket"**
- Enter bucket name
- Set **Public bucket** to ON
- Click **"Create bucket"**

## Step 5: Run Database Migrations

1. In Supabase dashboard, go to **SQL Editor**
2. Click **"New query"**
3. Run each migration file in order (001 through 009):
   - Copy content from `supabase/migrations/001_create_signature_programs.sql`
   - Paste into SQL Editor
   - Click **"Run"**
   - Repeat for all migration files

**Or use Supabase CLI:**
```bash
npm install -g supabase
supabase login
supabase link --project-ref your-project-id
supabase db push
```

## Step 6: Verify Setup

1. Go to **Table Editor** in Supabase
2. You should see three tables:
   - `signature_programs`
   - `partner_universities`
   - `testimonials`
3. Each should have seed data populated

## Step 7: Test the Application

1. Restart your dev server:
```bash
npm run dev
```

2. Visit the homepage - you should see data from Supabase
3. Go to `/admin/login` and log in with admin credentials
4. Test CRUD operations in admin panel

## Admin Login Credentials

Default admin credentials (change these in production):
- **Email**: admin@pathways.edu
- **Password**: admin123

## Troubleshooting

### "Invalid API key" error
- Double-check your `.env` file has correct credentials
- Ensure no extra spaces in the values
- Restart dev server after changing `.env`

### "Row Level Security" errors
- Ensure RLS policies are created (in migration files)
- Check you're logged in as admin for write operations

### Images not uploading
- Verify storage buckets are created and set to PUBLIC
- Check bucket names match exactly: `signature-programs`, `partner-universities`, `testimonials`

### No data showing
- Ensure all 9 migration files ran successfully
- Check Table Editor to verify data exists
- Check browser console for errors

## Next Steps

- Change admin password in Supabase Auth
- Set up custom domain (optional)
- Configure email templates for auth
- Set up database backups
- Add more admin users if needed
