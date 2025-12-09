-- Add performance indexes and triggers
-- Run after initial setup

-- Add slug index to signature_programs for faster lookups
CREATE INDEX IF NOT EXISTS idx_signature_programs_slug 
ON signature_programs(slug);

-- Add country index for filtering universities by country
CREATE INDEX IF NOT EXISTS idx_partner_universities_country 
ON partner_universities(country);

-- Add year index for filtering testimonials by year
CREATE INDEX IF NOT EXISTS idx_testimonials_year 
ON testimonials(year);

-- Add unique constraint to signature_programs slug
ALTER TABLE signature_programs 
ADD CONSTRAINT IF NOT EXISTS unique_signature_programs_slug UNIQUE (slug);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to signature_programs
DROP TRIGGER IF EXISTS update_signature_programs_updated_at ON signature_programs;
CREATE TRIGGER update_signature_programs_updated_at 
BEFORE UPDATE ON signature_programs
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Apply trigger to partner_universities
DROP TRIGGER IF EXISTS update_partner_universities_updated_at ON partner_universities;
CREATE TRIGGER update_partner_universities_updated_at 
BEFORE UPDATE ON partner_universities
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Apply trigger to testimonials
DROP TRIGGER IF EXISTS update_testimonials_updated_at ON testimonials;
CREATE TRIGGER update_testimonials_updated_at 
BEFORE UPDATE ON testimonials
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
