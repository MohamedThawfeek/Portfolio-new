import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

interface NavigationProps {
  onDownloadCV: () => void;
  onContactScroll: (move: string) => void;
}

export function Navigation({ onDownloadCV, onContactScroll }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Blog", href: "blog" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div onClick={() => onContactScroll("hero")} className="text-2xl font-bold text-gradient cursor-pointer">Thawfeek</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button variant="hero" onClick={onDownloadCV} className="ml-4">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="hero"
                onClick={onDownloadCV}
                className="mt-4 w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
