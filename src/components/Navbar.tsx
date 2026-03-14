"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-6"
    >
      {/* Updated the background to be pure white glass with a soft pink border 
        and a delicate rose-tinted shadow.
      */}
      <div className="flex items-center justify-between w-full max-w-2xl px-6 py-3 bg-white/60 backdrop-blur-md border border-[#ffb3c6]/40 rounded-full shadow-[0_8px_30px_rgb(255,179,198,0.3)]">
        
        {/* Logo - Now uses your deep maroon foreground and vibrant rose accent */}
        <span className="text-xl font-bold tracking-tighter text-foreground">
          JM<span className="text-accent">.</span>
        </span>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-foreground/70">
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:your@email.com" className="text-foreground/70 hover:text-accent transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;