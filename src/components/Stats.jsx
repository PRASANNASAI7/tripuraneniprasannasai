
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCode,
  FaTrophy,
  FaLayerGroup,
  FaBullseye,
} from "react-icons/fa";

// Animated Counter Component
function Counter({ value, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  const numericString = value.replace(/[^0-9]/g, "");
  const targetNumber = parseInt(numericString, 10) || 0;
  const nonNumericSuffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrame;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / (duration * 1000),
        1
      );

      const easeOutQuad = progress * (2 - progress);

      setCount(Math.floor(easeOutQuad * targetNumber));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [targetNumber, duration, isInView]);

  return (
    <span ref={elementRef}>
      {count}
      {nonNumericSuffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: <FaCode />,
      number: "3+",
      text: "Projects Showcased",
    },
    {
      icon: <FaTrophy />,
      number: "3",
      text: "Years of Learning",
    },
    {
      icon: <FaLayerGroup />,
      number: "10+",
      text: "Technologies",
    },
    {
      icon: <FaBullseye />,
      number: "100%",
      text: "Dedication",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      style={{
        width: "90%",
        maxWidth: "1400px",
        margin: "60px auto",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(147, 51, 234, 0.2)",
          background: "rgba(10, 8, 28, 0.45)",
          backdropFilter: "blur(24px)",
          padding: "50px 30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          alignItems: "center",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
        }}
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{
              y: -8,
              backgroundColor: "rgba(147, 51, 234, 0.05)",
              boxShadow: "0 15px 30px rgba(147, 51, 234, 0.1)",
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "25px 20px",
              borderRadius: "16px",
              borderRight:
                i !== stats.length - 1
                  ? "1px solid rgba(147, 51, 234, 0.15)"
                  : "none",
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                filter: "drop-shadow(0 0 18px rgba(192,132,252,0.9))",
              }}
              transition={{ duration: 0.4 }}
              style={{
                fontSize: "2rem",
                color: "#c084fc",
                filter: "drop-shadow(0 0 10px rgba(168,85,247,0.5))",
                marginBottom: "16px",
              }}
            >
              {item.icon}
            </motion.div>

            <h2
              style={{
                fontSize: "3.2rem",
                fontWeight: "800",
                margin: "0 0 6px 0",
                color: "#ffffff",
                letterSpacing: "-1px",
              }}
            >
              <Counter value={item.number} duration={1.5} />
            </h2>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "0.95rem",
                fontWeight: "500",
                margin: 0,
              }}
            >
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
    