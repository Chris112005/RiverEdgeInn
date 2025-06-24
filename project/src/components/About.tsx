import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in hospitality and service"
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Perfect destination for families and couples alike"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock concierge and guest services"
    },
    {
      icon: Heart,
      title: "Memorable Experiences",
      description: "Creating lasting memories since 1985"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About River Edge Inn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nestled along the pristine shores of Colonial Beach, River Edge Inn offers an unparalleled 
              luxury experience where comfort meets natural beauty.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Your Gateway to Tranquility
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over three decades, River Edge Inn has been the premier destination for 
                discerning travelers seeking luxury, comfort, and natural beauty. Our historic 
                property combines classic elegance with modern amenities, creating an atmosphere 
                of refined sophistication.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every room offers stunning water views, while our world-class amenities ensure 
                your stay is nothing short of extraordinary. From our award-winning restaurant 
                to our full-service spa, every detail has been carefully crafted to exceed 
                your expectations.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">60</div>
                  <div className="text-gray-600">Luxury Rooms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">45+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/images/WhatsApp Image 2025-06-18 at 1.54.07 AM.jpeg"
                alt="River Edge Inn Double Room"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;