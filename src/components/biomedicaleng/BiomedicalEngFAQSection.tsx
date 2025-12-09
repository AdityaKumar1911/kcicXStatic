import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'What is biomedical engineering?', a: 'Biomedical engineering combines engineering principles with medical and biological sciences to design and create equipment, devices, and software used in healthcare.' },
  { q: 'What career opportunities are available?', a: 'Graduates work as medical device engineers, clinical engineers, regulatory specialists, or biomedical researchers in hospitals, medical device companies, and research institutions.' },
  { q: 'Do I need a background in biology?', a: 'While helpful, it\'s not required. Strong mathematics and physics skills are more important. You\'ll learn the necessary biological concepts during the program.' },
  { q: 'Is the degree recognized internationally?', a: 'Yes, the BSc (Hons) degree from our UK partner universities is recognized globally and accredited by professional engineering bodies.' },
  { q: 'What facilities are available at KCIC?', a: 'KCIC provides modern biomedical engineering labs with equipment for electronics, biomechanics, and medical device prototyping.' },
  { q: 'Can I pursue further studies after graduation?', a: 'Absolutely! Many graduates pursue master\'s degrees in specialized areas like medical robotics, tissue engineering, or healthcare technology management.' },
];

export default function BiomedicalEngFAQSection() {
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
