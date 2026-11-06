import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground">
              AI marketing and automation for UK businesses. Get found, get chosen, get it done.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/services/search-marketing-ppc">Search &amp; Paid Media</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/services/content-creation">AI Content Studio</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/services/ai-dev-automation">AI Agents &amp; Automation</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/services/ml-fine-tuning">Private AI</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider">Case Studies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/use-cases/dui-guide">dui.guide — AI Legal Platform</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/use-cases/law-firm-automation">Law Firm Intake Automation</Link>
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
                <Link to="/portfolio">Our Work</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/terms">Terms</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/cookie-policy">Cookie Policy</Link>
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
        
        <div className="pt-8 border-t border-border flex flex-col-reverse md:flex-row items-center md:justify-between gap-6">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2018 - 2026 FKA WEB Limited Registered in England and Wales No. 11642660. All rights reserved.
          </p>
          <Logo />
        </div>
      </div>
    </footer>
  );
};
