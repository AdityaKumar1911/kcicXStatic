import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, GraduationCap } from 'lucide-react';
import Layout from './Layout';
import { SupabaseStatus } from './SupabaseStatus';
import { NewsletterForm } from './NewsletterForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkClass = "text-[#FAF3E0] hover:text-[#B99750] transition-colors font-medium leading-none block";
  const headerClass = "font-semibold text-xs mb-1.5 text-[#B99750] leading-none";

  return (
    <footer className="bg-gradient-primary text-[#FAF3E0] py-6" role="contentinfo">
      <Layout>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-7 h-7 bg-gradient-accent rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="text-sm font-bold leading-none">KCIC Pathway</span>
            </div>
            <p className="text-[#FAF3E0]/80 text-xs leading-tight mb-3">Your gateway to affordable UK education.</p>
            <div className="flex space-x-1.5" role="list" aria-label="Social media links">
              {[
                { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
                { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
                { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" }
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-6 h-6 bg-[#FAF3E0]/10 hover:bg-[#B99750] rounded-full flex items-center justify-center transition-colors"
                  aria-label={`Visit our ${label} page`}>
                  <Icon className="w-3 h-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={headerClass}>Quick Links</h3>
            <nav aria-label="Footer navigation - Quick links">
              <ul className="text-xs space-y-0.5">
                <li><Link to="/programs" className={linkClass}>Programs</Link></li>
                <li><Link to="/pathways" className={linkClass}>Pathways</Link></li>
                <li><Link to="/universities" className={linkClass}>Partner Universities</Link></li>
                <li><Link to="/campuses" className={linkClass}>Life at KCIC</Link></li>
              </ul>
            </nav>
          </div>

          {/* Featured Programs */}
          <div>
            <h3 className={headerClass}>Featured Programs</h3>
            <nav aria-label="Footer navigation - Featured Programs">
              <ul className="text-xs grid grid-cols-2 gap-x-2 gap-y-0">
                <li><Link to="/programs/beng-hons-motorsport-engineering" className={linkClass}>Motorsport</Link></li>
                <li><Link to="/programs/beng-hons-artificial-intelligence-with-placement" className={linkClass}>AI</Link></li>
                <li><Link to="/programs/bsc-hons-psychology" className={linkClass}>Psychology</Link></li>
                <li><Link to="/programs/beng-hons-aerospace-engineering" className={linkClass}>Aerospace</Link></li>
                <li><Link to="/programs/bsc-hons-biomedical-science" className={linkClass}>Biomedical Sci</Link></li>
                <li><Link to="/programs/beng-hons-biomedical-engineering" className={linkClass}>Biomedical Eng</Link></li>
                <li><Link to="/programs/beng-hons-civil-engineering" className={linkClass}>Civil Eng</Link></li>
                <li><Link to="/programs/bsc-hons-accounting-finance-acca" className={linkClass}>Accounting</Link></li>
              </ul>
            </nav>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className={headerClass}>Resources</h3>
            <nav aria-label="Footer navigation - Resources" className="mb-3">
              <ul className="text-xs space-y-0.5">
                <li><Link to="/parents-student-hub" className={linkClass}>Parents</Link></li>
                <li><Link to="/students" className={linkClass}>Students</Link></li>
                <li><Link to="/tutors" className={linkClass}>Tutors</Link></li>
                <li><Link to="/contact" className={linkClass}>Contact Us</Link></li>
              </ul>
            </nav>

            <div className="pt-2 border-t border-[#FAF3E0]/10">
              <p className="text-[10px] text-[#FAF3E0]/60 mb-1">Stay updated with latest news</p>
              <NewsletterForm source="footer" variant="compact" />
            </div>
          </div>
        </div>

        <div className="border-t border-[#FAF3E0]/10 pt-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-[#FAF3E0]/80 leading-none">&copy; {currentYear} KCIC Pathway College. All rights reserved.</p>
            <SupabaseStatus />
          </div>
        </div>
      </Layout>
    </footer>
  );
}
