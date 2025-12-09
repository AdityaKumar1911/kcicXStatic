export interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  icon: 'info' | 'arrow' | 'video' | 'photo';
  linkedLocation?: string;
}

export interface TourLocation {
  id: string;
  name: string;
  description: string;
  image: string;
  hotspots: Hotspot[];
  narration: string;
}

export const tourLocations: TourLocation[] = [
  {
    id: 'main-lobby',
    name: 'Main Campus Lobby',
    description: 'Welcome to KCIC! Our modern campus lobby features a stunning reception area.',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1764532079858_5916b0fc.webp',
    narration: 'Welcome to KCIC! This is our main lobby where students gather and connect.',
    hotspots: [
      { id: 'h1', x: 30, y: 50, title: 'Reception Desk', description: '24/7 student support and visitor assistance.', icon: 'info' },
      { id: 'h2', x: 70, y: 45, title: 'To Classrooms', description: 'Access to lecture halls and seminar rooms.', icon: 'arrow', linkedLocation: 'classroom' },
    ]
  },
  {
    id: 'classroom',
    name: 'Modern Classroom',
    description: 'State-of-the-art learning spaces with smart technology.',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1764532080817_486f20e3.webp',
    narration: 'Our classrooms feature smart boards and tiered seating for optimal learning.',
    hotspots: [
      { id: 'h3', x: 50, y: 30, title: 'Smart Board', description: 'Interactive displays for engaging lectures.', icon: 'info' },
      { id: 'h4', x: 85, y: 50, title: 'To Library', description: 'Visit our extensive library.', icon: 'arrow', linkedLocation: 'library' },
    ]
  },
  {
    id: 'library',
    name: 'Campus Library',
    description: 'Extensive collection with quiet study areas.',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1764532081824_309613bc.webp',
    narration: 'Our library houses thousands of resources and provides peaceful study spaces.',
    hotspots: [
      { id: 'h5', x: 40, y: 55, title: 'Study Zone', description: 'Quiet areas for focused study.', icon: 'info' },
      { id: 'h6', x: 75, y: 45, title: 'To Labs', description: 'Visit our engineering labs.', icon: 'arrow', linkedLocation: 'lab' },
    ]
  },
  {
    id: 'lab',
    name: 'Engineering Laboratory',
    description: 'Hands-on learning with industry-standard equipment.',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1764532083636_5ece7944.webp',
    narration: 'Get hands-on experience with cutting-edge equipment in our engineering labs.',
    hotspots: [
      { id: 'h7', x: 35, y: 50, title: 'Workstations', description: 'Industry-standard equipment for practical learning.', icon: 'info' },
      { id: 'h8', x: 80, y: 45, title: 'To Accommodation', description: 'See student housing.', icon: 'arrow', linkedLocation: 'accommodation' },
    ]
  },
  {
    id: 'accommodation',
    name: 'Student Accommodation',
    description: 'Comfortable living spaces for our students.',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1764532082735_4db2eb19.webp',
    narration: 'Our student accommodation offers comfortable living with modern amenities.',
    hotspots: [
      { id: 'h9', x: 45, y: 50, title: 'Common Room', description: 'Social spaces for relaxation.', icon: 'info' },
      { id: 'h10', x: 80, y: 45, title: 'To Courtyard', description: 'Explore outdoor areas.', icon: 'arrow', linkedLocation: 'courtyard' },
    ]
  },
  {
    id: 'courtyard',
    name: 'Campus Courtyard',
    description: 'Beautiful outdoor spaces for recreation.',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1764532084557_363818b9.webp',
    narration: 'Our campus courtyard is perfect for relaxation and outdoor activities.',
    hotspots: [
      { id: 'h11', x: 50, y: 60, title: 'Recreation Area', description: 'Outdoor activities and events.', icon: 'info' },
      { id: 'h12', x: 15, y: 45, title: 'Back to Lobby', description: 'Return to main entrance.', icon: 'arrow', linkedLocation: 'main-lobby' },
    ]
  }
];
