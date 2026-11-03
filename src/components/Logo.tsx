import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const Logo = ({ className = "", isScrolled = false }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-1.5 ${className}`}>
      <div className={`flex items-start gap-0 transition-all duration-400 ${isScrolled ? 'text-xl' : 'text-2xl'} font-bold`}>
        {/* SIX text */}
        <span className="tracking-tight">SIX</span>

        {/* Lovable heart as superscript (replacing the ³) */}
        <svg
          viewBox="0 0 24 24"
          className={`transition-all duration-400 ${isScrolled ? 'w-3 h-3 mt-0.5' : 'w-4 h-4 mt-1'}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Lovable heart/bookmark shape */}
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="url(#heartGradient)"
          />
        </svg>
      </div>

      {/* Agency text */}
      <span className={`text-muted-foreground tracking-wider uppercase font-normal transition-all duration-400 ${isScrolled ? 'text-[10px]' : 'text-xs'} ml-1`}>
        Agency
      </span>
    </Link>
  );
};
