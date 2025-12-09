import { Metadata } from 'next';
import { getPartnerUniversities } from '@/lib/supabase/universities';
import { universities as staticUniversities, otherUniversities } from '@/data/universities';
import UniversitiesClient from './UniversitiesClient';

export const metadata: Metadata = {
  title: 'Partner Universities | KCIC',
  description: 'Explore 400+ universities worldwide accepting BTEC qualifications from KCIC.',
};

export default async function UniversitiesPage() {
  // Try to fetch from Supabase, fall back to static data
  let universities = staticUniversities;
  
  try {
    const dbUniversities = await getPartnerUniversities();
    if (dbUniversities.length > 0) {
      // Transform database format to component format
      universities = dbUniversities.map(u => ({
        id: u.id,
        name: u.name,
        slug: u.slug,
        country: u.country,
        city: u.city,
        qsRank: u.qs_rank || undefined,
        logoUrl: u.logo_url,
        summary: u.summary,
        description: u.description,
        feesPerYear: u.fees_per_year,
        scholarshipRange: u.scholarship_range,
      }));
    }
  } catch (error) {
    console.error('Error fetching universities:', error);
  }

  return (
    <UniversitiesClient 
      universities={universities} 
      otherUniversities={otherUniversities} 
    />
  );
}
