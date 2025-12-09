// Homepage - Server Component (POC)
// Migrated from: src/pages/Index.tsx + src/components/AppLayout.tsx

import { createClient, isSupabaseConfigured } from '@/lib/supabase/server';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

// Server-side data fetching
async function getHomePageData() {
  if (!isSupabaseConfigured()) {
    return { programs: [], testimonials: [], universities: [] };
  }

  const supabase = createClient();
  
  // Parallel data fetching for better performance
  const [programsRes, testimonialsRes, universitiesRes] = await Promise.all([
    supabase.from('signature_programs').select('*').limit(6),
    supabase.from('testimonials').select('*').limit(4),
    supabase.from('partner_universities').select('*').limit(8),
  ]);

  return {
    programs: programsRes.data || [],
    testimonials: testimonialsRes.data || [],
    universities: universitiesRes.data || [],
  };
}

// Server Component - runs on the server
export default async function HomePage() {
  const { programs, testimonials, universities } = await getHomePageData();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main id="main-content">
        {/* HeroSection as Server Component */}
        <HeroSection />
        
        {/* Programs section with SSR data */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              Signature Programs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {programs.map((program: any) => (
                <div key={program.id} className="p-6 border rounded-lg">
                  <h3 className="font-semibold">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

/*
MIGRATION BENEFITS DEMONSTRATED:
1. Data fetched on server - faster initial load
2. SEO-friendly - content in HTML response
3. No loading spinners for initial data
4. Automatic caching with Next.js
*/
