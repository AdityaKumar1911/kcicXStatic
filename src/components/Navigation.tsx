import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, GraduationCap, X, ChevronDown, ChevronUp, Users, BookOpen, FileText, MapPin, Building, Video } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import AcademicsMegaMenu from './AcademicsMegaMenu';
import MobileAcademicsMegaMenu from './MobileAcademicsMegaMenu';


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    if (!isOpen) setExpandedMenu(null);
  }, [isOpen]);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
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

  const resourcesItems = [
    { to: '/parents-student-hub', label: 'Parents', icon: Users, description: 'Information for parents' },
    { to: '/students', label: 'Students', icon: BookOpen, description: 'Student resources & life' },
    { to: '/pathways', label: 'Transfer Options', icon: MapPin, description: 'University transfer pathways' },
  ];



  return (
<nav className="fixed top-0 w-full z-50 bg-[#0B1B3A]/95 border-b border-[#B99750]/20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 z-50 flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#B99750] to-[#8B7340] rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold text-[#FAF3E0]">KCIC</span>
          </Link>

          <div className="hidden lg:flex items-center gap-4 xl:gap-6" ref={dropdownRef}>
            {/* Academics Dropdown - Click to toggle */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('academics')}
                className={`text-[#FAF3E0] hover:text-[#B99750] font-medium transition-colors flex items-center gap-1 py-2 px-3 rounded-lg text-sm xl:text-base ${activeDropdown === 'academics' ? 'bg-[#B99750]/10 text-[#B99750]' : ''}`}
                aria-expanded={activeDropdown === 'academics'}
                aria-haspopup="true"
              >
                Academics 
                <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ${activeDropdown === 'academics' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'academics' && <AcademicsMegaMenu onClose={() => setActiveDropdown(null)} />}
            </div>

            {/* Resources Dropdown - Click to toggle */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('resources')}
                className={`text-[#FAF3E0] hover:text-[#B99750] font-medium transition-colors flex items-center gap-1 py-2 px-3 rounded-lg text-sm xl:text-base ${activeDropdown === 'resources' ? 'bg-[#B99750]/10 text-[#B99750]' : ''}`}
                aria-expanded={activeDropdown === 'resources'}
                aria-haspopup="true"
              >
                Resources 
                <ChevronDown className={`w-4 h-4 transition-transform flex-shrink-0 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#0B1B3A] border border-[#B99750]/20 rounded-xl shadow-2xl py-3" role="menu">
                  <div className="px-4 pb-2 mb-2 border-b border-[#B99750]/10">
                    <span className="text-[#B99750] text-xs font-semibold uppercase tracking-wider">Resources</span>
                  </div>
                  {resourcesItems.map((item) => (
                    <Link 
                      key={item.to}
                      to={item.to}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 px-4 py-3 text-[#FAF3E0] hover:bg-[#B99750]/10 transition-colors group focus:outline-none focus:bg-[#B99750]/10"
                      role="menuitem"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#B99750]/10 flex items-center justify-center group-hover:bg-[#B99750]/20 transition-colors flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#B99750]" />
                      </div>
                      <div className="min-w-0">
                        <span className="font-medium block group-hover:text-[#B99750] transition-colors">{item.label}</span>
                        <span className="text-xs text-[#FAF3E0]/60">{item.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/campuses" className="text-[#FAF3E0] hover:text-[#B99750] font-medium transition-colors py-2 px-3 rounded-lg hover:bg-[#B99750]/10 text-sm xl:text-base whitespace-nowrap">Life at KCIC</Link>
            <Link to="/virtual-tour" className="text-[#FAF3E0] hover:text-[#B99750] font-medium transition-colors py-2 px-3 rounded-lg hover:bg-[#B99750]/10 text-sm xl:text-base whitespace-nowrap flex items-center gap-1">
              <Video className="w-4 h-4" /> Virtual Tour
            </Link>
            <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
              <Button className="bg-[#B99750] hover:bg-[#a88645] text-white text-sm xl:text-base px-4 xl:px-6">Apply Now</Button>
            </a>
          </div>



          <button onClick={toggleMenu} className="lg:hidden p-2 z-50 flex-shrink-0" aria-label="Menu">
            {isOpen ? <X className="w-6 h-6 text-[#FAF3E0]" /> : <Menu className="w-6 h-6 text-[#FAF3E0]" />}
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 md:top-20 z-40 bg-[#0B1B3A] overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            <MobileAcademicsMegaMenu onClose={closeMenu} />
            
            {/* Mobile Resources */}
            <div>
              <button onClick={() => toggleSubmenu('resources')} className="w-full flex justify-between items-center text-[#FAF3E0] font-medium py-3 px-4 hover:bg-white/5 rounded-lg">
                <span className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#B99750]" />
                  Resources
                </span>
                {expandedMenu === 'resources' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedMenu === 'resources' && (
                <div className="pl-4 pt-2 space-y-1 bg-white/5 rounded-lg mx-2 py-3">
                  {resourcesItems.map((item) => (
                    <Link key={item.to} to={item.to} onClick={closeMenu} className="flex items-center gap-3 py-2.5 px-4 text-[#FAF3E0]/80 hover:text-[#B99750] transition-colors">
                      <item.icon className="w-4 h-4 text-[#B99750]" />
                      <div>
                        <span className="block font-medium">{item.label}</span>
                        <span className="text-xs text-[#FAF3E0]/50">{item.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/campuses" onClick={closeMenu} className="block text-[#FAF3E0] font-medium py-3 px-4 hover:bg-white/5 rounded-lg">Life at KCIC</Link>
            
            <Link to="/virtual-tour" onClick={closeMenu} className="flex items-center gap-2 text-[#FAF3E0] font-medium py-3 px-4 hover:bg-white/5 rounded-lg">
              <Video className="w-5 h-5 text-[#B99750]" /> Virtual Tour
            </Link>

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
