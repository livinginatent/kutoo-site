import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">K</span>
          </div>
          <span className="font-bold text-xl text-foreground">kutoo</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </a>
        </nav>
  
      </div>
    </header>
  );
};

export default Header;
