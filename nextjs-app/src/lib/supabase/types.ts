/**
 * Supabase Database Types for Next.js App
 */

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

// Database row types
export interface SignatureProgram {
  id: string;
  name: string;
  study_in_india: string;
  study_abroad: string;
  course_tag: string;
  acceptance: string;
  designed_by: string;
  slug: string;
  banner_image: string;
  overlay_text: string;
  tagline: string;
  partner_universities: string[];
  display_order: number;
  salary_range?: string;
  top_recruiters?: string[];
  created_at: string;
  updated_at: string;
}

export interface PartnerUniversity {
  id: string;
  name: string;
  slug: string;
  country: string;
  city: string;
  qs_rank: number | null;
  logo_url: string;
  summary: string;
  description: string;
  fees_per_year: string;
  scholarship_range: string;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  program: string;
  transferred_to: string;
  country: string;
  quote: string;
  year: string;
  status: 'pending' | 'approved' | 'rejected';
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  submitted_at: string;
}

export interface Application {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  program_id: string;
  start_date: string;
  message?: string;
  status: 'pending' | 'reviewing' | 'accepted' | 'rejected';
  submitted_at: string;
}

export interface Faculty {
  id: string;
  name: string;
  slug: string;
  title: string;
  department: string;
  photo_url: string;
  bio: string;
  expertise: string[];
  campus_id: string;
  accepting_mentees: boolean;
  display_order: number;
}

export interface Campus {
  id: string;
  name: string;
  slug: string;
  type: 'main' | 'satellite';
  city: string;
  state: string;
  country: string;
  address: string;
  hero_image_url: string;
  gallery: string[];
  highlights: string[];
  facilities: string[];
  contact_phone: string;
  contact_email: string;
}
