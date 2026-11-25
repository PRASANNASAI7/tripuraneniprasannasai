
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const projects = [
    {
      title: "Personal Portfolio Website",
      desc: "A responsive personal portfolio built to showcase my skills, technical experience, achievements, and projects. It features interactive animations, a modern interface, and a contact section.",
      tech: ["React", "JavaScript", "CSS", "Framer Motion"],
      liveLink: null,
      gitLink: null,
    },
    {
      title: "Academic Materials Hub",
      desc: "A web-based platform designed for engineering students to access academic materials and notes. It also includes features such as timetable management, notifications, and organized learning resources.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
      ],
      liveLink: "https://urcenotex.netlify.app",
      gitLink: "https://github.com/PRASANNASAI7/urcenoteX",
    },
    {
      title: "Student Details Collector",
      desc: "A student registration system that collects student information through online forms. It uses a backend to process submissions, MongoDB to store data, Cloudinary for media uploads, and EmailJS for confirmation messages.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "EmailJS",
      ],
      liveLink: "https://urcenotexforms.netlify.app/forms.html",
      gitLink: "https://github.com/PRASANNASAI7/UrcenoteX-FormSystem",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        width: "90%",
        maxWidth: "1400px",
        margin: isMobile ? "60px auto" : "100px auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          marginBottom: isMobile ? "35px" : "50px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "2rem" : "2.5rem",
            fontWeight: "800",
            margin: "0 0 10px 0",
            color: "#ffffff",
          }}
        >
          Featured <span style={{ color: "#a855f7" }}>Projects</span>
        </h2>

        <p
          style={{
            color: "#64748b",
            margin: 0,
            fontSize: isMobile ? "0.95rem" : "1.05rem",
            lineHeight: "1.5",
          }}
        >
          A collection of practical projects showcasing my development
          skills and technical learning.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(350px, 1fr))",
          gap: isMobile ? "20px" : "30px",
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={isMobile ? {} : { y: -8 }}
            whileTap={isMobile ? { scale: 0.98 } : {}}
            style={{
              borderRadius: "24px",
              border: "1px solid rgba(147, 51, 234, 0.15)",
              background: "rgba(11, 9, 32, 0.5)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              padding: isMobile ? "24px" : "40px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "160px",
                height: "160px",
                background: "rgba(168, 85, 247, 0.08)",
                filter: "blur(60px)",
                top: "-40px",
                right: "-40px",
                pointerEvents: "none",
              }}
            />

            <div>
              <h3
                style={{
                  fontSize: isMobile ? "1.3rem" : "1.5rem",
                  fontWeight: "700",
                  margin: "0 0 16px 0",
                  color: "#ffffff",
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: "1.6",
                  fontSize: isMobile ? "0.88rem" : "0.95rem",
                  margin: "0 0 24px 0",
                }}
              >
                {project.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginBottom: "30px",
                }}
              >
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: "rgba(147, 51, 234, 0.1)",
                      border: "1px solid rgba(147, 51, 234, 0.2)",
                      color: "#c084fc",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      padding: "4px 12px",
                      borderRadius: "8px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {(project.liveLink || project.gitLink) && (
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                }}
              >
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)",
                    }}
                    style={{
                      flex: 1,
                      padding: "12px 16px",
                      borderRadius: "12px",
                      background: "linear-gradient(90deg, #7c3aed, #2563eb)",
                      color: "#ffffff",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </motion.a>
                )}

                {project.gitLink && (
                  <motion.a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    whileHover={{
                      scale: 1.03,
                      background: "rgba(255,255,255,0.08)",
                    }}
                    style={{
                      padding: "12px 18px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.15)",
                      background: "rgba(255,255,255,0.02)",
                      color: "#ffffff",
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <FaGithub size={16} />
                  </motion.a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
    