import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle } from 'lucide-react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    'Residential Cleaning',
    'Commercial Cleaning',
    'Deep Cleaning',
    'Vehicle Cleaning',
    'Upholstery Cleaning',
    'Window Cleaning'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="book-now" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center p-8 sm:p-12 rounded-3xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 shadow-2xl">
            <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-400 mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 px-4">
              Thank you for choosing Effect Facility ! We'll contact you shortly to confirm your appointment details.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  address: '',
                  service: '',
                  date: '',
                  time: '',
                  message: ''
                });
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Book Another Service
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-now" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Book Your Service
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Schedule your cleaning service in just a few clicks. Choose your preferred date, time, and service type.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-12 rounded-3xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Personal Information
                </h3>
                
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-white placeholder-gray-400"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-white placeholder-gray-400"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-white placeholder-gray-400"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="address"
                    placeholder="Service Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Service Details
                </h3>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 rounded-2xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-white"
                  >
                    <option value="" className="bg-slate-800">Select Service</option>
                    {services.map(service => (
                      <option key={service} value={service} className="bg-slate-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-white"
                  />
                </div>

                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-white"
                  >
                    <option value="" className="bg-slate-800">Select Time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time} className="bg-slate-800">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Additional notes or special requests..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-4 rounded-2xl bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 text-white placeholder-gray-400 resize-none"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 disabled:scale-100 disabled:shadow-none"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  'Book Service Now'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );

  
};

export default Booking;