
import React from 'react';
import SectionContainer from '../SectionContainer';
import { Award } from 'lucide-react';

const ExpertSection = () => {
  return (
    <SectionContainer className="bg-gradient-to-b from-crypto-purple to-crypto-blue py-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Award className="text-accent" size={18} />
              <span className="text-white text-sm font-medium">Forbes Featured</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built By Industry Experts With Real Market Experience
            </h2>
            
            <div className="space-y-6 text-white/80">
              <p>
                Our AI Crypto Bot was developed by a team led by a Forbes-featured analyst with over a decade of experience in cryptocurrency markets and algorithmic trading.
              </p>
              <p>
                After years of refining our proprietary trading algorithms in professional trading environments, we're now making this technology available to individual traders.
              </p>
              <p>
                The system continuously learns from market data, adapting to changing conditions and improving its predictive accuracy over time.
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                <span className="font-bold text-black">89%</span>
              </div>
              <p className="text-white font-medium">
                Proven success rate across all market conditions
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-crypto-success rounded-lg opacity-30 blur-lg"></div>
              <div className="crypto-card p-8 relative">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: "Years Experience", value: "10+" },
                    { label: "Trades Analyzed", value: "1.2M+" },
                    { label: "Accuracy Improvement", value: "32%" },
                    { label: "Algorithm Iterations", value: "500+" }
                  ].map((item, i) => (
                    <div key={i} className="text-center p-3 bg-white/5 rounded-lg">
                      <p className="text-2xl md:text-3xl font-bold text-white">{item.value}</p>
                      <p className="text-white/60 text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {[
                    "Forbes Featured Analysis",
                    "Former Wall Street Quants",
                    "Machine Learning Experts",
                    "Crypto Market Veterans"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <p className="text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExpertSection;
