import React from 'react';
import { MapPin, Phone, Mail, Instagram, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Swimming Pool', href: '#pool' },
    { label: '24/7 Services', href: '#services' },
    { label: 'Wedding Events', href: '#weddings' },
    { label: 'Free Break-fast', href: '#Break-fast' }
  ];

  const handleBookNow = () => {
    window.open('https://booking.hotelkeyapp.com/v2/index.html#/booking/search?pc=1189&property_id=fe9bd381-de06-4c84-8321-fadbf1892d6c', '_blank');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">River Edge Inn</h3>
                <p className="text-sm text-gray-300">Colonial Beach</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Experience luxury and tranquility at Virginia's premier waterfront destination. 
              Where comfort meets natural beauty along the Potomac River.
            </p>
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-gray-300">4.9/5 Guest Rating</span>
            </div>
            <button
              onClick={handleBookNow}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
            >
              Book Now
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Potomac Street</p>
                  <p className="text-gray-300">Colonial Beach, VA 22443</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>804-410-2024</p>
                  <p>804-410-2050</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:colonialhospitalityinc@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                  colonialhospitalityinc@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} River Edge Inn. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;