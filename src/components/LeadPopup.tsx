import React, { useState, useEffect } from "react";
import { X, Gift, ShieldAlert, Sparkles, CheckCircle } from "lucide-react";

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if user has already dismissed or completed the popup in this session
    const popupDismissed = sessionStorage.getItem("financial_lead_popup_dismissed");
    
    if (!popupDismissed) {
      // Trigger popup after 8 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("financial_lead_popup_dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: "Instant Broker Guide Referral",
          message: "Requesting free financial comparison guide via exit popup."
        })
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        sessionStorage.setItem("financial_lead_popup_dismissed", "true");
        // Auto-close popup after 3 seconds on success
        setTimeout(() => {
          setIsVisible(false);
        }, 3500);
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "Failed to submit. Please call us at 248-890-8162.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in" id="lead-capture-popup">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        
        {/* Glowing Decorative Background */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-36 w-36 rounded-full bg-amber-500/5 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-36 w-36 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-50 p-1.5 rounded-lg border border-slate-200"
          aria-label="Dismiss Offer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Popup Content */}
        <div className="px-6 py-8">
          
          {!isSubmitted ? (
            <>
              {/* Header Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 mb-4 border border-amber-500/20">
                <Gift className="h-6 w-6" />
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-amber-600">Exclusive Broker Offer</span>
                <Sparkles className="h-3 w-3 text-amber-500 animate-spin" />
              </div>

              <h3 className="text-xl font-bold font-sans text-slate-900 mt-1.5 leading-tight">
                Get Your Free Financial Comparison Guide
              </h3>
              
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Connect with our elite affiliate broker desk. Submit your details to receive an instant eBook copy of our <strong className="text-slate-900 font-bold">“Smart Borrowing Secrets for 2026”</strong> plus a free customized lending comparison call.
              </p>

              {errorMessage && (
                <div className="mt-4 p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div>
                  <label htmlFor="popup-name" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    id="popup-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="mt-1 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="popup-email" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      id="popup-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@email.com"
                      className="mt-1 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="popup-phone" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      id="popup-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(123) 456-7890"
                      className="mt-1 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-11 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-950 hover:bg-amber-600 active:scale-95 transition-all mt-2 cursor-pointer text-xs uppercase tracking-wider"
                >
                  {isLoading ? "Generating Download Link..." : "Claim My Free Guide & Call"}
                </button>

                {/* Disclosure */}
                <div className="flex gap-1.5 mt-3 text-[9px] text-slate-500 leading-normal">
                  <ShieldAlert className="h-3.5 w-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <p>
                    By submitting, you consent to receive informational referral call/SMS communications from iWebNext and our affiliate partners. Standard rates apply. Rest assured, your details are fully secure.
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 mb-4 animate-bounce">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-sans">Guide Successfully Claimed!</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Thank you! We have sent your <strong className="text-amber-700 font-bold">“Smart Borrowing Secrets eBook”</strong> to your email. An affiliate loan counselor will reach out shortly for your free customized rates review.
              </p>
              <p className="text-[10px] text-slate-500 mt-6 font-mono font-bold uppercase tracking-wider">
                Phone: 248-890-8162 | Email: a1travelticket@gmail.com
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
