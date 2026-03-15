"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // MAGIC FIX: once: false allows it to close when scrolling away.
      // margin: "-35% 0px" means it WAITS until the section is safely in the middle of your screen to open.
      viewport={{ once: false, margin: "-35% 0px -35% 0px" }} 
      className="relative w-full py-10"
    >
      {/* Left Ethereal Petal Curtain */}
      <motion.div
        variants={{
          // Scale 1.1 ensures the petals overlap in the middle completely when closed
          hidden: { x: "0%", y: 0, opacity: 1, rotate: 0, scale: 1.1 },
          // Swings outwards to the left, shrinking and fading
          visible: { x: "-100%", y: -50, opacity: 0, rotate: -25, scale: 0.8 } 
        }}
        // easeInOut gives it that lingering, majestic sweep
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 left-[-5%] w-[60%] md:w-[50%] h-[110%] bg-gradient-to-br from-[#ffb3c6]/90 to-accent/40 backdrop-blur-xl z-50 pointer-events-none origin-bottom-left"
        style={{ 
          borderRadius: "50% 0 50% 50%", 
          boxShadow: "20px 0 60px rgba(216,17,89,0.3)" // Glows towards the center
        }}
      />

      {/* Right Ethereal Petal Curtain */}
      <motion.div
        variants={{
          hidden: { x: "0%", y: 0, opacity: 1, rotate: 0, scale: 1.1 },
          // Swings outwards to the right, shrinking and fading
          visible: { x: "100%", y: -50, opacity: 0, rotate: 25, scale: 0.8 } 
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 right-[-5%] w-[60%] md:w-[50%] h-[110%] bg-gradient-to-bl from-[#ffb3c6]/90 to-accent/40 backdrop-blur-xl z-50 pointer-events-none origin-bottom-right"
        style={{ 
          borderRadius: "0 50% 50% 50%", 
          boxShadow: "-20px 0 60px rgba(216,17,89,0.3)" 
        }}
      />

      {/* Content Reveal Layer */}
      <motion.div
        variants={{
          // When hidden, the content is heavily obscured so the petals grab all the attention
          hidden: { opacity: 0.2, filter: "blur(20px)", scale: 0.95 },
          // When the petals open, the content snaps into sharp focus
          visible: { opacity: 1, filter: "blur(0px)", scale: 1 }
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}