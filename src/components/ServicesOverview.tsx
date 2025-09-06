import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Brain, 
  Settings, 
  Search, 
  Zap, 
  Users,
  ArrowRight
} from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const ServicesOverview = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      price: "Starting from ₹50K",
      path: "/services/web-development",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      price: "Starting from ₹1L",
      path: "/services/mobile-app-development",
      color: "from-green-600 to-green-800"
    },
    {
      icon: Brain,
      title: "SaaS Development",
      description: "Cloud-hosted software products for B2B and consumer markets",
      price: "Starting from ₹2L",
      path: "/services/saas-development",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: Database,
      title: "ERP/CRM Solutions",
      description: "Enterprise resource planning and customer relationship management",
      price: "Starting from ₹3L",
      path: "/services/erp-crm-solutions",
      color: "from-red-600 to-red-800"
    },
    {
      icon: Settings,
      title: "AI/ML Implementation",
      description: "Machine learning models and artificial intelligence integration",
      price: "Starting from ₹2.5L",
      path: "/services/ai-ml-implementation",
      color: "from-yellow-600 to-yellow-800"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud migration, infrastructure setup, and CI/CD pipelines",
      price: "Starting from ₹5L",
      path: "/services/cloud-devops",
      color: "from-indigo-600 to-indigo-800"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Security audits, penetration testing, and compliance solutions",
      price: "Starting from ₹1L",
      path: "/services/cybersecurity",
      color: "from-orange-600 to-orange-800"
    },
    {
      icon: Search,
      title: "Software Audit",
      description: "Code review, performance optimization, and quality assurance",
      price: "Starting from ₹30K",
      path: "/services/software-audit",
      color: "from-pink-600 to-pink-800"
    },
    {
      icon: Zap,
      title: "Automation & Integration",
      description: "Workflow automation and system integration solutions",
      price: "Starting from ₹5L",
      path: "/services/automation-integration",
      color: "from-teal-600 to-teal-800"
    },
    {
      icon: Users,
      title: "IT Consulting",
      description: "Strategic IT planning and digital transformation guidance",
      price: "Starting from ₹2L",
      path: "/services/it-consulting",
      color: "from-cyan-600 to-cyan-800"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-rajdhani tracking-wide">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Comprehensive IT solutions tailored to your business needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassmorphicCard 
              key={index} 
              className="p-8 group hover:scale-105 transition-all duration-500"
              delay={index * 100}
            >
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full p-4 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 font-rajdhani">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 font-inter text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-lg font-semibold text-blue-400 mb-6 font-inter">
                  {service.price}
                </div>
                
                <Link
                  to={service.path}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} hover:scale-105 text-white font-semibold rounded-lg transition-all duration-300 font-inter text-sm group-hover:shadow-lg`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </GlassmorphicCard>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <GlassmorphicCard className="inline-block p-8 mx-4">
            <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6 font-inter max-w-2xl">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 font-inter"
            >
              <Sparkles className="w-5 h-5" />
              Get Custom Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;