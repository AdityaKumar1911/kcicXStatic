import { Card, CardContent } from '@/components/ui/card';

interface Highlight {
  icon: React.ReactNode;
  title: string;
  value: string;
}

interface UniversityHighlightsSectionProps {
  highlights: Highlight[];
}

export default function UniversityHighlightsSection({ highlights }: UniversityHighlightsSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0B1B3A]/5 via-white to-[#B99750]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#0B1B3A] to-[#B99750] rounded-full flex items-center justify-center text-white">
                  {highlight.icon}
                </div>
                <h3 className="text-3xl font-bold text-[#0B1B3A] mb-2">{highlight.value}</h3>
                <p className="text-gray-600">{highlight.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
