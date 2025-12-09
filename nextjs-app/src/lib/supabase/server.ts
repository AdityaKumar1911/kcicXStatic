import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // Handle cookies in Server Components
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // Handle cookies in Server Components
          }
        },
      },
    }
  );
}

// Re-export all data fetching functions
export { 
  getSignaturePrograms, 
  getProgramBySlug, 
  getSpecialtyProgram, 
  getAllSpecialtyPrograms, 
  getFoundationPrograms,
  getProgramsByCategory, 
  searchPrograms 
} from "./programs";

export { 
  getPartnerUniversities, 
  getUniversityBySlug, 
  getUniversitiesByCountry, 
  getUniversityCountries,
  getOtherUniversities 
} from "./universities";

export { 
  getTestimonials, 
  getTestimonialsByProgram, 
  getFeaturedTestimonials 
} from "./testimonials";

export { 
  getCampuses, 
  getCampusBySlug, 
  getMainCampuses, 
  getCampusesByCity 
} from "./campuses";

export { 
  getFaculty, 
  getFacultyBySlug, 
  getFacultyByCampus, 
  getFacultyAcceptingMentees, 
  getFacultyByExpertise 
} from "./faculty";

// Export cache utilities
export { invalidateCache, CACHE_KEYS } from "./cache";

// Export types
export type { 
  SignatureProgram, 
  PartnerUniversity, 
  Testimonial, 
  Campus, 
  Faculty, 
  NewsletterSubscriber, 
  ContactSubmission, 
  Application 
} from "./types";
