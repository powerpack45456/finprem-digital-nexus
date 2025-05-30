
import { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: "🎯",
      title: "Precision",
      description: "Meticulous attention to detail in every financial process"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Cutting-edge solutions for modern business challenges"
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building lasting relationships through reliable service"
    }
  ];

  return (
    <section id="about" className="py-20 bg-finprem-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-montserrat font-bold text-4xl md:text-5xl text-finprem-navy mb-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            About <span className="text-finprem-teal">FinPrem Solutions</span>
          </h2>
          
          <p className={`font-lato text-lg text-gray-700 mb-12 leading-relaxed transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Led by <strong>Prem Upreti</strong>, FinPrem Solutions specializes in comprehensive financial and accounting services. 
            With years of expertise in accounting system setup, internal audits, ERP consulting, financial reporting, 
            tax advisory, and business process optimization, we help businesses achieve financial clarity and operational excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {value.icon}
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-finprem-navy mb-3">
                  {value.title}
                </h3>
                <p className="font-lato text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
