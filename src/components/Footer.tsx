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
              <li className="hover:text-foreground transition-colors cursor-pointer">Web Design</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Brand Identity</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Digital Marketing</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">UI/UX Design</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Projects</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Contact</li>
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
