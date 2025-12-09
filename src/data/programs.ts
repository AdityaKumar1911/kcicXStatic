import { Program } from '@/types';

export const programs: Program[] = [
  {
    id: '1',
    title: 'Business',
    slug: 'business',
    discipline: 'Business',
    department: 'Business',
    pathwayModel: '1+2',
    durationYears: 3,
    year1FeesInr: 265000,
    abroadFeesPerYearInr: 265000,
    requirements: '12th pass with 60% or equivalent',
    ieltsRequired: false,
    ieltsWaiverNotes: 'IELTS waiver available with internal English test',
    partnerUniversities: ['1', '2', '4'],
    universityPrograms: {
      '1': ['Bachelor of Accounting', 'BA (Hons) Business Management', 'BA (Hons) Finance', 'BA (Hons) International Business'],
      '2': ['BSc Business Administration', 'BA (Hons) Accounting & Finance', 'BA (Hons) Marketing Management'],
      '4': ['BA (Hons) Business Economics', 'BA (Hons) Entrepreneurship', 'BSc Management Studies']
    },
    majors: ['Accounting & Finance', 'Management', 'Entrepreneurship', 'Human Resources', 'Marketing', 'Supply Chain Management', 'Business Law'],
    modules: [
      { id: '1', title: 'Introduction to Business', yearNumber: 1, isStage1: true, description: 'Fundamentals of business operations' },
      { id: '2', title: 'Marketing Principles', yearNumber: 1, isStage1: true, description: 'Core marketing concepts' }
    ],
    intakes: ['July', 'January'],
    overview: 'The Business qualification at KCIC provides a comprehensive foundation in business principles, preparing students for successful careers in the global business environment. This program combines theoretical knowledge with practical application, ensuring graduates are industry-ready.',
    studyJourney: [
      { year: 1, location: 'KCIC India', description: 'Foundation year covering core business principles, accounting fundamentals, marketing basics, and business communication.' },
      { year: 2, location: 'KCIC/Study Abroad', description: 'Advanced business modules with specialization options in your chosen major. Option to continue at KCIC or transfer to partner university.' },
      { year: 3, location: 'Study Abroad', description: 'Final year with industry projects, internships, and capstone business projects.' },
      { year: 4, location: 'Post-Graduation', description: '2 Years Work Permit - Full-time employment opportunities up to 40 hours/week. Gain valuable international work experience and build your professional network in your chosen field.' }
    ],
    accreditation: 'Accredited by leading international education bodies',
    exemptions: 'Students may receive exemptions for professional qualifications such as ACCA, CPA, and other recognized business certifications based on completed modules.',
    industryCollaboration: 'Partnership with leading corporations including Fortune 500 companies for internships, guest lectures, and placement opportunities.',
    employabilityData: {
      jobPlacementRate: 92,
      averageStartingSalary: '£32,000 - £45,000',
      immigrationShortageSkill: true,
      shortageLevel: 'Medium',
      shortageSkillCategory: 'Business & Finance Professionals',
      topRecruiters: ['Deloitte', 'PwC', 'KPMG', 'Ernst & Young', 'Accenture'],
      careerOutcomes: [
        { title: 'Financial Analyst', salaryRange: '£35,000 - £55,000', demandLevel: 'Very High' },
        { title: 'Management Consultant', salaryRange: '£40,000 - £65,000', demandLevel: 'High' },
        { title: 'Business Development Manager', salaryRange: '£38,000 - £60,000', demandLevel: 'High' },
        { title: 'Marketing Manager', salaryRange: '£35,000 - £58,000', demandLevel: 'Moderate' }
      ]
    },

    faqs: [
      { question: 'What career opportunities are available after completing the Business qualification?', answer: 'Graduates can pursue careers in management, finance, marketing, human resources, entrepreneurship, consulting, and various other business sectors.' },
      { question: 'Can I transfer to a partner university after Year 1?', answer: 'Yes, students have the flexibility to transfer to a partner university after completing Year 1 at KCIC, subject to meeting university requirements.' },
      { question: 'Are internships included in the program?', answer: 'Yes, the program includes industry internships and practical projects to provide hands-on experience.' },
      { question: 'What is the class size?', answer: 'We maintain small class sizes to ensure personalized attention and effective learning, typically 20-25 students per class.' }
    ]
  },

  {
    id: '2',
    title: 'Engineering',
    slug: 'engineering',
    discipline: 'Engineering',
    department: 'Engineering',
    pathwayModel: '1+2',
    durationYears: 3,
    year1FeesInr: 265000,
    abroadFeesPerYearInr: 265000,
    requirements: '12th pass with Physics, Chemistry, Maths and 70%',
    ieltsRequired: false,
    partnerUniversities: ['1', '5', '8'],
    universityPrograms: {
      '1': ['BEng (Hons) Civil Engineering', 'BEng (Hons) Mechanical Engineering', 'BEng (Hons) Electrical Engineering'],
      '5': ['BEng Civil Engineering', 'BEng Mechanical Engineering', 'BSc Engineering Management', 'BEng Aerospace Engineering'],
      '8': ['BEng (Hons) Structural Engineering', 'BEng (Hons) Chemical Engineering', 'BSc Engineering Technology']
    },
    majors: ['Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Chemical Engineering', 'Aerospace Engineering', 'Structural Engineering'],
    modules: [
      { id: '5', title: 'Engineering Mathematics', yearNumber: 1, isStage1: true, description: 'Core engineering maths' },
      { id: '6', title: 'Structural Analysis', yearNumber: 1, isStage1: true, description: 'Structural principles' }
    ],
    intakes: ['July', 'January'],
    overview: 'The Engineering qualification at KCIC offers a solid foundation in engineering principles with specializations across various disciplines. Students gain hands-on experience with modern engineering tools and technologies.',
    studyJourney: [
      { year: 1, location: 'KCIC India', description: 'Foundation year covering engineering mathematics, physics, and core engineering principles.' },
      { year: 2, location: 'KCIC/Study Abroad', description: 'Specialized engineering modules in your chosen discipline with laboratory work. Option to continue at KCIC or transfer to partner university.' },
      { year: 3, location: 'Study Abroad', description: 'Advanced engineering projects, industry internships, and final year dissertation.' },
      { year: 4, location: 'Post-Graduation', description: '2 Years Work Permit - Full-time employment opportunities up to 40 hours/week. Gain valuable international work experience and build your professional network in your chosen field.' }
    ],
    accreditation: 'Accredited by international engineering education bodies',
    exemptions: 'Possible exemptions for professional engineering certifications based on completed coursework.',
    industryCollaboration: 'Partnerships with leading engineering firms for internships, site visits, and recruitment opportunities.',
    employabilityData: {
      jobPlacementRate: 94,
      averageStartingSalary: '£35,000 - £52,000',
      immigrationShortageSkill: true,
      shortageLevel: 'Critical',
      shortageSkillCategory: 'Engineering Professionals',
      topRecruiters: ['Rolls-Royce', 'BAE Systems', 'Siemens', 'Arup', 'Jacobs Engineering'],
      careerOutcomes: [
        { title: 'Civil Engineer', salaryRange: '£32,000 - £50,000', demandLevel: 'Very High' },
        { title: 'Mechanical Engineer', salaryRange: '£35,000 - £55,000', demandLevel: 'Very High' },
        { title: 'Electrical Engineer', salaryRange: '£34,000 - £52,000', demandLevel: 'High' },
        { title: 'Project Engineer', salaryRange: '£38,000 - £58,000', demandLevel: 'High' }
      ]
    },

    faqs: [
      { question: 'What engineering specializations are available?', answer: 'We offer specializations in Civil, Mechanical, Electrical, Chemical, Aerospace, and Structural Engineering.' },
      { question: 'Do I need to have studied engineering in 12th standard?', answer: 'You need to have studied Physics, Chemistry, and Mathematics in 12th standard with a minimum of 70%.' },
      { question: 'Are there laboratory facilities available?', answer: 'Yes, we have state-of-the-art laboratory facilities for hands-on practical learning.' },
      { question: 'Can I get professional engineering certifications?', answer: 'Yes, the program prepares you for various professional engineering certifications and you may receive exemptions based on completed coursework.' }
    ]
  },


  {
    id: '3',
    title: 'Computer',
    slug: 'computer',
    discipline: 'Computer Science',
    department: 'Technology',
    pathwayModel: '1+2',
    durationYears: 3,
    year1FeesInr: 265000,
    abroadFeesPerYearInr: 265000,
    requirements: '12th pass with Mathematics and 65%',
    ieltsRequired: false,
    partnerUniversities: ['2', '3', '7'],
    universityPrograms: {
      '2': ['BSc (Hons) Computer Science', 'BSc Software Engineering', 'BSc Artificial Intelligence', 'BSc Cybersecurity'],
      '3': ['BSc Computing', 'BSc (Hons) Software Development', 'BSc Data Science'],
      '7': ['BSc Computer Science', 'BSc (Hons) Information Technology', 'BSc Web Development', 'BSc Game Development']
    },
    majors: ['Software Engineering', 'Artificial Intelligence', 'Cybersecurity', 'Data Science', 'Web Development', 'Mobile App Development', 'Game Development'],
    modules: [
      { id: '3', title: 'Programming Fundamentals', yearNumber: 1, isStage1: true, description: 'Learn core programming' },
      { id: '4', title: 'Data Structures', yearNumber: 2, isStage1: true, description: 'Advanced data structures' }
    ],
    intakes: ['July', 'January'],
    overview: 'The Computer Science qualification at KCIC provides cutting-edge education in computing technologies, programming, and software development. Students develop practical skills in modern programming languages and emerging technologies.',
    studyJourney: [
      { year: 1, location: 'KCIC India', description: 'Foundation year covering programming fundamentals, data structures, and computer systems.' },
      { year: 2, location: 'KCIC/Study Abroad', description: 'Advanced computing modules with specialization in AI, cybersecurity, or software engineering. Option to continue at KCIC or transfer to partner university.' },
      { year: 3, location: 'Study Abroad', description: 'Final year projects, industry internships, and advanced specialization modules.' },
      { year: 4, location: 'Post-Graduation', description: '2 Years Work Permit - Full-time employment opportunities up to 40 hours/week. Gain valuable international work experience and build your professional network in your chosen field.' }
    ],
    accreditation: 'Accredited by international computing education bodies',
    exemptions: 'Exemptions available for industry certifications like AWS, Microsoft, and Cisco based on coursework.',
    industryCollaboration: 'Partnerships with tech giants and startups for internships, hackathons, and campus recruitment.',
    employabilityData: {
      jobPlacementRate: 96,
      averageStartingSalary: '£38,000 - £58,000',
      immigrationShortageSkill: true,
      shortageLevel: 'Critical',
      shortageSkillCategory: 'IT & Technology Professionals',
      topRecruiters: ['Google', 'Microsoft', 'Amazon', 'Meta', 'IBM', 'Infosys'],
      careerOutcomes: [
        { title: 'Software Developer', salaryRange: '£35,000 - £60,000', demandLevel: 'Very High' },
        { title: 'Data Scientist', salaryRange: '£45,000 - £75,000', demandLevel: 'Very High' },
        { title: 'Cybersecurity Analyst', salaryRange: '£40,000 - £65,000', demandLevel: 'Very High' },
        { title: 'AI/ML Engineer', salaryRange: '£50,000 - £85,000', demandLevel: 'Very High' }
      ]
    },

    faqs: [
      { question: 'What programming languages will I learn?', answer: 'You will learn multiple programming languages including Python, Java, C++, JavaScript, and more, depending on your specialization.' },
      { question: 'Are there opportunities for internships at tech companies?', answer: 'Yes, we have partnerships with leading tech companies and startups that offer internship opportunities to our students.' },
      { question: 'Can I specialize in AI and Machine Learning?', answer: 'Yes, we offer specializations in Artificial Intelligence, Data Science, and other emerging technologies.' },
      { question: 'Will I get industry certifications?', answer: 'The program prepares you for industry certifications from AWS, Microsoft, Cisco, and other leading technology providers.' }
    ]
  },



  {
    id: '4',
    title: 'Psychology',
    slug: 'psychology',
    discipline: 'Psychology',
    department: 'Psychology',
    pathwayModel: '1+2',
    durationYears: 3,
    year1FeesInr: 265000,
    abroadFeesPerYearInr: 265000,
    requirements: '12th pass with 60% in Science',
    ieltsRequired: false,
    partnerUniversities: ['3', '4', '6'],
    universityPrograms: {
      '3': ['BSc (Hons) Psychology', 'BSc Applied Psychology', 'BSc Psychology with Counselling'],
      '4': ['BSc Psychology', 'BA (Hons) Psychology', 'BSc (Hons) Psychology with Criminology'],
      '6': ['BSc (Hons) Psychology', 'BA Psychology', 'BSc Psychology and Child Development']
    },
    majors: ['Clinical Psychology', 'Counseling Psychology', 'Educational Psychology', 'Organizational Psychology', 'Forensic Psychology', 'Sports Psychology'],
    modules: [
      { id: '9', title: 'Introduction to Psychology', yearNumber: 1, isStage1: true, description: 'Psychology overview' },
      { id: '10', title: 'Cognitive Psychology', yearNumber: 1, isStage1: true, description: 'Study of cognition' }
    ],
    intakes: ['July', 'January'],
    overview: 'The Psychology qualification at KCIC offers comprehensive training in psychological theories, research methods, and practical applications. Students develop critical thinking and analytical skills essential for understanding human behavior.',
    studyJourney: [
      { year: 1, location: 'KCIC India', description: 'Foundation year covering introduction to psychology, research methods, and cognitive psychology.' },
      { year: 2, location: 'KCIC/Study Abroad', description: 'Advanced psychology modules with specialization in clinical, counseling, or organizational psychology. Option to continue at KCIC or transfer to partner university.' },
      { year: 3, location: 'Study Abroad', description: 'Final year with research projects, practical placements, and specialized electives.' },
      { year: 4, location: 'Post-Graduation', description: '2 Years Work Permit - Full-time employment opportunities up to 40 hours/week. Gain valuable international work experience and build your professional network in your chosen field.' }
    ],
    accreditation: 'Accredited by international psychology education bodies',
    exemptions: 'Exemptions available for professional psychology certifications based on completed modules.',
    industryCollaboration: 'Partnerships with healthcare institutions, counseling centers, and corporate organizations for practical training.',
    employabilityData: {
      jobPlacementRate: 88,
      averageStartingSalary: '£28,000 - £42,000',
      immigrationShortageSkill: true,
      shortageLevel: 'Critical',
      shortageSkillCategory: 'Healthcare & Mental Health Professionals',
      topRecruiters: ['NHS', 'Mind', 'Priory Group', 'BUPA', 'Nuffield Health'],
      careerOutcomes: [
        { title: 'Clinical Psychologist', salaryRange: '£40,000 - £70,000', demandLevel: 'Very High' },
        { title: 'Counselling Psychologist', salaryRange: '£35,000 - £55,000', demandLevel: 'High' },
        { title: 'Organizational Psychologist', salaryRange: '£38,000 - £60,000', demandLevel: 'Moderate' },
        { title: 'Mental Health Support Worker', salaryRange: '£25,000 - £35,000', demandLevel: 'Very High' }
      ]
    },

    faqs: [
      { question: 'What specializations are available in Psychology?', answer: 'We offer specializations in Clinical, Counseling, Educational, Organizational, Forensic, and Sports Psychology.' },
      { question: 'Do I need a science background?', answer: 'Yes, you need to have completed 12th standard with Science subjects and a minimum of 60%.' },
      { question: 'Are there practical placements included?', answer: 'Yes, the program includes practical placements at healthcare institutions, counseling centers, and corporate organizations.' },
      { question: 'Can I pursue further studies after this qualification?', answer: 'Yes, graduates can pursue postgraduate studies in psychology or related fields at universities worldwide.' }
    ]
  },



  {
    id: '5',
    title: 'Science',
    slug: 'science',
    discipline: 'Science',
    department: 'Science',
    pathwayModel: '1+2',
    durationYears: 3,
    year1FeesInr: 265000,
    abroadFeesPerYearInr: 265000,
    requirements: '12th pass with 60% in Science',
    ieltsRequired: false,
    partnerUniversities: ['1', '3', '5'],
    universityPrograms: {
      '1': ['BSc (Hons) Biological Sciences', 'BSc Chemistry', 'BSc (Hons) Environmental Science'],
      '3': ['BSc Biomedical Science', 'BSc (Hons) Biotechnology', 'BSc Applied Sciences'],
      '5': ['BSc (Hons) Biochemistry', 'BSc Microbiology', 'BSc Physics', 'BSc Environmental Science']
    },
    majors: ['Biology', 'Chemistry', 'Physics', 'Environmental Science', 'Biotechnology', 'Biochemistry', 'Microbiology'],
    modules: [
      { id: '13', title: 'Scientific Methods', yearNumber: 1, isStage1: true, description: 'Research methodology' },
      { id: '14', title: 'Laboratory Techniques', yearNumber: 1, isStage1: true, description: 'Practical lab skills' }
    ],
    intakes: ['July', 'January'],
    overview: 'The Science qualification at KCIC provides a strong foundation in scientific principles, research methodologies, and laboratory techniques. Students develop analytical and problem-solving skills essential for careers in science and research.',
    studyJourney: [
      { year: 1, location: 'KCIC India', description: 'Foundation year covering scientific methods, laboratory techniques, and core science subjects.' },
      { year: 2, location: 'KCIC/Study Abroad', description: 'Advanced science modules with specialization in biology, chemistry, physics, or environmental science. Option to continue at KCIC or transfer to partner university.' },
      { year: 3, location: 'Study Abroad', description: 'Final year with research projects, advanced laboratory work, and specialized electives.' },
      { year: 4, location: 'Post-Graduation', description: '2 Years Work Permit - Full-time employment opportunities up to 40 hours/week. Gain valuable international work experience and build your professional network in your chosen field.' }
    ],
    accreditation: 'Accredited by international science education bodies',
    exemptions: 'Exemptions available for professional science certifications based on completed modules.',
    industryCollaboration: 'Partnerships with research institutions, pharmaceutical companies, and environmental organizations for practical training.',
    employabilityData: {
      jobPlacementRate: 86,
      averageStartingSalary: '£30,000 - £45,000',
      immigrationShortageSkill: true,
      shortageLevel: 'Medium',
      shortageSkillCategory: 'Life Sciences & Research Professionals',
      topRecruiters: ['GSK', 'AstraZeneca', 'Pfizer', 'NHS', 'Public Health England'],
      careerOutcomes: [
        { title: 'Research Scientist', salaryRange: '£32,000 - £55,000', demandLevel: 'High' },
        { title: 'Biomedical Scientist', salaryRange: '£35,000 - £50,000', demandLevel: 'Very High' },
        { title: 'Environmental Consultant', salaryRange: '£28,000 - £45,000', demandLevel: 'High' },
        { title: 'Laboratory Manager', salaryRange: '£38,000 - £55,000', demandLevel: 'Moderate' }
      ]
    },

    faqs: [
      { question: 'What science specializations can I choose?', answer: 'You can specialize in Biology, Chemistry, Physics, Environmental Science, Biotechnology, Biochemistry, or Microbiology.' },
      { question: 'Are laboratory facilities available?', answer: 'Yes, we have modern laboratory facilities equipped with the latest scientific equipment for hands-on learning.' },
      { question: 'Can I pursue research after this qualification?', answer: 'Yes, this qualification provides a strong foundation for pursuing research careers or postgraduate studies in science.' },
      { question: 'What career opportunities are available?', answer: 'Graduates can work in research institutions, pharmaceutical companies, environmental organizations, healthcare, and education sectors.' }
    ]
  },



  {
    id: '6',
    title: 'Construction',
    slug: 'construction',
    discipline: 'Construction Management',
    department: 'Engineering',
    pathwayModel: '1+2',
    durationYears: 3,
    year1FeesInr: 265000,
    abroadFeesPerYearInr: 265000,
    requirements: '12th pass with 60%',
    ieltsRequired: false,
    partnerUniversities: ['1', '5', '8'],
    universityPrograms: {
      '1': ['BSc (Hons) Construction Management', 'BSc Quantity Surveying', 'BSc Building Services Engineering'],
      '5': ['BSc Construction Project Management', 'BSc (Hons) Quantity Surveying', 'BSc Sustainable Construction'],
      '8': ['BSc (Hons) Construction Management', 'BSc Site Management', 'BSc Building Technology']
    },
    majors: ['Construction Management', 'Project Management', 'Quantity Surveying', 'Building Services', 'Sustainable Construction', 'Site Management'],
    modules: [
      { id: '15', title: 'Construction Principles', yearNumber: 1, isStage1: true, description: 'Construction fundamentals' },
      { id: '16', title: 'Project Planning', yearNumber: 1, isStage1: true, description: 'Planning and scheduling' }
    ],
    intakes: ['July', 'January'],
    overview: 'The Construction Management qualification at KCIC provides comprehensive training in construction principles, project management, and building technologies. Students gain practical skills in managing construction projects from planning to completion.',
    studyJourney: [
      { year: 1, location: 'KCIC India', description: 'Foundation year covering construction principles, project planning, and building materials.' },
      { year: 2, location: 'KCIC/Study Abroad', description: 'Advanced construction modules with specialization in project management or quantity surveying. Option to continue at KCIC or transfer to partner university.' },
      { year: 3, location: 'Study Abroad', description: 'Final year with site management projects, industry placements, and advanced construction techniques.' },
      { year: 4, location: 'Post-Graduation', description: '2 Years Work Permit - Full-time employment opportunities up to 40 hours/week. Gain valuable international work experience and build your professional network in your chosen field.' }
    ],
    accreditation: 'Accredited by international construction education bodies',
    exemptions: 'Exemptions available for professional construction certifications based on completed modules.',
    industryCollaboration: 'Partnerships with construction firms, architectural practices, and property developers for practical training.',
    employabilityData: {
      jobPlacementRate: 91,
      averageStartingSalary: '£32,000 - £48,000',
      immigrationShortageSkill: true,
      shortageLevel: 'Critical',
      shortageSkillCategory: 'Construction & Built Environment',
      topRecruiters: ['Balfour Beatty', 'Kier Group', 'Laing O\'Rourke', 'Mace', 'Skanska'],
      careerOutcomes: [
        { title: 'Construction Manager', salaryRange: '£35,000 - £55,000', demandLevel: 'Very High' },
        { title: 'Quantity Surveyor', salaryRange: '£32,000 - £50,000', demandLevel: 'Very High' },
        { title: 'Site Manager', salaryRange: '£38,000 - £58,000', demandLevel: 'High' },
        { title: 'Project Manager', salaryRange: '£42,000 - £65,000', demandLevel: 'High' }
      ]
    },

    faqs: [
      { question: 'What construction specializations are available?', answer: 'We offer specializations in Construction Management, Project Management, Quantity Surveying, Building Services, Sustainable Construction, and Site Management.' },
      { question: 'Do I need a technical background?', answer: 'No specific technical background is required, just 12th pass with 60%. We provide comprehensive training from foundational to advanced levels.' },
      { question: 'Are there site visits and practical training?', answer: 'Yes, the program includes site visits, practical training, and industry placements with leading construction firms.' },
      { question: 'What career opportunities are available?', answer: 'Graduates can work as construction managers, project managers, quantity surveyors, site managers, or pursue careers in architectural practices and property development.' }
    ]
  },



  {
    id: '7',
    title: 'Hospitality',
    slug: 'hospitality',
    discipline: 'Hospitality Management',
    department: 'Business',
    pathwayModel: '1+2',
    durationYears: 3,
    year1FeesInr: 265000,
    abroadFeesPerYearInr: 265000,
    requirements: '12th pass with 55%',
    ieltsRequired: false,
    partnerUniversities: ['2', '4', '6'],
    universityPrograms: {
      '2': ['BA (Hons) Hospitality Management', 'BSc International Hospitality', 'BA Event Management', 'BSc Tourism Management'],
      '4': ['BA (Hons) Hotel Management', 'BSc Hospitality Business Management', 'BA Culinary Arts Management'],
      '6': ['BA Hospitality Management', 'BSc Event & Venue Management', 'BA Tourism & Hospitality']
    },
    majors: ['Hotel Management', 'Event Management', 'Tourism Management', 'Food & Beverage Management', 'Resort Management', 'Culinary Arts'],
    modules: [
      { id: '17', title: 'Hospitality Operations', yearNumber: 1, isStage1: true, description: 'Industry operations' },
      { id: '18', title: 'Customer Service Excellence', yearNumber: 1, isStage1: true, description: 'Service management' }
    ],
    intakes: ['July', 'January'],
    overview: 'The Hospitality Management qualification at KCIC provides comprehensive training in hotel operations, event management, and customer service excellence. Students develop practical skills essential for successful careers in the global hospitality industry.',
    studyJourney: [
      { year: 1, location: 'KCIC India', description: 'Foundation year covering hospitality operations, customer service, and food & beverage management.' },
      { year: 2, location: 'KCIC/Study Abroad', description: 'Advanced hospitality modules with specialization in hotel, event, or tourism management. Option to continue at KCIC or transfer to partner university.' },
      { year: 3, location: 'Study Abroad', description: 'Final year with industry internships, management projects, and specialized electives.' },
      { year: 4, location: 'Post-Graduation', description: '2 Years Work Permit - Full-time employment opportunities up to 40 hours/week. Gain valuable international work experience and build your professional network in your chosen field.' }
    ],
    accreditation: 'Accredited by international hospitality education bodies',
    exemptions: 'Exemptions available for professional hospitality certifications based on completed modules.',
    industryCollaboration: 'Partnerships with leading hotels, resorts, event companies, and tourism organizations for internships and placements.',
    employabilityData: {
      jobPlacementRate: 89,
      averageStartingSalary: '£26,000 - £38,000',
      immigrationShortageSkill: false,
      topRecruiters: ['Marriott', 'Hilton', 'IHG', 'Accor', 'Four Seasons'],
      careerOutcomes: [
        { title: 'Hotel Manager', salaryRange: '£35,000 - £55,000', demandLevel: 'High' },
        { title: 'Event Manager', salaryRange: '£28,000 - £45,000', demandLevel: 'High' },
        { title: 'Restaurant Manager', salaryRange: '£25,000 - £40,000', demandLevel: 'Moderate' },
        { title: 'Tourism Manager', salaryRange: '£30,000 - £48,000', demandLevel: 'Moderate' }
      ]
    },
    faqs: [
      { question: 'What hospitality specializations are available?', answer: 'We offer specializations in Hotel Management, Event Management, Tourism Management, Food & Beverage Management, Resort Management, and Culinary Arts.' },
      { question: 'Are there practical training opportunities?', answer: 'Yes, the program includes hands-on training in our facilities and industry internships at leading hotels, resorts, and event companies.' },
      { question: 'Do I need prior experience in hospitality?', answer: 'No prior experience is required. We provide comprehensive training from basics to advanced hospitality management.' },
      { question: 'What career opportunities are available?', answer: 'Graduates can work in hotels, resorts, event management companies, tourism organizations, restaurants, and pursue entrepreneurship in the hospitality sector.' }
    ]
  },



  {
    id: '8',
    title: 'Cloud Computing',
    slug: 'cloud-computing',
    discipline: 'Cloud Computing',
    department: 'Technology',
    pathwayModel: '1+2',
    durationYears: 3,
    year1FeesInr: 265000,
    abroadFeesPerYearInr: 265000,
    requirements: '12th pass with Mathematics and 60%',
    ieltsRequired: false,
    partnerUniversities: ['2', '3', '7'],
    universityPrograms: {
      '2': ['BSc (Hons) Cloud Computing', 'BSc Cloud & Network Infrastructure', 'BSc DevOps Engineering'],
      '3': ['BSc Cloud Technology', 'BSc (Hons) Cloud Solutions Architecture', 'BSc Cloud Security'],
      '7': ['BSc (Hons) Cloud Computing', 'BSc Cloud Systems Administration', 'BSc Cloud & Data Management', 'BSc Containerization Technologies']
    },
    majors: ['Cloud Architecture', 'DevOps', 'Cloud Security', 'AWS Solutions', 'Azure Administration', 'Google Cloud Platform', 'Containerization'],
    modules: [
      { id: '19', title: 'Cloud Fundamentals', yearNumber: 1, isStage1: true, description: 'Introduction to cloud' },
      { id: '20', title: 'Cloud Infrastructure', yearNumber: 1, isStage1: true, description: 'Cloud systems' }
    ],
    intakes: ['July', 'January'],
    overview: 'The Cloud Computing qualification at KCIC provides cutting-edge education in cloud technologies, DevOps practices, and cloud security. Students gain practical experience with major cloud platforms and industry-standard tools.',
    studyJourney: [
      { year: 1, location: 'KCIC India', description: 'Foundation year covering cloud fundamentals, infrastructure basics, and introduction to major cloud platforms.' },
      { year: 2, location: 'KCIC/Study Abroad', description: 'Advanced cloud modules with specialization in cloud architecture, DevOps, or cloud security. Option to continue at KCIC or transfer to partner university.' },
      { year: 3, location: 'Study Abroad', description: 'Final year with cloud projects, industry certifications preparation, and advanced specialization.' },
      { year: 4, location: 'Post-Graduation', description: '2 Years Work Permit - Full-time employment opportunities up to 40 hours/week. Gain valuable international work experience and build your professional network in your chosen field.' }
    ],
    accreditation: 'Accredited by international computing education bodies',
    exemptions: 'Exemptions available for cloud certifications like AWS, Azure, and Google Cloud based on coursework.',
    industryCollaboration: 'Partnerships with cloud service providers and tech companies for internships, certifications, and placement opportunities.',
    employabilityData: {
      jobPlacementRate: 95,
      averageStartingSalary: '£42,000 - £65,000',
      immigrationShortageSkill: true,
      shortageLevel: 'Critical',
      shortageSkillCategory: 'Cloud & DevOps Professionals',
      topRecruiters: ['AWS', 'Microsoft', 'Google Cloud', 'Accenture', 'Capgemini', 'TCS'],
      careerOutcomes: [
        { title: 'Cloud Architect', salaryRange: '£55,000 - £90,000', demandLevel: 'Very High' },
        { title: 'DevOps Engineer', salaryRange: '£45,000 - £75,000', demandLevel: 'Very High' },
        { title: 'Cloud Security Engineer', salaryRange: '£50,000 - £80,000', demandLevel: 'Very High' },
        { title: 'Site Reliability Engineer', salaryRange: '£55,000 - £85,000', demandLevel: 'High' }
      ]
    },

    faqs: [
      { question: 'What cloud platforms will I learn?', answer: 'You will gain hands-on experience with major cloud platforms including AWS, Microsoft Azure, and Google Cloud Platform.' },
      { question: 'Are industry certifications included?', answer: 'The program prepares you for industry certifications from AWS, Azure, and Google Cloud, and you may receive exemptions based on coursework.' },
      { question: 'Do I need programming knowledge?', answer: 'Basic programming knowledge is helpful but not mandatory. We cover programming fundamentals as part of the curriculum.' },
      { question: 'What career opportunities are available?', answer: 'Graduates can work as cloud architects, DevOps engineers, cloud security specialists, cloud administrators, or pursue careers in cloud consulting and solutions architecture.' }
    ]
  }


];
