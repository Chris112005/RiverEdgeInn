import React from 'react';
import { Users, Heart, Calendar } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the story behind River Edge Inn and what makes us Colonial Beach's premier luxury destination
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">Our Story</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded  by the Thompson family, Colonial Beach Inn began as a dream to create
                a peaceful retreat where guests could unwind and soak in the charm of coastal living.
                What started as a quaint seaside getaway has grown into Colonial Beach’s most beloved luxury escape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, personalized service, and environmental stewardship 
                has earned us numerous accolades and, more importantly, the loyalty of guests who 
                return year after year to experience our unique blend of luxury and tranquility.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At River Edge Inn, we believe that true hospitality comes from the heart. Every 
                member of our dedicated team is passionate about creating memorable experiences 
                that exceed expectations. From the moment you arrive until your departure, we're 
                committed to making your stay extraordinary.
              </p>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">20+</div>
                  <div className="text-gray-600">Staff Members</div>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">10K+</div>
                  <div className="text-gray-600">Happy Guests</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="\images\morfront.jpeg"
                alt="River Edge Inn History"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To provide an unparalleled luxury experience that celebrates the natural beauty of 
              Colonial Beach while delivering exceptional service that creates lasting memories. 
              We are dedicated to preserving the charm and elegance that has made River Edge Inn 
              a beloved destination for nearly four decades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;