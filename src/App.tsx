import React from 'react';
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'vision', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section === 'hero' ? 'root' : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Global void background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black pointer-events-none transition-opacity duration-1000" />
      
      <Hero />
      <About />
      <Projects />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;