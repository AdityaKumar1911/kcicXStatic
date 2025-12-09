import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// Get all campuses
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");
    const type = searchParams.get("type");

    const supabase = await createClient();

    let query = supabase
      .from("campuses")
      .select("*")
      .order("type", { ascending: true });

    // Filter by city if provided
    if (city) {
      query = query.eq("city", city);
    }

    // Filter by type (main/satellite)
    if (type) {
      query = query.eq("type", type);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Campuses fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch campuses" },
        { status: 500 }
      );
    }

    return NextResponse.json({ campuses: data || [] });
  } catch (error) {
    console.error("Campuses API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
