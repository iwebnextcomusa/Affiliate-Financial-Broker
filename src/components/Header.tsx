import React, { useState } from "react";
import { Landmark, Menu, X, Phone, Mail } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConsultation: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "partners", label: "Partner Network" },
    { id: "blog", label: "Resources" },
    { id: "contact", label: "Contact Us" }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top Banner (Contact Info) */}
      <div className="bg-slate-900 px-4 py-2 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:2488908162" className="flex items-center gap-1.5 transition-colors hover:text-amber-400">
              <Phone className="h-3.5 w-3.5 text-amber-500" />
              <span>(248) 890-8162</span>
            </a>
            <a href="mailto:a1travelticket@gmail.com" className="flex items-center gap-1.5 transition-colors hover:text-amber-400">
              <Mail className="h-3.5 w-3.5 text-amber-500" />
              <span>a1travelticket@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-[10px] tracking-wider uppercase">Affiliate Referral Network Active</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick("home")} 
          className="flex cursor-pointer items-center gap-2.5 group"
          id="brand-logo"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 shadow-lg shadow-slate-900/10 group-hover:scale-105 transition-transform">
            <Landmark className="h-5.5 w-5.5 text-amber-500 stroke-[2]" />
          </div>
          <div>
            <span className="font-sans text-xl font-bold tracking-tight text-slate-900">
              iWebNext
            </span>
            <span className="block font-mono text-[9px] tracking-widest text-amber-600 uppercase font-bold">
              Financial Broker
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative font-sans text-sm font-semibold tracking-wide transition-colors py-1 ${
                activeTab === item.id 
                  ? "text-slate-900" 
                  : "text-slate-600 hover:text-amber-600"
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-amber-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-lg bg-amber-500 px-5 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/10 hover:bg-amber-600 active:scale-[0.98] transition-all"
            id="nav-consultation-btn"
          >
            Get Free Consultation
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 md:hidden"
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden animate-fade-in shadow-lg" id="mobile-nav-menu">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex w-full py-2.5 px-3 rounded-lg text-left text-sm font-semibold transition-colors ${
                  activeTab === item.id 
                    ? "bg-slate-50 text-amber-600 border-l-2 border-amber-500" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-2 flex w-full h-11 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-slate-950 hover:bg-amber-600"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
