import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const Logo = ({ className = "", isScrolled = false }: LogoProps) => {
  const height = isScrolled ? "h-12" : "h-16";

  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      {/* Heart-shaped logo with X3 */}
      <svg
        viewBox="0 0 48 48"
        className={`${height} w-auto transition-all duration-400`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#16a34a', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4ade80', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Heart shape made from combining curves */}
        <path
          d="M24 42L9 27C3.5 21.5 3.5 12.5 9 7C14.5 1.5 23.5 1.5 24 7.5C24.5 1.5 33.5 1.5 39 7C44.5 12.5 44.5 21.5 39 27L24 42Z"
          fill="url(#heartGradient)"
        />

        {/* X integrated into the heart - white */}
        <g transform="translate(12, 14)">
          <path
            d="M 4 4 L 12 12 M 12 4 L 4 12"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* 3 integrated into the heart - white */}
        <g transform="translate(26, 14)">
          <path
            d="M 2 4 L 8 4 L 5 8 L 8 8 C 9.5 8 10 9 10 10 C 10 11 9.5 12 8 12 L 2 12"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>

      {/* Text logo */}
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-bold tracking-tight">
          SIX<span className="text-accent">3</span>
        </span>
        <span className="text-xs text-muted-foreground tracking-wider uppercase">
          Agency
        </span>
      </div>
    </Link>
  );
};
