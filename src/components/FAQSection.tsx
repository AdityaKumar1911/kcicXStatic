import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Layout from './Layout';

export default function FAQSection() {
  const faqs = [
    {
      question: "What is the KCIC Study Abroad Program?",
      answer: "The KCIC Study Abroad Program (SAP) allows you to complete your first 1-2 years at KCIC campuses in India, then transfer to our partner universities in the UK to complete your degree. You'll save up to 80% on tuition costs while earning the same UK degree."
    },
    {
      question: "How much money can I save with KCIC SAP?",
      answer: "Students typically save 80% on international tuition fees during their time at KCIC. Additionally, you'll save on living costs by staying in India for 1-2 years instead of paying UK living expenses. Total savings can exceed ₹30-40 lakhs over the course of your degree."
    },
    {
      question: "Will my degree be from a UK university?",
      answer: "Yes! You will receive the exact same degree certificate as students who study all years directly at the UK partner university. Your degree will be awarded by the UK university with no mention of KCIC on the certificate."
    },
    {
      question: "Which universities can I transfer to?",
      answer: "We partner with prestigious UK universities including Anglia Ruskin University, University of Hertfordshire, Birmingham City University, and others. Each program has specific partner universities - check our Programs page for details."
    },
    {
      question: "What are the entry requirements?",
      answer: "Requirements vary by program but typically include: completion of 12th standard (10+2), minimum academic scores, and English language proficiency (IELTS/TOEFL). Some programs may have specific subject requirements."
    },
    {
      question: "Is the transfer to UK guaranteed?",
      answer: "Transfer is guaranteed for students who maintain the required academic standards and meet visa requirements. Our dedicated team supports you throughout the transfer process to ensure a smooth transition."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <Layout>
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-[#0B1B3A]">
            Frequently Asked <span className="text-[#B99750]">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the KCIC Study Abroad Program
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border-2 border-[#B99750]/20 rounded-xl px-6 hover:border-[#B99750] transition-colors">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-[#0B1B3A] hover:text-[#B99750]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Layout>
    </section>
  );
}
