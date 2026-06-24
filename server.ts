import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize Gemini SDK with server-side API Key
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY environment variable is not defined. Chatbot will run in mock mode.");
}

app.use(express.json());

// Server-side database mock for lead collection
interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  date: string;
  status: string;
}

const leads: Lead[] = [];

// API: Submit a financial consultation lead
app.post("/api/leads", (req, res) => {
  const { name, email, phone, service, message } = req.body;
  
  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Name, email, and phone are required fields." });
  }

  const newLead: Lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    name,
    email,
    phone,
    service: service || "General Consultation",
    message: message || "No message provided.",
    date: new Date().toISOString(),
    status: "New"
  };

  leads.unshift(newLead);
  console.log(`[Lead Captured] Name: ${name}, Email: ${email}, Phone: ${phone}, Service: ${service}`);
  
  return res.status(201).json({ 
    success: true, 
    message: "Thank you! Your inquiry has been submitted successfully. A broker will contact you shortly.",
    lead: newLead
  });
});

// API: Fetch all leads (useful for testing and admin preview)
app.get("/api/leads", (req, res) => {
  res.json(leads);
});

// API: AI Chatbot Proxy using Gemini
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages format. Expected an array of chat history." });
  }

  // Format history for Gemini
  // Gemini expects contents structure. Let's extract the latest prompt and history.
  const lastUserMessage = messages[messages.length - 1]?.content;
  if (!lastUserMessage) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  // Create standard corporate financial guidelines system instruction
  const systemInstruction = `
    You are 'iWebNext Financial Assistant', an expert affiliate financial broker assistant. 
    You represent 'iWebNext Financial Broker' (Phone: 248-890-8162, Email: a1travelticket@gmail.com).
    
    You offer general helpful education regarding:
    1. Personal Loans (for consolidating debt, medical bills, or personal usage)
    2. Business Financing (working capital, equipment loans, merchant cash advances)
    3. Credit Solutions (improving scores, debt restructuring education)
    4. Investment Opportunities (wealth building, referral partner comparison)
    5. Insurance Referrals (protecting assets, life/health policies)
    6. Mortgage and Lending Referrals (buying homes, refinancing)

    Your Guidelines:
    - ALWAYS be polite, professional, reassuring, and highly corporate.
    - NEVER guarantee loan approvals, specific interest rates, or investment returns.
    - Advise users that we are an AFFILIATE broker; we work with multiple premium lending partners to compare terms and secure suitable deals, which gives clients higher chances of approval and better rates.
    - Explicitly direct users to submit their details via our "Get a Free Consultation" or "Inquiry Form" if they want a real quote or expert review.
    - Mention they can contact our office directly at Phone: 248-890-8162 or Email: a1travelticket@gmail.com.
    - Always display a short compliant disclaimer at the end of detailed advice (e.g., "Note: We are an affiliate financial broker. We connect clients with qualified lenders. Please conduct your own due diligence before making final financial commitments.")
    - Keep responses concise (under 200 words) so they fit nicely in a mobile-friendly chat widget.
  `;

  try {
    if (!ai) {
      // Mock mode fallback when no API key is set
      const mockResponses = [
        "That is an excellent financial question. To evaluate your options for that service, we recommend completing our quick Consultation Form. This allows our broker network to compare multiple lenders on your behalf for the best rate! You can also call us at 248-890-8162.",
        "Based on your inquiry, you might qualify for multiple personal loan or business financing packages from our top-tier affiliate network. Please click the 'Get Free Quote' button in the navbar to request a tailored analysis, or reach out to us at a1travelticket@gmail.com.",
        "We help clients compare lending and credit repair solutions to rebuild credit and secure favorable borrowing rates. A broker from our team would love to guide you through a free comparison. May we call you, or would you prefer calling us at 248-890-8162?",
        "Our investment and mortgage affiliate partners offer highly competitive terms for both home purchases and refinance applications. To start a comparison, fill out our Contact Page form, or write to us at a1travelticket@gmail.com."
      ];
      const randomMock = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      
      // Delay slightly to simulate AI
      await new Promise(resolve => setTimeout(resolve, 800));
      return res.json({ 
        content: randomMock + "\n\n*(Running in Demo Mode: To activate real AI responses, please configure your GEMINI_API_KEY in Secrets/Settings)*" 
      });
    }

    // Prepare contents by taking recent messages and formatting
    // We can compile them or pass the last user message and set systemInstruction in config
    const prompt = lastUserMessage;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const aiText = response.text || "I apologize, but I am unable to process that request at the moment. Please call our team at 248-890-8162 for direct support.";
    return res.json({ content: aiText });

  } catch (error: any) {
    console.error("Gemini API Error in Server:", error);
    return res.status(500).json({ 
      error: "Failed to communicate with AI model. Please contact us directly at 248-890-8162.",
      details: error.message 
    });
  }
});

// Setup Vite Dev Server / Static Asset Serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[iWebNext Financial Broker Server] Running on http://0.0.0.0:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer();
