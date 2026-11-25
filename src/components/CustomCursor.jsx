import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hasMouse, setHasMouse] = useState(false);

  // High-performance hardware accelerated motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Added smooth spring physics for the ambient outer aura ring
  const auraX = useSpring(cursorX, { damping: 30, stiffness: 250, mass: 0.5 });
  const auraY = useSpring(cursorY, { damping: 30, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Media query check to see if the device has a pointer/mouse system
    const mouseQuery = window.matchMedia("(pointer: fine)");
    
    const checkDevice = () => {
      setHasMouse(mouseQuery.matches);
    };

    // Initial check
    checkDevice();
    
    // Listen for system configuration changes
    mouseQuery.addEventListener("change", checkDevice);

    if (!mouseQuery.matches) return;

    // Apply global body cursor hiding ONLY if a real mouse exists
    document.body.style.cursor = "none";

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      mouseQuery.removeEventListener("change", checkDevice);
      document.body.style.cursor = "default";
    };
  }, [cursorX, cursorY]);

  // Completely skip rendering on Phones/Tablets to keep site fully functional
  if (!hasMouse) return null;

  return (
    <>
      {/* GLOBAL CSS OVERRIDE: 
          Only injected into the DOM when a fine pointer device (mouse) is present 
      */}
      <style>{`
        html, body, body *, a, button, select, [role="button"], svg {
          cursor: none !important;
        }
        
        /* Restores native platform fallback caret selections for inputs */
        input, textarea, [contenteditable="true"] {
          cursor: text !important;
        }
      `}</style>

      {/* Main Blue/Purple Gradient Pointer Element */}
      <motion.div
        style={{
          position: "fixed",
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #8b5cf6, #2563eb)",
          pointerEvents: "none",
          zIndex: 100005,
          boxShadow: "0 0 25px rgba(139,92,246,0.9), 0 0 10px rgba(37,99,235,0.6)",
        }}
      />

      {/* Ambient Outer Blue Light Ring (Uses Spring Physics for smooth trailing) */}
      <motion.div
        style={{
          position: "fixed",
          x: auraX,
          y: auraY,
          translateX: "-50%",
          translateY: "-50%",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.18)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 100004,
        }}
      />
    </>
  );
}