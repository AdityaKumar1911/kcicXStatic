/**
 * Supabase Database Types
 * Generated from migration files
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      signature_programs: {
        Row: {
          id: string
          name: string
          study_in_india: string
          study_abroad: string
          course_tag: string
          acceptance: string
          designed_by: string
          slug: string
          banner_image: string
          overlay_text: string
          tagline: string
          partner_universities: string[]
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          study_in_india: string
          study_abroad: string
          course_tag: string
          acceptance: string
          designed_by: string
          slug: string
          banner_image: string
          overlay_text: string
          tagline: string
          partner_universities?: string[]
          display_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          study_in_india?: string
          study_abroad?: string
          course_tag?: string
          acceptance?: string
          designed_by?: string
          slug?: string
          banner_image?: string
          overlay_text?: string
          tagline?: string
          partner_universities?: string[]
          display_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      partner_universities: {
        Row: {
          id: string
          name: string
          slug: string
          country: string
          city: string
          qs_rank: number | null
          logo_url: string
          summary: string
          description: string
          fees_per_year: string
          scholarship_range: string
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          country: string
          city: string
          qs_rank?: number | null
          logo_url: string
          summary: string
          description: string
          fees_per_year: string
          scholarship_range: string
          display_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          country?: string
          city?: string
          qs_rank?: number | null
          logo_url?: string
          summary?: string
          description?: string
          fees_per_year?: string
          scholarship_range?: string
          display_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          image: string
          program: string
          transferred_to: string
          country: string
          quote: string
          year: string
          status: 'pending' | 'approved' | 'rejected'
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          image: string
          program: string
          transferred_to: string
          country: string
          quote: string
          year: string
          status?: 'pending' | 'approved' | 'rejected'
          display_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          image?: string
          program?: string
          transferred_to?: string
          country?: string
          quote?: string
          year?: string
          status?: 'pending' | 'approved' | 'rejected'
          display_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      admin_users: {
        Row: {
          id: string
          email: string
          role: 'super_admin' | 'admin' | 'editor'
          full_name: string | null
          is_active: boolean
          created_at: string
          updated_at: string
          created_by: string | null
          last_login_at: string | null
        }
        Insert: {
          id?: string
          email: string
          role: 'super_admin' | 'admin' | 'editor'
          full_name?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
          created_by?: string | null
          last_login_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          role?: 'super_admin' | 'admin' | 'editor'
          full_name?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
          created_by?: string | null
          last_login_at?: string | null
        }
      }
      audit_logs: {
        Row: {
          id: string
          admin_email: string
          admin_role: string | null
          action: 'INSERT' | 'UPDATE' | 'DELETE'
          table_name: string
          record_id: string | null
          old_data: Json | null
          new_data: Json | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          admin_email: string
          admin_role?: string | null
          action: 'INSERT' | 'UPDATE' | 'DELETE'
          table_name: string
          record_id?: string | null
          old_data?: Json | null
          new_data?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          admin_email?: string
          admin_role?: string | null
          action?: 'INSERT' | 'UPDATE' | 'DELETE'
          table_name?: string
          record_id?: string | null
          old_data?: Json | null
          new_data?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
      }

    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
