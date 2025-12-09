-- Update RLS policies for signature_programs to check admin role
-- Drop existing policies
drop policy if exists "Anyone can view signature programs" on public.signature_programs;
drop policy if exists "Authenticated users can insert signature programs" on public.signature_programs;
drop policy if exists "Authenticated users can update signature programs" on public.signature_programs;
drop policy if exists "Authenticated users can delete signature programs" on public.signature_programs;

-- New admin-only policies for signature_programs
create policy "Anyone can view signature programs"
  on public.signature_programs for select
  using (true);

create policy "Only admins can insert signature programs"
  on public.signature_programs for insert
  with check (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and is_active = true
      and role in ('super_admin', 'admin', 'editor')
    )
  );

create policy "Only admins can update signature programs"
  on public.signature_programs for update
  using (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and is_active = true
      and role in ('super_admin', 'admin', 'editor')
    )
  );

create policy "Only super admins can delete signature programs"
  on public.signature_programs for delete
  using (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and is_active = true
      and role = 'super_admin'
    )
  );

-- Update RLS policies for partner_universities
drop policy if exists "Anyone can view partner universities" on public.partner_universities;
drop policy if exists "Authenticated users can insert partner universities" on public.partner_universities;
drop policy if exists "Authenticated users can update partner universities" on public.partner_universities;
drop policy if exists "Authenticated users can delete partner universities" on public.partner_universities;

create policy "Anyone can view partner universities"
  on public.partner_universities for select
  using (true);

create policy "Only admins can insert partner universities"
  on public.partner_universities for insert
  with check (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and is_active = true
      and role in ('super_admin', 'admin', 'editor')
    )
  );

create policy "Only admins can update partner universities"
  on public.partner_universities for update
  using (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and is_active = true
      and role in ('super_admin', 'admin', 'editor')
    )
  );

create policy "Only super admins can delete partner universities"
  on public.partner_universities for delete
  using (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and is_active = true
      and role = 'super_admin'
    )
  );
