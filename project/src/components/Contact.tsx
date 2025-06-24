import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      info: '123 Potomac Street, Colonial Beach, VA 22443',
      link: 'https://maps.app.goo.gl/vAPHDWTP9tA6vXGX7'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '804-410-2024 / 804-410-2050',
      link: null
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'colonialhospitalityinc@gmail.com',
      link: 'mailto:colonialhospitalityinc@gmail.com'
    },
    {
      icon: Clock,
      title: 'Reception Hours',
      info: '24/7 Available',
      link: null
    }
  ];

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/vAPHDWTP9tA6vXGX7', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team to plan your perfect getaway or ask any questions about our services
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.info}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Interactive Map */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div
                  className="h-64 bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors duration-200"
                  onClick={openGoogleMaps}
                >
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-800 font-semibold">Interactive Map</p>
                    <p className="text-sm text-gray-600">Colonial Beach, Virginia</p>
                    <p className="text-xs text-blue-600 mt-2">Click to open in Google Maps</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">Thank you! Your message has been sent successfully.</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="804-410-2024"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="events">Events & Weddings</option>
                      <option value="Free Break-fast">Reservations</option>
                      <option value="general">General Information</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-vertical"
                    placeholder="Tell us about your inquiry or how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* New Events & Booking Images */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>🏖️ EVENTS LINK BELOW </li>
                <li>📍 <a href="https://maps.app.goo.gl/KmWJwHU3E8qyqGuF6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Colonial Beach, VA</a></li>
                <li>
                  🌐 <a href="https://visitcbva.com/all-events/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-600 hover:underline">
                    <img src="/images/logo.png" alt="Colonial Beach Logo" className="w-6 h-6 inline-block mr-1" />
                    <span>Visit Colonial Beach Official Website Event Calendar</span>
                  </a>
                </li>
              </ul>

              <div className="grid grid-cols-1 gap-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgzfl7se73XTbfXNdCMxZPbT4emvkFQ6NpCw&s"
                  alt="FIRE-WORKS"
                  className="rounded-lg shadow-lg w-full object-cover h-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
