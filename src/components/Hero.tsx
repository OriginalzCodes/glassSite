import React from 'react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const backgroundImages = [
    'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1920'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Infinite Sliding Background */}
      <div className="absolute inset-0 z-0">
        <div className="flex animate-slide-infinite">
          {/* First set of images */}
          {backgroundImages.map((image, index) => (
            <div
              key={`first-${index}`}
              className="min-w-full h-screen bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {backgroundImages.map((image, index) => (
            <div
              key={`second-${index}`}
              className="min-w-full h-screen bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Sparkling
                </span>
                <br />
                <span className="text-white">
                  Clean Homes
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Professional cleaning services that transform your space into a pristine sanctuary. 
                Experience the difference with our eco-friendly approach and attention to detail.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Shield, text: 'Insured & Bonded' },
                { icon: Star, text: '5-Star Rated' },
                { icon: Clock, text: '24/7 Available' }
              ].map(({ icon: Icon, text }, index) => (
                <div 
                  key={text}
                  className="flex flex-col items-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-6 h-6 text-blue-400 mb-2" />
                  <span className="text-sm font-medium text-gray-300 text-center">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-gray-200 font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <Star className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Premium Service</h3>
                  <p className="text-gray-300">Experience the difference</p>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-300">
                  Available Now
                </span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-500%);
          }
        }
        .animate-slide-infinite {
          animation: slide-infinite 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;