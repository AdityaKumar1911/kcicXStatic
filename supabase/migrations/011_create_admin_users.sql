-- Create admin_users table with role management
create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  role text not null check (role in ('super_admin', 'admin', 'editor')),
  full_name text,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by uuid references public.admin_users(id),
  last_login_at timestamptz
);

-- Add indexes for performance
create index idx_admin_users_email on public.admin_users(email);
create index idx_admin_users_role on public.admin_users(role);
create index idx_admin_users_is_active on public.admin_users(is_active);

-- Enable RLS
alter table public.admin_users enable row level security;

-- RLS Policies for admin_users
-- Only authenticated users can read their own record
create policy "Users can view their own admin record"
  on public.admin_users for select
  using (auth.email() = email and is_active = true);

-- Only super_admins can insert new admins
create policy "Super admins can create admin users"
  on public.admin_users for insert
  with check (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and role = 'super_admin'
      and is_active = true
    )
  );

-- Only super_admins can update admin users
create policy "Super admins can update admin users"
  on public.admin_users for update
  using (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and role = 'super_admin'
      and is_active = true
    )
  );

-- Only super_admins can delete (deactivate) admin users
create policy "Super admins can delete admin users"
  on public.admin_users for delete
  using (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and role = 'super_admin'
      and is_active = true
    )
  );

-- Auto-update updated_at timestamp
create or replace function update_admin_users_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger admin_users_updated_at
  before update on public.admin_users
  for each row
  execute function update_admin_users_updated_at();

-- Seed initial super admin (update email as needed)
insert into public.admin_users (email, role, full_name, is_active)
values ('admin@kcic.edu', 'super_admin', 'System Administrator', true)
on conflict (email) do nothing;
