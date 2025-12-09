"use client";

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Client-side hook for Supabase
import { useMemo } from "react";

export function useSupabase() {
  const supabase = useMemo(() => createClient(), []);
  return supabase;
}

// Newsletter subscription
export async function subscribeToNewsletter(email: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("newsletter_subscribers")
    .insert([{ email, subscribed_at: new Date().toISOString() }])
    .select()
    .single();
  
  if (error) {
    if (error.code === "23505") {
      throw new Error("This email is already subscribed.");
    }
    throw error;
  }
  return data;
}

// Contact form submission
export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("contact_submissions")
    .insert([{ ...formData, submitted_at: new Date().toISOString() }])
    .select()
    .single();
  
  if (error) throw error;
  return data;
}

// Application submission
export async function submitApplication(formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  programId: string;
  startDate: string;
  message?: string;
}) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("applications")
    .insert([{ ...formData, submitted_at: new Date().toISOString() }])
    .select()
    .single();
  
  if (error) throw error;
  return data;
}
