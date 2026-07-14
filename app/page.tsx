import Image from "next/image";import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#eaeaea", minHeight: "100vh", transition: "background-color 0.3s ease" }}>
      <main style={{ padding: "0 2rem 4rem 2rem", fontFamily: "sans-serif", maxWidth: "1100px", margin: "0 auto", scrollBehavior: "smooth" }}>
        <Navbar />
        
        {/* Hero Section */}
        <section style={{ padding: "5rem 0 4rem 0", display: "flex", alignItems: "center", justifyContent: "center", gap: "4rem", flexWrap: "wrap" }}>
          
          {/* Profile Photo Container */}
          <div style={{ 
            width: "300px", 
            height: "300px", 
            borderRadius: "50%", 
            overflow: "hidden", 
            border: "4px solid #222",
            position: "relative",
            flexShrink: 0
          }}>
            <Image 
              src="/peter-photo.jpg" 
              alt="Peter Ken Obbayi" 
              fill 
              style={{ objectFit: "cover" }} 
              priority
            />
          </div>

          {/* Hero Text */}
          <div style={{ textAlign: "left", maxWidth: "600px" }}>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "0.5rem", color: "#fff", fontWeight: "800", letterSpacing: "-1px", textTransform: "uppercase" }}>
              Peter Ken Obbayi
            </h1>
            <p style={{ fontSize: "1.15rem", color: "#aaa", marginBottom: "2rem", lineHeight: "1.6" }}>
              DIGITAL MEDIA SPECIALIST | JOURNALIST | CONTENT CREATOR
            </p>
            
            {/* Quick Contact Badges */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <span style={{ padding: "0.6rem 1.2rem", backgroundColor: "#161616", borderRadius: "30px", fontSize: "0.9rem", border: "1px solid #222" }}>
                📞 0707537823
              </span>
              <span style={{ padding: "0.6rem 1.2rem", backgroundColor: "#161616", borderRadius: "30px", fontSize: "0.9rem", border: "1px solid #222" }}>
                ✉️ Obbayipeter050@gmail.com
              </span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{ marginBottom: "5rem", scrollMarginTop: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "1.2rem", color: "#fff", letterSpacing: "0.5px" }}>About Me</h2>
          <p style={{ lineHeight: "1.7", color: "#aaa", fontSize: "1.05rem" }}>
            I am a passionate digital media professional, creative storyteller, and aspiring communications expert dedicated to transforming ideas into compelling visual and digital experiences. Currently pursuing a Bachelor of Arts in Journalism and Mass Communication at Kibabii University, I combine creativity, technology, and strategic thinking to help brands communicate effectively.
          </p>
          
          {/* Vision & Values Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", marginTop: "2.5rem" }}>
            <div style={{ padding: "1.5rem", backgroundColor: "#121212", borderTop: "3px solid #fff", borderRadius: "6px", border: "1px solid #1c1c1c" }}>
              <h4 style={{ margin: "0 0 0.7rem 0", color: "#fff", fontSize: "1.05rem" }}>🚀 Career Vision</h4>
              <p style={{ color: "#888", margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>To become one of Africa's leading digital media innovators, empowering organizations and communities through impactful storytelling and technology.</p>
            </div>
            <div style={{ padding: "1.5rem", backgroundColor: "#121212", borderTop: "3px solid #fff", borderRadius: "6px", border: "1px solid #1c1c1c" }}>
              <h4 style={{ margin: "0 0 0.7rem 0", color: "#fff", fontSize: "1.05rem" }}>💎 Core Values</h4>
              <p style={{ color: "#888", margin: 0, fontSize: "0.95rem", lineHeight: "1.6" }}>Integrity, creativity, professionalism, innovation, excellence, accountability, teamwork, and continuous learning.</p>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section id="services" style={{ marginBottom: "5rem", scrollMarginTop: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "1.5rem", color: "#fff", letterSpacing: "0.5px" }}>Core Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ padding: "1.75rem", backgroundColor: "#121212", border: "1px solid #1c1c1c", borderRadius: "8px" }}>
              <h3 style={{ color: "#fff", marginTop: 0, fontSize: "1.2rem" }}>📹 Media Production</h3>
              <p style={{ color: "#888", fontSize: "0.95rem", lineHeight: "1.5", margin: "0.5rem 0 0 0" }}>Corporate video production, videography, video editing, photography, livestreaming, and podcast production.</p>
            </div>
            <div style={{ padding: "1.75rem", backgroundColor: "#121212", border: "1px solid #1c1c1c", borderRadius: "8px" }}>
              <h3 style={{ color: "#fff", marginTop: 0, fontSize: "1.2rem" }}>📈 Digital Marketing</h3>
              <p style={{ color: "#888", fontSize: "0.95rem", lineHeight: "1.5", margin: "0.5rem 0 0 0" }}>Social media management, branding, YouTube strategy, search engine optimization, and creative consulting.</p>
            </div>
            <div style={{ padding: "1.75rem", backgroundColor: "#121212", border: "1px solid #1c1c1c", borderRadius: "8px" }}>
              <h3 style={{ color: "#fff", marginTop: 0, fontSize: "1.2rem" }}>🎵 Audio Production</h3>
              <p style={{ color: "#888", fontSize: "0.95rem", lineHeight: "1.5", margin: "0.5rem 0 0 0" }}>Professional music production and high-fidelity DJ mixing services.</p>
            </div>
          </div>
        </section>

        {/* Featured Media Showcase Section */}
        <section id="portfolio" style={{ marginBottom: "5rem", scrollMarginTop: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "1.5rem", color: "#fff", letterSpacing: "0.5px" }}>Featured Work</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
            
            {/* Video Showcase Item */}
            <div style={{ border: "1px solid #1c1c1c", borderRadius: "8px", overflow: "hidden", backgroundColor: "#121212" }}>
              <div style={{ width: "100%", height: "200px", backgroundColor: "#1a1a1a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#666" }}>
                <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎬</span>
                <span style={{ fontSize: "0.85rem", color: "#555" }}>Ready for YouTube Embed / Video Link</span>
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "#fff" }}>Video & Cinematography Reel</h4>
                <p style={{ color: "#888", fontSize: "0.85rem", margin: 0, lineHeight: "1.5" }}>Demonstrating camera movement, crisp sequencing, and post-production coloring workflow.</p>
              </div>
            </div>

            {/* Audio Showcase Item */}
            <div style={{ border: "1px solid #1c1c1c", borderRadius: "8px", overflow: "hidden", backgroundColor: "#121212" }}>
              <div style={{ width: "100%", height: "200px", backgroundColor: "#1a1a1a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#666" }}>
                <span style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎹</span>
                <span style={{ fontSize: "0.85rem", color: "#555" }}>Ready for Soundcloud / Audio Player Link</span>
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h4 style={{ margin: "0 0 0.5rem 0", color: "#fff" }}>Music Engineering & Production</h4>
                <p style={{ color: "#888", fontSize: "0.85rem", margin: 0, lineHeight: "1.5" }}>Synthesizer arrangement, vocal mastering, and beats produced using professional audio software.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Technical Toolkit & Hobbies Grid */}
        <section style={{ borderTop: "1px solid #1c1c1c", paddingTop: "4rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
            <div>
              <h2 style={{ fontSize: "1.6rem", marginBottom: "1.2rem", color: "#fff" }}>Technical Toolkit</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                {["Adobe Premiere Pro", "DaVinci Resolve", "FL Studio", "Canva", "OBS Studio", "AI Tools"].map((tool) => (
                  <span key={tool} style={{ padding: "0.5rem 1rem", backgroundColor: "#121212", border: "1px solid #222", color: "#fff", borderRadius: "20px", fontSize: "0.9rem", fontWeight: "500" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 style={{ fontSize: "1.6rem", marginBottom: "1.2rem", color: "#fff" }}>Hobbies & Interests</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {["Music production", "DJ mixing", "Drumming", "Photography", "Videography", "Storytelling", "AI", "Entrepreneurship", "Church media ministry"].map((hobby) => (
                  <span key={hobby} style={{ padding: "0.4rem 0.8rem", backgroundColor: "#0f0f0f", border: "1px solid #222", borderRadius: "4px", fontSize: "0.85rem", color: "#888" }}>
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}