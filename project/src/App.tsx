import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Places from './components/Places';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'amenities', 'places', 'gallery', 'about-us', 'contact'];
      const scrollPosition = window.scrollY + 120; // Adjusted for fixed navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} />
      {/* Add top padding to account for fixed navbar - exactly 88px total height */}
      <div style={{ paddingTop: '88px' }}>
        <Hero />
        <About />
        <Amenities />
        <Places />
        <Gallery />
        <AboutUs />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;