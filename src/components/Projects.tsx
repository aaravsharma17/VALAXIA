import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const Projects = () => {
  const solutions = [
    {
      title: 'eSangrahan',
      description: 'Digital collection and management platform revolutionizing data organization and accessibility for modern enterprises.',
      status: 'In Progress',
      phase: 'Development Phase',
      completion: '65%',
      timeline: 'Q2 2025'
    },
    {
      title: 'MedVA',
      description: 'Advanced medical virtual assistant providing intelligent healthcare solutions and patient management systems.',
      status: 'In Progress',
      phase: 'Testing Phase',
      completion: '80%',
      timeline: 'Q1 2025'
    },
    {
      title: 'TourVA',
      description: 'Comprehensive tourism virtual assistant offering personalized travel experiences and destination management.',
      status: 'In Progress',
      phase: 'Design Phase',
      completion: '45%',
      timeline: 'Q3 2025'
    },
    {
      title: 'SportsIn',
      description: 'Integrated sports management platform connecting athletes, coaches, and organizations in a unified ecosystem.',
      status: 'In Progress',
      phase: 'Planning Phase',
      completion: '30%',
      timeline: 'Q4 2025'
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden transition-all duration-1000">
      {/* Void Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white mb-6 font-rajdhani tracking-wide sm:tracking-wider uppercase px-4">
            Our Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-3xl mx-auto font-inter px-4">
            Professional software solutions currently in development
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 font-inter px-4">
            Delivering cutting-edge software solutions that drive business growth and innovation
          </p>
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-gray-400 to-white mx-auto"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Central Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'sm:justify-start justify-start' : 'sm:justify-end justify-start'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Point */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full border-2 sm:border-4 border-black shadow-lg z-20">
                  <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Solution Card */}
                <div className={`w-full sm:w-5/12 ${
                  index % 2 === 0 ? 'sm:pr-12 pl-12' : 'sm:pl-12 pl-12'
                }`}>
                  <GlassmorphicCard className="p-6 sm:p-8 group hover:scale-105 transition-all duration-500">
                    <div className="relative">
                      {/* Status Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                          <span className="text-xs sm:text-sm font-medium text-gray-400 font-inter">
                            {solution.status}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 font-inter">
                          {solution.timeline}
                        </div>
                      </div>

                      {/* Solution Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-4 group-hover:text-white transition-colors duration-300 font-rajdhani tracking-wide">
                        {solution.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed font-inter">
                        {solution.description}
                      </p>

                      {/* Progress Section */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm font-medium text-gray-400 font-inter">
                            {solution.phase}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-gray-300 font-inter">
                            {solution.completion}
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-800 rounded-full h-1.5 sm:h-2 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-gray-500 to-gray-400 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: solution.completion }}
                          ></div>
                        </div>
                      </div>

                      {/* Arrow Indicator */}
                      <div className={`hidden sm:block absolute top-1/2 transform -translate-y-1/2 ${
                        index % 2 === 0 ? '-right-8' : '-left-8'
                      } text-gray-500`}>
                        <ArrowRight className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          index % 2 === 0 ? '' : 'rotate-180'
                        }`} />
                      </div>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline End Point */}
          <div className="absolute bottom-0 left-4 sm:left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full border-2 border-black"></div>
        </div>

        {/* Timeline Legend */}
        <div className="mt-16 text-center">
          <GlassmorphicCard className="inline-block p-4 sm:p-6 mx-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 font-inter">
              <div className="flex items-center gap-2">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
                <span>In Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Estimated Timeline</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Current Progress</span>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;