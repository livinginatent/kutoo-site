const steps = [
  {
    number: "01",
    title: "Pick Your Box",
    description: "Choose from Starter, Growth, or Pro boxes based on your investment goals.",
    accent: "bg-primary",
  },
  {
    number: "02",
    title: "Practice First",
    description: "Use dummy coins to learn trading strategies in our risk-free sandbox environment.",
    accent: "bg-secondary",
  },
  {
    number: "03",
    title: "Go Live",
    description: "When you are ready, switch to real trading with confidence. Your skills translate perfectly.",
    accent: "bg-highlight",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Three Steps to
            <span className="text-[#F28482]"> Crypto Confidence</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Our unique box system makes starting with crypto as easy as opening a present.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[24px]">
          {steps.map((step, index) => (
            <div key={index} className="relative w-full max-w-[377px] md:w-[377px]">
              {/* Connector line */}
           
              
              <div 
                className="relative bg-card shadow-card border border-border/50 rounded-[20px] opacity-100 w-full min-h-[210px] md:h-[210px]"
              >
                <div className={`absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 rounded-2xl ${step.accent} flex items-center justify-center shadow-elevated`}>
                  <span className="text-base md:text-lg font-bold text-primary-foreground">{step.number}</span>
                </div>
                
                <div className="p-6 md:p-8 h-full flex flex-col justify-center">
                  <h3 
                    className="mb-3 md:mb-4 text-foreground"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 4vw, 22px)',
                      lineHeight: '26px',
                      letterSpacing: '0%',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-muted-foreground"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 3vw, 16px)',
                      lineHeight: '26px',
                      letterSpacing: '0%',
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
