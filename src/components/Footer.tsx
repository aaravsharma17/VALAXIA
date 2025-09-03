import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, FileText, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Void Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-red-950/20 to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full p-2 sm:p-3 shadow-lg shadow-gray-900/50">
              <Sparkles className="w-full h-full text-white animate-pulse" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300 font-rajdhani tracking-wide">
              VALAXIA
            </h3>
          </div>
          
          <p className="text-gray-300 text-lg sm:text-xl font-inter tracking-wide">
            Technology Galaxy
          </p>
        </div>

        <div className="border-t border-gray-800/30 pt-8 sm:pt-10 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-gray-500 text-sm sm:text-base font-inter">
              © 2025 VALAXIA. All rights reserved.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <Link 
                to="/privacy-policy"
                className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm sm:text-base font-inter hover:underline"
              >
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service"
                className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors text-sm sm:text-base font-inter hover:underline"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
