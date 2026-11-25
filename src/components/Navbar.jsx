import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBolt } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  const menuItems = ["Home", "About", "Skills", "Projects", "Achievements", "Contact"];

  // Handle window resizing safely for server-side / client hybrid builds
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 991) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogoClick = () => {
    window.location.href = window.location.origin + window.location.pathname;
  };

  const handleScrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(id.toLowerCase());
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
    }
  };

  const isMobile = windowWidth <= 991;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: 99999,
          display: "flex",
          justifyContent: "center",
          background: "rgba(5, 5, 16, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(147, 51, 234, 0.15)",
          padding: isMobile ? "0 16px" : "0 30px",
          height: isMobile ? "70px" : "90px",
          transition: "height 0.3s ease, padding 0.3s ease",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo Brand Frame */}
          <div
            onClick={handleLogoClick}
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? "8px" : "14px",
              flexShrink: 0,
              cursor: "pointer",
            }}
          >
            <svg width={isMobile ? "32" : "40"} height={isMobile ? "32" : "40"} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="none" stroke="#a855f7" strokeWidth="6" />
              <path d="M30 35 H70 M50 35 V70 M45 50 H65" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
            </svg>

            <span
              style={{
                color: "#ffffff",
                fontWeight: "800",
                fontSize: isMobile ? "1.05rem" : "1.25rem",
                letterSpacing: "1.5px",
                whiteSpace: "nowrap",
              }}
            >
              PRASANNASAI
            </span>
          </div>

          {/* Desktop Central Navigation Links */}
          {!isMobile && (
            <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
              {menuItems.map((item) => {
                const isActive = activeTab === item;
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToSection(item);
                    }}
                    onMouseEnter={() => setHoveredTab(item)}
                    onMouseLeave={() => setHoveredTab(null)}
                    style={{
                      position: "relative",
                      color: isActive ? "#a855f7" : hoveredTab === item ? "#ffffff" : "#94a3b8",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      transition: "color 0.3s ease",
                      padding: "10px 0",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        style={{
                          position: "absolute",
                          bottom: "-4px",
                          left: "0",
                          right: "0",
                          height: "2px",
                          background: "linear-gradient(90deg, transparent, #a855f7, transparent)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: "#c084fc",
                            boxShadow: "0 0 12px #a855f7, 0 0 20px #a855f7",
                          }}
                        />
                      </motion.div>
                    )}
                  </a>
                );
              })}
            </div>
          )}

          {/* Desktop Action Right-side button Component */}
          {!isMobile && (
            <motion.button
              onClick={() => handleScrollToSection("Contact")}
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              style={{
                border: "1px solid #7c3aed",
                borderRadius: "24px",
                padding: "12px 28px",
                background: "rgba(15, 12, 38, 0.5)",
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "0.95rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexShrink: 0,
                transition: "border-color 0.3s ease",
              }}
            >
              Hire Me
              <FaBolt style={{ color: "#a855f7" }} />
            </motion.button>
          )}

          {/* Mobile Overlay Menu Button Toggle */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "1.8rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                padding: "4px",
                zIndex: 100000,
              }}
            >
              {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          )}
        </div>
      </motion.nav>

      {/* Mobile Sidebar Navigation Overlay Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0.05, duration: 0.4 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "280px",
              background: "rgba(6, 4, 21, 0.96)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              borderLeft: "1px solid rgba(147, 51, 234, 0.2)",
              zIndex: 99998,
              display: "flex",
              flexDirection: "column",
              padding: "100px 24px 40px 24px",
              boxShadow: "-10px 0 30px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                flexGrow: 1,
              }}
            >
              {menuItems.map((item) => {
                const isActive = activeTab === item;
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollToSection(item);
                    }}
                    style={{
                      color: isActive ? "#a855f7" : "#94a3b8",
                      textDecoration: "none",
                      fontSize: "1.15rem",
                      fontWeight: "600",
                      padding: "8px 0",
                      display: "block",
                      borderBottom: isActive ? "1px solid rgba(168, 85, 247, 0.3)" : "1px solid transparent",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item}
                  </a>
                );
              })}
            </div>

            {/* Mobile Footer Action Area Inside Overlay */}
            <motion.button
              onClick={() => handleScrollToSection("Contact")}
              whileTap={{ scale: 0.95 }}
              style={{
                border: "1px solid #7c3aed",
                borderRadius: "14px",
                padding: "14px",
                background: "linear-gradient(90deg, #7c3aed, #2563eb)",
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginTop: "auto",
                width: "100%",
              }}
            >
              Hire Me
              <FaBolt style={{ color: "#ffffff" }} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}