// Program Detail - Dynamic Route (POC)
// Migrated from: src/pages/ProgramDetail.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProgramDetailClient from './ProgramDetailClient';

// Generate static params for SSG (optional)
export async function generateStaticParams() {
  // Can pre-generate popular program pages
  return [
    { slug: 'business-management' },
    { slug: 'computer-science' },
    { slug: 'accounting' },
  ];
}

// Dynamic metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const program = await getProgram(params.slug);
  
  if (!program) {
    return { title: 'Program Not Found' };
  }

  return {
    title: program.title,
    description: program.overview || `Study ${program.title} at KCIC`,
    openGraph: {
      title: program.title,
      description: program.overview,
      type: 'article',
    },
  };
}

// Server-side data fetching
async function getProgram(slug: string) {
  const supabase = createClient();
  const { data } = await supabase
    .from('signature_programs')
    .select('*')
    .eq('slug', slug)
    .single();
  return data;
}

// Server Component
export default async function ProgramDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const program = await getProgram(params.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAF3E0]">
      <Navigation />
      {/* Client component for interactive features */}
      <ProgramDetailClient program={program} />
      <Footer />
    </div>
  );
}

/*
MIGRATION PATTERNS:
1. Dynamic routes: [slug] folder naming
2. generateMetadata for dynamic SEO
3. generateStaticParams for SSG
4. notFound() for 404 handling
5. Server/Client component split
*/
