import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// Get all faculty members
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const campusId = searchParams.get("campus");
    const department = searchParams.get("department");
    const acceptingMentees = searchParams.get("accepting_mentees");

    const supabase = await createClient();

    let query = supabase
      .from("faculty")
      .select("*")
      .order("display_order", { ascending: true });

    // Filter by campus if provided
    if (campusId) {
      query = query.eq("campus_id", campusId);
    }

    // Filter by department
    if (department) {
      query = query.eq("department", department);
    }

    // Filter by accepting mentees
    if (acceptingMentees === "true") {
      query = query.eq("accepting_mentees", true);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Faculty fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch faculty" },
        { status: 500 }
      );
    }

    return NextResponse.json({ faculty: data || [] });
  } catch (error) {
    console.error("Faculty API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
