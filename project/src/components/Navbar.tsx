import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'places', label: 'Places' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleBookNow = () => {
    window.open('https://booking.hotelkeyapp.com/v2/index.html#/booking/search?pc=1189&property_id=fe9bd381-de06-4c84-8321-fadbf1892d6c', '_blank');
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>804-410-2024 / 804-410-2050</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>colonialhospitalityinc@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Colonial Beach, VA</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RE</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">River Edge Inn</h1>
                <p className="text-xs text-gray-600">Colonial Beach</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleBookNow}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleBookNow}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg text-sm font-semibold mt-4 transition-colors duration-200"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;