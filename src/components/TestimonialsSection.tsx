
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "FinPrem Solutions transformed our financial processes completely. Prem's expertise in ERP implementation saved us months of work and significantly improved our reporting accuracy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Finance Director, GrowthCorp",
      content: "The internal audit services provided invaluable insights into our operations. The recommendations led to 30% improvement in our process efficiency.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      content: "Professional, reliable, and incredibly knowledgeable. Prem helped us set up our accounting system from scratch and provided excellent ongoing support.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-finprem-navy to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`font-montserrat font-bold text-4xl md:text-5xl text-white mb-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Client <span className="text-finprem-teal">Testimonials</span>
          </h2>
          <p className={`font-lato text-lg text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className={`bg-white/10 backdrop-blur-md border-finprem-teal/30 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <blockquote className="font-lato text-xl text-white mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="text-finprem-teal font-montserrat font-semibold text-lg">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-gray-300 font-lato">
                {testimonials[currentTestimonial].role}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-finprem-teal scale-125' : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
