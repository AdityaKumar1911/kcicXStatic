# Pathways Education Platform

**Status**: 🟢 Database Connected & Validated  
**Project ID**: `nrowebneeydlishwmdpf`  
**Dashboard**: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf

> ✅ **Database Ready**: TypeScript types generated, schema validated, performance optimized
> 
> ✅ **CMS Integrated**: Full admin panel with role-based access control
>
> **Quick Start**: See [CMS_INTEGRATION_GUIDE.md](./CMS_INTEGRATION_GUIDE.md) for complete setup

---

A comprehensive educational platform connecting students with international university pathways and signature programs.

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Set up Supabase connection (Choose ONE method):**

#### Option A: Interactive Setup Wizard (Easiest)
```bash
npm run setup
```
Follow the prompts to enter your Supabase credentials.

#### Option B: Automatic Validation
```bash
# 1. Edit the .env file with your credentials
# 2. Verify your configuration
npm run check-env
```

#### Option C: Manual Setup
```bash
# 1. Open .env file in your editor
# 2. Replace placeholder values with your Supabase credentials
# 3. Get credentials from: https://supabase.com → Settings → API
```

📖 **Need detailed help?** See [SETUP_ENV.md](./SETUP_ENV.md) for step-by-step visual guide

3. **Verify connection:**
```bash
npm run check-env
```

4. **Run database migrations** (see [DATABASE_MIGRATION_GUIDE.md](./DATABASE_MIGRATION_GUIDE.md))

5. **Start development server:**
```bash
npm run dev
```

6. **Check connection status:**
   - Look for green "Connected" badge in the footer
   - If you see "Not Connected", check [SUPABASE_CONNECTION_STATUS.md](./SUPABASE_CONNECTION_STATUS.md)


## 📚 Documentation

### CMS & Admin
- **[CMS_INTEGRATION_GUIDE.md](./CMS_INTEGRATION_GUIDE.md)** - 🆕 Complete CMS integration guide
- **[ADMIN_GUIDE.md](./ADMIN_GUIDE.md)** - 🆕 Admin roles, RLS policies, and audit logging
- **[ADMIN_USER_MANAGEMENT_GUIDE.md](./ADMIN_USER_MANAGEMENT_GUIDE.md)** - 🆕 User management guide
- **[ADMIN_PANEL_GUIDE.md](./ADMIN_PANEL_GUIDE.md)** - Admin panel usage instructions

### Setup Guides
- **[GETTING_STARTED.md](./GETTING_STARTED.md)** - 🆕 Beginner-friendly getting started guide
- **[SETUP_ENV.md](./SETUP_ENV.md)** - 🆕 Visual step-by-step guide for .env setup
- **[setup-guide.html](./setup-guide.html)** - 🆕 Interactive HTML guide (open in browser)
- **[QUICK_START.md](./QUICK_START.md)** - 🆕 5-minute database validation guide
- **[SUPABASE_SETUP_GUIDE.md](./SUPABASE_SETUP_GUIDE.md)** - Complete Supabase setup instructions
- **[SUPABASE_CONNECTION_STATUS.md](./SUPABASE_CONNECTION_STATUS.md)** - Troubleshooting connection issues
- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - 🆕 Comprehensive troubleshooting guide

### Database & Validation
- **[DATABASE_AUDIT_GUIDE.md](./DATABASE_AUDIT_GUIDE.md)** - 🆕 Complete database audit & validation
- **[PERFORMANCE_REPORT.md](./PERFORMANCE_REPORT.md)** - 🆕 Performance analysis & recommendations
- **[DATABASE_MIGRATION_GUIDE.md](./DATABASE_MIGRATION_GUIDE.md)** - Database schema and migrations
- **[scripts/database-audit.sql](./scripts/database-audit.sql)** - 🆕 SQL audit queries
- **[src/types/supabase.ts](./src/types/supabase.ts)** - 🆕 Generated TypeScript types


## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run setup        # 🆕 Interactive Supabase setup wizard
npm run check-env    # 🆕 Verify Supabase configuration
```


## 🔑 Admin Access & CMS

Access the Content Management System (CMS) at `/admin/login`

**Default Super Admin Credentials:**
- Email: `admin@kcic.edu`
- Password: `admin123`

**Legacy Admin Account (also available):**
- Email: `admin@pathways.edu`
- Password: `admin123`

⚠️ **Important**: Change these credentials in production!

📖 **Full CMS Guide**: See [CMS_INTEGRATION_GUIDE.md](./CMS_INTEGRATION_GUIDE.md)


## ✨ Features

### Public Features
- 🎓 Signature Programs Directory
- 🏛️ Partner Universities Showcase
- 💬 Student Testimonials & Reviews
- 👨‍🏫 Faculty & Tutor Profiles
- 🏫 Campus Locations
- 📝 Program Applications

### Admin CMS Features
- 🔐 Role-Based Access Control (Super Admin, Admin, Editor)
- 📊 Dashboard with Statistics & Analytics
- 🖼️ Image Upload to Supabase Storage
- 👥 Admin User Management (Super Admin only)
- 📝 Content Management (Programs, Universities, Testimonials)
- 🔍 Audit Logging for all admin actions
- 🔒 Row Level Security (RLS) on all database operations


## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL, Storage, Auth)
- **Routing**: React Router v6
- **State**: React Context API
- **Forms**: React Hook Form + Zod

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── admin/        # Admin panel components
│   └── ui/           # shadcn/ui components
├── pages/            # Page components
├── data/             # Mock data (fallback)
├── contexts/         # React contexts
├── lib/              # Utilities (Supabase client)
├── hooks/            # Custom hooks
└── types/            # TypeScript types

supabase/
└── migrations/       # SQL migration files
```

## 🔒 Security

### Database Security
- **Row Level Security (RLS)** enabled on all tables
- **Admin-only write access** - Content management requires verified admin role
- **Public read access** for published content
- **Role-based permissions** (Super Admin, Admin, Editor)

### Authentication & Authorization
- Secure admin authentication system
- Session management with Supabase Auth
- Role verification on every request
- Admin user table separate from public users

### Audit & Compliance
- **Comprehensive audit logging** - All admin actions tracked
- **Audit logs table** with user, action, timestamp, and changes
- **Immutable logs** - Cannot be modified or deleted
- **Admin activity monitoring** - Track who changed what and when

### Storage Security
- Secure image upload to Supabase Storage
- Public buckets for read access only
- Upload restricted to authenticated admins
- File size and type validation

## 🚢 Deployment

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

## 📝 License

MIT License - feel free to use for your projects!
