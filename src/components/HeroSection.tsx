import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, Video } from 'lucide-react';
import { useState } from 'react';
import Layout from './Layout';


export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" role="banner">
      {/* Full Banner Background Image with Tint */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760533594343_ecf8b9ab.webp" 
          alt="Diverse group of happy students at KCIC Pathway College campus celebrating their academic journey" 
          className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
          loading="eager" 
          fetchPriority="high" 
          onLoad={() => setImageLoaded(true)} 
          width="1920" 
          height="1080" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/75"></div>
      </div>
      
      <Layout className="relative z-10 py-20 sm:py-24 lg:py-28 pt-24 sm:pt-28 lg:pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 mb-6 sm:mb-8" role="status">
            <GraduationCap className="w-4 h-4 text-[#B99750] flex-shrink-0" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-white">Study Smart, Save More</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6">
            <span className="text-white block">Proudly different,</span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#B99750] via-[#d4ab5e] to-[#B99750] bg-clip-text text-transparent">Proudly Global</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl font-medium mb-6 sm:mb-8">
            KCIC gives you a global future — a high-paying career abroad, respected lifestyle, and the pride of settling overseas. Not just the degree!
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer" className="w-full xs:w-auto">
              <Button size="lg" className="w-full xs:w-auto bg-gradient-to-r from-[#B99750] to-[#a88645] hover:from-[#a88645] hover:to-[#967a3d] text-white shadow-xl h-12 sm:h-14 px-5 sm:px-8 text-sm sm:text-base font-semibold rounded-xl transition-all">
                Apply Now <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </Button>
            </a>

            <Link to="/programs" className="w-full xs:w-auto">
              <Button size="lg" variant="outline" className="w-full xs:w-auto h-12 sm:h-14 px-5 sm:px-8 text-sm sm:text-base font-semibold border-2 border-white bg-white/15 hover:bg-white/25 hover:border-white text-white rounded-xl backdrop-blur-md transition-all shadow-lg">
                <BookOpen className="mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                Explore Programs
              </Button>
            </Link>

            <Link to="/virtual-tour" className="w-full xs:w-auto">
              <Button size="lg" variant="outline" className="w-full xs:w-auto h-12 sm:h-14 px-5 sm:px-8 text-sm sm:text-base font-semibold border-2 border-[#B99750] bg-[#B99750]/20 hover:bg-[#B99750]/30 hover:border-[#B99750] text-white rounded-xl backdrop-blur-md transition-all shadow-lg">
                <Video className="mr-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                Virtual Tour
              </Button>
            </Link>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/20">
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#B99750]">1M+</div>
              <div className="text-xs sm:text-sm font-medium text-white/70 mt-1 leading-snug">Connected to a 1M+ strong global student ecosystem every year.</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#B99750] whitespace-nowrap">Top 100</div>
              <div className="text-xs sm:text-sm font-medium text-white/70 mt-1 leading-snug">Your degree, from the Top 100 universities ranked above IITs.</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#B99750] whitespace-nowrap">Top 10</div>
              <div className="text-xs sm:text-sm font-medium text-white/70 mt-1 leading-snug">In partnership with Top 10 Global universities for employability.</div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
