-- Create signature_programs table
CREATE TABLE IF NOT EXISTS signature_programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  study_in_india TEXT NOT NULL,
  study_abroad TEXT NOT NULL,
  course_tag TEXT NOT NULL,
  acceptance TEXT NOT NULL,
  designed_by TEXT NOT NULL,
  slug TEXT NOT NULL,
  banner_image TEXT NOT NULL,
  overlay_text TEXT NOT NULL,
  tagline TEXT NOT NULL,
  partner_universities TEXT[] DEFAULT '{}',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE signature_programs ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read
CREATE POLICY "Anyone can view signature programs"
  ON signature_programs FOR SELECT USING (true);

-- Policy: Authenticated users can insert
CREATE POLICY "Authenticated users can insert signature programs"
  ON signature_programs FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Policy: Authenticated users can update
CREATE POLICY "Authenticated users can update signature programs"
  ON signature_programs FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Policy: Authenticated users can delete
CREATE POLICY "Authenticated users can delete signature programs"
  ON signature_programs FOR DELETE
  USING (auth.role() = 'authenticated');

-- Create index
CREATE INDEX idx_signature_programs_order ON signature_programs(display_order);
