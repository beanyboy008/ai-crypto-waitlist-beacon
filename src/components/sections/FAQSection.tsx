
import React from 'react';
import SectionContainer from '../SectionContainer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI Crypto Bot generate trading signals?",
    answer: "Our AI bot analyzes vast amounts of market data, including price action, volume, order book data, social sentiment, and on-chain metrics. It uses machine learning algorithms to identify patterns that precede profitable trading opportunities, then generates signals based on these patterns with confidence scores."
  },
  {
    question: "What is the success rate of the trading signals?",
    answer: "Our bot has maintained an 89% success rate across various market conditions. This means approximately 89 out of 100 trade signals reach at least the first profit target before hitting the stop loss level."
  },
  {
    question: "How many signals will I receive each day?",
    answer: "The AI system generates 20-30 potential trade signals daily, but our analyst team filters these down to 3-4 high-confidence trades that are sent to users. This ensures you only receive the highest quality opportunities."
  },
  {
    question: "Do I need trading experience to use the bot?",
    answer: "No, our signals include clear entry points, take profit targets, and stop loss levels, making them accessible to traders of all experience levels. However, basic understanding of cryptocurrency trading is recommended."
  },
  {
    question: "Which cryptocurrencies does the bot analyze?",
    answer: "Our AI bot analyzes the top 100 cryptocurrencies by market capitalization, focusing primarily on assets with sufficient liquidity for easy entry and exit positions."
  },
  {
    question: "When will the bot be available to the public?",
    answer: "We're currently in the final stages of testing and optimization. Waitlist members will receive priority access when we launch, with the first group expected to gain access within the next 4-6 weeks."
  }
];

const FAQSection = () => {
  return (
    <SectionContainer className="bg-crypto-dark py-24" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70">
            Everything you need to know about our AI Crypto Bot
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="crypto-card border-none"
            >
              <AccordionTrigger className="px-6 py-4 text-white text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-white/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  );
};

export default FAQSection;
