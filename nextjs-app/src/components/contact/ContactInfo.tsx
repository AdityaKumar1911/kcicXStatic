'use client';

import { ReactNode } from 'react';

interface ContactInfoProps {
  icon: ReactNode;
  title: string;
  content: string;
}

export function ContactInfo({ icon, title, content }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0B1B3A] to-[#1a2d5a] rounded-lg flex items-center justify-center text-[#B99750]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-[#0B1B3A] mb-1">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}
