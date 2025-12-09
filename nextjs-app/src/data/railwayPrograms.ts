import { SpecialtyProgram } from './specialtyProgramTypes';

export const railwayProgram: SpecialtyProgram = {
  id: '12',
  slug: 'beng-hons-electrical-railway-engineering',
  title: 'BEng (Hons) Electrical with Railway Engineering',
  subtitle: 'Power the future of sustainable transportation',
  tag: 'Infrastructure Focus',
  duration: '4 years | 2 years in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053874419_b00656ec.webp',
  acceptance: '20 Students/intake',
  designedBy: 'Leading UK Universities',
  studyInIndia: 'KCIC, ECR Campus',
  studyAbroad: 'UK',
  averageSalary: '£30,000 - £35,000',
  potentialRecruiters: ['Network Rail', 'Siemens Mobility', 'Bombardier', 'Alstom', 'Hitachi Rail'],
  partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
  modules: [
    { title: 'Traction Systems', desc: 'Design electric propulsion for trains and metros' },
    { title: 'Signaling', desc: 'Master railway control and safety systems' },
    { title: 'Power Distribution', desc: 'Learn electrification and power supply networks' },
    { title: 'Rolling Stock', desc: 'Study train design and maintenance systems' },
    { title: 'Infrastructure', desc: 'Explore track systems and station design' },
    { title: 'Automation', desc: 'Develop autonomous train control systems' },
  ],
  careers: [
    { title: 'Railway Engineer', salary: '£30,000 - £60,000', companies: 'Network Rail, TfL' },
    { title: 'Signaling Engineer', salary: '£32,000 - £65,000', companies: 'Siemens, Alstom' },
    { title: 'Traction Engineer', salary: '£35,000 - £70,000', companies: 'Train Operators' },
    { title: 'Project Engineer', salary: '£33,000 - £68,000', companies: 'Infrastructure Projects' },
  ],
  requirements: ['A-Levels: ABB including Maths and Physics', 'IELTS: 6.5 overall', 'Engineering mindset'],
  whyKCIC: ['Industry partnerships', 'Site visits', 'Real projects', 'Professional training'],
  faqs: [
    { q: 'Are there placements?', a: 'Yes, work placements with major railway companies.' },
    { q: 'What systems will I work on?', a: 'Metro systems, high-speed rail, signaling, and electrification.' },
  ],
};
