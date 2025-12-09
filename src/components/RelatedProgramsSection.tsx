import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signaturePrograms, SignatureProgram } from '@/data/signaturePrograms';

interface RelatedProgramsSectionProps {
  category: 'engineering' | 'technology' | 'business' | 'science' | 'psychology';
  currentSlug?: string;
  title?: string;
}

const categoryMapping: Record<string, string[]> = {
  engineering: [
    'beng-hons-motorsport-engineering',
    'beng-hons-aerospace-engineering',
    'beng-hons-civil-engineering',
    'beng-hons-biomedical-engineering',
    'beng-hons-electrical-electronics-semiconductor',
    'beng-hons-electronics-embedded-systems',
    'beng-hons-electrical-railway-engineering'
  ],
  technology: [
    'beng-hons-artificial-intelligence-with-placement',
    'beng-hons-computer-systems-engineering',
    'beng-hons-electronics-embedded-systems'
  ],
  business: ['bsc-hons-accounting-finance-acca'],
  science: ['bsc-hons-biomedical-science', 'beng-hons-biomedical-engineering'],
  psychology: ['bsc-hons-psychology']
};

export default function RelatedProgramsSection({ category, currentSlug, title }: RelatedProgramsSectionProps) {
  const slugs = categoryMapping[category] || [];
  const programs = signaturePrograms.filter(
    p => slugs.includes(p.slug) && p.slug !== currentSlug
  ).slice(0, 4);

  if (programs.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#B99750]/10 text-[#B99750] text-sm font-semibold rounded-full mb-4">
            Explore More
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1B3A] mb-4">
            {title || 'Related Programs'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover other programs in this field
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/programs#featured">
            <Button className="bg-[#0B1B3A] hover:bg-[#1a2942] text-white px-8 py-3">
              View All Programs <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program }: { program: SignatureProgram }) {
  return (
    <Link to={`/programs/${program.slug}`} className="group block">
      <div className="bg-white rounded-2xl border-2 border-[#B99750]/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
        <div className="relative h-40 overflow-hidden">
          <img src={program.bannerImage} alt={program.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A]/80 to-transparent" />
          <span className="absolute top-3 left-3 px-2 py-1 bg-[#B99750] text-white text-xs font-semibold rounded">{program.courseTag}</span>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-bold text-[#0B1B3A] mb-2 line-clamp-2 group-hover:text-[#B99750] transition-colors">{program.name}</h3>
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
            <MapPin className="w-3 h-3" />{program.studyInIndia}
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Users className="w-3 h-3" />{program.acceptance}
          </div>
        </div>
      </div>
    </Link>
  );
}
