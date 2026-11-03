import { useId } from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const LESS_THAN_PATH = "M9.6 5.2 L3.2 12 L9.6 18.8";
export const THREE_PATH =
  "M12.6 6.4 C13.6 5.2 15 4.6 16.6 4.6 C19 4.6 20.4 6 20.4 7.9 C20.4 10 18.6 11.6 16 11.7 C19 11.8 21 13.4 21 15.8 C21 18 19.2 19.5 16.6 19.5 C14.8 19.5 13.3 18.8 12.3 17.5";

// "<3" drawn as strokes so it reads as both a heart and the ³ in SIX³
export const BrandMark = ({ className = "" }: { className?: string }) => {
  const gradientId = `brand-mark-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="2" y1="4" x2="22" y2="20">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="0.45" stopColor="#a855f7" />
          <stop offset="1" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <g fill="none" stroke={`url(#${gradientId})`} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d={LESS_THAN_PATH} />
        <path d={THREE_PATH} />
      </g>
    </svg>
  );
};

export const Logo = ({ className = "", isScrolled = false }: LogoProps) => (
  <Link to="/" aria-label="SIX³ Agency home" className={`flex items-center gap-3 ${className}`}>
    <span
      className={`flex items-start font-extrabold tracking-tighter leading-none transition-all duration-400 ${
        isScrolled ? "text-xl" : "text-2xl"
      }`}
    >
      SIX
      <BrandMark className="w-[0.66em] h-[0.66em] -mt-[0.14em] ml-[0.05em] drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]" />
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
