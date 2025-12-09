'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#B99750] to-[#a88645] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Global Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Take the first step towards your international education. Our admissions team is ready to guide you through the process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-[#0B1B3A] hover:bg-[#0B1B3A]/90 text-white h-14 px-8 text-base font-semibold rounded-xl">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-2 border-white bg-white/10 hover:bg-white/20 text-white rounded-xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Call Us</p>
                  <p className="text-white font-semibold">+91 22 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email Us</p>
                  <p className="text-white font-semibold">admissions@kcic.edu.in</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/80 text-sm">
                Office Hours: Monday - Saturday, 9:00 AM - 6:00 PM IST
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
