'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, GraduationCap, X, ChevronDown, ChevronUp, Users, BookOpen, FileText, MapPin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    if (!isOpen) setExpandedMenu(null);
  }, [isOpen]);

  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleSubmenu = (menu: string) => setExpandedMenu(expandedMenu === menu ? null : menu);
  const toggleDropdown = (menu: string) => setActiveDropdown(activeDropdown === menu ? null : menu);

  const academicsItems = [
    { to: '/programs', label: 'All Programs', description: 'Browse all programs' },
    { to: '/universities', label: 'Partner Universities', description: 'Our global partners' },
    { to: '/pathways', label: 'Transfer Pathways', description: 'How it works' },
  ];

  const resourcesItems = [
    { to: '/parents', label: 'Parents', icon: Users, description: 'Information for parents' },
    { to: '/students', label: 'Students', icon: BookOpen, description: 'Student resources' },
  ];


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-[#0B1B3A]/98 backdrop-blur-lg shadow-xl' : 'bg-[#0B1B3A]/95'} border-b border-[#B99750]/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#B99750] to-[#8B7340] rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold text-[#FAF3E0]">KCIC</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
            <div className="relative">
              <button onClick={() => toggleDropdown('academics')} className={`text-[#FAF3E0] hover:text-[#B99750] font-medium transition-colors flex items-center gap-1 py-2 px-3 rounded-lg ${activeDropdown === 'academics' ? 'bg-[#B99750]/10 text-[#B99750]' : ''}`}>
                Academics <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'academics' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'academics' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#0B1B3A] border border-[#B99750]/20 rounded-xl shadow-2xl py-3">
                  {academicsItems.map((item) => (
                    <Link key={item.to} href={item.to} onClick={() => setActiveDropdown(null)} className="block px-4 py-3 text-[#FAF3E0] hover:bg-[#B99750]/10 transition-colors">
                      <span className="font-medium block">{item.label}</span>
                      <span className="text-xs text-[#FAF3E0]/60">{item.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => toggleDropdown('resources')} className={`text-[#FAF3E0] hover:text-[#B99750] font-medium transition-colors flex items-center gap-1 py-2 px-3 rounded-lg ${activeDropdown === 'resources' ? 'bg-[#B99750]/10 text-[#B99750]' : ''}`}>
                Resources <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#0B1B3A] border border-[#B99750]/20 rounded-xl shadow-2xl py-3">
                  {resourcesItems.map((item) => (
                    <Link key={item.to} href={item.to} onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 px-4 py-3 text-[#FAF3E0] hover:bg-[#B99750]/10 transition-colors">
                      <item.icon className="w-5 h-5 text-[#B99750] mt-0.5" />
                      <div>
                        <span className="font-medium block">{item.label}</span>
                        <span className="text-xs text-[#FAF3E0]/60">{item.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/campuses" className="text-[#FAF3E0] hover:text-[#B99750] font-medium transition-colors py-2 px-3 rounded-lg hover:bg-[#B99750]/10">Life at KCIC</Link>
            <Link href="/contact" className="text-[#FAF3E0] hover:text-[#B99750] font-medium transition-colors py-2 px-3 rounded-lg hover:bg-[#B99750]/10">Contact</Link>
            <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#B99750] hover:bg-[#a88645] text-white">Apply Now</Button>
            </a>
          </div>

          <button onClick={toggleMenu} className="lg:hidden p-2 z-50">
            {isOpen ? <X className="w-6 h-6 text-[#FAF3E0]" /> : <Menu className="w-6 h-6 text-[#FAF3E0]" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 md:top-20 z-40 bg-[#0B1B3A] overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            <Link href="/programs" onClick={closeMenu} className="block text-[#FAF3E0] font-medium py-3 px-4 hover:bg-white/5 rounded-lg">Programs</Link>
            <Link href="/universities" onClick={closeMenu} className="block text-[#FAF3E0] font-medium py-3 px-4 hover:bg-white/5 rounded-lg">Universities</Link>
            <Link href="/pathways" onClick={closeMenu} className="block text-[#FAF3E0] font-medium py-3 px-4 hover:bg-white/5 rounded-lg">Pathways</Link>
            <Link href="/parents" onClick={closeMenu} className="block text-[#FAF3E0] font-medium py-3 px-4 hover:bg-white/5 rounded-lg">Parents</Link>
            <Link href="/students" onClick={closeMenu} className="block text-[#FAF3E0] font-medium py-3 px-4 hover:bg-white/5 rounded-lg">Students</Link>
            <Link href="/campuses" onClick={closeMenu} className="block text-[#FAF3E0] font-medium py-3 px-4 hover:bg-white/5 rounded-lg">Life at KCIC</Link>
            <Link href="/contact" onClick={closeMenu} className="block text-[#FAF3E0] font-medium py-3 px-4 hover:bg-white/5 rounded-lg">Contact</Link>
            <div className="pt-4">
              <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                <Button className="w-full bg-[#B99750] hover:bg-[#a88645] text-white h-12">Apply Now</Button>
              </a>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
}
