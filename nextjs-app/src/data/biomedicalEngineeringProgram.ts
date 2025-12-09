import { SpecialtyProgram } from './specialtyProgramTypes';

export const biomedicalEngineeringProgram: SpecialtyProgram = {
  id: '6',
  slug: 'beng-hons-biomedical-engineering',
  title: 'BEng (Hons) Biomedical Engineering',
  subtitle: 'Innovate healthcare technology',
  tag: 'Emerging',
  duration: '4 years | 2 years in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053859686_15102c75.webp',
  acceptance: '20 Students/intake',
  designedBy: 'Leading UK Universities',
  studyInIndia: 'KCIC, ECR Campus',
  studyAbroad: 'UK',
  averageSalary: '£30,000 - £35,000',
  potentialRecruiters: ['Medtronic', 'Siemens Healthineers', 'Philips Healthcare', 'Smith & Nephew', 'Stryker'],
  partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
  modules: [
    { title: 'Medical Device Design', desc: 'Create innovative healthcare technology' },
    { title: 'Biomechanics', desc: 'Study human movement and prosthetic design' },
    { title: 'Biomedical Instrumentation', desc: 'Develop diagnostic and monitoring equipment' },
    { title: 'Tissue Engineering', desc: 'Explore regenerative medicine and biomaterials' },
    { title: 'Medical Imaging', desc: 'Master MRI, CT, and ultrasound technologies' },
    { title: 'Rehabilitation Engineering', desc: 'Design assistive devices and mobility aids' },
  ],
  careers: [
    { title: 'Biomedical Engineer', salary: '£30,000 - £60,000', companies: 'Medtronic, Siemens' },
    { title: 'Medical Device Engineer', salary: '£32,000 - £65,000', companies: 'J&J, GE Healthcare' },
    { title: 'Clinical Engineer', salary: '£28,000 - £55,000', companies: 'NHS, Private Hospitals' },
    { title: 'R&D Engineer', salary: '£35,000 - £70,000', companies: 'Medical Tech Companies' },
  ],
  requirements: ['A-Levels: ABB including Maths and Physics', 'IELTS: 6.5 overall', 'Strong technical skills'],
  whyKCIC: ['Industry partnerships', 'Lab facilities', 'Clinical placements', 'Innovation focus'],
  faqs: [
    { q: 'Do I need medical knowledge?', a: 'No prior medical knowledge needed. You will learn alongside engineering.' },
    { q: 'What projects will I work on?', a: 'Design medical devices, prosthetics, and diagnostic equipment.' },
  ],
};
