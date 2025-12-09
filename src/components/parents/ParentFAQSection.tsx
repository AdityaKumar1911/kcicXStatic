import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function ParentFAQSection() {
  const faqs = [
    { q: 'Is the campus safe?', a: 'Yes. Our ECR campus has 24/7 security monitoring, controlled access, CCTV coverage, and strict safety protocols. We maintain a zero-tolerance policy for any form of harassment or misconduct.' },
    { q: 'How are boys & girls interactions handled?', a: 'KCIC is not gender-restrictive. We foster a respectful, dignified environment where all students interact professionally. Our code of conduct emphasizes mutual respect and appropriate behavior.' },
    { q: 'What if my child struggles emotionally or academically?', a: 'Small batch sizes ensure every student receives personalized attention. Teachers and mentors intervene early when challenges arise, providing both academic support and emotional guidance.' },
    { q: 'How does transfer abroad work?', a: 'KCIC has guaranteed transfer agreements with partner universities. Credits earned at KCIC are fully recognized, allowing seamless continuation of studies abroad.' },
    { q: 'Can students work part-time abroad?', a: 'Yes. Students can work part-time during term (typically 20 hours/week) and full-time during breaks, helping offset living costs and gain valuable work experience.' },
    { q: 'Is the degree the same as students who study fully overseas?', a: 'Absolutely. Students receive the exact same degree from the partner university, with no distinction from those who studied there for the entire duration.' },
    { q: 'What about post-study work visas and PR?', a: 'Graduates are eligible for 2-4 year post-study work visas depending on the program and country. Many programs align with critical skill shortage lists, improving PR pathways.' },
    { q: 'Do you help with accommodation and pre-departure?', a: 'Yes. We provide comprehensive pre-departure orientation and assist with accommodation arrangements, visa guidance, and settling-in support abroad.' }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1B3A] mb-8 md:mb-12 text-center">
            Parent <span className="text-[#B99750]">FAQs</span>
          </h2>
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
      </div>
    </section>
  );
}
