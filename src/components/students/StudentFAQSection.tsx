import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function StudentFAQSection() {
  const faqs = [
    {
      q: 'Can I really save money by starting at KCIC?',
      a: 'Yes! You save ₹15-17 lakhs in Years 1-2 while studying the same international curriculum. Then transfer abroad for specialization with the same degree outcome.'
    },
    {
      q: 'Will I be able to work part-time while studying abroad?',
      a: 'Absolutely. Most countries allow 20 hours/week during term and full-time during breaks. This helps cover living costs and builds work experience.'
    },
    {
      q: 'What is a post-study work visa?',
      a: 'After graduation, you get 2-4 years to work full-time in your host country. This leads to high-paying jobs and potential PR pathways.'
    },
    {
      q: 'How does the transfer process work?',
      a: 'We have guaranteed transfer agreements with 15+ partner universities. Our team handles applications, visas, and pre-departure support.'
    },
    {
      q: 'What if I struggle with the international curriculum?',
      a: 'Small batches mean 1:1 mentoring. Teachers track progress closely and intervene early if you need academic or emotional support.'
    },
    {
      q: 'Can I choose my destination country later?',
      a: 'Yes! Start at KCIC, then choose from UK, USA, Canada, Australia, Ireland, or other partner countries based on your goals.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1B3A]">
            Your Questions, <span className="text-[#B99750]">Answered</span>
          </h2>
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
      </div>
    </section>
  );
}
