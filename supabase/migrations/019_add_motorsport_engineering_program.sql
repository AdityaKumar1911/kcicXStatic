-- First ensure the columns exist
ALTER TABLE signature_programs 
ADD COLUMN IF NOT EXISTS average_salary TEXT,
ADD COLUMN IF NOT EXISTS potential_recruiters TEXT[];

-- Insert BEng (Hons) Motorsport Engineering program
INSERT INTO signature_programs (
  name,
  study_in_india,
  study_abroad,
  course_tag,
  acceptance,
  designed_by,
  slug,
  banner_image,
  overlay_text,
  tagline,
  partner_universities,
  average_salary,
  potential_recruiters,
  display_order
) VALUES (
  'BEng (Hons) Motorsport Engineering',
  'KCIC, ECR Campus',
  'UK',
  'High Demand',
  'Top UK Universities',
  'UK Engineering Council',
  'beng-hons-motorsport-engineering',
  'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763040892322_14aacdb3.webp',
  'Build the future of racing technology',
  'Engineer the next generation of motorsport excellence',
  ARRAY['Coventry University', 'University of Hertfordshire', 'Oxford Brookes University'],
  '£32,000 - £35,000',
  ARRAY['Williams Engineering', 'Aston Martin', 'VW Racing', 'Landrover Jaguar', 'BMW'],
  1
)
ON CONFLICT (slug) DO UPDATE SET
  average_salary = EXCLUDED.average_salary,
  potential_recruiters = EXCLUDED.potential_recruiters;
