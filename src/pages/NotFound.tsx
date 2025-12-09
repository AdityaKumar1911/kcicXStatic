import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-white">
      <Navigation />
      
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center p-8 rounded-lg border-2 border-[#B99750]/20 bg-white shadow-xl animate-slide-in max-w-md mx-4">
          <h1 className="text-6xl font-bold mb-6 text-[#0B1B3A]">404</h1>
          <p className="text-2xl text-[#0B1B3A] mb-4 font-semibold">Page Not Found</p>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <a 
            href="/" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#B99750] to-[#a88645] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Return to Home
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
