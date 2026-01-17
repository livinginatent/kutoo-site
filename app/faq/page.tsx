import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, TrendingUp } from "lucide-react";
import Header from "../src/components/landing/Header";
import Footer from "../src/components/landing/Footer";
import FAQItem from "../src/components/landing/FAQItem";

const faqs = [
  {
    question: "What are crypto boxes?",
    answer: "Crypto boxes are curated collections of real cryptocurrencies that you can purchase. Each box contains a surprise mix of top coins at unbeatable value. It's like a mystery box, but with real crypto assets that you own and can trade or hold.",
  },
  {
    question: "Is it safe to practice trading with dummy coins?",
    answer: "Absolutely! Our practice environment uses real market data but with virtual coins, so you can learn and make mistakes without risking any real money. When you're ready to trade with real crypto, the experience will feel exactly the same.",
  },
  {
    question: "Do I need prior crypto knowledge to get started?",
    answer: "Not at all! Kutoo is designed for complete beginners. We provide educational resources, step-by-step guides, and a risk-free practice environment. You can learn at your own pace, starting with crypto boxes and gradually moving to trading.",
  },
  {
    question: "How do I withdraw my crypto?",
    answer: "You can withdraw your crypto at any time. Simply go to your wallet, select the cryptocurrency you want to withdraw, and follow the prompts. All withdrawals are processed securely and typically complete within a few minutes to a few hours, depending on network congestion.",
  },
  {
    question: "What cryptocurrencies are available?",
    answer: "We support all major cryptocurrencies including Bitcoin, Ethereum, and hundreds of other popular coins. Our crypto boxes may contain any combination of these, and you can also purchase specific coins directly through our platform.",
  },
  {
    question: "Is there a minimum purchase amount?",
    answer: "No, there's no minimum purchase amount. You can start with as little as you're comfortable with. Our crypto boxes start at affordable prices, making it easy for anyone to begin their crypto journey.",
  },
  {
    question: "How secure is my account and crypto?",
    answer: "Security is our top priority. We use bank-level encryption, two-factor authentication, and store the majority of funds in cold storage (offline wallets). Your private keys are encrypted and never shared. We also conduct regular security audits to ensure your assets are protected.",
  },
  {
    question: "Can I trade crypto on Kutoo?",
    answer: "Yes! Once you're comfortable with the practice environment, you can start trading real cryptocurrencies on our platform. We offer a user-friendly trading interface with real-time market data, charts, and all the tools you need to make informed trading decisions.",
  },
  {
    question: "What happens if I lose money while practicing?",
    answer: "That's the beauty of our practice environment—you can't lose real money! Practice coins are virtual, so you can experiment, make mistakes, and learn without any financial risk. This is the perfect way to build confidence before investing real money.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach our support team 24/7 through the in-app chat, email at support@kutoo.com, or through our help center. We typically respond within a few hours and are always happy to help with any questions or concerns.",
  },
  {
    question: "Are there any fees?",
    answer: "We're transparent about all fees. There are no hidden costs—you'll see any applicable fees clearly displayed before completing a transaction. Trading fees are competitive, and we offer special rates for frequent traders.",
  },

];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute top-32 left-10 w-20 h-20 rounded-2xl bg-accent/30 animate-float" />
          <div className="absolute top-48 right-20 w-16 h-16 rounded-full bg-secondary/40 animate-float-delayed" />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link href="/">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card border border-border mb-6">
                <HelpCircle className="w-4 h-4 text-secondary" />
                <span className="text-sm text-muted-foreground">Frequently Asked Questions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Got Questions?
                <span className="block text-gradient-coral">We've Got Answers</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Everything you need to know about Kutoo, crypto boxes, practice trading, and getting started with cryptocurrency.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Can't find what you're looking for? Our support team is here to help you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Contact Support
                  <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-12 md:p-16 overflow-hidden">
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-2xl" />
              <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl" />
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Ready to Start Learning?
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-10">
                  Join 50,000+ learners who are mastering crypto the smart way.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/">
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="bg-card text-foreground hover:bg-card/90 group"
                    >
                      Get Started Free
                      <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
