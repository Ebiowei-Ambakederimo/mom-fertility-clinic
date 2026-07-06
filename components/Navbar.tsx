"use client";

import React, { useState } from "react";
import { Search, Menu, X, Baby } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Treatments', href: '/#treatments' },
    { name: 'Success Stories', href: '/#success' },
    { name: 'Contact', href: '/#booking' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);

    if (href.includes("#")) {
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);

      if (pathname === "/" && element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    } else if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 lg:px-20 text-white/90">
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer" onClick={(e) => {
          if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}>
          <Baby className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
          <span className="text-2xl font-bold tracking-tight text-white">MOM Fertility</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block hover:text-white transition-colors" aria-label="Search">
            <Search className="w-6 h-6" />
          </button>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>

          <button className="hidden md:block hover:text-white transition-colors" aria-label="Menu">
             <div className="flex flex-col gap-1.5 items-end">
                <span className="w-6 h-0.5 bg-current"></span>
                <span className="w-4 h-0.5 bg-current"></span>
             </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900/95 z-50 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <Baby className="w-8 h-8 text-blue-400" strokeWidth={2.5} />
              <span className="text-2xl font-bold text-white">MOM Fertility</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white">
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <div className="flex flex-col gap-8 items-start justify-start flex-1 pl-4 pt-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-medium text-white/80 hover:text-white transition-colors"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;