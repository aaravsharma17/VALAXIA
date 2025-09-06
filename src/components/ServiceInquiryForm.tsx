import React, { useState } from 'react';
import { ArrowLeft, Send, CheckCircle, AlertCircle, IndianRupee, Clock, Star, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from './GlassmorphicCard';
import { submitServiceInquiry, ServiceInquiry } from '../lib/supabase';

interface ServiceInquiryFormProps {
  service: {
    title: string;
    tiers: Array<{
      name: string;
      price: string;
      features: string[];
      delivery: string;
      color: string;
    }>;
    icon: React.ComponentType<any>;
  };
  selectedTier: number;
  onBack: () => void;
}

const ServiceInquiryForm = ({ service, selectedTier, onBack }: ServiceInquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    project_description: '',
    budget_range: '',
    timeline: '',
    additional_requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const inquiry: Omit<ServiceInquiry, 'id' | 'created_at'> = {
        service_type: service.title,
        tier: service.tiers[selectedTier].name,
        ...formData,
        budget_range: formData.budget_range || service.tiers[selectedTier].price
      };

      const result = await submitServiceInquiry(inquiry);
      
      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Your inquiry has been submitted successfully! We\'ll contact you within 24 hours.');
        setFormData({
          name: '', email: '', company: '', phone: '', 
          project_description: '', budget_range: '', timeline: '', additional_requirements: ''
        });
      } else {
        throw new Error('Database submission failed');
      }
    } catch (error) {
      const subject = encodeURIComponent(`${service.title} - ${service.tiers[selectedTier].name} Tier Inquiry`);
      const body = encodeURIComponent(`
Service: ${service.title}
Tier: ${service.tiers[selectedTier].name} (${service.tiers[selectedTier].price})

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}

Project Description:
${formData.project_description}

Budget Range: ${formData.budget_range || service.tiers[selectedTier].price}
Timeline: ${formData.timeline}

Additional Requirements:
${formData.additional_requirements}
      `);
      
      window.location.href = `mailto:valxgalaxy@gmail.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus('success');
      setStatusMessage('Opening your email client with pre-filled details.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={onBack}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-inter hover:underline"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to {service.title}
              </button>
              <div className="w-px h-6 bg-gray-600"></div>
              <Link 
                to="/"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-inter text-sm hover:underline"
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full p-4 shadow-lg">
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-rajdhani tracking-wide">
                  {service.title} Inquiry
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Selected Tier Details */}
            <div>
              <GlassmorphicCard className="p-8 sticky top-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {selectedTier === 1 && <Star className="w-6 h-6 text-yellow-400" />}
                    <h3 className="text-3xl font-bold text-white font-rajdhani">
                      {service.tiers[selectedTier].name} Package
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <IndianRupee className="w-8 h-8 text-gray-300" />
                    <span className="text-4xl font-bold text-white font-inter">
                      {service.tiers[selectedTier].price.replace('₹', '')}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <Clock className="w-5 h-5" />
                    <span className="font-inter">{service.tiers[selectedTier].delivery}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-lg font-semibold text-gray-300 font-rajdhani">What's Included:</h4>
                  {service.tiers[selectedTier].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 font-inter text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-black/50 rounded-lg border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-gray-300 mb-3 font-rajdhani">Process Timeline</h4>
                  <div className="space-y-2 text-sm text-gray-400 font-inter">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Project consultation & planning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Design & development phase</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>Testing & quality assurance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>Deployment & launch</span>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>

            {/* Inquiry Form */}
            <div>
              <GlassmorphicCard className="p-8">
                <h3 className="text-2xl font-bold text-gray-300 mb-6 font-rajdhani">Project Details</h3>
                
                {/* Status Message */}
                {submitStatus !== 'idle' && (
                  <div className={`p-4 rounded-lg border flex items-center gap-3 mb-6 ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/20 border-green-500/30 text-green-300' 
                      : 'bg-red-500/20 border-red-500/30 text-red-300'
                  }`}>
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-inter">{statusMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-inter">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300"
                        placeholder="Your full name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-inter">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300"
                        placeholder="your.email@domain.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-inter">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300"
                        placeholder="Your company name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-inter">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300"
                        placeholder="+91 XXXXX XXXXX"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-inter">Project Description *</label>
                    <textarea
                      name="project_description"
                      value={formData.project_description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300 resize-none"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2 font-inter">Budget Range</label>
                      <select
                        name="budget_range"
                        value={formData.budget_range}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        <option value="">Select budget range</option>
                        <option value="₹50K - ₹1L">₹50K - ₹1L</option>
                        <option value="₹1L - ₹3L">₹1L - ₹3L</option>
                        <option value="₹3L - ₹5L">₹3L - ₹5L</option>
                        <option value="₹5L - ₹10L">₹5L - ₹10L</option>
                        <option value="₹10L+">₹10L+</option>
                        <option value="Custom">Custom Budget</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-inter">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                        <option value="12+ months">12+ months</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-inter">Additional Requirements</label>
                    <textarea
                      name="additional_requirements"
                      value={formData.additional_requirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300 resize-none"
                      placeholder="Any specific technologies, integrations, or special requirements..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.project_description}
                    className="w-full group relative px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed font-inter tracking-wide"
                  >
                    <div className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          Submit Project Inquiry
                          <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </button>

                  <div className="text-center">
                    <p className="text-xs text-gray-400 font-inter">
                      Your inquiry will be reviewed by our team within 24 hours
                    </p>
                  </div>
                </form>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInquiryForm;