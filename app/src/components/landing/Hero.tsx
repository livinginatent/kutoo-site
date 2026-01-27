import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-visible bg-hero-gradient">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card border border-border">
              <span className="text-sm text-muted-foreground">Learn crypto the fun way</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.3] pb-4 overflow-visible">
              Start Your
              <span className="block text-gradient-coral pt-1 pb-2">Crypto Journey</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#586574] max-w-lg leading-relaxed">
              Explore cryptocurrencies in simulation and move to real crypto when you are ready. The smartest way to start your crypto adventure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-[#cdb4db] text-[#243242] hover:bg-[#cdb4db]/90"
              >
                Download Kutoo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-[#cdb4db] text-[#cdb4db] hover:bg-[#cdb4db]/10"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">115</div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">App Rating</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">253</div>
                <div className="text-sm text-muted-foreground">Number of kutoos</div>
              </div>
            </div>
          </div>
          
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-start lg:justify-center">
            {/* Lamps hanging from top, centered above new-hero.svg */}
            <div className="absolute top-[-30px] md:top-[-35px] lg:top-[-128px] left-1/2 transform -translate-x-1/2 z-20 w-[200px] md:w-[250px] lg:w-[323px]">
              <Image 
                src="/Lamps.svg"
                alt="Decorative lamps"
                width={323}
                height={64}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
            {/* Main illustration container - single combined SVG */}
            <div className="relative w-full h-full max-w-[855px]">
              <Image 
                src="/new-hero.svg"
                alt="Hero illustration with characters and crypto elements"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
