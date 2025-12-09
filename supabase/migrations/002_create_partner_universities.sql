-- Create partner_universities table
CREATE TABLE IF NOT EXISTS partner_universities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  qs_rank INTEGER,
  logo_url TEXT NOT NULL,
  summary TEXT NOT NULL,
  description TEXT NOT NULL,
  fees_per_year TEXT NOT NULL,
  scholarship_range TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE partner_universities ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read
CREATE POLICY "Anyone can view partner universities"
  ON partner_universities FOR SELECT USING (true);

-- Policy: Authenticated users can insert
CREATE POLICY "Authenticated users can insert partner universities"
  ON partner_universities FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Policy: Authenticated users can update
CREATE POLICY "Authenticated users can update partner universities"
  ON partner_universities FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Policy: Authenticated users can delete
CREATE POLICY "Authenticated users can delete partner universities"
  ON partner_universities FOR DELETE
  USING (auth.role() = 'authenticated');

-- Create indexes
CREATE INDEX idx_partner_universities_order ON partner_universities(display_order);
CREATE INDEX idx_partner_universities_slug ON partner_universities(slug);
