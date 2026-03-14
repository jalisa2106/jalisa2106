"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6"
    >
      <motion.h1
        variants={item}
        className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-4"
      >
        Jalisa <span className="text-[var(--accent)]">Malik</span>
      </motion.h1>

      <motion.p
        variants={item}
        className="text-lg md:text-2xl text-foreground/70 max-w-2xl leading-relaxed mb-8"
      >
        Full-Stack Developer & Cybersecurity Enthusiast.{" "}
        <br className="hidden md:block" />
        Crafting secure, aesthetic digital experiences.
      </motion.p>

      <motion.div variants={item} className="flex gap-4">
        <a
          href="#work"
          className="px-8 py-3 bg-accent text-background font-semibold rounded-full hover:scale-105 transition-transform"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border border-foreground/20 text-foreground font-semibold rounded-full hover:bg-foreground/5 transition-colors"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.section>
  );
}
