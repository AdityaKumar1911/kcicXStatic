import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { universities } from '@/data/universities';
import { programs } from '@/data/programs';
import UniversityHeroSection from '@/components/university/UniversityHeroSection';
import UniversityHighlightsSection from '@/components/university/UniversityHighlightsSection';
import UniversityWhyChooseSection from '@/components/university/UniversityWhyChooseSection';
import UniversityProgramsSection from '@/components/university/UniversityProgramsSection';
import UniversityKeyStatsSection from '@/components/university/UniversityKeyStatsSection';
import { universityDetails } from '@/data/universityDetails';
import { Users, BookOpen, Trophy, Globe } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function UniversityDetail() {
  const { slug } = useParams();
  const university = universities.find(u => u.slug === slug);
  const [virtualTourUrl, setVirtualTourUrl] = useState<string>('');

  useEffect(() => {
    const fetchVirtualTourUrl = async () => {
      if (!slug || !supabase) return;
      try {
        const { data, error } = await supabase
          .from('partner_universities')
          .select('virtual_tour_url')
          .eq('slug', slug)
          .single();
        if (!error && data?.virtual_tour_url) {
          setVirtualTourUrl(data.virtual_tour_url);
        }
      } catch (err) {
        console.error('Error fetching virtual tour URL:', err);
      }
    };
    fetchVirtualTourUrl();
  }, [slug]);


  if (!university) {
    return <div>University not found</div>;
  }

  const details = universityDetails[slug || ''] || {
    heroImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763095462961_14971d2f.webp',
    campusImage: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763095468013_1483f34d.webp',
    virtualTourUrl: '',
    highlights: [
      { title: 'Students', value: '20,000+', icon: <Users className="w-8 h-8" /> },
      { title: 'Programs', value: '100+', icon: <BookOpen className="w-8 h-8" /> },
      { title: 'Awards', value: '50+', icon: <Trophy className="w-8 h-8" /> },
      { title: 'Countries', value: '80+', icon: <Globe className="w-8 h-8" /> }
    ],
    reasons: [
      { title: 'Academic Excellence', description: 'World-class education with internationally recognized qualifications.' },
      { title: 'Career Opportunities', description: 'Strong industry connections and excellent graduate employment rates.' },
      { title: 'Student Support', description: 'Comprehensive support services for international students.' }
    ]
  };

  const relatedPrograms = programs.filter(p => 
    p.partnerUniversities.includes(university.id)
  ).map(p => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    pathwayModel: p.pathwayModel,
    duration: p.duration
  }));

  // Use DB URL first, then fallback to static data
  const tourUrl = virtualTourUrl || university.virtualTourUrl || details.virtualTourUrl || '';

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Universities', href: '/universities' },
            { label: university.name }
          ]} 
        />
        <UniversityHeroSection
          name={university.name}
          country={university.country}
          city={university.city}
          qsRank={university.qsRank}
          logoUrl={university.logoUrl}
          summary={university.summary}
          heroImage={details.heroImage}
          virtualTourUrl={tourUrl}
        />
        <UniversityKeyStatsSection
          qsRank={university.qsRank}
          feesPerYear={university.feesPerYear}
          scholarshipRange={university.scholarshipRange}
          employabilityRate={university.employabilityRate}
        />
        <UniversityHighlightsSection highlights={details.highlights} />
        <UniversityWhyChooseSection reasons={details.reasons} image={details.campusImage} />
        {relatedPrograms.length > 0 && (
          <UniversityProgramsSection programs={relatedPrograms} universityName={university.name} />
        )}
      </div>
      <Footer />
    </div>
  );
}
