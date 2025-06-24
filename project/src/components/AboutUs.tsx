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
                The Days Inn in Colonial Beach, VA, now known as the River Edge Inn, was built on the former site of the grand Colonial Beach Hotel. 
                The original hotel was dismantled in 1984, and the current 2-story, 60-room brick building was erected in 1989.
                It's located on the Potomac River and the boardwalk, within walking distance of various amenities and attractions.

                The Colonial Beach Hotel:
                This historic hotel was a prominent landmark in Colonial Beach for many years before its demolition in 1984.
                Construction of the Days Inn:
                  The current Days Inn, now the River Edge Inn, was built on the site of the former hotel in 1989. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Modern Amenities:
                The 60-room motel offers features like a pool, wireless internet, ample parking, and is situated on the boardwalk, offering views of the Potomac River.
                Location and Accessibility:
                The hotel is conveniently located near restaurants, shops, and a trolley stop, making it an ideal base for exploring Colonial Beach
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