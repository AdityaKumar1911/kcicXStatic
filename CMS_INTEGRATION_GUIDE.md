# CMS Integration Guide - Pathways Education Platform

## Project Information

**Supabase Project ID**: `nrowebneeydlishwmdpf`  
**Project URL**: https://nrowebneeydlishwmdpf.supabase.co  
**Dashboard**: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf

---

## Quick Start - CMS Access

### 1. Admin Panel Access
The CMS (Content Management System) is accessible at:
```
http://localhost:5173/admin/login
```

**Default Super Admin Credentials:**
- Email: `admin@kcic.edu`
- Password: `admin123`

⚠️ **Important**: Change these credentials in production!

### 2. CMS Features

The admin panel provides full content management capabilities:

#### **Signature Programs Management** (`/admin/programs`)
- Create, edit, delete signature programs
- Upload program images to Supabase Storage
- Manage program details (title, description, duration, price)
- Real-time preview of changes

#### **Partner Universities Management** (`/admin/universities`)
- Manage university partnerships
- Upload university logos and images
- Set rankings, locations, and program offerings
- Control visibility on public site

#### **Testimonials Management** (`/admin/testimonials`)
- Add student testimonials and reviews
- Upload student photos
- Manage ratings and review content
- Feature testimonials on homepage

#### **Admin User Management** (`/admin/users`) - Super Admin Only
- Create new admin accounts
- Assign roles (super_admin, admin, editor)
- Deactivate/activate admin users
- View login history and audit logs

---

## Database Connection Status

Your application is connected to Supabase project: **nrowebneeydlishwmdpf**

### Verify Connection
1. Start dev server: `npm run dev`
2. Check footer for green "Connected" badge
3. Visit `/admin/login` to access CMS

### Connection Details
- **Environment File**: `.env` (already configured)
- **Supabase URL**: https://nrowebneeydlishwmdpf.supabase.co
- **Tables**: signature_programs, partner_universities, testimonials, admin_users, audit_logs

---

## CMS Architecture

### Role-Based Access Control

**Three Admin Roles:**

1. **Super Admin** - Full system access
   - Manage all content
   - Create/edit/delete admin users
   - View audit logs
   - Access all CMS features

2. **Admin** - Content management
   - Manage programs, universities, testimonials
   - Cannot manage admin users
   - View own audit logs

3. **Editor** - Limited content access
   - Edit existing content
   - Cannot delete or create new items
   - Read-only access to most features

### Security Features

✅ **Row Level Security (RLS)** - All tables protected  
✅ **Admin-only access** - Content management requires admin role  
✅ **Audit logging** - All admin actions tracked  
✅ **Session management** - Secure authentication  
✅ **Role verification** - Permissions checked on every request

---

## Content Management Workflow

### Adding New Content

1. **Log in to Admin Panel**
   ```
   http://localhost:5173/admin/login
   ```

2. **Navigate to Content Section**
   - Programs: `/admin/programs`
   - Universities: `/admin/universities`
   - Testimonials: `/admin/testimonials`

3. **Click "Add New" Button**
   - Fill in required fields
   - Upload images (automatically stored in Supabase Storage)
   - Preview before saving

4. **Save and Publish**
   - Content appears immediately on public site
   - Changes logged in audit_logs table

### Editing Existing Content

1. Find content in admin table
2. Click "Edit" button
3. Modify fields as needed
4. Save changes
5. Verify on public site

### Deleting Content

1. Click "Delete" button on content row
2. Confirm deletion in dialog
3. Content removed from database and public site
4. Action logged in audit trail

---

## API Integration

### Supabase Client Configuration

Located in: `src/lib/supabase.ts`

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nrowebneeydlishwmdpf.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
```

### Database Tables

**signature_programs**
- id, title, description, duration, price, image_url
- created_at, updated_at
- RLS: Public read, admin-only write

**partner_universities**
- id, name, location, ranking, logo_url, programs
- created_at, updated_at
- RLS: Public read, admin-only write

**testimonials**
- id, student_name, program, content, rating, image_url
- created_at, updated_at
- RLS: Public read, admin-only write

**admin_users**
- id, email, role, is_active, last_login_at
- created_at, updated_at
- RLS: Admin-only access

**audit_logs**
- id, admin_user_id, action, table_name, record_id, changes
- created_at
- RLS: Admin-only read

---

## Storage Buckets

All images uploaded through CMS are stored in Supabase Storage:

**Buckets:**
- `signature-programs` - Program images
- `partner-universities` - University logos
- `testimonials` - Student photos

**Access**: All buckets are public for read access

**Management**: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf/storage/buckets

---

## Troubleshooting CMS Issues

### Cannot Log In
- Verify admin account exists in `admin_users` table
- Check email/password are correct
- Ensure `is_active = true` in database
- Clear browser cache and cookies

### Content Not Saving
- Check browser console for errors
- Verify RLS policies are enabled
- Ensure logged in as admin user
- Check network tab for API errors

### Images Not Uploading
- Verify storage buckets exist and are public
- Check file size (max 5MB recommended)
- Ensure correct bucket permissions
- Check Supabase storage quota

### Permission Denied Errors
- Verify user role in `admin_users` table
- Check RLS policies in Supabase dashboard
- Ensure admin session is valid
- Re-login to refresh permissions

---

## Production Deployment Checklist

Before deploying CMS to production:

- [ ] Change default admin credentials
- [ ] Update VITE_SUPABASE_URL in production .env
- [ ] Update VITE_SUPABASE_ANON_KEY in production .env
- [ ] Enable email verification for new admins
- [ ] Set up database backups
- [ ] Configure custom domain (optional)
- [ ] Enable audit log retention policy
- [ ] Test all CMS features in staging
- [ ] Document admin procedures for team
- [ ] Set up monitoring and alerts

---

## Support & Documentation

**Related Guides:**
- [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) - Admin roles and RLS policies
- [ADMIN_USER_MANAGEMENT_GUIDE.md](./ADMIN_USER_MANAGEMENT_GUIDE.md) - User management
- [DATABASE_MIGRATION_GUIDE.md](./DATABASE_MIGRATION_GUIDE.md) - Database setup
- [SUPABASE_SETUP_GUIDE.md](./SUPABASE_SETUP_GUIDE.md) - Initial Supabase configuration

**Supabase Dashboard:**
https://supabase.com/dashboard/project/nrowebneeydlishwmdpf

**Need Help?**
- Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- Review Supabase logs in dashboard
- Check browser console for errors
- Verify .env configuration with `npm run check-env`
