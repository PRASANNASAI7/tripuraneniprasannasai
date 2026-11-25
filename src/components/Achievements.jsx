
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaAward,
  FaLaptopCode,
  FaCertificate,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";

export default function Achievements() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const achievements = [
    {
      icon: <FaGraduationCap />,
      title: "B.Tech Education",
      desc: "Currently pursuing B.Tech at Usha Rama College of Engineering, continuing to develop my technical and problem-solving skills.",
    },
    {
      icon: <FaBriefcase />,
      title: "Web Development Internship",
      desc: "Successfully completed a 6-month Web Development internship and gained practical exposure to web development.",
    },
    {
      icon: <FaAward />,
      title: "NPTEL Certifications",
      desc: "Completed NPTEL courses in Introduction to Industrial Internet of Things (IIoT), Privacy and Security in Online Social Media (PSOSM), and Cyber Security and Privacy.",
    },
    {
      icon: <FaCertificate />,
      title: "Technical Certifications",
      desc: "Earned completion certificates in Web Development, CSS Bootcamp, and Diploma in Artificial Intelligence and Machine Learning (AIML).",
    },
    {
      icon: <FaTrophy />,
      title: "Smart India Hackathon",
      desc: "Participated in the Smart India Hackathon (SIH), gaining experience in collaborative problem-solving and innovation.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Diploma Achievement",
      desc: "Successfully completed my Diploma with 69.91% and zero backlogs, building a strong foundation for further technical learning.",
    },
  ];

  return (
    <section
      id="achievements"
      style={{
        width: "90%",
        maxWidth: "1450px",
        margin: isMobile ? "50px auto" : "90px auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? "2rem" : "3rem",
            marginBottom: "15px",
            fontWeight: "800",
            color: "#ffffff",
            margin: 0,
          }}
        >
          My <span style={{ color: "#8b5cf6" }}>Achievements</span>
        </h2>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: isMobile ? "35px" : "50px",
            fontSize: isMobile ? "0.95rem" : "1.05rem",
            marginTop: "10px",
          }}
        >
          My academic journey, professional experience, certifications,
          and milestones in technology.
        </p>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "repeat(auto-fit, minmax(250px, 1fr))"
            : "repeat(auto-fit, minmax(320px, 1fr))",
          gap: isMobile ? "16px" : "25px",
        }}
      >
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
            whileTap={isMobile ? { scale: 0.98 } : {}}
            style={{
              padding: isMobile ? "24px" : "35px",
              borderRadius: isMobile ? "20px" : "30px",
              background: "rgba(10,10,30,.55)",
              border: "1px solid rgba(168,85,247,.18)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 0 40px rgba(139,92,246,.08)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "2rem" : "2.5rem",
                color: "#8b5cf6",
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                fontSize: isMobile ? "1.25rem" : "1.5rem",
                margin: 0,
                color: "#ffffff",
                fontWeight: "700",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.6",
                fontSize: isMobile ? "0.88rem" : "0.95rem",
                margin: 0,
              }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
    