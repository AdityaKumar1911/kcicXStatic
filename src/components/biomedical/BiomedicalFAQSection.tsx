import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function BiomedicalFAQSection() {
  const faqs = [
    { q: 'What career opportunities are available after completing this program?', a: 'Graduates can work as clinical scientists, research scientists, medical laboratory technicians, pharmaceutical scientists, or pursue further studies in medicine or research.' },
    { q: 'Is this program accredited by professional bodies?', a: 'Yes, the program is designed to meet HCPC (Health and Care Professions Council) standards and IBMS (Institute of Biomedical Science) requirements.' },
    { q: 'What is included in the placement year?', a: 'The placement year provides hands-on experience in NHS laboratories, research institutions, or pharmaceutical companies, giving you practical skills and industry connections.' },
    { q: 'Can I pursue a career in medicine after this degree?', a: 'Yes, many biomedical science graduates use this as a pathway to medicine, dentistry, or other healthcare professions through postgraduate study.' },
    { q: 'What laboratory skills will I develop?', a: 'You will gain expertise in microscopy, cell culture, molecular techniques, clinical diagnostics, biochemical analysis, and research methodologies.' },
    { q: 'Are there research opportunities during the program?', a: 'Yes, students can participate in research projects, work with faculty on studies, and present findings at conferences during their time at KCIC and UK universities.' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <Layout>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1B3A] mb-8 md:mb-12 text-center">
          Frequently Asked <span className="text-[#B99750]">Questions</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-2 border-[#B99750]/20 rounded-xl px-6 hover:border-[#B99750] transition-colors">
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
