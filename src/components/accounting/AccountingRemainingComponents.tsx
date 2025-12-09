import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Layout from '@/components/Layout';

export function AccountingRequirementsSection() {
  return (
    <section className="py-16 bg-white">
      <Layout>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1B3A] mb-8 md:mb-12 text-center">
          Entry <span className="text-[#B99750]">Requirements</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-[#0B1B3A] mb-4">Academic Requirements</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 12th Standard (10+2) with Commerce/Science</li>
              <li>• Minimum 60% aggregate or equivalent</li>
              <li>• Mathematics at 10+2 level preferred</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-[#0B1B3A] mb-4">English Requirements</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• IELTS: 6.0 overall (no band below 5.5)</li>
              <li>• TOEFL: 80+ (internet-based)</li>
              <li>• PTE Academic: 50+</li>
            </ul>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export function AccountingWhyKCICSection() {
  const reasons = [
    { title: 'ACCA Exemptions', desc: 'Up to 9 ACCA paper exemptions' },
    { title: 'Industry Links', desc: 'Connections with Big 4 firms' },
    { title: 'Practical Training', desc: 'Real-world accounting projects' },
    { title: 'Career Support', desc: 'Dedicated placement assistance' },
  ];
  return (
    <section className="py-16 bg-[#0B1B3A]">
      <Layout>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 text-center">
          Why Choose <span className="text-[#B99750]">KCIC</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold text-[#B99750] mb-2">{r.title}</h3>
              <p className="text-white/80">{r.desc}</p>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
}

export function AccountingFAQSection() {
  const faqs = [
    { q: 'What ACCA exemptions will I receive?', a: 'You can receive up to 9 exemptions from ACCA papers.' },
    { q: 'Can I work while studying?', a: 'Yes, many students work part-time.' },
    { q: 'What are the career prospects?', a: 'Graduates work in Big 4 firms, investment banks, and consulting.' },
    { q: 'Is the degree recognized internationally?', a: 'Yes, the UK degree is recognized globally.' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <Layout>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1B3A] mb-8 md:mb-12 text-center">
          Frequently Asked <span className="text-[#B99750]">Questions</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border-2 border-[#B99750]/20 rounded-xl px-6 hover:border-[#B99750] transition-colors">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-[#0B1B3A] hover:text-[#B99750]">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Layout>
    </section>
  );
}
