import React, { useState } from 'react';
import { Zap, CheckCircle, ArrowRight, Clock, IndianRupee, Star, Workflow, Link as LinkIcon, Bot, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from '../../components/GlassmorphicCard';
import ServiceInquiryForm from '../../components/ServiceInquiryForm';

const AutomationIntegration = () => {
  const [selectedTier, setSelectedTier] = useState(1);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const tiers = [
    {
      name: "Basic",
      price: "₹5 Lakh",
      originalPrice: "₹6.5 Lakh",
      features: [
        "Single automation bot",
        "Basic workflow automation",
        "Simple integrations",
        "Standard templates",
        "Basic monitoring",
        "2 months support"
      ],
      delivery: "3–4 weeks",
      color: "from-green-600 to-green-800",
      popular: false
    },
    {
      name: "Standard",
      price: "₹7 Lakh",
      originalPrice: "₹9 Lakh",
      features: [
        "Multi-bot automation",
        "End-to-end processes",
        "API integrations",
        "Custom workflows",
        "Advanced monitoring",
        "Training included",
        "4 months support"
      ],
      delivery: "6–10 weeks",
      color: "from-blue-600 to-blue-800",
      popular: true
    },
    {
      name: "Premium",
      price: "₹12 Lakh+",
      originalPrice: "₹15 Lakh+",
      features: [
        "Enterprise-wide RPA",
        "Complex orchestration",
        "AI-powered automation",
        "Custom integrations",
        "24/7 monitoring",
        "Continuous optimization",
        "6 months support"
      ],
      delivery: "12–20 weeks",
      color: "from-purple-600 to-purple-800",
      popular: false
    }
  ];

  const automationTypes = [
    {
      icon: Bot,
      title: "Robotic Process Automation",
      description: "Automate repetitive tasks and workflows"
    },
    {
      icon: LinkIcon,
      title: "System Integration",
      description: "Connect disparate systems and applications"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Streamline business processes and approvals"
    },
    {
      icon: Cog,
      title: "Custom Automation",
      description: "Tailored automation solutions for unique needs"
    }
  ];

  if (showInquiryForm) {
    return (
      <ServiceInquiryForm
        service={{
          title: "Automation & Integration Services",
          tiers: tiers,
          icon: Zap
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
            <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-800 rounded-full p-4 shadow-lg">
              <Zap className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-rajdhani tracking-wide">
              Automation & Integration
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Streamline operations with intelligent automation and seamless system integrations. 
            Reduce manual work, eliminate errors, and boost productivity across your organization.
          </p>
        </div>
      </section>

      {/* Automation Types */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-rajdhani">
            Automation Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationTypes.map((type, index) => (
              <GlassmorphicCard key={index} className="p-6 text-center group hover:scale-105 transition-all duration-500">
                <type.icon className="w-12 h-12 text-teal-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">{type.title}</h3>
                <p className="text-gray-300 text-sm font-inter">{type.description}</p>
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
              Automation Packages
            </h2>
            <p className="text-lg text-gray-300 font-inter">
              Intelligent automation solutions for every business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <GlassmorphicCard 
                key={index} 
                className={`p-8 relative ${selectedTier === index ? 'ring-2 ring-teal-500' : ''} ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold font-inter">
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

export default AutomationIntegration;