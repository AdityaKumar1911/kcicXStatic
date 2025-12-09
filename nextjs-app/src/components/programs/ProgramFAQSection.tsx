'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

interface ProgramFAQProps {
  faqs: FAQ[];
}

export default function ProgramFAQSection({ faqs }: ProgramFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1B3A] mb-8 md:mb-12 text-center">
          Frequently Asked <span className="text-[#B99750]">Questions</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-[#B99750]/20 rounded-xl overflow-hidden hover:border-[#B99750] transition-colors"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-[#B99750] flex-shrink-0" />
                  <span className="text-base md:text-lg font-semibold text-[#0B1B3A]">
                    {faq.q}
                  </span>
                </div>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#B99750] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 pt-0">
                  <div className="pl-9 text-sm md:text-base text-gray-600 leading-relaxed border-l-2 border-[#B99750] ml-3">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
