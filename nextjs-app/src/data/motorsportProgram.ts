import { SpecialtyProgram } from './specialtyProgramTypes';

export const motorsportProgram: SpecialtyProgram = {
  id: '1',
  slug: 'beng-hons-motorsport-engineering',
  title: 'BEng (Hons) Motorsport Engineering',
  subtitle: 'Build the future of racing technology',
  tag: 'High Demand',
  duration: '4 years | 2 years in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763040892322_14aacdb3.webp',
  acceptance: '20 Students/intake',
  designedBy: 'McLaren, UK',
  studyInIndia: 'KCIC, ECR Campus',
  studyAbroad: 'UK',
  averageSalary: '£32,000 - £35,000',
  potentialRecruiters: ['Williams Engineering', 'Aston Martin', 'VW Racing', 'Landrover Jaguar', 'BMW'],
  partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Oxford Brookes University'],
  modules: [
    { title: 'Vehicle Dynamics', desc: 'Study suspension, handling, and performance optimization' },
    { title: 'Powertrain Engineering', desc: 'Design high-performance engines and drivetrains' },
    { title: 'Aerodynamics', desc: 'Master wind tunnel testing and CFD analysis' },
    { title: 'Composite Materials', desc: 'Work with carbon fiber and advanced materials' },
    { title: 'Race Car Design', desc: 'Create competition vehicles from concept to track' },
    { title: 'Data Acquisition', desc: 'Analyze telemetry and optimize performance' },
  ],
  careers: [
    { title: 'Race Engineer', salary: '£35,000 - £70,000', companies: 'F1 Teams, WEC, Formula E' },
    { title: 'Vehicle Dynamicist', salary: '£32,000 - £60,000', companies: 'McLaren, Williams, Red Bull' },
    { title: 'Aerodynamics Engineer', salary: '£38,000 - £75,000', companies: 'F1 Teams, Automotive OEMs' },
    { title: 'Performance Engineer', salary: '£30,000 - £55,000', companies: 'Racing Teams, Manufacturers' },
  ],
  requirements: ['A-Levels: AAB including Maths and Physics', 'IELTS: 6.5 overall', 'Passion for motorsport'],
  whyKCIC: ['McLaren designed curriculum', 'F1 technology access', 'Industry placements', 'Track testing'],
  faqs: [
    { q: 'Do I need racing experience?', a: 'No prior racing experience needed. Passion for motorsport and engineering is key.' },
    { q: 'Will I work on real race cars?', a: 'Yes, you will design, build, and test competition vehicles during your studies.' },
  ],
};
