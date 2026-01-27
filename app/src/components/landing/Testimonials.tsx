import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "First-time Investor",
    content: "I was nervous about crypto at first. Kutoo gave me a safe way to learn and practice for a few months before exploring real markets. That experience helped me feel more comfortable navigating crypto on my own.",
    rating: 5,
    avatar: "SC",
    avatarBg: "bg-primary",
  },
  {
    name: "Marcus Johnson",
    role: "College Student",
    content: "The box concept made it easy to explore different crypto assets. It helped me understand how different projects work and how people build diversified portfolios.",
    rating: 5,
    avatar: "MJ",
    avatarBg: "bg-secondary",
  },
  {
    name: "Priya Patel",
    role: "Software Developer",
    content: "I understand technology, but finance was new to me. Kutoo explained concepts in a clear, hands-on way, and the learning process felt engaging rather than overwhelming.",
    rating: 5,
    avatar: "PP",
    avatarBg: "bg-accent",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-highlight/20 text-highlight-foreground text-sm font-medium mb-4">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by
            <span className="text-[#F28482]"> Learners Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join a community of smart investors who started their crypto journey the right way
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
