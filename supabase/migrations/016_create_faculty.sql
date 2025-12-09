-- Create faculty table
CREATE TABLE IF NOT EXISTS faculty (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  image TEXT NOT NULL,
  credentials TEXT NOT NULL,
  specialization TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE faculty ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Faculty are viewable by everyone"
  ON faculty FOR SELECT
  USING (is_active = true);

-- Admin policies
CREATE POLICY "Admins can insert faculty"
  ON faculty FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.jwt() ->> 'email'
      AND is_active = true
    )
  );

CREATE POLICY "Admins can update faculty"
  ON faculty FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.jwt() ->> 'email'
      AND is_active = true
    )
  );

CREATE POLICY "Admins can delete faculty"
  ON faculty FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.jwt() ->> 'email'
      AND is_active = true
    )
  );

-- Create index
CREATE INDEX idx_faculty_active ON faculty(is_active);
CREATE INDEX idx_faculty_display_order ON faculty(display_order);
