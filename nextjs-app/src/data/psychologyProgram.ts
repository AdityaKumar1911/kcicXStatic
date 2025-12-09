import { SpecialtyProgram } from './specialtyProgramTypes';

export const psychologyProgram: SpecialtyProgram = {
  id: '3',
  slug: 'bsc-hons-psychology',
  title: 'BSc (Hons) Psychology',
  subtitle: 'Understand the human mind',
  tag: 'Popular',
  duration: '3 years | 1 year in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053856280_50edb33d.webp',
  acceptance: '30 Students/intake',
  designedBy: 'Leading UK Universities',
  studyInIndia: 'KCIC, ECR Campus',
  studyAbroad: 'UK',
  averageSalary: '£28,000 - £32,000',
  potentialRecruiters: ['NHS', 'Mind', 'Priory Group', 'Nuffield Health', 'BUPA'],
  partnerUniversities: ['University of Hertfordshire', 'Coventry University', 'De Montfort University'],
  modules: [
    { title: 'Cognitive Psychology', desc: 'Study memory, attention, and decision-making' },
    { title: 'Developmental Psychology', desc: 'Explore human development across lifespan' },
    { title: 'Social Psychology', desc: 'Understand group behavior and social influence' },
    { title: 'Biological Psychology', desc: 'Learn brain function and neuroscience' },
    { title: 'Research Methods', desc: 'Master experimental design and statistics' },
    { title: 'Clinical Psychology', desc: 'Introduction to mental health assessment' },
  ],
  careers: [
    { title: 'Clinical Psychologist', salary: '£32,000 - £65,000', companies: 'NHS, Private Practice' },
    { title: 'Counselor', salary: '£28,000 - £50,000', companies: 'Schools, Charities, Healthcare' },
    { title: 'HR Specialist', salary: '£30,000 - £55,000', companies: 'Corporate, Consulting' },
    { title: 'Research Psychologist', salary: '£28,000 - £52,000', companies: 'Universities, Research Institutes' },
  ],
  requirements: ['A-Levels: BBB including one science', 'IELTS: 6.5 overall', 'Interest in human behavior'],
  whyKCIC: ['BPS accredited pathway', 'Research labs', 'Clinical placements', 'Expert faculty'],
  faqs: [
    { q: 'Is this BPS accredited?', a: 'Yes, pathway to British Psychological Society Graduate Basis for Chartership.' },
    { q: 'Can I become a clinical psychologist?', a: 'Yes, this degree is the first step. Further doctoral training is required.' },
  ],
};
