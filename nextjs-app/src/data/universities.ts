export interface University {
  id: string;
  name: string;
  slug: string;
  country: string;
  city: string;
  qsRank?: number;
  logoUrl: string;
  summary: string;
  description: string;
  feesPerYear: string;
  scholarshipRange: string;
  virtualTourUrl?: string;
}

export const universities: University[] = [
  { id: '1', name: 'Ulster University', slug: 'ulster-university', country: 'United Kingdom', city: 'Belfast', qsRank: 601, logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763038253815_65ae47af.webp', summary: 'Leading university in Northern Ireland with world-class research', description: 'Ulster University offers exceptional education with strong industry links.', feesPerYear: '£15,840', scholarshipRange: '10%-25%', virtualTourUrl: '' },
  { id: '2', name: 'Heriot Watt University', slug: 'heriot-watt-edinburgh', country: 'United Kingdom', city: 'Edinburgh', qsRank: 281, logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763038255852_320bbfaf.webp', summary: "Scotland's international university with global campuses", description: 'Heriot Watt is renowned for engineering, business, and sciences.', feesPerYear: '£17,200', scholarshipRange: '15%-30%', virtualTourUrl: '' },
  { id: '3', name: 'University of Sunderland', slug: 'university-of-sunderland', country: 'United Kingdom', city: 'Sunderland', logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763038257849_5661e982.webp', summary: 'Modern university with excellent student support', description: 'Quality education with a focus on employability.', feesPerYear: '£14,500', scholarshipRange: '10%-20%', virtualTourUrl: '' },
  { id: '4', name: 'Elmhurst University', slug: 'elmhurst-university', country: 'United States', city: 'Illinois', logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763038259954_ee064b53.webp', summary: 'Private liberal arts university with personalized education', description: 'Small class sizes and dedicated faculty.', feesPerYear: '$42,000', scholarshipRange: '20%-40%', virtualTourUrl: '' },
  { id: '5', name: 'University of Canada West', slug: 'university-canada-west', country: 'Canada', city: 'Vancouver', logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763038261931_a2f62401.webp', summary: 'Business-focused university in Vancouver', description: 'Specializes in business and technology programs.', feesPerYear: 'CAD $29,500', scholarshipRange: '15%-25%', virtualTourUrl: '' },
  { id: '6', name: 'Royal Roads University', slug: 'royal-roads-university', country: 'Canada', city: 'Victoria', logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763038263926_ec4f2c40.webp', summary: 'Applied programs in a stunning castle campus', description: 'Focus on leadership and sustainability.', feesPerYear: 'CAD $27,800', scholarshipRange: '10%-20%', virtualTourUrl: '' },
  { id: '7', name: 'University of Technology Sydney', slug: 'uts-sydney', country: 'Australia', city: 'Sydney', qsRank: 90, logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763038265887_b9f1f6a8.webp', summary: 'Top-ranked young university with cutting-edge facilities', description: 'Known for innovation and industry engagement.', feesPerYear: 'AUD $38,000', scholarshipRange: '15%-30%', virtualTourUrl: '' },
  { id: '8', name: 'RMIT University', slug: 'rmit-melbourne', country: 'Australia', city: 'Melbourne', qsRank: 140, logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763038268358_eaec7023.webp', summary: 'Global university of technology and design', description: 'World-class programs in engineering and design.', feesPerYear: 'AUD $36,500', scholarshipRange: '20%-35%', virtualTourUrl: '' },
];

export const otherUniversities: University[] = [
  { id: 'other-1', name: 'Oxford Brookes University', slug: 'oxford-brookes', country: 'United Kingdom', city: 'Oxford', logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763039703021_80cbca6b.webp', summary: 'Modern university with strong teaching excellence', description: '', feesPerYear: '', scholarshipRange: '', virtualTourUrl: '' },
  { id: 'other-2', name: 'University of Greenwich', slug: 'university-greenwich', country: 'United Kingdom', city: 'London', logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763039704103_4c95fcd0.webp', summary: 'Historic university with beautiful riverside campus', description: '', feesPerYear: '', scholarshipRange: '', virtualTourUrl: '' },
  { id: 'other-3', name: 'Coventry University', slug: 'coventry-university', country: 'United Kingdom', city: 'Coventry', logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763039706458_494652ba.webp', summary: 'Award-winning university known for innovation', description: '', feesPerYear: '', scholarshipRange: '', virtualTourUrl: '' },
  { id: 'other-4', name: 'La Trobe University', slug: 'latrobe-university', country: 'Australia', city: 'Melbourne', logoUrl: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763039715336_0ff69db8.webp', summary: 'Research-intensive university with social impact focus', description: '', feesPerYear: '', scholarshipRange: '', virtualTourUrl: '' },
];
