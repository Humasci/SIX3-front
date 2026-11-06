import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/components/Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

const services = [
  { to: "/services/search-marketing-ppc", label: "Search & Paid Media" },
  { to: "/services/content-creation", label: "AI Content Studio" },
  { to: "/services/ai-dev-automation", label: "AI Agents & Automation" },
  { to: "/services/ml-fine-tuning", label: "Private AI" },
];

const moreLinks = [
  { to: "/portfolio", label: "Our Work" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);
  const linkClass = "block py-3 text-3xl font-light text-foreground hover:text-gradient transition-colors";

  // Rendered in a portal: the header's transform and backdrop blur would otherwise trap the overlay inside it
  const overlay = (
    <div className="fixed inset-0 z-[100] flex flex-col bg-background md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <Logo />
        <button onClick={close} className="p-2 -mr-2 text-foreground" aria-label="Close menu">
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-6 py-8">
        {links.map((l) => (
          <Link key={l.to} to={l.to} onClick={close} className={linkClass}>
            {l.label}
          </Link>
        ))}

        <div className="py-3">
          <Link to="/services" onClick={close} className="block text-3xl font-light text-foreground hover:text-gradient transition-colors">
            Services
          </Link>
          <div className="mt-4 ml-1 space-y-3 border-l-2 border-transparent pl-4 [border-image:linear-gradient(to_bottom,#7c3aed,#f97316)_1]">
            {services.map((s) => (
              <Link key={s.to} to={s.to} onClick={close} className="block text-lg text-muted-foreground hover:text-foreground transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {moreLinks.map((l) => (
          <Link key={l.to} to={l.to} onClick={close} className={linkClass}>
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="px-6 py-6 border-t border-border">
        <a href="mailto:hello@six3.agency" className="text-muted-foreground hover:text-gradient transition-colors">
          hello@six3.agency
        </a>
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 text-foreground"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6" />
      </button>
      {isOpen && createPortal(overlay, document.body)}
    </div>
  );
};
