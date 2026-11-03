import { useId } from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const HEART_PATH =
  "M12 21.2c-.4 0-.8-.1-1.1-.4C6.2 17 2.5 13.6 2.5 9.3 2.5 6.2 4.9 3.8 7.9 3.8c1.6 0 3.1.7 4.1 1.9 1-1.2 2.5-1.9 4.1-1.9 3 0 5.4 2.4 5.4 5.5 0 4.3-3.7 7.7-8.4 11.5-.3.3-.7.4-1.1.4z";

export const Logo = ({ className = "", isScrolled = false }: LogoProps) => {
  const gradientId = `logo-heart-${useId().replace(/:/g, "")}`;

  return (
    <Link to="/" aria-label="SIX³ Agency home" className={`flex items-center gap-3 ${className}`}>
      <span
        className={`flex items-start font-extrabold tracking-tighter leading-none transition-all duration-400 ${
          isScrolled ? "text-xl" : "text-2xl"
        }`}
      >
        SIX
        <svg
          viewBox="0 0 24 24"
          className="w-[0.6em] h-[0.6em] -mt-[0.12em] ml-[0.04em] drop-shadow-[0_0_6px_rgba(168,85,247,0.55)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="42%" stopColor="#a855f7" />
              <stop offset="80%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
          <path d={HEART_PATH} fill={`url(#${gradientId})`} />
        </svg>
      </span>
      <span className="h-4 w-px bg-gradient-to-b from-[#7c3aed] to-[#f97316] opacity-70" aria-hidden="true" />
      <span
        className={`text-muted-foreground uppercase font-medium tracking-[0.28em] transition-all duration-400 ${
          isScrolled ? "text-[9px]" : "text-[10px]"
        }`}
      >
        Agency
      </span>
    </Link>
  );
};
