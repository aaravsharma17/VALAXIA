import React from 'react';
import { useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Service Pages
const WebDevelopment = React.lazy(() => import('./pages/services/WebDevelopment'));
const MobileAppDevelopment = React.lazy(() => import('./pages/services/MobileAppDevelopment'));
const SaaSDevelopment = React.lazy(() => import('./pages/services/SaaSDevelopment'));
const ERPCRMSolutions = React.lazy(() => import('./pages/services/ERPCRMSolutions'));
const AIMLImplementation = React.lazy(() => import('./pages/services/AIMLImplementation'));
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const CybersecurityServices = React.lazy(() => import('./pages/services/CybersecurityServices'));
const SoftwareAudit = React.lazy(() => import('./pages/services/SoftwareAudit'));
const AutomationIntegration = React.lazy(() => import('./pages/services/AutomationIntegration'));
const ITConsulting = React.lazy(() => import('./pages/services/ITConsulting'));

// Other Pages
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./components/TermsOfService'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <img 
            src="/Gemini_Generated_Image_tsdpx3tsdpx3tsdp.png" 
            alt="VALAXIA" 
            className="w-64 h-auto mx-auto mb-8 opacity-80"
          />
          <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
          <p className="text-white/60 mt-4 font-inter">Loading VALAXIA...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <ServicesOverview />
                <Testimonials />
                <About />
                <Projects />
                <Contact />
                <Footer />
              </>
            } />
            
            {/* Service Pages */}
            <Route path="/services/web-development" element={<><Navbar /><WebDevelopment /><Footer /></>} />
            <Route path="/services/mobile-app-development" element={<><Navbar /><MobileAppDevelopment /><Footer /></>} />
            <Route path="/services/saas-development" element={<><Navbar /><SaaSDevelopment /><Footer /></>} />
            <Route path="/services/erp-crm-solutions" element={<><Navbar /><ERPCRMSolutions /><Footer /></>} />
            <Route path="/services/ai-ml-implementation" element={<><Navbar /><AIMLImplementation /><Footer /></>} />
            <Route path="/services/cloud-devops" element={<><Navbar /><CloudDevOps /><Footer /></>} />
            <Route path="/services/cybersecurity" element={<><Navbar /><CybersecurityServices /><Footer /></>} />
            <Route path="/services/software-audit" element={<><Navbar /><SoftwareAudit /><Footer /></>} />
            <Route path="/services/automation-integration" element={<><Navbar /><AutomationIntegration /><Footer /></>} />
            <Route path="/services/it-consulting" element={<><Navbar /><ITConsulting /><Footer /></>} />
            
            {/* Other Pages */}
            <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
            <Route path="/projects" element={<><Navbar /><ProjectsPage /><Footer /></>} />
            <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /></>} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;