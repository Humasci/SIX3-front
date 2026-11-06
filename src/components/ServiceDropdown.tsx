import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  { name: "All Services", path: "/services" },
  { name: "Search & Paid Media", path: "/services/search-marketing-ppc" },
  { name: "AI Content Studio", path: "/services/content-creation" },
  { name: "AI Agents & Automation", path: "/services/ai-dev-automation" },
  { name: "Private AI", path: "/services/ml-fine-tuning" },
];

export const ServiceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link to="/services" className="flex items-center gap-1 text-base hover:text-gradient transition-colors relative group">
        Services
        <ChevronDown className="w-4 h-4" />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gradient transition-all duration-300 group-hover:w-full" />
      </Link>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border shadow-lg z-50 rounded-md overflow-hidden">
          {services.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="block px-4 py-3 text-sm hover:bg-accent/10 transition-colors border-b border-border last:border-b-0"
            >
              {service.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
