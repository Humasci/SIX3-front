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
        <div className="absolute top-full left-0 right-0 w-screen bg-background/95 backdrop-blur-sm border-t border-border shadow-lg z-40 -ml-6">
          <nav className="flex flex-col p-6 space-y-4 max-h-[70vh] overflow-y-auto">
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
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-accent transition-colors"
              >
                Services
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  to="/services/search-marketing-ppc"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-accent transition-colors"
                >
                  Search Marketing & Paid Media
                </Link>
                <Link
                  to="/services/content-creation"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-accent transition-colors"
                >
                  Generative AI Video & Audio
                </Link>
                <Link
                  to="/services/ai-dev-automation"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-accent transition-colors"
                >
                  AI Agent Creation & Automation
                </Link>
              </div>
            </div>
            <Link
              to="/portfolio"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-accent transition-colors"
            >
              Our Work
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
