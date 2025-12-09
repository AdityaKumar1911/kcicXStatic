-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded', 'archived')),
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contact_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submitted_at ON contact_submissions(submitted_at DESC);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a contact form
CREATE POLICY "Anyone can submit contact" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Admins can view all submissions
CREATE POLICY "Admins can view contacts" ON contact_submissions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_email = auth.jwt() ->> 'email'
    )
  );

-- Admins can update submissions
CREATE POLICY "Admins can update contacts" ON contact_submissions
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_email = auth.jwt() ->> 'email'
    )
  );
