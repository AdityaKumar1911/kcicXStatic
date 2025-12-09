import { SpecialtyProgram } from './specialtyProgramTypes';

export const aerospaceProgram: SpecialtyProgram = {
  id: '4',
  slug: 'beng-hons-aerospace-engineering',
  title: 'BEng (Hons) Aerospace Engineering',
  subtitle: 'Design the future of flight',
  tag: 'High Demand',
  duration: '4 years | 2 years in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053857556_25d325fa.webp',
  acceptance: '20 Students/intake',
  designedBy: 'Leading UK Universities',
  studyInIndia: 'KCIC, ECR Campus',
  studyAbroad: 'UK',
  averageSalary: '£33,000 - £38,000',
  potentialRecruiters: ['Rolls-Royce', 'BAE Systems', 'Airbus', 'Boeing', 'GKN Aerospace'],
  partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
  modules: [
    { title: 'Aerodynamics', desc: 'Study airflow, lift, and drag principles' },
    { title: 'Aircraft Structures', desc: 'Design lightweight, strong airframes' },
    { title: 'Propulsion Systems', desc: 'Master jet engines and rocket propulsion' },
    { title: 'Flight Mechanics', desc: 'Understand stability and control systems' },
    { title: 'Avionics', desc: 'Learn aircraft electronic systems' },
    { title: 'Space Systems', desc: 'Explore satellite and spacecraft design' },
  ],
  careers: [
    { title: 'Aerospace Engineer', salary: '£32,000 - £65,000', companies: 'Airbus, Boeing, Rolls-Royce' },
    { title: 'Stress Engineer', salary: '£30,000 - £58,000', companies: 'Aircraft Manufacturers' },
    { title: 'Systems Engineer', salary: '£35,000 - £70,000', companies: 'Defense, Space Industry' },
    { title: 'Flight Test Engineer', salary: '£38,000 - £72,000', companies: 'OEMs, Test Centers' },
  ],
  requirements: ['A-Levels: AAB including Maths and Physics', 'IELTS: 6.5 overall', 'Strong analytical skills'],
  whyKCIC: ['RAeS accredited', 'Wind tunnel access', 'Industry projects', 'Flight simulation'],
  faqs: [
    { q: 'Is this RAeS accredited?', a: 'Yes, accredited by Royal Aeronautical Society for Chartered Engineer status.' },
    { q: 'Will I work on real aircraft?', a: 'Yes, industry projects with aerospace companies and hands-on lab work.' },
  ],
};
