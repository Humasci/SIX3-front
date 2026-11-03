import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const Logo = ({ className = "", isScrolled = false }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-1.5 ${className}`}>
      <div className={`flex items-baseline gap-0.5 transition-all duration-400 ${isScrolled ? 'text-xl' : 'text-2xl'} font-bold`}>
        {/* SIX text */}
        <span className="tracking-tight">SIX</span>

        {/* Lovable-style heart at the end representing the "³" (power of 3) */}
        <svg
          viewBox="0 0 32 40"
          className={`transition-all duration-400 ${isScrolled ? 'w-6 h-8' : 'w-7 h-9'} -ml-1`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#16a34a', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#4ade80', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Lovable-style heart/bookmark shape */}
          <path
            d="M16 3C12.7 3 10 5.7 10 9c0 2 1.1 3.8 2.7 4.7V33l3.3 4 3.3-4V13.7c1.6-.9 2.7-2.7 2.7-4.7 0-3.3-2.7-6-6-6z"
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
