import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import LeadPopup from "./components/LeadPopup";
import QuoteFormModal from "./components/QuoteFormModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PartnerNetwork from "./pages/PartnerNetwork";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Compliance from "./pages/Compliance";
import { ArrowUp, Sparkles, CheckCircle2 } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top visibility handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenConsultation = (serviceTitle = "") => {
    setPreselectedService(serviceTitle);
    setIsConsultationOpen(true);
  };

  // Switch between pages based on state
  const renderActivePage = () => {
    switch (activeTab) {
      case "home":
        return <Home setActiveTab={setActiveTab} onOpenConsultation={handleOpenConsultation} />;
      case "about":
        return <About onOpenConsultation={() => handleOpenConsultation()} />;
      case "services":
        return <Services onOpenConsultation={handleOpenConsultation} />;
      case "partners":
        return <PartnerNetwork onOpenConsultation={() => handleOpenConsultation()} />;
      case "blog":
        return <Blog onOpenConsultation={handleOpenConsultation} />;
      case "contact":
        return <Contact onOpenConsultation={() => handleOpenConsultation()} />;
      case "compliance":
        return <Compliance />;
      default:
        return <Home setActiveTab={setActiveTab} onOpenConsultation={handleOpenConsultation} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* 1. Sticky Navigation Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenConsultation={() => handleOpenConsultation()} 
      />

      {/* 2. Main Active Viewport */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* 3. Global Corporate Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* 4. Interactive Floating AI Assistant Chatbot Widget */}
      <Chatbot />

      {/* 5. Automated Lead Capture Popup (Triggers in 8s for new sessions) */}
      <LeadPopup />

      {/* 6. Dynamic Consultation Intake Modal */}
      <QuoteFormModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
        preselectedService={preselectedService}
      />

      {/* 7. Scroll-To-Top floating button with smooth scroll & hover effect */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-lg hover:text-amber-600 hover:border-amber-500/30 hover:bg-slate-50 active:scale-90 transition-all cursor-pointer"
          id="scroll-to-top-btn"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp className="h-5 w-5 stroke-[2.5]" />
        </button>
      )}

    </div>
  );
}
