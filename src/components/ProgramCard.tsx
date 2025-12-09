import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, MapPin, DollarSign, Briefcase, Wrench, Monitor, Brain, FlaskConical, HardHat, UtensilsCrossed, Cloud } from 'lucide-react';
import { Department } from '@/types';

interface ProgramCardProps {
  title: string;
  department: Department;
  pathwayModel: string;
  slug: string;
  kcicFeesPerYear: number;
  abroadFeesPerYear?: number;
  majors?: string[];
}

const getProgramIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('business')) return Briefcase;
  if (lowerTitle.includes('engineering')) return Wrench;
  if (lowerTitle.includes('computer')) return Monitor;
  if (lowerTitle.includes('psychology')) return Brain;
  if (lowerTitle.includes('science')) return FlaskConical;
  if (lowerTitle.includes('construction')) return HardHat;
  if (lowerTitle.includes('hospitality')) return UtensilsCrossed;
  if (lowerTitle.includes('cloud')) return Cloud;
  return GraduationCap;
};

export default function ProgramCard({ 
  title, 
  department, 
  pathwayModel, 
  slug, 
  kcicFeesPerYear,
  majors
}: ProgramCardProps) {
  const getIndiaYears = (model: string) => model.split('+')[0];
  const getAbroadYears = (model: string) => model.split('+')[1];
  const IconComponent = getProgramIcon(title);

  return (
    <Card 
      className="border-2 border-[#B99750]/20 hover:border-[#B99750] transition-all duration-300 hover:shadow-xl h-full flex flex-col"
      role="article"
    >
      <CardContent className="p-4 sm:p-5 flex flex-col h-full">
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0B1B3A] flex items-center justify-center transition-transform hover:scale-110">
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
        </div>

        <h3 className="text-sm sm:text-base font-bold text-[#0B1B3A] mb-3 text-center leading-snug min-h-[2.5rem] flex items-center justify-center line-clamp-2">
          {title}
        </h3>


        <div className="space-y-2 mb-3">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#B99750] flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-semibold text-gray-700">Study in India:</span>
              <span className="text-gray-600"> {getIndiaYears(pathwayModel)} or 2 Yrs</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#0B1B3A] flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-semibold text-gray-700">Study abroad:</span>
              <span className="text-gray-600"> {getAbroadYears(pathwayModel)} or 2 Yrs</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <DollarSign className="w-4 h-4 text-[#B99750] flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-semibold text-gray-700">Fees:</span>
              <span className="text-gray-600"> ₹{kcicFeesPerYear.toLocaleString()}/Yr</span>
            </div>
          </div>
        </div>

        {majors && majors.length > 0 && (
          <div className="text-xs text-gray-600 mb-3 flex-grow line-clamp-2">
            <span className="font-semibold">Majors:</span> {majors.join(', ')}.
          </div>
        )}

        <div className="mt-auto">
          <Link to={`/programs/${slug}`} aria-label={`View details for ${title} program`}>
            <Button 
              className="w-full bg-gradient-to-r from-[#B99750] to-[#a88645] hover:from-[#a88645] hover:to-[#967a3d] text-white font-semibold text-sm py-2"
            >
              View Details <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
