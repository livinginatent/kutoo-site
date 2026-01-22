"use client";

import Header from "../src/components/landing/Header";
import Footer from "../src/components/landing/Footer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const faqCategories = [
  {
    title: "Getting Started",
    questions: [
      {
        question: "What is Kutoo?",
        answer: "Kutoo is a crypto learning platform that lets you practice trading with simulated assets before using real money. We use a unique 'box' system where each box contains curated cryptocurrencies and educational content to help you learn at your own pace."
      },
      {
        question: "Do I need any crypto experience to use Kutoo?",
        answer: "Not at all! Kutoo is designed for complete beginners. Our structured learning path guides you through everything from basic blockchain concepts to advanced trading strategies. You can start with zero knowledge and build your confidence gradually."
      },
      {
        question: "How do I get started?",
        answer: "Simply download the app and create an account. You'll start with a free Starter box that introduces you to basic crypto concepts. From there, you can choose additional boxes based on your interests and learning goals."
      },
      {
        question: "Is Kutoo free?",
        answer: "Yes! Kutoo offers a free tier that includes access to our Starter box and practice trading environment. Premium boxes and advanced features are available through our subscription plans."
      }
    ]
  },
  {
    title: "Boxes & Learning",
    questions: [
      {
        question: "What are crypto boxes?",
        answer: "Crypto boxes are curated collections of cryptocurrencies paired with educational content. Each box focuses on a specific theme (like DeFi, NFTs, or Layer 2 solutions) and includes lessons, practice exercises, and simulated trading opportunities."
      },
      {
        question: "Can I create my own box?",
        answer: "Yes! Once you're comfortable with the platform, you can create custom boxes with cryptocurrencies of your choice. This lets you practice trading strategies with specific coins you're interested in."
      },
      {
        question: "How long does it take to complete a box?",
        answer: "It depends on the box and your learning pace. Starter boxes typically take 1-2 weeks if you spend 30 minutes daily. More advanced boxes can take 3-4 weeks. You can learn at your own speed—there's no rush!"
      },
      {
        question: "What happens after I complete a box?",
        answer: "After completing a box, you'll have a solid understanding of the cryptocurrencies it covered. You can then move to real trading with confidence, or continue learning with more advanced boxes. Your progress is always saved."
      }
    ]
  },
  {
    title: "Practice Trading",
    questions: [
      {
        question: "Is the practice trading environment realistic?",
        answer: "Absolutely! Our practice environment uses real-time market data from actual exchanges. The prices, trends, and market movements you see are identical to what you'd experience in real trading. The only difference is you're using simulated funds."
      },
      {
        question: "Can I lose money in practice mode?",
        answer: "No, you cannot lose real money in practice mode. All funds are simulated, so you can experiment freely, make mistakes, and learn from them without any financial risk."
      },
      {
        question: "How do I know when I'm ready for real trading?",
        answer: "You'll know you're ready when you feel confident understanding market trends, can explain your trading decisions, and have consistently made good choices in practice mode. There's no pressure—take as much time as you need."
      },
      {
        question: "Can I switch between practice and real trading?",
        answer: "Yes! You can always switch back to practice mode if you want to test new strategies or refresh your skills. Many users continue using practice mode even after starting real trading."
      }
    ]
  },
  {
    title: "Real Trading",
    questions: [
      {
        question: "How do I start real trading on Kutoo?",
        answer: "When you're ready, you can connect your wallet or exchange account to Kutoo. We'll guide you through the setup process step by step. You can start with small amounts and gradually increase as you gain confidence."
      },
      {
        question: "Is my money safe?",
        answer: "Kutoo partners with reputable exchanges and uses industry-standard security measures. However, all crypto trading carries risk. We recommend starting small, never investing more than you can afford to lose, and continuing to use our educational resources."
      },
      {
        question: "What fees does Kutoo charge?",
        answer: "Kutoo charges a small subscription fee for premium features. Trading fees are set by the exchanges we partner with, and we'll always show you the fees before you make any trades."
      },
      {
        question: "Can I withdraw my funds anytime?",
        answer: "Yes, you maintain full control of your funds. You can withdraw at any time through your connected wallet or exchange account. There are no lock-in periods or restrictions."
      }
    ]
  },
  {
    title: "Account & Support",
    questions: [
      {
        question: "How do I reset my password?",
        answer: "You can reset your password from the login screen by clicking 'Forgot Password.' We'll send a reset link to your registered email address."
      },
      {
        question: "Can I use Kutoo on multiple devices?",
        answer: "Yes! Your Kutoo account syncs across all your devices. You can start a lesson on your phone and continue on your tablet or computer."
      },
      {
        question: "How do I contact support?",
        answer: "You can reach our support team through the in-app chat, email us at support@kutoo.com, or visit our Help Center. We typically respond within 24 hours."
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 30-day money-back guarantee on all subscription plans. If you're not satisfied with Kutoo, contact our support team for a full refund."
      }
    ]
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border border-border/50 rounded-[20px] bg-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-foreground text-lg pr-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-hero-gradient">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                FAQ
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.2]">
                Frequently Asked
                <span className="block text-[#F28482] mt-2">Questions</span>
              </h1>
              <p className="text-lg md:text-xl text-[#586574] leading-relaxed">
                Everything you need to know about Kutoo. Can't find what you're looking for? 
                <a href="#contact" className="text-[#F28482] hover:underline ml-1">Contact our support team</a>.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => (
                      <FAQItem
                        key={questionIndex}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openItems[`${categoryIndex}-${questionIndex}`] || false}
                        onToggle={() => toggleItem(categoryIndex, questionIndex)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div 
              className="relative rounded-[2.5rem] p-[2px] overflow-visible max-w-4xl mx-auto"
              style={{
                background: 'linear-gradient(158.31deg, #84A59D 3.77%, #CDB4DB 85.77%)',
              }}
            >
              {/* CTA icon on top right border */}
              <div className="absolute top-[-27.5px] right-[130px] z-20">
                <Image 
                  src="/cta-kt.svg"
                  alt="CTA icon"
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>
              {/* CTA icon on bottom left border */}
              <div className="absolute bottom-[-27.5px] left-[130px] z-20">
                <Image 
                  src="/cta-kt.svg"
                  alt="CTA icon"
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </div>
              <div className="relative rounded-[2.5rem] bg-background p-12 md:p-16 overflow-hidden">
                <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-2xl" />
                <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl" />
                
                <div className="relative z-10 text-center max-w-2xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#243242] mb-4">
                    Still Have Questions?
                  </h2>
                  <p className="text-lg text-[#737F8C]/80 mb-8">
                    Our support team is here to help. Reach out and we'll get back to you as soon as possible.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="mailto:support@kutoo.com"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#cdb4db] text-foreground rounded-full font-semibold hover:bg-[#cdb4db]/90 transition-colors"
                    >
                      Contact Support
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                    <a 
                      href="/"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#cdb4db] text-[#cdb4db] rounded-full font-semibold hover:bg-[#cdb4db]/10 transition-colors"
                    >
                      Back to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
