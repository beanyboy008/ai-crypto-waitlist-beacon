
import React from 'react';
import SectionContainer from '../SectionContainer';
import { 
  CircleCheck, 
  TrendingUp, 
  Timer, 
  Users,
  LineChart
} from 'lucide-react';

const stats = [
  {
    value: "89%",
    label: "Success Rate",
    icon: <CircleCheck className="text-crypto-success" size={24} />
  },
  {
    value: "20-30",
    label: "Daily Signals",
    icon: <LineChart className="text-accent" size={24} />
  },
  {
    value: "3-4",
    label: "Curated Picks Daily",
    icon: <TrendingUp className="text-crypto-warning" size={24} />
  },
  {
    value: "24/7",
    label: "Market Monitoring",
    icon: <Timer className="text-accent" size={24} />
  }
];

const StatsSection = () => {
  return (
    <SectionContainer className="bg-crypto-dark py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Performance That Speaks For Itself
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our AI crypto bot has been battle-tested in live markets, consistently delivering remarkable results for traders.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex justify-center items-center mb-4 rounded-full bg-white/5 w-16 h-16">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 crypto-card p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join Traders Already Profiting
              </h3>
              <p className="text-white/70 mb-4 md:mb-0">
                Don't miss out on the trading edge our AI bot provides to successful traders every day.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-lg">
              <Users className="text-accent" size={24} />
              <div className="text-left">
                <p className="text-white font-bold text-xl">1,500+</p>
                <p className="text-white/70 text-sm">Waitlist Signups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default StatsSection;
