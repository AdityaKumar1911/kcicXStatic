export interface ProgramModule {
  title: string;
  desc: string;
  icon?: string;
}

export interface CareerPath {
  title: string;
  salary: string;
  companies: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface SpecialtyProgram {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  duration: string;
  startDate: string;
  heroImage: string;
  acceptance: string;
  designedBy: string;
  studyInIndia: string;
  studyAbroad: string;
  averageSalary: string;
  potentialRecruiters: string[];
  partnerUniversities: string[];
  modules: ProgramModule[];
  careers: CareerPath[];
  requirements: string[];
  whyKCIC: string[];
  faqs: FAQ[];
}
