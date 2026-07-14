import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem 0",
      borderBottom: "1px solid #222",
      marginBottom: "2rem"
    }}>
      {/* Brand Name */}
      <div style={{ fontWeight: "bold", fontSize: "1.1rem", letterSpacing: "2px", color: "#fff" }}>
        PETER KEN OBBAYI
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#fff", fontWeight: "500", fontSize: "0.95rem" }}>Home</Link>
        <Link href="#about" style={{ textDecoration: "none", color: "#aaa", fontWeight: "500", fontSize: "0.95rem" }}>About</Link>
        <Link href="#services" style={{ textDecoration: "none", color: "#aaa", fontWeight: "500", fontSize: "0.95rem" }}>Services</Link>
        <Link href="#portfolio" style={{ textDecoration: "none", color: "#aaa", fontWeight: "500", fontSize: "0.95rem" }}>Portfolio</Link>
      </div>
    </nav>
  );
}