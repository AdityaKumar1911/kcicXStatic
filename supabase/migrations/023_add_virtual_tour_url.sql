-- Add virtual_tour_url column to partner_universities table
ALTER TABLE partner_universities ADD COLUMN IF NOT EXISTS virtual_tour_url TEXT;

-- Add comment for documentation
COMMENT ON COLUMN partner_universities.virtual_tour_url IS 'YouTube video URL for virtual campus tour';
