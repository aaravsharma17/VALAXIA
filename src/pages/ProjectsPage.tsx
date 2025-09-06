import React from 'react';
import { Calendar, Clock, ArrowRight, ExternalLink, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from '../components/GlassmorphicCard';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'ParkSense AI',
      description: 'Advanced AI-powered diagnostic platform utilizing 10+ machine learning models to detect early signs of Parkinson\'s disease through voice analysis of jitter and shimmer patterns in CSV data format, providing personalized risk assessments.',
      status: 'Completed',
      phase: 'Live Production',
      completion: '100%',
      timeline: 'Live',
      link: 'https://parksenseai.netlify.app/',
      image: 'https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Python', 'Machine Learning', 'React', 'TensorFlow'],
      category: 'Healthcare AI'
    },
    {
      title: 'eSangrahan (Skeptical Version)',
      description: 'Digital collection and management platform revolutionizing data organization and accessibility for modern enterprises. Currently in development with core features being tested.',
      status: 'In Progress',
      phase: 'Development Phase',
      completion: '65%',
      timeline: 'Q2 2025',
      link: '#',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Enterprise Software',
      note: 'Skeptical version - under development'
    },
    {
      title: 'MedVA - Android App',
      description: 'Advanced medical virtual assistant Android application providing intelligent healthcare solutions and patient management systems. Model development complete, application in final testing phase.',
      status: 'In Progress',
      phase: 'Model Complete, App Testing',
      completion: '90%',
      timeline: 'Q1 2025',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Android', 'Kotlin', 'AI/ML', 'Firebase'],
      category: 'Mobile Healthcare'
    },
    {
      title: 'LifeInbrief',
      description: 'Comprehensive tourism platform designed specially for Uttarakhand Tourism, offering personalized travel experiences and destination management for the beautiful state.',
      status: 'In Progress',
      phase: 'Live Website',
      completion: '45%',
      timeline: 'Q3 2025',
      link: 'https://liveinbrief.netlify.app/',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Maps API'],
      category: 'Tourism Platform'
    },
    {
      title: 'SportsIn (Skeptical Version)',
      description: 'VALAXIA Originals - A comprehensive social media platform designed for all sports enthusiasts across the globe. Connecting athletes, coaches, fans, and organizations in a unified sports ecosystem.',
      status: 'In Progress',
      phase: 'Planning Phase',
      completion: '30%',
      timeline: 'Q4 2025',
      link: '#',
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'GraphQL', 'PostgreSQL'],
      category: 'Social Media',
      note: 'VALAXIA Originals - Skeptical version'
    }
  ];

  const categories = ['All', 'Healthcare AI', 'Enterprise Software', 'Mobile Healthcare', 'Tourism Platform', 'Social Media'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-rajdhani tracking-wide">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Explore our portfolio of innovative software solutions that have transformed businesses 
            across various industries. From AI-powered healthcare platforms to enterprise management systems.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-inter text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <GlassmorphicCard 
                key={index} 
                className="overflow-hidden group hover:scale-105 transition-all duration-500"
                delay={index * 200}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold font-inter ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 text-white rounded-full text-xs font-inter">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white font-rajdhani">
                      {project.title}
                    </h3>
                    <div className="text-sm text-gray-400 font-inter">
                      {project.timeline}
                    </div>
                  </div>

                  {project.note && (
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30 font-inter">
                        ⚠️ {project.note}
                      </span>
                    </div>
                  )}

                  <p className="text-gray-300 mb-6 font-inter leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-400 font-inter">
                        {project.phase}
                      </span>
                      <span className="text-sm font-bold text-gray-300 font-inter">
                        {project.completion}
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                          project.status === 'Completed' 
                            ? 'bg-gradient-to-r from-green-500 to-green-400' 
                            : 'bg-gradient-to-r from-blue-500 to-blue-400'
                        }`}
                        style={{ width: project.completion }}
                      ></div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-inter text-sm ${
                          project.status === 'Completed' 
                            ? 'bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700' 
                            : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.status === 'Completed' ? 'View Live' : 'Preview'}
                      </a>
                    )}
                    <Link
                      to="/contact"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-inter text-sm"
                    >
                      Discuss Similar
                    </Link>
                  </div>
                </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-inter">
              Let's discuss how we can bring your vision to life with our proven development expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-inter flex items-center gap-2 justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="px-8 py-4 border-2 border-gray-400/60 text-gray-300 hover:text-white hover:border-gray-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-inter"
              >
                View All Services
              </Link>
            </div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;