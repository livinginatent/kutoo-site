"use client";

import Header from "../src/components/landing/Header";
import Footer from "../src/components/landing/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      contact: "support@kutoo.com",
      link: "mailto:support@kutoo.com",
      gradient: "linear-gradient(66.49deg, #F28482 14.51%, #84A59D 95.46%)",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      contact: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      gradient: "linear-gradient(158.31deg, #84A59D 3.77%, #CDB4DB 85.77%)",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      contact: "123 Crypto Street, San Francisco, CA 94105",
      link: "#",
      gradient: "linear-gradient(111.97deg, #CDB4DB 16.81%, #E9C46A 78.77%)",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-hero-gradient">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.2]">
                Get in Touch
                <span className="block text-[#F28482] mt-2">We're Here to Help</span>
              </h1>
              <p className="text-lg md:text-xl text-[#586574] leading-relaxed">
                Have a question, suggestion, or need support? We'd love to hear from you. 
                Reach out and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 md:py-24 bg-[#fefcfc] overflow-visible">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-16 overflow-visible">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.link}
                    className="block"
                  >
                    <div 
                      className="relative rounded-[20px] p-[2px] shadow-card hover:shadow-elevated  h-full"
                      style={{ background: method.gradient }}
                    >
                      {/* SVG icon on top border for first box */}
                      {index === 0 && (
                        <div className="absolute top-[-27.5px] right-[10px] z-20">
                          <Image 
                            src="/crypto-kt.svg"
                            alt="Crypto icon"
                            width={55}
                            height={55}
                            className="object-contain"
                          />
                        </div>
                      )}
                      {/* SVG icon on bottom border for second box */}
                      {index === 1 && (
                        <div className="absolute bottom-[-27.5px] right-[10px] z-20">
                          <Image 
                            src="/investing-kt.svg"
                            alt="Investing icon"
                            width={55}
                            height={55}
                            className="object-contain"
                          />
                        </div>
                      )}
                      {/* SVG icon on top border for third box */}
                      {index === 2 && (
                        <div className="absolute top-[-27.5px] right-[10px] z-20">
                          <Image 
                            src="/market-kt.svg"
                            alt="Market icon"
                            width={55}
                            height={55}
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div className="relative w-full h-full rounded-[20px] bg-card p-6">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground mb-3 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {method.description}
                        </p>
                        <p className="text-foreground font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {method.contact}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                  Send Us a Message
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Let's Start a
                  <span className="text-[#F28482]"> Conversation</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll respond within 24 hours.
                </p>
              </div>

              <div 
                className="relative rounded-[2.5rem] p-[2px] overflow-visible"
                style={{
                  background: 'linear-gradient(158.31deg, #84A59D 3.77%, #CDB4DB 85.77%)',
                }}
              >
                <div className="relative rounded-[2.5rem] bg-background p-8 md:p-12 overflow-hidden">
                  <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-2xl" />
                  <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/20 blur-2xl" />
                  
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label 
                          htmlFor="name" 
                          className="block text-sm font-semibold text-foreground mb-2"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label 
                          htmlFor="email" 
                          className="block text-sm font-semibold text-foreground mb-2"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label 
                        htmlFor="subject" 
                        className="block text-sm font-semibold text-foreground mb-2"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label 
                        htmlFor="message" 
                        className="block text-sm font-semibold text-foreground mb-2"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 rounded-xl bg-secondary/20 border border-secondary/50 text-secondary">
                        <p className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                          ✓ Thank you! Your message has been sent. We'll get back to you soon.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 rounded-xl bg-destructive/20 border border-destructive/50 text-destructive">
                        <p className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                          ✗ Something went wrong. Please try again or email us directly.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-4 bg-[#cdb4db] text-foreground rounded-full font-semibold hover:bg-[#cdb4db]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border/50 rounded-[20px] p-8 shadow-card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Response Time
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                </div>

                <div className="bg-card border border-border/50 rounded-[20px] p-8 shadow-card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Other Ways to Reach Us
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <strong className="text-foreground">Privacy inquiries:</strong> privacy@kutoo.com
                  </p>
                  <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <strong className="text-foreground">Partnerships:</strong> partnerships@kutoo.com
                  </p>
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
