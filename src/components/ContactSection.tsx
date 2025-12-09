import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Layout from './Layout';

export default function ContactSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#FAF3E0] to-white">
      <Layout>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0B1B3A]">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Contact our admissions team for personalized guidance
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-[#B99750]">
            <div className="w-14 h-14 bg-[#0B1B3A] rounded-full flex items-center justify-center mb-4">
              <Phone className="text-[#B99750] w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-[#0B1B3A]">Call Us</h3>
            <p className="text-gray-600">+91 22 1234 5678</p>
            <p className="text-gray-600">+91 80 9876 5432</p>
          </div>


          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-[#B99750]">
            <div className="w-14 h-14 bg-[#B99750] rounded-full flex items-center justify-center mb-4">
              <Mail className="text-white w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-[#0B1B3A]">Email Us</h3>
            <p className="text-gray-600">admissions@kcic.edu.in</p>
            <p className="text-gray-600">info@kcic.edu.in</p>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-[#B99750]">
            <div className="w-14 h-14 bg-[#B99750] rounded-full flex items-center justify-center mb-4">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-[#0B1B3A]">Visit Us</h3>
            <p className="text-gray-600">Mumbai, Bangalore</p>
            <p className="text-gray-600">Delhi NCR</p>
          </div>

        </div>

        <div className="text-center">
          <Link to="/contact">
            <Button size="lg" className="bg-[#B99750] hover:bg-[#a88645] text-white text-lg px-8 py-6">
              Contact Us Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Layout>
    </section>

  );
}