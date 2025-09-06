import React, { useState } from 'react';
import { Database, CheckCircle, ArrowRight, Clock, IndianRupee, Star, Building, BarChart, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from '../../components/GlassmorphicCard';
import ServiceInquiryForm from '../../components/ServiceInquiryForm';

const ERPCRMSolutions = () => {
  const [selectedTier, setSelectedTier] = useState(1);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const tiers = [
    {
      name: "Basic",
      price: "₹3 Lakh",
      originalPrice: "₹4 Lakh",
      features: [
        "Core ERP/CRM modules",
        "Limited customization",
        "Up to 50 users",
        "Basic reporting",
        "Email integration",
        "Standard templates",
        "3 months support"
      ],
      delivery: "3–6 months",
      color: "from-green-600 to-green-800",
      popular: false
    },
    {
      name: "Standard",
      price: "₹5 Lakh",
      originalPrice: "₹7 Lakh",
      features: [
        "Full-featured solution",
        "100–300 users",
        "Custom workflows",
        "Advanced reporting",
        "Third-party integrations",
        "Mobile access",
        "Training included",
        "6 months support"
      ],
      delivery: "6–9 months",
      color: "from-blue-600 to-blue-800",
      popular: true
    },
    {
      name: "Premium",
      price: "₹12 Lakh+",
      originalPrice: "₹15 Lakh+",
      features: [
        "Enterprise solution",
        "Multi-country support",
        "1000+ users",
        "Custom modules",
        "Advanced analytics",
        "API development",
        "24/7 support",
        "12 months support"
      ],
      delivery: "9–12+ months",
      color: "from-purple-600 to-purple-800",
      popular: false
    }
  ];

  const modules = [
    { name: "Finance & Accounting", icon: "💰" },
    { name: "Human Resources", icon: "👥" },
    { name: "Supply Chain", icon: "🚚" },
    { name: "Sales & Marketing", icon: "📈" },
    { name: "Customer Support", icon: "🎧" },
    { name: "Inventory Management", icon: "📦" }
  ];

  if (showInquiryForm) {
    return (
      <ServiceInquiryForm
        service={{
          title: "ERP/CRM Solutions",
          tiers: tiers,
          icon: Database
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
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full p-4 shadow-lg">
              <Database className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-rajdhani tracking-wide">
              ERP/CRM Solutions
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Streamline your business operations with custom ERP and CRM solutions. 
            From small businesses to large enterprises, we build systems that grow with your organization.
          </p>

          {/* Modules */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {modules.map((module, index) => (
              <GlassmorphicCard key={index} className="p-4 text-center group hover:scale-105 transition-all duration-500">
                <div className="text-3xl mb-2">{module.icon}</div>
                <div className="text-sm text-gray-300 font-inter">{module.name}</div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-rajdhani">
            Enterprise Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GlassmorphicCard className="p-6 text-center group hover:scale-105 transition-all duration-500">
              <Building className="w-12 h-12 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">Scalable Architecture</h3>
              <p className="text-gray-300 text-sm font-inter">Grows with your business</p>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 text-center group hover:scale-105 transition-all duration-500">
              <BarChart className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">Advanced Analytics</h3>
              <p className="text-gray-300 text-sm font-inter">Data-driven insights</p>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 text-center group hover:scale-105 transition-all duration-500">
              <Settings className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">Custom Workflows</h3>
              <p className="text-gray-300 text-sm font-inter">Tailored to your processes</p>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 text-center group hover:scale-105 transition-all duration-500">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">Enterprise Security</h3>
              <p className="text-gray-300 text-sm font-inter">Bank-level protection</p>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-rajdhani">
              ERP/CRM Packages
            </h2>
            <p className="text-lg text-gray-300 font-inter">
              Enterprise solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <GlassmorphicCard 
                key={index} 
                className={`p-8 relative ${selectedTier === index ? 'ring-2 ring-red-500' : ''} ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold font-inter">
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
    </div>
  );
};

export default ERPCRMSolutions;