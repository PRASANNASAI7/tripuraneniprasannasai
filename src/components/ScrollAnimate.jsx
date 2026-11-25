import { motion } from "framer-motion";

export default function ScrollAnimate({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true,      // Ensures the animation only plays once while scrolling down
        amount: 0.15,    // Triggers when 15% of the element enters the screen
      }}
      transition={{
        duration: 0.8,   // Adjust this to change how "slowly" it fades in (e.g., 1.2 for slower)
        delay: delay,    // Optional stagger delay
        ease: [0.21, 0.47, 0.32, 0.98], // Custom cubic-bezier for premium smoothness
      }}
    >
      {children}
    </motion.div>
  );
}