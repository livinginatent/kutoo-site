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
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three Steps to
            <span className="text-gradient-coral"> Crypto Confidence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our unique box system makes starting with crypto as easy as opening a present.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="relative p-8 rounded-3xl bg-card shadow-card border border-border/50">
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-2xl ${step.accent} flex items-center justify-center shadow-elevated`}>
                  <span className="text-lg font-bold text-primary-foreground">{step.number}</span>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
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
