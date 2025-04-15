
import React from 'react';
import SectionContainer from '../SectionContainer';
import { BarChart3, BellRing, TrendingUp, CheckCircle, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 size={28} className="text-accent" />,
    title: "AI-Powered Trade Calls",
    description: "Our advanced algorithm generates 20-30 trade signals per day with remarkable precision, identifying profitable opportunities across the market."
  },
  {
    icon: <CheckCircle size={28} className="text-crypto-success" />,
    title: "Curated Top Picks",
    description: "Our expert analyst team filters the signals to deliver only 3-4 high-confidence trades daily, ensuring quality over quantity."
  },
  {
    icon: <TrendingUp size={28} className="text-crypto-warning" />,
    title: "89% Success Rate",
    description: "Consistently achieve an industry-leading 89% win rate on trade calls, maximizing your profit potential in any market condition."
  },
  {
    icon: <Shield size={28} className="text-accent" />,
    title: "Expert-Built Technology",
    description: "Developed by a Forbes-featured analyst with extensive crypto experience and deep market knowledge."
  },
  {
    icon: <BellRing size={28} className="text-crypto-success" />,
    title: "Real-Time Alerts",
    description: "Receive instant notifications for entry points, take profit targets, and stop losses so you never miss a trading opportunity."
  },
  {
    icon: <Zap size={28} className="text-crypto-warning" />,
    title: "Standalone Access",
    description: "Use our bot independently without needing to join any community or group. Simple, direct access to powerful trading insights."
  }
];

const FeaturesSection = () => {
  return (
    <SectionContainer 
      id="features"
      className="bg-gradient-to-b from-crypto-dark via-crypto-blue to-crypto-purple py-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Advanced Trading Intelligence
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          Our AI-powered platform combines cutting-edge technology with expert analysis to deliver exceptional trading results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="crypto-card p-6 transition-all duration-300 hover:translate-y-[-5px]"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-white/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturesSection;
