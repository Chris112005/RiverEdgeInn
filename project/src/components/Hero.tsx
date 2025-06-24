import React from 'react';
import { Star, MapPin, Wifi, Car, Coffee, Waves } from 'lucide-react';

const Hero: React.FC = () => {
  const handleBookNow = () => {
    window.open('https://booking.hotelkeyapp.com/v2/index.html#/booking/search?pc=1189&property_id=fe9bd381-de06-4c84-8321-fadbf1892d6c', '_blank');
  };

  const scrollToAmenities = () => {
    const element = document.getElementById('amenities');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/Nightfront.jpg.jpeg)'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex justify-center items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-lg font-medium">Luxury Hotel Stay</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          River Edge Inn
          <span className="block text-3xl md:text-4xl font-light text-amber-300 mt-2">
            Colonial Beach
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
          Experience the perfect blend of luxury and nature at Virginia's premier destination
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button
            onClick={handleBookNow}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Stay
          </button>
          <button 
            onClick={scrollToAmenities}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            Explore Amenities
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <Waves className="w-8 h-8 mb-2 text-blue-300" />
            <span className="text-sm font-medium">Waterfront</span>
          </div>
          <div className="flex flex-col items-center">
            <Wifi className="w-8 h-8 mb-2 text-blue-300" />
            <span className="text-sm font-medium">Free WiFi</span>
          </div>
          <div className="flex flex-col items-center">
            <Car className="w-8 h-8 mb-2 text-blue-300" />
            <span className="text-sm font-medium">Free Parking</span>
          </div>
          <div className="flex flex-col items-center">
            <Coffee className="w-8 h-8 mb-2 text-blue-300" />
            <span className="text-sm font-medium">Restaurant</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;