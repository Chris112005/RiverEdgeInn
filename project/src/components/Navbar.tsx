import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Waves } from 'lucide-react';

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
      {/* Top contact bar - Absolutely fixed to top with no gaps */}
      <div className="bg-blue-900 text-white py-1.5 sm:py-2 text-xs sm:text-sm fixed top-0 left-0 right-0 w-full z-50 m-0">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-6">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">804-410-2024 / 804-410-2050</span>
                <span className="sm:hidden">804-410-2024</span>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Mail className="w-4 h-4" />
                <span>colonialhospitalityinc@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              
              <span className="hidden sm:inline"></span>
              <span className="sm:hidden">Colonial Beach</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - Positioned directly below contact bar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`} style={{ top: '32px' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo with River Edge Inn branding */}
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                  <Waves className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* Brand Text */}
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight">River Edge Inn</h1>
                <p className="text-xs lg:text-sm text-gray-600">Colonial Beach</p>
              </div>
              
              {/* Mobile Brand Text */}
              <div className="sm:hidden">
                <h1 className="text-lg font-bold text-gray-800">River Edge Inn</h1>
                <p className="text-xs text-gray-600">Colonial Beach</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
              className="lg:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4 max-h-96 overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 text-sm font-medium transition-colors duration-200 hover:text-blue-600 border-b border-gray-100 last:border-b-0 ${
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