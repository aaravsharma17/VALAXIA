import React, { useState } from 'react';
import { Brain, CheckCircle, ArrowRight, Clock, IndianRupee, Star, Cloud, Users, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from '../../components/GlassmorphicCard';
import ServiceInquiryForm from '../../components/ServiceInquiryForm';

const SaaSDevelopment = () => {
  const [selectedTier, setSelectedTier] = useState(1);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const tiers = [
    {
      name: "Basic",
      price: "₹2 Lakh",
      originalPrice: "₹3 Lakh",
      features: [
        "MVP SaaS application",
        "Core features only",
        "Basic user interface",
        "Single tenant architecture",
        "Basic authentication",
        "Email support",
        "2 months support"
      ],
      delivery: "4–6 weeks",
      color: "from-green-600 to-green-800",
      popular: false
    },
    {
      name: "Standard",
      price: "₹4 Lakh",
      originalPrice: "₹5.5 Lakh",
      features: [
        "Complete SaaS platform",
        "Multiple feature modules",
        "User management system",
        "API integrations",
        "Payment processing",
        "Analytics dashboard",
        "Multi-tenant ready",
        "4 months support"
      ],
      delivery: "8–12 weeks",
      color: "from-blue-600 to-blue-800",
      popular: true
    },
    {
      name: "Premium",
      price: "₹10 Lakh",
      originalPrice: "₹12 Lakh",
      features: [
        "Enterprise SaaS solution",
        "Multi-tenant architecture",
        "Advanced analytics",
        "Cloud auto-scaling",
        "Custom integrations",
        "White-label options",
        "Advanced security",
        "6 months support"
      ],
      delivery: "12–20 weeks",
      color: "from-purple-600 to-purple-800",
      popular: false
    }
  ];

  const saasFeatures = [
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Built for scalability and reliability"
    },
    {
      icon: Users,
      title: "Multi-Tenant",
      description: "Serve multiple customers efficiently"
    },
    {
      icon: Database,
      title: "Data Security",
      description: "Enterprise-grade data protection"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed and efficiency"
    }
  ];

  if (showInquiryForm) {
    return (
      <ServiceInquiryForm
        service={{
          title: "SaaS Development",
          tiers: tiers,
          icon: Brain
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
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full p-4 shadow-lg">
              <Brain className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-rajdhani tracking-wide">
              SaaS Development
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Build scalable Software-as-a-Service platforms that serve thousands of users. 
            From MVP to enterprise-grade solutions, we create SaaS products that generate recurring revenue.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-rajdhani">
            SaaS Development Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {saasFeatures.map((feature, index) => (
              <GlassmorphicCard key={index} className="p-6 text-center group hover:scale-105 transition-all duration-500">
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">{feature.title}</h3>
                <p className="text-gray-300 text-sm font-inter">{feature.description}</p>
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
              SaaS Development Packages
            </h2>
            <p className="text-lg text-gray-300 font-inter">
              Choose the right package for your SaaS product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <GlassmorphicCard 
                key={index} 
                className={`p-8 relative ${selectedTier === index ? 'ring-2 ring-purple-500' : ''} ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold font-inter">
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
                        {tier.price.replace('₹', '').replace(' Lakh', 'L')}
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

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <GlassmorphicCard className="p-12">
            <h2 className="text-3xl font-bold text-white mb-6 font-rajdhani">
              Ready to Build Your SaaS Platform?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-inter">
              Transform your business idea into a scalable SaaS solution that generates recurring revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowInquiryForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-inter flex items-center gap-2 justify-center"
              >
                Start Your SaaS Project
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

export default SaaSDevelopment;