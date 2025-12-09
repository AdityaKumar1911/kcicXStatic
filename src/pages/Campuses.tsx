import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import CampusHeroSection from '@/components/campus/CampusHeroSection';
import CampusLifeSection from '@/components/campus/CampusLifeSection';
import AcademicsSection from '@/components/campus/AcademicsSection';
import ExploreECRSection from '@/components/campus/ExploreECRSection';
import AccommodationSection from '@/components/campus/AccommodationSection';
import { Button } from '@/components/ui/button';

export default function Campuses() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <PageBreadcrumb items={[{ label: 'Campuses' }]} />
      
      <CampusHeroSection />

      
      <div id="campus-content">
        <CampusLifeSection />
        <AcademicsSection />
        <ExploreECRSection />
        <AccommodationSection />
        
        {/* Final CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0B1B3A] to-[#1a2f5a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience <span className="text-[#B99750]">KCIC Life?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              At KCIC, your education isn't just about what you learn — it's about who you become.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg"
                className="bg-[#B99750] hover:bg-[#a88645] text-white text-lg px-8 py-6 rounded-full"
              >
                Apply Now
              </Button>
            </a>

              <Button 
                onClick={() => window.location.href = '/contact'} 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#0B1B3A] text-lg px-8 py-6 rounded-full"
              >
                Book a Campus Visit
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}