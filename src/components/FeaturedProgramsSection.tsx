import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { signaturePrograms } from '@/data/signaturePrograms';

export default function FeaturedProgramsSection() {
  return (
    <section id="featured" className="mb-12 scroll-mt-24">
      {/* <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-[#B99750] rounded-lg flex items-center justify-center">
          <Star className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#0B1B3A]">Featured Programs</h2>
          <p className="text-gray-600 text-sm">Exclusive programs designed at KCIC</p>
        </div>
      </div> */}
      
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {signaturePrograms.slice(0, 8).map((program) => (
          <Link
            key={program.id}
            to={`/programs/${program.slug}`}
            className="group bg-white rounded-xl border border-gray-100 hover:border-[#B99750]/30 hover:shadow-lg transition-all overflow-hidden"
          >
            <div className="h-28 overflow-hidden">
              <img 
                src={program.bannerImage} 
                alt={program.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              <span className="text-[10px] px-2 py-0.5 bg-[#B99750]/10 text-[#B99750] rounded-full font-medium">
                {program.courseTag}
              </span>
              <h3 className="text-sm font-semibold text-[#0B1B3A] mt-2 line-clamp-2 group-hover:text-[#B99750] transition-colors">
                {program.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{program.designedBy}</p>
            </div>
          </Link>
        ))}
      </div> */}
      
      {/* <div className="mt-4 text-center">
        <Link 
          to="/programs" 
          className="inline-flex items-center gap-2 text-[#B99750] hover:text-[#0B1B3A] font-medium text-sm transition-colors"
        >
          View all {signaturePrograms.length} featured programs
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div> */}
    </section>
  );
}
