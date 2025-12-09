# Admin Access Control & Audit Logging Guide

**Project ID**: `nrowebneeydlishwmdpf`  
**Supabase Dashboard**: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf

## Overview
This guide explains the enhanced Row Level Security (RLS) policies with admin-only access controls and audit logging for the Pathways Education Platform.


## Admin Roles

### Role Hierarchy
1. **super_admin** - Full access to all operations including user management
2. **admin** - Can manage content (programs, universities, testimonials)
3. **editor** - Can create and edit content but cannot delete

## Admin Users Table

### Schema
```sql
admin_users (
  id uuid PRIMARY KEY,
  email text UNIQUE NOT NULL,
  role text CHECK (role IN ('super_admin', 'admin', 'editor')),
  full_name text,
  is_active boolean DEFAULT true,
  created_at timestamptz,
  updated_at timestamptz,
  created_by uuid REFERENCES admin_users(id),
  last_login_at timestamptz
)
```

### Creating Admin Users

**Via SQL (Super Admin Only):**
```sql
INSERT INTO public.admin_users (email, role, full_name, is_active)
VALUES ('newadmin@kcic.edu', 'admin', 'John Doe', true);
```

**Default Super Admin:**
- Email: `admin@kcic.edu`
- Role: `super_admin`
- Created during migration 011

## RLS Policies

### Signature Programs
- **SELECT**: Public (anyone can view)
- **INSERT/UPDATE**: Admins, Editors (requires active admin role)
- **DELETE**: Super Admins only

### Partner Universities
- **SELECT**: Public (anyone can view)
- **INSERT/UPDATE**: Admins, Editors (requires active admin role)
- **DELETE**: Super Admins only

### Testimonials
- **SELECT**: Public (anyone can view)
- **INSERT/UPDATE**: Admins, Editors (requires active admin role)
- **DELETE**: Super Admins only

### Admin Users
- **SELECT**: Users can view their own record only
- **INSERT/UPDATE/DELETE**: Super Admins only

## Audit Logging

### Audit Logs Table
All admin actions are automatically logged with:
- Admin email and role
- Action type (INSERT, UPDATE, DELETE)
- Table name and record ID
- Old and new data (JSONB)
- Timestamp

### Schema
```sql
audit_logs (
  id uuid PRIMARY KEY,
  admin_email text NOT NULL,
  admin_role text,
  action text CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')),
  table_name text NOT NULL,
  record_id uuid,
  old_data jsonb,
  new_data jsonb,
  ip_address inet,
  user_agent text,
  created_at timestamptz
)
```

### Viewing Audit Logs

**All logs (Super Admin):**
```sql
SELECT * FROM public.audit_logs
ORDER BY created_at DESC
LIMIT 100;
```

**Filter by table:**
```sql
SELECT * FROM public.audit_logs
WHERE table_name = 'signature_programs'
ORDER BY created_at DESC;
```

**Filter by admin:**
```sql
SELECT * FROM public.audit_logs
WHERE admin_email = 'admin@kcic.edu'
ORDER BY created_at DESC;
```

**View changes to specific record:**
```sql
SELECT * FROM public.audit_logs
WHERE record_id = 'your-uuid-here'
ORDER BY created_at DESC;
```

## Security Best Practices

1. **Principle of Least Privilege**: Assign the minimum role needed
2. **Regular Audits**: Review audit logs weekly
3. **Deactivate Instead of Delete**: Set `is_active = false` for former admins
4. **Monitor Failed Attempts**: Check for unauthorized access attempts
5. **Rotate Super Admins**: Limit number of super_admin accounts

## Migration Instructions

Run migrations in order:
```bash
# 1. Create admin_users table
supabase migration up 011_create_admin_users.sql

# 2. Create audit_logs table
supabase migration up 012_create_audit_logs.sql

# 3. Update RLS policies for programs and universities
supabase migration up 013_update_rls_policies.sql

# 4. Update RLS policies for testimonials and add triggers
supabase migration up 014_update_testimonials_rls.sql
```

## Testing Admin Access

### 1. Test Public Access (Should Work)
```javascript
const { data } = await supabase
  .from('signature_programs')
  .select('*');
```

### 2. Test Admin Insert (Should Fail Without Admin Role)
```javascript
const { error } = await supabase
  .from('signature_programs')
  .insert({ title: 'Test Program' });
// Error: new row violates row-level security policy
```

### 3. Test Admin Insert (Should Work With Admin Role)
```javascript
// After authenticating as admin@kcic.edu
const { data, error } = await supabase
  .from('signature_programs')
  .insert({ title: 'Test Program' });
// Success + audit log created
```

## Troubleshooting

### "Row-level security policy violated"
- Ensure user is authenticated
- Verify user email exists in admin_users table
- Check is_active = true
- Confirm role has required permissions

### Audit logs not appearing
- Check triggers are created: `\d+ signature_programs`
- Verify log_admin_action() function exists
- Ensure auth.email() returns valid email

### Cannot create admin users
- Only super_admins can create admin users
- Verify you're authenticated as super admin
- Check admin_users RLS policies

## Support
For issues or questions, contact the platform administrator.
