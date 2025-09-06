import React from 'react';
import { Star, Quote } from 'lucide-react';
import GlassmorphicCard from './GlassmorphicCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, TechStart Solutions",
      company: "Mumbai",
      rating: 5,
      text: "VALAXIA transformed our business with their exceptional web development services. The team delivered beyond our expectations with a modern, responsive website that increased our online presence significantly.",
      project: "E-commerce Platform",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Priya Sharma",
      position: "Founder, HealthTech Innovations",
      company: "Bangalore",
      rating: 5,
      text: "The mobile app developed by VALAXIA has revolutionized how our patients interact with our healthcare services. Professional, reliable, and innovative - exactly what we needed.",
      project: "Healthcare Mobile App",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Amit Patel",
      position: "CTO, FinanceFlow",
      company: "Delhi",
      rating: 5,
      text: "VALAXIA's AI/ML implementation helped us automate our financial processes, saving 40% of manual work. Their expertise in machine learning is truly impressive.",
      project: "AI-Powered Analytics",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sneha Gupta",
      position: "Operations Manager, RetailMax",
      company: "Pune",
      rating: 5,
      text: "The ERP solution provided by VALAXIA streamlined our entire supply chain management. The team's attention to detail and post-deployment support has been outstanding.",
      project: "Custom ERP System",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Vikram Singh",
      position: "Director, CloudFirst Technologies",
      company: "Hyderabad",
      rating: 5,
      text: "VALAXIA's cloud migration services helped us reduce infrastructure costs by 60% while improving performance. Their DevOps expertise is world-class.",
      project: "Cloud Migration",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Kavya Reddy",
      position: "Product Manager, EduTech Solutions",
      company: "Chennai",
      rating: 5,
      text: "The SaaS platform developed by VALAXIA has scaled to serve over 10,000 users seamlessly. Their technical expertise and project management skills are exceptional.",
      project: "Educational SaaS Platform",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-rajdhani tracking-wide">
            Client Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Hear from businesses that have transformed with VALAXIA's solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassmorphicCard 
              key={index} 
              className="p-8 group hover:scale-105 transition-all duration-500"
              delay={index * 150}
            >
              <div className="relative">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blue-400/50 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 font-inter text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Project Tag */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 font-inter">
                    {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
                  />
                  <div>
                    <h4 className="text-white font-semibold font-rajdhani">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm font-inter">
                      {testimonial.position}
                    </p>
                    <p className="text-gray-500 text-xs font-inter">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            </GlassmorphicCard>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <GlassmorphicCard className="inline-block p-6 mx-4">
            <h3 className="text-xl font-bold text-white mb-4 font-rajdhani">
              Ready to Join Our Success Stories?
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-inter"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassmorphicCard>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;