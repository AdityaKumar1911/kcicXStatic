-- Add average_salary and potential_recruiters columns to signature_programs table
ALTER TABLE signature_programs 
ADD COLUMN IF NOT EXISTS average_salary TEXT,
ADD COLUMN IF NOT EXISTS potential_recruiters TEXT[];

-- Add comment for documentation
COMMENT ON COLUMN signature_programs.average_salary IS 'Average salary range for graduates of this program';
COMMENT ON COLUMN signature_programs.potential_recruiters IS 'Array of potential employer names';
