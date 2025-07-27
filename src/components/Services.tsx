import React from 'react';
import { Home, Building, Sparkles, Car, Sofa, AppWindow as Window } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Complete Officescleaning services including kitchens, bathrooms, bedrooms, and living areas.',
      price: 'From $89',
      features: ['Deep cleaning', 'Regular maintenance', 'Eco-friendly products']
    },
    {
      icon: Building,
      title: 'Commercial Cleaning',
      description: 'Professional office and commercial space cleaning for businesses of all sizes.',
      price: 'From $149',
      features: ['Office spaces', 'Retail stores', 'Flexible scheduling']
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Intensive cleaning service perfect for move-ins, move-outs, or seasonal cleaning.',
      price: 'From $199',
      features: ['Top to bottom', 'Inside appliances', 'Detailed cleaning']
    },
    {
      icon: Car,
      title: 'Vehicle Cleaning',
      description: 'Professional car detailing and cleaning services for your vehicles.',
      price: 'From $79',
      features: ['Interior & exterior', 'Wax & polish', 'Engine cleaning']
    },
    {
      icon: Sofa,
      title: 'Upholstery Cleaning',
      description: 'Specialized cleaning for furniture, carpets, and delicate fabrics.',
      price: 'From $59',
      features: ['Furniture cleaning', 'Carpet cleaning', 'Stain removal']
    },
    {
      icon: Window,
      title: 'Window Cleaning',
      description: 'Crystal clear window cleaning for residential and commercial properties.',
      price: 'From $39',
      features: ['Interior & exterior', 'Screen cleaning', 'Streak-free finish']
    }
  ];

  const scrollToBooking = () => {
    const element = document.querySelector('#book-now');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cleaning solutions tailored to your needs. From residential to commercial, 
            we deliver exceptional results with attention to every detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-3xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 hover:bg-slate-700/40 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  {service.price}
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToBooking}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Book Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;