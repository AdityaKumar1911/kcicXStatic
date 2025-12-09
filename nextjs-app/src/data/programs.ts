export interface Program {
  id: string;
  title: string;
  slug: string;
  discipline: string;
  department: string;
  pathwayModel: string;
  durationYears: number;
  year1FeesInr: number;
  abroadFeesPerYearInr: number;
  requirements: string;
  ieltsRequired: boolean;
  overview: string;
  majors: string[];
  intakes: string[];
}

export const programs: Program[] = [
  { id: '1', title: 'Business', slug: 'business', discipline: 'Business', department: 'Business', pathwayModel: '1+2', durationYears: 3, year1FeesInr: 265000, abroadFeesPerYearInr: 265000, requirements: '12th pass with 60%', ieltsRequired: false, overview: 'Comprehensive foundation in business principles for global careers.', majors: ['Accounting & Finance', 'Management', 'Marketing', 'HR'], intakes: ['July', 'January'] },
  { id: '2', title: 'Engineering', slug: 'engineering', discipline: 'Engineering', department: 'Engineering', pathwayModel: '1+2', durationYears: 3, year1FeesInr: 265000, abroadFeesPerYearInr: 265000, requirements: '12th with PCM 70%', ieltsRequired: false, overview: 'Solid foundation in engineering principles across disciplines.', majors: ['Civil', 'Mechanical', 'Electrical', 'Aerospace'], intakes: ['July', 'January'] },
  { id: '3', title: 'Computer Science', slug: 'computer', discipline: 'Computer Science', department: 'Technology', pathwayModel: '1+2', durationYears: 3, year1FeesInr: 265000, abroadFeesPerYearInr: 265000, requirements: '12th with Maths 65%', ieltsRequired: false, overview: 'Cutting-edge education in computing and software development.', majors: ['Software Engineering', 'AI', 'Cybersecurity', 'Data Science'], intakes: ['July', 'January'] },
  { id: '4', title: 'Psychology', slug: 'psychology', discipline: 'Psychology', department: 'Psychology', pathwayModel: '1+2', durationYears: 3, year1FeesInr: 265000, abroadFeesPerYearInr: 265000, requirements: '12th Science 60%', ieltsRequired: false, overview: 'Comprehensive training in psychological theories and research.', majors: ['Clinical', 'Counseling', 'Organizational', 'Forensic'], intakes: ['July', 'January'] },
  { id: '5', title: 'Science', slug: 'science', discipline: 'Science', department: 'Science', pathwayModel: '1+2', durationYears: 3, year1FeesInr: 265000, abroadFeesPerYearInr: 265000, requirements: '12th Science 60%', ieltsRequired: false, overview: 'Strong foundation in scientific principles and research.', majors: ['Biology', 'Chemistry', 'Physics', 'Biotechnology'], intakes: ['July', 'January'] },
  { id: '6', title: 'Construction', slug: 'construction', discipline: 'Construction', department: 'Engineering', pathwayModel: '1+2', durationYears: 3, year1FeesInr: 265000, abroadFeesPerYearInr: 265000, requirements: '12th pass 60%', ieltsRequired: false, overview: 'Comprehensive training in construction and project management.', majors: ['Construction Management', 'Quantity Surveying', 'Site Management'], intakes: ['July', 'January'] },
  { id: '7', title: 'Hospitality', slug: 'hospitality', discipline: 'Hospitality', department: 'Business', pathwayModel: '1+2', durationYears: 3, year1FeesInr: 265000, abroadFeesPerYearInr: 265000, requirements: '12th pass 55%', ieltsRequired: false, overview: 'Training in hotel operations and customer service excellence.', majors: ['Hotel Management', 'Event Management', 'Tourism'], intakes: ['July', 'January'] },
  { id: '8', title: 'Cloud Computing', slug: 'cloud-computing', discipline: 'Cloud Computing', department: 'Technology', pathwayModel: '1+2', durationYears: 3, year1FeesInr: 265000, abroadFeesPerYearInr: 265000, requirements: '12th with Maths 60%', ieltsRequired: false, overview: 'Cutting-edge education in cloud technologies and DevOps.', majors: ['Cloud Architecture', 'DevOps', 'Cloud Security', 'AWS'], intakes: ['July', 'January'] },
];
