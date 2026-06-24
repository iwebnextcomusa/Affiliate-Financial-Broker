import React from "react";
import { ShieldCheck, Heart, UserCheck, Landmark, Scale, Award } from "lucide-react";

interface AboutProps {
  onOpenConsultation: () => void;
}

export default function About({ onOpenConsultation }: AboutProps) {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden animate-fade-in" id="about-page">
      
      {/* 1. Header Hero Banner */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl relative space-y-4 text-center">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Our Identity</span>
          <h1 className="text-3xl font-extrabold font-sans sm:text-4xl lg:text-5xl text-slate-900">
            About iWebNext Financial Broker
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A compliant, client-first referral desk dedicated to removing the complexity, friction, and high interest costs of standard retail credit searches.
          </p>
        </div>
      </section>

      {/* 2. Mission & Value Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 text-left">
              <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Core Mission</h2>
              <h3 className="text-3xl font-extrabold text-slate-900">Empowering Financial Decisions</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At iWebNext, our mission is simple: to level the playing field for individuals and small business owners. Traditional lending favors big banks with complex underwriting rules that reject worthy candidates or offer inflated rates. 
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                By operating as an affiliate broker, we do not issue capital ourselves. Instead, we use our extensive industry relationships to direct your profiles to lenders pre-vetted for high approval rates, lower fees, and favorable repayment terms. We believe in absolute transparency, rigorous compliance, and dedicated client assistance.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 h-11 bg-amber-500 font-bold text-slate-950 rounded-lg hover:bg-amber-600 active:scale-95 transition-all text-xs uppercase tracking-wider cursor-pointer"
                >
                  Request A Consultant Call
                </button>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="values-grid">
              
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-100 space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-650 border border-amber-200">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Trust & Compliance</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  We strictly operate under state and federal advertising guidelines, ensuring clear affiliate disclosures on all partner matches.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-100 space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-55 text-amber-650 border border-amber-200">
                  <Heart className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Client-Centricity</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Your interest is our target. We filter out predatory structures to connect you with competitive rates.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-100 space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-55 text-amber-650 border border-amber-200">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Unbiased Referrals</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  We are not incentivized to select one lender over another; we refer you to whoever offers the absolute best terms.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-100 space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-55 text-amber-650 border border-amber-200">
                  <Scale className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Rigorous Diligence</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  We routinely evaluate our affiliate partner networks, checking customer service histories and transparency scores.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Role of Affiliate Broker vs Traditional Bank */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-slate-200">
        <div className="mx-auto max-w-7xl text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Comparison Authority</h2>
            <h3 className="text-3xl font-extrabold text-slate-900">The Broker Advantage</h3>
            <p className="text-xs text-slate-500">
              Understand how our affiliate referral channel operates compared to direct retail banking models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            
            {/* Box 1: Retail Bank */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4">
              <h4 className="text-lg font-bold text-slate-700">Direct Retail Bank</h4>
              <ul className="space-y-3 text-xs text-slate-500">
                <li className="flex gap-2">
                  <span className="text-rose-600 font-bold">❌</span>
                  <span>Limits applications only to their single in-house financial product.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-600 font-bold">❌</span>
                  <span>Demands rigid underwriting—rejections occur easily on minor criteria.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-600 font-bold">❌</span>
                  <span>Hard credit checks on every initial submission, depressing your score.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-600 font-bold">❌</span>
                  <span>Long approval cycles with extensive physical paper trail demands.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: iWebNext */}
            <div className="p-6 rounded-2xl border border-amber-55 bg-white shadow-xl shadow-slate-100 space-y-4">
              <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                iWebNext Affiliate Broker
              </h4>
              <ul className="space-y-3 text-xs text-slate-650">
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✔</span>
                  <span>Compares multiple premium partners simultaneously with one inquiry.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✔</span>
                  <span>Matches profiles dynamically, raising approval prospects.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✔</span>
                  <span>Uses initial soft pulls that protect credit health from damage.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 font-bold">✔</span>
                  <span>Accelerated online channels—funds arrive as fast as 24 hours.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Credentials & Contact Helper */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-900">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mx-auto">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">Committed to Financial Clarity</h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
            Have questions regarding our affiliate broker guidelines, or need customized guidance on matching with the right partner? Speak to an expert immediately.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400 font-mono pt-4">
            <span>Direct Line: <a href="tel:2488908162" className="text-white hover:text-amber-400 font-semibold">(248) 890-8162</a></span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>Support Email: <a href="mailto:a1travelticket@gmail.com" className="text-white hover:text-amber-400 font-semibold">a1travelticket@gmail.com</a></span>
          </div>
        </div>
      </section>

    </div>
  );
}
