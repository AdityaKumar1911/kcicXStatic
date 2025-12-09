import { Link } from 'react-router-dom';
import { GraduationCap, Star, Building, Download } from 'lucide-react';

interface Props {
  onClose?: () => void;
}

export default function AcademicsMegaMenu({ onClose }: Props) {
  const handleClick = () => {
    if (onClose) onClose();
  };

  const handleDownload = () => {
    window.open('/prospectus.pdf', '_blank');
    if (onClose) onClose();
  };

  const menuItems = [
    { to: '/programs', label: 'Programs', description: 'Browse all courses', icon: GraduationCap },
    { to: '/programs#featured', label: 'Featured Programs', description: 'Exclusive at KCIC', icon: Star },
    { to: '/universities', label: 'Partner Universities', description: 'Partner institutions', icon: Building },
  ];

  return (
    <div className="absolute top-full left-0 mt-2 w-64 bg-[#0B1B3A] border border-[#B99750]/30 rounded-xl shadow-2xl overflow-hidden z-50" role="menu">
      <div className="py-2">
        {menuItems.map((item) => (
          <Link 
            key={item.to}
            to={item.to} 
            onClick={handleClick} 
            className="flex items-center gap-3 px-4 py-3 text-[#FAF3E0] hover:bg-[#B99750]/10 transition-colors group" 
            role="menuitem"
          >
            <div className="w-9 h-9 rounded-lg bg-[#B99750]/10 flex items-center justify-center group-hover:bg-[#B99750]/20 transition-colors flex-shrink-0">
              <item.icon className="w-5 h-5 text-[#B99750]" />
            </div>
            <div>
              <span className="font-medium block group-hover:text-[#B99750] transition-colors">{item.label}</span>
              <span className="text-xs text-[#FAF3E0]/60">{item.description}</span>
            </div>
          </Link>
        ))}

        <button 
          onClick={handleDownload} 
          className="w-full flex items-center gap-3 px-4 py-3 text-[#FAF3E0] hover:bg-[#B99750]/10 transition-colors group text-left" 
          role="menuitem"
        >
          <div className="w-9 h-9 rounded-lg bg-[#B99750]/10 flex items-center justify-center group-hover:bg-[#B99750]/20 transition-colors flex-shrink-0">
            <Download className="w-5 h-5 text-[#B99750]" />
          </div>
          <div>
            <span className="font-medium block group-hover:text-[#B99750] transition-colors">Download Prospectus</span>
            <span className="text-xs text-[#FAF3E0]/60">Get our brochure</span>
          </div>
        </button>
      </div>
    </div>
  );
}
