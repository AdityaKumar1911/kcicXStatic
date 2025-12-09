import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'What makes civil engineering a good career choice?', a: 'Civil engineering offers excellent job security, competitive salaries, and the opportunity to work on projects that improve society and infrastructure.' },
  { q: 'Do I need work experience to apply?', a: 'Work experience is not required but is beneficial. We value enthusiasm and academic potential.' },
  { q: 'What software will I learn?', a: 'You\'ll gain proficiency in AutoCAD, Revit, Civil 3D, and structural analysis software used in the industry.' },
  { q: 'Are there placement opportunities?', a: 'Yes, we have strong industry connections and help students secure placements with leading construction and engineering firms.' },
  { q: 'Can I specialize in a particular area?', a: 'In Years 2-3 at partner universities, you can specialize in areas like structural, geotechnical, or environmental engineering.' },
  { q: 'What professional accreditation will I receive?', a: 'The degree is accredited by ICE (Institution of Civil Engineers), supporting your path to Chartered Engineer status.' },
];

export default function CivilFAQSection() {
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
