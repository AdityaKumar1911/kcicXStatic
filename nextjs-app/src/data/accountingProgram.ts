import { SpecialtyProgram } from './specialtyProgramTypes';

export const accountingProgram: SpecialtyProgram = {
  id: '8',
  slug: 'bsc-hons-accounting-finance-acca',
  title: 'BA (Hons) Professional Accounting with ACCA',
  subtitle: 'Fast-track your career with ACCA exemptions',
  tag: 'Premium',
  duration: '3 years | 1 year in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053869714_804dce34.webp',
  acceptance: '30 Students/intake',
  designedBy: 'ACCA Approved',
  studyInIndia: 'KCIC, ECR Campus',
  studyAbroad: 'UK',
  averageSalary: '£30,000 - £36,000',
  potentialRecruiters: ['Deloitte', 'PwC', 'EY', 'KPMG', 'Grant Thornton'],
  partnerUniversities: ['De Montfort University', 'University of Hertfordshire', 'Coventry University'],
  modules: [
    { title: 'Financial Accounting', desc: 'Master financial reporting and statements' },
    { title: 'Management Accounting', desc: 'Learn cost analysis and budgeting' },
    { title: 'Taxation', desc: 'Study UK and international tax systems' },
    { title: 'Audit & Assurance', desc: 'Understand audit processes and compliance' },
    { title: 'Corporate Finance', desc: 'Explore investment and financial strategy' },
    { title: 'Business Law', desc: 'Learn legal frameworks for business' },
  ],
  careers: [
    { title: 'Chartered Accountant', salary: '£30,000 - £70,000', companies: 'Big 4, Accounting Firms' },
    { title: 'Financial Analyst', salary: '£28,000 - £60,000', companies: 'Banks, Investment Firms' },
    { title: 'Tax Consultant', salary: '£32,000 - £65,000', companies: 'KPMG, Deloitte, PwC, EY' },
    { title: 'Audit Manager', salary: '£35,000 - £75,000', companies: 'Professional Services' },
  ],
  requirements: ['A-Levels: BBB including Maths', 'IELTS: 6.5 overall', 'Analytical mindset'],
  whyKCIC: ['ACCA exemptions', 'Professional training', 'Industry placements', 'Career support'],
  faqs: [
    { q: 'How many ACCA exemptions?', a: 'Up to 9 ACCA paper exemptions upon graduation.' },
    { q: 'Can I work while studying?', a: 'Yes, work placements are integrated into the program.' },
  ],
};
