-- Update RLS policies for testimonials
drop policy if exists "Anyone can view testimonials" on public.testimonials;
drop policy if exists "Authenticated users can insert testimonials" on public.testimonials;
drop policy if exists "Authenticated users can update testimonials" on public.testimonials;
drop policy if exists "Authenticated users can delete testimonials" on public.testimonials;

create policy "Anyone can view testimonials"
  on public.testimonials for select
  using (true);

create policy "Only admins can insert testimonials"
  on public.testimonials for insert
  with check (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and is_active = true
      and role in ('super_admin', 'admin', 'editor')
    )
  );

create policy "Only admins can update testimonials"
  on public.testimonials for update
  using (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and is_active = true
      and role in ('super_admin', 'admin', 'editor')
    )
  );

create policy "Only super admins can delete testimonials"
  on public.testimonials for delete
  using (
    exists (
      select 1 from public.admin_users
      where email = auth.email()
      and is_active = true
      and role = 'super_admin'
    )
  );

-- Add audit triggers to all three tables
create trigger signature_programs_audit_trigger
  after insert or update or delete on public.signature_programs
  for each row execute function log_admin_action();

create trigger partner_universities_audit_trigger
  after insert or update or delete on public.partner_universities
  for each row execute function log_admin_action();

create trigger testimonials_audit_trigger
  after insert or update or delete on public.testimonials
  for each row execute function log_admin_action();
