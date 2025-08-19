import React from 'react';
import { ArrowLeft, FileText, Scale, AlertTriangle, Users, Gavel } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const TermsOfService = () => {
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
                <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white font-rajdhani tracking-wide sm:tracking-wider text-center">
                  TERMS OF SERVICE
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
                <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 font-rajdhani">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-200 font-inter leading-relaxed">
                <p>
                  By accessing and using VALAXIA's website and services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 font-rajdhani">Use License</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-200 font-inter leading-relaxed">
                <p>
                  Permission is granted to temporarily download one copy of VALAXIA's materials for personal, non-commercial transitory viewing only.
                </p>
                <p>This license shall automatically terminate if you violate any of these restrictions.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes</li>
                  <li>Attempt to reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                </ul>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 font-rajdhani">Disclaimer</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-200 font-inter leading-relaxed">
                <p>
                  The materials on VALAXIA's website are provided on an 'as is' basis. VALAXIA makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                <Gavel className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 font-rajdhani">Limitations</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-200 font-inter leading-relaxed">
                <p>
                  In no event shall VALAXIA or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use VALAXIA's materials, even if VALAXIA or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 font-rajdhani">Contact Information</h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-gray-200 font-inter leading-relaxed">
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-black/50 p-3 sm:p-4 rounded-lg border border-gray-700">
                  <p className="text-gray-300 text-sm sm:text-base break-all">
                    <strong>Email:</strong> valxgalaxy@gmail.com<br />
                    <strong>Subject:</strong> Terms of Service Inquiry
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

export default TermsOfService;