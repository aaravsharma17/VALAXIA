import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';
import { submitContactMessage } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      // Try to submit to Supabase first
      const result = await submitContactMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'General Inquiry',
        message: formData.message
      });
      
      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
        
        // Reset form after successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        throw new Error('Database submission failed');
      }
    } catch (error) {
      // Fallback to email client
      console.log('Using email fallback:', error);
      const subject = encodeURIComponent(formData.subject || 'Contact Form Submission - VALAXIA');
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'General Inquiry'}

Message:
${formData.message}

---
Submitted from VALAXIA Contact Form
Timestamp: ${new Date().toLocaleString()}
      `);
      
      window.location.href = `mailto:valxgalaxy@gmail.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus('success');
      setStatusMessage('Opening your email client with pre-filled details. Please send the email to complete your message.');
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (platform: string) => {
    const links = {
      linkedin: 'https://linkedin.com/company/valx-llp',
      github: 'https://github.com/valx-llp'
    };
    
    if (links[platform as keyof typeof links]) {
      window.open(links[platform as keyof typeof links], '_blank');
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden transition-all duration-1000">
      {/* Infinite Void Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-800/30 via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white mb-6 font-rajdhani tracking-wide sm:tracking-wider uppercase px-4">
            Connect with VALAXIA
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-6 max-w-3xl mx-auto font-inter px-4">
            Let's build something amazing together
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 font-inter px-4">
            Ready to transform your business with cutting-edge software solutions? Let's discuss your project.
          </p>
          <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-gray-400 to-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 animate-scale-in px-4">
          {/* Contact Form */}
          <div className="relative animate-slide-in-left">
            <GlassmorphicCard className="p-6 sm:p-8 lg:p-10 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Status Message */}
                {submitStatus !== 'idle' && (
                  <div className={`p-4 rounded-lg border flex items-center gap-3 ${
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

                <div>
                  <label htmlFor="name" className="block text-base sm:text-lg font-medium text-gray-300 mb-3 font-inter tracking-wide">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300 text-base sm:text-lg transform focus:scale-105"
                    placeholder="Your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-300 mb-3 font-inter tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300 text-base sm:text-lg transform focus:scale-105"
                    placeholder="your.email@domain.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-base sm:text-lg font-medium text-gray-300 mb-3 font-inter tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300 text-base sm:text-lg transform focus:scale-105"
                    placeholder="Project inquiry, consultation, etc."
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-base sm:text-lg font-medium text-gray-300 mb-3 font-inter tracking-wide">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300 resize-none text-base sm:text-lg transform focus:scale-105"
                    placeholder="Tell us about your project requirements, budget, timeline, or any specific questions..."
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-gray-600/80 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white font-semibold rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-400/50 hover:rotate-1 font-inter tracking-wide text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                </button>

                {/* Form Info */}
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-400 font-inter">
                    Messages are delivered directly to our team inbox within minutes
                  </p>
                </div>
              </form>
            </GlassmorphicCard>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 sm:space-y-10 animate-slide-in-right">
            <GlassmorphicCard className="p-6 sm:p-8 lg:p-10 transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-6 font-rajdhani tracking-wide">Get In Touch</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed font-inter">
                Ready to discuss your next software project? We're here to help bring your vision to life.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group cursor-pointer transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full p-3 sm:p-4 shadow-lg shadow-gray-500/50 group-hover:animate-float flex-shrink-0">
                    <Mail className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm sm:text-base mb-1 font-inter">Email</p>
                    <a 
                      href="mailto:valxgalaxy@gmail.com" 
                      className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg lg:text-xl font-inter break-all"
                    >
                      valxgalaxy@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group cursor-pointer transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full p-3 sm:p-4 shadow-lg shadow-gray-500/50 group-hover:animate-float flex-shrink-0">
                    <MapPin className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm sm:text-base mb-1 font-inter">Location</p>
                    <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-inter">Global</p>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="mt-8 p-4 bg-black/40 rounded-lg border border-gray-600/30">
                <h4 className="text-lg font-semibold text-gray-300 mb-3 font-rajdhani">Response Time</h4>
                <div className="space-y-2 text-sm text-gray-400 font-inter">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>General inquiries: Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <span>Project consultations: Within 48 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span>Enterprise solutions: Within 72 hours</span>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>

            {/* Quick Contact Options */}
            <GlassmorphicCard className="p-6 sm:p-8 transition-all duration-500 transform hover:scale-105 hover:-rotate-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-6 font-rajdhani tracking-wide">Quick Contact</h3>
              
              <div className="space-y-4">
                <button 
                  onClick={() => {
                    const subject = encodeURIComponent('Project Consultation Request - VALAXIA');
                    const body = encodeURIComponent('Hi VALAXIA team,\n\nI would like to discuss a project consultation.\n\nProject Type: \nBudget Range: \nTimeline: \n\nPlease let me know your availability.\n\nBest regards,');
                    window.location.href = `mailto:valxgalaxy@gmail.com?subject=${subject}&body=${body}`;
                  }}
                  className="w-full p-4 bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-lg text-blue-300 hover:text-white hover:bg-blue-600/30 transition-all duration-300 transform hover:scale-105 font-inter text-sm sm:text-base"
                >
                  📋 Request Project Consultation
                </button>
                
                <button 
                  onClick={() => {
                    const subject = encodeURIComponent('Service Pricing Inquiry - VALAXIA');
                    const body = encodeURIComponent('Hi VALAXIA team,\n\nI am interested in learning more about your services and pricing.\n\nService of Interest: \nProject Scope: \nBudget Range: \n\nPlease provide detailed information.\n\nThank you,');
                    window.location.href = `mailto:valxgalaxy@gmail.com?subject=${subject}&body=${body}`;
                  }}
                  className="w-full p-4 bg-gradient-to-r from-green-600/20 to-green-800/20 border border-green-500/30 rounded-lg text-green-300 hover:text-white hover:bg-green-600/30 transition-all duration-300 transform hover:scale-105 font-inter text-sm sm:text-base"
                >
                  💰 Get Service Pricing
                </button>
                
                <button 
                  onClick={() => {
                    const subject = encodeURIComponent('Partnership Opportunity - VALAXIA');
                    const body = encodeURIComponent('Hi VALAXIA team,\n\nI would like to explore partnership opportunities.\n\nCompany: \nPartnership Type: \nProposal: \n\nLooking forward to hearing from you.\n\nBest regards,');
                    window.location.href = `mailto:valxgalaxy@gmail.com?subject=${subject}&body=${body}`;
                  }}
                  className="w-full p-4 bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-lg text-purple-300 hover:text-white hover:bg-purple-600/30 transition-all duration-300 transform hover:scale-105 font-inter text-sm sm:text-base"
                >
                  🤝 Partnership Inquiry
                </button>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
  );
};

export default Contact;