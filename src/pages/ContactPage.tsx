import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { submitContactMessage } from '../lib/supabase';

const ContactPage = () => {
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
      const result = await submitContactMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'General Inquiry',
        message: formData.message
      });
      
      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Message sent successfully! We\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Database submission failed');
      }
    } catch (error) {
      const subject = encodeURIComponent(formData.subject || 'Contact Form Submission - VALAXIA');
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'General Inquiry'}

Message:
${formData.message}
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "valxgalaxy@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Global Services",
      description: "Serving clients worldwide"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "24-48 Hours",
      description: "Quick response guaranteed"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 font-rajdhani tracking-wide">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's discuss your project 
            and explore how VALAXIA can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <GlassmorphicCard key={index} className="p-8 text-center group hover:scale-105 transition-all duration-500">
                <info.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2 font-rajdhani">{info.title}</h3>
                <p className="text-lg text-gray-300 mb-2 font-inter">{info.details}</p>
                <p className="text-gray-400 text-sm font-inter">{info.description}</p>
              </GlassmorphicCard>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <GlassmorphicCard className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 font-rajdhani">
                  Send Us a Message
                </h2>
                <p className="text-gray-300 font-inter">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-inter">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-inter">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                      placeholder="your.email@domain.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-inter">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-inter">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, requirements, timeline, or any questions you have..."
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full group relative px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed font-inter tracking-wide"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                </button>
              </form>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 px-6 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-rajdhani">
              Quick Contact Options
            </h2>
            <p className="text-gray-300 font-inter">
              Choose the fastest way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button 
              onClick={() => {
                const subject = encodeURIComponent('Project Consultation Request - VALAXIA');
                window.location.href = `mailto:valxgalaxy@gmail.com?subject=${subject}`;
              }}
              className="p-6 bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-lg text-blue-300 hover:text-white hover:bg-blue-600/30 transition-all duration-300 transform hover:scale-105 font-inter"
            >
              <div className="text-2xl mb-2">📋</div>
              <div className="font-semibold mb-1">Project Consultation</div>
              <div className="text-sm opacity-80">Discuss your project requirements</div>
            </button>
            
            <button 
              onClick={() => {
                const subject = encodeURIComponent('Service Pricing Inquiry - VALAXIA');
                window.location.href = `mailto:valxgalaxy@gmail.com?subject=${subject}`;
              }}
              className="p-6 bg-gradient-to-r from-green-600/20 to-green-800/20 border border-green-500/30 rounded-lg text-green-300 hover:text-white hover:bg-green-600/30 transition-all duration-300 transform hover:scale-105 font-inter"
            >
              <div className="text-2xl mb-2">💰</div>
              <div className="font-semibold mb-1">Get Pricing</div>
              <div className="text-sm opacity-80">Request detailed pricing information</div>
            </button>
            
            <button 
              onClick={() => {
                const subject = encodeURIComponent('Partnership Opportunity - VALAXIA');
                window.location.href = `mailto:valxgalaxy@gmail.com?subject=${subject}`;
              }}
              className="p-6 bg-gradient-to-r from-purple-600/20 to-purple-800/20 border border-purple-500/30 rounded-lg text-purple-300 hover:text-white hover:bg-purple-600/30 transition-all duration-300 transform hover:scale-105 font-inter"
            >
              <div className="text-2xl mb-2">🤝</div>
              <div className="font-semibold mb-1">Partnership</div>
              <div className="text-sm opacity-80">Explore partnership opportunities</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;