import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return (
      <ThemeProvider>
        <SplashScreen onComplete={handleSplashComplete} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Services />
          <Reviews />
          <Booking />
        </main>
        <Footer />
        <WhatsAppChat />
      </div>
    </ThemeProvider>
  );
}

export default App;