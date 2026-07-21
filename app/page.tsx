import Image from "next/image";

// Define the project structure
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

// Grouped skills
const skillCategories = [
  {
    title: "Frontend & Web",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Media & Journalism",
    skills: ["Investigative Reporting", "Documentary Production", "Broadcast Journalism", "Copywriting"],
  },
  {
    title: "Tools & Software",
    skills: ["DaVinci Resolve", "Adobe Premiere Pro", "FL Studio", "Git", "GitHub", "VS Code"],
  },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      
      {/* Header / Navbar */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <img 
            src={`${basePath}/peter-logo.png`} 
            alt="Peter Ken Logo" 
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-lg tracking-wider uppercase hidden sm:inline">
            Peter Ken
          </span>
        </div>
        <nav className="flex gap-6 text-sm font-semibold">
          <a href="#about" className="hover:text-amber-500 transition">About</a>
          <a href="#skills" className="hover:text-amber-500 transition">Skills</a>
          <a href="#projects" className="hover:text-amber-500 transition">Projects</a>
          <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12" id="about">
        
        {/* Text Area */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Peter Ken Obbayi
          </h1>
          <p className="text-lg md:text-xl font-medium text-amber-600 dark:text-amber-400">
            Journalist • Videographer • Web Developer • Media Creator
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg text-base md:text-lg leading-relaxed">
            Creating cinematic stories and modern digital experiences. Bridging the gap between powerful journalism, video creation, and modern web applications.
          </p>
          
          {/* Hero Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow transition duration-200"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold rounded-lg shadow-sm transition duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-800">
            <img
              src={`${basePath}/peter-profile.jpg`}
              alt="Peter Ken Obbayi Profile Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800" id="skills">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Core Skills & Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A comprehensive overview of my creative and technical capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-amber-500">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                    <span className="text-amber-500">✓</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto border-t border-gray-200 dark:border-gray-800" id="projects">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Featured Projects & Work</h2>
          <p className="text-gray-600 dark:text-gray-400">
            A showcase of journalism, video editing, and digital media initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-800 flex flex-col justify-between hover:shadow-md transition"
            >
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-md text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold py-2.5 rounded-lg transition"
                >
                  View Document / Link 🔗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section & Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 bg-white dark:bg-gray-800 text-center" id="contact">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl font-bold">Let's Work Together</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Have a project in mind or want to collaborate on stories and digital experiences?
          </p>
          <div className="pt-2">
            <a 
              href="mailto:contact@peterken.com" 
              className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow transition"
            >
              Get In Touch
            </a>
          </div>
          <p className="text-xs text-gray-400 pt-8">
            © {new Date().getFullYear()} Peter Ken Obbayi. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}