import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Landmark, Phone, Mail, Sparkles } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  content: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      content: "Hello! Welcome to iWebNext. I am your AI Financial Referral Assistant. I can help answer general questions about Personal Loans, Business Capital, Credit Repair Solutions, Mortgages, and how our comparison partner network works. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const prompt = inputValue.trim();
    if (!prompt) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: `msg_user_${Date.now()}`,
      sender: "user",
      content: prompt,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Package messages history for context
      const formattedHistory = messages.concat(userMsg).map((m) => ({
        role: m.sender === "user" ? "user" : "model",
        content: m.content
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: formattedHistory })
      });

      const data = await response.json();

      if (response.ok && data.content) {
        setMessages((prev) => [
          ...prev,
          {
            id: `msg_bot_${Date.now()}`,
            sender: "bot",
            content: data.content,
            timestamp: new Date()
          }
        ]);
      } else {
        throw new Error(data.error || "Internal Server Error");
      }
    } catch (err: any) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: `msg_bot_err_${Date.now()}`,
          sender: "bot",
          content: "I apologize, but I am experiencing connection issues. Please call our lending support line directly at (248) 890-8162 or email us at a1travelticket@gmail.com for prompt financial brokerage assistance.",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="ai-chatbot">
      {/* 1. Toggle Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-amber-400"
          id="chatbot-trigger-btn"
          aria-label="Open AI Financial Assistant"
        >
          <MessageSquare className="h-6 w-6 stroke-[2]" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
          </span>
        </button>
      )}

      {/* 2. Chat Window Box */}
      {isOpen && (
        <div 
          className="flex h-[500px] w-[350px] sm:w-[400px] flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-fade-in"
          id="chatbot-window"
        >
          {/* Header */}
          <div className="bg-slate-900 border-b border-slate-800 px-4 py-3.5 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 shadow shadow-amber-500/20">
                <Bot className="h-5 w-5 text-slate-950 stroke-[2]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-bold text-white tracking-wide uppercase">AI Financial Guide</h3>
                  <div className="flex items-center gap-1 bg-amber-500/20 text-amber-400 text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider">
                    <Sparkles className="h-2 w-2 animate-pulse text-amber-300" />
                    <span>Gemini 3.5</span>
                  </div>
                </div>
                <span className="block text-[10px] text-emerald-400 font-medium">● Broker agent online</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded-lg"
              aria-label="Close Chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-amber-500 text-slate-950 rounded-tr-none font-semibold"
                      : "bg-white text-slate-800 border border-slate-200 rounded-tl-none"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                  <span
                    className={`block text-[8px] mt-1 text-right ${
                      msg.sender === "user" ? "text-slate-800" : "text-slate-400"
                    }`}
                  >
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator Bubble */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white border border-slate-200 px-4 py-3 text-xs text-slate-500 flex items-center gap-1.5 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-bounce"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-bounce delay-100"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-bounce delay-200"></span>
                  <span className="text-[10px] font-mono text-slate-400 ml-1">Analyzing rates...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Consultation Helpline Banner */}
          <div className="px-4 py-1.5 bg-slate-100 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
            <span className="font-medium">Direct Broker Line:</span>
            <a href="tel:2488908162" className="text-amber-700 font-bold hover:underline">(248) 890-8162</a>
          </div>

          {/* Input Form Footer */}
          <form onSubmit={handleSendMessage} className="bg-white border-t border-slate-200 p-3 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about rates, business capital..."
              className="flex-1 h-9 bg-white border border-slate-300 rounded-lg px-3 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500"
              id="chatbot-input-field"
            />
            <button
              type="submit"
              disabled={isTyping || !inputValue.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-600 disabled:opacity-55 disabled:hover:bg-amber-500 transition-colors shrink-0"
              id="chatbot-send-btn"
            >
              <Send className="h-4 w-4 stroke-[2]" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
