'use client';

import { Card, CardContent } from '@/components/ui/card';
import type { Testimonial } from '@/lib/supabase/types';

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  { id: '1', name: 'Sarah Chen', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200', program: 'Aerospace Engineering', transferred_to: 'University of Birmingham', country: 'UK', quote: 'KCIC helped me achieve my dream of studying in the UK.', year: '2024', status: 'approved', display_order: 1, created_at: '', updated_at: '' },
  { id: '2', name: 'Raj Patel', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200', program: 'AI & Machine Learning', transferred_to: 'Coventry University', country: 'UK', quote: 'The pathway program made my transition seamless.', year: '2024', status: 'approved', display_order: 2, created_at: '', updated_at: '' },
  { id: '3', name: 'Priya Sharma', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200', program: 'Business Management', transferred_to: 'De Montfort University', country: 'UK', quote: 'Best decision I ever made.', year: '2023', status: 'approved', display_order: 3, created_at: '', updated_at: '' },
  { id: '4', name: 'Arjun Kumar', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200', program: 'Civil Engineering', transferred_to: 'University of Northampton', country: 'UK', quote: 'KCIC made my international education dream a reality.', year: '2023', status: 'approved', display_order: 4, created_at: '', updated_at: '' },
];

export default function TestimonialsSection({ testimonials = defaultTestimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#0B1B3A] to-[#1a2f5a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block px-4 py-2 bg-[#B99750]/20 rounded-full mb-4">
            <span className="text-[#FAF3E0] font-semibold text-xs sm:text-sm">STUDENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FAF3E0] mb-4">Hear From Our Students</h2>
          <p className="text-[#FAF3E0]/90 text-base sm:text-lg max-w-3xl mx-auto">
            Real stories from students who successfully transferred to top universities worldwide
          </p>
        </div>

        {/* 📱 Mobile Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto md:hidden pb-4 snap-x snap-mandatory">
          {testimonials.map(t => (
            <div key={t.id} className="min-w-[260px] snap-center">
              <Card className="border-2 border-[#B99750]/20 hover:border-[#B99750] transition-all">
                <CardContent className="p-5">
                  <div className="flex justify-center mb-3">
                    <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-[#B99750]" />
                  </div>
                  <div className="text-center mb-4 pb-4 border-b border-gray-200">
                    <h4 className="font-bold text-[#0B1B3A] text-lg mb-1">{t.name}</h4>
                    <p className="text-sm text-[#B99750] font-semibold mb-1">{t.year}</p>
                    <p className="text-sm text-gray-700 font-medium">{t.transferred_to}</p>
                    <p className="text-xs text-gray-500">{t.country}</p>
                  </div>
                  <p className="text-sm font-semibold text-[#0B1B3A] mb-3">{t.program}</p>
                  <p className="text-gray-600 text-sm italic">"{t.quote}"</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* 💻 Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(t => (
            <Card key={t.id} className="border-2 border-[#B99750]/20 hover:border-[#B99750] transition-all">
              <CardContent className="p-5">
                <div className="flex justify-center mb-3">
                  <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-[#B99750]" />
                </div>
                <div className="text-center mb-4 pb-4 border-b border-gray-200">
                  <h4 className="font-bold text-[#0B1B3A] text-lg mb-1">{t.name}</h4>
                  <p className="text-sm text-[#B99750] font-semibold mb-1">{t.year}</p>
                  <p className="text-sm text-gray-700 font-medium">{t.transferred_to}</p>
                  <p className="text-xs text-gray-500">{t.country}</p>
                </div>
                <p className="text-sm font-semibold text-[#0B1B3A] mb-3">{t.program}</p>
                <p className="text-gray-600 text-sm italic">"{t.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
