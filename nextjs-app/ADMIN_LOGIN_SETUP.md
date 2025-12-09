# KCIC Admin Login Setup Guide

## Admin Credentials
- **Email:** admin@kcic.edu
- **Password:** admin123
- **Login URL:** `/admin/login`

## Setup Steps

### Step 1: Create Supabase Auth User

1. Go to [Supabase Dashboard](https://supabase.com/dashboard/project/nrowebneeydlishwmdpf)
2. Navigate to **Authentication** → **Users**
3. Click **Add User** → **Create New User**
4. Enter:
   - **Email:** `admin@kcic.edu`
   - **Password:** `admin123`
   - Check **Auto Confirm User** (important!)
5. Click **Create User**

### Step 2: Verify Admin Users Table Entry

The `admin_users` table should already have an entry from the migration. If not, run this SQL in the Supabase SQL Editor:

```sql
INSERT INTO public.admin_users (email, role, full_name, is_active)
VALUES ('admin@kcic.edu', 'super_admin', 'System Administrator', true)
ON CONFLICT (email) DO NOTHING;
```

### Step 3: Login to CMS

1. Go to your Next.js app URL + `/admin/login`
2. Enter credentials:
   - Email: `admin@kcic.edu`
   - Password: `admin123`
3. Click **Sign In**

## Troubleshooting

### "You do not have admin access" Error
- The auth user exists but no matching entry in `admin_users` table
- Run the SQL in Step 2 to add the entry

### "Invalid login credentials" Error
- The Supabase Auth user doesn't exist
- Follow Step 1 to create the auth user

### Password Reset
In Supabase Dashboard → Authentication → Users:
1. Find the user
2. Click the three dots menu
3. Select "Send password recovery"

## Security Note
**Change the default password immediately after first login!**

Go to Supabase Dashboard → Authentication → Users → Select user → Update password
