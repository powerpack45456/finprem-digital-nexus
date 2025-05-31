
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import './LedgerBook.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-finprem-navy via-slate-800 to-finprem-navy flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-finprem-teal/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
            <span className="block">Precision.</span>
            <span className="block text-finprem-teal">Insight.</span>
            <span className="block">Integrity.</span>
          </h1>
          
          <p className={`font-lato text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Accounting solutions tailored to your business, driven by expertise and efficiency.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-finprem-teal to-blue-500 hover:from-finprem-teal hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book a Consultation
            </Button>
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline"
              className="border-2 border-finprem-teal text-finprem-teal hover:bg-finprem-teal hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Animated ledger book scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="mb-2 relative">
            {/* Ledger Book Animation */}
            <div className="ledger-book">
              {/* Book Base */}
              <div className="book-spine"></div>
              <div className="book-back"></div>
              
              {/* Book Cover */}
              <div className="book-cover">
                <div className="book-title">LEDGER</div>
              </div>
              
              {/* Pages */}
              <div className="page page-1"></div>
              <div className="page page-2"></div>
              <div className="page page-3"></div>
              <div className="page page-4"></div>
              <div className="page page-5"></div>
            </div>
          </div>
          <div className="text-finprem-teal text-xs font-medium">
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
