import { Award, DollarSign, Gift, Briefcase, TrendingUp } from 'lucide-react';

interface UniversityKeyStatsProps {
  qsRank?: number;
  feesPerYear?: string;
  scholarshipRange?: string;
  employabilityRate?: string;
}

function EmployabilityGauge({ rate }: { rate: number }) {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (rate / 100) * circumference;
  const getColor = (r: number) => r >= 95 ? '#22c55e' : r >= 90 ? '#B99750' : r >= 85 ? '#f59e0b' : '#ef4444';

  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="45" stroke={getColor(rate)} strokeWidth="8" fill="none"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-[#0B1B3A]">{rate}%</span>
        <span className="text-xs text-gray-500">Employed</span>
      </div>
    </div>
  );
}

export default function UniversityKeyStatsSection({ qsRank, feesPerYear, scholarshipRange, employabilityRate }: UniversityKeyStatsProps) {
  const rate = employabilityRate ? parseInt(employabilityRate.replace('%', '')) : 0;

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B3A] mb-4">Key Statistics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Important metrics to help you make an informed decision</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Employability Rate - Featured */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 lg:row-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#B99750] to-[#D4AF37] rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B1B3A]">Employability Rate</h3>
                <p className="text-sm text-gray-500">Graduate employment within 6 months</p>
              </div>
            </div>
            <EmployabilityGauge rate={rate} />
            <div className="mt-6 bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Above Industry Average</span>
              </div>
              <p className="text-sm text-gray-600">Graduates from this university have excellent career prospects with strong industry connections.</p>
            </div>
          </div>

          {/* Other Stats */}
          <div className="space-y-4">
            {qsRank && (
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-center gap-4 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0B1B3A] to-[#1a3a6e] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">QS World Ranking</p>
                  <p className="text-2xl font-bold text-[#0B1B3A]">#{qsRank}</p>
                </div>
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0B1B3A] rounded-full" style={{ width: `${Math.max(100 - (qsRank / 10), 20)}%` }} />
                </div>
              </div>
            )}

            {feesPerYear && (
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-center gap-4 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Annual Tuition Fees</p>
                  <p className="text-2xl font-bold text-[#0B1B3A]">{feesPerYear}</p>
                </div>
              </div>
            )}

            {scholarshipRange && (
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-center gap-4 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-[#B99750] to-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gift className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">Scholarship Range</p>
                  <p className="text-2xl font-bold text-[#0B1B3A]">{scholarshipRange}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
