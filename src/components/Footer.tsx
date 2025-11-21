import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-light mb-4">Nava.Studio</h3>
            <p className="text-sm text-muted-foreground">
              Full-service digital agency transforming brands.
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
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Twitter</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Dribbble</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Nava Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
