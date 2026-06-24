import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { SERVICES_DATA } from "../types";

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function QuoteFormModal({ isOpen, onClose, preselectedService = "" }: QuoteFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService || "General Inquiry",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

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
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: preselectedService || "General Inquiry",
          message: ""
        });
      } else {
        throw new Error(data.error || "Failed to submit consultation request.");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "An unexpected error occurred. Please call (248) 890-8162 directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in" id="quote-consultation-modal">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        
        {/* Header decoration bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 bg-slate-50 p-1.5 rounded-lg border border-slate-200"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Container */}
        <div className="p-6 sm:p-8">

          {!isSuccess ? (
            <>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                <span className="text-xs uppercase font-mono font-bold tracking-wider text-amber-600">Request Financial Assessment</span>
              </div>
              <h3 className="text-2xl font-bold font-sans text-slate-900">Get a Free Consultation</h3>
              <p className="text-xs text-slate-500 mt-1">
                Speak directly with an affiliate broker counselor. We compare terms from multiple institutional providers on your behalf.
              </p>

              {errorMessage && (
                <div className="mt-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs">
                  {errorMessage}
                </div>
              )}

              {/* Form body */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-name" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      id="modal-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="mt-1 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-phone" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      id="modal-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(248) 890-8162"
                      className="mt-1 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    id="modal-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="a1travelticket@gmail.com"
                    className="mt-1 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="modal-service" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Solution Needed</label>
                  <select
                    id="modal-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="mt-1 w-full h-10 bg-slate-50 border border-slate-200 rounded-lg px-3 text-xs text-slate-700 focus:outline-none focus:border-amber-500 focus:bg-white cursor-pointer"
                  >
                    <option value="General Inquiry">General Financial Guidance</option>
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title} className="text-slate-900">
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-message" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Additional Context (Optional)</label>
                  <textarea
                    id="modal-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Seeking personal debt consolidation or business working capital."
                    className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white resize-none"
                  />
                </div>

                <div className="flex gap-2 items-start py-1 bg-slate-50 p-2.5 rounded border border-slate-200 text-[10px] text-slate-500 leading-normal">
                  <ShieldCheck className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-slate-700">Data Protection:</strong> Your personal data is transmitted securely and is never shared with unsolicited marketers. Your comparison search is handled fully in-house by our broker team.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 h-11 items-center justify-center rounded-lg bg-amber-500 text-xs font-bold text-slate-950 hover:bg-amber-600 active:scale-95 transition-all cursor-pointer uppercase tracking-wider"
                  >
                    {isLoading ? "Submitting Inquiry..." : "Submit Inquiry Details"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="h-11 px-5 border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 active:scale-95 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 mb-4 animate-bounce">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-sans">Request Received</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed max-w-sm">
                Thank you, your assessment details have been securely logged. An iWebNext broker specialist will evaluate your query and reach out within 2 business hours.
              </p>
              
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left w-full space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-200 pb-1.5 text-slate-600 font-medium">
                  <span>General Support:</span>
                  <a href="tel:2488908162" className="text-amber-700 font-bold">(248) 890-8162</a>
                </div>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Email Broker Desk:</span>
                  <a href="mailto:a1travelticket@gmail.com" className="text-amber-700 font-bold">a1travelticket@gmail.com</a>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="mt-6 px-6 h-10 rounded-lg bg-amber-500 text-xs font-bold text-slate-950 hover:bg-amber-600 active:scale-95 transition-all"
              >
                Return to Site
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
