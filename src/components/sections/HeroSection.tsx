
import React from 'react';
import { ArrowDown } from 'lucide-react';
import EmailSignupForm from '../EmailSignupForm';

const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-hero-pattern overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-crypto-purple/30 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/10 backdrop-blur-sm inline-block px-4 py-2 rounded-full mb-6">
            <p className="text-white/90 text-sm md:text-base font-medium">
              <span className="text-accent">89% Success Rate</span> ⚡ AI-Powered Crypto Trading Signals
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="gradient-text">AI-Powered</span> Crypto Trading Bot That Actually Works
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join the waitlist for exclusive access to our Forbes-featured trading bot with proven 89% win rate, delivering 3-4 high-confidence signals daily.
          </p>
          
          <div className="flex justify-center mb-12">
            <EmailSignupForm darkBg={true} />
          </div>
          
          <div className="flex gap-8 justify-center items-center flex-wrap">
            <div className="crypto-card px-4 py-3 flex items-center gap-2">
              <div className="h-2 w-2 bg-accent rounded-full"></div>
              <p className="text-white text-sm md:text-base">20-30 Daily Signals</p>
            </div>
            
            <div className="crypto-card px-4 py-3 flex items-center gap-2">
              <div className="h-2 w-2 bg-accent rounded-full"></div>
              <p className="text-white text-sm md:text-base">Forbes-Featured Analysis</p>
            </div>
            
            <div className="crypto-card px-4 py-3 flex items-center gap-2">
              <div className="h-2 w-2 bg-accent rounded-full"></div>
              <p className="text-white text-sm md:text-base">Battle-Tested Algorithm</p>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="animate-bounce" size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
