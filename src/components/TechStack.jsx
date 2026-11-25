
import { motion } from "framer-motion";

import {
  FaCode, FaPalette, FaDatabase, FaPython, FaReact,
  FaHtml5, FaCss3Alt, FaJs, FaServer, FaCloud,
  FaGithub, FaChartLine, FaBrain, FaImage, FaVideo,
  FaFileExcel, FaFileWord, FaFilePowerpoint, FaGlobe,
FaCogs, FaTable, FaProjectDiagram, FaCut, FaPuzzlePiece,
} from "react-icons/fa";

export default function TechStack() {
  const categories = [
    {
      title: "Web Development",
      skills: [
        { name: "HTML", Icon: FaHtml5, color: "#e34f26" },
        { name: "CSS", Icon: FaCss3Alt, color: "#1572b6" },
        { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
        { name: "React", Icon: FaReact, color: "#61dafb" },
        { name: "FastAPI", Icon: FaCode, color: "#009688" },
        { name: "Django", Icon: FaCogs, color: "#44b78b" },
      ],
    },
    
{
  title: "Python & Data",
  skills: [
    { name: "Python", Icon: FaPython, color: "#3776ab" },
    { name: "NumPy", Icon: FaTable, color: "#4dabcf" },
    { name: "Pandas", Icon: FaTable, color: "#e5e7eb" },
    { name: "Matplotlib", Icon: FaChartLine, color: "#ffffff" },
    { name: "Data Visualization", Icon: FaChartLine, color: "#22c55e" },
  ],
},

    {
      title: "Databases & Cloud",
      skills: [
        { name: "MySQL", Icon: FaDatabase, color: "#4479a1" },
        { name: "MongoDB (Basic)", Icon: FaDatabase, color: "#47a248" },
        { name: "Cloudinary", Icon: FaCloud, color: "#60a5fa" },
        { name: "Netlify", Icon: FaGlobe, color: "#00c7b7" },
        { name: "GitHub", Icon: FaGithub, color: "#ffffff" },
      ],
    },
    {
      title: "Deployment & Hosting",
      skills: [
        { name: "Cloud Deployment", Icon: FaCloud, color: "#60a5fa" },
        { name: "Web Servers", Icon: FaServer, color: "#a855f7" },
      ],
    },
    {
      title: "Data & Visualization",
      skills: [
        { name: "Data Visualization", Icon: FaChartLine, color: "#22c55e" },
        { name: "Power BI", Icon: FaProjectDiagram, color: "#f2c811" },
      ],
    },
    {
      title: "Design & Editing",
      skills: [
        { name: "Adobe Photoshop", Icon: FaImage, color: "#31a8ff" },
        { name: "Adobe Premiere Pro", Icon: FaVideo, color: "#9999ff" },
        { name: "CapCut", Icon: FaCut, color: "#ffffff" },
      ],
    },
    {
      title: "Office Applications",
      skills: [
        { name: "MS Excel", Icon: FaFileExcel, color: "#217346" },
        { name: "MS Word", Icon: FaFileWord, color: "#2b579a" },
        { name: "MS PowerPoint", Icon: FaFilePowerpoint, color: "#d24726" },
      ],
    },
    {
      title: "Aptitude & Reasoning",
      skills: [
        { name: "Aptitude", Icon: FaBrain, color: "#a855f7" },
        { name: "Logical Reasoning", Icon: FaPuzzlePiece, color: "#60a5fa" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        width: "90%",
        maxWidth: "1400px",
        margin: "80px auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(147, 51, 234, 0.15)",
          background: "rgba(5, 4, 18, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              color: "#ffffff",
              fontSize: "1.4rem",
              fontWeight: "700",
              margin: 0,
              letterSpacing: "1px",
            }}
          >
            <span style={{ color: "#a855f7" }}>—</span> MY TECH STACK
          </h2>

          <span style={{ color: "#64748b", fontSize: "0.85rem" }}>
            Always learning new technologies ✨
          </span>
        </div>

        {categories.map((category) => (
          <div key={category.title} style={{ marginBottom: "30px" }}>
            <h3
              style={{
                color: "#a855f7",
                fontSize: "1rem",
                marginBottom: "16px",
              }}
            >
              {category.title}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "14px",
              }}
            >
              {category.skills.map(({ name, Icon, color }) => (
                <motion.div
                  key={name}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(168, 85, 247, 0.5)",
                    boxShadow: "0 8px 25px rgba(124, 58, 237, 0.15)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    minHeight: "105px",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.05)",
                    background: "rgba(255,255,255,0.02)",
                    padding: "18px 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    textAlign: "center",
                    color: "#94a3b8",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    transition: "0.3s",
                  }}
                >
                  <Icon size={30} color={color} />
                  <span>{name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
