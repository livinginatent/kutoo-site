import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import heroImage from "@/app/src/assets/hero-boxes.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Decorative floating elements */}
      <div className="absolute top-32 left-10 w-20 h-20 rounded-2xl bg-accent/30 animate-float" />
      <div className="absolute top-48 right-20 w-16 h-16 rounded-full bg-secondary/40 animate-float-delayed" />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 rounded-xl bg-highlight/30 animate-float" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card border border-border">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
              <span className="text-sm text-muted-foreground">Learn crypto the fun way</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Unbox Your
              <span className="block text-gradient-coral">Crypto Journey</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Buy real crypto boxes, learn with risk-free practice coins, and master trading 
              before you invest. The smartest way to start your crypto adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="group">
                Start Learning Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">App Rating</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">$0</div>
                <div className="text-sm text-muted-foreground">Risk to Learn</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 w-full max-w-xl mx-auto h-[500px]">
              <Image 
                src={heroImage} 
                alt="Colorful crypto boxes floating" 
                fill
                className="object-contain animate-float"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
