"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  sender: "ai" | "user";
  text: string;
}

const quickPrompts = [
  "View Services",
  "Book a Session",
  "See Portfolio",
  "Get a Quote",
];

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! I'm Peter's AI Assistant. How can I help you discover his creative universe today?",
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add User Message
    const newMessages: Message[] = [...messages, { sender: "user", text: query }];
    setMessages(newMessages);
    if (!textToSend) setInput("");

    // Generate AI Response based on keywords
    setTimeout(() => {
      let aiReply = "I'm here to help! You can ask me about Peter's videography, journalism, pricing, or how to book him directly.";
      const lower = query.toLowerCase();

      if (lower.includes("service") || lower.includes("view services")) {
        aiReply = "Peter offers Video Production, Video Editing & Color Grading, Photography, Digital Marketing, Podcast Production, and Music Production. Check out the 'Core Services' section above!";
      } else if (lower.includes("book") || lower.includes("session")) {
        aiReply = "You can book Peter directly via WhatsApp (+254707537823) or email Obbayipeter050@gmail.com to discuss project dates and requirements!";
      } else if (lower.includes("portfolio") || lower.includes("see portfolio") || lower.includes("drive")) {
        aiReply = "You can view Peter's full video reels, photography, and journalism work on his official Google Drive: https://drive.google.com/drive/folders/1T1pnLSosuZzPWkCvZGXqI7dcOThmAoPb?usp=sharing";
      } else if (lower.includes("quote") || lower.includes("price") || lower.includes("cost")) {
        aiReply = "Rates vary depending on project scope (editing, full event coverage, or retainer work). Click the WhatsApp button to get a personalized quote within minutes!";
      } else if (lower.includes("who") || lower.includes("peter")) {
        aiReply = "Peter Ken Obbayi is a Digital Media Specialist, Journalist, Videographer, and Content Creator studying Mass Communication at Kibabii University.";
      }

      setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
    }, 500);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 bg-zinc-900 border border-amber-500/40 text-amber-400 p-3.5 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition"
        >
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-bold text-sm">Peter's AI</span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-80 sm:w-96 rounded-2xl bg-zinc-950/95 border border-zinc-800 shadow-2xl backdrop-blur-md flex flex-col overflow-hidden text-white transition-all">
          
          {/* Header */}
          <div className="p-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs border border-amber-500/30">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none">Peter's AI</h3>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white text-lg font-bold px-2"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "ai" && (
                  <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center text-[10px] shrink-0 border border-amber-500/20">
                    🤖
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-amber-500 text-black font-medium rounded-br-none"
                      : "bg-zinc-800/80 text-zinc-200 border border-zinc-700/50 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Action Pills */}
          <div className="px-3 py-2 flex flex-wrap gap-1.5 border-t border-zinc-800/60 bg-zinc-900/40">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-[11px] px-3 py-1 rounded-full bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 font-medium transition border border-zinc-700/50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t border-zinc-800 bg-zinc-900/80 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-zinc-800/80 text-xs text-white placeholder-zinc-500 px-3 py-2 rounded-full border border-zinc-700 focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={() => handleSend()}
              className="w-8 h-8 rounded-full bg-amber-500 text-black font-bold flex items-center justify-center hover:scale-105 transition"
            >
              ➔
            </button>
          </div>

        </div>
      )}
    </>
  );
}