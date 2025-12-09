import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function RailwayFAQSection() {
  const faqs = [
    { q: 'What makes railway engineering unique?', a: 'Railway engineering combines electrical engineering with specialized knowledge of rail systems, signaling, and transport infrastructure.' },
    { q: 'Are there site visits to railway facilities?', a: 'Yes, we organize regular visits to railway depots, control centers, and major infrastructure projects.' },
    { q: 'What certifications can I gain?', a: 'You can gain industry-recognized certifications in railway signaling, safety, and engineering standards.' },
    { q: 'What are the career prospects?', a: 'The UK rail industry is growing rapidly with HS2 and electrification projects creating thousands of new jobs.' }
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
