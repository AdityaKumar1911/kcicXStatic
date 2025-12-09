import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ElectricalSemiconductorFAQSection() {
  const faqs = [
    { q: "Do I need prior electronics experience?", a: "No prior experience required. We start with fundamentals and progress to advanced semiconductor concepts." },
    { q: "What software tools will I learn?", a: "Industry-standard tools including Cadence, Synopsys, MATLAB, and SPICE simulation software." },
    { q: "Are there placement opportunities?", a: "Yes, we have strong partnerships with semiconductor companies offering internships and graduate roles." },
    { q: "What's the difference from standard EEE?", a: "This program includes specialized semiconductor physics, VLSI design, and fabrication technology modules." },
    { q: "Can I pursue postgraduate studies?", a: "Absolutely. Graduates progress to MSc/PhD programs in Microelectronics, Nanoengineering, and related fields." }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <Layout>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1B3A] mb-8 md:mb-12 text-center">
          Frequently Asked <span className="text-[#B99750]">Questions</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border-2 border-[#B99750]/20 rounded-xl px-6 hover:border-[#B99750] transition-colors">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-[#0B1B3A] hover:text-[#B99750]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Layout>
    </section>
  );
}
