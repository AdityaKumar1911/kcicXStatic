import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

// Validation helpers
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-+()]{10,20}$/;
  return phoneRegex.test(phone);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, programId, programName, startDate, message } = body;

    // Validation
    const errors: string[] = [];

    if (!firstName || firstName.length < 2) {
      errors.push("First name must be at least 2 characters");
    }
    if (!lastName || lastName.length < 2) {
      errors.push("Last name must be at least 2 characters");
    }
    if (!email || !validateEmail(email)) {
      errors.push("Valid email address is required");
    }
    if (!phone || !validatePhone(phone)) {
      errors.push("Valid phone number is required");
    }
    if (!programId) {
      errors.push("Program selection is required");
    }
    if (!startDate) {
      errors.push("Preferred start date is required");
    }

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(". ") }, { status: 400 });
    }

    const supabase = await createClient();


    const { data, error } = await supabase
      .from("applications")
      .insert([{
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.toLowerCase().trim(),
        phone: phone.trim(),
        program_id: programId,
        program_name: programName || null,
        start_date: startDate,
        message: message?.trim() || null,
        status: "pending",
        submitted_at: new Date().toISOString(),
      }])
      .select()
      .single();

    if (error) {
      console.error("Application submission error:", error);
      return NextResponse.json(
        { error: "Failed to submit application. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully! Our admissions team will contact you within 3-5 business days.",
      applicationId: data.id,
    });
  } catch (error) {
    console.error("Application API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

// Get application status (for authenticated users)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const applicationId = searchParams.get("id");
    const email = searchParams.get("email");

    if (!applicationId || !email) {
      return NextResponse.json(
        { error: "Application ID and email are required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();


    const { data, error } = await supabase
      .from("applications")
      .select("id, status, program_name, submitted_at")
      .eq("id", applicationId)
      .eq("email", email.toLowerCase())
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ application: data });
  } catch (error) {
    console.error("Get application error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
