import { SpecialtyProgram } from './specialtyProgramTypes';

export const civilProgram: SpecialtyProgram = {
  id: '7',
  slug: 'beng-hons-civil-engineering',
  title: 'BEng (Hons) Civil Engineering',
  subtitle: 'Build sustainable infrastructure for tomorrow',
  tag: 'High Demand',
  duration: '4 years | 2 years in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053861366_c59783c0.webp',
  acceptance: '25 Students/intake',
  designedBy: 'Leading UK Universities',
  studyInIndia: 'KCIC, ECR Campus',
  studyAbroad: 'UK',
  averageSalary: '£29,000 - £34,000',
  potentialRecruiters: ['Arup', 'Balfour Beatty', 'Mott MacDonald', 'Atkins', 'WSP'],
  partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
  modules: [
    { title: 'Structural Engineering', desc: 'Design buildings, bridges, and infrastructure' },
    { title: 'Geotechnical Engineering', desc: 'Study soil mechanics and foundation design' },
    { title: 'Hydraulics', desc: 'Master water resources and drainage systems' },
    { title: 'Construction Management', desc: 'Learn project planning and site management' },
    { title: 'Sustainable Design', desc: 'Explore green building and environmental engineering' },
    { title: 'Transportation Engineering', desc: 'Design roads, highways, and transit systems' },
  ],
  careers: [
    { title: 'Civil Engineer', salary: '£28,000 - £55,000', companies: 'Arup, Mott MacDonald' },
    { title: 'Structural Engineer', salary: '£30,000 - £60,000', companies: 'WSP, Atkins, Jacobs' },
    { title: 'Project Manager', salary: '£35,000 - £70,000', companies: 'Construction Firms' },
    { title: 'Site Engineer', salary: '£26,000 - £50,000', companies: 'Contractors' },
  ],
  requirements: ['A-Levels: ABB including Maths', 'IELTS: 6.5 overall', 'Problem-solving skills'],
  whyKCIC: ['ICE accredited', 'Site visits', 'Industry projects', 'Professional mentoring'],
  faqs: [
    { q: 'Is this ICE accredited?', a: 'Yes, accredited by Institution of Civil Engineers for Chartered status.' },
    { q: 'What projects will I work on?', a: 'Real infrastructure projects including bridges and buildings.' },
  ],
};
