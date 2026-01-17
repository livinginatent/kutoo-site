import { Box, GraduationCap, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Box,
    title: "Crypto Boxes",
    description: "Buy curated boxes containing real cryptocurrencies. Each box is a surprise mix of top coins at unbeatable value.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: GraduationCap,
    title: "Learn Risk-Free",
    description: "Practice trading with dummy coins that mirror real market movements. Make mistakes without losing a penny.",
    color: "bg-secondary/20 text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Real Market Data",
    description: "Our practice environment uses live market data so when you go live, nothing feels different.",
    color: "bg-highlight/20 text-highlight-foreground",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Bank-level security protects your real investments while you learn. Your funds are always in your control.",
    color: "bg-accent/30 text-accent-foreground",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="text-gradient-coral"> Master Crypto</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From your first box to your first trade, we have got you covered with tools designed for real learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-card shadow-card border border-border/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
