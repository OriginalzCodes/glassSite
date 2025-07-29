import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    'https://plus.unsplash.com/premium_photo-1661664673975-fc0f7f01af79?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661721792327-84468396c9ef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1627905646269-7f034dcc5738?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://plus.unsplash.com/premium_photo-1663011218145-c1d0c3ba3542?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const scrollToBooking = () => {
    const element = document.querySelector('#book-now');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" // <-- add pt-16
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Cleaning service ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80"></div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl flex items-center justify-center hover:bg-slate-700/40 transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-2xl flex items-center justify-center hover:bg-slate-700/40 transition-all duration-300 z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Effect Facility 
                </span>
                <br />
                <span className="text-white">
                  Clean Homes
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Professional cleaning services that transform your space into a pristine sanctuary. 
                Experience the difference with our eco-friendly approach and attention to detail.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto lg:max-w-none">
              {[
                { icon: Shield, text: 'Insured & Bonded' },
                { icon: Star, text: '5-Star Rated' },
                { icon: Clock, text: '24/7 Available' }
              ].map(({ icon: Icon, text }, index) => (
                <div 
                  key={text}
                  className="flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 hover:bg-slate-700/40 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium text-gray-300 text-center">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToBooking}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={scrollToServices}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 text-gray-300 font-semibold rounded-2xl hover:bg-slate-700/40 hover:text-white transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

            {/* Glass Card */}
            <div className="relative mt-8 lg:mt-0">
            {/* Carousel for Glass Cards */}
            <div className="relative p-0 sm:p-8 rounded-3xl bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 shadow-2xl overflow-hidden max-w-xs sm:max-w-none mx-auto">
              <div className="relative">
              {/* Glass Card Images */}
              {[
                'https://plus.unsplash.com/premium_photo-1678218571226-0476c150f524?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1626379481874-3dc5678fa8ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'https://images.unsplash.com/photo-1585417238790-f6d290d6490c?q=80&w=1537&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              ].map((img, idx) => (
                <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  idx === currentSlide % 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                >
                <img
                  src={img}
                  alt={`Glass card ${idx + 1}`}
                  className="w-full h-48 sm:h-64 object-cover rounded-t-3xl"
                />
                </div>
              ))}
              {/* Carousel Controls for Glass Card */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-slate-800/40 rounded-full flex items-center justify-center hover:bg-slate-700/60 transition-all duration-300 z-20"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-slate-700/30 rounded-full flex items-center justify-center hover:bg-slate-600/5                import { createClient } from '@supabase/supabase-js';
                
                const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://your-project.supabase.co';
                const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key';
                
                export const supabase = createClient(supabaseUrl, supabaseAnonKey);                import { createClient } from '@supabase/supabase-js';
                
                const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://your-project.supabase.co';
                const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key';
                
                export const supabase = createClient(supabaseUrl, supabaseAnonKey);0 transition-all duration-300 z-20"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
              {/* Slide Indicators for Glass Card */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide % 3
                    ? 'bg-cyan-400 scale-110'
                    : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
                ))}
              </div>
              </div>
              {/* Card Content */}
              <div className="text-center space-y-4 pt-4 pb-6 px-4 sm:px-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-gray-400 text-sm sm:text-base">Happy Clients</div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-700/30">
                <div className="text-center">
                <div className="text-base sm:text-xl font-bold text-cyan-400">2000+</div>
                <div className="text-xs sm:text-sm text-gray-400">Homes Cleaned</div>
                </div>
                <div className="text-center">
                <div className="text-base sm:text-xl font-bold text-purple-400">5.0</div>
                <div className="text-xs sm:text-sm text-gray-400">Rating</div>
                </div>
              </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="hidden sm:block absolute -top-6 -left-6 p-4 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30">
              <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">
                Available Now
              </span>
              </div>
            </div>
            </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-800/20 backdrop-blur-xl border border-slate-700/30 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/25">
                  <Star className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/30">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-cyan-400">2000+</div>
                    <div className="text-sm text-gray-400">Facilities  Cleaned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-purple-400">5.0</div>
                    <div className="text-sm text-gray-400">Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="hidden sm:block absolute -top-6 -left-6 p-4 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">
                  Available Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default Hero;