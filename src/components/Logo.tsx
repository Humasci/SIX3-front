import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const Logo = ({ className = "", isScrolled = false }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-1.5 ${className}`}>
      <div className={`flex items-baseline gap-0.5 transition-all duration-400 ${isScrolled ? 'text-xl' : 'text-2xl'} font-bold`}>
        {/* SI text */}
        <span className="tracking-tight">SI</span>

        {/* Green heart replacing the "3" at the end */}
        <svg
          viewBox="0 0 24 28"
          className={`transition-all duration-400 ${isScrolled ? 'w-5 h-6' : 'w-6 h-7'} mb-0.5`}
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
            d="M12 2C9.8 2 8 3.8 8 6c0 1.5.8 2.8 2 3.5V22l2 3 2-3V9.5c1.2-.7 2-2 2-3.5 0-2.2-1.8-4-4-4z"
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
