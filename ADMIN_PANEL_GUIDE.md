# Admin Panel Implementation Guide

## Frontend Integration

### 1. Admin Authentication Hook

Create `src/hooks/useAdminAuth.ts`:
```typescript
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function useAdminAuth() {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAdmin();
  }, []);

  async function checkAdmin() {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      const { data } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', user.email)
        .eq('is_active', true)
        .single();
      
      setAdmin(data);
    }
    setLoading(false);
  }

  return { admin, loading, isAdmin: !!admin, isSuperAdmin: admin?.role === 'super_admin' };
}
```

### 2. Protected Admin Route

Create `src/components/ProtectedAdminRoute.tsx`:
```typescript
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '@/hooks/useAdminAuth';

export function ProtectedAdminRoute({ children }) {
  const { admin, loading } = useAdminAuth();

  if (loading) return <div>Loading...</div>;
  if (!admin) return <Navigate to="/admin/login" />;

  return children;
}
```

### 3. Admin Login Page

```typescript
// src/pages/AdminLogin.tsx
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';

export function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
      // Verify admin status
      const { data } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .eq('is_active', true)
        .single();

      if (data) {
        // Update last_login_at
        await supabase
          .from('admin_users')
          .update({ last_login_at: new Date().toISOString() })
          .eq('id', data.id);

        navigate('/admin/dashboard');
      } else {
        alert('Not authorized as admin');
      }
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Admin Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

### 4. Audit Log Viewer

```typescript
// src/pages/AdminAuditLogs.tsx
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function AdminAuditLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    loadLogs();
  }, []);

  async function loadLogs() {
    const { data } = await supabase
      .from('audit_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    setLogs(data || []);
  }

  return (
    <div>
      <h1>Audit Logs</h1>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Admin</th>
            <th>Action</th>
            <th>Table</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{new Date(log.created_at).toLocaleString()}</td>
              <td>{log.admin_email}</td>
              <td>{log.action}</td>
              <td>{log.table_name}</td>
              <td>
                <button onClick={() => console.log(log)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## API Examples

### Check if User is Admin
```typescript
async function checkAdminStatus(email: string) {
  const { data, error } = await supabase
    .from('admin_users')
    .select('role, is_active')
    .eq('email', email)
    .eq('is_active', true)
    .single();

  return data;
}
```

### Create New Admin (Super Admin Only)
```typescript
async function createAdmin(email: string, role: string, fullName: string) {
  const { data, error } = await supabase
    .from('admin_users')
    .insert({
      email,
      role,
      full_name: fullName,
      is_active: true
    })
    .select()
    .single();

  return { data, error };
}
```

### Deactivate Admin
```typescript
async function deactivateAdmin(adminId: string) {
  const { error } = await supabase
    .from('admin_users')
    .update({ is_active: false })
    .eq('id', adminId);

  return { error };
}
```

## Security Checklist

- [ ] All admin routes protected with ProtectedAdminRoute
- [ ] Admin authentication verified on page load
- [ ] Sensitive operations require role check
- [ ] Audit logs reviewed regularly
- [ ] Failed login attempts monitored
- [ ] Admin sessions timeout after inactivity
- [ ] HTTPS enforced in production
- [ ] Email verification enabled for admin accounts

## Next Steps

1. Run migrations 011-014
2. Create admin user via SQL
3. Set up Supabase Auth (enable email/password)
4. Implement admin login page
5. Add protected admin routes
6. Build admin dashboard
7. Test RLS policies
8. Monitor audit logs
