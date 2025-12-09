'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, GraduationCap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkClass = "text-[#FAF3E0] hover:text-[#B99750] transition-colors font-medium leading-none block";
  const headerClass = "font-semibold text-xs mb-1.5 text-[#B99750] leading-none";

  return (
    <footer className="bg-gradient-to-r from-[#0B1B3A] to-[#1a2f5a] text-[#FAF3E0] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-7 h-7 bg-gradient-to-r from-[#B99750] to-[#a88645] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold leading-none">KCIC Pathway</span>
            </div>
            <p className="text-[#FAF3E0]/80 text-xs leading-tight mb-3">Your gateway to affordable UK education.</p>
            <div className="flex space-x-1.5">
              {[{ href: "https://facebook.com", icon: Facebook, label: "Facebook" },
                { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
                { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" }
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-6 h-6 bg-[#FAF3E0]/10 hover:bg-[#B99750] rounded-full flex items-center justify-center transition-colors">
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className={headerClass}>Quick Links</h3>
            <ul className="text-xs space-y-0.5">
              <li><Link href="/programs" className={linkClass}>Programs</Link></li>
              <li><Link href="/pathways" className={linkClass}>Pathways</Link></li>
              <li><Link href="/universities" className={linkClass}>Partner Universities</Link></li>
              <li><Link href="/campuses" className={linkClass}>Life at KCIC</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={headerClass}>Featured Programs</h3>
            <ul className="text-xs grid grid-cols-2 gap-x-2 gap-y-0">
              <li><Link href="/programs/beng-hons-motorsport-engineering" className={linkClass}>Motorsport</Link></li>
              <li><Link href="/programs/beng-hons-artificial-intelligence-with-placement" className={linkClass}>AI</Link></li>
              <li><Link href="/programs/bsc-hons-psychology" className={linkClass}>Psychology</Link></li>
              <li><Link href="/programs/beng-hons-aerospace-engineering" className={linkClass}>Aerospace</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={headerClass}>Resources</h3>
            <ul className="text-xs space-y-0.5">
              <li><Link href="/parents" className={linkClass}>Parents</Link></li>
              <li><Link href="/students" className={linkClass}>Students</Link></li>
              <li><Link href="/tutors" className={linkClass}>Tutors</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact Us</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#FAF3E0]/10 pt-3">
          <p className="text-xs text-[#FAF3E0]/80 text-center">&copy; {currentYear} KCIC Pathway College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
