import { SpecialtyProgram } from './specialtyProgramTypes';

export const embeddedSystemsProgram: SpecialtyProgram = {
  id: '11',
  slug: 'beng-hons-electronics-embedded-systems',
  title: 'BEng (Hons) Electronics & Embedded Systems',
  subtitle: 'Design intelligent devices for IoT and automation',
  tag: 'Innovation Focus',
  duration: '4 years | 2 years in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053873315_2f4a5442.webp',
  acceptance: '20 Students/intake',
  designedBy: 'Leading UK Universities',
  studyInIndia: 'KCIC, ECR Campus',
  studyAbroad: 'UK',
  averageSalary: '£31,000 - £36,000',
  potentialRecruiters: ['ARM', 'NXP Semiconductors', 'STMicroelectronics', 'Bosch', 'Siemens'],
  partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
  modules: [
    { title: 'Embedded Programming', desc: 'Master C/C++ for microcontrollers and real-time systems' },
    { title: 'IoT Systems', desc: 'Build connected devices and sensor networks' },
    { title: 'RTOS', desc: 'Design real-time operating systems and applications' },
    { title: 'PCB Design', desc: 'Create printed circuit boards and electronic systems' },
    { title: 'Signal Processing', desc: 'Process and analyze sensor data' },
    { title: 'Robotics', desc: 'Develop autonomous systems and control algorithms' },
  ],
  careers: [
    { title: 'Embedded Engineer', salary: '£30,000 - £60,000', companies: 'Tech, Automotive' },
    { title: 'IoT Developer', salary: '£32,000 - £65,000', companies: 'Smart Home, Industrial' },
    { title: 'Firmware Engineer', salary: '£35,000 - £70,000', companies: 'Consumer Electronics' },
    { title: 'Robotics Engineer', salary: '£33,000 - £68,000', companies: 'Automation' },
  ],
  requirements: ['A-Levels: ABB including Maths and Physics', 'IELTS: 6.5 overall', 'Electronics interest'],
  whyKCIC: ['Maker labs', 'IoT projects', 'Industry tools', 'Innovation focus'],
  faqs: [
    { q: 'What projects will I build?', a: 'IoT devices, robots, smart systems, and embedded applications.' },
    { q: 'Do I need electronics experience?', a: 'No prior experience needed. You will learn from fundamentals.' },
  ],
};
