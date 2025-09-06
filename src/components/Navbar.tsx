import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile App Development', path: '/services/mobile-app-development' },
    { name: 'SaaS Development', path: '/services/saas-development' },
    { name: 'ERP/CRM Solutions', path: '/services/erp-crm-solutions' },
    { name: 'AI/ML Implementation', path: '/services/ai-ml-implementation' },
    { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
    { name: 'Cybersecurity', path: '/services/cybersecurity' },
    { name: 'Software Audit', path: '/services/software-audit' },
    { name: 'Automation & Integration', path: '/services/automation-integration' },
    { name: 'IT Consulting', path: '/services/it-consulting' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-lg border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/Gemini_Generated_Image_tsdpx3tsdpx3tsdp.png" 
              alt="VALAXIA" 
              className="h-8 lg:h-10 w-auto group-hover:scale-110 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-bold text-white font-rajdhani tracking-wider">
                VALAXIA
              </span>
              <div className="text-xs text-gray-400 font-inter">Technology Galaxy</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-300 hover:text-white transition-colors font-inter ${
                location.pathname === '/' ? 'text-white border-b border-white/50' : ''
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-inter">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-2xl">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors font-inter"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className={`text-gray-300 hover:text-white transition-colors font-inter ${
                location.pathname === '/about' ? 'text-white border-b border-white/50' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`text-gray-300 hover:text-white transition-colors font-inter ${
                location.pathname === '/projects' ? 'text-white border-b border-white/50' : ''
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 font-inter"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors font-inter"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-inter w-full text-left"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors font-inter"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors font-inter"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors font-inter"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors font-inter"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;