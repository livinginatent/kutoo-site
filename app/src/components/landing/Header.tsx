"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fefcfc] border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <div className="relative w-10 h-9 flex-shrink-0">
            <Image
              src="/Logo.svg"
              alt="Kutoo Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="font-bold text-3xl" style={{ fontFamily: "'ADLaM Display', sans-serif" }}>
            <span className="text-[#f28482]">K</span>
            <span className="text-[#84a59d]">u</span>
            <span className="text-[#cdb4db]">t</span>
            <span className="text-[#84a59d]">o</span>
            <span className="text-[#e9c46a]">o</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-[#586574] hover:text-foreground transition-colors text-base">
            Features
          </Link>
          <Link href="/#how-it-works" className="text-[#586574] hover:text-foreground transition-colors text-base">
            How It Works
          </Link>
          <Link href="/#testimonials" className="text-[#586574] hover:text-foreground transition-colors text-base">
            Reviews
          </Link>
        </nav>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-[#586574] hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />
          {/* Menu Panel */}
          <nav className="fixed top-[73px] left-0 right-0 bg-[#fefcfc] border-b border-border/50 shadow-lg z-40 md:hidden">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <Link
                href="/#features"
                onClick={closeMenu}
                className="text-[#586574] hover:text-foreground transition-colors text-base py-2"
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                onClick={closeMenu}
                className="text-[#586574] hover:text-foreground transition-colors text-base py-2"
              >
                How It Works
              </Link>
              <Link
                href="/#testimonials"
                onClick={closeMenu}
                className="text-[#586574] hover:text-foreground transition-colors text-base py-2"
              >
                Reviews
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;