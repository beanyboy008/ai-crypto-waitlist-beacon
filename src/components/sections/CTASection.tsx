
import React from 'react';
import SectionContainer from '../SectionContainer';
import EmailSignupForm from '../EmailSignupForm';
import { Check } from 'lucide-react';

const benefits = [
  "Priority access when we launch",
  "Early bird pricing (40% discount)",
  "Free 14-day trial period",
  "Exclusive educational content"
];

const CTASection = () => {
  return (
    <SectionContainer className="bg-gradient-to-b from-crypto-blue to-crypto-dark py-24" id="join">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Secure Your Spot on the Waitlist Today
        </h2>
        
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join over 1,500 traders who are already on the waitlist to gain early access to our AI Crypto Bot with proven 89% success rate.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center crypto-card p-4"
            >
              <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                <Check className="h-5 w-5 text-accent" />
              </div>
              <p className="text-white text-sm text-center">{benefit}</p>
            </div>
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-crypto-success rounded-lg opacity-30 blur"></div>
          <div className="crypto-card p-8 relative">
            <h3 className="text-2xl font-bold text-white mb-6">
              Join the Waitlist Now
            </h3>
            
            <div className="flex justify-center">
              <EmailSignupForm 
                darkBg={true} 
                buttonText="Reserve My Spot" 
                className="max-w-md mx-auto"
              />
            </div>
            
            <p className="mt-4 text-white/60 text-sm">
              We respect your privacy. No spam, just updates about launch dates and early access.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CTASection;
