import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-light tracking-wider">
        Nava<span className="font-normal">.Studio</span>
      </Link>
      
      <div className="flex items-center gap-6">
        <button className="p-2 hover:bg-secondary/50 rounded-lg transition-colors">
          <ShoppingBag className="w-5 h-5" />
        </button>
        
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-secondary/50 rounded-lg transition-colors">
          <Menu className="w-5 h-5" />
          <span className="text-sm">Menu</span>
        </button>
        
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
          Contact Us
        </Button>
      </div>
    </header>
  );
};
