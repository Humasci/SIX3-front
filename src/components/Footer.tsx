import { Link } from "react-router-dom";
import { Linkedin, Instagram, Dribbble, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-light mb-4">SIX3 Agency</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered marketing and automation agency.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/services/search-marketing-ppc">Search Marketing / PPC</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/services/content-creation">Content Creation</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/services/ai-dev-automation">AI Dev / Automation</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/services/ml-fine-tuning">ML Fine Tuning</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider">Connect</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a href="https://linkedin.com/company/six3-agency" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/six3agency" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://dribbble.com/six3agency" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Dribbble">
                  <Dribbble className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@six3.agency" className="hover:text-foreground transition-colors">
                  hello@six3.agency
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2018 - 2025 FKA WEB Limited Registered in England and Wales No. 11642660. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
