
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "prem@finpremsolutions.com",
      link: "mailto:prem@finpremsolutions.com"
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Location",
      value: "New York, NY",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-finprem-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`font-montserrat font-bold text-4xl md:text-5xl text-finprem-navy mb-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Get In <span className="text-finprem-teal">Touch</span>
          </h2>
          <p className={`font-lato text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Ready to transform your financial processes? Let's discuss how we can help your business succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className={`shadow-xl transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <CardHeader>
              <CardTitle className="font-montserrat font-semibold text-2xl text-finprem-navy text-center">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4 animate-bounce">✅</div>
                  <h3 className="font-montserrat font-semibold text-xl text-finprem-navy mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-lato text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="peer pt-6 pb-2 font-lato"
                        placeholder=" "
                      />
                      <label className="absolute left-3 top-2 text-sm font-lato text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-finprem-teal">
                        Full Name *
                      </label>
                    </div>
                    <div className="relative">
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="peer pt-6 pb-2 font-lato"
                        placeholder=" "
                      />
                      <label className="absolute left-3 top-2 text-sm font-lato text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-finprem-teal">
                        Email Address *
                      </label>
                    </div>
                  </div>
                  <div className="relative">
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="peer pt-6 pb-2 font-lato"
                      placeholder=" "
                    />
                    <label className="absolute left-3 top-2 text-sm font-lato text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-finprem-teal">
                      Company Name
                    </label>
                  </div>
                  <div className="relative">
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="peer pt-6 pb-2 font-lato resize-none"
                      placeholder=" "
                    />
                    <label className="absolute left-3 top-2 text-sm font-lato text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-finprem-teal">
                      Message *
                    </label>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-finprem-teal to-blue-500 hover:from-finprem-teal hover:to-blue-600 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div>
              <h3 className="font-montserrat font-semibold text-2xl text-finprem-navy mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title}
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h4 className="font-montserrat font-medium text-finprem-navy">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="font-lato text-finprem-teal hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-lato text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-finprem-navy to-slate-800 text-white">
              <CardContent className="p-8">
                <h3 className="font-montserrat font-semibold text-xl mb-4">
                  Schedule a Free Consultation
                </h3>
                <p className="font-lato text-gray-300 mb-6">
                  Ready to discuss your financial needs? Book a complimentary 30-minute consultation to explore how we can help your business grow.
                </p>
                <Button 
                  className="bg-finprem-teal hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
