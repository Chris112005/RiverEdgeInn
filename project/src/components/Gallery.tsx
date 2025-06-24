import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Video } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/images/Nightfront.jpg.jpeg",
      alt: "River Edge Inn - Night View",
      category: "Exterior"
    },
    {
      src: "/images/WhatsApp Image 2025-06-08 at 11.59.57 PM (1).jpeg",
      alt: "Luxury Room Interior",
      category: "Rooms"
    },
    {
      src: "/images/WhatsApp Image 2025-06-14 at 12.42.55 AM (1).jpeg",
      alt: "Modern Bathroom",
      category: "Amenities"
    },
    {
      src: "/images/WhatsApp Image 2025-06-14 at 12.42.55 AM (4).jpeg",
      alt: "Swimming Pool Area",
      category: "Pool"
    },
    {
      src: "/images/WhatsApp Image 2025-06-18 at 1.54.07 AM.jpeg",
      alt: "Double Room Interior",
      category: "Rooms"
    },
    {
      src: "/images/BEACHVIEW'.jpeg",
      alt: "Historic Colonial Beach Statue",
      category: "Local Attractions"
    },
    {
      src:  "/images/VIEW.jpeg",
      alt: "Side Street-View",
      category: "Local Attractions"
    },
    {
      src: "/images/WhatsApp Image 2025-06-18 at 2.04.35 AM.jpeg",
      alt: "Beautiful Beach Sunrise View",
      category: "Views"
    },
    {
      src: "/images/breakfastarea.jpeg",
      alt: "Break-fast Area",
      category: "Break-fast Area"
    },
    {
      src: "/images/Beach view.jpeg",
      alt: "Beach Area",
      category: "Beach"
    }
  ];

  const categories = ['All', 'Exterior', 'Rooms', 'Amenities', 'Pool', 'Views', 'Local Attractions', 'Break-Fast Area', 'Beach'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Photo Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the beauty and luxury of River Edge Inn through our stunning photo collection
            </p>
          </div>

          {/* Featured Video Section */}
<div className="mb-12">
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
    <div className="aspect-video">
      <video
        controls
        className="w-full h-full object-cover"
        poster="/images/Nightfront.jpg.jpeg"
      >
        <source src="/images/TOUR.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">River Edge Inn - Welcome Tour</h3>
      <p className="text-gray-600">
        Take a virtual tour of our beautiful waterfront property and luxury accommodations.
      </p>
    </div>
  </div>
</div>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                  <p className="text-gray-300 text-xs">{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {selectedImage !== null && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
              onKeyDown={handleKeyPress}
              tabIndex={0}
            >
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
                {/* Navigation Buttons */}
                {filteredImages.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-lg font-medium mb-1">{filteredImages[selectedImage].alt}</p>
                  <p className="text-gray-300 text-sm">{filteredImages[selectedImage].category}</p>
                  <p className="text-gray-400 text-xs mt-2">
                    {selectedImage + 1} of {filteredImages.length}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
