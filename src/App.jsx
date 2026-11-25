import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaWhatsapp, FaTimes, FaPaperPlane } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ParticlesBackground from "./components/ParticlesBackground";
import ScrollAnimate from "./components/ScrollAnimate";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State tracking variables for the pre-WhatsApp lead generation form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Monitor window scroll depth to toggle the visibility of the scroll-to-top tracker
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle Input Changes smoothly
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submission Handler: Compiles details and opens the native WhatsApp link API window
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Constructing a beautifully structured layout string for the target WhatsApp chat window box
    const templateMessage = 
      `Hello Prasannasai,\n\n` +
      `Here are my contact details:\n` +
      `👤 Name: ${formData.name}\n` +
      `✉️ Email: ${formData.email}\n` +
      `📞 Phone: ${formData.phone}\n\n` +
      `💬 Message:\n${formData.message}`;

    // Safely encode text strings into standard valid URI web values
    const encodedMessage = encodeURIComponent(templateMessage);
    
    // Concatenate your specific target mobile number parameter line
    const whatsAppUrl = `https://wa.me/918309419511?text=${encodedMessage}`;

    // Execute redirection window route pathing cleanly
    window.open(whatsAppUrl, "_blank");

    // Close Modal and clear inputs
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top,#09091f,#02030d)",
        minHeight: "100vh",
        overflowX: "hidden",
        color: "white",
        position: "relative",
      }}
    >
      <CustomCursor />
      <ParticlesBackground />

      <Navbar />

      <ScrollAnimate delay={0.1}>
        <Hero />
      </ScrollAnimate>

      <ScrollAnimate>
        <Stats />
      </ScrollAnimate>

      <ScrollAnimate>
        <About />
      </ScrollAnimate>

      <ScrollAnimate>
        <TechStack />
      </ScrollAnimate>

      <ScrollAnimate>
        <Projects />
      </ScrollAnimate>

      <ScrollAnimate>
        <Achievements />
      </ScrollAnimate>

      <ScrollAnimate>
        <Contact />
      </ScrollAnimate>

      <Footer />

      {/* FLOATING ACTION UTILITY ELEMENT CONTAINER */}
      <div
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          zIndex: 9999, // Perfect structural layer index right under the Custom Cursor framework
        }}
      >
        {/* Clickable WhatsApp Cyber Action Node (Now triggers localized state window overlay toggle) */}
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px #25D366" }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "1.6rem",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(37, 211, 102, 0.3)",
          }}
        >
          <FaWhatsapp />
        </motion.button>

        {/* Scroll To Top Anchor - Mounts and Fades inside local viewport boundaries via AnimatePresence */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              whileHover={{ scale: 1.1, borderColor: "#c084fc", boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)" }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "rgba(10, 6, 30, 0.85)",
                border: "1px solid rgba(147, 51, 234, 0.4)",
                color: "#ffffff",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(8px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
                cursor: "pointer",
              }}
            >
              <FaArrowUp />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* WHATSAPP LEAD GENERATION MODAL DIALOG DISPLAY FRAMEWORK */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100001, // Positioned on top of everything, including the Navbar
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            {/* Backdrop Blur Overlay Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(3, 2, 12, 0.75)",
                backdropFilter: "blur(8px)",
              }}
            />

            {/* Main Cyber Glass Modal Box container card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "480px",
                background: "rgba(12, 9, 33, 0.9)",
                border: "1px solid rgba(147, 51, 234, 0.35)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(147, 51, 234, 0.15)",
                borderRadius: "24px",
                padding: "35px",
                zIndex: 1,
              }}
            >
              {/* Close Button Anchor Icon */}
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "transparent",
                  border: "none",
                  color: "#94a3b8",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#f43f5e")}
                onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
              >
                <FaTimes />
              </button>

              {/* Header Title Section */}
              <div style={{ marginBottom: "25px", textAlign: "center" }}>
                <h3 style={{ fontSize: "1.6rem", fontWeight: "800", margin: "0 0 8px 0", color: "#ffffff" }}>
                  Chat via <span style={{ color: "#25D366" }}>WhatsApp</span>
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#94a3b8", margin: 0 }}>
                  Please fill in your details to start the conversation box.
                </p>
              </div>

              {/* Data Capture Input Form Fields */}
              <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "600", color: "#c084fc", marginBottom: "6px", letterSpacing: "0.5px" }}>FULL NAME</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "600", color: "#c084fc", marginBottom: "6px", letterSpacing: "0.5px" }}>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="johndoe@example.com"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "600", color: "#c084fc", marginBottom: "6px", letterSpacing: "0.5px" }}>MOBILE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: "600", color: "#c084fc", marginBottom: "6px", letterSpacing: "0.5px" }}>YOUR MESSAGE</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message details here..."
                    style={{ ...inputStyle, resize: "none", fontFamily: "inherit" }}
                  />
                </div>

                {/* Cyber Redirection Action Trigger Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    padding: "14px 0",
                    borderRadius: "12px",
                    border: "none",
                    background: "linear-gradient(90deg, #25D366, #128C7E)",
                    color: "#ffffff",
                    fontWeight: "600",
                    fontSize: "1rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginTop: "8px",
                  }}
                >
                  Open WhatsApp Chat <FaPaperPlane style={{ fontSize: "0.85rem" }} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Inline Shared Style configuration parameters for cleaner layout maintenance blocks
const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  background: "rgba(255, 255, 255, 0.04)",
  color: "#ffffff",
  fontSize: "0.95rem",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s, background-color 0.2s",
};