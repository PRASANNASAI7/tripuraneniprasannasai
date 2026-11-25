
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaBolt,
  FaUser,
} from "react-icons/fa";

export default function About() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <section
      id="about"
      style={{
        width: "90%",
        maxWidth: "1400px",
        margin: isMobile ? "60px auto" : "100px auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* SECTION HEADER */}
      <div
        style={{
          marginBottom: isMobile ? "30px" : "50px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: "800",
            margin: "0 0 10px 0",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            gap: "12px",
          }}
        >
          <FaUser
            style={{
              color: "#a855f7",
              fontSize: isMobile ? "1.6rem" : "2rem",
            }}
          />
          About <span style={{ color: "#a855f7" }}>Me</span>
        </h2>

        <p
          style={{
            color: "#64748b",
            margin: 0,
            fontSize: isMobile ? "0.95rem" : "1.05rem",
          }}
        >
          My background, education, technical interests, and journey in technology.
        </p>
      </div>

      {/* MAIN GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {/* BIOGRAPHY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            gridColumn: isMobile ? "span 1" : "span 2",
            borderRadius: "24px",
            border: "1px solid rgba(147, 51, 234, 0.15)",
            background: "rgba(11, 9, 32, 0.4)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: isMobile ? "24px" : "40px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-80px",
              left: "-80px",
              width: "250px",
              height: "250px",
              background: "rgba(147, 51, 234, 0.1)",
              filter: "blur(70px)",
              pointerEvents: "none",
            }}
          />

          <p
            style={{
              color: "#c084fc",
              fontWeight: "700",
              fontSize: "0.8rem",
              letterSpacing: "2.5px",
              margin: "0 0 12px 0",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            BIOGRAPHY
          </p>

          <h3
            style={{
              fontSize: isMobile ? "1.8rem" : "2.2rem",
              fontWeight: "900",
              margin: "0 0 20px 0",
              color: "#ffffff",
              lineHeight: "1.2",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Hello, I'm{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #c084fc, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Prasannasai
            </span>
          </h3>

          <p
            style={{
              color: "#94a3b8",
              fontSize: isMobile ? "0.95rem" : "1.05rem",
              lineHeight: "1.8",
              margin: 0,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            I am a B.Tech 3rd Year student at Usha Rama College of
            Engineering, with a Diploma background in technology and
            69.91% academic achievement without backlogs. I am passionate
            about Full-Stack Development and Python technologies, with
            interests in building responsive web applications, developing
            backend systems, and working with databases. I enjoy exploring
            technologies like React, JavaScript, Python, FastAPI, Django,
            and data visualization while creating practical solutions
            through my projects.
          </p>
        </motion.div>

        {/* DEVELOPER VISUAL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(147, 51, 234, 0.25)",
            background:
              "linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(59, 130, 246, 0.03))",
            boxShadow: "inset 0 0 30px rgba(147, 51, 234, 0.15)",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: isMobile ? "200px" : "300px",
            position: "relative",
          }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: isMobile ? "4rem" : "5.5rem",
              fontWeight: "700",
              color: "#3b82f6",
              opacity: 0.85,
              filter: "drop-shadow(0 0 25px rgba(59,130,246,0.55))",
              letterSpacing: "-4px",
            }}
          >
            &lt;/&gt;
          </motion.div>

          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              width: "12px",
              height: "12px",
              borderTop: "2px solid #a855f7",
              borderLeft: "2px solid #a855f7",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "16px",
              width: "12px",
              height: "12px",
              borderBottom: "2px solid #a855f7",
              borderRight: "2px solid #a855f7",
            }}
          />
        </motion.div>
      </div>

      {/* PROFILE INFORMATION CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "18px",
          marginTop: "24px",
        }}
      >
        {[
          {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            value: "India",
          },
          {
            icon: <FaGraduationCap />,
            title: "Education",
            value: "B.Tech 3rd Year",
          },
          {
            icon: <FaCode />,
            title: "Primary Role",
            value: "Full-Stack Developer",
          },
          {
            icon: <FaBolt />,
            title: "Interests",
            value: "Python & Web Technologies",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={
              isMobile
                ? {}
                : {
                    y: -5,
                    borderColor: "rgba(147, 51, 234, 0.35)",
                    background: "rgba(255, 255, 255, 0.03)",
                  }
            }
            whileTap={isMobile ? { scale: 0.98 } : {}}
            style={{
              padding: "20px 24px",
              borderRadius: "16px",
              background: "rgba(255, 255, 255, 0.01)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              transition: "border-color 0.3s, background 0.3s",
            }}
          >
            <div
              style={{
                color: "#c084fc",
                fontSize: "1.2rem",
                background: "rgba(147, 51, 234, 0.1)",
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(147, 51, 234, 0.15)",
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "#64748b",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {item.title}
              </span>

              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  color: "#e2e8f0",
                }}
              >
                {item.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
