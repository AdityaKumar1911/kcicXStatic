import { SpecialtyProgram } from './specialtyProgramTypes';

export const biomedicalScienceProgram: SpecialtyProgram = {
  id: '5',
  slug: 'bsc-hons-biomedical-science',
  title: 'BSc (Hons) Biomedical Science',
  subtitle: 'Advance medical research and diagnostic science',
  tag: 'Trending',
  duration: '3 years | 1 year in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053858584_131cd18b.webp',
  acceptance: '25 Students/intake',
  designedBy: 'Leading UK Universities',
  studyInIndia: 'KCIC, ECR Campus',
  studyAbroad: 'UK',
  averageSalary: '£27,000 - £31,000',
  potentialRecruiters: ['NHS', 'GSK', 'AstraZeneca', 'Roche', 'Pfizer'],
  partnerUniversities: ['University of Hertfordshire', 'De Montfort University', 'Coventry University'],
  modules: [
    { title: 'Clinical Biochemistry', desc: 'Study metabolic processes and disease markers' },
    { title: 'Medical Microbiology', desc: 'Explore pathogens and infectious diseases' },
    { title: 'Haematology', desc: 'Learn blood disorders and diagnostic techniques' },
    { title: 'Immunology', desc: 'Understand immune system and autoimmune diseases' },
    { title: 'Molecular Biology', desc: 'Master DNA analysis and genetic testing' },
    { title: 'Pathology', desc: 'Study disease mechanisms and diagnostic methods' },
  ],
  careers: [
    { title: 'Biomedical Scientist', salary: '£28,000 - £55,000', companies: 'NHS, Private Labs' },
    { title: 'Clinical Researcher', salary: '£32,000 - £60,000', companies: 'Universities, Pharma' },
    { title: 'Lab Scientist', salary: '£30,000 - £50,000', companies: 'Diagnostic Labs' },
    { title: 'QC Analyst', salary: '£28,000 - £48,000', companies: 'Pharmaceutical Industry' },
  ],
  requirements: ['A-Levels: BBB including Biology and Chemistry', 'IELTS: 6.5 overall', 'Science background'],
  whyKCIC: ['IBMS accredited', 'Lab placements', 'Research projects', 'Industry links'],
  faqs: [
    { q: 'Is this IBMS accredited?', a: 'Yes, accredited by Institute of Biomedical Science for professional registration.' },
    { q: 'What labs do you have?', a: 'State-of-the-art labs with modern diagnostic equipment.' },
  ],
};
