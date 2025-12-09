import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// Get all universities
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get("country");
    const search = searchParams.get("search");
    const limit = parseInt(searchParams.get("limit") || "50");

    const supabase = await createClient();

    let query = supabase
      .from("partner_universities")
      .select("*")
      .order("display_order", { ascending: true })
      .limit(limit);

    // Filter by country if provided
    if (country) {
      query = query.eq("country", country);
    }

    // Search by name if provided
    if (search) {
      query = query.ilike("name", `%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Universities fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch universities" },
        { status: 500 }
      );
    }

    return NextResponse.json({ universities: data || [] });
  } catch (error) {
    console.error("Universities API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

// Get university countries for filtering
export async function OPTIONS() {
  return NextResponse.json({
    endpoints: {
      "GET /api/universities": "Get all universities",
      "GET /api/universities?country=UK": "Filter by country",
      "GET /api/universities?search=oxford": "Search by name",
    }
  });
}
