-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  image TEXT NOT NULL,
  program TEXT NOT NULL,
  transferred_to TEXT NOT NULL,
  country TEXT NOT NULL,
  quote TEXT NOT NULL,
  year TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read approved testimonials
CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  USING (status = 'approved');

-- Policy: Authenticated users can view all
CREATE POLICY "Authenticated users can view all testimonials"
  ON testimonials FOR SELECT
  USING (auth.role() = 'authenticated');

-- Policy: Authenticated users can insert
CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Policy: Authenticated users can update
CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Policy: Authenticated users can delete
CREATE POLICY "Authenticated users can delete testimonials"
  ON testimonials FOR DELETE
  USING (auth.role() = 'authenticated');

-- Create indexes
CREATE INDEX idx_testimonials_status ON testimonials(status);
CREATE INDEX idx_testimonials_order ON testimonials(display_order);
