-- Create audit_logs table for tracking all admin actions
create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  admin_email text not null,
  admin_role text,
  action text not null check (action in ('INSERT', 'UPDATE', 'DELETE')),
  table_name text not null,
  record_id uuid,
  old_data jsonb,
  new_data jsonb,
  ip_address inet,
  user_agent text,
  created_at timestamptz default now()
);

-- Add indexes for querying audit logs
create index idx_audit_logs_admin_email on public.audit_logs(admin_email);
create index idx_audit_logs_table_name on public.audit_logs(table_name);
create index idx_audit_logs_action on public.audit_logs(action);
create index idx_audit_logs_created_at on public.audit_logs(created_at desc);
create index idx_audit_logs_record_id on public.audit_logs(record_id);

-- Enable RLS
alter table public.audit_logs enable row level security;

-- RLS Policies for audit_logs
-- Only admins can view audit logs
create policy "Admins can view audit logs"
  on public.audit_logs for select
  using (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and is_active = true
    )
  );

-- Super admins can view all audit logs, regular admins only their own
create policy "Admins view their own logs, super admins view all"
  on public.audit_logs for select
  using (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and is_active = true
      and (role = 'super_admin' or admin_email = auth.email())
    )
  );

-- No one can manually insert/update/delete audit logs (only triggers)
-- Service role can insert via triggers

-- Helper function to log admin actions
create or replace function log_admin_action()
returns trigger as $$
declare
  admin_role_val text;
begin
  -- Get admin role
  select role into admin_role_val
  from public.admin_users
  where email = auth.email() and is_active = true;

  if TG_OP = 'DELETE' then
    insert into public.audit_logs (
      admin_email, admin_role, action, table_name, record_id, old_data
    ) values (
      auth.email(), admin_role_val, 'DELETE', TG_TABLE_NAME, old.id, to_jsonb(old)
    );
    return old;
  elsif TG_OP = 'UPDATE' then
    insert into public.audit_logs (
      admin_email, admin_role, action, table_name, record_id, old_data, new_data
    ) values (
      auth.email(), admin_role_val, 'UPDATE', TG_TABLE_NAME, new.id, to_jsonb(old), to_jsonb(new)
    );
    return new;
  elsif TG_OP = 'INSERT' then
    insert into public.audit_logs (
      admin_email, admin_role, action, table_name, record_id, new_data
    ) values (
      auth.email(), admin_role_val, 'INSERT', TG_TABLE_NAME, new.id, to_jsonb(new)
    );
    return new;
  end if;
  return null;
end;
$$ language plpgsql security definer;
