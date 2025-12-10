import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { signaturePrograms as fallbackPrograms } from "@/data/signaturePrograms";
import Layout from "./Layout";

interface SignatureProgram {
  id: string;
  name: string;
  study_in_india: string;
  study_abroad: string;
  course_tag: string;
  banner_image: string;
  overlay_text: string;
  tagline: string;
  partner_universities: string[];
  slug: string;
  average_salary?: string;
  potential_recruiters?: string[];
}

const SignatureProgramsSection = () => {
  const [programs, setPrograms] = useState<SignatureProgram[]>([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    const mapped = fallbackPrograms.map((p) => ({
      id: p.id,
      name: p.name,
      study_in_india: p.studyInIndia,
      study_abroad: p.studyAbroad,
      course_tag: p.courseTag,
      banner_image: p.bannerImage,
      overlay_text: p.overlayText,
      tagline: p.tagline,
      partner_universities: p.partnerUniversities,
      slug: p.slug,
      average_salary: p.averageSalary,
      potential_recruiters: p.potentialRecruiters,
    }));

    if (!supabase) {
      setPrograms(mapped);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("signature_programs")
        .select("*")
        .order("display_order", { ascending: true });

      if (!error && data && data.length > 0) setPrograms(data);
      else setPrograms(mapped);
    } catch {
      setPrograms(mapped);
    }
  };

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      "High Demand": "bg-[#0B1B3A]",
      Trending: "bg-[#B99750]",
      Popular: "bg-[#0B1B3A]",
      Emerging: "bg-[#B99750]",
      Premium: "bg-[#B99750]",
    };
    return colors[tag] || "bg-[#0B1B3A]";
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#FAF3E0] via-white to-[#FAF3E0]">
      <Layout>
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0B1B3A]">
            Programs Exclusively at KCIC
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            <span className="font-bold">
              2 days In campus, 5 days building your career — Just like
              universities abroad.
            </span>
          </p>
        </div>

        {/* MOBILE HORIZONTAL SCROLL */}
        <div className="flex gap-6 overflow-x-auto md:hidden pb-4 snap-x snap-mandatory">
          {programs.map((program) => (
            <div
              key={program.id}
              className="min-w-[280px] snap-center bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="h-3 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-[#0B1B3A]" />

              {/* Image */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={program.banner_image}
                  alt={program.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className={`${getTagColor(
                    program.course_tag
                  )} absolute top-3 right-3 text-white px-3 py-1.5 rounded-full text-xs font-bold`}
                >
                  {program.course_tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1B3A]/95 via-[#0B1B3A]/70 to-transparent p-4">
                  <h3 className="text-white text-lg font-bold leading-tight">
                    {program.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="space-y-3 mb-4 flex-grow">
                  <div className="border-b pb-2">
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                      Final Year Study
                    </p>
                    <p className="text-sm font-bold text-[#0B1B3A]">
                      {program.study_abroad}
                    </p>
                  </div>

                  {program.average_salary && (
                    <div className="border-b pb-2">
                      <p className="text-xs font-semibold text-gray-500 mb-1">
                        Average Salary
                      </p>
                      <p className="text-sm font-bold text-[#B99750]">
                        {program.average_salary}
                      </p>
                    </div>
                  )}
                </div>

                <Link to={`/programs/${program.slug}`}>
                  <Button className="w-full bg-gradient-to-r from-[#0B1B3A] to-[#B99750] text-white">
                    Explore Course
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 overflow-hidden"
            >
              <div className="h-3 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-[#0B1B3A]" />

              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={program.banner_image}
                  alt={program.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div
                  className={`${getTagColor(
                    program.course_tag
                  )} absolute top-3 right-3 text-white px-3 py-1.5 rounded-full text-xs font-bold`}
                >
                  {program.course_tag}
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0B1B3A]/95 via-[#0B1B3A]/70 to-transparent p-4">
                  <h3 className="text-white text-lg font-bold leading-tight">
                    {program.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="space-y-3 mb-4 flex-grow">
                  <div className="border-b pb-2">
                    <p className="text-xs font-semibold text-gray-500 mb-1">
                      Final Year Study
                    </p>
                    <p className="text-sm font-bold text-[#0B1B3A]">
                      {program.study_abroad}
                    </p>
                  </div>

                  {program.average_salary && (
                    <div className="border-b pb-2">
                      <p className="text-xs font-semibold text-gray-500 mb-1">
                        Average Salary
                      </p>
                      <p className="text-sm font-bold text-[#B99750]">
                        {program.average_salary}
                      </p>
                    </div>
                  )}
                </div>

                <Link to={`/programs/${program.slug}`}>
                  <Button className="w-full bg-gradient-to-r from-[#0B1B3A] to-[#B99750] text-white">
                    Explore Course
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
};

export default SignatureProgramsSection;
