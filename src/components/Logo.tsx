import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const Logo = ({ className = "", isScrolled = false }: LogoProps) => (
  <Link to="/" aria-label="six³ Agency home" className={`flex items-end gap-3 ${className}`}>
    <img
      src="/brand/six3-mark-header.svg"
      alt="six³"
      width={82}
      height={30}
      className={`w-auto transition-all duration-400 ${isScrolled ? "h-6" : "h-[30px]"}`}
    />
    <span className="mb-[3px] h-4 w-px bg-gradient-to-b from-[#7c3aed] to-[#f97316] opacity-70" aria-hidden="true" />
    <span
      className={`mb-[2px] text-muted-foreground uppercase font-medium tracking-[0.28em] transition-all duration-400 ${
        isScrolled ? "text-[9px]" : "text-[10px]"
      }`}
    >
      Agency
    </span>
  </Link>
);
