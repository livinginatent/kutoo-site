import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div 
          className="relative rounded-[2.5rem] p-[2px] overflow-visible"
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
          {/* Inner container */}
          <div className="relative rounded-[2.5rem] bg-background p-12 md:p-16 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-2xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#243242] mb-6">
              Ready to Start Your First Crypto?
            </h2>
            <p className="text-xl text-[#737F8C]/80 mb-10">
              Join many learners who started their crypto journey with Kutoo. 
              No experience needed—just curiosity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-[#cdb4db] text-foreground hover:bg-card/90 group"
              >
                Download the App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-[#243242]/60">
              Free to start
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
