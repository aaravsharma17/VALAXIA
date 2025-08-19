import React from 'react';
import { Code, Database, Cloud, Smartphone, Globe, Shield } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const About = () => {
  const technologies = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom applications built with cutting-edge technologies"
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Advanced analytics and database management systems"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile development"
    },
    {
      icon: Globe,
      title: "Web Platforms",
      description: "Responsive web applications and digital experiences"
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Enterprise-grade security and compliance systems"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-rajdhani tracking-wide">
            ABOUT VALAXIA
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-inter px-4">
            VALAXIA is a technology galaxy where innovation meets infinite possibilities. 
            We are a premier software company delivering comprehensive solutions that transform 
            businesses and drive digital evolution across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((tech, index) => (
            <GlassmorphicCard key={index} className="p-6 sm:p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <tech.icon className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 font-rajdhani tracking-wide">
                {tech.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-inter leading-relaxed">
                {tech.description}
              </p>
            </GlassmorphicCard>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-12 border border-gray-700 mx-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-rajdhani">
              Our Mission
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-inter">
              To create a technology ecosystem where businesses thrive through innovative software solutions. 
              We bridge the gap between complex challenges and elegant solutions, empowering organizations 
              to reach new heights in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;