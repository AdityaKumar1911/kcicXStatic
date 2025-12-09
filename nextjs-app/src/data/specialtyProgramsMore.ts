import { SpecialtyProgram } from './specialtyPrograms';

export const aerospaceEnhanced: SpecialtyProgram = {
  slug: 'aerospace-engineering',
  title: 'BEng (Hons) Aerospace Engineering',
  subtitle: 'Design the future of flight and space exploration',
  tag: 'Trending',
  duration: '4 years | 2 years in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763055010340_8cc67e40.webp',
  modules: [
    { title: 'Aircraft Design', desc: 'Aerodynamic principles and aircraft structures', icon: 'Plane' },
    { title: 'Propulsion Systems', desc: 'Jet engines and rocket propulsion', icon: 'Rocket' },
    { title: 'Aerodynamics', desc: 'Flight performance and CFD analysis', icon: 'Wind' },
    { title: 'Avionics', desc: 'Flight control and navigation systems', icon: 'Gauge' },
    { title: 'Space Systems', desc: 'Satellite design and orbital mechanics', icon: 'Orbit' },
    { title: 'Materials Science', desc: 'Composites and lightweight materials', icon: 'Layers' },
  ],
  careers: [
    { title: 'Aerospace Engineer', salary: '£35,000 - £70,000', companies: 'Airbus, Boeing, Rolls-Royce' },
    { title: 'Flight Test Engineer', salary: '£38,000 - £75,000', companies: 'BAE Systems, Lockheed Martin' },
    { title: 'Propulsion Engineer', salary: '£40,000 - £80,000', companies: 'SpaceX, Blue Origin' },
    { title: 'Systems Engineer', salary: '£35,000 - £65,000', companies: 'Defence Contractors' },
  ],
  requirements: ['A-Levels: AAB including Maths and Physics', 'IELTS: 6.5 overall', 'Strong analytical skills', 'Passion for aviation'],
  whyKCIC: ['RAeS accredited', 'Industry placements with major aerospace companies', 'Flight simulator access', 'Wind tunnel facilities'],
  faqs: [
    { q: 'Is this RAeS accredited?', a: 'Yes, accredited by Royal Aeronautical Society for Chartered Engineer status.' },
    { q: 'Are there industry placements?', a: 'Yes, with companies like Airbus, Boeing, Rolls-Royce, and BAE Systems.' },
  ],
};

export const aiEnhanced: SpecialtyProgram = {
  slug: 'artificial-intelligence',
  title: 'BSc (Hons) Artificial Intelligence',
  subtitle: 'Build intelligent systems that transform industries',
  tag: 'Future Tech',
  duration: '3 years | 1 year in India & 2 years in the UK',
  startDate: 'September 2025',
  heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763054615192_d6c777b7.webp',
  modules: [
    { title: 'Machine Learning', desc: 'Predictive models and algorithms', icon: 'Brain' },
    { title: 'Deep Learning', desc: 'Neural networks and architectures', icon: 'Network' },
    { title: 'NLP', desc: 'Language processing and chatbots', icon: 'MessageSquare' },
    { title: 'Computer Vision', desc: 'Image recognition and analysis', icon: 'Eye' },
    { title: 'Robotics AI', desc: 'Autonomous systems and control', icon: 'Bot' },
    { title: 'Ethics in AI', desc: 'Responsible AI development', icon: 'Scale' },
  ],
  careers: [
    { title: 'AI Engineer', salary: '£45,000 - £90,000', companies: 'Google, DeepMind, OpenAI' },
    { title: 'ML Engineer', salary: '£40,000 - £85,000', companies: 'Meta, Microsoft, Amazon' },
    { title: 'Data Scientist', salary: '£35,000 - £75,000', companies: 'Tech Companies, Finance' },
    { title: 'Research Scientist', salary: '£50,000 - £100,000', companies: 'AI Labs, Universities' },
  ],
  requirements: ['A-Levels: AAB including Maths', 'IELTS: 6.5 overall', 'Programming interest', 'Mathematical aptitude'],
  whyKCIC: ['GPU clusters for training', 'Industry AI projects', 'Research partnerships', 'Cutting-edge curriculum'],
  faqs: [
    { q: 'Do I need coding experience?', a: 'Basic programming helps but we teach fundamentals. Python is the main language.' },
    { q: 'What projects will I work on?', a: 'Real AI applications including chatbots, image recognition, and autonomous systems.' },
  ],
};
