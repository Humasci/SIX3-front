import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const Logo = ({ className = "", isScrolled = false }: LogoProps) => {
  const height = isScrolled ? "h-10" : "h-12";

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      {/* Logo: SI + heart(X³) forming SIX3 */}
      <div className="flex items-center gap-0">
        {/* SI text */}
        <span className={`font-bold tracking-tight transition-all duration-400 ${isScrolled ? 'text-2xl' : 'text-3xl'}`}>
          SI
        </span>

        {/* Heart shape made from tilted X and superscript 3 */}
        <svg
          viewBox="0 0 32 36"
          className={`transition-all duration-400 ${isScrolled ? 'w-7 h-7' : 'w-8 h-8'} -ml-0.5`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient definition */}
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#16a34a', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#4ade80', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Heart outline shape */}
          <path
            d="M16 32L6 22C2.5 18.5 2.5 12.5 6 9C9.5 5.5 15.5 5.5 16 9.5C16.5 5.5 22.5 5.5 26 9C29.5 12.5 29.5 18.5 26 22L16 32Z"
            fill="url(#heartGradient)"
          />

          {/* Tilted X in the middle - white */}
          <g transform="translate(16, 18) rotate(-15) translate(-6, -6)">
            <path
              d="M 2 2 L 10 10 M 10 2 L 2 10"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>

          {/* Superscript 3 in top right - white */}
          <g transform="translate(20, 6)">
            <path
              d="M 1 1 L 5 1 L 3 3.5 L 5 3.5 C 6 3.5 6.5 4 6.5 5 C 6.5 6 6 6.5 5 6.5 L 1 6.5"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </svg>

        {/* Agency subtitle */}
        <span className={`ml-2 text-muted-foreground tracking-wider uppercase transition-all duration-400 ${isScrolled ? 'text-[10px]' : 'text-xs'}`}>
          Agency
        </span>
      </div>
    </Link>
  );
};
