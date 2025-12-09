import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap, Star, Building, Download } from 'lucide-react';

interface MobileAcademicsMegaMenuProps {
  onClose: () => void;
}

export default function MobileAcademicsMegaMenu({ onClose }: MobileAcademicsMegaMenuProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDownload = () => {
    window.open('/prospectus.pdf', '_blank');
    onClose();
  };

  const menuItems = [
    { to: '/programs', label: 'Programs', description: 'Browse all courses', icon: GraduationCap },
    { to: '/programs#featured', label: 'Featured Programs', description: 'Exclusive at KCIC', icon: Star },
    { to: '/universities', label: 'Partner Universities', description: 'Partner institutions', icon: Building },
  ];

  return (
    <div className="border-b border-[#B99750]/10 pb-2">
      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="w-full flex justify-between items-center py-4 px-4 text-[#FAF3E0] font-medium hover:bg-white/5 rounded-lg transition-colors" 
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[#B99750]" />
          <span>Academics</span>
        </div>
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      
      {isExpanded && (
        <div className="pb-3 px-2 space-y-1">
          {menuItems.map((item) => (
            <Link 
              key={item.to}
              to={item.to} 
              onClick={onClose} 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#B99750]/10 transition-colors"
            >
              <div className="w-8 h-8 bg-[#B99750]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-[#B99750]" />
              </div>
              <div>
                <div className="text-[#FAF3E0] font-medium text-sm">{item.label}</div>
                <div className="text-xs text-[#FAF3E0]/50">{item.description}</div>
              </div>
            </Link>
          ))}
          
          <button 
            onClick={handleDownload} 
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#B99750]/10 transition-colors text-left"
          >
            <div className="w-8 h-8 bg-[#B99750]/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Download className="w-4 h-4 text-[#B99750]" />
            </div>
            <div>
              <div className="text-[#FAF3E0] font-medium text-sm">Download Prospectus</div>
              <div className="text-xs text-[#FAF3E0]/50">Get our brochure</div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
