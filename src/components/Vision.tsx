import React from 'react';
import { Rocket, Star, Globe } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const Vision = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden transition-all duration-1000">
      {/* Infinite Void Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/30 via-transparent to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700/20 via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400 mb-8 font-rajdhani tracking-wide sm:tracking-wider uppercase px-4">
            Technology Horizon
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-3xl mx-auto font-inter px-4">
            Where innovation meets infinite possibilities
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-inter px-4">
            Through cutting-edge software development and innovative solutions, we transcend the boundaries 
            of traditional technology, forging pathways into infinite digital possibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-20 animate-scale-in px-4">
          <div className="group relative">
            <GlassmorphicCard className="p-8 sm:p-10 transition-all duration-700 hover:scale-110 transform hover:rotate-2">
              <div className="relative">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full p-4 sm:p-5 mx-auto mb-6 sm:mb-8 group-hover:scale-125 transition-transform duration-500 shadow-lg shadow-gray-500/50 group-hover:animate-float">
                  <Rocket className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-4 sm:mb-6 font-rajdhani tracking-wide">Infinity</h3>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-inter">
                  Software solutions that scale infinitely, adapting to any challenge and growing with your needs.
                </p>
              </div>
            </GlassmorphicCard>
          </div>

          <div className="group relative">
            <GlassmorphicCard className="p-8 sm:p-10 transition-all duration-700 hover:scale-110 transform hover:-rotate-1">
              <div className="relative">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full p-4 sm:p-5 mx-auto mb-6 sm:mb-8 group-hover:scale-125 transition-transform duration-500 shadow-lg shadow-gray-500/50 group-hover:animate-float">
                  <Star className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-4 sm:mb-6 font-rajdhani tracking-wide">Innovation</h3>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-inter">
                  Cutting-edge technologies that push boundaries and create new possibilities in the digital realm.
                </p>
              </div>
            </GlassmorphicCard>
          </div>

          <div className="group relative">
            <GlassmorphicCard className="p-8 sm:p-10 transition-all duration-700 hover:scale-110 transform hover:rotate-2">
              <div className="relative">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full p-4 sm:p-5 mx-auto mb-6 sm:mb-8 group-hover:scale-125 transition-transform duration-500 shadow-lg shadow-gray-500/50 group-hover:animate-float">
                  <Globe className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-4 sm:mb-6 font-rajdhani tracking-wide">Excellence</h3>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-inter">
                  Delivering exceptional quality across all projects, setting new standards in software development.
                </p>
              </div>
            </GlassmorphicCard>
          </div>
        </div>

        <div className="relative animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <GlassmorphicCard className="inline-block p-2 mx-4">
            <div className="bg-black/50 px-8 sm:px-12 py-4 sm:py-6 rounded-2xl border border-gray-400/30 transform hover:scale-105 transition-transform duration-300">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white font-rajdhani tracking-wide">
                "Where Technology Meets Infinity"
              </p>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default Vision;