# Getting Started - Pathways Education Platform

**Project ID**: `nrowebneeydlishwmdpf`  
**Supabase Dashboard**: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf

---

## 🚀 Quick Start (5 Minutes)

Your project is already configured and ready to use! Follow these steps:

### 1. Install Dependencies
```bash
npm install
```

### 2. Verify Database Connection
```bash
npm run check-env
```

✅ You should see: "Supabase configuration is valid!"

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
```
http://localhost:5173
```

### 5. Access Admin CMS
```
http://localhost:5173/admin/login
```

**Super Admin Login:**
- Email: `admin@kcic.edu`
- Password: `admin123`

---

## ✅ What's Already Configured

Your project comes pre-configured with:

✅ **Supabase Connection**
- Project URL: https://nrowebneeydlishwmdpf.supabase.co
- Environment variables in `.env` file
- Database client configured in `src/lib/supabase.ts`

✅ **Database Tables**
- signature_programs (8 programs)
- partner_universities (8 universities)
- testimonials (8 testimonials)
- admin_users (admin accounts)
- audit_logs (activity tracking)

✅ **Admin CMS**
- Role-based access control
- Content management interface
- Image upload system
- Audit logging

✅ **Security**
- Row Level Security (RLS) policies
- Admin authentication
- Role verification
- Audit trails

---

## 📖 Next Steps

### Explore the Platform

1. **View Public Site**
   - Homepage with programs and testimonials
   - Universities directory
   - Program details pages

2. **Access Admin Panel**
   - Login at `/admin/login`
   - View dashboard with statistics
   - Manage content (programs, universities, testimonials)
   - View audit logs (super admin only)

3. **Manage Admin Users** (Super Admin Only)
   - Go to `/admin/users`
   - Create new admin accounts
   - Assign roles (super_admin, admin, editor)
   - Deactivate users

### Customize Content

1. **Add New Programs**
   - Go to `/admin/programs`
   - Click "Add New Program"
   - Fill in details and upload image
   - Save and view on public site

2. **Add Universities**
   - Go to `/admin/universities`
   - Click "Add New University"
   - Enter university details
   - Upload logo

3. **Add Testimonials**
   - Go to `/admin/testimonials`
   - Click "Add New Testimonial"
   - Enter student review
   - Upload photo

---

## 🔧 Configuration

### Environment Variables

Your `.env` file contains:
```env
VITE_SUPABASE_URL=https://nrowebneeydlishwmdpf.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **Never commit `.env` to version control!**

### Supabase Dashboard Access

Access your database directly:
https://supabase.com/dashboard/project/nrowebneeydlishwmdpf

From here you can:
- View and edit tables
- Run SQL queries
- Monitor API usage
- Manage storage buckets
- View logs

---

## 📚 Documentation

### Essential Guides
- **[CMS_INTEGRATION_GUIDE.md](./CMS_INTEGRATION_GUIDE.md)** - Complete CMS documentation
- **[ADMIN_GUIDE.md](./ADMIN_GUIDE.md)** - Admin roles and security
- **[ADMIN_USER_MANAGEMENT_GUIDE.md](./ADMIN_USER_MANAGEMENT_GUIDE.md)** - User management

### Setup & Configuration
- **[SUPABASE_SETUP_GUIDE.md](./SUPABASE_SETUP_GUIDE.md)** - Supabase configuration
- **[DATABASE_MIGRATION_GUIDE.md](./DATABASE_MIGRATION_GUIDE.md)** - Database setup
- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Common issues and solutions

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build

# Configuration
npm run setup        # Interactive Supabase setup wizard
npm run check-env    # Verify Supabase configuration

# Testing
npm run lint         # Run ESLint
```

---

## 🎯 Common Tasks

### Change Admin Password

1. Go to Supabase Dashboard
2. Navigate to Table Editor → admin_users
3. Find your admin user
4. Update the password field (will be hashed on next login)

### Add New Admin User

1. Login as super admin
2. Go to `/admin/users`
3. Click "Add New Admin"
4. Fill in email, name, and role
5. User receives login credentials

### View Audit Logs

1. Login as admin
2. Go to `/admin` (dashboard)
3. Scroll to "Recent Admin Activity"
4. See all admin actions with timestamps

### Upload Images

1. Go to any content management page
2. Click "Add New" or "Edit"
3. Click "Upload Image" button
4. Select image file (max 5MB)
5. Image automatically uploaded to Supabase Storage

---

## 🚨 Troubleshooting

### Cannot Login to Admin Panel

**Solution:**
1. Verify admin account exists in `admin_users` table
2. Check `is_active = true` in database
3. Clear browser cache and cookies
4. Try different browser

### Content Not Showing

**Solution:**
1. Check Supabase connection status (footer badge)
2. Verify tables have data in Supabase dashboard
3. Check browser console for errors
4. Restart dev server

### Images Not Uploading

**Solution:**
1. Verify storage buckets exist in Supabase
2. Check bucket names: `signature-programs`, `partner-universities`, `testimonials`
3. Ensure buckets are set to PUBLIC
4. Check file size (max 5MB)

### Database Connection Failed

**Solution:**
1. Run `npm run check-env` to verify configuration
2. Check `.env` file has correct credentials
3. Verify project is not paused in Supabase dashboard
4. Restart dev server after changing `.env`

---

## 📞 Support

### Documentation
- Check the comprehensive guides in the project root
- Review [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues

### Supabase Resources
- Dashboard: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf
- Supabase Docs: https://supabase.com/docs
- Supabase Support: https://supabase.com/support

---

## 🎉 You're Ready!

Your Pathways Education Platform is fully configured and ready to use. Start by:

1. ✅ Exploring the public site
2. ✅ Logging into the admin panel
3. ✅ Adding your own content
4. ✅ Customizing the design
5. ✅ Deploying to production

Happy building! 🚀
