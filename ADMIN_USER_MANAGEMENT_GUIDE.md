# Admin User Management Guide

**Project ID**: `nrowebneeydlishwmdpf`  
**Supabase Dashboard**: https://supabase.com/dashboard/project/nrowebneeydlishwmdpf

## Overview

The Admin User Management system allows **super admins** to manage all admin accounts, including creating new admins, editing roles, and deactivating users. This feature is restricted to users with the `super_admin` role for security purposes.


## Access

- **URL**: `/admin/users`
- **Permission Required**: `super_admin` role only
- **Navigation**: Available in the admin panel navigation bar (only visible to super admins)

## Features

### 1. View All Admin Users

The main page displays a comprehensive table with:
- Email address
- Full name
- Role (with icon badges)
- Active/Inactive status
- Last login date
- Account creation date
- Action buttons

### 2. Search and Filter

**Search Bar**
- Search by email or full name
- Real-time filtering as you type

**Role Filter**
- All Roles
- Super Admin
- Admin
- Editor

**Status Filter**
- All Status
- Active
- Inactive

### 3. Create New Admin User

1. Click the "Add Admin User" button
2. Fill in the form:
   - **Email**: Must be a valid email (required)
   - **Full Name**: User's full name (required)
   - **Role**: Select from Editor, Admin, or Super Admin
3. Click "Save"

**Note**: The email cannot be changed after creation.

### 4. Edit Admin User

1. Click the Edit (pencil) icon next to a user
2. Modify:
   - Full Name
   - Role
3. Click "Save"

**Restrictions**:
- Cannot edit your own account
- Email cannot be changed

### 5. Deactivate/Activate User

1. Click the Deactivate (UserX) icon next to a user
2. Confirm the action in the dialog
3. User status will toggle between Active/Inactive

**Effects of Deactivation**:
- User cannot log in to the admin panel
- User's RLS policies will deny access
- User remains in the database for audit purposes

**Restrictions**:
- Cannot deactivate your own account

## Role Hierarchy

### Super Admin (Highest Level)
- **Icon**: Red shield with alert
- **Permissions**:
  - All admin and editor permissions
  - Manage admin users (create, edit, deactivate)
  - View audit logs
  - Full database access

### Admin (Mid Level)
- **Icon**: Blue shield with check
- **Permissions**:
  - All editor permissions
  - Delete content (signature programs, universities, testimonials)
  - Moderate testimonials
  - View basic statistics

### Editor (Base Level)
- **Icon**: Gray shield
- **Permissions**:
  - Create and edit content
  - View content
  - Cannot delete content
  - Cannot manage users

## Security Features

### Row Level Security (RLS)
All admin operations are protected by RLS policies that:
- Verify the user is authenticated
- Check the user has an active admin_users record
- Validate role permissions for specific actions

### Audit Logging
All admin actions are automatically logged:
- User creation
- Role changes
- User deactivation/activation
- Content modifications

View audit logs on the Admin Dashboard.

## Best Practices

### Creating Admin Accounts

1. **Use work emails**: Create accounts with official organization emails
2. **Start with Editor role**: Grant minimum necessary permissions
3. **Verify email**: Ensure the email is correct before creating
4. **Document purpose**: Keep notes on why each admin account was created

### Role Assignment

1. **Editor for content managers**: Users who only need to update content
2. **Admin for moderators**: Users who need to delete content and moderate
3. **Super Admin sparingly**: Only for IT/platform administrators

### Account Maintenance

1. **Regular audits**: Review admin users quarterly
2. **Deactivate unused accounts**: Disable accounts that haven't logged in for 90+ days
3. **Update roles**: Adjust permissions as responsibilities change
4. **Monitor audit logs**: Check for suspicious activity

## Troubleshooting

### Cannot Access /admin/users
- **Cause**: You don't have super_admin role
- **Solution**: Contact an existing super admin to upgrade your role

### Cannot Create User
- **Error**: "User already exists"
  - **Solution**: Email is already in admin_users table
- **Error**: "RLS policy violation"
  - **Solution**: Verify you're logged in as super_admin

### User Cannot Log In After Creation
- **Cause**: User hasn't created a Supabase auth account yet
- **Solution**: User must sign up at `/admin/login` with the same email

### Changes Not Saving
- **Cause**: RLS policy blocking the operation
- **Solution**: Check your role permissions and active status

## Database Schema

### admin_users Table

```sql
id                UUID PRIMARY KEY
email             TEXT UNIQUE NOT NULL
full_name         TEXT
role              TEXT CHECK (role IN ('super_admin', 'admin', 'editor'))
is_active         BOOLEAN DEFAULT true
last_login_at     TIMESTAMPTZ
created_at        TIMESTAMPTZ DEFAULT now()
updated_at        TIMESTAMPTZ DEFAULT now()
```

### RLS Policies

- **SELECT**: Any authenticated user with active admin record
- **INSERT**: Only super_admins
- **UPDATE**: Only super_admins
- **DELETE**: Disabled (use is_active instead)

## API Reference

### Fetch All Admin Users

```typescript
const { data, error } = await supabase
  .from('admin_users')
  .select('*')
  .order('created_at', { ascending: false });
```

### Create Admin User

```typescript
const { error } = await supabase
  .from('admin_users')
  .insert([{
    email: 'newadmin@example.com',
    full_name: 'John Doe',
    role: 'editor',
  }]);
```

### Update Admin User

```typescript
const { error } = await supabase
  .from('admin_users')
  .update({
    full_name: 'Jane Doe',
    role: 'admin',
    updated_at: new Date().toISOString(),
  })
  .eq('id', userId);
```

### Toggle Active Status

```typescript
const { error } = await supabase
  .from('admin_users')
  .update({ is_active: false })
  .eq('id', userId);
```

## Related Documentation

- [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) - Complete admin system overview
- [ADMIN_PANEL_GUIDE.md](./ADMIN_PANEL_GUIDE.md) - Frontend integration guide
- [DATABASE_AUDIT_GUIDE.md](./DATABASE_AUDIT_GUIDE.md) - Database security and auditing

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review audit logs for error details
3. Verify RLS policies in Supabase dashboard
4. Contact your platform administrator
