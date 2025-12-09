import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, DollarSign, Briefcase } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { universities as fallbackUniversities } from '@/data/universities';
import { SwipeIndicator } from './SwipeIndicator';
import Layout from './Layout';

interface University { id: string; name: string; country: string; city?: string; logo: string; description: string; slug: string; feesPerYear?: string; scholarshipRange?: string; programs?: string[]; employabilityRate?: string; }

const universityBanners: Record<string, string> = {
  '1': 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763100548118_9fb7c7a0.webp',
  '2': 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763100549140_95884f5c.webp',
  '3': 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763100550040_82ba5de7.webp',
  '4': 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763100550989_28355727.webp',
  '5': 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763100551912_a8464fb8.webp',
  '6': 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763100552810_b97e5a38.webp',
  '7': 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763100553767_9b8ed82e.webp',
  '8': 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763100554747_d5af25e5.webp',
};

const employabilityRates: Record<string, string> = {
  '1': '94%', '2': '96%', '3': '92%', '4': '95%', '5': '93%', '6': '91%', '7': '97%', '8': '96%'
};

const PartnerUniversities = () => {
  const [universities, setUniversities] = useState<University[]>(fallbackUniversities.slice(0, 8));
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { fetchUniversities(); }, []);

  const fetchUniversities = async () => {
    if (!supabase) { setUniversities(fallbackUniversities.slice(0, 8)); return; }
    try {
      const { data, error } = await supabase.from('partner_universities').select('*').order('display_order', { ascending: true }).limit(8);
      if (!error && data && data.length > 0) setUniversities(data);
      else setUniversities(fallbackUniversities.slice(0, 8));
    } catch { setUniversities(fallbackUniversities.slice(0, 8)); }
  };

  const UniversityCard = ({ university }: { university: University }) => {
    const rate = university.employabilityRate || employabilityRates[university.id] || '90%';
    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#B99750]/20 hover:border-[#B99750] overflow-hidden flex flex-col h-full">
        <div className="h-2 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-[#0B1B3A]" />
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <img src={universityBanners[university.id] || universityBanners['1']} alt={`${university.name} campus`} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col flex-grow space-y-2">
          <h3 className="text-base font-bold text-[#0B1B3A] text-left line-clamp-2 min-h-[2.5rem]">{university.name}</h3>
          <div className="flex items-center gap-2 text-[#0B1B3A]"><MapPin className="w-4 h-4 text-[#B99750] flex-shrink-0" /><span className="text-sm font-medium truncate">{university.country}</span></div>
          {university.feesPerYear && <div className="flex items-center gap-2 text-[#0B1B3A]"><DollarSign className="w-4 h-4 text-[#B99750] flex-shrink-0" /><span className="text-sm font-medium truncate">{university.feesPerYear}/year</span></div>}
          <div className="flex items-center gap-2 text-[#0B1B3A]"><Briefcase className="w-4 h-4 text-[#B99750] flex-shrink-0" /><span className="text-sm font-medium">Employability Rate: <span className="text-[#B99750] font-bold">{rate}</span></span></div>
        </div>
        <div className="p-4 pt-0">
          <Link to={`/universities/${university.slug}`}><Button className="w-full bg-[#0B1B3A] hover:bg-[#0B1B3A]/90 text-[#B99750] font-semibold group/btn border border-[#B99750]/30 text-sm py-2">Know More<ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></Button></Link>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#FAF3E0] via-white to-[#FAF3E0]">
      <Layout>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0B1B3A]">Our Partner Universities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">Study with world-class institutions and earn internationally recognized degrees</p>
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {universities.map(university => <UniversityCard key={university.id} university={university} />)}
        </div>
        <div className="md:hidden mb-8 -mx-4 px-4">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 scroll-smooth" style={{ WebkitOverflowScrolling: 'touch' }}>
            {universities.map(university => (
              <div key={university.id} className="flex-shrink-0 w-[85vw] max-w-[340px] snap-center"><UniversityCard university={university} /></div>
            ))}
          </div>
          <SwipeIndicator totalItems={universities.length} scrollContainerRef={scrollRef} sectionId="universities-section" />
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Link to="/universities"><Button size="lg" className="bg-gradient-to-r from-[#0B1B3A] to-[#B99750] hover:from-[#B99750] hover:to-[#0B1B3A] text-white font-semibold px-8">View All Universities<ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
        </div>
      </Layout>
    </section>
  );
};

export default PartnerUniversities;
