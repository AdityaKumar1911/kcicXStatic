import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Plane, Briefcase, FileCheck, Globe2, GraduationCap } from 'lucide-react';

export default function Pathways() {
  const [activeRoute, setActiveRoute] = useState<'route1' | 'route2'>('route1');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      <div className="pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gradient-primary">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Two Global Study Routes. One International Degree.
            </p>
            
            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={() => setActiveRoute('route1')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeRoute === 'route1'
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#000054]'
                }`}
              >
                9 Month Route
              </button>
              <button
                onClick={() => setActiveRoute('route2')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  activeRoute === 'route2'
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#000054]'
                }`}
              >
                18 Month Route
              </button>


            </div>
          </div>

          {activeRoute === 'route1' && <Route1Content />}
          {activeRoute === 'route2' && <Route2Content />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Route1Content() {
  return (
    <div className="space-y-0">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#000054] mb-2">Transfer Abroad in 9 Months</h2>
        <p className="text-2xl font-bold text-gray-800">
          9 Months at KCIC → Transfer Abroad → Graduate → Work Abroad
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <StageCard
          stepNumber={1}
          icon={<BookOpen className="w-8 h-8" />}
          title="Study at KCIC"
          duration="9 Months"
          points={[
            'Study 120 Credits',
            'Global Foundation Modules',
            'No heavy lab requirement at this stage',
            'Build academic base, confidence, and IELTS-equivalent communication'
          ]}
        />
        
        <StageCard
          stepNumber={2}
          icon={<Plane className="w-8 h-8" />}
          title="Study Abroad"
          duration="2–3 Years"
          points={[
            'Complete bachelor degree at partner university',
            'BSc/BA/BBA → 2 years',
            'BEng/BTech → 3 years',
            'Work part-time during semesters, full-time during breaks to manage living expenses'
          ]}
        />
        
        <StageCard
          stepNumber={3}
          icon={<Briefcase className="w-8 h-8" />}
          title="Optional Paid Work Placement"
          duration="Up to 1 Year"
          points={[
            'Take a paid internship/work placement abroad',
            'Helps pay final-year tuition + reduces financial burden',
            'Often leads to full-time job offers after graduation'
          ]}
          optional
        />
        
        <StageCard
          stepNumber={4}
          icon={<FileCheck className="w-8 h-8" />}
          title="Post-Study Work Visa"
          duration="2–4 Years"
          points={[
            'Graduate → Receive 2-year work permit',
            'STEM / shortage occupations may extend up to 4 years'
          ]}
        />
        
        <StageCard
          stepNumber={5}
          icon={<Globe2 className="w-8 h-8" />}
          title="Permanent Residency / Long-Term Employment"
          duration="Long-term"
          points={[
            'Most KCIC pathways lead to critical-skill occupations',
            'Students may later sponsor family for migration'
          ]}
          isLast
        />
      </div>

      <div className="text-center mt-12">
        <Link to="/apply">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6">
            Check Eligibility Criteria
          </Button>
        </Link>
      </div>
    </div>
  );
}

function Route2Content() {
  return (
    <div className="space-y-0">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#000054] mb-2">Transfer Abroad in 18 Months</h2>
        <p className="text-2xl font-bold text-gray-800">
          18 Months at KCIC → Transfer Abroad → Graduate → Work Abroad
        </p>
      </div>


      <div className="relative max-w-4xl mx-auto">
        <StageCard
          stepNumber={1}
          icon={<GraduationCap className="w-8 h-8" />}
          title="Study at KCIC"
          duration="18 Months"
          points={[
            'Study 240 Credits',
            'Foundation + Specialisation Modules',
            'Stronger academic & technical base before going abroad'
          ]}
        />
        
        <StageCard
          stepNumber={2}
          icon={<Plane className="w-8 h-8" />}
          title="Study Abroad"
          duration="1–2 Years"
          points={[
            'BSc/BA/BBA → 1 year',
            'BEng/BTech → 2 years',
            'Work part-time during course + full-time during holidays'
          ]}
        />
        
        <StageCard
          stepNumber={3}
          icon={<Briefcase className="w-8 h-8" />}
          title="Optional Paid Work Placement"
          duration="Up to 1 Year"
          points={[
            'Same as Route 1',
            'Popular for students who want to reduce final-year fees and secure job placement'
          ]}
          optional
        />
        
        <StageCard
          stepNumber={4}
          icon={<FileCheck className="w-8 h-8" />}
          title="Post-Study Work Visa"
          duration="2–4 Years"
          points={['Same as Route 1']}
        />
        
        <StageCard
          stepNumber={5}
          icon={<Globe2 className="w-8 h-8" />}
          title="Permanent Residency / Long-Term Employment"
          duration="Long-term"
          points={['Same as Route 1']}
          isLast
        />
      </div>

      <div className="text-center mt-12">
        <Link to="/apply">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6">
            Check Eligibility
          </Button>
        </Link>
      </div>
    </div>
  );
}

interface StageCardProps {
  stepNumber: number;
  icon: React.ReactNode;
  title: string;
  duration: string;
  points: string[];
  optional?: boolean;
  isLast?: boolean;
}

function StageCard({ stepNumber, icon, title, duration, points, optional, isLast }: StageCardProps) {
  return (
    <div className="relative pl-16 pb-8">
      {/* Dotted line connector */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 border-l-2 border-dashed border-gray-300" />
      )}

      
      {/* Step number circle */}
      <div className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg bg-gradient-primary">
        {stepNumber}
      </div>
      
      {/* Content card */}
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-blue-100 text-[#000054]">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold">{title}</h3>
              {optional && (
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Optional
                </span>
              )}
            </div>
            <p className="text-base font-semibold mb-3 text-[#E60028]">
              {duration}
            </p>
            <ul className="space-y-2">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#000054]" />
                  <span className="text-gray-700 text-sm">{point}</span>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
