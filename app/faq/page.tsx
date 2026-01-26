"use client";

import Header from "../src/components/landing/Header";
import Footer from "../src/components/landing/Footer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const faqCategories = [
  {
    title: "Getting Started",
    questions: [
      {
        question: "What is Kutoo?",
        answer: "Kutoo is a crypto learning app that lets you practice trading with simulated money before using real money. You use simulated funds to learn how different crypto portfolios behave over time without financial risk. It also offers structured educational content to help you understand crypto and blockchain fundamentals at your own pace. "
      },
      {
        question: "Do I need any crypto experience to use Kutoo?",
        answer: "Not at all. Kutoo is designed for complete beginners. Our structured learning path guides you through everything from basic blockchain concepts, allowing you to start with zero knowledge and build confidence gradually. "
      },
      {
        question: "How do I get started?",
        answer: "Simply download the app and create an account. Everything else follows from there."
      },
      {
        question: "Is Kutoo free?",
        answer: "Yes. Kutoo’s simulation mode is completely free and designed purely for learning. You can explore crypto, practice with simulated assets, and access educational content at no cost. Kutoo also offers a real-money mode, available only in selected countries. In this mode, transactions use real money and incur a 1% transaction fee."
      }
    ]
  },
  {
    title: "Learning",
    questions: [
      {
        question: "What are crypto boxes?",
        answer: "Crypto boxes are curated collections of cryptocurrencies. Each box focuses on a specific theme (such as DeFi, top cryptocurrencies)."
      },
      {
        question: "Can I create my own box?",
        answer: "Yes. Once you are comfortable with the app, you can create custom boxes with cryptocurrencies of your choice. "
      },
      {
        question: "What learning content does Kutoo offer?",
        answer: "Kutoo’s learning content is structured into clear levels and topics that build progressively. Each concept is explained in a simple, practical way, with short quizzes at the end of each topic. This approach helps users move from basic ideas to more advanced concepts while learning alongside simulated trading. "
      },
    
    ]
  },
  {
    title: "Practice Trading",
    questions: [
      {
        question: "Is the practice trading environment realistic?",
        answer: "Absolutely. The practice environment uses real-time market data from actual exchanges. The prices, trends, and market movements you see are identical to what you'd experience in real trading. The only difference is you are using simulated funds."
      },
      {
        question: "Can I lose money in practice mode?",
        answer: "No, you cannot lose real money in practice mode. All funds are simulated, so you can experiment freely, make mistakes, and learn from them without any financial risk."
      },
      {
        question: "How do I know when I'm ready for real trading?",
        answer: "You will know you are ready when you feel confident interpreting market trends, can clearly explain your trading decisions, and have consistently made sound choices in practice mode. There is no pressure; take as much time as you need and move at your own pace."
      },
      {
        question: "Can I switch between practice and real trading?",
        answer: "Yes, but only in countries where real trading is available. In most regions, Kutoo is available exclusively in simulation mode for learning purposes. If you are in a country where Kutoo’s real trading mode is not available, you can still practice for free in simulation mode and use any exchange to trade real money when you are ready. Many users continue using practice mode even after starting real trading."
      }
    ]
  },
  {
    title: "Real Trading",
    questions: [
      {
        question: "How do I start real trading on Kutoo?",
        answer: "When you are ready, you can connect your wallet to Kutoo. We will guide you through the setup process step by step. You can start with small amounts and gradually increase as you gain confidence."
      },
      {
        question: "Is my money safe?",
        answer: "Kutoo integrates directly with decentralized exchanges and applies industry-standard security practices. That said, all cryptocurrency trading involves risk. We encourage users to start small, never invest more than they can afford to lose, and continue using Kutoo's educational resources."
      },
      {
        question: "What fees does Kutoo charge?",
        answer: "Kutoo charges a 1% transaction fee on real-money transfers. The simulated version is free to use."
      },
      {
        question: "Can I withdraw my funds anytime?",
        answer: "Yes, you can withdraw at any time through your connected wallet. There are no lock-in periods or restrictions."
      }
    ]
  },
  {
    title: "Account & Support",
    questions: [
      {
        question: "How do I reset my password?",
        answer: "You can reset your password from the login screen by clicking 'Forgot Password.' We will send a reset link to your registered email address."
      },
      {
        question: "Can I use Kutoo on multiple devices?",
        answer: "Yes, your Kutoo account syncs across all your devices. You can start a lesson on your phone and continue on your tablet."
      },
      {
        question: "How do I contact support?",
        answer: "You can reach our support team through the in-app chat, email us at support@kutoo.app, or visit our Help Center. We typically respond within 24 hours."
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
                    <Link 
                      href="/"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#cdb4db] text-[#cdb4db] rounded-full font-semibold hover:bg-[#cdb4db]/10 transition-colors"
                    >
                      Back to Home
                    </Link>
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
