import { useId } from "react";
import { Link } from "react-router-dom";
import { PARTICLE_THREE } from "@/components/particleThree";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

// The ³ in SIX³, drawn as a clump of lit, overlapping particles
export const BrandMark = ({ className = "" }: { className?: string }) => {
  const highlightId = `brand-hl-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={highlightId} cx="0.34" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#fff" stopOpacity="0.75" />
          <stop offset="0.28" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="0.6" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#0b0820" stopOpacity="0.55" />
        </radialGradient>
      </defs>
      {PARTICLE_THREE.map(([x, y, r, color, depth], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill={color} />
          <circle cx={x} cy={y} r={r} fill={`url(#${highlightId})`} />
          {/* Beads further back sit in shadow, which gives the clump its depth */}
          <circle cx={x} cy={y} r={r} fill="#0b0820" opacity={(1 - depth) * 0.38} />
        </g>
      ))}
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
      <BrandMark className="w-[0.66em] h-[0.66em] -mt-[0.2em] ml-[0.03em] drop-shadow-[0_0_5px_rgba(168,85,247,0.45)]" />
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
