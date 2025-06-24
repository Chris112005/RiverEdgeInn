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
    window.open(
      'https://booking.hotelkeyapp.com/v2/index.html#/booking/search?pc=1189&property_id=fe9bd381-de06-4c84-8321-fadbf1892d6c',
      '_blank'
    );
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-y-2 sm:gap-y-0">
          <div className="flex flex-col sm:flex-row items-center gap-y-1 sm:gap-y-0 sm:space-x-6 text-center sm:text-left">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>804-410-2024 / 804-410-2050</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>colonialhospitalityinc@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>Colonial Beach, VA</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">RE</span>
              </div>
              <div className="leading-tight">
                <h1 className="text-lg font-bold text-gray-800">
                  River Edge Inn
                </h1>
                <p className="text-xs text-gray-600">Colonial Beach</p>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition duration-200 hover:text-blue-600 ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleBookNow}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition shadow hover:shadow-lg"
              >
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-sm">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium w-full transition hover:text-blue-600 ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleBookNow}
                className="bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md text-sm font-semibold"
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
