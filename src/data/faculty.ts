export interface Faculty {
  id: string;
  name: string;
  title: string;
  department: string;
  image: string;
  credentials: string;
  specialization: string;
}

export const faculty: Faculty[] = [
  { id: 'f1', name: 'Dr. Sarah Mitchell', title: 'Dean of Business', department: 'Business', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440713625_06507fae.webp', credentials: 'PhD, MBA', specialization: 'Strategic Management' },
  { id: 'f2', name: 'Prof. James Chen', title: 'Head of Engineering', department: 'Engineering', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440715339_306a5792.webp', credentials: 'PhD, MEng', specialization: 'AI & Robotics' },
  { id: 'f3', name: 'Dr. Emily Rodriguez', title: 'Professor of Nursing', department: 'Health Sciences', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440717031_cc37125c.webp', credentials: 'PhD, RN', specialization: 'Clinical Practice' },
  { id: 'f4', name: 'Dr. Michael Thompson', title: 'Professor of Psychology', department: 'Arts & Humanities', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440718871_728d917c.webp', credentials: 'PhD, MSc', specialization: 'Cognitive Psychology' },
  { id: 'f5', name: 'Prof. Aisha Patel', title: 'Associate Professor', department: 'Business', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440720580_c81198de.webp', credentials: 'PhD, CPA', specialization: 'Accounting & Finance' },
  { id: 'f6', name: 'Dr. Robert Williams', title: 'Senior Lecturer', department: 'Engineering', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440722301_bf53c7ca.webp', credentials: 'PhD, BEng', specialization: 'Software Engineering' },
  { id: 'f7', name: 'Dr. Linda Nguyen', title: 'Professor of Public Health', department: 'Health Sciences', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440724024_a1cfee87.webp', credentials: 'PhD, MPH', specialization: 'Epidemiology' },
  { id: 'f8', name: 'Prof. David Anderson', title: 'Head of Humanities', department: 'Arts & Humanities', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440725726_781c63a5.webp', credentials: 'PhD, MA', specialization: 'International Relations' },
];
