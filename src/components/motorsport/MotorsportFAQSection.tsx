import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'What makes this program unique?', a: 'Our 2+1 model combines affordable Indian education with UK degree completion, offering hands-on motorsport experience and industry connections.' },
  { q: 'Do I need prior motorsport experience?', a: 'No prior experience required. We start with fundamentals and build your expertise progressively through practical projects.' },
  { q: 'What are the career prospects?', a: 'Graduates work with F1 teams, automotive manufacturers, and motorsport engineering firms with starting salaries of £38,000-£80,000.' },
  { q: 'Can I get industry placements?', a: 'Yes, we facilitate internships with motorsport teams and engineering companies during your studies and final year abroad.' },
  { q: 'What is the total program cost?', a: 'Significantly lower than studying 3 years abroad. Contact us for detailed fee structure and scholarship opportunities.' },
  { q: 'Is the degree recognized globally?', a: 'Yes, you receive a full UK honours degree from our partner universities, recognized worldwide by employers and professional bodies.' },
];

export default function MotorsportFAQSection() {
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
