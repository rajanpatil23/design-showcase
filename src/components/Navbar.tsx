import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/connecttly-logo.png";

const servicesItems = [
  { label: "Performance Marketing", path: "/services" },
  { label: "Social Media Management", path: "/services" },
  { label: "LinkedIn Growth", path: "/services" },
  { label: "Search Engine Optimisation", path: "/services" },
  { label: "Content & Creative", path: "/services" },
  { label: "Web & AI Automation", path: "/services" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services", hasDropdown: true },
    { label: "Resources", path: "#", hasDropdown: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-main flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Connecttly" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isServices = link.label === "Services";
            return (
              <div key={link.label} className={isServices ? "relative group" : ""}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium flex items-center gap-1 transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {isServices && (
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="w-64 bg-background border border-border rounded-xl shadow-lg p-2">
                      {servicesItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.path}
                          className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button size="sm" className="rounded-full px-6 font-semibold">
            Start for Free
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 mt-1 space-y-1 border-l border-border">
                      {servicesItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.path}
                          className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                to={link.path}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Button size="sm" className="w-full rounded-full font-semibold mt-2">
            Start for Free
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
