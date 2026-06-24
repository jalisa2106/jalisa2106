"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Contributions", href: "#contributions" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 3.5 }} // Delays navbar appearance until preloader finishes
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-6"
    >
      <div className="flex items-center justify-between w-full max-w-2xl px-6 py-3 bg-card/60 backdrop-blur-md border border-[#ffb3c6]/40 dark:border-accent/20 rounded-full shadow-[0_8px_30px_rgb(255,179,198,0.3)] dark:shadow-[0_8px_30px_rgba(255,128,171,0.1)]">
        
        {/* Logo */}
        <span className="text-xl font-bold tracking-tighter text-foreground drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
          JM<span className="text-accent dark:drop-shadow-[0_0_8px_rgba(255,128,171,0.8)]">.</span>
        </span>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-200 ${
                activeSection === link.href.substring(1)
                  ? "text-accent drop-shadow-[0_0_8px_rgba(216,17,89,0.4)] dark:drop-shadow-[0_0_10px_rgba(255,128,171,0.8)]"
                  : "text-foreground/70 hover:text-accent dark:hover:drop-shadow-[0_0_5px_rgba(255,128,171,0.5)]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/jalisa2106" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-accent dark:hover:drop-shadow-[0_0_5px_rgba(255,128,171,0.5)] transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/jalisa-malik-8b0308333?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-accent dark:hover:drop-shadow-[0_0_5px_rgba(255,128,171,0.5)] transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:jalisamalik21@email.com" className="text-foreground/70 hover:text-accent dark:hover:drop-shadow-[0_0_5px_rgba(255,128,171,0.5)] transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;