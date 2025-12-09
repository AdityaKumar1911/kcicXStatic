import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, DollarSign, MapPin, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CareerOutcomesSection() {
  const stats = [
    { icon: TrendingUp, value: '95%', label: 'Graduate Employment Rate' },
    { icon: DollarSign, value: '2-4 Years', label: 'Post-Study Work Visa' },
    { icon: MapPin, value: '15+ Countries', label: 'Transfer Destinations' },
    { icon: Award, value: '100%', label: 'Transfer Success Rate' },
  ];

  const companies = [
    { name: 'E&Y', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762883544228_0f9d1940.webp' },
    { name: 'FinTru', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762883544980_a1ec3a8b.webp' },
    { name: 'GE', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762883545842_cfa90547.webp' },
    { name: 'BT', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762883546983_0e9e021e.webp' },
    { name: 'Airbus', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762883547761_3fe87fd4.webp' },
    { name: 'VW Racing', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762883548485_d0f82a19.webp' },
    { name: 'Toyota', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762883549210_f366eb6b.webp' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0B1B3A] mb-4">Where Our Students Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            KCIC graduates land high-paying roles in shortage-skill sectors with clear PR pathways.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <Card key={idx} className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] border-none text-center hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#B99750] rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#FAF3E0] to-white rounded-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-[#0B1B3A] mb-4 text-center">Our Graduates Work With Leading Companies</h3>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            KCIC alumni have secured positions at world-renowned organizations across various industries
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 mb-8">
            {companies.map((company, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow">
                <img src={company.logo} alt={company.name} className="w-full h-16 object-contain" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#0B1B3A] hover:bg-[#1a2942] text-white px-8 py-6 text-lg"
            >
              Student Testimonials
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
