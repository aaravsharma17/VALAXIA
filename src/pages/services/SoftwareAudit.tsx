import React, { useState } from 'react';
import { Search, CheckCircle, ArrowRight, Clock, IndianRupee, Star, FileText, Code, BarChart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from '../../components/GlassmorphicCard';
import ServiceInquiryForm from '../../components/ServiceInquiryForm';

const SoftwareAudit = () => {
  const [selectedTier, setSelectedTier] = useState(1);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const tiers = [
    {
      name: "Basic",
      price: "₹30K–50K",
      originalPrice: "₹75K",
      features: [
        "Automated code review",
        "Basic vulnerability scan",
        "Code quality metrics",
        "Simple reporting",
        "Basic recommendations"
      ],
      delivery: "1 week",
      color: "from-green-600 to-green-800",
      popular: false
    },
    {
      name: "Standard",
      price: "₹1–2 Lakh",
      originalPrice: "₹3 Lakh",
      features: [
        "Manual code review",
        "Compliance audits",
        "Performance testing",
        "Security assessment",
        "Detailed reporting",
        "Remediation plan",
        "Follow-up consultation"
      ],
      delivery: "2–3 weeks",
      color: "from-blue-600 to-blue-800",
      popular: true
    },
    {
      name: "Premium",
      price: "₹3 Lakh+",
      originalPrice: "₹5 Lakh+",
      features: [
        "Full-scale audit",
        "Multiple systems review",
        "Architecture assessment",
        "Remediation support",
        "Team training",
        "Ongoing monitoring",
        "3 months support"
      ],
      delivery: "4–6 weeks",
      color: "from-purple-600 to-purple-800",
      popular: false
    }
  ];

  const auditTypes = [
    {
      icon: Code,
      title: "Code Quality Audit",
      description: "Review code structure, patterns, and best practices"
    },
    {
      icon: Shield,
      title: "Security Audit",
      description: "Identify vulnerabilities and security weaknesses"
    },
    {
      icon: BarChart,
      title: "Performance Audit",
      description: "Analyze system performance and optimization opportunities"
    },
    {
      icon: FileText,
      title: "Compliance Audit",
      description: "Ensure adherence to industry standards and regulations"
    }
  ];

  if (showInquiryForm) {
    return (
      <ServiceInquiryForm
        service={{
          title: "Software Audit Services",
          tiers: tiers,
          icon: Search
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
            <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-800 rounded-full p-4 shadow-lg">
              <Search className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-rajdhani tracking-wide">
              Software Audit Services
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Ensure your software meets industry standards with comprehensive audits. 
            From code quality to security compliance, we help you maintain excellence and reduce risks.
          </p>
        </div>
      </section>

      {/* Audit Types */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-rajdhani">
            Types of Software Audits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditTypes.map((audit, index) => (
              <GlassmorphicCard key={index} className="p-6 text-center group hover:scale-105 transition-all duration-500">
                <audit.icon className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">{audit.title}</h3>
                <p className="text-gray-300 text-sm font-inter">{audit.description}</p>
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
              Software Audit Packages
            </h2>
            <p className="text-lg text-gray-300 font-inter">
              Comprehensive audits to ensure quality and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <GlassmorphicCard 
                key={index} 
                className={`p-8 relative ${selectedTier === index ? 'ring-2 ring-pink-500' : ''} ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold font-inter">
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
    </div>
  );
};

export default SoftwareAudit;