import { SpecialtyProgram } from './specialtyPrograms';

export const biomedicalScience: SpecialtyProgram = {
  slug: 'biomedical-science',
  title: 'BSc (Hons) Biomedical Science',
  subtitle: 'Advance medical research and diagnostic science',
  tag: 'High Demand',
  duration: '3 years | 1 year in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763054615192_d6c777b7.webp',
  modules: [
    { title: 'Clinical Biochemistry', desc: 'Study metabolic processes and disease markers', icon: 'FlaskConical' },
    { title: 'Medical Microbiology', desc: 'Explore pathogens and infectious diseases', icon: 'Bug' },
    { title: 'Haematology', desc: 'Learn blood disorders and diagnostic techniques', icon: 'Droplet' },
    { title: 'Immunology', desc: 'Understand immune system and autoimmune diseases', icon: 'Shield' },
    { title: 'Molecular Biology', desc: 'Master DNA analysis and genetic testing', icon: 'Dna' },
    { title: 'Pathology', desc: 'Study disease mechanisms and diagnostic methods', icon: 'Microscope' },
  ],
  careers: [
    { title: 'Biomedical Scientist', salary: '£28,000 - £55,000', companies: 'NHS, Private Labs, Hospitals' },
    { title: 'Clinical Researcher', salary: '£32,000 - £60,000', companies: 'Universities, Pharma Companies' },
    { title: 'Medical Lab Scientist', salary: '£30,000 - £50,000', companies: 'Diagnostic Labs, Research Centers' },
    { title: 'Quality Control Analyst', salary: '£28,000 - £48,000', companies: 'Pharmaceutical Industry' },
  ],
  requirements: [
    'A-Levels: BBB including Biology and Chemistry',
    'IELTS: 6.5 overall (minimum 6.0 in each component)',
    'Strong science background',
    'Interest in healthcare and research',
  ],
  whyKCIC: ['IBMS accredited program', 'Lab placements in NHS hospitals', 'Research project opportunities', 'Industry connections'],
  faqs: [
    { q: 'Is this IBMS accredited?', a: 'Yes, accredited by Institute of Biomedical Science for professional registration as a Biomedical Scientist.' },
    { q: 'What labs do you have?', a: 'State-of-the-art labs with modern diagnostic equipment, PCR machines, and research facilities.' },
  ],
};

export const accounting: SpecialtyProgram = {
  slug: 'accounting',
  title: 'BSc (Hons) Professional Accounting with ACCA',
  subtitle: 'Fast-track your career with ACCA exemptions',
  tag: 'Professional Qualification',
  duration: '3 years | 1 year in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763054618149_59a3bf84.webp',
  modules: [
    { title: 'Financial Accounting', desc: 'Master financial reporting and statements', icon: 'FileText' },
    { title: 'Management Accounting', desc: 'Learn cost analysis and budgeting', icon: 'Calculator' },
    { title: 'Taxation', desc: 'Study UK and international tax systems', icon: 'Receipt' },
    { title: 'Audit & Assurance', desc: 'Understand audit processes and compliance', icon: 'ClipboardCheck' },
    { title: 'Corporate Finance', desc: 'Explore investment and financial strategy', icon: 'TrendingUp' },
    { title: 'Business Law', desc: 'Learn legal frameworks for business', icon: 'Scale' },
  ],
  careers: [
    { title: 'Chartered Accountant', salary: '£30,000 - £70,000', companies: 'Big 4, Accounting Firms' },
    { title: 'Financial Analyst', salary: '£28,000 - £60,000', companies: 'Banks, Investment Firms' },
    { title: 'Tax Consultant', salary: '£32,000 - £65,000', companies: 'KPMG, Deloitte, PwC, EY' },
    { title: 'Audit Manager', salary: '£35,000 - £75,000', companies: 'Professional Services Firms' },
  ],
  requirements: ['A-Levels: BBB including Maths', 'IELTS: 6.5 overall', 'Analytical mindset', 'Attention to detail'],
  whyKCIC: ['Up to 9 ACCA exemptions', 'Professional training', 'Industry placements', 'Career support'],
  faqs: [
    { q: 'How many ACCA exemptions?', a: 'Up to 9 ACCA paper exemptions upon graduation, fast-tracking your path to becoming a Chartered Accountant.' },
    { q: 'Can I work while studying?', a: 'Yes, work placements are integrated into the program and many students secure part-time roles.' },
  ],
};
