
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('footer');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Email', icon: '📧', url: 'mailto:prem@finpremsolutions.com' }
  ];

  const quickLinks = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Services', section: 'services' },
    { name: 'Contact', section: 'contact' }
  ];

  return (
    <footer id="footer" className="bg-finprem-navy text-white py-16">
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-4 gap-8 mb-12 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-montserrat font-bold text-3xl mb-4">
              FinPrem<span className="text-finprem-teal">.</span>
            </div>
            <p className="font-lato text-gray-300 mb-6 max-w-md">
              Professional accounting solutions that drive business success. 
              Precision, insight, and integrity in every service we provide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-finprem-teal/20 rounded-full flex items-center justify-center hover:bg-finprem-teal hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="font-lato text-gray-300 hover:text-finprem-teal transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 font-lato text-gray-300">
              <p>📧 prem@finpremsolutions.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 New York, NY</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="font-lato text-gray-400 text-sm">
            © 2024 FinPrem Solutions. All rights reserved.
          </p>
          <p className="font-lato text-gray-400 text-sm mt-2 md:mt-0">
            Designed with precision and care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
