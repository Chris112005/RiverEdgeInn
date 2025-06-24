import React from 'react';
import { Wifi, Car, Coffee, Waves, Utensils, Dumbbell, Shield, Clock, Users, Sparkles, Wind, TreePine, Gamepad2, Baby, PawPrint, Briefcase } from 'lucide-react';

const Amenities: React.FC = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Beach View",
      description: "Direct access to Beach View"
    },
   
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Heated outdoor infinity pool with poolside bar and service"
    },
    {
      icon: Wifi,
      title: "Complimentary WiFi",
      description: "High-speed fiber internet throughout the property and rooms"
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Complimentary valet and self-parking with EV charging stations"
    },
    {
      icon: Clock,
      title: "24/7 Concierge",
      description: "Round-the-clock guest services, assistance, and local recommendations"
    },
  
    {
      icon: Users,
      title: "Event Facilities",
      description: "Elegant venues for weddings, conferences, and special occasions"
    },

    {
      icon: TreePine,
      title: "Nature Trails",
      description: "Scenic walking paths through waterfront gardens and wildlife areas"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Professional security staff and surveillance ensuring guest safety"
    },

    {
      icon: Baby,
      title: "Family Services",
      description: "Babysitting services, children's activities, and family-friendly amenities"
    },
    {
      icon: PawPrint,
      title: "Pet-Friendly",
      description: "Welcome pets with special amenities, walking areas.(Designated pet rooms at property)"
    },
    {
      icon: Coffee,
      title: "Free Break-fast",
      description: "Enjoy fresh Break-Fast."
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              World-Class Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the exceptional facilities and services that make River Edge Inn your perfect luxury retreat
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{amenity.title}</h4>
                  <p className="text-gray-600 text-sm">{amenity.description}</p>
                </div>
              );
            })}
          </div>

          {/* Featured Amenities Highlight */}
          <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Premium Experience Included</h3>
              <p className="text-xl text-blue-100">Every stay includes access to our exclusive amenities</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Waves className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h4 className="text-xl font-semibold mb-2">Waterfront Paradise</h4>
                <p className="text-blue-100"> Beach View, Pool,</p>
              </div>
              <div>
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h4 className="text-xl font-semibold mb-2">Luxury Services</h4>
                <p className="text-blue-100">break-fast</p>
              </div>
              <div>
                <Clock className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                <h4 className="text-xl font-semibold mb-2">24/7 Availability</h4>
                <p className="text-blue-100">Round-the-clock service and security</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button
              onClick={() => window.open('https://booking.hotelkeyapp.com/v2/index.html#/booking/search?pc=1189&property_id=fe9bd381-de06-4c84-8321-fadbf1892d6c', '_blank')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Experience Luxury - Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;