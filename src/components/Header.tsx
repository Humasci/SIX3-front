import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceDropdown } from "./ServiceDropdown";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-light">
          Nava.Studio
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm hover:text-accent transition-colors">Home</Link>
          <Link to="/about" className="text-sm hover:text-accent transition-colors">About</Link>
          <ServiceDropdown />
          <Link to="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <ShoppingBag className="w-5 h-5" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
