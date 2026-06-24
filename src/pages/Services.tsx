import React, { useState } from "react";
import { Coins, Briefcase, TrendingUp, ShieldCheck, Heart, Home as HomeIcon, CheckCircle2, AlertCircle, ChevronRight, HelpCircle } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "../types";

interface ServicesProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("personal-loans");

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (iconName: string, sizeClass = "h-5 w-5") => {
    switch (iconName) {
      case "Coins": return <Coins className={sizeClass} />;
      case "Briefcase": return <Briefcase className={sizeClass} />;
      case "TrendingUp": return <TrendingUp className={sizeClass} />;
      case "ShieldCheck": return <ShieldCheck className={sizeClass} />;
      case "Heart": return <Heart className={sizeClass} />;
      case "Home": return <HomeIcon className={sizeClass} />;
      default: return <Coins className={sizeClass} />;
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden animate-fade-in" id="services-page">
      
      {/* 1. Header Hero */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Our Solutions Catalog</span>
          <h1 className="text-3xl font-extrabold font-sans sm:text-4xl lg:text-5xl text-slate-900">
            Broker Solutions & Referral Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover terms across a wide spectrum of personal borrowing, corporate financing, credit counseling, mortgage networks, and asset protection.
          </p>
        </div>
      </section>

      {/* 2. Side-by-side Services Selector */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Navigation tabs (Desktop side panel, mobile row) */}
            <div className="lg:col-span-4 space-y-3" id="services-nav-tabs">
              <span className="hidden lg:block text-xs uppercase font-mono font-bold tracking-wider text-slate-550 mb-2 px-3">Select Solution</span>
              
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-3 lg:pb-0 scrollbar-none snap-x">
                {SERVICES_DATA.map((srv) => {
                  const isActive = srv.id === selectedServiceId;
                  return (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`flex items-center gap-3 w-full text-left p-3.5 rounded-xl border transition-all shrink-0 snap-start select-none cursor-pointer ${
                        isActive
                          ? "bg-slate-900 border-amber-500/50 text-amber-400 shadow-xl"
                          : "bg-white border-slate-200 text-slate-650 hover:border-slate-305 hover:text-slate-900 hover:shadow-md"
                      }`}
                      style={{ minWidth: "220px", lg: "100%" }}
                    >
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                        isActive ? "bg-amber-500/15 border-amber-500/30 text-amber-400" : "bg-slate-50 border-slate-150 text-slate-500"
                      }`}>
                        {getServiceIcon(srv.iconName, "h-4.5 w-4.5")}
                      </div>
                      <span className="text-xs sm:text-sm font-bold tracking-wide">{srv.title}</span>
                      <ChevronRight className={`ml-auto h-4 w-4 hidden lg:block transition-transform ${isActive ? "text-amber-500 translate-x-1" : "text-slate-400"}`} />
                    </button>
                  );
                })}
              </div>

              {/* Instant Call Assist Box */}
              <div className="hidden lg:block p-5 rounded-2xl bg-white border border-slate-200 text-left space-y-2 shadow-xl shadow-slate-100/50">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <HelpCircle className="h-4 w-4 text-amber-600" />
                  <span>Confused about selection?</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-normal">
                  Our core support team can guide you. Call our desk to compare different programs directly on the phone.
                </p>
                <div className="pt-2">
                  <a href="tel:2488908162" className="text-xs font-mono font-bold text-amber-600 hover:underline">(248) 890-8162</a>
                </div>
              </div>
            </div>

            {/* Right Col: Expanded Service details */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-100/70 space-y-8 text-left" id="service-details-panel">
              
              {/* Profile Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                    {getServiceIcon(selectedService.iconName, "h-6 w-6")}
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 font-sans">{selectedService.title}</h2>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 font-bold">Affiliate Broker Program</span>
                  </div>
                </div>
                <button
                  onClick={() => onOpenConsultation(selectedService.title)}
                  className="h-10 px-5 bg-amber-500 hover:bg-amber-600 font-bold text-slate-950 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Check Eligibility
                </button>
              </div>

              {/* Detailed copy */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-500">Program Overview</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedService.longDescription}
                </p>
              </div>

              {/* Benefits & Eligibility Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-200">
                
                {/* Benefits */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Key Solutions & Benefits
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-2"></span>
                        <span className="text-xs text-slate-600 leading-normal">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility */}
                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-550 flex items-center gap-1.5">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                    Standard Referral Eligibility
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedService.eligibility.map((elig, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 mt-2"></span>
                        <span className="text-xs text-slate-550 leading-normal">{elig}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Dynamic Call-to-action bar */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900">Compare {selectedService.title} Offers Today</p>
                  <p className="text-[10px] text-slate-500">Takes under 2 minutes. No initial FICO impact.</p>
                </div>
                <button
                  onClick={() => onOpenConsultation(selectedService.title)}
                  className="w-full sm:w-auto h-9 px-4 rounded-lg bg-slate-900 text-xs font-bold text-amber-400 hover:text-white hover:bg-slate-950 border border-slate-900 transition-all cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. General Helpline Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-slate-100 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            * Broker note: Our matching engine performs initial eligibility sorting based on self-reported and soft credit inputs. Affiliate underwriters may request standard asset proofs, tax returns, or checking verifications. Please contact our Detroit broker desk at <strong className="text-slate-600">(248) 890-8162</strong> for direct assistance.
          </p>
        </div>
      </section>

    </div>
  );
}
