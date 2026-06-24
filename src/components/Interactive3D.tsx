import React from "react";

export default function Interactive3D() {
  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 border border-slate-800 shadow-2xl group">
      {/* Image Container representing the Matchmaking Dashboard */}
      <div className="absolute inset-0 w-full h-full overflow-hidden" id="threejs-canvas">
        <img
          src="/src/assets/images/financial_lender_matching_dashboard_1782325236459.jpg"
          alt="Vetted Lending & Broker Ecosystem"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
      </div>

      {/* Floating UI overlay */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pointer-events-none p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800/80 shadow-2xl transition-all duration-300 group-hover:border-amber-500/30">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <p className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">Lender Comparison Portal</p>
          </div>
          <h4 className="text-sm font-sans font-semibold text-white mt-1">Multi-Lender Network matching</h4>
          <p className="text-[11px] font-sans text-slate-400 mt-0.5">Secure, automated referral engine comparing 15+ institutional lenders.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
          <span className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[10px] uppercase font-bold text-amber-400 tracking-wider">
            Verified Broker
          </span>
        </div>
      </div>
    </div>
  );
}

