import React, { useState } from 'react';
import { Smartphone, CheckCircle, ArrowRight, Clock, IndianRupee, Star, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from '../../components/GlassmorphicCard';
import ServiceInquiryForm from '../../components/ServiceInquiryForm';

const MobileAppDevelopment = () => {
  const [selectedTier, setSelectedTier] = useState(1);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const tiers = [
    {
      name: "Basic",
      price: "₹1 Lakh",
      originalPrice: "₹1.5 Lakh",
      features: [
        "MVP mobile app",
        "Basic UI design",
        "User login/profiles",
        "Up to 5 screens",
        "Basic functionality",
        "Android OR iOS",
        "1 month support"
      ],
      delivery: "4–6 weeks",
      color: "from-green-600 to-green-800",
      popular: false
    },
    {
      name: "Standard",
      price: "₹3 Lakh",
      originalPrice: "₹4 Lakh",
      features: [
        "Feature-rich application",
        "Custom UI/UX design",
        "Payment integration",
        "GPS/Location services",
        "Chat functionality",
        "Push notifications",
        "Both Android & iOS",
        "3 months support"
      ],
      delivery: "8–12 weeks",
      color: "from-blue-600 to-blue-800",
      popular: true
    },
    {
      name: "Premium",
      price: "₹7.5 Lakh",
      originalPrice: "₹9 Lakh",
      features: [
        "Enterprise mobile app",
        "Advanced AI/ML features",
        "AR/VR capabilities",
        "Real-time analytics",
        "Multi-platform support",
        "Backend development",
        "Admin dashboard",
        "6 months support"
      ],
      delivery: "12–24 weeks",
      color: "from-purple-600 to-purple-800",
      popular: false
    }
  ];

  const platforms = [
    { name: "Native iOS", icon: "📱", description: "Swift/Objective-C" },
    { name: "Native Android", icon: "🤖", description: "Kotlin/Java" },
    { name: "React Native", icon: "⚛️", description: "Cross-platform" },
    { name: "Flutter", icon: "🎯", description: "Google's framework" }
  ];

  const features = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed and efficiency"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security implementation"
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description: "Works on iOS and Android"
    },
    {
      icon: Star,
      title: "App Store Ready",
      description: "Optimized for store approval"
    }
  ];

  if (showInquiryForm) {
    return (
      <ServiceInquiryForm
        service={{
          title: "Mobile App Development",
          tiers: tiers,
          icon: Smartphone
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
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 rounded-full p-4 shadow-lg">
              <Smartphone className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-rajdhani tracking-wide">
              Mobile App Development
            </h1>
          </div>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Build powerful mobile applications that engage users and drive business success. 
            From native iOS/Android apps to cross-platform solutions, we create mobile experiences that matter.
          </p>

          {/* Platform Options */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {platforms.map((platform, index) => (
              <GlassmorphicCard key={index} className="p-6 text-center group hover:scale-105 transition-all duration-500">
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 font-rajdhani">{platform.name}</h3>
                <p className="text-gray-300 text-sm font-inter">{platform.description}</p>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-rajdhani">
            Why Choose Our Mobile Development?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <GlassmorphicCard key={index} className="p-6 text-center group hover:scale-105 transition-all duration-500">
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
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
              Mobile App Development Packages
            </h2>
            <p className="text-lg text-gray-300 font-inter">
              Choose the perfect package for your mobile app project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <GlassmorphicCard 
                key={index} 
                className={`p-8 relative ${selectedTier === index ? 'ring-2 ring-green-500' : ''} ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold font-inter">
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

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <GlassmorphicCard className="p-12">
            <h2 className="text-3xl font-bold text-white mb-6 font-rajdhani">
              Ready to Launch Your Mobile App?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-inter">
              Join thousands of businesses that have transformed their operations with our mobile solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowInquiryForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-inter flex items-center gap-2 justify-center"
              >
                Start Your App Project
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

export default MobileAppDevelopment;