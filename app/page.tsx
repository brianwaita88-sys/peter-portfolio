"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
  links?: { label: string; url: string }[];
}

type Language = "en" | "sw";

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<Language>("en");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [leadMode, setLeadMode] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "", message: "" });

  const getGreeting = () => {
    const hour = new Date().getHours();
    let timeOfDay = "day";
    if (hour < 12) timeOfDay = "morning";
    else if (hour < 17) timeOfDay = "afternoon";
    else timeOfDay = "evening";

    if (lang === "sw") {
      return `Habari za ${timeOfDay === "morning" ? "asubuhi" : timeOfDay === "afternoon" ? "mchana" : "jioni"}! Mimi ni Msaidizi wa AI wa Peter. Nawezaje kukusaidia leo?`;
    }
    return `Good ${timeOfDay}! I'm Peter's AI Receptionist & Creative Consultant. How can I assist you with videography, journalism, or web projects today?`;
  };

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([
      {
        id: "1",
        sender: "ai",
        text: getGreeting(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links: [
          { label: "📂 Portfolio Drive", url: "https://drive.google.com/drive/folders/1T1pnLSosuZzPWkCvZGXqI7dcOThmAoPb?usp=sharing" },
          { label: "💬 WhatsApp Direct", url: "https://wa.me/254707537823" }
        ]
      },
    ]);
  }, [lang]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, isTyping]);

  const quickPrompts = lang === "sw" 
    ? ["Huduma Zote", "Weka Miadi", "Tazama Kazi", "Omba Bei", "Badili Lugha 🇬🇧"]
    : ["View Services", "Book Session", "See Portfolio", "Get a Quote", "Swahili 🇰🇪"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    if (query === "Swahili 🇰🇪") {
      setLang("sw");
      return;
    }
    if (query === "Badili Lugha 🇬🇧") {
      setLang("en");
      return;
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let responseText = "";
      let links: { label: string; url: string }[] | undefined = undefined;
      const lower = query.toLowerCase();

      // Intelligent Navigation & Keywords
      if (lower.includes("service") || lower.includes("huduma") || lower.includes("view services")) {
        scrollToSection("services");
        responseText = lang === "sw" 
          ? "Peter anatoa huduma za Uhariri wa Video, Picha, Utafiti wa Habari, na Uundaji wa Tovuti. Nimekuonyesha sehemu ya huduma hapo juu!"
          : "Peter offers Corporate Video Production, Video Editing, Photography, Podcast Production, Digital Marketing, and Web Development. I've navigated you to the Core Services section!";
      } else if (lower.includes("portfolio") || lower.includes("see portfolio") || lower.includes("drive") || lower.includes("kazi")) {
        scrollToSection("projects");
        responseText = lang === "sw"
          ? "Unaweza kutazama kazi za video, picha, na makala kwenye Google Drive Portfolio Hapa:"
          : "You can explore Peter's full video reels, journalism documentations, and creative media in his official Google Drive Vault below:";
        links = [{ label: "📂 Open Google Drive Vault", url: "https://drive.google.com/drive/folders/1T1pnLSosuZzPWkCvZGXqI7dcOThmAoPb?usp=sharing" }];
      } else if (lower.includes("book") || lower.includes("session") || lower.includes("weka miadi") || lower.includes("contact")) {
        scrollToSection("contact");
        responseText = lang === "sw"
          ? "Ili kuweka miadi au kuulizia tarehe, unaweza kuwasiliana na Peter moja kwa moja kupitia WhatsApp au Barua pepe."
          : "To book a session or schedule a shoot, you can connect directly via WhatsApp (+254 707 537 823) or leave your contact details here!";
        links = [
          { label: "💬 Chat on WhatsApp", url: "https://wa.me/254707537823?text=Hello%20Peter,%20I%20want%20to%20book%20a%20session." },
          { label: "✉️ Email Direct", url: "mailto:Obbayipeter050@gmail.com" }
        ];
      } else if (lower.includes("quote") || lower.includes("price") || lower.includes("cost") || lower.includes("bei")) {
        responseText = lang === "sw"
          ? "Bei inategemea aina ya mradi (harusi, video za biashara, au uhariri wa sauti). Bonyeza hapa kupata nukuu ya bei:"
          : "Rates vary based on project scope (editing, full event coverage, or monthly content retainers). Click below to request an instant quote on WhatsApp:";
        links = [{ label: "💰 Request Custom Quote", url: "https://wa.me/254707537823?text=Hello%20Peter,%20I%20would%20like%20a%20price%20quote." }];
      } else if (lower.includes("lead") || lower.includes("leave details") || lower.includes("call me")) {
        setLeadMode(true);
        responseText = "I can collect your contact information and have Peter reach out to you within 2 hours. Please fill in the details below.";
      } else {
        responseText = lang === "sw"
          ? "Asante kwa ujumbe wako! Peter Ken Obbayi ni mtaalamu wa Habari, Video, na Mawasiliano. Je, ungependa kuweka miadi au kutazama kazi zake?"
          : "Thank you for reaching out! I am Peter's receptionist. I can help you with project quotes, scheduling, exploring his media portfolio, or technical consultations.";
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadMode(false);
    const text = `Lead Received:\nName: ${leadData.name}\nEmail: ${leadData.email}\nPhone: ${leadData.phone}\nDetails: ${leadData.message}`;
    
    // Redirect lead directly to WhatsApp pre-filled message
    window.open(`https://wa.me/254707537823?text=${encodeURIComponent(text)}`, "_blank");

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "ai",
        text: `Thank you ${leadData.name}! Your inquiry has been prepared. Clicking 'Send' on WhatsApp will deliver it directly to Peter.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 bg-zinc-900 border border-amber-500/40 text-amber-400 px-4 py-3 rounded-full shadow-2xl flex items-center gap-2.5 hover:scale-105 transition active:scale-95"
          aria-label="Open AI Assistant"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-bold text-xs uppercase tracking-wider">Peter's AI</span>
          <span className="text-xs bg-amber-500/10 px-1.5 py-0.5 rounded text-amber-300 font-mono">v2.0</span>
        </button>
      )}

      {/* Main AI Chat Drawer / Popup */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-80 sm:w-96 rounded-2xl bg-zinc-950/95 border border-zinc-800 shadow-2xl backdrop-blur-md flex flex-col overflow-hidden text-white transition-all">
          
          {/* Header */}
          <div className="p-3.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs border border-amber-500/30">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-xs tracking-wide">Peter's Virtual Receptionist</h3>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online ({lang.toUpperCase()})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setLang(lang === "en" ? "sw" : "en")}
                className="text-[10px] font-bold px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-amber-400 hover:bg-zinc-700"
              >
                {lang === "en" ? "🇰🇪 SW" : "🇬🇧 EN"}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white text-base font-bold px-1.5"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-3.5 h-72 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-amber-500 text-black font-semibold rounded-br-none"
                      : "bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}

                  {/* Optional Interactive Links */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-zinc-800/80 flex flex-col gap-1.5">
                      {msg.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-400 hover:underline"
                        >
                          {link.label} ➔
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-zinc-500 mt-1 px-1 font-mono">{msg.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-1.5 items-center p-2 bg-zinc-900/60 rounded-xl w-16 border border-zinc-800">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            {/* Lead Capture Form Mode */}
            {leadMode && (
              <form onSubmit={handleLeadSubmit} className="p-3 bg-zinc-900 border border-amber-500/30 rounded-xl space-y-2 mt-2">
                <p className="font-bold text-amber-400 text-[11px]">📋 Quick Inquiry Form</p>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={leadData.name}
                  onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                  className="w-full p-1.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={leadData.email}
                  onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                  className="w-full p-1.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-white"
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  required
                  value={leadData.phone}
                  onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                  className="w-full p-1.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-white"
                />
                <textarea
                  placeholder="Project details or questions..."
                  rows={2}
                  value={leadData.message}
                  onChange={(e) => setLeadData({ ...leadData, message: e.target.value })}
                  className="w-full p-1.5 bg-zinc-800 border border-zinc-700 rounded text-xs text-white"
                />
                <div className="flex justify-end gap-2 pt-1">
                  <button type="button" onClick={() => setLeadMode(false)} className="text-[10px] text-zinc-400">Cancel</button>
                  <button type="submit" className="px-3 py-1 bg-amber-500 text-black font-bold rounded text-[11px]">Submit to WhatsApp</button>
                </div>
              </form>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Action Buttons */}
          <div className="px-2.5 py-2 flex flex-wrap gap-1 border-t border-zinc-800 bg-zinc-900/50">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-[10px] px-2.5 py-1 rounded-full bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 font-medium transition border border-zinc-700/60"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-2.5 border-t border-zinc-800 bg-zinc-900 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={lang === "sw" ? "Uliza kitu chochote..." : "Ask about booking, rates, or media..."}
              className="flex-1 bg-zinc-800 text-xs text-white placeholder-zinc-500 px-3 py-2 rounded-full border border-zinc-700 focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={() => handleSend()}
              className="w-7 h-7 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center hover:scale-105 transition"
              aria-label="Send message"
            >
              ➔
            </button>
          </div>

        </div>
      )}
    </>
  );
}