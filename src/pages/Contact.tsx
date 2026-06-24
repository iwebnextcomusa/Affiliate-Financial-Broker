import React, { useState } from "react";
import { Phone, Mail, Clock, Landmark, MessageSquare, AlertCircle, ShieldCheck, MapPin } from "lucide-react";

interface ContactProps {
  onOpenConsultation: () => void;
}

export default function Contact({ onOpenConsultation }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id.replace("contact-", "")]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Please complete all required fields (*).");
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
          service: "General Contact Inquiry"
        })
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.error || "Submission failed. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "An unexpected error occurred. Please call (248) 890-8162 directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden animate-fade-in" id="contact-page">
      
      {/* 1. Header Banner */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Contact Us</span>
          <h1 className="text-3xl font-extrabold font-sans sm:text-4xl lg:text-5xl text-slate-900">
            Connect With Our Broker Desk
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have a question or request? Submit your contact details below, or reach our office directly via phone or email.
          </p>
        </div>
      </section>

      {/* 2. Contact layout (Details on left, Form on right) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Contact Details & Compliance Check */}
            <div className="lg:col-span-5 space-y-8 text-left" id="contact-details-panel">
              
              <div className="space-y-4">
                <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500">Corporate Details</span>
                <h3 className="text-2xl font-extrabold text-slate-900">Broker Desk Helpline</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We match inquiries only with transparent, highly reviewed affiliate partner networks. Reach out for any questions, partner comparisons, or dispute resolution.
                </p>
              </div>

              {/* Specific Items */}
              <div className="space-y-4">
                
                <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-100/50">
                  <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-650 border border-amber-200 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono font-bold text-slate-500">Direct Office Phone</h4>
                    <a href="tel:2488908162" className="text-sm font-bold text-slate-900 hover:text-amber-650 mt-1 block font-mono">
                      (248) 890-8162
                    </a>
                    <span className="block text-[10px] text-slate-500 mt-0.5">Call or text to request assessments.</span>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-100/50">
                  <div className="h-10 w-10 rounded-lg bg-amber-50 text-amber-650 border border-amber-200 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono font-bold text-slate-500">Secure Broker Email</h4>
                    <a href="mailto:a1travelticket@gmail.com" className="text-sm font-bold text-slate-900 hover:text-amber-650 mt-1 block font-mono">
                      a1travelticket@gmail.com
                    </a>
                    <span className="block text-[10px] text-slate-500 mt-0.5">Monitored 24/7 by intake coordinates.</span>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xl shadow-slate-100/50">
                  <div className="h-10 w-10 rounded-lg bg-amber-55 text-amber-650 border border-amber-200 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono font-bold text-slate-500">Support Hours</h4>
                    <span className="text-sm font-bold text-slate-805 mt-1 block">
                      Monday - Friday
                    </span>
                    <span className="block text-[10px] text-slate-500 mt-0.5">9:00 AM - 6:00 PM EST (Online chat operates 24/7).</span>
                  </div>
                </div>

              </div>

              {/* Integrity Shield Box */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-100/70 text-xs text-slate-600 space-y-2.5">
                <div className="flex items-center gap-1.5 text-amber-600 font-mono font-bold uppercase tracking-wider">
                  <ShieldCheck className="h-4.5 w-4.5 text-emerald-600" />
                  <span>Verified Broker Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  We strictly comply with truth-in-advertising guidelines. Your contact parameters are encrypted securely and never transmitted or sold to unsolicited advertisers. We only refer matched inquiries to the specific partners you agree to evaluate.
                </p>
              </div>

            </div>

            {/* Right Col: Interactive Contact Form */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-100 text-left" id="contact-form-panel">
              
              {!isSuccess ? (
                <>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-amber-600" />
                    Submit Secure Message
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Provide your detail parameters. Our routing algorithm matches your request and triggers an email confirmation.
                  </p>

                  {errorMessage && (
                    <div className="mt-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="mt-1 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                        <input
                          type="email"
                          id="contact-email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="johndoe@email.com"
                          className="mt-1 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                        <input
                          type="tel"
                          id="contact-phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(248) 890-8162"
                          className="mt-1 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Message *</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your loan consolidation, commercial financing, or credit scores requirement."
                        className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-11 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-950 hover:bg-amber-600 text-xs uppercase tracking-wider active:scale-95 transition-all mt-2 cursor-pointer"
                    >
                      {isLoading ? "Transmitting Message..." : "Submit Inquiry Securely"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 mb-4 animate-bounce">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-sans">Message Transmitted</h3>
                  <p className="text-xs text-slate-650 mt-2 leading-relaxed max-w-sm">
                    Thank you, your message has been securely recorded. Our Detroit broker desk has been notified. A referral counselor will verify your options and contact you soon.
                  </p>
                  
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 h-10 px-6 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 3. Responsive Map Mockup (Visual placeholder representing physical broker context) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-slate-100 text-center">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-[10px] uppercase font-mono font-bold text-amber-655">Service Coverage</span>
            <h3 className="text-xl font-extrabold text-slate-900">National Referral Coverage</h3>
            <p className="text-xs text-slate-600 leading-normal">
              While our administrative desk is based in Michigan, our affiliate lending network spans all 50 states.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-100/60 max-w-4xl mx-auto h-[250px] flex flex-col items-center justify-center space-y-3 relative overflow-hidden">
            {/* Visual background grid effect */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
            <MapPin className="h-8 w-8 text-amber-600 animate-bounce" />
            <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Michigan Broker Desk</p>
            <p className="text-[11px] text-slate-600 max-w-md">
              Detroit Metropolitan Area. Secure routing, telephone consultation comparisons, and direct credit disputation pipelines are serviced digitally.
            </p>
            <p className="text-[10px] font-mono text-slate-450">Administrative Desk Coordinate: Michigan USA</p>
          </div>
        </div>
      </section>

    </div>
  );
}
