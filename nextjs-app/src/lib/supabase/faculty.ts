import { createClient } from "./server";
import type { Faculty } from "./types";
import { cachedFetch, CACHE_KEYS } from "./cache";
import { tutors as staticTutors } from "@/data/tutors";

// Transform static tutor data to faculty format
function transformStaticTutor(t: typeof staticTutors[0]): Faculty {
  return {
    id: t.id,
    name: t.name,
    slug: t.slug,
    title: t.title,
    department: t.expertise[0] || 'General',
    photo_url: t.photoUrl,
    bio: t.bio,
    expertise: t.expertise,
    campus_id: t.campusId,
    accepting_mentees: t.acceptingMentees,
    display_order: parseInt(t.id),
  };
}

// Fetch all faculty members with caching
export async function getFaculty(): Promise<Faculty[]> {
  return cachedFetch(`${CACHE_KEYS.FACULTY}:all`, async () => {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("faculty")
        .select("*")
        .order("display_order", { ascending: true });
      
      if (error) throw error;
      if (data && data.length > 0) return data;
      return staticTutors.map(transformStaticTutor);
    } catch (error) {
      console.error("Error fetching faculty:", error);
      return staticTutors.map(transformStaticTutor);
    }
  });
}

// Fetch faculty member by slug
export async function getFacultyBySlug(slug: string): Promise<Faculty | null> {
  return cachedFetch(`${CACHE_KEYS.FACULTY}:${slug}`, async () => {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("faculty")
        .select("*")
        .eq("slug", slug)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      const staticF = staticTutors.find(t => t.slug === slug);
      return staticF ? transformStaticTutor(staticF) : null;
    }
  });
}

// Fetch faculty by campus
export async function getFacultyByCampus(campusId: string): Promise<Faculty[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("faculty")
      .select("*")
      .eq("campus_id", campusId)
      .order("display_order");
    
    if (error) throw error;
    if (data && data.length > 0) return data;
    return staticTutors.filter(t => t.campusId === campusId).map(transformStaticTutor);
  } catch (error) {
    return staticTutors.filter(t => t.campusId === campusId).map(transformStaticTutor);
  }
}

// Fetch faculty accepting mentees
export async function getFacultyAcceptingMentees(): Promise<Faculty[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("faculty")
      .select("*")
      .eq("accepting_mentees", true)
      .order("display_order");
    
    if (error) throw error;
    if (data && data.length > 0) return data;
    return staticTutors.filter(t => t.acceptingMentees).map(transformStaticTutor);
  } catch (error) {
    return staticTutors.filter(t => t.acceptingMentees).map(transformStaticTutor);
  }
}

// Fetch faculty by expertise
export async function getFacultyByExpertise(expertise: string): Promise<Faculty[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("faculty")
      .select("*")
      .contains("expertise", [expertise]);
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    return staticTutors.filter(t => 
      t.expertise.some(e => e.toLowerCase().includes(expertise.toLowerCase()))
    ).map(transformStaticTutor);
  }
}
