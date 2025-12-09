import { createClient } from "./server";
import type { Campus } from "./types";
import { cachedFetch, CACHE_KEYS } from "./cache";
import { campuses as staticCampuses } from "@/data/campuses";

// Transform static campus data to database format
function transformStaticCampus(c: typeof staticCampuses[0]): Campus {
  return {
    id: c.id,
    name: c.name,
    slug: c.slug,
    type: c.type,
    city: c.city,
    state: c.state,
    country: c.country,
    address: c.address,
    hero_image_url: c.heroImageUrl,
    gallery: c.gallery,
    highlights: c.highlights,
    facilities: c.facilities,
    contact_phone: c.contactPhone,
    contact_email: c.contactEmail,
  };
}

// Fetch all campuses with caching
export async function getCampuses(): Promise<Campus[]> {
  return cachedFetch(`${CACHE_KEYS.CAMPUSES}:all`, async () => {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("campuses")
        .select("*")
        .order("type", { ascending: true });
      
      if (error) throw error;
      if (data && data.length > 0) return data;
      return staticCampuses.map(transformStaticCampus);
    } catch (error) {
      console.error("Error fetching campuses:", error);
      return staticCampuses.map(transformStaticCampus);
    }
  });
}

// Fetch campus by slug
export async function getCampusBySlug(slug: string): Promise<Campus | null> {
  return cachedFetch(`${CACHE_KEYS.CAMPUSES}:${slug}`, async () => {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("campuses")
        .select("*")
        .eq("slug", slug)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      const staticC = staticCampuses.find(c => c.slug === slug);
      return staticC ? transformStaticCampus(staticC) : null;
    }
  });
}

// Fetch main campuses only
export async function getMainCampuses(): Promise<Campus[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("campuses")
      .select("*")
      .eq("type", "main");
    
    if (error) throw error;
    if (data && data.length > 0) return data;
    return staticCampuses.filter(c => c.type === 'main').map(transformStaticCampus);
  } catch (error) {
    return staticCampuses.filter(c => c.type === 'main').map(transformStaticCampus);
  }
}

// Fetch campuses by city
export async function getCampusesByCity(city: string): Promise<Campus[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("campuses")
      .select("*")
      .ilike("city", `%${city}%`);
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    return staticCampuses.filter(c => 
      c.city.toLowerCase().includes(city.toLowerCase())
    ).map(transformStaticCampus);
  }
}
