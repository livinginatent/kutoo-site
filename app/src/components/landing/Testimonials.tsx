import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "First-time Investor",
    content: "I was terrified of losing money in crypto. Kutoo let me practice for 3 months before I touched real money. Now I trade with confidence!",
    rating: 5,
    avatar: "SC",
    avatarBg: "bg-primary",
  },
  {
    name: "Marcus Johnson",
    role: "College Student",
    content: "The box concept is genius. I got exposed to coins I never would have picked myself, and two of them became my best performers.",
    rating: 5,
    avatar: "MJ",
    avatarBg: "bg-secondary",
  },
  {
    name: "Priya Patel",
    role: "Software Developer",
    content: "As someone who understands tech but not finance, Kutoo bridged that gap perfectly. The learning curve was actually fun.",
    rating: 5,
    avatar: "PP",
    avatarBg: "bg-accent",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-highlight/20 text-highlight-foreground text-sm font-medium mb-4">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by
            <span className="text-gradient-coral"> 50,000+ Learners</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join a community of smart investors who started their crypto journey the right way.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-card shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                ))}
              </div>
              
              <p className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center`}>
                  <span className="text-primary-foreground font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
