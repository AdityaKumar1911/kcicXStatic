import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Layout from './Layout';
import { programs as mockPrograms } from '@/data/programs';
import ProgramCard from './ProgramCard';
import { SwipeIndicator } from './SwipeIndicator';
import { useRef } from 'react';
export default function ProgramsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const displayPrograms = mockPrograms.slice(0, 8);
  return <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-[#FAF3E0] to-white">
      <Layout>
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0B1B3A]">Popular Qualifications at KCIC</h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Choose from our wide range of globally accredited programs</p>
        </div>


        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayPrograms.map(program => <ProgramCard key={program.id} title={program.title} department={program.department} pathwayModel={program.pathwayModel} slug={program.slug} kcicFeesPerYear={program.year1FeesInr} abroadFeesPerYear={program.abroadFeesPerYearInr} majors={program.majors} />)}
        </div>

        {/* Mobile: Swipeable Horizontal Scroll */}
        <div className="md:hidden mb-8 -mx-4 px-4">
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 scroll-smooth" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth'
        }}>

            {displayPrograms.map(program => <div key={program.id} className="flex-shrink-0 w-[85vw] max-w-[340px] snap-center">
                <ProgramCard title={program.title} department={program.department} pathwayModel={program.pathwayModel} slug={program.slug} kcicFeesPerYear={program.year1FeesInr} abroadFeesPerYear={program.abroadFeesPerYearInr} majors={program.majors} />
              </div>)}
          </div>
          <SwipeIndicator totalItems={displayPrograms.length} scrollContainerRef={scrollRef} sectionId="programs-section" />
        </div>




        <div className="text-center">
          <Link to="/programs">
            <Button size="lg" className="bg-[#B99750] hover:bg-[#a88645] text-white">
              View All Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Layout>
    </section>;
}