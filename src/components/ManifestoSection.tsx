import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, Users, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';
import Layout from './Layout';

export default function ManifestoSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0B1B3A] via-[#1a2f5a] to-[#0B1B3A] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762151083028_4c4d4629.webp')] bg-cover bg-center"></div>
      </div>

      <Layout className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Manifesto</h2>
          <p className="text-lg sm:text-xl text-[#B99750]/90 mb-8">
            We believe in transforming education through global collaboration, 
            innovation, and unwavering commitment to student success.
          </p>
        </div>

        {/* -------- Horizontal Scroll on Mobile -------- */}
        <div className="overflow-x-auto sm:overflow-visible -mx-4 px-4">
          <div className="
            flex sm:grid sm:grid-cols-2 lg:grid-cols-4 
            gap-4 sm:gap-6 
            snap-x snap-mandatory sm:snap-none 
            overflow-x-auto sm:overflow-visible
            pb-4
          ">
            {[
              { icon: Globe, title: "Global Vision", text: "Education without borders" },
              { icon: Users, title: "Student First", text: "Your success is our mission" },
              { icon: Lightbulb, title: "Innovation", text: "Pioneering new pathways" },
              { icon: BookOpen, title: "Excellence", text: "World-class standards" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="
                  snap-center min-w-[240px] sm:min-w-0
                  bg-white/10 backdrop-blur-sm 
                  p-5 sm:p-6 rounded-lg 
                  border border-[#B99750]/30 
                  hover:bg-white/20 
                  transition-all
                "
              >
                <item.icon className="h-8 w-8 sm:h-10 sm:w-10 mb-4 text-[#B99750]" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#B99750]/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/manifesto">
            <Button size="lg" variant="secondary" className="group">
              Read Our Philosophy
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Layout>
    </section>
  );
}
