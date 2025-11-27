import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const industries = [
  { name: "Legal & Law Firms", path: "/industries/legal" },
  { name: "Real Estate", path: "/industries/real-estate" },
  { name: "Healthcare", path: "/industries/healthcare" },
  { name: "Professional Services", path: "/industries/professional-services" },
  { name: "Local Businesses", path: "/industries/local-business" },
];

export const IndustryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-base hover:text-accent transition-colors relative group">
        Industries
        <ChevronDown className="w-4 h-4" />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border shadow-lg z-50 rounded-md overflow-hidden">
          {industries.map((industry) => (
            <Link
              key={industry.path}
              to={industry.path}
              className="block px-4 py-3 text-sm hover:bg-accent/10 transition-colors border-b border-border last:border-b-0"
            >
              {industry.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};