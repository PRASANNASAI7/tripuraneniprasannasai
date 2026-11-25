import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaRocket,
  FaDownload,
} from "react-icons/fa";

import profilePic from "../assets/prasanna.png";

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToProjects = () => {
    const targetElement = document.getElementById("projects");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024 && windowWidth > 768;

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        paddingTop: isMobile ? "110px" : "140px",
        paddingBottom: isMobile ? "60px" : "100px",
        position: "relative",
        overflow: "hidden",
        background: "#03020c",
        color: "#ffffff",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Star Ambient Dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "90%",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: isMobile ? "40px" : "60px",
        }}
      >
        {/* LEFT TEXT CONTENT PANEL */}
        <motion.div
          initial={{ x: isMobile ? 0 : -60, y: isMobile ? 30 : 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            flex: "1 1 50%",
            textAlign: isMobile ? "center" : "left",
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "flex-start",
          }}
        >
          {/* Status Label Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 18px",
              borderRadius: "20px",
              border: "1px solid rgba(168, 85, 247, 0.4)",
              background: "rgba(147, 51, 234, 0.08)",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#c084fc",
                borderRadius: "50%",
                boxShadow: "0 0 8px #a855f7",
              }}
            />
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: "600",
                letterSpacing: "1.5px",
                color: "#e9d5ff",
              }}
            >
              B.TECH 3RD YEAR STUDENT
            </span>
          </div>

          {/* Main Typography Header Block */}
          <h1
            style={{
              fontSize: isMobile ? "2.5rem" : "clamp(3rem, 4.5vw, 5.2rem)",
              lineHeight: "1.1",
              fontWeight: "900",
              margin: "0 0 15px 0",
              letterSpacing: "-1px",
              color: "#ffffff",
            }}
          >
            TRIPURANENI
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #c084fc 30%, #3b82f6 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PRASANNASAI
            </span>
          </h1>

          {/* Developer Role Title Line */}
          <h2
            style={{
              fontSize: isMobile ? "1.2rem" : "clamp(1.2rem, 2vw, 1.6rem)",
              fontWeight: "700",
              margin: "0 0 20px 0",
              letterSpacing: "1px",
              color: "#ffffff",
            }}
          >
            FULL-STACK DEVELOPER{" "}
            <span
              style={{
                color: "#3b82f6",
                textShadow: "0 0 15px rgba(59,130,246,0.3)",
              }}
            >
              | PYTHON & WEB TECHNOLOGIES ⚡
            </span>
          </h2>

          {/* Animated Dynamic Code Text Line */}
          <div
            style={{
              fontSize: isMobile ? "1rem" : "clamp(1.1rem, 1.5vw, 1.4rem)",
              marginBottom: "20px",
              color: "#a5b4fc",
              fontFamily: "'Courier New', Courier, monospace",
              fontWeight: "600",
              borderLeft: isMobile ? "none" : "3px solid #7c3aed",
              paddingLeft: isMobile ? "0" : "12px",
              borderBottom: isMobile ? "2px solid #7c3aed" : "none",
              paddingBottom: isMobile ? "6px" : "0",
            }}
          >
            <TypeAnimation
              sequence={[
                "Building responsive web applications.",
                2000,
                "Developing projects with React and JavaScript.",
                2000,
                "Exploring Python, FastAPI and Django.",
                2000,
                "Turning ideas into useful digital experiences.",
                2000,
              ]}
              repeat={Infinity}
              speed={50}
            />
          </div>

          {/* Core Summary Copy */}
          <p
            style={{
              color: "#94a3b8",
              fontSize: isMobile ? "0.95rem" : "1.05rem",
              lineHeight: "1.7",
              maxWidth: "540px",
              margin: "0 0 35px 0",
            }}
          >
            Passionate about full-stack web development and Python technologies.
            I enjoy building responsive web applications, working with
            databases, and exploring tools such as React, FastAPI, and Django to
            create practical solutions to real-world problems.
          </p>

          {/* Action Call To Buttons */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
              marginBottom: "35px",
            }}
          >
            <motion.button
              onClick={handleScrollToProjects}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(147, 51, 234, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: isMobile ? "12px 24px" : "14px 28px",
                borderRadius: "14px",
                border: "none",
                background: "linear-gradient(90deg, #7c3aed, #2563eb)",
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "0.95rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              Explore My Work <FaRocket />
            </motion.button>

            <a
              href="/Resume.pdf"
              download="Prasannasai_Resume.pdf"
              style={{ textDecoration: "none" }}
            >
              <motion.button
                whileHover={{
                  scale: 1.03,
                  background: "rgba(255,255,255,0.08)",
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: isMobile ? "12px 24px" : "14px 28px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.02)",
                  color: "#ffffff",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
              >
                Download CV <FaDownload />
              </motion.button>
            </a>
          </div>

          {/* Brand Social Layout Section */}
          <div style={{ display: "flex", gap: "14px", marginBottom: "30px" }}>
            {[
              {
                Icon: FaLinkedinIn,
                url: "https://www.linkedin.com/in/prasannasaiii/",
              },
              { Icon: FaGithub, url: "https://github.com/PRASANNASAI7" },
              {
                Icon: FaInstagram,
                url: "https://www.instagram.com/prasannasai.chowdary?igsh=MXM1OG05ajNrdmNoZw==",
              },
              {
                Icon: FaEnvelope,
                url: "mailto:learnify.prasannasai@gmail.com",
              },
            ].map(({ Icon, url }, idx) => (
              <motion.a
                href={url}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -5,
                  borderColor: "#a855f7",
                  color: "#ffffff",
                  boxShadow: "0 0 15px rgba(168,85,247,0.3)",
                }}
                style={{
                  width: isMobile ? "42px" : "46px",
                  height: isMobile ? "42px" : "46px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#94a3b8",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  transition: "border-color 0.3s, color 0.3s",
                }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Job Availability Status Indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                position: "relative",
                display: "flex",
                height: "10px",
                width: "10px",
              }}
            >
              <span
                style={{
                  animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                  position: "absolute",
                  inlineSize: "100%",
                  blockSize: "100%",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  opacity: 0.75,
                }}
              ></span>
              <span
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  height: "10px",
                  width: "10px",
                  backgroundColor: "#22c55e",
                }}
              ></span>
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                color: "#22c55e",
                letterSpacing: "1px",
              }}
            >
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
        </motion.div>

        {/* RIGHT SIDE AVATAR DESIGN MATRIX */}
        <motion.div
          initial={{ x: isMobile ? 0 : 60, y: isMobile ? -30 : 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            flex: "1 1 50%",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: isMobile ? "290px" : isTablet ? "360px" : "460px",
              aspectRatio: "1/1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* 1. LAYER: Deep Neon Energy Smoke Layer Behind Image */}
            <div
              style={{
                position: "absolute",
                width: "110%",
                height: "110%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at center, rgba(147, 51, 234, 0.4) 10%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)",
                filter: "blur(25px)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            {/* Floating Live JSON Code Block Node */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: isMobile ? "-15px" : "-30px",
                left: isMobile ? "-10px" : "-20px",
                background: "rgba(10, 6, 30, 0.85)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                padding: isMobile ? "8px 12px" : "14px 18px",
                borderRadius: "12px",
                fontFamily: "monospace",
                fontSize: isMobile ? "0.6rem" : "0.75rem",
                whiteSpace: "pre",
                zIndex: 10,
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span style={{ color: "#f43f5e" }}>const</span>{" "}
              <span style={{ color: "#60a5fa" }}>dev</span> = {"{"}
              {"\n"} name:{" "}
              <span style={{ color: "#34d399" }}>"T.Prasanna Sai"</span>,{"\n"}{" "}
              role:{" "}
              <span style={{ color: "#34d399" }}>"Full-Stack Developer"</span>,
              {"\n"} skills:{" "}
              <span style={{ color: "#34d399" }}>"React, Python"</span>
              {"\n"}
              {"}"};
            </motion.div>

            {/* Floating Code Sign Component Tag */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 0.5,
              }}
              style={{
                position: "absolute",
                right: isMobile ? "-10px" : "-20px",
                top: "20%",
                width: isMobile ? "36px" : "48px",
                height: isMobile ? "36px" : "48px",
                borderRadius: "12px",
                background: "rgba(15, 12, 42, 0.8)",
                border: "1px solid rgba(59, 130, 246, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#60a5fa",
                fontSize: isMobile ? "0.9rem" : "1.2rem",
                fontWeight: "bold",
                zIndex: 10,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
              }}
            >
              &lt;/&gt;
            </motion.div>

            {/* 2. LAYER: Profile Picture Frame */}
            <div
              style={{
                position: "relative",
                width: "85%",
                height: "85%",
                borderRadius: "50%",
                border: "2px solid rgba(168, 85, 247, 0.8)",
                boxShadow:
                  "0 0 40px rgba(147, 51, 234, 0.6), inset 0 0 20px rgba(147, 51, 234, 0.4)",
                background: "radial-gradient(circle, #0e0a2b 0%, #03020c 100%)",
                overflow: "hidden",
                zIndex: 3,
              }}
            >
              <img
                src={profilePic}
                alt="Tripuraneni Prasannasai Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 4,
                }}
              />
            </div>

            {/* 3. LAYER: Concentric Cyber Hologram Rings */}
            {/* Inner Ring */}
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                width: "90%",
                height: "20%",
                borderRadius: "50%",
                border: "3px solid #a855f7",
                boxShadow: "0 0 35px #a855f7, inset 0 0 20px #a855f7",
                transform: "rotateX(75deg)",
                zIndex: 5,
                pointerEvents: "none",
              }}
            />
            {/* Outer Ring */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                width: "105%",
                height: "25%",
                borderRadius: "50%",
                border: "1px dashed rgba(59, 130, 246, 0.6)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                transform: "rotateX(75deg)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* CENTERED SCROLL DOWN MOUSE AXIS INDICATOR - Hidden on short viewports / small mobile devices */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              width: "22px",
              height: "36px",
              borderRadius: "12px",
              border: "2px solid #a855f7",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              paddingTop: "6px",
            }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: "easeInOut",
              }}
              style={{
                width: "4px",
                height: "8px",
                backgroundColor: "#c084fc",
                borderRadius: "2px",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "0.65rem",
              fontWeight: "700",
              letterSpacing: "1px",
              color: "#94a3b8",
            }}
          >
            SCROLL DOWN
          </span>
        </div>
      )}
    </section>
  );
}
