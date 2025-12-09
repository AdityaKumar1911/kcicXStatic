import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ElectronicsEmbeddedFAQSection() {
  const faqs = [
    { q: 'What programming languages will I learn?', a: 'You will learn C, C++, Python, and assembly language for embedded systems development.' },
    { q: 'Do I need prior electronics experience?', a: 'No prior experience is required. We start with fundamentals and build up to advanced topics.' },
    { q: 'What hardware will I work with?', a: 'You will work with ARM Cortex microcontrollers, Arduino, Raspberry Pi, and professional development boards.' },
    { q: 'Are there industry placements?', a: 'Yes, we offer placement opportunities with tech companies and engineering firms.' }
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
