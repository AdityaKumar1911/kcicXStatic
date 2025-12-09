import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'What makes this AI program unique?', a: 'Our 2+2 model with industry placement combines affordable Indian education with UK degree completion, offering hands-on AI experience with leading tech companies.' },
  { q: 'Do I need programming experience?', a: 'Basic programming knowledge is helpful but not required. We start with fundamentals and progressively build your skills in Python, machine learning, and AI frameworks.' },
  { q: 'What are the career prospects?', a: 'AI graduates are in high demand with starting salaries of £34,000-£37,000, working at companies like Google, IBM, Microsoft, and innovative startups.' },
  { q: 'What is the industry placement?', a: 'The placement year provides real-world experience at tech companies, allowing you to apply AI skills and build professional networks before graduation.' },
  { q: 'What is the total program cost?', a: 'Significantly lower than studying 4 years abroad. Contact us for detailed fee structure and scholarship opportunities.' },
  { q: 'Is the degree recognized globally?', a: 'Yes, you receive a full UK honours degree from our partner universities, recognized worldwide by employers and professional bodies.' },
];

export default function AIFAQSection() {
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
