import Image from "next/image";
import peterProfile from "../public/peter-profile.jpg";
import peterLogo from "../public/peter-logo.png";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Media Production & Portfolio Asset 1",
    category: "Journalism / Videography",
    description: "Featured media coverage and project documentation for Peter Ken Obbayi's creative work.",
    tags: ["Journalism", "Video Production", "Kibabii University"],
    link: "https://drive.google.com/file/d/14ciq03BcBKoF7J7tfUuJaeQpo8PqF4ci/view?usp=sharing",
  },
  {
    title: "Digital Storytelling & Journalism Feature 2",
    category: "Media Coverage",
    description: "In-depth article and broadcast documentation showcasing digital media storytelling.",
    tags: ["Media Strategy", "Editing", "Adobe Premiere Pro"],
    link: "https://drive.google.com/file/d/11fXlkPaJcxo12OCYCcsYFez9oCl3Lr02/view?usp=sharing",
  },
  {
    title: "Corporate Video & Photography Reel 3",
    category: "Videography",
    description: "Professional camera work, livestreaming, and cinematography portfolio sample.",
    tags: ["Cinematography", "DaVinci Resolve", "Videography"],
    link: "https://drive.google.com/file/d/1NY8N7KqV8W7Ig3yzHAPl96zeD0h8wqxn/view?usp=sharing",
  },
  {
    title: "Web & Content Creation Project 4",
    category: "Web & Digital Content",
    description: "Integration of modern web tools with creative media distribution for audience engagement.",
    tags: ["Web Development", "Content Strategy", "Digital Media"],
    link: "https://drive.google.com/file/d/1goaxAJAifjvK8jjDDjOWKp_b5AuxVdTA/view?usp=sharing",
  },
  {
    title: "Audio & Media Production Project 5",
    category: "Audio / Broadcast",
    description: "Sound design and audio-visual post-production compilation.",
    tags: ["Audio Editing", "FL Studio", "Post-Production"],
    link: "https://drive.google.com/file/d/1o9PqGO1-ADNo9SGVNGiVvgq6tPmqO7q4/view?usp=sharing",
  },
];

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

export default function Home() {
  return (
    <main className="min-h-screen text-white font-sans" style={{ backgroundColor: '#0B0B0B' }}>
      
      {/* Header / Navbar */}
      <header className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center border-b border-zinc-800">
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
          <a href="#contact" className="hover:text-amber-400 transition text-gray-300">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10" id="about">
        
        {/* Text Area */}
        <div className="flex-1 text-center md:text-left space-y-5">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Peter Ken Obbayi
          </h1>
          <p className="text-base md:text-lg font-medium" style={{ color: '#D4AF37' }}>
            Digital Media Specialist • Journalist • Content Creator • Videographer • Video Editor • Music Producer
          </p>
          <p className="text-gray-300 max-w-lg text-sm md:text-base leading-relaxed">
            A passionate digital media professional and creative storyteller pursuing a B.A. in Journalism and Mass Communication at Kibabii University. I combine creativity, technology, and strategic thinking to help brands communicate effectively.
          </p>
          
          {/* Hero Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a 
              href="#projects" 
              className="px-6 py-2.5 font-bold text-sm rounded-lg shadow transition duration-200"
              style={{ backgroundColor: '#D4AF37', color: '#0B0B0B' }}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2.5 border border-amber-500/40 text-white font-semibold text-sm rounded-lg shadow-sm transition duration-200"
              style={{ backgroundColor: '#1C1C1C' }}
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image - Strictly Constrained Wrapper */}
        <div className="flex-1 flex justify-center items-center">
          <div 
            className="rounded-2xl overflow-hidden shadow-xl border-2 border-zinc-800"
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

      {/* Core Services Section */}
      <section className="py-14 px-6 max-w-6xl mx-auto border-t border-zinc-800" id="services">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Core Services</h2>
          <p className="text-gray-400 text-sm">
            End-to-end media production, content strategy, and digital creation solutions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {coreServices.map((service, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-zinc-800 shadow-sm flex items-start gap-3" style={{ backgroundColor: '#1C1C1C' }}>
              <span className="text-lg" style={{ color: '#D4AF37' }}>★</span>
              <p className="font-semibold text-gray-200 text-sm leading-snug">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-14 px-6 max-w-6xl mx-auto border-t border-zinc-800" id="skills">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Skills & Technical Tools</h2>
          <p className="text-gray-400 text-sm">
            Combining modern media software with strategic communication tools.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-zinc-800 shadow-sm" style={{ backgroundColor: '#1C1C1C' }}>
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

      {/* Career Vision, Values & Hobbies */}
      <section className="py-14 px-6 max-w-6xl mx-auto border-t border-zinc-800">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          
          {/* Vision & Core Values */}
          <div className="p-6 rounded-xl border border-zinc-800 space-y-5" style={{ backgroundColor: '#1C1C1C' }}>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Career Vision</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To become one of Africa's leading digital media innovators, empowering organizations and communities through impactful storytelling and technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-base font-bold mb-2" style={{ color: '#D4AF37' }}>Core Values</h4>
              <div className="flex flex-wrap gap-2">
                {coreValues.map((val, vIdx) => (
                  <span key={vIdx} className="text-xs bg-zinc-800 px-2.5 py-1 rounded-md text-gray-200 font-medium border border-zinc-700">
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hobbies & Personal Interests */}
          <div className="p-6 rounded-xl border border-zinc-800 space-y-3" style={{ backgroundColor: '#1C1C1C' }}>
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

      {/* Projects Section */}
      <section className="py-14 px-6 max-w-6xl mx-auto border-t border-zinc-800" id="projects">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Featured Projects & Media Work</h2>
          <p className="text-gray-400 text-sm">
            A showcase of journalism, video editing, and digital media initiatives.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="border border-zinc-800 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between transition hover:border-amber-500/50"
              style={{ backgroundColor: '#1C1C1C' }}
            >
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#D4AF37' }}>
                  {project.category}
                </span>
                <h3 className="text-lg font-bold mt-1.5 mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs bg-zinc-800 px-2 py-0.5 rounded text-gray-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 pt-0">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full text-center text-sm font-bold py-2 rounded-lg transition"
                  style={{ backgroundColor: '#D4AF37', color: '#0B0B0B' }}
                >
                  View Document / Link 🔗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section & Footer */}
      <footer className="border-t border-zinc-800 py-12 text-center" style={{ backgroundColor: '#1C1C1C' }} id="contact">
        <div className="max-w-4xl mx-auto px-6 space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Let's Work Together</h2>
          <p className="text-gray-300 text-sm max-w-lg mx-auto">
            Have a project in mind or want to collaborate on stories and digital experiences? Get in touch today.
          </p>
          
          {/* Action Buttons for Direct Email & Call */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a 
              href="mailto:Obbayipeter050@gmail.com" 
              className="w-full sm:w-auto px-6 py-3 font-bold rounded-lg shadow transition flex items-center justify-center gap-2 hover:opacity-90 text-sm"
              style={{ backgroundColor: '#D4AF37', color: '#0B0B0B' }}
            >
              ✉️ Email: Obbayipeter050@gmail.com
            </a>
            
            <a 
              href="tel:0707537823" 
              className="w-full sm:w-auto px-6 py-3 border border-amber-500/40 text-white font-semibold rounded-lg shadow-sm transition hover:bg-zinc-800 flex items-center justify-center gap-2 text-sm"
              style={{ backgroundColor: '#0B0B0B' }}
            >
              📞 Call: 0707 537823
            </a>
          </div>

          <p className="text-xs text-gray-500 pt-8">
            © {new Date().getFullYear()} Peter Ken Obbayi. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}