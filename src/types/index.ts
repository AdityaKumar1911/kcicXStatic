export type PathwayModel = '1+2' | '2+2' | '2+1' | '1+3';
export type Department = 'Business' | 'Engineering' | 'Technology' | 'Psychology';


export interface Country {
  id: string;
  name: string;
  code: string;
}

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
  employabilityRate?: string;
}




export interface ProgramCareerOutcome {
  title: string;
  salaryRange: string;
  demandLevel: 'High' | 'Very High' | 'Moderate';
}

export interface ProgramEmployabilityData {
  jobPlacementRate: number;
  averageStartingSalary: string;
  immigrationShortageSkill: boolean;
  shortageLevel?: 'Critical' | 'Medium';
  shortageSkillCategory?: string;
  careerOutcomes: ProgramCareerOutcome[];
  topRecruiters?: string[];
}


export interface Program {
  id: string;
  title: string;
  slug: string;
  discipline: string;
  department: Department;
  pathwayModel: PathwayModel;
  durationYears: number;
  year1FeesInr: number;
  year2FeesInr?: number;
  abroadFeesPerYearInr: number;
  requirements: string;
  ieltsRequired: boolean;
  ieltsWaiverNotes?: string;
  partnerUniversities: string[];
  universityPrograms?: { [universityId: string]: string[] };
  modules: Module[];
  intakes: string[];
  majors?: string[];
  overview?: string;
  studyJourney?: { year: number; location: string; description: string }[];
  accreditation?: string;
  exemptions?: string;
  industryCollaboration?: string;
  faqs?: { question: string; answer: string }[];
  employabilityData?: ProgramEmployabilityData;
}







export interface Module {
  id: string;
  title: string;
  yearNumber: number;
  isStage1: boolean;
  description: string;
}

export interface Tutor {
  id: string;
  name: string;
  slug: string;
  title: string;
  photoUrl: string;
  bio: string;
  expertise: string[];
  videoIntroUrl?: string;
  campusId?: string;
  acceptingMentees: boolean;
}

export interface Campus {
  id: string;
  name: string;
  slug: string;
  type: 'main' | 'satellite' | 'partner';
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
