// Contact Page - POC Migration
// Migrated from: src/pages/Contact.tsx

import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

// Static metadata
export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact KCIC admissions team. Get answers about pathway programs and study abroad opportunities.',
};

// Server Component - static content
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-[#0B1B3A]">Contact Us</h1>
            <p className="text-xl text-gray-600">Get in touch with our admissions team</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Client Component for form */}
            <ContactForm />

            {/* Server-rendered contact info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="text-[#B99750] mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+912212345678" className="text-gray-600 hover:text-[#B99750]">
                        +91 22 1234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="text-[#B99750] mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:admissions@kcic.edu.in" className="text-gray-600 hover:text-[#B99750]">
                        admissions@kcic.edu.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#B99750] mt-1" />
                    <div>
                      <p className="font-semibold">Head Office</p>
                      <p className="text-gray-600">Andheri East, Mumbai<br />Maharashtra 400069</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#0B1B3A] to-[#1a2f5a] text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
