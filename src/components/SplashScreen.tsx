import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [logoScale, setLogoScale] = useState(0);
  const [textOpacity, setTextOpacity] = useState(0);
  const [particlesVisible, setParticlesVisible] = useState(false);

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => setLogoScale(1), 100);
    const timer2 = setTimeout(() => setTextOpacity(1), 800);
    const timer3 = setTimeout(() => setParticlesVisible(true), 1200);
    const timer4 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 transition-opacity duration-500 opacity-0 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-50 flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating Particles */}
      {particlesVisible && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative text-center">
        {/* Logo Container */}
        <div className="relative mb-8">
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-50"
            style={{
              transform: `scale(${logoScale * 1.5})`,
              transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          />
          
          {/* Logo */}
          <div 
            className="relative w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{
              transform: `scale(${logoScale}) rotateY(${logoScale * 360}deg)`,
              transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <Sparkles className="w-16 h-16 text-white" />
          </div>

          {/* Rotating Ring */}
          <div 
            className="absolute inset-0 border-2 border-cyan-400/30 rounded-3xl"
            style={{
              transform: `scale(${logoScale * 1.2})`,
              animation: logoScale ? 'spin 3s linear infinite' : 'none',
              transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          />
        </div>

        {/* Company Name */}
        <div 
          className="space-y-4"
          style={{
            opacity: textOpacity,
            transform: `translateY(${(1 - textOpacity) * 20}px)`,
            transition: 'all 0.8s ease-out'
          }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Effect Facility
          </h1>
          <p className="text-xl text-gray-300 font-light">
            Professional Cleaning Services
          </p>
          
          {/* Loading Bar */}
          <div className="w-64 h-1 bg-slate-700 rounded-full mx-auto mt-8 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              style={{
                width: '100%',
                animation: 'loading 4s ease-out forwards'
              }}
            />
          </div>
        </div>

        {/* Pulse Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full"
            style={{
              animation: particlesVisible ? 'pulse-ring 2s ease-out infinite' : 'none'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-blue-400/20 rounded-full"
            style={{
              animation: particlesVisible ? 'pulse-ring 2s ease-out infinite 0.5s' : 'none'
            }}
          />
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes spin {
          from { transform: scale(1.2) rotate(0deg); }
          to { transform: scale(1.2) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;