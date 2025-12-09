export interface Campus {
  id: string;
  name: string;
  slug: string;
  type: 'main' | 'satellite';
  city: string;
  state: string;
  country: string;
  address: string;
  heroImageUrl: string;
  gallery: string[];
  highlights: string[];
  facilities: string[];
  contactPhone: string;
  contactEmail: string;
}

export const campuses: Campus[] = [
  {
    id: '1',
    name: 'KCIC Mumbai Campus',
    slug: 'mumbai-campus',
    type: 'main',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    address: 'Andheri East, Mumbai, Maharashtra 400069',
    heroImageUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504113841_f6039f24.webp',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504113841_f6039f24.webp',
      'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504115623_d5ebb255.webp'
    ],
    highlights: ['State-of-the-art computer labs', 'Modern library with 50,000+ books', 'Sports facilities and gym', 'Student accommodation available', 'Industry-standard equipment'],
    facilities: ['Computer Labs', 'Library', 'Cafeteria', 'Sports Complex', 'Auditorium', 'Wi-Fi Campus'],
    contactPhone: '+91 22 1234 5678',
    contactEmail: 'mumbai@kcic.edu.in'
  },
  {
    id: '2',
    name: 'KCIC Bangalore Campus',
    slug: 'bangalore-campus',
    type: 'main',
    city: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
    address: 'Whitefield, Bangalore, Karnataka 560066',
    heroImageUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504115623_d5ebb255.webp',
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504115623_d5ebb255.webp',
      'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504117413_f88b8abe.webp'
    ],
    highlights: ['Tech-focused learning environment', 'Innovation lab and maker space', 'Green campus with sustainable design', 'Close to IT industry hub', 'International student support'],
    facilities: ['Innovation Lab', 'Library', 'Food Court', 'Recreation Center', 'Conference Rooms', 'Parking'],
    contactPhone: '+91 80 9876 5432',
    contactEmail: 'bangalore@kcic.edu.in'
  },
  {
    id: '3',
    name: 'KCIC Delhi NCR Campus',
    slug: 'delhi-campus',
    type: 'satellite',
    city: 'Gurgaon',
    state: 'Haryana',
    country: 'India',
    address: 'Cyber City, Gurgaon, Haryana 122002',
    heroImageUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504117413_f88b8abe.webp',
    gallery: ['https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504117413_f88b8abe.webp'],
    highlights: ['Strategic location in business district', 'Industry partnerships and internships', 'Modern teaching facilities', 'Metro connectivity', 'Career development center'],
    facilities: ['Smart Classrooms', 'Library', 'Cafeteria', 'Career Center', 'Study Lounges'],
    contactPhone: '+91 124 456 7890',
    contactEmail: 'delhi@kcic.edu.in'
  }
];
