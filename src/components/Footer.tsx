import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                SparkleClean
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional cleaning services that transform your space into a pristine sanctuary. 
              Experience the difference with our eco-friendly approach.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl flex items-center justify-center hover:bg-slate-700/60 hover:border-slate-600/60 transition-all duration-200"
                >
                  <Icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Residential Cleaning',
                'Commercial Cleaning',
                'Deep Cleaning',
                'Vehicle Cleaning',
                'Window Cleaning',
                'Upholstery Cleaning'
              ].map((service) => (
                <li key={service}>
                  <button 
                    onClick={() => scrollToSection('#services')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Book Now', href: '#book-now' }
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Clean Street, Sparkle City, SC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">
                  (555) 123-CLEAN
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">
                  hello@sparkleclean.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2024 SparkleClean. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;