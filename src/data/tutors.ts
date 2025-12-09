import { Tutor } from '@/types';

export const tutors: Tutor[] = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    slug: 'dr-rajesh-kumar',
    title: 'Professor of Business Management',
    photoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504118157_1a1df2d0.webp',
    bio: 'Dr. Kumar has over 15 years of experience teaching business management and has published numerous papers on international business strategies.',
    expertise: ['Business Strategy', 'International Management', 'Entrepreneurship'],
    campusId: '1',
    acceptingMentees: true
  },
  {
    id: '2',
    name: 'Prof. Priya Sharma',
    slug: 'prof-priya-sharma',
    title: 'Head of Computer Science',
    photoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504119892_3425efeb.webp',
    bio: 'Prof. Sharma specializes in artificial intelligence and machine learning with industry experience at leading tech companies.',
    expertise: ['AI & ML', 'Data Science', 'Software Engineering'],
    campusId: '1',
    acceptingMentees: true
  },
  {
    id: '3',
    name: 'Dr. Amit Patel',
    slug: 'dr-amit-patel',
    title: 'Senior Lecturer in Engineering',
    photoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504121609_53dba7d3.webp',
    bio: 'Dr. Patel brings practical engineering experience from major infrastructure projects across Asia and Europe.',
    expertise: ['Civil Engineering', 'Project Management', 'Sustainable Design'],
    campusId: '2',
    acceptingMentees: true
  },
  {
    id: '4',
    name: 'Dr. Sneha Reddy',
    slug: 'dr-sneha-reddy',
    title: 'Associate Professor of Healthcare',
    photoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504123835_4a4fea5a.webp',
    bio: 'Dr. Reddy has extensive experience in healthcare management and public health policy development.',
    expertise: ['Healthcare Management', 'Public Health', 'Medical Ethics'],
    campusId: '1',
    acceptingMentees: true
  },
  {
    id: '5',
    name: 'Prof. Vikram Singh',
    slug: 'prof-vikram-singh',
    title: 'Professor of Finance',
    photoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504125577_0ab476c2.webp',
    bio: 'Prof. Singh is a chartered accountant with expertise in international finance and investment banking.',
    expertise: ['Corporate Finance', 'Investment Banking', 'Financial Analysis'],
    campusId: '2',
    acceptingMentees: false
  },
  {
    id: '6',
    name: 'Dr. Meera Nair',
    slug: 'dr-meera-nair',
    title: 'Senior Lecturer in Marketing',
    photoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504127267_9e509543.webp',
    bio: 'Dr. Nair specializes in digital marketing and consumer behavior with consulting experience for Fortune 500 companies.',
    expertise: ['Digital Marketing', 'Brand Management', 'Consumer Psychology'],
    campusId: '1',
    acceptingMentees: true
  }
];
