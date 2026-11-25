
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/prasannasaiii/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/PRASANNASAI7",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/prasannasai.chowdary/",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:t.prasannasai.7@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer
      style={{
        marginTop: "120px",
        padding: "80px 20px 40px 20px",
        borderTop: "1px solid rgba(147, 51, 234, 0.15)",
        background:
          "linear-gradient(to top, rgba(7, 5, 22, 0.8), transparent)",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: "900",
            marginBottom: "16px",
            color: "#ffffff",
            letterSpacing: "-1px",
          }}
        >
          Let's Build Something{" "}
          <span style={{ color: "#a855f7" }}>Amazing</span>
        </h2>

        <p
          style={{
            color: "#94a3b8",
            maxWidth: "600px",
            margin: "0 auto 40px auto",
            lineHeight: "1.7",
            fontSize: "1.05rem",
          }}
        >
          Open for internships, collaborations, and exciting
          Full-Stack Development opportunities.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "60px",
            flexWrap: "wrap",
          }}
        >
          {socialLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target={item.label === "Email" ? undefined : "_blank"}
              rel={
                item.label === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={item.label}
              whileHover={{
                y: -6,
                borderColor: "#a855f7",
                color: "#ffffff",
                boxShadow: "0 0 20px rgba(168,85,247,0.4)",
              }}
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.15rem",
                color: "#94a3b8",
                textDecoration: "none",
                transition: "border-color 0.3s, color 0.3s",
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(255,255,255,0.04)",
            marginBottom: "30px",
          }}
        />

        <p
          style={{
            color: "#64748b",
            fontSize: "0.85rem",
            fontWeight: "500",
            margin: 0,
            letterSpacing: "0.5px",
          }}
        >
          © {new Date().getFullYear()}{" "}
          <motion.a
            href="https://tripuraneniprasannasai.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              color: "#a855f7",
              textShadow: "0 0 10px rgba(168, 85, 247, 0.6)",
            }}
            style={{
              color: "#e2e8f0",
              textDecoration: "none",
              fontWeight: "700",
              transition: "color 0.2s ease",
            }}
          >
            Prasannasai
          </motion.a>{" "}
          • Built with React & Lenis ⚡
        </p>
      </div>
    </footer>
  );
}
    