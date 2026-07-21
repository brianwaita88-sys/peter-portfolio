"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
  links?: { label: string; url: string }[];
  suggestions?: string[];
}

type Language = "en" | "sw";

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<Language>("en");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load returning visitor context & initialize greetings
  useEffect(() => {
    const isReturning = localStorage.getItem("pk_assistant_visited");
    const hour = new Date().getHours();
    let timeGreeting = "Good day";
    if (hour < 12) timeGreeting = "Good morning";
    else if (hour < 17) timeGreeting = "Good afternoon";
    else timeGreeting = "Good evening";

    if (lang === "sw") {
      timeGreeting = hour < 12 ? "Habari za asubuhi" : hour < 17 ? "Habari za mchana" : "Habari za jioni";
    }

    let initialText = `${timeGreeting}! Welcome to Peter Ken Obbayi's portfolio. I can assist you with booking video/audio sessions, brainstorming scripts & content, exploring work, or answering technical questions. How can I help today?`;

    if (isReturning) {
      initialText = lang === "sw" 
        ? `${timeGreeting}! Karibu tena! Nipo hapa kukusaidia na wazo wowote wa video, uandishi wa script, au kuweka miadi na Peter.`
        : `${timeGreeting}! Welcome back! Great to see you again. Need help planning a project, drafting a script, or booking a shoot with Peter?`;
    } else {
      localStorage.setItem("pk_assistant_visited", "true");
    }

    setMessages([
      {
        id: "1",
        sender: "ai",
        text: initialText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        suggestions: ["📺 YouTube Mixes", "💡 Brainstorm Content", "🎬 Video Scripts", "💬 Book Session"],
        links: [
          { label: "📺 YouTube (@djvyro_ke)", url: "https://youtube.com/@djvyro_ke?si=GFZA-4EX_v5sIcVT" },
          { label: "📂 Google Drive Portfolio", url: "https://drive.google.com/drive/folders/1T1pnLSosuZzPWkCvZGXqI7dcOThmAoPb?usp=sharing" },
          { label: "💬 Chat on WhatsApp", url: "https://wa.me/254707537823" }
        ]
      }
    ]);
  }, [lang]);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const processQuery = (queryText: string) => {
    const lower = queryText.toLowerCase();

    // Language Toggle
    if (lower.includes("swahili") || lower === "sw" || lower.includes("kiswahili")) {
      setLang("sw");
      return {
        text: "Habari! Sasa tunaweza kuzungumza kwa Kiswahili. Nawezaje kukusaidia leo?",
        suggestions: ["📺 YouTube Mixes", "💡 Mawazo ya Yaliyomo", "💬 Weka Miadi"]
      };
    }
    if (lower.includes("english") || lower === "en") {
      setLang("en");
      return {
        text: "Language set to English! How can I assist with your creative project today?",
        suggestions: ["📺 YouTube Mixes", "💡 Brainstorm Ideas", "🎬 Script Writing", "💬 Booking"]
      };
    }

    // YouTube / Music / DJ Queries
    if (lower.includes("dj") || lower.includes("mix") || lower.includes("youtube") || lower.includes("song") || lower.includes("music")) {
      return {
        text: "Peter (DJ Vyro 254) creates DJ mixes, Gospel sessions, and custom audio productions. You can watch his mixes on YouTube:",
        links: [
          { label: "📺 DJ Vyro 254 Channel", url: "https://youtube.com/@djvyro_ke?si=GFZA-4EX_v5sIcVT" },
          { label: "📂 Google Drive Vault", url: "https://drive.google.com/drive/folders/1T1pnLSosuZzPWkCvZGXqI7dcOThmAoPb?usp=sharing" }
        ],
        suggestions: ["Podcast Production", "Audio Mastering", "Book DJ Session"]
      };
    }

    // Script Writing & Brainstorming
    if (lower.includes("script") || lower.includes("uandishi")) {
      return {
        text: "I'd love to help script your video! For a high-converting reel, use this layout:\n\n1. Hook (0-5s): Bold statement or visual angle.\n2. Core Value (5-45s): Storytelling or service showcase.\n3. Call to Action (45-60s): Direct audience to link or contact.\n\nWould you like ideas for corporate, documentary, or TikTok video scripts?",
        suggestions: ["Corporate Script", "Reels Script", "Documentary Hook"]
      };
    }

    if (lower.includes("brainstorm") || lower.includes("caption") || lower.includes("marketing") || lower.includes("idea")) {
      return {
        text: "Here are quick media marketing concepts:\n\n• Behind-The-Scenes: Show raw footage capture and video editing in action.\n• Client Outcome Spotlight: Quick 30-second testimonial video.\n• High-Engagement Caption: 'Want your video content to convert? Start doing this...'\n\nWhich direction fits your goal best?",
        suggestions: ["Social Captions", "Event Concept", "Content Plan"]
      };
    }

    // Navigation & Services
    if (lower.includes("service") || lower.includes("huduma") || lower.includes("offer")) {
      scrollToSection("services");
      return {
        text: lang === "sw"
          ? "Peter anatoa huduma za Videography, Uhariri wa Video, Picha, na Production ya Sauti. Nimekuonyesha sehemu ya Huduma!"
          : "Peter offers Corporate Videography, Video Editing, Digital Marketing, Audio Production, and Journalism. I've navigated you to the Core Services section!",
        suggestions: ["Book Videography", "Audio Services", "Custom Quote"]
      };
    }

    if (lower.includes("portfolio") || lower.includes("work") || lower.includes("kazi") || lower.includes("drive")) {
      scrollToSection("projects");
      return {
        text: lang === "sw"
          ? "Tazama kazi za video, picha, na YouTube mixes kupitia viungo hivi:"
          : "You can explore Peter's full video reels, audio edits, and YouTube DJ mixes below:",
        links: [
          { label: "📺 YouTube Channel", url: "https://youtube.com/@djvyro_ke?si=GFZA-4EX_v5sIcVT" },
          { label: "📂 Google Drive Vault", url: "https://drive.google.com/drive/folders/1T1pnLSosuZzPWkCvZGXqI7dcOThmAoPb?usp=sharing" }
        ],
        suggestions: ["Book a Shoot", "Contact Direct"]
      };
    }

    if (lower.includes("book") || lower.includes("contact") || lower.includes("miadi") || lower.includes("hire")) {
      scrollToSection("contact");
      return {
        text: "You can schedule a session or request custom pricing directly:\n\n• Phone/WhatsApp: +254 707 537 823\n• Email: Obbayipeter050@gmail.com\n\nConnecting on WhatsApp provides the fastest response time!",
        links: [
          { label: "💬 Chat on WhatsApp", url: "https://wa.me/254707537823?text=Hello%20Peter,%20I%20want%20to%20book%20a%20session." },
          { label: "✉️ Email Direct", url: "mailto:Obbayipeter050@gmail.com" }
        ],
        suggestions: ["Ask Turnaround Time", "View Rates"]
      };
    }

    // Privacy & Safety Guardrails
    if (lower.includes("legal") || lower.includes("medical") || lower.includes("tax") || lower.includes("finance")) {
      return {
        text: "I am programmed to assist with media production, creative queries, and booking for Peter. For legal, medical, or financial matters, please consult a certified professional.",
        suggestions: ["Media Services", "Book Session"]
      };
    }

    return {
      text: lang === "sw"
        ? "Asante kwa ujumbe wako! Mimi ni Msaidizi wa Peter. Je, ungependa kubuni mawazo ya video, kutazama kazi za YouTube, au kuweka miadi?"
        : "Thanks for reaching out! I'm here to assist with creative ideas, script brainstorms, portfolio navigation, and booking setups. What would you like to explore?",
      suggestions: ["📺 YouTube Mixes", "💡 Brainstorm Ideas", "🎬 Script Writing", "💬 Contact Peter"]
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const result = processQuery(query);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: result.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        links: result.links,
        suggestions: result.suggestions
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <>
      {/* Fixed Bottom-Left Floating Trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 bg-zinc-900 border border-amber-500/40 text-amber-400 px-4 py-3 rounded-full shadow-2xl flex items-center gap-2.5 hover:scale-105 transition active:scale-95"
          aria-label="Open AI Assistant"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-bold text-xs uppercase tracking-wider">Peter's AI</span>
          <span className="text-[10px] bg-amber-500/10 px-1.5 py-0.5 rounded text-amber-300 font-mono">v2.5</span>
        </button>
      )}

      {/* Bottom-Left Floating Drawer (Keeps main website structure visible) */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-80 sm:w-96 rounded-2xl bg-zinc-950/95 border border-zinc-800 shadow-2xl backdrop-blur-md flex flex-col overflow-hidden text-white transition-all max-h-[80vh]">
          
          {/* Header */}
          <div className="p-3.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs border border-amber-500/30">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-xs tracking-wide">Peter's Virtual Assistant</h3>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Active ({lang.toUpperCase()})
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

          {/* Messages Body */}
          <div className="p-3.5 h-72 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[88%] leading-relaxed whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-amber-500 text-black font-semibold rounded-br-none"
                      : "bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}

                  {/* Interactive Links */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-zinc-800 flex flex-col gap-1.5">
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

                {/* Follow-up Suggestions */}
                {msg.sender === "ai" && msg.suggestions && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {msg.suggestions.map((sug, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSend(sug)}
                        className="text-[10px] px-2 py-0.5 bg-zinc-800 hover:bg-amber-500/20 hover:text-amber-300 text-zinc-300 rounded-md border border-zinc-700/60 transition"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}

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

            <div ref={chatEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="px-2.5 py-2 flex flex-wrap gap-1 border-t border-zinc-800 bg-zinc-900/50">
            {["📺 YouTube", "💡 Brainstorm", "🎬 Script", "💬 Booking"].map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 font-medium transition border border-zinc-700/60"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Field */}
          <div className="p-2.5 border-t border-zinc-800 bg-zinc-900 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={lang === "sw" ? "Uliza au leza wazo..." : "Ask about YouTube, scripts, rates..."}
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