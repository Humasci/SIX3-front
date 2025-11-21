import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t border-border z-50">
          <nav className="flex flex-col p-6 space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-accent transition-colors"
            >
              About
            </Link>
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground">Services</p>
              <div className="pl-4 space-y-2">
                <Link
                  to="/services/search-marketing-ppc"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-accent transition-colors"
                >
                  Search Marketing / PPC
                </Link>
                <Link
                  to="/services/content-creation"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-accent transition-colors"
                >
                  Content Creation
                </Link>
                <Link
                  to="/services/ai-automation-dev"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-accent transition-colors"
                >
                  AI Automation / Dev
                </Link>
                <Link
                  to="/services/ml-fine-tuning"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-accent transition-colors"
                >
                  ML Fine Tuning
                </Link>
              </div>
            </div>
            <Link
              to="/portfolio"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-accent transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
