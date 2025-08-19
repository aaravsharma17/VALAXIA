import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mailto link with proper encoding
      const subject = encodeURIComponent(`VALAXIA Contact: ${formData.name}`);
      const body = encodeURIComponent(
        `Contact Form Submission\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `---\nSent from VALAXIA website contact form`
      );
      
      const mailtoLink = `mailto:valxgalaxy@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message (optional)
      alert('Thank you for your message! Your email client should open now.');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
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
    <section id="contact" className="relative py-24 px-6 overflow-hidden transition-all duration-1000">
      {/* Infinite Void Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-800/30 via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
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
              <form onSubmit={handleSubmit} className="relative space-y-8">
                <div>
                  <label htmlFor="name" className="block text-base sm:text-lg font-medium text-gray-300 mb-3 font-inter tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300 text-base sm:text-lg transform focus:scale-105"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-300 mb-3 font-inter tracking-wide">
                    Email Address
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
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-base sm:text-lg font-medium text-gray-300 mb-3 font-inter tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/60 border border-gray-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/30 transition-all duration-300 resize-none text-base sm:text-lg transform focus:scale-105"
                    placeholder="Tell us about your project or idea..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-gray-600/80 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white font-semibold rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-400/50 hover:rotate-1 font-inter tracking-wide text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-2'}`} />
                  </div>
                </button>
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
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;