import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// Health check endpoint
export async function GET() {
  try {
    const supabase = await createClient();
    
    // Test database connection
    const { error } = await supabase
      .from("signature_programs")
      .select("id")
      .limit(1);

    const dbStatus = error ? "error" : "connected";

    return NextResponse.json({
      status: "ok",
      timestamp: new Date().toISOString(),
      database: dbStatus,
      version: "1.0.0",
      environment: process.env.NODE_ENV,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      timestamp: new Date().toISOString(),
      database: "disconnected",
      error: "Health check failed",
    }, { status: 500 });
  }
}
