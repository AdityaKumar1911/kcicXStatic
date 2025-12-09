-- Create campuses table
CREATE TABLE IF NOT EXISTS campuses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('main', 'satellite')),
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  country TEXT NOT NULL,
  address TEXT NOT NULL,
  hero_image_url TEXT NOT NULL,
  gallery TEXT[] DEFAULT '{}',
  highlights TEXT[] DEFAULT '{}',
  facilities TEXT[] DEFAULT '{}',
  contact_phone TEXT,
  contact_email TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE campuses ENABLE ROW LEVEL SECURITY;

-- Public read policy
CREATE POLICY "Campuses are viewable by everyone"
  ON campuses FOR SELECT
  USING (is_active = true);

-- Admin policies
CREATE POLICY "Admins can insert campuses"
  ON campuses FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.jwt() ->> 'email'
      AND is_active = true
    )
  );

CREATE POLICY "Admins can update campuses"
  ON campuses FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.jwt() ->> 'email'
      AND is_active = true
    )
  );

CREATE POLICY "Admins can delete campuses"
  ON campuses FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE email = auth.jwt() ->> 'email'
      AND is_active = true
    )
  );

-- Create indexes
CREATE INDEX idx_campuses_active ON campuses(is_active);
CREATE INDEX idx_campuses_slug ON campuses(slug);
CREATE INDEX idx_campuses_display_order ON campuses(display_order);
