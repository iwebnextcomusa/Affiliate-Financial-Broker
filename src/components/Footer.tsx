import React from "react";
import { Landmark, Phone, Mail, Clock, ShieldCheck, ExternalLink } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-150/80 border-t border-slate-200 text-slate-600 font-sans" id="app-footer">
      {/* Primary Links and Corporate Info */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Column 1: Company Profile */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick("home")}>
              <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 shadow-md">
                <Landmark className="h-4.5 w-4.5 text-amber-500 stroke-[2.5]" />
              </div>
              <span className="font-sans text-lg font-bold text-slate-900 tracking-tight">iWebNext</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Leading Affiliate Financial Broker helping clients navigate personal loans, small business financing, mortgage solutions, and comprehensive credit consultation.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-amber-700 font-mono font-bold bg-white p-2 rounded border border-slate-200 w-fit">
              <ShieldCheck className="h-4 w-4 shrink-0 text-amber-500" />
              <span>Compliant Referral Agent</span>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">Our Brokerage</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-amber-600 transition-colors text-left text-slate-550 font-medium cursor-pointer">
                  Personal Loans
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-amber-600 transition-colors text-left text-slate-550 font-medium cursor-pointer">
                  Business Financing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-amber-600 transition-colors text-left text-slate-550 font-medium cursor-pointer">
                  Credit Repair Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-amber-600 transition-colors text-left text-slate-550 font-medium cursor-pointer">
                  Investment Referrals
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-amber-600 transition-colors text-left text-slate-550 font-medium cursor-pointer">
                  Mortgages & Lending
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">Governance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick("about")} className="hover:text-amber-600 transition-colors text-left text-slate-550 font-medium cursor-pointer">
                  About Our Network
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("partners")} className="hover:text-amber-600 transition-colors text-left text-slate-550 font-medium cursor-pointer">
                  Referral Partners
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("compliance")} className="hover:text-amber-600 transition-colors text-left text-slate-550 font-medium cursor-pointer">
                  Affiliate Disclosure
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("compliance")} className="hover:text-amber-600 transition-colors text-left text-slate-550 font-medium cursor-pointer">
                  Privacy & Cookie Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("compliance")} className="hover:text-amber-600 transition-colors text-left text-slate-550 font-medium cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Reach Us */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-wider uppercase">Contact Broker Desk</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-700 font-medium">
                <Phone className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                <a href="tel:2488908162" className="hover:text-amber-600 transition-colors">(248) 890-8162</a>
              </li>
              <li className="flex items-center gap-2 text-slate-700 font-medium">
                <Mail className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                <a href="mailto:a1travelticket@gmail.com" className="hover:text-amber-600 transition-colors">a1travelticket@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-slate-500 font-medium">
                <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM EST</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Affiliate Disclosure & Safety Warning Banner */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="p-4 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-500 leading-relaxed space-y-2">
            <p className="font-bold text-slate-800">Affiliate Referral and Brokerage Disclosure:</p>
            <p>
              iWebNext operates as an independent affiliate financial broker and advertising referral desk. We do not provide direct lending, banking, or direct investment underwriting services. All financial solutions, rates, approvals, products, and services highlighted on this website are provided through third-party affiliate partners, vetted institutional lenders, and registered advisory companies. 
            </p>
            <p>
              Applying through this portal does not guarantee credit approval, loan issuance, or specific financial terms. Interest rates, fees, down payments, and program structures vary based on credit history, income verifications, debt ratios, and the individual partner lender's guidelines. Users are advised to review all loan agreements, program details, and legal disclosures from specific partners and conduct their own rigorous due diligence before executing any binding financial agreement.
            </p>
          </div>
        </div>

        {/* Developer Credit & Copyright Section */}
        <div className="mt-8 pt-6 border-t border-slate-200 text-center flex flex-col items-center justify-center space-y-2">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} iWebNext. All rights reserved. 
          </p>
          <div className="text-xs text-slate-600 flex items-center justify-center gap-1 font-semibold bg-white px-4 py-1.5 rounded-full border border-slate-200">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 transition-colors underline decoration-dotted inline-flex items-center gap-1">iWebNext <ExternalLink className="h-3 w-3 text-amber-500" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
