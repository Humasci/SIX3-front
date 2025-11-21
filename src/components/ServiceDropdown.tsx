import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  { name: "Search Marketing / PPC", path: "/services/search-marketing-ppc" },
  { name: "Content Creation", path: "/services/content-creation" },
  { name: "AI Automation / Dev", path: "/services/ai-automation-dev" },
  { name: "ML Fine Tuning", path: "/services/ml-fine-tuning" },
];

export const ServiceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm hover:text-accent transition-colors">
        Services
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border shadow-lg z-50">
          {services.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="block px-4 py-3 text-sm hover:bg-accent/10 transition-colors"
            >
              {service.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
