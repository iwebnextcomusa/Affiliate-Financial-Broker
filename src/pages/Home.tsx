import React from "react";
import { ArrowRight, Coins, Briefcase, TrendingUp, ShieldCheck, Heart, Home as HomeIcon, CheckCircle2, ChevronRight, Star, Quote } from "lucide-react";
import { SERVICES_DATA, TESTIMONIALS_DATA } from "../types";
import Interactive3D from "../components/Interactive3D";

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onOpenConsultation: (serviceTitle?: string) => void;
}

export default function Home({ setActiveTab, onOpenConsultation }: HomeProps) {
  
  const handleServiceClick = () => {
    setActiveTab("services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper to map icon names to Lucide icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Coins": return <Coins className="h-6 w-6 text-amber-500" />;
      case "Briefcase": return <Briefcase className="h-6 w-6 text-amber-500" />;
      case "TrendingUp": return <TrendingUp className="h-6 w-6 text-amber-500" />;
      case "ShieldCheck": return <ShieldCheck className="h-6 w-6 text-amber-500" />;
      case "Heart": return <Heart className="h-6 w-6 text-amber-500" />;
      case "Home": return <HomeIcon className="h-6 w-6 text-amber-500" />;
      default: return <Coins className="h-6 w-6 text-amber-500" />;
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden animate-fade-in" id="home-page">
      
      {/* 1. Hero Section */}
      <section className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Headings & Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800 text-xs text-amber-400 font-mono font-bold">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span>Affiliate Financial Solutions</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white font-sans leading-tight">
                Maximize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-650">Borrowing</span> Power. Compare the Market.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                As a premier affiliate financial broker, we bridge the gap. Instead of applying to a single bank, we evaluate terms across over 15+ vetted lending partners, giving you maximum approvals and lower rates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation()}
                  className="h-12 inline-flex items-center justify-center rounded-xl bg-amber-500 px-7 text-sm font-bold text-slate-950 hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/10 active:scale-95 cursor-pointer uppercase tracking-wider"
                >
                  Get Free Consultation
                </button>
                <button
                  onClick={handleServiceClick}
                  className="h-12 inline-flex items-center justify-center rounded-xl border border-slate-700 px-7 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900 transition-all active:scale-95"
                >
                  Explore Services <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>

              {/* Trust badges */}
              <div className="pt-6 grid grid-cols-2 gap-4 border-t border-slate-800 sm:grid-cols-3">
                <div className="space-y-1">
                  <span className="block text-2xl font-extrabold font-mono text-amber-400">15+</span>
                  <span className="block text-xs text-slate-400">Affiliate Lenders</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-2xl font-extrabold font-mono text-white">$15M+</span>
                  <span className="block text-xs text-slate-400">Brokered Capital</span>
                </div>
                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <span className="block text-2xl font-extrabold font-mono text-white">2 Hrs</span>
                  <span className="block text-xs text-slate-400">Average Turnaround</span>
                </div>
              </div>

            </div>

            {/* Right Col: Interactive 3D Sphere of Network */}
            <div className="lg:col-span-5 relative" id="hero-3d-section">
              <Interactive3D />
              {/* Blur accent glow */}
              <div className="absolute inset-0 bg-amber-500/5 rounded-2xl blur-3xl -z-10 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Overview of financial services and partner offerings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Vetted Marketplace Solutions</h2>
            <h3 className="text-3xl font-extrabold font-sans sm:text-4xl text-slate-900">Compare Elite Financial Offerings</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We eliminate the stress of searching. We refer your inquiries directly to specialized institutional partners who fit your exact credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {SERVICES_DATA.map((srv) => (
              <div 
                key={srv.id} 
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                    {renderIcon(srv.iconName)}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mt-4 group-hover:text-amber-600 transition-colors">{srv.title}</h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{srv.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button 
                    onClick={() => onOpenConsultation(srv.title)}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                  >
                    Get Rates <ChevronRight className="h-3 w-3" />
                  </button>
                  <button 
                    onClick={handleServiceClick}
                    className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Benefits of working with an affiliate financial broker */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Why Choose Us</h2>
              <h3 className="text-3xl font-extrabold font-sans sm:text-4xl text-slate-900">The Affiliate Advantage</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Applying directly to individual lenders can be exhausting and negatively impact your credit profile due to repetitive hard credit pulls. As an affiliate broker, we coordinate the comparisons behind the scenes, matching your profile only with institutions likely to approve.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Bypasses Credit Bureau Friction</h5>
                    <p className="text-xs text-slate-500 mt-0.5">We conduct an initial soft-pull query that does not affect your FICO score to narrow down pre-approved products.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Wholesale Lending Rates</h5>
                    <p className="text-xs text-slate-500 mt-0.5">Our affiliate partners operate on volume institutional scales, yielding lower rates than walk-in retail banks.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Expert Guidance & Compliance</h5>
                    <p className="text-xs text-slate-500 mt-0.5">We review all eligibility guidelines for FHA, business MCAs, or debt restructuring to avoid wasted applications.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab("about")}
                  className="px-5 py-2.5 border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-lg active:scale-95 transition-all cursor-pointer"
                >
                  Meet Our Team
                </button>
              </div>
            </div>

            {/* Visual representation */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xl shadow-slate-100/80 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-12 -mt-12 h-24 w-24 rounded-full bg-blue-500/5 blur-xl" />
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold text-amber-600 tracking-wider">LENDER MATCH RATE ENGINE</span>
                <span className="text-xs bg-emerald-55 text-emerald-600 border border-emerald-200 px-2.5 py-0.5 rounded font-mono font-bold">98.4% Match Rate</span>
              </div>

              <div className="space-y-4 text-xs font-sans">
                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-900">1. Secure Profile Submission</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Single inquiry triggers multiple soft reviews.</p>
                  </div>
                  <span className="text-[10px] bg-slate-50 border border-slate-150 px-2 py-0.5 rounded font-mono text-slate-400">Completed</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-900">2. Automatic Algorithm Filtering</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Filters out high-APR and predatory offers.</p>
                  </div>
                  <span className="text-[10px] bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded font-mono text-emerald-600 font-bold">Filtering Active</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-900">3. Final Broker Selection</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Brokers negotiate final terms with top 3 partners.</p>
                  </div>
                  <span className="text-[10px] bg-slate-50 border border-slate-150 px-2 py-0.5 rounded font-mono text-slate-500">Pending</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 leading-normal flex items-center gap-1.5 justify-center">
                <span>Direct Office Line:</span>
                <a href="tel:2488908162" className="text-slate-900 hover:text-amber-600 hover:underline font-bold font-mono">(248) 890-8162</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Testimonials section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Client Reviews</h2>
            <h3 className="text-3xl font-extrabold text-slate-900">What Clients Say</h3>
            <p className="text-xs text-slate-500 leading-normal">
              Read real accounts from individuals and corporate officers who utilized our broker channel to secure financing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div 
                key={t.id} 
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-100/55 relative flex flex-col justify-between"
              >
                <div className="absolute top-6 right-6 text-slate-200">
                  <Quote className="h-8 w-8 stroke-[1.5]" />
                </div>
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{t.name}</h5>
                    <p className="text-[10px] text-slate-400">{t.role}</p>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-900">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <h3 className="text-xs uppercase font-mono font-bold tracking-widest text-amber-400">Start Your Comparison Journey</h3>
          <h4 className="text-3xl font-extrabold font-sans sm:text-4xl text-white">
            Ready to secure competitive market terms?
          </h4>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Fill out our secure consultation inquiry. A certified financial partner coordinator will analyze your information and follow up.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation()}
              className="h-12 w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-amber-500 px-8 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-all shadow shadow-amber-500/10 uppercase tracking-wider cursor-pointer"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => {
                setActiveTab("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="h-12 w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-800 px-8 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
            >
              Contact Support
            </button>
          </div>

          {/* Contact Details */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span>Direct Desk: <a href="tel:2488908162" className="text-white hover:text-amber-400 font-semibold">(248) 890-8162</a></span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span>Broker Email: <a href="mailto:a1travelticket@gmail.com" className="text-white hover:text-amber-400 font-semibold">a1travelticket@gmail.com</a></span>
          </div>
        </div>
      </section>

    </div>
  );
}
