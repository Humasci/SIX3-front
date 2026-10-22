import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const Logo = ({ className = "", isScrolled = false }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-0 ${className}`}>
      <div className={`flex items-center transition-all duration-400 ${isScrolled ? 'text-2xl' : 'text-3xl'} font-bold`}>
        {/* S I letters */}
        <span className="tracking-tight">SI</span>

        {/* Heart shape formed by X and 3 - slightly tilted */}
        <svg
          viewBox="0 0 60 60"
          className={`transition-all duration-400 ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'} -ml-0.5`}
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

          {/* Background heart fill */}
          <g transform="rotate(-10 30 30)">
            <path
              d="M30 50 L15 35 C10 30 10 20 15 15 C20 10 28 10 30 15 C32 10 40 10 45 15 C50 20 50 30 45 35 Z"
              fill="url(#heartGradient)"
              opacity="0.15"
            />
          </g>

          {/* X forming left side of heart - white, tilted */}
          <g transform="rotate(-10 30 30)">
            <path
              d="M 18 18 L 30 30 M 30 18 L 18 30"
              stroke="url(#heartGradient)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </g>

          {/* 3 forming right side of heart - white, tilted */}
          <g transform="rotate(-10 30 30)">
            <path
              d="M 35 18 L 42 18 L 38 24 L 42 24 C 44 24 45 25 45 27 C 45 29 44 30 42 30 L 35 30"
              stroke="url(#heartGradient)"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </svg>

        {/* Agency subtitle */}
        <span className={`ml-2 text-muted-foreground tracking-wider uppercase font-normal transition-all duration-400 ${isScrolled ? 'text-[10px]' : 'text-xs'}`}>
          Agency
        </span>
      </div>
    </Link>
  );
};
