import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import UniversitiesSection from "@/components/home/UniversitiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { getFeaturedTestimonials } from "@/lib/supabase/testimonials";

export default async function HomePage() {
  const testimonials = await getFeaturedTestimonials();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProgramsSection />
        <UniversitiesSection />
        <TestimonialsSection testimonials={testimonials} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
