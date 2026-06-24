import React, { useState } from "react";
import { ShieldCheck, Scale, FileText, AlertTriangle, ExternalLink } from "lucide-react";

export default function Compliance() {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms" | "disclosure">("disclosure");

  return (
    <div className="bg-slate-50 text-slate-900 font-sans overflow-x-hidden animate-fade-in" id="compliance-page">
      
      {/* 1. Header Hero */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl text-center space-y-4">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-600">Legal Governance</span>
          <h1 className="text-3xl font-extrabold font-sans sm:text-4xl lg:text-5xl text-slate-900">
            Compliance & Governance Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Review our affiliate broker governance, cookie processing, privacy guarantees, and terms of service.
          </p>
        </div>
      </section>

      {/* 2. Policy TABS selector */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-4xl">
          
          {/* Tabs header bar */}
          <div className="flex border-b border-slate-200 mb-8 justify-center gap-2">
            <button
              onClick={() => setActiveTab("disclosure")}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "disclosure"
                  ? "border-amber-550 text-amber-600"
                  : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              <AlertTriangle className="h-4 w-4" />
              Affiliate Disclosure
            </button>
            
            <button
              onClick={() => setActiveTab("privacy")}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "privacy"
                  ? "border-amber-550 text-amber-600"
                  : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              <ShieldCheck className="h-4 w-4" />
              Privacy Policy
            </button>

            <button
              onClick={() => setActiveTab("terms")}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activeTab === "terms"
                  ? "border-amber-550 text-amber-600"
                  : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              <FileText className="h-4 w-4" />
              Terms of Use
            </button>
          </div>

          {/* Sticky Mandatory Due-Diligence Callout Box */}
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 mb-8 text-left space-y-2.5 shadow-md">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 font-mono uppercase tracking-wider">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <span>DUE DILIGENCE AND ADVISORY DISPATCH DISCLOSURE</span>
            </div>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              <strong>CRITICAL NOTICE:</strong> iWebNext is an affiliate financial broker, NOT an underwriting bank, insurer, or SEC-registered investment firm. All rates, terms, and solutions highlighted on this platform are supplied through independent third-party partners. Approvals depend entirely on your individual assets, credit histories, and eligibility traits. <strong>Users must conduct their own rigorous independent due diligence</strong> and review all loan contracts and disclosure documents before executing major financial, lending, or debt repair commitments.
            </p>
          </div>

          {/* Tab Contents */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-100 text-left space-y-6" id="compliance-content-box">
            
            {activeTab === "disclosure" && (
              <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed" id="compliance-disclosure-tab">
                <h3 className="text-lg font-bold text-slate-900">Affiliate Referral and Brokerage Disclosure</h3>
                <p className="text-[10px] text-slate-400 font-mono">Last updated: June 24, 2026</p>
                
                <p>
                  This Affiliate Disclosure governs your usage of the iWebNext web platform. This platform functions strictly as an advertising referral channel, connecting prospective borrowers, credit repair clients, or insurance consumers with specialized institutional lenders, counselors, and registered brokers.
                </p>
                <p>
                  <strong>How We Are Compensated:</strong> iWebNext does not charge users fees to submit inquiries or compare lender terms. Instead, our affiliate partners pay us commission fees, referral bounties, or advertisement premiums when we refer inquiries that lead to successful approvals or transactions. 
                </p>
                <p>
                  This commission structure does not inflate the interest rates, fees, or program expenses you receive. In fact, due to our partners volume business operations, referred clients often receive terms far superior to those available to retail walk-in banking applicants.
                </p>
                <p>
                  <strong>No Guarantee of Underwriting:</strong> We do not make credit checks, underwrite loans, or evaluate asset liabilities ourselves. We provide matching services. We are not responsible for the approval metrics, terms, customer service, or liabilities of the independent partners you contract with. 
                </p>
              </div>
            )}

            {activeTab === "privacy" && (
              <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed" id="compliance-privacy-tab">
                <h3 className="text-lg font-bold text-slate-900">Privacy Policy</h3>
                <p className="text-[10px] text-slate-400 font-mono">Last updated: June 24, 2026</p>
                
                <p>
                  At iWebNext, your data confidentiality is our primary priority. This privacy policy describes what parameters we collect and how we secure, process, and refer those details.
                </p>
                
                <h4 className="text-sm font-bold text-slate-950 mt-4">1. Information We Collect</h4>
                <p>
                  When you submit a consultation form, write to our support desk, or interact with our AI Chatbot, we collect: Name, Email address, Telephone number, Chosen service requirement, and any personal context notes you provide.
                </p>

                <h4 className="text-sm font-bold text-slate-950 mt-4">2. Processing & Referral Consent</h4>
                <p>
                  By submitting your parameters, you explicitly consent to allow iWebNext to evaluate and transfer your inquiry details to our vetted affiliate partners for the sole purpose of assessing your eligibility and contacting you with rate comparisons.
                </p>

                <h4 className="text-sm font-bold text-slate-950 mt-4">3. Data Retention and Encryption</h4>
                <p>
                  All lead transmissions are encrypted using standard secure protocols. We maintain server records only for the duration required to satisfy customer referral follow-up actions and audit compliance. Your details are never sold to external third-party telemarketers.
                </p>
              </div>
            )}

            {activeTab === "terms" && (
              <div className="space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed" id="compliance-terms-tab">
                <h3 className="text-lg font-bold text-slate-900">Terms & Conditions of Service</h3>
                <p className="text-[10px] text-slate-400 font-mono">Last updated: June 24, 2026</p>
                
                <p>
                  Please review these Terms of Use carefully before interacting with iWebNext. By browsing this platform or submitting inquiries, you acknowledge that you have read, understood, and consented to these provisions.
                </p>

                <h4 className="text-sm font-bold text-slate-950 mt-4">1. Permitted Platform Usage</h4>
                <p>
                  You agree to use this platform only for authentic, lawful personal borrowing, credit repair, commercial expansion, or insurance search requests. Providing fraudulent credentials, inaccurate contact phone numbers, or spamming inquiry channels is strictly prohibited.
                </p>

                <h4 className="text-sm font-bold text-slate-950 mt-4">2. Intellectual Property</h4>
                <p>
                  The logo, design structure, responsive templates, 3D animations, and content copies of iWebNext are protected by copyright laws. Any duplication, scraping, or republishing of our assets is strictly prohibited unless authorized.
                </p>

                <h4 className="text-sm font-bold text-slate-950 mt-4">3. Limit of Corporate Liability</h4>
                <p>
                  iWebNext shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your interaction with our partner networks, loan approvals, interest expense, investment results, or use of the AI Chatbot responses. Chatbot guidance is informational and educational.
                </p>
              </div>
            )}

          </div>

          {/* Simple governance footer */}
          <div className="mt-8 text-center text-xs text-slate-500">
            For compliance audits, please write to: <a href="mailto:a1travelticket@gmail.com" className="text-amber-600 font-bold hover:underline">a1travelticket@gmail.com</a>
          </div>

        </div>
      </section>

    </div>
  );
}
