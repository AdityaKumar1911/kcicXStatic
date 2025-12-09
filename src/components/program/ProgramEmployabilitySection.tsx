import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Briefcase, DollarSign, Shield, Building2, CheckCircle, AlertTriangle } from 'lucide-react';
import { ProgramEmployabilityData } from '@/types';

interface Props {
  data: ProgramEmployabilityData;
  programTitle: string;
}

export default function ProgramEmployabilitySection({ data, programTitle }: Props) {
  const [animatedRate, setAnimatedRate] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        if (current >= data.jobPlacementRate) {
          setAnimatedRate(data.jobPlacementRate);
          clearInterval(interval);
        } else {
          setAnimatedRate(current);
        }
      }, 20);
      return () => clearInterval(interval);
    }, 300);
    return () => clearTimeout(timer);
  }, [data.jobPlacementRate]);

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (animatedRate / 100) * circumference;
  const gaugeColor = animatedRate >= 90 ? '#B99750' : animatedRate >= 80 ? '#0B1B3A' : '#B99750';

  const shortageLevel = data.shortageLevel || (data.immigrationShortageSkill ? 'Critical' : null);
  const isCritical = shortageLevel === 'Critical';

  return (
    <Card className="border-[#B99750]/20 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-[#0B1B3A] to-[#1a2d4d] text-white">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-[#B99750]" />
          Career Outcomes & Employability
        </CardTitle>
        <p className="text-white/80 text-sm mt-1">Graduate employment statistics for {programTitle}</p>
      </CardHeader>
      <CardContent className="p-6">
        {data.immigrationShortageSkill && shortageLevel && (
          <div className={`mb-6 p-4 rounded-lg border ${isCritical ? 'bg-[#0B1B3A]/5 border-[#0B1B3A]/30' : 'bg-[#B99750]/10 border-[#B99750]/30'}`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${isCritical ? 'bg-[#0B1B3A]/10' : 'bg-[#B99750]/20'}`}>
                {isCritical ? <AlertTriangle className="h-5 w-5 text-[#0B1B3A]" /> : <Shield className="h-5 w-5 text-[#B99750]" />}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`font-semibold ${isCritical ? 'text-[#0B1B3A]' : 'text-[#B99750]'}`}>
                    Skills Shortage: {isCritical ? 'Critical Shortage' : 'Medium Shortage'}
                  </span>
                  <Badge className={`text-xs ${isCritical ? 'bg-[#0B1B3A] text-white' : 'bg-[#B99750] text-white'}`}>
                    Priority Visa
                  </Badge>
                </div>
                {data.shortageSkillCategory && (
                  <p className={`text-sm mt-1 ${isCritical ? 'text-[#0B1B3A]/80' : 'text-[#B99750]'}`}>
                    Category: {data.shortageSkillCategory}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="54" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                <circle cx="64" cy="64" r="54" stroke={gaugeColor} strokeWidth="10" fill="none"
                  strokeLinecap="round" strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset} className="transition-all duration-1000 ease-out" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[#0B1B3A]">{animatedRate}%</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mt-2 text-center">Job Placement Rate</p>
            <p className="text-xs text-[#B99750] flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" /> Above Industry Average
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-4 bg-[#B99750]/10 rounded-xl border border-[#B99750]/30">
            <DollarSign className="h-8 w-8 text-[#B99750] mb-2" />
            <p className="text-2xl font-bold text-[#0B1B3A]">{data.averageStartingSalary}</p>
            <p className="text-sm text-gray-600 text-center mt-1">Average Starting Salary</p>
          </div>

          {data.topRecruiters && data.topRecruiters.length > 0 && (
            <div className="flex flex-col p-4 bg-[#FAF3E0] rounded-xl border border-[#B99750]/20">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="h-5 w-5 text-[#B99750]" />
                <span className="font-semibold text-[#0B1B3A] text-sm">Top Recruiters</span>
              </div>
              <div className="space-y-2">
                {data.topRecruiters.slice(0, 4).map((recruiter, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#0B1B3A]">
                    <CheckCircle className="h-3 w-3 text-[#B99750]" />
                    {recruiter}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-[#0B1B3A] mb-4 flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-[#B99750]" />
            Career Pathways & Salaries
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {data.careerOutcomes.map((career, idx) => (
              <div key={idx} className="p-3 bg-white rounded-lg border border-[#B99750]/20 hover:border-[#B99750]/50 transition-colors">
                <div className="flex justify-between items-start">
                  <p className="font-medium text-[#0B1B3A]">{career.title}</p>
                  <Badge variant="outline" className={`text-xs ${
                    career.demandLevel === 'Very High' ? 'border-[#0B1B3A] text-[#0B1B3A]' :
                    career.demandLevel === 'High' ? 'border-[#B99750] text-[#B99750]' : 'border-gray-400 text-gray-500'
                  }`}>
                    {career.demandLevel} Demand
                  </Badge>
                </div>
                <p className="text-sm text-[#B99750] font-semibold mt-1">{career.salaryRange}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
