import React from 'react';
import { Users, Target, Award, Globe, Rocket, Star } from 'lucide-react';
import GlassmorphicCard from '../components/GlassmorphicCard';

const AboutPage = () => {
  const team = [
    {
      name: "Arjun Sharma",
      position: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "10+ years in software development and business strategy"
    },
    {
      name: "Priya Patel",
      position: "CTO",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Expert in AI/ML and cloud architecture"
    },
    {
      name: "Vikram Singh",
      position: "Lead Developer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Full-stack developer with mobile app expertise"
    },
    {
      name: "Kavya Reddy",
      position: "UI/UX Designer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Creative designer focused on user experience"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies to deliver solutions that set new industry standards."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that exceed expectations."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every project undergoes rigorous testing and quality assurance processes."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and multilingual capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <img 
            src="/Gemini_Generated_Image_tsdpx3tsdpx3tsdp.png" 
            alt="VALAXIA" 
            className="w-64 h-auto mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-rajdhani tracking-wide">
            About VALAXIA
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Founded with a vision to bridge the gap between complex technology challenges and elegant business solutions, 
            VALAXIA has emerged as a trusted partner for organizations seeking digital transformation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassmorphicCard className="p-8 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2 font-rajdhani">50+</div>
              <div className="text-gray-300 font-inter">Projects Completed</div>
            </GlassmorphicCard>
            <GlassmorphicCard className="p-8 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2 font-rajdhani">25+</div>
              <div className="text-gray-300 font-inter">Happy Clients</div>
            </GlassmorphicCard>
            <GlassmorphicCard className="p-8 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2 font-rajdhani">5+</div>
              <div className="text-gray-300 font-inter">Years Experience</div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <GlassmorphicCard className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Rocket className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white font-rajdhani">Our Mission</h2>
              </div>
              <p className="text-gray-300 font-inter leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. 
                We believe in creating software that not only meets current needs but anticipates future challenges.
              </p>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Star className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white font-rajdhani">Our Vision</h2>
              </div>
              <p className="text-gray-300 font-inter leading-relaxed">
                To become the leading technology partner for businesses worldwide, known for our innovation, 
                reliability, and commitment to excellence. We envision a future where technology seamlessly 
                integrates with business operations to create unlimited possibilities.
              </p>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-rajdhani">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-300 font-inter">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <GlassmorphicCard key={index} className="p-8 text-center group hover:scale-105 transition-all duration-500">
                <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-4 font-rajdhani">{value.title}</h3>
                <p className="text-gray-300 font-inter text-sm leading-relaxed">{value.description}</p>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-rajdhani">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-300 font-inter">
              Passionate professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <GlassmorphicCard key={index} className="p-6 text-center group hover:scale-105 transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-600 group-hover:border-blue-400 transition-colors duration-300"
                />
                <h3 className="text-xl font-bold text-white mb-2 font-rajdhani">{member.name}</h3>
                <p className="text-blue-400 mb-3 font-inter text-sm">{member.position}</p>
                <p className="text-gray-300 font-inter text-xs leading-relaxed">{member.bio}</p>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <GlassmorphicCard className="p-12">
            <h2 className="text-3xl font-bold text-white mb-6 font-rajdhani">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-inter">
              Let's discuss how we can help transform your business with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-inter"
              >
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 border-2 border-gray-400/60 text-gray-300 hover:text-white hover:border-gray-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-inter"
              >
                View Our Work
              </Link>
            </div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;