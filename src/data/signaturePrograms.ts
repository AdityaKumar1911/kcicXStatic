export interface SignatureProgram {
  id: string;
  name: string;
  studyInIndia: string;
  studyAbroad: string;
  courseTag: string;
  acceptance: string;
  designedBy: string;
  slug: string;
  bannerImage: string;
  overlayText: string;
  tagline: string;
  partnerUniversities: string[];
  averageSalary?: string;
  potentialRecruiters?: string[];
}

export const signaturePrograms: SignatureProgram[] = [
  {
    id: '1',
    name: 'BEng (Hons) Motorsport Engineering',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK',
    courseTag: 'High Demand',
    acceptance: '20 Students/intake',
    designedBy: 'McLaren, UK',
    slug: 'beng-hons-motorsport-engineering',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763040892322_14aacdb3.webp',
    overlayText: 'Build the future of racing technology',
    tagline: 'Engineer the next generation of motorsport excellence',
    partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Oxford Brookes University'],
    averageSalary: '£32,000 - £35,000',
    potentialRecruiters: ['Williams Engineering', 'Aston Martin', 'VW Racing', 'Landrover Jaguar', 'BMW']
  },
  {
    id: '2',
    name: 'BEng (Hons) Artificial Intelligence with Placement',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK University Campus',
    courseTag: 'Trending',
    acceptance: '25 Students/intake',
    designedBy: 'Leading UK Universities',
    slug: 'beng-hons-artificial-intelligence-with-placement',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763041132227_afffa31c.webp',
    overlayText: 'Shape the future with AI innovation',
    tagline: 'Lead the AI revolution with industry placement',
    partnerUniversities: ['University of Hertfordshire', 'Coventry University', 'De Montfort University'],
    averageSalary: '£34,000 - £37,000',
    potentialRecruiters: ['Concentrix', 'IBM', 'Apple', 'Google', 'SAP', 'Synopsys', 'Salesforce', 'Liberty IT', 'Cisco']
  },
  {
    id: '3',
    name: 'BSc (Hons) Psychology',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK',
    courseTag: 'Popular',
    acceptance: '30 Students/intake',
    designedBy: 'Leading UK Universities',
    slug: 'bsc-hons-psychology',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053856280_50edb33d.webp',
    overlayText: 'Understand the human mind',
    tagline: 'Explore human behavior and mental processes',
    partnerUniversities: ['University of Hertfordshire', 'Coventry University', 'De Montfort University'],
    averageSalary: '£28,000 - £32,000',
    potentialRecruiters: ['NHS', 'Mind', 'Priory Group', 'Nuffield Health', 'BUPA']
  },
  {
    id: '4',
    name: 'BEng (Hons) Aerospace Engineering',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK',
    courseTag: 'High Demand',
    acceptance: '20 Students/intake',
    designedBy: 'Leading UK Universities',
    slug: 'beng-hons-aerospace-engineering',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053857556_25d325fa.webp',
    overlayText: 'Design the future of flight',
    tagline: 'Engineer aircraft and spacecraft systems',
    partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
    averageSalary: '£33,000 - £38,000',
    potentialRecruiters: ['Rolls-Royce', 'BAE Systems', 'Airbus', 'Boeing', 'GKN Aerospace']
  },
  {
    id: '5',
    name: 'BSc (Hons) Biomedical Science',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK',
    courseTag: 'Trending',
    acceptance: '25 Students/intake',
    designedBy: 'Leading UK Universities',
    slug: 'bsc-hons-biomedical-science',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053858584_131cd18b.webp',
    overlayText: 'Advance medical research',
    tagline: 'Discover breakthroughs in human health',
    partnerUniversities: ['University of Hertfordshire', 'De Montfort University', 'Coventry University'],
    averageSalary: '£27,000 - £31,000',
    potentialRecruiters: ['NHS', 'GSK', 'AstraZeneca', 'Roche', 'Pfizer']
  },
  {
    id: '6',
    name: 'BEng (Hons) Biomedical Engineering',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK',
    courseTag: 'Emerging',
    acceptance: '20 Students/intake',
    designedBy: 'Leading UK Universities',
    slug: 'beng-hons-biomedical-engineering',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053859686_15102c75.webp',
    overlayText: 'Innovate healthcare technology',
    tagline: 'Create life-changing medical devices',
    partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
    averageSalary: '£30,000 - £35,000',
    potentialRecruiters: ['Medtronic', 'Siemens Healthineers', 'Philips Healthcare', 'Smith & Nephew', 'Stryker']
  },
  {
    id: '7',
    name: 'BEng (Hons) Civil Engineering',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK',
    courseTag: 'High Demand',
    acceptance: '25 Students/intake',
    designedBy: 'Leading UK Universities',
    slug: 'beng-hons-civil-engineering',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053861366_c59783c0.webp',
    overlayText: 'Build tomorrow\'s infrastructure',
    tagline: 'Design and construct sustainable structures',
    partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
    averageSalary: '£29,000 - £34,000',
    potentialRecruiters: ['Arup', 'Balfour Beatty', 'Mott MacDonald', 'Atkins', 'WSP']
  },
  {
    id: '8',
    name: 'BA (Hons) Professional Accounting with ACCA',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK',
    courseTag: 'Premium',
    acceptance: '30 Students/intake',
    designedBy: 'ACCA Approved',
    slug: 'bsc-hons-accounting-finance-acca',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053869714_804dce34.webp',
    overlayText: 'Master global finance',
    tagline: 'Become a chartered accountant with ACCA',
    partnerUniversities: ['De Montfort University', 'University of Hertfordshire', 'Coventry University'],
    averageSalary: '£30,000 - £36,000',
    potentialRecruiters: ['Deloitte', 'PwC', 'EY', 'KPMG', 'Grant Thornton']
  },
  {
    id: '9',
    name: 'BEng (Hons) Electrical & Electronic with Semiconductor',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK',
    courseTag: 'Trending',
    acceptance: '20 Students/intake',
    designedBy: 'Leading UK Universities',
    slug: 'beng-hons-electrical-electronics-semiconductor',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053870857_48de3b2e.webp',
    overlayText: 'Power the digital revolution',
    tagline: 'Design next-generation semiconductor systems',
    partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
    averageSalary: '£32,000 - £37,000',
    potentialRecruiters: ['Intel', 'ARM', 'Qualcomm', 'Texas Instruments', 'Analog Devices']
  },
  {
    id: '10',
    name: 'BEng (Hons) Computer Systems Engineering',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK',
    courseTag: 'High Demand',
    acceptance: '25 Students/intake',
    designedBy: 'Leading UK Universities',
    slug: 'beng-hons-computer-systems-engineering',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053871875_349cf0ec.webp',
    overlayText: 'Build intelligent systems',
    tagline: 'Engineer the future of computing',
    partnerUniversities: ['University of Hertfordshire', 'Coventry University', 'De Montfort University'],
    averageSalary: '£33,000 - £38,000',
    potentialRecruiters: ['Microsoft', 'Amazon', 'IBM', 'Cisco', 'Dell Technologies']
  },
  {
    id: '11',
    name: 'BEng (Hons) Electronics & Embedded Systems',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK',
    courseTag: 'Emerging',
    acceptance: '20 Students/intake',
    designedBy: 'Leading UK Universities',
    slug: 'beng-hons-electronics-embedded-systems',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053873315_2f4a5442.webp',
    overlayText: 'Create smart devices',
    tagline: 'Design embedded systems for IoT',
    partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
    averageSalary: '£31,000 - £36,000',
    potentialRecruiters: ['ARM', 'NXP Semiconductors', 'STMicroelectronics', 'Bosch', 'Siemens']
  },
  {
    id: '12',
    name: 'BEng (Hons) Electrical with Railway Engineering',
    studyInIndia: 'KCIC, ECR Campus',
    studyAbroad: 'UK',
    courseTag: 'High Demand',
    acceptance: '20 Students/intake',
    designedBy: 'Leading UK Universities',
    slug: 'beng-hons-electrical-railway-engineering',
    bannerImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763053874419_b00656ec.webp',
    overlayText: 'Electrify rail transport',
    tagline: 'Engineer sustainable railway systems',
    partnerUniversities: ['Coventry University', 'University of Hertfordshire', 'Kingston University'],
    averageSalary: '£30,000 - £35,000',
    potentialRecruiters: ['Network Rail', 'Siemens Mobility', 'Bombardier', 'Alstom', 'Hitachi Rail']
  }
];

