
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="font-montserrat font-bold text-2xl text-finprem-navy">
          FinPrem<span className="text-finprem-teal">.</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-finprem-navy hover:text-finprem-teal transition-colors font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-finprem-navy hover:text-finprem-teal transition-colors font-medium"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-finprem-navy hover:text-finprem-teal transition-colors font-medium"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-finprem-navy hover:text-finprem-teal transition-colors font-medium"
          >
            Contact
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-finprem-teal to-blue-500 hover:from-finprem-teal hover:to-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
