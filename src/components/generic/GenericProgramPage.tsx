import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Briefcase } from 'lucide-react';
import Layout from '@/components/Layout';

interface ProgramData {
  title: string;
  subtitle: string;
  tag: string;
  duration: string;
  startDate: string;
  heroImage: string;
  modules: Array<{ title: string; desc: string }>;
  careers: Array<{ title: string; salary: string; companies: string }>;
  requirements: string[];
  whyKCIC: string[];
  faqs: Array<{ q: string; a: string }>;
}

export default function GenericProgramPage({ data }: { data: ProgramData }) {
  useEffect(() => {
    document.title = `${data.title} | KCIC Pathway`;
  }, [data.title]);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3A]/95 via-[#0B1B3A]/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
            <div className="max-w-3xl">
              <div className="inline-block bg-[#B99750] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">{data.tag}</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{data.title}</h1>
              <p className="text-xl sm:text-2xl text-[#FAF3E0] mb-8">{data.subtitle}</p>
              <div className="flex flex-wrap gap-4 mb-8 text-white">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-[#B99750]" />
                  <span className="font-semibold">{data.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#B99750]" />
                  <span className="font-semibold">{data.startDate}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-[#B99750] hover:bg-[#a88645] text-white text-base sm:text-lg font-semibold px-8 py-6">Apply Now</Button>
                </a>
                <a href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white bg-white text-[#0B1B3A] hover:bg-white/90 text-base sm:text-lg font-semibold px-8 py-6">Enquire Now</Button>
                </a>
              </div>


            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="py-16 sm:py-20 bg-white">
          <Layout>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-12 text-center">Course Modules</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.modules.map((m, i) => (
                <div key={i} className="bg-gradient-to-br from-[#0B1B3A] to-[#0B1B3A]/90 p-6 rounded-xl border-2 border-[#B99750] hover:shadow-2xl transition-all">
                  <h3 className="text-xl font-bold text-white mb-3">{m.title}</h3>
                  <p className="text-gray-200">{m.desc}</p>
                </div>
              ))}
            </div>
          </Layout>
        </section>

        {/* Careers */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942]">
          <Layout>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Career Pathways</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.careers.map((c, i) => (
                <div key={i} className="bg-white/10 border border-[#B99750]/30 rounded-xl p-6 hover:bg-white/15 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#B99750] p-3 rounded-lg"><Briefcase className="w-6 h-6 text-white" /></div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                      <p className="text-[#B99750] font-semibold mb-2">{c.salary}</p>
                      <p className="text-[#FAF3E0]/80">{c.companies}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Layout>
        </section>
      </main>
      <Footer />
    </>
  );
}
