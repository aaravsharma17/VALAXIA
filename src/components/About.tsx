import React from 'react';
import { Code, Database, Cloud, Smartphone, Globe, Shield, Star, Clock, Zap } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const About = () => {
  const currentServices = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom enterprise applications built with cutting-edge technologies including React, Node.js, Python, and AI/ML frameworks. We specialize in scalable architectures, microservices, and cloud-native solutions that transform business operations.",
      features: ["Enterprise Applications", "AI/ML Integration", "Microservices Architecture", "API Development"],
      status: "active"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native iOS and Android applications, plus cross-platform solutions using React Native and Flutter. From concept to App Store deployment, we create intuitive mobile experiences that engage users and drive business growth.",
      features: ["Native iOS/Android", "Cross-Platform Development", "App Store Optimization", "Mobile UI/UX Design"],
      status: "active"
    },
    {
      icon: Globe,
      title: "Web Platforms",
      description: "Responsive web applications and progressive web apps (PWAs) that deliver exceptional digital experiences. Built with modern frameworks like React, Vue.js, and Next.js for optimal performance and SEO.",
      features: ["Progressive Web Apps", "E-commerce Platforms", "Content Management Systems", "SEO Optimization"],
      status: "active"
    }
  ];

  const upcomingServices = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Comprehensive cloud solutions including AWS, Azure, and Google Cloud deployments. Infrastructure as Code, containerization with Docker/Kubernetes, and serverless architectures for maximum scalability.",
      features: ["AWS/Azure/GCP", "Kubernetes Orchestration", "Serverless Computing", "Infrastructure as Code"],
      status: "upcoming",
      eta: "Q2 2025"
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Advanced analytics platforms, data warehousing, and business intelligence solutions. Real-time data processing, machine learning pipelines, and custom dashboard development for data-driven decision making.",
      features: ["Big Data Analytics", "ML Pipelines", "Business Intelligence", "Real-time Processing"],
      status: "upcoming",
      eta: "Q3 2025"
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Enterprise-grade cybersecurity implementations including penetration testing, security audits, and compliance frameworks. Zero-trust architecture and advanced threat detection systems.",
      features: ["Penetration Testing", "Security Audits", "Compliance Frameworks", "Threat Detection"],
      status: "upcoming",
      eta: "Q4 2025"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
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

        {/* Current Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-green-400 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300 font-rajdhani tracking-wide uppercase">
                Current Expertise
              </h3>
              <Zap className="w-8 h-8 text-green-400 animate-pulse" />
            </div>
            <p className="text-gray-300 text-lg font-inter">
              Production-ready solutions we deliver today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentServices.map((service, index) => (
              <GlassmorphicCard 
                key={index} 
                className="p-8 text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden"
                delay={index * 200}
              >
                {/* Active indicator */}
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                </div>

                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600/80 to-green-800 rounded-full p-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-green-500/30 group-hover:shadow-green-400/50">
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    {/* Floating particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-green-400 rounded-full animate-float"
                          style={{
                            left: `${30 + i * 20}%`,
                            top: `${20 + i * 15}%`,
                            animationDelay: `${i * 0.5}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 font-rajdhani tracking-wide group-hover:text-green-300 transition-colors duration-300">
                    {service.title}
                  </h4>

                  <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed font-inter">
                    {service.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30 font-inter transform hover:scale-105 transition-transform duration-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>

        {/* Upcoming Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Clock className="w-8 h-8 text-blue-400 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 font-rajdhani tracking-wide uppercase">
                Upcoming Services
              </h3>
              <Clock className="w-8 h-8 text-blue-400 animate-pulse" />
            </div>
            <p className="text-gray-300 text-lg font-inter">
              Advanced solutions launching soon
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingServices.map((service, index) => (
              <GlassmorphicCard 
                key={index} 
                className="p-8 text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden"
                delay={index * 200}
              >
                {/* Coming soon indicator */}
                <div className="absolute top-4 right-4">
                  <div className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 font-inter">
                    {service.eta}
                  </div>
                </div>

                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative z-10">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600/60 to-blue-800/60 rounded-full p-4 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-400/40 border-2 border-blue-500/30">
                      <service.icon className="w-full h-full text-blue-300" />
                    </div>
                    {/* Floating particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
                          style={{
                            left: `${30 + i * 20}%`,
                            top: `${20 + i * 15}%`,
                            animationDelay: `${i * 0.5}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 font-rajdhani tracking-wide group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h4>

                  <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed font-inter">
                    {service.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 font-inter transform hover:scale-105 transition-transform duration-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Loading animation overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-12 border border-gray-700 mx-4 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-green-500/5 animate-aurora"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Star className="w-8 h-8 text-gray-400 animate-pulse" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-rajdhani">
                  Our Mission
                </h3>
                <Star className="w-8 h-8 text-gray-400 animate-pulse" />
              </div>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-inter">
                To create a technology ecosystem where businesses thrive through innovative software solutions. 
                We bridge the gap between complex challenges and elegant solutions, empowering organizations 
                to reach new heights in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;