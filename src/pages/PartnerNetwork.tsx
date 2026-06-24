import React, { useState } from "react";
import { PARTNERS_DATA, PartnerItem } from "../types";
import { Check, ShieldCheck, Filter, ArrowRight, ClipboardCheck, Sparkles, AlertCircle } from "lucide-react";

interface PartnerNetworkProps {
  onOpenConsultation: () => void;
}

export default function PartnerNetwork({ onOpenConsultation }: PartnerNetworkProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", "Personal & Business Lending", "Commercial Financing", "Credit Solutions", "Investments & Retirement", "Insurance & Asset Protection"];

  const filteredPartners = selectedFilter === "All"
    ? PARTNERS_DATA
    : PARTNERS_DATA.filter((p) => p.category === selectedFilter);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden animate-fade-in" id="partner-network-page">
      
      {/* 1. Header Banner */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Our Network</span>
          <h1 className="text-3xl font-extrabold font-sans sm:text-4xl lg:text-5xl text-slate-900">
            Vetted Affiliate Partners
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We partner with leading, federally compliant alternative lenders, wholesale mortgage brokers, credit counselors, and wealth managers.
          </p>
        </div>
      </section>

      {/* 2. Referral Workflow (How It Works) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Step-by-step</h2>
            <h3 className="text-3xl font-extrabold text-slate-900">How the Referral Process Works</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We leverage automation and broker relationships to make borrowing, credit repair, or insuring simple and efficient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Step 1 */}
            <div className="relative p-6 rounded-2xl bg-white border border-slate-200 text-left space-y-3 shadow-xl shadow-slate-200/50">
              <span className="absolute top-4 right-4 text-3xl font-black font-mono text-slate-100">01</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-650 border border-amber-200">
                <ClipboardCheck className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Submit Inquiry</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Complete a single 2-minute inquiry form specifying the financial solution you need. We conduct a soft check that keeps your credit secure.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-2xl bg-white border border-slate-200 text-left space-y-3 shadow-xl shadow-slate-200/50">
              <span className="absolute top-4 right-4 text-3xl font-black font-mono text-slate-100">02</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-650 border border-amber-200">
                <Filter className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Filter & Match</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Our matching engine filters terms across Summit Capital, Apex, Vanguard, and more, identifying the top 3 highest-approval candidates.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-2xl bg-white border border-slate-200 text-left space-y-3 shadow-xl shadow-slate-200/50">
              <span className="absolute top-4 right-4 text-3xl font-black font-mono text-slate-100">03</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-650 border border-amber-200">
                <Sparkles className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Final Underwriting</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                We coordinate a secure referral handoff. Our partners provide you with finalized competitive terms and direct fund deposits.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Showcase Partner Comparison Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6 mb-8 text-left">
            <div>
              <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Interactive Directory</h2>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-sans">Our Featured Network Directory</h3>
              <p className="text-xs text-slate-500 mt-0.5">Filter by service category to review matching affiliate criteria.</p>
            </div>

            {/* Filters bar */}
            <div className="flex flex-wrap gap-2 animate-fade-in">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer select-none transition-all ${
                    selectedFilter === cat
                      ? "bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-md"
                      : "bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-300"
                  }`}
                >
                  {cat === "All" ? "View All" : cat.replace(" & ", "/")}
                </button>
              ))}
            </div>
          </div>

          {/* Directory Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="partners-list">
            {filteredPartners.map((partner) => (
              <div 
                key={partner.id} 
                className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between text-left relative overflow-hidden shadow-xl shadow-slate-100 transition-all hover:shadow-2xl"
              >
                {/* Score badge */}
                <div className="absolute top-6 right-6 bg-amber-50 border border-amber-200 text-amber-700 px-2.5 py-1 rounded font-mono text-[10px] font-bold">
                  {partner.matchScore}
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">{partner.category}</span>
                    <h4 className="text-lg font-extrabold text-slate-900 mt-0.5">{partner.name}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-md">
                    {partner.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2">
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-bold mb-2">Program Features:</p>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {partner.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-mono font-bold">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Compliant Referral Partner</span>
                  </div>
                  <button 
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                  >
                    Compare Rates <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Advantages Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-850 text-slate-300 text-left">
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                <AlertCircle className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h5 className="text-sm font-extrabold text-white">Benefits of Comparing Multiple Providers</h5>
                <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                  Applying directly to a single provider restricts you only to their individual terms. Financial studies demonstrate that comparing terms across at least three providers saves an average of <strong className="text-white">$1,450</strong> on personal debt consolidation terms, and up to <strong className="text-white">1.25%</strong> on mortgage interest payments. We refer inquiries solely to transparent, vetted institutions.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-amber-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    Compare Vetted Rates Now <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
