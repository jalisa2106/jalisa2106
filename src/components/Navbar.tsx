"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Grab all sections that have an ID
    const sections = document.querySelectorAll("section[id]");

    // Set up the observer to track which section is currently on screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // This triggers the active state when a section hits the middle 50% of the viewport
        rootMargin: "-50% 0px -50% 0px", 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Defined as an array to keep the rendering clean and dynamic
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-6"
    >
      <div className="flex items-center justify-between w-full max-w-2xl px-6 py-3 bg-white/60 backdrop-blur-md border border-[#ffb3c6]/40 rounded-full shadow-[0_8px_30px_rgb(255,179,198,0.3)]">
        
        {/* Logo */}
        <span className="text-xl font-bold tracking-tighter text-foreground">
          JM<span className="text-accent">.</span>
        </span>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-200 ${
                activeSection === link.href.substring(1)
                  ? "text-accent drop-shadow-[0_0_8px_rgba(216,17,89,0.4)]" // Glowing active state
                  : "text-foreground/70 hover:text-accent"
              }`}
            >
              {link.name}
            </a>
          ))}
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