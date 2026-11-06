import { useId } from "react";
import { Link } from "react-router-dom";
import { PARTICLE_THREE } from "@/components/particleThree";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
  large?: boolean;
}

// The ³ in SIX³, drawn as a fine dust of tiny shaded spheres
export const BrandMark = ({ className = "" }: { className?: string }) => {
  const shadeId = `brand-shade-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={shadeId} cx="0.4" cy="0.36" r="0.66">
          <stop offset="0" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#0b0820" stopOpacity="0.38" />
        </radialGradient>
      </defs>
      {/* Nearer particles are drawn last and brighter, which gives the 3 its depth */}
      {PARTICLE_THREE.map(([x, y, r, color, depth], i) => (
        <g key={i} opacity={0.5 + depth * 0.5}>
          <circle cx={x} cy={y} r={r} fill={color} />
          <circle cx={x} cy={y} r={r} fill={`url(#${shadeId})`} />
        </g>
      ))}
    </svg>
  );
};

export const Logo = ({ className = "", isScrolled = false, large = false }: LogoProps) => {
  // Three sizes: large (header at the top of the page), default, and compact (scrolled header)
  const size = large ? "text-4xl" : isScrolled ? "text-xl" : "text-2xl";
  const rule = large ? "h-7" : "h-4";
  const agency = large ? "text-sm" : isScrolled ? "text-[9px]" : "text-[10px]";
  return (
    <Link to="/" aria-label="SIX³ Agency home" className={`flex items-center ${large ? "gap-4" : "gap-3"} ${className}`}>
      <span className={`flex items-start font-extrabold tracking-tighter leading-none transition-all duration-400 ${size}`}>
        SIX
        <BrandMark className="w-[0.66em] h-[0.66em] -mt-[0.2em] ml-[0.03em]" />
      </span>
      <span className={`${rule} w-px bg-gradient-to-b from-[#7c3aed] to-[#f97316] opacity-70 transition-all duration-400`} aria-hidden="true" />
      <span className={`text-muted-foreground uppercase font-medium tracking-[0.28em] transition-all duration-400 ${agency}`}>
        Agency
      </span>
    </Link>
  );
};
