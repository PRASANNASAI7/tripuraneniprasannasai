
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCompass,
} from "react-icons/fa";

export default function Contact() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 992;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const targetAddress =
    "4-116,Near Library,Angaluru,Gudlavalleru Mandal,Krishna District,Ap,521330";

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    targetAddress
  )}`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      alert("Please fill out all the fields before sending your message!");
      return;
    }

    const mailSubject = encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    );

    const mailBody = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n\n` +
      `Message:\n${message}`
    );

    window.location.href =
      `mailto:t.prasannasai.7@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  const contactItems = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "t.prasannasai.7@gmail.com",
      link: "mailto:t.prasannasai.7@gmail.com",
      isLocation: false,
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 8309419511",
      link: "tel:+918309419511",
      isLocation: false,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: targetAddress,
      isLocation: true,
    },
  ];

  return (
    <section
      id="contact"
      style={{
        width: isMobile ? "95%" : "92%",
        maxWidth: "1450px",
        margin: isMobile ? "50px auto" : "100px auto",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          borderRadius: isMobile ? "24px" : "40px",
          background: "rgba(10,10,30,.55)",
          border: "1px solid rgba(168,85,247,.18)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: isMobile ? "30px 16px" : isTablet ? "40px" : "60px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-100px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(139,92,246,.15)",
            filter: "blur(120px)",
            pointerEvents: "none",
          }}
        />

        <h2
          style={{
            fontSize: isMobile ? "2rem" : "3rem",
            textAlign: "center",
            margin: 0,
            fontWeight: "800",
            color: "#ffffff",
          }}
        >
          Let's <span style={{ color: "#8b5cf6" }}>Connect</span>
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: isMobile ? "35px" : "50px",
            fontSize: isMobile ? "0.95rem" : "1.05rem",
            lineHeight: "1.7",
          }}
        >
          Have a project idea, opportunity, or question?
          I'd love to hear from you. Let's build something amazing! 🚀
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: isTablet ? "column" : "row",
            gap: isMobile ? "24px" : "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flex: "1",
              width: "100%",
            }}
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={isMobile ? {} : { scale: 1.02, y: -4 }}
                whileTap={isMobile ? { scale: 0.98 } : {}}
                style={{
                  padding: isMobile ? "16px" : "25px",
                  borderRadius: isMobile ? "20px" : "28px",
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(255,255,255,.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: isMobile ? "14px" : "20px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: isMobile ? "48px" : "65px",
                    height: isMobile ? "48px" : "65px",
                    borderRadius: isMobile ? "14px" : "20px",
                    background: "rgba(139,92,246,.12)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: isMobile ? "1.1rem" : "1.5rem",
                    color: "#8b5cf6",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ width: "100%", overflow: "hidden" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: isMobile ? "1rem" : "1.15rem",
                        color: "#ffffff",
                      }}
                    >
                      {item.title}
                    </h3>

                    {item.isLocation ? (
                      <motion.a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={
                          isMobile
                            ? {}
                            : { scale: 1.05, color: "#3b82f6" }
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          background: "rgba(139, 92, 246, 0.15)",
                          padding: "4px 10px",
                          borderRadius: "8px",
                          color: "#8b5cf6",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          textDecoration: "none",
                        }}
                      >
                        <FaCompass /> Map
                      </motion.a>
                    ) : null}
                  </div>

                  {item.link ? (
                    <a
                      href={item.link}
                      style={{
                        display: "block",
                        color: "#94a3b8",
                        marginTop: "6px",
                        lineHeight: "1.5",
                        fontSize: isMobile ? "0.85rem" : "0.95rem",
                        wordBreak: "break-word",
                        textDecoration: "none",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        color: "#94a3b8",
                        margin: 0,
                        paddingTop: "4px",
                        lineHeight: "1.5",
                        fontSize: isMobile ? "0.85rem" : "0.95rem",
                        wordBreak: "break-word",
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form
            onSubmit={handleFormSubmit}
            whileHover={isMobile ? {} : { scale: 1.005 }}
            style={{
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: isMobile ? "20px" : "30px",
              padding: isMobile ? "20px" : "35px",
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "16px" : "22px",
              flex: "1.2",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              aria-label="Full Name"
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              aria-label="Email Address"
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              aria-label="Mobile Number"
              style={inputStyle}
            />

            <textarea
              name="message"
              required
              rows={isMobile ? 4 : 6}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message..."
              aria-label="Your Message"
              style={{
                ...inputStyle,
                resize: "none",
              }}
            />

            <motion.button
              whileHover={isMobile ? {} : { scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              style={{
                border: "none",
                cursor: "pointer",
                padding: isMobile ? "15px 22px" : "18px 28px",
                borderRadius: "16px",
                background: "linear-gradient(90deg,#9333ea,#2563eb)",
                color: "white",
                fontWeight: "700",
                fontSize: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 0 30px rgba(139,92,246,.3)",
              }}
            >
              Send Message
              <FaPaperPlane style={{ fontSize: "0.9rem" }} />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px 20px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,.08)",
  background: "rgba(255,255,255,.03)",
  color: "white",
  outline: "none",
  fontSize: "0.95rem",
  boxSizing: "border-box",
  cursor: "text",
  transition: "border-color 0.2s",
};
    