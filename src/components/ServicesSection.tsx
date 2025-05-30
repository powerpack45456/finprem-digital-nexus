
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "⚙️",
      title: "Accounting System Setup",
      description: "Complete implementation and configuration of accounting systems tailored to your business needs.",
      features: ["Software selection", "Data migration", "Training & support"]
    },
    {
      icon: "📊",
      title: "Financial Reporting",
      description: "Comprehensive financial reports that provide clear insights into your business performance.",
      features: ["Monthly reports", "Annual statements", "Custom dashboards"]
    },
    {
      icon: "🔍",
      title: "Internal Audits",
      description: "Thorough internal audit processes to ensure compliance and identify areas for improvement.",
      features: ["Risk assessment", "Process review", "Compliance audit"]
    },
    {
      icon: "💼",
      title: "ERP Consulting",
      description: "Expert guidance on ERP selection, implementation, and optimization for business efficiency.",
      features: ["System evaluation", "Implementation", "Process optimization"]
    },
    {
      icon: "📋",
      title: "Tax Advisory",
      description: "Strategic tax planning and advisory services to minimize tax burden while ensuring compliance.",
      features: ["Tax planning", "Compliance", "Advisory services"]
    },
    {
      icon: "🚀",
      title: "Process Optimization",
      description: "Streamline your business processes for improved efficiency and reduced operational costs.",
      features: ["Workflow analysis", "Automation", "Performance metrics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`font-montserrat font-bold text-4xl md:text-5xl text-finprem-navy mb-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Our <span className="text-finprem-teal">Services</span>
          </h2>
          <p className={`font-lato text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Comprehensive financial solutions designed to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${hoveredCard === index ? 'shadow-2xl border-finprem-teal' : 'shadow-lg hover:shadow-xl'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`text-4xl mb-4 transition-transform duration-300 ${
                  hoveredCard === index ? 'scale-110 animate-float' : ''
                }`}>
                  {service.icon}
                </div>
                <CardTitle className="font-montserrat font-semibold text-xl text-finprem-navy group-hover:text-finprem-teal transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-lato text-gray-600 mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="font-lato text-sm text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-finprem-teal rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
