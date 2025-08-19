import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, Mail } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const PrivacyPolicy = () => {
  const handleBackClick = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black pointer-events-none" />
      
      <div className="relative z-10 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <button 
              onClick={handleBackClick}
              className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors mb-6 sm:mb-8 font-inter text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to VALAXIA
            </button>
            
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
                <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white font-rajdhani tracking-wide sm:tracking-wider text-center">
                  PRIVACY POLICY
                </h1>
              </div>
              <p className="text-gray-300 text-base sm:text-lg font-inter">
                Last updated: January 2025
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <GlassmorphicCard className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 font-rajdhani">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-200 font-inter leading-relaxed">
                <p>
                  At VALAXIA, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact us through our website forms</li>
                  <li>Subscribe to our newsletters or updates</li>
                  <li>Request information about our services</li>
                  <li>Engage with our customer support</li>
                </ul>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                <Database className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 font-rajdhani">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-200 font-inter leading-relaxed">
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices and security alerts</li>
                  <li>Communicate with you about our services and updates</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 font-rajdhani">Data Security</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-200 font-inter leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 font-rajdhani">Contact Us</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-200 font-inter leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-black/50 p-3 sm:p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-300 text-sm sm:text-base break-all">
                    <strong>Email:</strong> valxgalaxy@gmail.com<br />
                    <strong>Subject:</strong> Privacy Policy Inquiry
                  </p>
                </div>
              </div>
            </GlassmorphicCard>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 font-inter text-sm sm:text-base">
              © 2025 VALAXIA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;