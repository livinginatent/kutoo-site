import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fefcfc] border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
          <div className="relative w-10 h-9 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Kutoo Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-bold text-2xl leading-none">
            <span className="text-[#f28482]">K</span>
            <span className="text-[#84a59d]">u</span>
            <span className="text-[#cdb4db]">t</span>
            <span className="text-[#84a59d]">o</span>
            <span className="text-[#e9c46a]">o</span>
          </p>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[#586574] hover:text-foreground transition-colors text-base">
            Features
          </a>
          <a href="#how-it-works" className="text-[#586574] hover:text-foreground transition-colors text-base">
            How It Works
          </a>
          <a href="#testimonials" className="text-[#586574] hover:text-foreground transition-colors text-base">
            Reviews
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
