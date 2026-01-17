"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border/50 rounded-2xl bg-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
      >
        <h3 className="text-lg md:text-xl font-semibold text-foreground pr-8">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 md:p-8 pt-0 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
