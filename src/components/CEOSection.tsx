import { Button } from '@/components/ui/button';
import Layout from './Layout';

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function CEOSection() {
  const handleWebinarClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Layout>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-[#0B1B3A] rounded-2xl sm:rounded-3xl opacity-20 blur-xl sm:blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl">
                <img 
                  src="https://d64gsuwffb70l.cloudfront.net/68e330572eb2a6f287dffa2f_1762072669608_dfb2a336.JPG" 
                  alt="John Christopher, CEO of KCIC" 
                  className="w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#B99750]/10 text-[#B99750] border border-[#B99750]/30 rounded-full text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 bg-[#B99750] rounded-full animate-pulse"></span>
                Join the next upcoming webinar!
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The Visionary<br />Behind KCIC
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                Two decades. One mission — transforming ordinary lives into global success stories.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-transparent"></div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-gray-900">John Christopher</span> is the only leader in this space blending immigration, education, and global training into one purpose — helping Indians live, work, and study across the world.
              </p>
              <p>
                From guiding thousands of professionals to migrate under skilled programs to building KCIC with Pearson's global education ecosystem, John has spent 20+ years shaping the global dreams of Indian families.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Button 
                onClick={handleWebinarClick} 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-[#0B1B3A] to-[#B99750] hover:from-[#0B1B3A]/90 hover:to-[#B99750]/90 text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Webinar with John
              </Button>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500 font-medium">Follow John:</span>
                <a
                  href="https://www.linkedin.com/in/johnchristopher-kcic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0077B5] text-white hover:bg-[#005885] shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Follow John on LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.instagram.com/johnchristopher.kcic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white hover:opacity-90 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  aria-label="Follow John on Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
