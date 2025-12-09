export interface Testimonial {
  id: string;
  name: string;
  image: string;
  program: string;
  transferredTo: string;
  country: string;
  quote: string;
  year: string;
}

export const testimonials: Testimonial[] = [
  { id: 't1', name: 'Amara Johnson', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440726444_535ccd49.webp', program: 'BSc Business Administration', transferredTo: 'University of Oxford', country: 'UK', quote: 'KCIC prepared me perfectly for Oxford. The transfer process was seamless and I felt confident from day one.', year: '2023' },
  { id: 't2', name: 'Marcus Chen', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440728151_155d4664.webp', program: 'BEng Computer Science', transferredTo: 'MIT', country: 'USA', quote: 'The quality of education at KCIC matched what I experienced at MIT. Best decision of my life!', year: '2023' },
  { id: 't3', name: 'Sophia Martinez', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440729859_5387f998.webp', program: 'BSc Nursing', transferredTo: 'University of Toronto', country: 'Canada', quote: 'KCIC faculty supported me every step. Now I am thriving in Toronto with my dream career ahead.', year: '2024' },
  { id: 't4', name: 'Daniel Okonkwo', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440731866_943378cf.webp', program: 'MBA', transferredTo: 'Stanford University', country: 'USA', quote: 'The pathway program gave me international exposure and academic rigor needed for Stanford.', year: '2022' },
  { id: 't5', name: 'Priya Sharma', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440733619_9dceda00.webp', program: 'BA Psychology', transferredTo: 'University of Melbourne', country: 'Australia', quote: 'From KCIC to Melbourne - an incredible journey! The transfer credits saved me time and money.', year: '2023' },
  { id: 't6', name: 'James Wilson', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440735367_98705fd0.webp', program: 'MSc Artificial Intelligence', transferredTo: 'Imperial College London', country: 'UK', quote: 'KCIC opened doors I never thought possible. Now studying at one of the world best tech schools.', year: '2024' },
  { id: 't7', name: 'Fatima Al-Rashid', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440737077_136e1748.webp', program: 'BSc Accounting & Finance', transferredTo: 'University of Cambridge', country: 'UK', quote: 'The academic excellence at KCIC prepared me for Cambridge rigorous standards. Forever grateful!', year: '2023' },
  { id: 't8', name: 'Oliver Brown', image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760440738797_60f07bc6.webp', program: 'BEng Mechanical Engineering', transferredTo: 'UC Berkeley', country: 'USA', quote: 'KCIC pathway program is world-class. I am now at Berkeley pursuing my engineering dreams!', year: '2024' },
];
