import { SpecialtyProgram } from './specialtyProgramTypes';

export const computerSystemsProgram: SpecialtyProgram = {
  id: '10',
  slug: 'beng-hons-computer-systems-engineering',
  title: 'BEng (Hons) Computer Systems Engineering',
  subtitle: 'Build the computing infrastructure of tomorrow',
  tag: 'High Demand',
  duration: '4 years | 2 years in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053871875_349cf0ec.webp',
  acceptance: '25 Students/intake',
  designedBy: 'Leading UK Universities',
  studyInIndia: 'KCIC, ECR Campus',
  studyAbroad: 'UK',
  averageSalary: '£33,000 - £38,000',
  potentialRecruiters: ['Microsoft', 'Amazon', 'IBM', 'Cisco', 'Dell Technologies'],
  partnerUniversities: ['University of Hertfordshire', 'Coventry University', 'De Montfort University'],
  modules: [
    { title: 'Computer Architecture', desc: 'Design processors and memory systems' },
    { title: 'Operating Systems', desc: 'Master OS design and system programming' },
    { title: 'Networks', desc: 'Build secure and scalable network infrastructure' },
    { title: 'Cloud Computing', desc: 'Deploy distributed systems and services' },
    { title: 'Cybersecurity', desc: 'Protect systems from threats and vulnerabilities' },
    { title: 'Hardware-Software Integration', desc: 'Bridge hardware and software design' },
  ],
  careers: [
    { title: 'Systems Engineer', salary: '£32,000 - £65,000', companies: 'Tech Companies' },
    { title: 'Network Engineer', salary: '£30,000 - £60,000', companies: 'Cisco, Juniper, ISPs' },
    { title: 'Cloud Architect', salary: '£40,000 - £80,000', companies: 'AWS, Azure, GCP' },
    { title: 'DevOps Engineer', salary: '£35,000 - £70,000', companies: 'Tech Startups' },
  ],
  requirements: ['A-Levels: ABB including Maths', 'IELTS: 6.5 overall', 'Programming interest'],
  whyKCIC: ['Modern labs', 'Cloud platforms', 'Industry certifications', 'Practical projects'],
  faqs: [
    { q: 'Is this different from CS?', a: 'Yes, focuses on hardware-software integration and system architecture.' },
    { q: 'What certifications can I get?', a: 'Cisco, AWS, CompTIA, and other industry certifications.' },
  ],
};
