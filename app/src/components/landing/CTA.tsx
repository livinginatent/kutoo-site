import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-12 md:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-2xl" />
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Unbox Your First Crypto?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Join 50,000+ learners who started their crypto journey with Kutoo. 
              No experience needed—just curiosity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-card text-foreground hover:bg-card/90 group"
              >
                Download the App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-primary-foreground/60">
              Free to start • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
