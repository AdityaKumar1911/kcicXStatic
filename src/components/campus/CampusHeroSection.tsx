import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CampusHeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1764504814360_f3135a77.webp)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3A]/70 via-[#0B1B3A]/50 to-[#0B1B3A]/80" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <span className="inline-block px-4 py-2 bg-[#B99750]/20 border border-[#B99750]/40 rounded-full text-[#B99750] text-sm font-medium mb-4 backdrop-blur-sm">
          Experience Life at KCIC
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 max-w-4xl">
          Campus Life at <span className="text-[#B99750]">KCIC</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
          Where Learning Feels Like Living. Experience a vibrant community surrounded by the beach, open skies, and endless opportunities.
        </p>
        <Button 
          onClick={() => navigate('/contact')}
          className="bg-[#B99750] hover:bg-[#a88645] text-white px-8 py-6 text-lg rounded-full group"
        >
          <FileText className="mr-2 h-5 w-5" />
          Request Details
        </Button>
      </div>
    </div>
  );
}
