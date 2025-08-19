import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Scene3D from './Scene3D';
import GlassmorphicCard from './GlassmorphicCard';

const Hero = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0.5, y: 0.5 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const subject = encodeURIComponent('Inquiry from VALX LLP Website');
    const mailtoLink = `mailto:valxgalaxy@gmail.com?subject=${subject}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deep Void Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/30 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_var(--tw-gradient-stops))] from-gray-700/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-gray-600/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Subtle Tech Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 md:mb-8 text-white font-rajdhani tracking-[0.1em] sm:tracking-[0.2em] drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 relative z-10 uppercase">
              VALAXIA
            </h1>
            <div className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-300 animate-pulse font-rajdhani tracking-[0.1em] sm:tracking-[0.2em] blur-sm uppercase">
              VALAXIA
            </div>
          </div>
          <div className="relative">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 md:mb-8 font-medium tracking-[0.2em] sm:tracking-[0.3em] opacity-90 font-inter uppercase">
              Technology Galaxy
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 md:mb-16 font-normal max-w-4xl mx-auto leading-relaxed font-inter px-4">
              Where all technologies meet at the horizon to create infinite solutions
            </p>
            <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-32 sm:w-48 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center px-4">
          <GlassmorphicCard className="p-1" delay={500}>
            <button 
              onClick={scrollToProjects}
             className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-gray-800/50 via-black/70 to-gray-800/50 hover:from-gray-700/60 hover:via-gray-800/50 hover:to-gray-700/60 text-white font-semibold rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/30 border border-gray-400/30 hover:rotate-1 font-inter tracking-wide text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-800/30 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative flex items-center gap-2 sm:gap-3">
                Explore Solutions
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-500" />
              </div>
            </button>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-1" delay={700}>
            <button 
              onClick={scrollToContact}
             className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-gray-400/60 text-gray-300 font-semibold rounded-lg transition-all duration-500 hover:bg-gray-500/20 hover:text-white hover:border-gray-400 transform hover:scale-110 hover:shadow-2xl hover:shadow-gray-400/30 hover:-rotate-1 font-inter tracking-wide text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gray-500/10 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative flex items-center gap-2 sm:gap-3">
                Get Started
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </button>
          </GlassmorphicCard>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-gray-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 sm:h-4 bg-gray-400 rounded-full mt-2 sm:mt-3 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;