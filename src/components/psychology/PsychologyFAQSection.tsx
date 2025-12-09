import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'Is this degree BPS accredited?', a: 'Yes, our partner universities offer BPS-accredited programs that provide Graduate Basis for Chartered Membership (GBC), the first step toward becoming a chartered psychologist.' },
  { q: 'What career options are available after graduation?', a: 'Graduates can pursue careers in clinical psychology, counseling, organizational psychology, educational psychology, research, human resources, and many other fields.' },
  { q: 'Do I need prior psychology knowledge?', a: 'No prior psychology knowledge is required. We provide comprehensive foundation modules in Year 1 to prepare you for advanced studies.' },
  { q: 'What is included in the placement year?', a: 'The placement year offers hands-on experience in clinical settings, research labs, corporate HR departments, or educational institutions, helping you build practical skills and professional networks.' },
  { q: 'Can I pursue further studies after this degree?', a: 'Absolutely! Graduates can pursue postgraduate programs like MSc Clinical Psychology, Educational Psychology, or PhD research programs.' },
  { q: 'What support is available for international students?', a: 'We provide comprehensive support including visa guidance, accommodation assistance, cultural orientation, and ongoing academic and personal support throughout your studies.' },
];

export default function PsychologyFAQSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <Layout>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1B3A] mb-4">
            Frequently Asked <span className="text-[#B99750]">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our Psychology program
          </p>
        </div>

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
