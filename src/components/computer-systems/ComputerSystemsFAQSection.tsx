import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ComputerSystemsFAQSection() {
  const faqs = [
    { q: "Is this more hardware or software focused?", a: "It's balanced! You'll learn both hardware architecture and software development, making you versatile in the tech industry." },
    { q: "What programming languages will I learn?", a: "C/C++, Python, Java, and assembly language, plus scripting languages for system automation." },
    { q: "Are there internship opportunities?", a: "Yes, we have partnerships with tech companies offering paid internships and graduate schemes." },
    { q: "Can I specialize in a particular area?", a: "Yes, in your final year you can focus on areas like IoT, cloud computing, or cybersecurity." },
    { q: "What's the job market like?", a: "Excellent! Systems engineers are in high demand across all sectors, from finance to healthcare to tech." }
  ];

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
