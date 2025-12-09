export interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  gallery?: { url: string; caption: string }[];
}

export const campusLifeActivities: Activity[] = [
  { id: 1, title: 'Rotaract Community Club', description: 'Social impact events, leadership activities, volunteering moments.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762515755382_31b11c4b.webp' },
  { id: 2, title: 'Barbecues & Gatherings', description: 'Warm, community nights, laughter, cooking together.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762515772431_36734403.webp' },
  { id: 3, title: 'Movie Nights', description: 'Outdoor cinema under the stars, cozy atmosphere with friends.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879599830_9b006ceb.webp' },
  { id: 4, title: 'Music & Parties', description: 'DJ nights, open-mic evenings, cultural festivities.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762515771490_917271e5.webp' },
  { id: 5, title: 'Cricket', description: 'Friendly house tournaments, campus enthusiasm, celebration moments.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762515770635_234945f5.webp', gallery: [
    { url: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762880265839_d06c5f9b.webp', caption: 'Students playing cricket' },
    { url: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762880266656_29bd38df.webp', caption: 'Cricket match' }
  ]},
  { id: 6, title: 'Futsal', description: 'High-energy matches, teamwork, evening lights.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762515769796_cef496fe.webp' },
  { id: 7, title: 'Cafe', description: 'Modern campus cafe for studying, socializing, and coffee.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879600836_971be93e.webp', gallery: [
    { url: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762880276322_3608d732.webp', caption: 'Campus cafe interior' }
  ]},
  { id: 8, title: 'Prototype Lab', description: 'Innovation space with 3D printers, electronics, and maker tools.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879601711_0d243193.webp' }
];

export const exploreECR: Activity[] = [
  { id: 1, title: 'Bowling', description: 'Modern bowling alley for fun weekends with friends.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879602624_08b48f9d.webp' },
  { id: 2, title: 'NASA Video Games Centre', description: 'Futuristic gaming arcade with VR and latest consoles.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879611090_b8396abb.webp' },
  { id: 3, title: 'Parasailing', description: 'Thrilling ocean adventure with breathtaking coastal views.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879612141_f0e16bbf.webp', gallery: [
    { url: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762880286037_c9465452.webp', caption: 'Parasailing over ocean' }
  ]},
  { id: 4, title: 'Cycling', description: 'Scenic coastal rides along the beautiful East Coast Road.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879613006_f81793ef.webp' },
  { id: 5, title: 'River Cruise Boats', description: 'Peaceful sunset cruises on calm waters.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879613877_2464fedf.webp' },
  { id: 6, title: 'Speedboat Adventures', description: 'Adrenaline-pumping water sports and ocean racing.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879622287_7a0bfc0a.webp' },
  { id: 7, title: 'Go-Karting', description: 'Fun weekend trips, speed, excitement, team bonding.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762515756903_b07629f2.webp', gallery: [
    { url: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762880297528_0887b195.webp', caption: 'Go-kart racing' }
  ]},
  { id: 8, title: 'Kayaking', description: 'Sunrise kayaking, group adventures at Kovalam Beach.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762515757676_23de539b.webp' },
  { id: 9, title: 'Starbucks', description: 'Your favorite coffee spot for study sessions.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879623402_2c84a42c.webp' },
  { id: 10, title: 'Spa & Wellness', description: 'Relaxation and rejuvenation at luxury spa facilities.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879624237_2a07e0c8.webp' },
  { id: 11, title: 'Pubs & Restaurants', description: 'Vibrant dining scene with diverse cuisines and nightlife.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762879625030_af255a81.webp' },
  { id: 12, title: 'Surfing', description: 'Catch the waves at ECR beaches with surf lessons and rentals.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762880054565_4d6ff928.webp', gallery: [
    { url: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762880307476_dbba7ade.webp', caption: 'Surfer riding wave' }
  ]}
];

export const accommodationAmenities: Activity[] = [
  { id: 1, title: 'Air-Conditioned Apartments', description: 'Residential apartment-style accommodation for boys and girls with modern amenities.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762881685943_5b5f2877.webp', gallery: [
    { url: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762881697537_9f904839.webp', caption: 'Student apartment' }
  ]},
  { id: 2, title: '24x7 Coffee', description: 'Round-the-clock coffee station for late-night study sessions and early mornings.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762881686831_c6127fad.webp', gallery: [
    { url: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762881703810_9e26a064.webp', caption: 'Coffee bar' }
  ]},
  { id: 3, title: '24x7 Unlimited WiFi', description: 'High-speed internet connectivity throughout the accommodation for seamless learning.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762881687660_79a74dbc.webp' },
  { id: 4, title: '5 Min Drive to Hospital', description: 'Quick access to quality healthcare facilities for peace of mind.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762881688457_2568c83a.webp' },
  { id: 5, title: 'Hot & Cold Water', description: 'Modern bathroom facilities with 24/7 hot and cold water supply.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762881689228_0b660a02.webp' },
  { id: 6, title: 'Room Cleaning Services', description: 'Regular housekeeping services to maintain a clean and comfortable living space.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762881690244_5e29f959.webp' },
  { id: 7, title: 'Laundry Services', description: 'On-site laundry facilities with washing and drying services.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762881691024_4fd87441.webp' },
  { id: 8, title: '15 Min Pharmacy Delivery', description: 'Fast pharmacy delivery service for medicines and health essentials.', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762881691825_a49e08c9.webp' }
];
