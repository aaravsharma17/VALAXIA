import React, { useState } from 'react';
import { Globe, CheckCircle, ArrowRight, Clock, IndianRupee, Star, Users, Code, Smartphone, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from '../../components/GlassmorphicCard';
import ServiceInquiryForm from '../../components/ServiceInquiryForm';

const WebDevelopment = () => {
  const [selectedTier, setSelectedTier] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const tiers = [
    {
      name: "Basic",
      price: "₹50K",
      originalPrice: "₹75K",
      features: [
        "2–4 pages website",
        "Template-based design",
        "Responsive layout",
        "Basic SEO optimization",
        "Contact form integration",
        "Social media links",
        "1 month support"
      ],
      delivery: "2–3 weeks",
      color: "from-green-600 to-green-800",
      popular: false
    },
    {
      name: "Standard",
      price: "₹2 Lakh",
      originalPrice: "₹2.5 Lakh",
      features: [
        "Dynamic CMS-based site",
        "5–15 pages",
        "Custom design & branding",
        "Advanced contact forms",
        "Social media integration",
        "Blog/News section",
        "Analytics setup",
        "3 months support"
      ],
      delivery: "4–6 weeks",
      color: "from-blue-600 to-blue-800",
      popular: true
    },
    {
      name: "Premium",
      price: "₹5 Lakh",
      originalPrice: "₹6 Lakh",
      features: [
        "Enterprise-level website",
        "Custom UX/UI design",
        "Multi-locale support",
        "E-commerce integration",
        "Advanced features",
        "Performance optimization",
        "Security implementation",
        "6 months support"
      ],
      delivery: "8–12 weeks",
      color: "from-purple-600 to-purple-800",
      popular: false
    }
  ];

  const technologies = [
    "React", "Next.js", "Vue.js", "Angular", "Node.js", "Python", "PHP", "WordPress", "Shopify", "WooCommerce"
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      description: "Modern online store with payment integration",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "Stripe"]
    },
    {
      title: "Corporate Website",
      description: "Professional business website with CMS",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tech: ["WordPress", "PHP", "MySQL"]
    },
    {
      title: "SaaS Landing Page",
      description: "High-converting landing page for SaaS product",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tech: ["Next.js", "Tailwind", "Vercel"]
    }
  ];

  if (showInquiryForm) {
    return (
      <ServiceInquiryForm
        service={{
          title: "Web Development",
          tiers: tiers,
          icon: Globe
        }}
        selectedTier={selectedTier}
        onBack={() => setShowInquiryForm(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full p-4 shadow-lg">
              <Globe className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-rajdhani tracking-wide">
              Web Development
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto font-inter leading-relaxed">
            Create stunning, responsive websites that engage your audience and drive business growth. 
            From simple landing pages to complex e-commerce platforms, we build web solutions that work.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 font-inter text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-rajdhani">
            Our Web Development Portfolio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {portfolio.map((project, index) => (
              <GlassmorphicCard key={index} className="overflow-hidden group hover:scale-105 transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-rajdhani">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 font-inter text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-rajdhani">
              Choose Your Package
            </h2>
            <p className="text-lg text-gray-300 font-inter">
              Transparent pricing with no hidden costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <GlassmorphicCard 
                key={index} 
                className={`p-8 relative ${selectedTier === index ? 'ring-2 ring-blue-500' : ''} ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold font-inter">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 font-rajdhani flex items-center justify-center gap-2">
                    {tier.popular && <Star className="w-5 h-5 text-yellow-400" />}
                    {tier.name}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-gray-400 line-through font-inter">{tier.originalPrice}</span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-inter">SAVE</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <IndianRupee className="w-6 h-6 text-gray-300" />
                      <span className="text-4xl font-bold text-white font-inter">
                        {tier.price.replace('₹', '')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span className="font-inter">{tier.delivery}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 font-inter text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setSelectedTier(index);
                    setShowInquiryForm(true);
                  }}
                  className={`w-full px-6 py-4 bg-gradient-to-r ${tier.color} hover:scale-105 text-white font-semibold rounded-lg transition-all duration-300 font-inter`}
                >
                  Get Started
                </button>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-rajdhani">
            Why Choose Our Web Development Services?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GlassmorphicCard className="p-6 text-center group hover:scale-105 transition-all duration-500">
              <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">Responsive Design</h3>
              <p className="text-gray-300 text-sm font-inter">Perfect on all devices</p>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 text-center group hover:scale-105 transition-all duration-500">
              <Search className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">SEO Optimized</h3>
              <p className="text-gray-300 text-sm font-inter">Rank higher on Google</p>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 text-center group hover:scale-105 transition-all duration-500">
              <Code className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">Clean Code</h3>
              <p className="text-gray-300 text-sm font-inter">Maintainable & scalable</p>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 text-center group hover:scale-105 transition-all duration-500">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">User Focused</h3>
              <p className="text-gray-300 text-sm font-inter">Exceptional UX/UI</p>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <GlassmorphicCard className="p-12">
            <h2 className="text-3xl font-bold text-white mb-6 font-rajdhani">
              Ready to Build Your Website?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-inter">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowInquiryForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-inter flex items-center gap-2 justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-gray-400/60 text-gray-300 hover:text-white hover:border-gray-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-inter"
              >
                Schedule Consultation
              </Link>
            </div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;