import React from 'react';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from './GlassmorphicCard';

const Hero = () => {
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '10+', label: 'Technologies' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/30 via-black to-black"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/Gemini_Generated_Image_tsdpx3tsdpx3tsdp.png" 
            alt="VALAXIA" 
            className="w-80 lg:w-96 h-auto mx-auto mb-6 hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-rajdhani tracking-wide leading-tight">
            Professional IT Solutions for Modern Businesses
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-inter max-w-4xl mx-auto leading-relaxed">
            From custom software development to enterprise solutions, we deliver cutting-edge technology 
            that transforms businesses and drives growth in the digital era.
          </p>
          
          {/* Key Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <GlassmorphicCard className="p-6 text-center" delay={200}>
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2 font-rajdhani">Fast Delivery</h3>
              <p className="text-gray-300 text-sm font-inter">Projects delivered on time, every time</p>
            </GlassmorphicCard>
            
            <GlassmorphicCard className="p-6 text-center" delay={400}>
              <div className="text-3xl mb-2">💎</div>
              <h3 className="text-lg font-semibold text-white mb-2 font-rajdhani">Premium Quality</h3>
              <p className="text-gray-300 text-sm font-inter">Enterprise-grade solutions built to last</p>
            </GlassmorphicCard>
            
            <GlassmorphicCard className="p-6 text-center" delay={600}>
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="text-lg font-semibold text-white mb-2 font-rajdhani">24/7 Support</h3>
              <p className="text-gray-300 text-sm font-inter">Continuous support and maintenance</p>
            </GlassmorphicCard>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <GlassmorphicCard className="p-1" delay={800}>
            <Link 
              to="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 font-inter tracking-wide flex items-center gap-3"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-1" delay={1000}>
            <button className="group relative px-8 py-4 bg-transparent border-2 border-gray-400/60 text-gray-300 font-semibold rounded-lg transition-all duration-500 hover:bg-gray-500/20 hover:text-white hover:border-gray-400 transform hover:scale-110 font-inter tracking-wide flex items-center gap-3">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </GlassmorphicCard>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <GlassmorphicCard key={index} className="p-6 text-center" delay={1200 + index * 200}>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-rajdhani">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm font-inter">
                {stat.label}
              </div>
            </GlassmorphicCard>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;