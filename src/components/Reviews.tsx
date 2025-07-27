import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely fantastic service! My Offices has never been cleaner. The team was professional, thorough, and used eco-friendly products. Highly recommend Effect Facility !',
      service: 'Residential Cleaning',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Outstanding commercial cleaning service. They transformed our office space completely. Very reliable and always on time. Our employees love the fresh, clean environment.',
      service: 'Commercial Cleaning',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emma Rodriguez',
      rating: 5,
      text: 'The deep cleaning service exceeded my expectations. Every corner of my house sparkles now. The attention to detail is incredible. Worth every penny!',
      service: 'Deep Cleaning',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Thompson',
      rating: 5,
      text: 'Professional, efficient, and thorough. The team cleaned my apartment before I moved in, and it was spotless. Great communication and fair pricing.',
      service: 'Move-in Cleaning',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa Park',
      rating: 5,
      text: 'Amazing window cleaning service! My windows are crystal clear and the team was so careful with all my plants and decorations. Definitely booking again!',
      service: 'Window Cleaning',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Card */}
          <div className="p-6 sm:p-8 lg:p-12 rounded-3xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 transition-all duration-500 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 flex-shrink-0 opacity-50 mx-auto sm:mx-0" />
              
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < reviews[currentReview].rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-500'
                      }`} 
                    />
                  ))}
                </div>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed mb-6 text-center sm:text-left">
                  "{reviews[currentReview].text}"
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-4">
                    <img
                      src={reviews[currentReview].image}
                      alt={reviews[currentReview].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-slate-600/50"
                    />
                    <div>
                      <div className="font-semibold text-white text-center sm:text-left">
                        {reviews[currentReview].name}
                      </div>
                      <div className="text-sm text-gray-400 text-center sm:text-left">
                        {reviews[currentReview].service}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={prevReview}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-slate-700/60 transition-all duration-200"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                    </button>
                    <button
                      onClick={nextReview}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center hover:bg-slate-700/60 transition-all duration-200"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '2000+', label: 'Homes Cleaned' },
            { number: '5.0', label: 'Average Rating' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-4 sm:p-6 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 hover:bg-slate-700/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;