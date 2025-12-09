import { createClient } from "./server";
import type { SignatureProgram } from "./types";
import { cachedFetch, CACHE_KEYS } from "./cache";
import { specialtyPrograms, getSpecialtyProgramBySlug } from "@/data/specialtyPrograms";
import { programs as staticPrograms } from "@/data/programs";

// Fetch all signature programs with caching
export async function getSignaturePrograms(): Promise<SignatureProgram[]> {
  return cachedFetch(`${CACHE_KEYS.PROGRAMS}:all`, async () => {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("signature_programs")
        .select("*")
        .order("display_order", { ascending: true });
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error("Error fetching programs:", error);
      return [];
    }
  });
}

// Fetch single program by slug
export async function getProgramBySlug(slug: string): Promise<SignatureProgram | null> {
  return cachedFetch(`${CACHE_KEYS.PROGRAMS}:${slug}`, async () => {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("signature_programs")
        .select("*")
        .eq("slug", slug)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching program:", error);
      return null;
    }
  });
}

// Get specialty program details
export async function getSpecialtyProgram(slug: string) {
  return getSpecialtyProgramBySlug(slug);
}

// Get all specialty programs
export async function getAllSpecialtyPrograms() {
  return specialtyPrograms;
}

// Get all foundation programs
export async function getFoundationPrograms() {
  return staticPrograms;
}

// Fetch programs by category
export async function getProgramsByCategory(category: string): Promise<SignatureProgram[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("signature_programs")
      .select("*")
      .ilike("course_tag", `%${category}%`)
      .order("display_order");
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching programs by category:", error);
    return [];
  }
}

// Search programs
export async function searchPrograms(query: string): Promise<SignatureProgram[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("signature_programs")
      .select("*")
      .or(`name.ilike.%${query}%,tagline.ilike.%${query}%`)
      .order("display_order");
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error searching programs:", error);
    return [];
  }
}
