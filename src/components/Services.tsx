import React, { useState } from 'react';
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
  ChevronDown,
  ChevronUp,
  Clock,
  IndianRupee,
  CheckCircle,
  Star
} from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';
import ServicePortal from './ServicePortal';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Design and development of websites from simple informational pages to full-featured e-commerce platforms. Includes UX/UI, CMS integration, and responsive design.",
      useCases: ["Startups", "SMBs", "E-commerce", "Portfolios"],
      tiers: [
        {
          name: "Basic",
          price: "₹50K",
          features: ["2–4 pages", "Template-based design", "Responsive layout", "Basic SEO"],
          delivery: "2–3 weeks",
          color: "from-green-600 to-green-800"
        },
        {
          name: "Standard",
          price: "₹2 Lakh",
          features: ["Dynamic CMS-based site", "5–15 pages", "Custom design", "Contact forms", "Social integration"],
          delivery: "4–6 weeks",
          color: "from-blue-600 to-blue-800"
        },
        {
          name: "Premium",
          price: "₹5 Lakh",
          features: ["Enterprise-level site", "Custom UX/UI", "Multi-locale support", "Advanced features", "E-commerce integration"],
          delivery: "8–12 weeks",
          color: "from-purple-600 to-purple-800"
        }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Android/iOS and cross-platform app development, from MVPs to enterprise apps.",
      useCases: ["Consumer apps", "Enterprise internal tools", "E-commerce apps"],
      tiers: [
        {
          name: "Basic",
          price: "₹1 Lakh",
          features: ["MVP app", "Basic UI", "Login/profiles", "Up to 5 screens"],
          delivery: "4–6 weeks",
          color: "from-green-600 to-green-800"
        },
        {
          name: "Standard",
          price: "₹3 Lakh",
          features: ["Feature-rich app", "Payment/GPS/chat integration", "Moderate analytics"],
          delivery: "8–12 weeks",
          color: "from-blue-600 to-blue-800"
        },
        {
          name: "Premium",
          price: "₹7.5 Lakh",
          features: ["Enterprise app", "AI/ML features", "AR/VR", "Real-time analytics", "Multi-platform support"],
          delivery: "12–24 weeks",
          color: "from-purple-600 to-purple-800"
        }
      ]
    },
    {
      icon: Brain,
      title: "SaaS Product Development",
      description: "Cloud-hosted, multi-tenant software products for B2B or consumer use.",
      useCases: ["CRM SaaS", "ERP SaaS", "Productivity tools"],
      tiers: [
        {
          name: "Basic",
          price: "₹2 Lakh",
          features: ["MVP SaaS", "Core features", "Minimal UI"],
          delivery: "4–6 weeks",
          color: "from-green-600 to-green-800"
        },
        {
          name: "Standard",
          price: "₹4 Lakh",
          features: ["Complete SaaS", "Multiple features", "User management", "API integrations"],
          delivery: "8–12 weeks",
          color: "from-blue-600 to-blue-800"
        },
        {
          name: "Premium",
          price: "₹10 Lakh",
          features: ["Enterprise-ready SaaS", "Multi-tenant architecture", "Advanced analytics", "Cloud scalability"],
          delivery: "12–20 weeks",
          color: "from-purple-600 to-purple-800"
        }
      ]
    },
    {
      icon: Database,
      title: "ERP/CRM Enterprise Software",
      description: "Custom ERP/CRM solutions for SMEs to large enterprises.",
      useCases: ["Finance", "HR", "Supply chain", "Sales", "Marketing automation"],
      tiers: [
        {
          name: "Basic",
          price: "₹3 Lakh",
          features: ["Core modules", "Limited customization", "Up to 50 users"],
          delivery: "3–6 months",
          color: "from-green-600 to-green-800"
        },
        {
          name: "Standard",
          price: "₹5 Lakh",
          features: ["Full-featured mid-market solution", "100–300 users", "Moderate integrations"],
          delivery: "6–9 months",
          color: "from-blue-600 to-blue-800"
        },
        {
          name: "Premium",
          price: "₹12 Lakh+",
          features: ["Enterprise solution", "Multi-country", ">1000 users", "Custom add-ons"],
          delivery: "9–12+ months",
          color: "from-purple-600 to-purple-800"
        }
      ]
    },
    {
      icon: Settings,
      title: "AI/ML Implementation",
      description: "ML models, NLP, computer vision, predictive analytics integration.",
      useCases: ["Chatbots", "Recommendation systems", "Predictive analytics", "IoT intelligence"],
      tiers: [
        {
          name: "Basic",
          price: "₹2.5 Lakh",
          features: ["Simple predictive analytics", "Small dataset model"],
          delivery: "4–6 weeks",
          color: "from-green-600 to-green-800"
        },
        {
          name: "Standard",
          price: "₹5 Lakh",
          features: ["Advanced NLP/chatbots", "Moderate CV models", "Cloud deployment"],
          delivery: "8–12 weeks",
          color: "from-blue-600 to-blue-800"
        },
        {
          name: "Premium",
          price: "₹10 Lakh+",
          features: ["Enterprise AI", "Deep learning", "Computer vision", "IoT", "MLOps pipeline"],
          delivery: "12–24 weeks",
          color: "from-purple-600 to-purple-800"
        }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Cloud migration, infrastructure setup, CI/CD pipelines, container orchestration.",
      useCases: ["Hosting", "Scalable deployments", "Hybrid cloud solutions"],
      tiers: [
        {
          name: "Basic",
          price: "₹5 Lakh",
          features: ["Single service migration", "Simple CI/CD"],
          delivery: "2–4 weeks",
          color: "from-green-600 to-green-800"
        },
        {
          name: "Standard",
          price: "₹7 Lakh",
          features: ["Multi-service cloud setup", "Monitoring", "Moderate automation"],
          delivery: "6–10 weeks",
          color: "from-blue-600 to-blue-800"
        },
        {
          name: "Premium",
          price: "₹10 Lakh+",
          features: ["Enterprise cloud migration", "SRE practices", "24/7 support"],
          delivery: "12–20 weeks",
          color: "from-purple-600 to-purple-800"
        }
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Penetration testing, vulnerability assessments, SOC/SIEM, compliance audits.",
      useCases: ["Secure apps", "Networks", "Enterprise systems"],
      tiers: [
        {
          name: "Basic",
          price: "₹1 Lakh",
          features: ["Automated scans", "Basic monitoring", "Small apps"],
          delivery: "1–2 weeks",
          color: "from-green-600 to-green-800"
        },
        {
          name: "Standard",
          price: "₹2–3 Lakh",
          features: ["Manual pentesting", "API/network scans", "Remediation guidance"],
          delivery: "2–4 weeks",
          color: "from-blue-600 to-blue-800"
        },
        {
          name: "Premium",
          price: "₹5 Lakh+",
          features: ["Full-scope security audits", "SOC setup", "Compliance support", "Enterprise-grade protection"],
          delivery: "4–8 weeks",
          color: "from-purple-600 to-purple-800"
        }
      ]
    },
    {
      icon: Search,
      title: "Software Audit Services",
      description: "Code review, license compliance, performance/security audits.",
      useCases: ["Regulatory compliance", "Code quality", "Risk reduction"],
      tiers: [
        {
          name: "Basic",
          price: "₹30K–50K",
          features: ["Automated code review", "Vulnerability scan"],
          delivery: "1 week",
          color: "from-green-600 to-green-800"
        },
        {
          name: "Standard",
          price: "₹1–2 Lakh",
          features: ["Manual compliance audits", "Penetration testing"],
          delivery: "2–3 weeks",
          color: "from-blue-600 to-blue-800"
        },
        {
          name: "Premium",
          price: "₹3 Lakh+",
          features: ["Full-scale audits", "Multiple systems", "Remediation support"],
          delivery: "4–6 weeks",
          color: "from-purple-600 to-purple-800"
        }
      ]
    },
    {
      icon: Zap,
      title: "Automation & Integration Services",
      description: "Workflow automation, RPA, CI/CD pipelines, SaaS integrations.",
      useCases: ["HR", "Finance", "IT operations", "Deployment automation"],
      tiers: [
        {
          name: "Basic",
          price: "₹5 Lakh",
          features: ["Single bot", "Basic workflow automation"],
          delivery: "3–4 weeks",
          color: "from-green-600 to-green-800"
        },
        {
          name: "Standard",
          price: "₹7 Lakh",
          features: ["Multi-bot automation", "End-to-end process automation"],
          delivery: "6–10 weeks",
          color: "from-blue-600 to-blue-800"
        },
        {
          name: "Premium",
          price: "₹12 Lakh+",
          features: ["Enterprise-wide RPA", "Complex CI/CD orchestration"],
          delivery: "12–20 weeks",
          color: "from-purple-600 to-purple-800"
        }
      ]
    },
    {
      icon: Users,
      title: "IT Consulting & Digital Transformation",
      description: "Strategy, enterprise architecture, process reengineering, system modernization.",
      useCases: ["Digital transformation", "IT roadmap", "Cloud strategy", "Legacy modernization"],
      tiers: [
        {
          name: "Basic",
          price: "₹2–5 Lakh",
          features: ["Short-term consulting", "Digital maturity assessment", "Small business focus"],
          delivery: "2–4 weeks",
          color: "from-green-600 to-green-800"
        },
        {
          name: "Standard",
          price: "₹10–12 Lakh",
          features: ["Multi-month engagement", "Process automation planning", "ERP/CRM vendor selection"],
          delivery: "2–4 months",
          color: "from-blue-600 to-blue-800"
        },
        {
          name: "Premium",
          price: "₹15 Lakh+",
          features: ["Enterprise-wide transformation", "IT strategy overhaul", "Complex integrations"],
          delivery: "6–12 months",
          color: "from-purple-600 to-purple-800"
        }
      ]
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const handleGetStarted = (index: number) => {
    setSelectedService(index);
  };

  if (selectedService !== null) {
    return (
      <ServicePortal 
        service={services[selectedService]} 
        onBack={() => setSelectedService(null)} 
      />
    );
  }
  return (
    <section id="services" className="relative py-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white mb-6 font-rajdhani tracking-wide sm:tracking-wider uppercase">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-3xl mx-auto font-inter">
            Comprehensive IT solutions with transparent pricing
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 font-inter">
            From startups to enterprises, we deliver tailored technology solutions that drive growth and innovation
          </p>
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-gray-400 to-white mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <GlassmorphicCard 
              key={index} 
              className="transition-all duration-500"
              delay={index * 100}
            >
              <div className="p-6 sm:p-8">
                {/* Service Header */}
                <div 
                  className="flex items-center justify-between cursor-pointer group"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full p-3 sm:p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gray-500/30">
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300 group-hover:text-white transition-colors duration-300 font-rajdhani tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400 mt-1 font-inter">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {expandedService === index ? (
                      <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8" />
                    ) : (
                      <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  expandedService === index ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                }`}>
                  {/* Use Cases */}
                  <div className="mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-300 mb-4 font-rajdhani">
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, ucIndex) => (
                        <span
                          key={ucIndex}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/30 font-inter"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.tiers.map((tier, tierIndex) => (
                      <div
                        key={tierIndex}
                        className="relative group"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${tier.color} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                        <div className="relative bg-black/60 border border-gray-600/30 rounded-xl p-6 group-hover:scale-105 transition-transform duration-300">
                          {/* Tier Header */}
                          <div className="text-center mb-6">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              {tierIndex === 2 && <Star className="w-5 h-5 text-yellow-400" />}
                              <h5 className="text-xl font-bold text-white font-rajdhani">
                                {tier.name}
                              </h5>
                              {tierIndex === 2 && <Star className="w-5 h-5 text-yellow-400" />}
                            </div>
                            <div className="flex items-center justify-center gap-1 mb-4">
                              <IndianRupee className="w-6 h-6 text-gray-300" />
                              <span className="text-2xl sm:text-3xl font-bold text-white font-inter">
                                {tier.price}
                              </span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm font-inter">
                              <Clock className="w-4 h-4" />
                              <span>{tier.delivery}</span>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="space-y-3">
                            {tier.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm font-inter">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <button className={`w-full mt-6 px-4 py-3 bg-gradient-to-r ${tier.color} hover:scale-105 text-white font-semibold rounded-lg transition-all duration-300 font-inter text-sm`}>
                            onClick={() => handleGetStarted(index)}
                            Get Started
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <GlassmorphicCard className="inline-block p-8 mx-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-rajdhani">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6 font-inter">
              Let's discuss your unique requirements and create a tailored proposal
            </p>
            <button 
              onClick={() => {
                const subject = encodeURIComponent('Custom Solution Inquiry - VALAXIA Services');
                const mailtoLink = `mailto:valxgalaxy@gmail.com?subject=${subject}`;
                window.location.href = mailtoLink;
              }}
              className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/30 font-inter"
            >
              Contact Us for Custom Pricing
            </button>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default Services;