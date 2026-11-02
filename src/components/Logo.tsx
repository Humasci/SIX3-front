import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const Logo = ({ className = "", isScrolled = false }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      {/* Simple, clean text logo */}
      <div className={`flex items-baseline gap-1 transition-all duration-400 ${isScrolled ? 'text-xl' : 'text-2xl'} font-bold`}>
        <span className="tracking-tight">SIX3</span>
        <span className={`font-normal text-muted-foreground tracking-wider uppercase transition-all duration-400 ${isScrolled ? 'text-[10px]' : 'text-xs'}`}>
          Agency
        </span>
      </div>
    </Link>
  );
};
