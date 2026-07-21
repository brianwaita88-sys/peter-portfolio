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
        suggestions: ["💡 Brainstorm Content", "🎬 Video/Script Ideas", "📂 View Portfolio", "💬 Book Session"],
        links: [
          { label: "📂 Google Drive Portfolio", url: "https://drive.google.com/drive/folders/1T1pnLSosuZzPWkCvZGXqI7dcOThmAoPb?usp=sharing" },
          { label: "💬 Chat on WhatsApp", url: "https://wa.me/254707537823" }
        ]
      }
    ]);
  }, [lang]);

  // Smooth auto-scroll to bottom of chat
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

    // 1. Language Toggle Controls
    if (lower.includes("swahili") || lower === "sw" || lower.includes("kiswahili")) {
      setLang("sw");
      return {
        text: "Habari! Sasa tunaweza kuzungumza kwa Kiswahili. Nawezaje kukusaidia leo?",
        suggestions: ["💡 Mawazo ya Yaliyomo", "📂 Tazama Kazi", "💬 Weka Miadi"]
      };
    }
    if (lower.includes("english") || lower === "en") {
      setLang("en");
      return {
        text: "Language set to English! How can I assist with your creative project today?",
        suggestions: ["💡 Brainstorm Ideas", "🎬 Script Writing", "📂 Portfolio", "💬 Booking"]
      };
    }

    // 2. Creative Brainstorming Contract (Scripts, Captions, Marketing, Songwriting)
    if (lower.includes("script") || lower.includes("uandishi")) {
      return {
        text: "I'd love to help script your video! For a strong narrative, consider this format:\n\n1. Hook (0-5s): A bold question or dynamic visual.\n2. Story/Value (5-45s): Showcase the core subject or story.\n3. Call to Action (45-60s): Direct viewers to visit your page or contact.\n\nWould you like me to tailor a script idea for corporate, social media, or documentary style?",
        suggestions: ["Corporate Script", "TikTok/Reels Script", "Documentary Hook"]
      };
    }

    if (lower.includes("brainstorm") || lower.includes("caption") || lower.includes("marketing") || lower.includes("idea")) {
      return {
        text: "Here are a few quick content & marketing ideas tailored for digital media:\n\n• Behind-the-Scenes Reel: Show the raw filming process and gear setup.\n• Client Story Spotlight: Short 30s interview highlighting real results.\n• Engaging Caption Hook: 'Stop scrolling if you want your video content to convert...'\n\nWhich direction fits your goal best?",
        suggestions: ["Social Media Captions", "Event Concept", "Songwriting Ideas"]
      };
    }

    if (lower.includes("song") || lower.includes("music") || lower.includes("audio")) {
      return {
        text: "For audio production and songwriting, we focus on building a strong melody, crisp mixing, and punchy arrangement in FL Studio. Peter offers beat production, DJ mixing, and audio polishing. Would you like to review music production options?",
        suggestions: ["Podcast Production", "DJ Mixing", "Audio Mastering"]
      };
    }

    // 3. Intelligent Website Navigation & Core Services
    if (lower.includes("service") || lower.includes("huduma") || lower.includes("offer")) {
      scrollToSection("services");
      return {
        text: lang === "sw"
          ? "Peter anatoa huduma za Uhariri wa Video, Picha, Production ya Audio, na Utafiti wa Habari. Nimekupeleka kwenye sehemu ya Huduma!"
          : "Peter specializes in Corporate Videography, Video Editing, Digital Marketing, Audio Production, and Journalism. I've scrolled you to the Core Services section!",
        suggestions: ["Book Videography", "Audio Services", "Custom Quote"]
      };
    }

    if (lower.includes("portfolio") || lower.includes("work") || lower.includes("kazi") || lower.includes("drive")) {
      scrollToSection("projects");
      return {
        text: lang === "sw"
          ? "Tazama kazi za video, picha, na makala kwenye Google Drive Portfolio:"
          : "You can explore Peter's full video reels, audio edits, and media documentations directly in his Google Drive vault below:",
        links: [{ label: "📂 Open Google Drive Vault", url: "https://drive.google.com/drive/folders/1T1pnLSosuZzPWkCvZGXqI7dcOThmAoPb?usp=sharing" }],
        suggestions: ["Book a Shoot", "Contact Direct"]
      };
    }

    if (lower.includes("book") || lower.includes("contact") || lower.includes("miadi") || lower.includes("hire")) {
      scrollToSection("contact");
      return {
        text: "You can easily schedule a shoot or request custom pricing. Direct contacts:\n\n• Phone/WhatsApp: +254 707 537 823\n• Email: Obbayipeter050@gmail.com\n\nNote: For exact project quotes, connecting on WhatsApp allows for the quickest response!",
        links: [
          { label: "💬 WhatsApp Chat", url: "https://wa.me/254707537823?text=Hello%20Peter,%20I%20want%20to%20book%20a%20session." },
          { label: "✉️ Send Email", url: "mailto:Obbayipeter050@gmail.com" }
        ],
        suggestions: ["Ask Turnaround Time", "View Rates"]
      };
    }

    // 4. Privacy & Safety Guardrails (Legal, Medical, Financial)
    if (lower.includes("legal") || lower.includes("medical") || lower.includes("tax") || lower.includes("finance")) {
      return {
        text: "I am designed to assist with creative, media, and booking queries regarding Peter's portfolio. For legal, medical, or financial advice, please consult a certified professional in those respective fields.",
        suggestions: ["Media Services", "Book Session"]
      };
    }

    // Default polite response with suggested next steps
    return {
      text: lang === "sw"
        ? "Asante kwa swali lako! Mimi ni Msaidizi wa Peter. Je, ungependa kubuni mawazo ya video, kutazama kazi, au kuweka miadi?"
        : "Thanks for reaching out! I'm here to assist with creative brainstorms, service info, portfolio navigation, and booking setups. What topic would you like to explore next?",
      suggestions: ["💡 Brainstorm Ideas", "🎬 Script Writing", "📂 View Portfolio", "💬 Contact Peter"]
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
      {/* Fixed Bottom-Left Floating Toggle Button */}
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

      {/* Bottom-Left Chat Drawer Popup (Leaves website structure visible) */}
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

          {/* Chat Messages Body */}
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

                  {/* Rich Interactive Links */}
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

                {/* Follow-up Suggestion Chips */}
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
            {["💡 Brainstorm", "🎬 Script Hook", "📂 Portfolio", "💬 Book Shoot"].map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 font-medium transition border border-zinc-700/60"
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
              placeholder={lang === "sw" ? "Uliza au leza wazo lako..." : "Ask about booking, scripts, or rates..."}
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