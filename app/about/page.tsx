/* eslint-disable react/no-unescaped-entities */
import Header from "../src/components/landing/Header";
import Footer from "../src/components/landing/Footer";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Education First",
    description: "We believe everyone deserves access to quality crypto education, regardless of their background or experience level.",
    icon: "📚",
    gradient: "linear-gradient(66.49deg, #F28482 14.51%, #84A59D 95.46%)",
  },
  {
    title: "Safe Learning",
    description: "Practice makes perfect. We provide a risk-free environment where mistakes are learning opportunities, not financial losses.",
    icon: "🛡️",
    gradient: "linear-gradient(158.31deg, #84A59D 3.77%, #CDB4DB 85.77%)",
  },
  {
    title: "Real Results",
    description: "Our platform uses live market data so when you're ready to go live, the transition is seamless and natural.",
    icon: "📈",
    gradient: "linear-gradient(111.97deg, #CDB4DB 16.81%, #E9C46A 78.77%)",
  },
  {
    title: "Community Driven",
    description: "We're building a community of smart, curious learners who support each other on their crypto journey.",
    icon: "🤝",
    gradient: "linear-gradient(180deg, #E9C46A 0%, #F28482 100%)",
  },
];

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    bio: "Former fintech engineer with 10+ years building trading platforms. Passionate about making crypto accessible to everyone.",
    avatar: "AR",
    avatarBg: "bg-primary",
  },
  {
    name: "Jordan Kim",
    role: "Head of Education",
    bio: "Crypto educator and content creator. Has taught over 50,000 students through online courses and workshops.",
    avatar: "JK",
    avatarBg: "bg-secondary",
  },
  {
    name: "Sam Taylor",
    role: "Product Lead",
    bio: "UX designer turned product manager. Believes great products should be both beautiful and educational.",
    avatar: "ST",
    avatarBg: "bg-accent",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
 

 

        

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  How Kutoo
                  <span className="text-[#F28482]"> Was Born</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-[#586574] leading-relaxed">
                <p>
                  Kutoo started as a simple idea: what if learning crypto was as fun and engaging as opening a present? 
                  Our founder, Alex, watched friends and family struggle with traditional crypto platforms—they were either 
                  too technical, too risky, or both.
                </p>
                <p>
                  After months of research and talking to hundreds of potential users, we realized the problem wasn't 
                  just about features—it was about approach. People needed a way to learn by doing, without the fear 
                  of losing real money.
                </p>
                <p>
                  That's when the "box" concept was born. Each box is a curated learning experience that introduces you 
                  to cryptocurrencies in a structured, safe way. You practice with simulated assets, learn through 
                  interactive lessons, and only move to real trading when you feel confident.
                </p>
                <p>
                  Today, Kutoo has helped thousands of people start their crypto journey. We're just getting started, 
                  and we're excited to have you join us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-[#fefcfc]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                Meet the Team
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                The People Behind
                <span className="text-[#F28482]"> Kutoo</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                A small team with big dreams of making crypto accessible to everyone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-3xl bg-card shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300 text-center"
                >
                  <div className={`w-20 h-20 rounded-full ${member.avatarBg} flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-2xl font-bold text-primary-foreground">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary mb-4 font-medium">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
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
              <div className="relative rounded-[2.5rem] bg-background p-12 md:p-16 overflow-hidden">
                <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-2xl" />
                <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl" />
                
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#243242] mb-6">
                    Ready to Start Your Journey?
                  </h2>
                  <p className="text-lg md:text-xl text-[#737F8C]/80 mb-8">
                    Join thousands of learners who are building their crypto confidence with Kutoo.
                  </p>
                  <Link 
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#cdb4db] text-foreground rounded-full font-semibold hover:bg-[#cdb4db]/90 transition-colors"
                  >
                    Get Started
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
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
