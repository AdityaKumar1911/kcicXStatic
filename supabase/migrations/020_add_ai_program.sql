-- Insert BEng (Hons) Artificial Intelligence with Placement program
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
  'BEng (Hons) Artificial Intelligence with Placement',
  'KCIC, ECR Campus',
  'UK University Campus',
  'Trending',
  'Top UK Universities',
  'Leading UK Universities',
  'beng-hons-artificial-intelligence-with-placement',
  'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763041132227_afffa31c.webp',
  'Shape the future with AI innovation',
  'Lead the AI revolution with industry placement',
  ARRAY['University of Hertfordshire', 'Coventry University', 'De Montfort University'],
  '£34,000 - £37,000',
  ARRAY['Concentrix', 'IBM', 'Apple', 'Google', 'SAP', 'Synopsys', 'Salesforce', 'Liberty IT', 'Cisco'],
  2
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  study_in_india = EXCLUDED.study_in_india,
  study_abroad = EXCLUDED.study_abroad,
  course_tag = EXCLUDED.course_tag,
  average_salary = EXCLUDED.average_salary,
  potential_recruiters = EXCLUDED.potential_recruiters,
  display_order = EXCLUDED.display_order;
