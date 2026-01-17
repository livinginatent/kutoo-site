import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Users, Heart, Zap, Shield, TrendingUp } from "lucide-react";
import Header from "../src/components/landing/Header";
import Footer from "../src/components/landing/Footer";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To make cryptocurrency accessible, understandable, and safe for everyone. We believe learning should be fun, risk-free, and rewarding.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Education first, profit second. We're committed to empowering users with knowledge before they invest real money in crypto markets.",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We're constantly pushing boundaries to create the best learning experience. From crypto boxes to practice trading, we innovate for you.",
    color: "bg-highlight/20 text-highlight-foreground",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Your safety is our priority. Bank-level encryption and security measures protect your investments while you learn and grow.",
    color: "bg-accent/30 text-accent-foreground",
  },
];

const stats = [
  { number: "50K+", label: "Active Learners" },
  { number: "2024", label: "Founded" },
  { number: "100+", label: "Countries" },
  { number: "4.9/5", label: "User Rating" },
];

export default function AboutPage() {
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
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
                <span className="text-sm text-muted-foreground">About Us</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                We're Building the
                <span className="block text-gradient-coral">Future of Crypto Education</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Kutoo was born from a simple idea: learning crypto shouldn't be scary or expensive. 
                We've created a platform where curiosity meets opportunity, and education comes before investment.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Foundation
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Drives
                <span className="text-gradient-coral"> Us Forward</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Every feature we build, every box we curate, and every lesson we create is guided by our core principles.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-3xl bg-card shadow-card border border-border/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  From Idea to
                  <span className="text-gradient-coral"> Innovation</span>
                </h2>
              </div>
              
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In 2024, we noticed a problem: millions of people wanted to learn about cryptocurrency, 
                  but the barrier to entry was too high. Traditional exchanges were intimidating, educational 
                  resources were scattered, and the fear of losing money kept many from even trying.
                </p>
                <p>
                  That's when we had our "aha" moment. What if we could combine the excitement of unboxing 
                  with real crypto education? What if people could practice trading without risking their savings? 
                  What if learning crypto was actually fun?
                </p>
                <p>
                  Today, Kutoo is that vision realized. We've helped over 50,000 learners take their first 
                  steps into crypto, practice trading risk-free, and build confidence before investing real money. 
                  Our crypto boxes make it easy to start, our practice environment makes it safe to learn, and 
                  our community makes it fun to grow.
                </p>
                <p className="text-foreground font-medium">
                  We're just getting started. Join us as we continue to make crypto accessible for everyone.
                </p>
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
                  Ready to Start Your Journey?
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-10">
                  Join thousands of learners who are mastering crypto the smart way.
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
