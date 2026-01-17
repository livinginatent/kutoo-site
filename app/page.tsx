import Image from "next/image";
import Features from "./src/components/landing/Features";
import HowItWorks from "./src/components/landing/HowItWorks";
import Testimonials from "./src/components/landing/Testimonials";
import CTA from "./src/components/landing/CTA";
import Footer from "./src/components/landing/Footer";
import Header from "./src/components/landing/Header";
import Hero from "./src/components/landing/Hero";

export default function Home() {
  return (
     <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
