import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import DealersSection from './components/sections/DealersSection';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <DealersSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
