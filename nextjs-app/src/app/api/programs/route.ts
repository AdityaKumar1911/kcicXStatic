import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// Get all programs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const limit = parseInt(searchParams.get("limit") || "50");

    const supabase = await createClient();

    let query = supabase
      .from("signature_programs")
      .select("*")
      .order("display_order", { ascending: true })
      .limit(limit);

    // Filter by category if provided
    if (category) {
      query = query.eq("course_tag", category);
    }

    // Search by name if provided
    if (search) {
      query = query.ilike("name", `%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Programs fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch programs" },
        { status: 500 }
      );
    }

    return NextResponse.json({ programs: data || [] });
  } catch (error) {
    console.error("Programs API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
