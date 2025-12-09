import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// Get all testimonials
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const program = searchParams.get("program");
    const featured = searchParams.get("featured");
    const limit = parseInt(searchParams.get("limit") || "20");

    const supabase = await createClient();

    let query = supabase
      .from("testimonials")
      .select("*")
      .eq("status", "approved")
      .order("display_order", { ascending: true })
      .limit(limit);

    // Filter by program if provided
    if (program) {
      query = query.eq("program", program);
    }

    // Get featured testimonials (first 6)
    if (featured === "true") {
      query = query.limit(6);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Testimonials fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch testimonials" },
        { status: 500 }
      );
    }

    return NextResponse.json({ testimonials: data || [] });
  } catch (error) {
    console.error("Testimonials API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

// Submit a new testimonial (pending approval)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, program, transferredTo, country, quote, year, image } = body;

    // Validation
    if (!name || !program || !quote) {
      return NextResponse.json(
        { error: "Name, program, and quote are required" },
        { status: 400 }
      );
    }

    if (quote.length < 20 || quote.length > 1000) {
      return NextResponse.json(
        { error: "Quote must be between 20 and 1000 characters" },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from("testimonials")
      .insert([{
        name: name.trim(),
        program: program.trim(),
        transferred_to: transferredTo?.trim() || null,
        country: country?.trim() || null,
        quote: quote.trim(),
        year: year || new Date().getFullYear().toString(),
        image: image || null,
        status: "pending",
        display_order: 999,
      }])
      .select()
      .single();

    if (error) {
      console.error("Testimonial submission error:", error);
      return NextResponse.json(
        { error: "Failed to submit testimonial" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your testimonial has been submitted for review.",
      id: data.id,
    });
  } catch (error) {
    console.error("Testimonial API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
