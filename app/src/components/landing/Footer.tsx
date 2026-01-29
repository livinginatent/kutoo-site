import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-4 hover:opacity-80 transition-opacity">
              <div className="relative w-10 h-9 flex-shrink-0">
                <Image
                  src="/Logo.svg"
                  alt="Kutoo Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-bold text-2xl" style={{ fontFamily: "'ADLaM Display', sans-serif" }}>
                <span className="text-[#f28482]">K</span>
                <span className="text-[#84a59d]">u</span>
                <span className="text-[#cdb4db]">t</span>
                <span className="text-[#84a59d]">o</span>
                <span className="text-[#e9c46a]">o</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              The smartest way to start your crypto journey. Learn, practice, and invest with confidence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/download" className="text-muted-foreground hover:text-foreground transition-colors">Download app</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Kutoo. All rights reserved.
          </p>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
