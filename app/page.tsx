"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AiAssistant from "./components/AiAssistant";
import peterProfile from "../public/peter-profile.jpg";
import peterLogo from "../public/peter-logo.png";

const coreServices = [
  "Corporate Video Production & Videography",
  "Video Editing & Color Grading",
  "Digital Marketing & Social Media Strategy",
  "Branding, Content Strategy & YouTube Growth",
  "Photography, Livestreaming & Podcast Production",
  "Music Production, DJ Services & Creative Consulting",
];

const skillCategories = [
  {
    title: "Media Production & Editing",
    skills: ["Videography", "Video Editing", "Photography", "Adobe Premiere Pro", "DaVinci Resolve", "OBS Studio"],
  },
  {
    title: "Journalism & Marketing",
    skills: ["Storytelling & Script Writing", "Journalism", "Digital Marketing & SEO", "Branding & Strategy", "Canva", "AI Tools"],
  },
  {
    title: "Audio & Web Development",
    skills: ["Music Production", "FL Studio", "Podcast Production", "HTML5 / CSS3 / JavaScript", "React & Next.js", "Git & GitHub"],
  },
];

const coreValues = [
  "Integrity", "Creativity", "Professionalism", "Innovation", 
  "Excellence", "Accountability", "Teamwork", "Continuous Learning"
];

const hobbies = [
  "Music Production & DJ Mixing", "Drumming", "Photography & Videography", 
  "Storytelling & AI Research", "Entrepreneurship", "Church Media Ministry", "Youth Mentorship"
];

const rotatingTitles = [
  "Journalist",
  "Digital Media Specialist",
  "Content Creator",
  "Videographer",
  "Video Editor",
  "Music Producer",
  "Photographer"
];

const supportFaqs = [
  {
    question: "How do I book Peter for a video or photography shoot?",
    answer: "You can initiate a booking directly via WhatsApp or Email. We usually start with a brief concept discussion, agree on project deliverables and timelines, and confirm the date once a commitment deposit is made."
  },
  {
    question: "What is the standard turnaround time for video editing & audio projects?",
    answer: "Turnaround depends on project scope. Short video reels and social media edits take 24–48 hours, while full event videography, corporate packages, or audio mastering typically take 3–7 business days."
  },
  {
    question: "How should I send large raw video/audio files for editing?",
    answer: "You can upload raw assets directly to Google Drive, WeTransfer, or Dropbox and share the folder link via WhatsApp or Email."
  },
  {
    question: "Does Peter offer custom packages for events and long-term retainer work?",
    answer: "Yes! Custom media coverage, podcast production packages, and monthly content creation retainers are available upon request."
  }
];

export default function Home() {
  const whatsappNumber = "254707537823";
  const driveFolderLink = "https://drive.google.com/drive/folders/1T1pnLSosuZzPWkCvZGXqI7dcOThmAoPb?usp=sharing";

  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeSplash(true);
    }, 2200);

    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const currentFullTitle = rotatingTitles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 0 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentFullTitle) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
      } else {
        const nextChar = isDeleting
          ? currentFullTitle.substring(0, displayText.length - 1)
          : currentFullTitle.substring(0, displayText.length + 1);
        setDisplayText(nextChar);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="min-h-screen text-white font-sans relative overflow-hidden" style={{ backgroundColor: '#0B0B0B' }}>
      
      {/* Intro Splash Screen */}
      {showSplash && (
        <div 
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 ${
            fadeSplash ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ backgroundColor: '#0B0B0B' }}
        >
          <div className="text-center px-6 space-y-3 animate-pulse">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest text-white uppercase">
              PETER KEN OBBAYI
            </h1>
            <p className="text-sm md:text-lg font-medium tracking-widest uppercase" style={{ color: '#D4AF37' }}>
              Creative Portfolio
            </p>
          </div>
        </div>
      )}

      {/* Background Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/3 right-[-100px] w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Floating WhatsApp Quick Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=Hello%20Peter,%20I%20visited%20your%20website%20and%20would%20like%20to%20connect.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 transition duration-300 hover:scale-105"
        aria-label="Contact on WhatsApp"
      >
        <span className="text-xl">💬</span>
        <span className="hidden sm:inline text-sm">WhatsApp</span>
      </a>

      {/* Navbar */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image 
            src={peterLogo} 
            alt="Peter Ken Logo" 
            width={120}
            height={36}
            style={{ width: 'auto', height: '36px', objectFit: 'contain' }}
            priority
          />
          <span className="font-bold text-sm tracking-wider uppercase hidden sm:inline text-white">
            Peter Ken Obbayi
          </span>
        </div>
        <nav className="flex gap-6 text-sm font-semibold">
          <a href="#about" className="hover:text-amber-400 transition text-gray-300">About</a>
          <a href="#services" className="hover:text-amber-400 transition text-gray-300">Services</a>
          <a href="#skills" className="hover:text-amber-400 transition text-gray-300">Skills</a>
          <a href="#projects" className="hover:text-amber-400 transition text-gray-300">Projects</a>
          <a href="#support" className="hover:text-amber-400 transition text-gray-300">Support Hub</a>
          <a href="#contact" className="hover:text-amber-400 transition text-gray-300">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10" id="about">
        <div className="flex-1 text-center md:text-left space-y-5">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Peter Ken Obbayi
          </h1>
          
          <p className="text-lg md:text-2xl font-bold min-h-[36px]" style={{ color: '#D4AF37' }}>
            I am a <span className="underline decoration-amber-500/50 underline-offset-4">{displayText}</span>
            <span className="animate-ping ml-1 text-white inline-block">|</span>
          </p>

          <p className="text-gray-300 max-w-lg text-sm md:text-base leading-relaxed">
            A passionate digital media professional and creative storyteller pursuing a B.A. in Journalism and Mass Communication at Kibabii University. I combine creativity, technology, and strategic thinking to help brands communicate effectively.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a 
              href={driveFolderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 font-bold text-sm rounded-lg transition duration-300 hover:scale-105 shadow-lg shadow-amber-500/10"
              style={{ backgroundColor: '#D4AF37', color: '#0B0B0B' }}
            >
              View Portfolio Drive
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2.5 text-white font-semibold text-sm rounded-lg transition duration-300 hover:bg-zinc-800 hover:scale-105"
              style={{ backgroundColor: '#1C1C1C' }}
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div 
            className="rounded-2xl overflow-hidden shadow-2xl transition duration-500 hover:scale-105"
            style={{ width: '280px', height: '280px', maxWidth: '280px', maxHeight: '280px' }}
          >
            <Image
              src={peterProfile}
              alt="Peter Ken Obbayi Profile Portrait"
              width={280}
              height={280}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-14 px-6 max-w-6xl mx-auto" id="services">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Core Services</h2>
          <p className="text-gray-400 text-sm">
            End-to-end media production, content strategy, and digital creation solutions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {coreServices.map((service, idx) => (
            <div key={idx} className="p-6 rounded-xl flex flex-col justify-between space-y-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5" style={{ backgroundColor: '#1C1C1C' }}>
              <div className="flex items-start gap-3">
                <span className="text-lg" style={{ color: '#D4AF37' }}>★</span>
                <p className="font-bold text-gray-100 text-base leading-snug">{service}</p>
              </div>

              <a
                href="#contact"
                className="w-full text-center text-xs font-bold py-2 rounded-lg transition duration-200 hover:opacity-90 flex items-center justify-center gap-1.5"
                style={{ backgroundColor: '#D4AF37', color: '#0B0B0B' }}
              >
                📅 Booking
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-14 px-6 max-w-6xl mx-auto" id="skills">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Skills & Technical Tools</h2>
          <p className="text-gray-400 text-sm">
            Combining modern media software with strategic communication tools.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-6 rounded-xl transition duration-300 hover:-translate-y-1" style={{ backgroundColor: '#1C1C1C' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#D4AF37' }}>{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span style={{ color: '#D4AF37' }}>✓</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Values */}
      <section className="relative z-10 py-14 px-6 max-w-6xl mx-auto">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div className="p-6 rounded-xl space-y-5" style={{ backgroundColor: '#1C1C1C' }}>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Career Vision</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To become one of Africa's leading digital media innovators, empowering organizations and communities through impactful storytelling and technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-bold mb-3" style={{ color: '#D4AF37' }}>Core Values</h4>
              <div className="flex flex-wrap gap-2">
                {coreValues.map((val, vIdx) => (
                  <span key={vIdx} className="text-xs px-3 py-1.5 rounded-md text-gray-200 font-medium transition duration-200 hover:bg-amber-500/20" style={{ backgroundColor: '#2A2A2A' }}>
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl space-y-3" style={{ backgroundColor: '#1C1C1C' }}>
            <h3 className="text-xl font-bold text-white">Hobbies & Interests</h3>
            <p className="text-gray-400 text-xs mb-3">
              Creative pursuits that fuel passion, inspiration, and community impact.
            </p>
            <ul className="space-y-2">
              {hobbies.map((hobby, hIdx) => (
                <li key={hIdx} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span style={{ color: '#D4AF37' }}>◆</span> {hobby}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="relative z-10 py-14 px-6 max-w-4xl mx-auto" id="projects">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Media Projects & Portfolio Vault</h2>
          <p className="text-gray-400 text-sm">
            Access the complete collection of journalism features, corporate videography reels, digital audio edits, and media content assets.
          </p>
        </div>

        <div className="p-8 rounded-2xl shadow-2xl text-center space-y-6 transition duration-300 hover:shadow-amber-500/10" style={{ backgroundColor: '#1C1C1C' }}>
          <div className="inline-block p-4 rounded-full bg-amber-500/10 mb-2">
            <span className="text-4xl">📁</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Official Media & Project Drive
            </h3>
            <p className="text-gray-300 text-sm max-w-lg mx-auto leading-relaxed">
              Includes full video reels, high-resolution photography, audio production projects, and journalism documentations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            <span className="text-xs px-3 py-1 rounded bg-zinc-800 text-gray-300 font-medium">Videography</span>
            <span className="text-xs px-3 py-1 rounded bg-zinc-800 text-gray-300 font-medium">Journalism</span>
            <span className="text-xs px-3 py-1 rounded bg-zinc-800 text-gray-300 font-medium">Audio Editing</span>
            <span className="text-xs px-3 py-1 rounded bg-zinc-800 text-gray-300 font-medium">Content Strategy</span>
          </div>

          <div className="pt-4">
            <a 
              href={driveFolderLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-sm md:text-base rounded-xl transition duration-300 hover:scale-105 shadow-xl shadow-amber-500/10"
              style={{ backgroundColor: '#D4AF37', color: '#0B0B0B' }}
            >
              <span>Explore Google Drive Portfolio</span>
              <span>📂</span>
            </a>
          </div>
        </div>
      </section>

      {/* Support Hub Section */}
      <section className="relative z-10 py-14 px-6 max-w-4xl mx-auto" id="support">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Support Hub & Client Care</h2>
          <p className="text-gray-400 text-sm">
            Everything you need to know about booking, project delivery, and working with Peter.
          </p>
        </div>

        <div className="space-y-4">
          {supportFaqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="rounded-xl overflow-hidden transition border border-zinc-800/80"
              style={{ backgroundColor: '#1C1C1C' }}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 font-bold text-sm md:text-base flex justify-between items-center text-white hover:text-amber-400 transition"
              >
                <span>{faq.question}</span>
                <span className="text-amber-400 text-lg ml-4">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              
              {openFaq === idx && (
                <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed border-t border-zinc-800/50 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 text-center" style={{ backgroundColor: '#141414' }} id="contact">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Let's Work Together</h2>
          <p className="text-gray-300 text-sm max-w-lg mx-auto leading-relaxed">
            Have a project in mind or want to book services? Get in touch today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Peter,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 font-bold rounded-lg shadow transition duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm bg-emerald-600 text-white hover:bg-emerald-500"
            >
              💬 WhatsApp
            </a>

            <a 
              href="mailto:Obbayipeter050@gmail.com" 
              className="w-full sm:w-auto px-6 py-3 font-bold rounded-lg shadow transition duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm"
              style={{ backgroundColor: '#D4AF37', color: '#0B0B0B' }}
            >
              ✉️ Email Direct
            </a>
            
            <a 
              href="tel:0707537823" 
              className="w-full sm:w-auto px-6 py-3 text-white font-semibold rounded-lg shadow transition duration-300 hover:bg-zinc-800 hover:scale-105 flex items-center justify-center gap-2 text-sm"
              style={{ backgroundColor: '#262626' }}
            >
              📞 Call: 0707 537823
            </a>
          </div>

          <p className="text-xs text-gray-500 pt-10">
            © {new Date().getFullYear()} Peter Ken Obbayi. All rights reserved.
          </p>
        </div>
      </footer>

      {/* AI Assistant Floating Widget */}
      <AiAssistant />

    </main>
  );
}