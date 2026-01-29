import type { Metadata } from "next";
import Features from "./src/components/landing/Features";
import HowItWorks from "./src/components/landing/HowItWorks";
import Testimonials from "./src/components/landing/Testimonials";
import CTA from "./src/components/landing/CTA";
import Footer from "./src/components/landing/Footer";
import Header from "./src/components/landing/Header";
import Hero from "./src/components/landing/Hero";

export const metadata: Metadata = {
  title: "Kutoo – Learn Crypto Safely with Simulated Crypto Boxes",
  description:
    "Kutoo is a mobile app that lets you learn crypto the safe way with simulated crypto boxes, live market data, and guided lessons before you invest real money.",
  openGraph: {
    title: "Kutoo – Learn Crypto Safely with Simulated Crypto Boxes",
    description:
      "Practice crypto investing risk‑free, explore curated crypto boxes, and build confidence before trading for real.",
    url: "https://kutoo.app",
    siteName: "Kutoo",
    type: "website",
  },
  alternates: {
    canonical: "https://kutoo.app",
  },
};

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
