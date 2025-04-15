
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-crypto-dark text-white/60 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-accent/30 mr-2"></div>
              <span className="font-bold text-xl text-white">AI Crypto Bot</span>
            </div>
            <p className="mt-2 text-sm">
              AI-powered crypto trading signals with 89% win rate
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-bold text-white mb-3">Product</h3>
              <ul className="space-y-2">
                {["Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
                  <li key={item}>
                    <button className="hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-3">Company</h3>
              <ul className="space-y-2">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <button className="hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-3">Legal</h3>
              <ul className="space-y-2">
                {["Privacy", "Terms", "Security"].map((item) => (
                  <li key={item}>
                    <button className="hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} AI Crypto Bot. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0">
            <p>
              Trading cryptocurrencies involves risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
