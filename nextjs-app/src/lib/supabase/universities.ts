import { createClient } from './server';
import { cachedFetch, CACHE_KEYS } from './cache';

export interface UniversityFromDB {
  id: string;
  name: string;
  slug: string;
  country: string;
  city: string;
  qs_rank: number | null;
  logo_url: string;
  summary: string;
  description: string;
  fees_per_year: string;
  scholarship_range: string;
  virtual_tour_url: string | null;
  display_order: number;
}

// Fetch all partner universities with caching
export async function getPartnerUniversities(): Promise<UniversityFromDB[]> {
  return cachedFetch(`${CACHE_KEYS.UNIVERSITIES}:all`, async () => {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from('partner_universities')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching universities:', error);
      return [];
    }
  });
}

// Alias for backward compatibility
export const getUniversities = getPartnerUniversities;

// Fetch single university by slug
export async function getUniversityBySlug(slug: string): Promise<UniversityFromDB | null> {
  return cachedFetch(`${CACHE_KEYS.UNIVERSITIES}:${slug}`, async () => {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from('partner_universities')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching university:', error);
      return null;
    }
  });
}

// Fetch universities by country
export async function getUniversitiesByCountry(country: string): Promise<UniversityFromDB[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('partner_universities')
      .select('*')
      .eq('country', country)
      .order('display_order');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching universities by country:', error);
    return [];
  }
}

// Get unique countries
export async function getUniversityCountries(): Promise<string[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('partner_universities')
      .select('country')
      .order('country');
    
    if (error) throw error;
    const countries = [...new Set(data?.map(u => u.country) || [])];
    return countries;
  } catch (error) {
    console.error('Error fetching university countries:', error);
    return [];
  }
}

// Get other universities (non-partner)
export async function getOtherUniversities(): Promise<UniversityFromDB[]> {
  // This can be extended to fetch from a separate table if needed
  return [];
}

// Get virtual tour URL
export async function getVirtualTourUrl(slug: string): Promise<string | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('partner_universities')
      .select('virtual_tour_url')
      .eq('slug', slug)
      .single();
    
    if (error || !data) return null;
    return data.virtual_tour_url;
  } catch (error) {
    console.error('Error fetching virtual tour URL:', error);
    return null;
  }
}
