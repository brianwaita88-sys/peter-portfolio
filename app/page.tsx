"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AiAssistant from "./components/AiAssistant";
import peterProfile from "../public/peter-profile.jpg";
import peterLogo from "../public/peter-logo.png";

// GitHub Pages basePath configuration
const basePath = process.env.NODE_ENV === "production" ? "/peter-portfolio" : "";

const bgImages = [
  `${basePath}/bg-1.jpg`,
  `${basePath}/bg-2.jpg`,
  `${basePath}/bg-3.jpg`,
  `${basePath}/bg-4.jpg`,
  `${basePath}/bg-5.jpg`,
  `${basePath}/bg-6.jpg`,
  `${basePath}/bg-7.jpg`,
];

const coreServices = [
  {
    title: "Corporate Video & Videography",
    desc: "High-impact video coverage, interviews, and brand storytelling crafted for digital engagement.",
  },
  {
    title: "Video Editing & Color Grading",
    desc: "Seamless post-production, dynamic transitions, cinematic color grading, and audio polishing.",
  },
  {
    title: "Digital Marketing & Strategy",
    desc: "Data-driven social media growth, search engine positioning, and targeted content planning.",
  },
  {
    title: "Branding & YouTube Growth",
    desc: "Comprehensive brand identity development, video optimization, and audience channel expansion.",
  },
  {
    title: "Photography & Livestreaming",
    desc: "Studio-quality event photography, portraiture, and multi-camera live broadcast setups.",
  },
  {
    title: "Music Production & DJ Services",
    desc: "Custom audio scoring, event DJ performances, creative music mixing, and audio production.",
  },
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

const featuredProjects = [
  {
    title: "Media Production & Portfolio Vault",
    description: "Centralized Google Drive repository hosting full video reels, high-resolution photo archives, journalism documentations, and raw media project deliverables.",
    tags: ["Google Drive", "Videography", "Media Vault"],
    demoUrl: "https://drive.google.com/drive/folders/1T1pnLSosuZzPWkCvZGXqI7dcOThmAoPb?usp=sharing",
    githubUrl: "https://github.com/brianwaita88-sys/peter-portfolio",
    icon: "📂",
  },
  {
    title: "DJ Vyro 254 Official Platform",
    description: "Creative music hub and YouTube platform featuring live DJ mixes, Gospel audio-visual praise sessions, and video production projects.",
    tags: ["YouTube", "Music Production", "Content Creation"],
    demoUrl: "https://youtube.com/@djvyro_ke?si=GFZA-4EX_v5sIcVT",
    githubUrl: "https://github.com/brianwaita88-sys/peter-portfolio",
    icon: "📺",
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
    answer: "You can initiate a booking directly via WhatsApp or Email. We start with a brief concept discussion, agree on project deliverables and timelines, and confirm the date once a deposit is received."
  },
  {
    question: "What is the standard turnaround time for video editing & audio projects?",
    answer: "Turnaround depends on project scope. Short video reels take 24–48 hours, while full event videography, corporate packages, or audio mastering typically take 3–7 business days."
  },
  {
    question: "How should I send large raw video/audio files for editing?",
    answer: "You can upload raw assets directly to Google Drive, WeTransfer, or Dropbox and share the folder access link via WhatsApp or Email."
  },
  {
    question: "Does Peter offer custom packages for events and long-term retainer work?",
    answer: "Yes! Custom media coverage, podcast production packages, and monthly content creation retainers are available upon request."
  }
];

export default function Home() {
  const whatsappNumber = "254707537823";
  const driveFolderLink = "https://drive.google.com/drive/folders/1T1pnLSosuZzPWkCvZGXqI7dcOThmAoPb?usp=sharing";
  const youtubeLink = "https://youtube.com/@djvyro_ke?si=GFZA-4EX_v5sIcVT";

  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Dynamic background carousel
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(bgInterval);
  }, []);

  // Intro Splash screen timer
  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeSplash(true), 2000);
    const hideTimer = setTimeout(() => setShowSplash(false), 2600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Typing animation
  useEffect(() => {
    const currentFullTitle = rotatingTitles[titleIndex];
    const typingSpeed = isDeleting ? 35 : 75;
    const pauseTime = isDeleting ? 0 : 2200;

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
    <main className="min-h-screen text-gray-100 font-sans relative overflow-x-hidden selection:bg-amber-500 selection:text-black" style={{ backgroundColor: '#09090B' }}>
      
      {/* Intro Splash Screen with Prominent Enlarged Logo */}
      {showSplash && (
        <div 
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 ${
            fadeSplash ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ backgroundColor: '#09090B' }}
        >
          <div className="text-center px-6 space-y-6 flex flex-col items-center animate-pulse">
            <div className="relative w-72 md:w-96 max-w-[85vw] flex justify-center">
              <Image 
                src={peterLogo} 
                alt="Peter Ken Logo" 
                width={400}
                height={130}
                className="w-auto h-28 md:h-36 object-contain drop-shadow-[0_0_25px_rgba(245,158,11,0.25)]"
                priority
              />
            </div>
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-amber-400">
              Media Specialist & Creative Portfolio
            </p>
          </div>
        </div>
      )}

      {/* Dynamic Background Images with Smooth Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {bgImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              index === currentBgIndex ? "opacity-65 scale-105" : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url("${src}")`,
              transitionProperty: "opacity, transform",
              transitionDuration: "1500ms",
            }}
          />
        ))}

        {/* Ambient Gradient Overlays for High Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/60 via-[#09090B]/40 to-[#09090B]/90"></div>
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-[45%] right-[-120px] w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=Hello%20Peter,%20I%20visited%20your%20website%20and%20would%20like%20to%20connect.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 transition duration-300 hover:scale-110 active:scale-95"
        aria-label="Contact Peter on WhatsApp"
      >
        <span className="text-xl">💬</span>
        <span className="hidden sm:inline text-xs uppercase tracking-wider">WhatsApp</span>
      </a>

      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-zinc-950/70 border-b border-zinc-800/60 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#about" className="flex items-center gap-3 group">
            <Image 
              src={peterLogo} 
              alt="Peter Ken Logo" 
              width={120}
              height={36}
              className="w-auto h-9 object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <span className="font-bold text-xs tracking-widest uppercase hidden sm:inline text-gray-200 group-hover:text-amber-400 transition-colors">
              Peter Ken Obbayi
            </span>
          </a>

          <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-wider text-gray-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#support" className="hover:text-amber-400 transition-colors">Support Hub</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>

          <a 
            href="#contact" 
            className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg bg-amber-500 text-black hover:bg-amber-400 transition-all shadow-md shadow-amber-500/10 hover:scale-105 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-20 md:pb-28 flex flex-col-reverse md:flex-row items-center justify-between gap-12" id="about">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            Journalism & Mass Communication Professional
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Crafting Visual Stories That <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">Inspire & Engage</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-bold min-h-[40px] text-amber-400">
            I am a <span className="underline decoration-amber-500/60 underline-offset-8 text-white">{displayText}</span>
            <span className="animate-ping ml-1 text-amber-400 inline-block">|</span>
          </p>

          <p className="text-gray-300 max-w-xl text-sm md:text-base leading-relaxed">
            Combining journalism expertise, high-end video editing, music production, and digital strategy to help brands, creators, and organizations tell powerful stories that leave a lasting impact.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a 
              href="#projects"
              className="px-7 py-3 font-bold text-xs uppercase tracking-wider rounded-xl transition duration-300 hover:scale-105 shadow-xl shadow-amber-500/10 bg-amber-400 text-black hover:bg-amber-300 flex items-center gap-2"
            >
              <span>Explore Projects</span> ➔
            </a>
            <a 
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 font-bold text-xs uppercase tracking-wider rounded-xl transition duration-300 hover:scale-105 bg-red-600/90 text-white hover:bg-red-600 flex items-center gap-2 border border-red-500/40"
            >
              📺 Watch YouTube Mixes
            </a>
          </div>
        </div>

        {/* Profile Card with Subtle Glow */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 to-red-600 opacity-30 blur-xl group-hover:opacity-60 transition duration-500"></div>
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl transition duration-500 group-hover:scale-[1.02] border border-amber-500/40 bg-zinc-900"
              style={{ width: '300px', height: '300px' }}
            >
              <Image
                src={peterProfile}
                alt="Peter Ken Obbayi Portrait"
                width={300}
                height={300}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 md:py-28 px-6 max-w-6xl mx-auto border-t border-zinc-800/40" id="services">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Core Services</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            End-to-end media production, content strategy, and digital creation solutions tailored to your unique brand vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => (
            <div 
              key={idx} 
              className="p-7 rounded-2xl flex flex-col justify-between space-y-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 border border-zinc-800/80 backdrop-blur-lg bg-zinc-900/80 group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{service.desc}</p>
              </div>

              <a
                href="#contact"
                className="w-full text-center text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg transition duration-200 bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-black border border-amber-500/20 flex items-center justify-center gap-2"
              >
                Book Service ➔
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-20 md:py-28 px-6 max-w-6xl mx-auto border-t border-zinc-800/40" id="skills">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Skills & Technical Tools</h2>
          <p className="text-gray-400 text-sm">
            Combining modern media software with strategic communication tools for digital excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="p-7 rounded-2xl transition duration-300 border border-zinc-800/80 backdrop-blur-lg bg-zinc-900/80 hover:border-zinc-700"
            >
              <h3 className="text-lg font-bold mb-4 text-amber-400 flex items-center gap-2">
                <span>⚡</span> {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="text-amber-400 text-xs">✓</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="relative z-10 py-20 md:py-28 px-6 max-w-6xl mx-auto border-t border-zinc-800/40" id="projects">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Featured Media Vault & Projects</h2>
          <p className="text-gray-400 text-sm">
            Explore active media archives, production work, live YouTube sets, and source repositories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-2xl space-y-6 border border-zinc-800/80 backdrop-blur-lg bg-zinc-900/80 transition duration-300 hover:border-amber-500/40 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-800 text-gray-300 border border-zinc-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Live Demo & GitHub Links */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-800/60">
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 font-bold text-xs uppercase tracking-wider rounded-xl bg-amber-500 text-black hover:bg-amber-400 transition duration-200 flex items-center justify-center gap-2"
                >
                  🔗 Live Demo
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 font-bold text-xs uppercase tracking-wider rounded-xl bg-zinc-800 text-gray-200 hover:bg-zinc-700 transition duration-200 border border-zinc-700/80 flex items-center justify-center gap-2"
                >
                  💻 GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision, Values, & Hobbies */}
      <section className="relative z-10 py-20 md:py-28 px-6 max-w-6xl mx-auto border-t border-zinc-800/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl space-y-6 border border-zinc-800/80 backdrop-blur-lg bg-zinc-900/80">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">Career Vision</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To become one of Africa's leading digital media innovators, empowering organizations, brands, and communities through impactful storytelling, high-caliber journalism, and cutting-edge media technology.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">Core Guiding Values</h4>
              <div className="flex flex-wrap gap-2">
                {coreValues.map((val, vIdx) => (
                  <span key={vIdx} className="text-xs px-3 py-1.5 rounded-lg text-gray-200 font-medium bg-zinc-800 border border-zinc-700/50 hover:border-amber-500/40 transition-colors">
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl space-y-4 border border-zinc-800/80 backdrop-blur-lg bg-zinc-900/80">
            <h3 className="text-2xl font-bold text-white">Hobbies & Pursuits</h3>
            <p className="text-gray-400 text-xs mb-2">
              Creative activities that fuel passion, inspiration, research, and community impact.
            </p>
            <ul className="space-y-3">
              {hobbies.map((hobby, hIdx) => (
                <li key={hIdx} className="flex items-center gap-3 text-gray-300 text-sm">
                  <span className="text-amber-400">◆</span> {hobby}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Support Hub Section */}
      <section className="relative z-10 py-20 md:py-28 px-6 max-w-4xl mx-auto border-t border-zinc-800/40" id="support">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Support Hub & Client Care</h2>
          <p className="text-gray-400 text-sm">
            Everything you need to know about booking, deliverables, media files, and working together.
          </p>
        </div>

        <div className="space-y-4">
          {supportFaqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl overflow-hidden transition border border-zinc-800/80 backdrop-blur-lg bg-zinc-900/80"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-6 font-bold text-base md:text-lg flex justify-between items-center text-white hover:text-amber-400 transition-colors"
                aria-expanded={openFaq === idx}
              >
                <span>{faq.question}</span>
                <span className="text-amber-400 text-xl ml-4 font-mono">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              
              {openFaq === idx && (
                <div className="px-6 pb-6 text-gray-300 text-sm leading-relaxed border-t border-zinc-800/50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer & Contact Section */}
      <footer className="relative z-10 border-t border-zinc-800/80 bg-zinc-950 pt-20 pb-12" id="contact">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Let's Work Together</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Have an upcoming project, event coverage, or content production inquiry? Get in touch today!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Peter,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 font-bold rounded-xl transition duration-300 hover:scale-105 flex items-center justify-center gap-2 text-xs uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/10"
              >
                💬 Direct WhatsApp
              </a>

              <a 
                href="mailto:Obbayipeter050@gmail.com" 
                className="w-full sm:w-auto px-6 py-3.5 font-bold rounded-xl transition duration-300 hover:scale-105 flex items-center justify-center gap-2 text-xs uppercase tracking-wider bg-amber-500 text-black hover:bg-amber-400 shadow-lg shadow-amber-500/10"
              >
                ✉️ Send Email
              </a>
              
              <a 
                href="tel:0707537823" 
                className="w-full sm:w-auto px-6 py-3.5 font-bold rounded-xl transition duration-300 hover:scale-105 flex items-center justify-center gap-2 text-xs uppercase tracking-wider bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700/60"
              >
                📞 Call Direct
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-zinc-900 text-xs">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Image src={peterLogo} alt="Peter Ken Logo" width={100} height={30} className="w-auto h-7 object-contain" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional Media Production, Journalism, Videography, and Digital Strategy Solutions.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-amber-400 uppercase tracking-wider">Quick Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition">About Peter</a></li>
                <li><a href="#services" className="hover:text-white transition">Core Services</a></li>
                <li><a href="#projects" className="hover:text-white transition">Media Vault</a></li>
                <li><a href="#support" className="hover:text-white transition">Support Hub</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-amber-400 uppercase tracking-wider">Connect Channels</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">YouTube Channel</a></li>
                <li><a href={driveFolderLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Google Drive Archive</a></li>
                <li><a href="https://github.com/brianwaita88-sys/peter-portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub Profile</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-amber-400 uppercase tracking-wider">Direct Contact</h4>
              <p className="text-gray-400">Nairobi / Bungoma, Kenya</p>
              <p className="text-gray-400">Email: Obbayipeter050@gmail.com</p>
              <p className="text-gray-400">Phone: +254 707 537823</p>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-900 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Peter Ken Obbayi. All rights reserved. Designed & developed with Next.js & Tailwind CSS.
          </div>
        </div>
      </footer>

      {/* Floating Bottom-Left AI Assistant Component */}
      <AiAssistant />

    </main>
  );
}