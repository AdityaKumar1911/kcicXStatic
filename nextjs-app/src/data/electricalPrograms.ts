import { SpecialtyProgram } from './specialtyProgramTypes';

export const semiconductorProgram: SpecialtyProgram = {
  id: '9',
  slug: 'beng-hons-electrical-electronics-semiconductor',
  title: 'BEng (Hons) Electrical & Electronic with Semiconductor',
  subtitle: 'Master the technology powering the digital world',
  tag: 'Trending',
  duration: '4 years | 2 years in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053870857_48de3b2e.webp',
  acceptance: '20 Students/intake',
  designedBy: 'Leading UK Universities',
  studyInIndia: 'KCIC, ECR Campus',
  studyAbroad: 'UK',
  averageSalary: '£32,000 - £37,000',
  potentialRecruiters: ['Intel', 'ARM', 'Qualcomm', 'Texas Instruments', 'Analog Devices'],
  partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
  modules: [
    { title: 'Semiconductor Physics', desc: 'Study quantum mechanics and solid-state devices' },
    { title: 'IC Design', desc: 'Master integrated circuit layout and fabrication' },
    { title: 'VLSI Systems', desc: 'Learn very large-scale integration design' },
    { title: 'Microelectronics', desc: 'Explore nanoscale device technology' },
    { title: 'Power Electronics', desc: 'Design efficient power conversion systems' },
    { title: 'Digital Systems', desc: 'Develop FPGA and embedded solutions' },
  ],
  careers: [
    { title: 'Semiconductor Engineer', salary: '£35,000 - £70,000', companies: 'Intel, AMD, TSMC' },
    { title: 'IC Design Engineer', salary: '£38,000 - £75,000', companies: 'ARM, Qualcomm, NVIDIA' },
    { title: 'Process Engineer', salary: '£32,000 - £65,000', companies: 'Fab Companies' },
    { title: 'Test Engineer', salary: '£30,000 - £60,000', companies: 'Chip Manufacturers' },
  ],
  requirements: ['A-Levels: AAB including Maths and Physics', 'IELTS: 6.5 overall', 'Technical aptitude'],
  whyKCIC: ['Industry labs', 'Chip design tools', 'Industry partnerships', 'Research opportunities'],
  faqs: [
    { q: 'Do I need programming skills?', a: 'Basic programming helps. You will learn HDL and design tools.' },
    { q: 'What tools will I use?', a: 'Industry-standard EDA tools for chip design and simulation.' },
  ],
};
