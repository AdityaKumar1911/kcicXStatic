import { createClient } from "./server";
import type { Testimonial } from "./types";
import { cachedFetch, CACHE_KEYS } from "./cache";

// Static fallback testimonials
const fallbackTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Arjun Mehta',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504118157_1a1df2d0.webp',
    program: 'Computer Systems Engineering',
    transferred_to: 'Ulster University',
    country: 'United Kingdom',
    quote: 'KCIC prepared me exceptionally well for my studies abroad. The transition was seamless.',
    year: '2023',
    status: 'approved',
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Priya Sharma',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504119892_3425efeb.webp',
    program: 'Business Management',
    transferred_to: 'University of Technology Sydney',
    country: 'Australia',
    quote: 'The industry connections and practical experience I gained at KCIC were invaluable.',
    year: '2023',
    status: 'approved',
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Rahul Verma',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760504121609_53dba7d3.webp',
    program: 'Artificial Intelligence',
    transferred_to: 'Heriot Watt University',
    country: 'United Kingdom',
    quote: 'The AI program at KCIC gave me a strong foundation for my career in tech.',
    year: '2024',
    status: 'approved',
    display_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// Fetch all approved testimonials with caching
export async function getTestimonials(limit?: number): Promise<Testimonial[]> {
  const cacheKey = `${CACHE_KEYS.TESTIMONIALS}:all:${limit || 'all'}`;
  
  return cachedFetch(cacheKey, async () => {
    try {
      const supabase = await createClient();
      let query = supabase
        .from("testimonials")
        .select("*")
        .eq("status", "approved")
        .order("display_order", { ascending: true });
      
      if (limit) query = query.limit(limit);
      
      const { data, error } = await query;
      if (error) throw error;
      return data && data.length > 0 ? data : fallbackTestimonials;
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return limit ? fallbackTestimonials.slice(0, limit) : fallbackTestimonials;
    }
  });
}

// Fetch testimonials by program
export async function getTestimonialsByProgram(program: string): Promise<Testimonial[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .eq("status", "approved")
      .ilike("program", `%${program}%`)
      .order("display_order");
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    return fallbackTestimonials.filter(t => 
      t.program.toLowerCase().includes(program.toLowerCase())
    );
  }
}

// Fetch featured testimonials for homepage
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return getTestimonials(6);
}
