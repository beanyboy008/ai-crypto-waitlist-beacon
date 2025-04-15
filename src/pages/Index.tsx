
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import StatsSection from '@/components/sections/StatsSection';
import ExpertSection from '@/components/sections/ExpertSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-crypto-dark">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <ExpertSection />
        <FAQSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
